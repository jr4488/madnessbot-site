import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  GA4_MEASUREMENT_ID,
  buildPageViewPayload,
  trackPageView,
} from "./analytics";

describe("buildPageViewPayload", () => {
  it("removes affiliate params and hash fragments", () => {
    expect(
      buildPageViewPayload(
        "https://madnessbot.com/support?via=alpha&referral=beta#install"
      )
    ).toEqual({
      pageLocation: "https://madnessbot.com/support",
      pagePath: "/support",
    });
  });

  it("keeps non-affiliate query parameters for analytics attribution", () => {
    expect(
      buildPageViewPayload(
        "https://madnessbot.com/?utm_source=google&via=alpha"
      )
    ).toEqual({
      pageLocation: "https://madnessbot.com/?utm_source=google",
      pagePath: "/?utm_source=google",
    });
  });
});

describe("trackPageView", () => {
  beforeEach(() => {
    document.title = "MadnessBot Support";
  });

  it("returns false when gtag is unavailable", () => {
    delete window.gtag;
    expect(trackPageView("https://madnessbot.com/support")).toBe(false);
  });

  it("sends a GA4 config call with the sanitized page metadata", () => {
    const gtag = vi.fn();
    window.gtag = gtag;

    expect(
      trackPageView("https://madnessbot.com/support?via=alpha#install")
    ).toBe(true);

    expect(gtag).toHaveBeenCalledWith("config", GA4_MEASUREMENT_ID, {
      page_location: "https://madnessbot.com/support",
      page_path: "/support",
      page_title: "MadnessBot Support",
    });
  });
});
