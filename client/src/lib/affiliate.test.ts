import { beforeEach, describe, expect, it } from "vitest";
import { appendAffiliateParams, appendViaParam, rewriteMadnessToolsLinks } from "./affiliate";

describe("appendAffiliateParams", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
    window.localStorage.clear();
  });

  it("returns original path when no affiliate params exist", () => {
    expect(appendAffiliateParams("/support")).toBe("/support");
  });

  it("appends via when present", () => {
    window.history.replaceState(null, "", "/?via=alpha");
    expect(appendAffiliateParams("/support")).toBe("/support?via=alpha");
  });

  it("appends referral when present", () => {
    window.history.replaceState(null, "", "/?referral=beta");
    expect(appendAffiliateParams("/support")).toBe("/support?referral=beta");
  });

  it("preserves hash and appends both params", () => {
    window.history.replaceState(null, "", "/?via=alpha&referral=beta");
    expect(appendAffiliateParams("/#features")).toBe(
      "/?via=alpha&referral=beta#features"
    );
  });

  it("does not override existing params on the path", () => {
    window.history.replaceState(null, "", "/?via=alpha&referral=beta");
    expect(appendAffiliateParams("/support?via=existing")).toBe(
      "/support?via=existing&referral=beta"
    );
  });

  it("falls back to stored params when query is empty", () => {
    window.localStorage.setItem("rewardful_via", "storedvia");
    window.localStorage.setItem("rewardful_referral_ts", String(Date.now()));
    expect(appendAffiliateParams("/support")).toBe("/support?via=storedvia");
  });

  it("ignores expired stored params", () => {
    const ninetyDaysAgo = Date.now() - 1000 * 60 * 60 * 24 * 90;
    window.localStorage.setItem("rewardful_via", "expiredvia");
    window.localStorage.setItem("rewardful_referral_ts", String(ninetyDaysAgo));
    expect(appendAffiliateParams("/support")).toBe("/support");
  });
});

describe("appendViaParam", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
    window.localStorage.clear();
  });

  it("prefers via from current query", () => {
    window.history.replaceState(null, "", "/?via=alpha");
    expect(appendViaParam("https://example.com")).toBe(
      "https://example.com/?via=alpha"
    );
  });

  it("falls back to referral when via is missing", () => {
    window.history.replaceState(null, "", "/?referral=beta");
    expect(appendViaParam("https://example.com")).toBe(
      "https://example.com/?via=beta"
    );
  });

  it("does not override an existing via param", () => {
    window.history.replaceState(null, "", "/?via=alpha");
    expect(appendViaParam("https://example.com/?via=existing")).toBe(
      "https://example.com/?via=existing"
    );
  });

  it("uses stored params when query is empty", () => {
    window.localStorage.setItem("rewardful_via", "storedvia");
    window.localStorage.setItem("rewardful_referral_ts", String(Date.now()));
    expect(appendViaParam("https://example.com")).toBe(
      "https://example.com/?via=storedvia"
    );
  });
});

describe("rewriteMadnessToolsLinks", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
    window.localStorage.clear();
    document.body.innerHTML = "";
  });

  it("appends via param to madnesstools.com anchors", () => {
    window.history.replaceState(null, "", "/?via=alpha");
    document.body.innerHTML = '<a id="target" href="https://madnesstools.com">Go</a>';
    const updated = rewriteMadnessToolsLinks(document);
    const anchor = document.getElementById("target") as HTMLAnchorElement;
    expect(anchor.href).toBe("https://madnesstools.com/?via=alpha");
    expect(updated).toBe(1);
  });

  it("ignores non-madnesstools links", () => {
    window.history.replaceState(null, "", "/?via=alpha");
    document.body.innerHTML = '<a id="target" href="https://example.com">Go</a>';
    const updated = rewriteMadnessToolsLinks(document);
    const anchor = document.getElementById("target") as HTMLAnchorElement;
    expect(anchor.href).toBe("https://example.com/");
    expect(updated).toBe(0);
  });
});
