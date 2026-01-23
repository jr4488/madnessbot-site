import { beforeEach, describe, expect, it } from "vitest";
import { appendAffiliateParams, appendViaParam } from "./affiliate";

describe("appendAffiliateParams", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
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
});

describe("appendViaParam", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
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
});
