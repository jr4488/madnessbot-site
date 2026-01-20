import { describe, expect, it } from "vitest";
import { initUmami, shouldLoadUmami } from "./analyticsGuard";

describe("shouldLoadUmami", () => {
  it("returns false for missing values", () => {
    expect(shouldLoadUmami(undefined, "id")).toBe(false);
    expect(shouldLoadUmami("https://example.com", undefined)).toBe(false);
  });

  it("returns false for Vite placeholders", () => {
    expect(
      shouldLoadUmami("%VITE_ANALYTICS_ENDPOINT%", "site-id")
    ).toBe(false);
    expect(
      shouldLoadUmami("https://example.com", "%VITE_ANALYTICS_WEBSITE_ID%")
    ).toBe(false);
  });

  it("returns true for configured values", () => {
    expect(
      shouldLoadUmami("https://example.com", "site-id")
    ).toBe(true);
  });
});

describe("initUmami", () => {
  it("appends a script when configured", () => {
    const doc = document.implementation.createHTMLDocument("test");

    initUmami({
      endpoint: "https://analytics.example.com/",
      websiteId: "site-123",
      doc,
    });

    const script = doc.querySelector("script[data-website-id='site-123']");
    expect(script).not.toBeNull();
    expect(script?.getAttribute("src")).toBe(
      "https://analytics.example.com/umami"
    );
  });

  it("skips appending a script for placeholders", () => {
    const doc = document.implementation.createHTMLDocument("test");

    initUmami({
      endpoint: "%VITE_ANALYTICS_ENDPOINT%",
      websiteId: "%VITE_ANALYTICS_WEBSITE_ID%",
      doc,
    });

    expect(doc.querySelector("script")).toBeNull();
  });
});
