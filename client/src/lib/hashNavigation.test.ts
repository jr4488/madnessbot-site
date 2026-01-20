import { beforeEach, describe, expect, it, vi } from "vitest";
import { updateHashHistory } from "./hashNavigation";

describe("updateHashHistory", () => {
  beforeEach(() => {
    window.history.replaceState(null, "", "/");
    vi.restoreAllMocks();
  });

  it("pushes when hash changes", () => {
    const pushSpy = vi.spyOn(window.history, "pushState");
    updateHashHistory("features", "push");
    expect(pushSpy).toHaveBeenCalledWith(null, "", "#features");
  });

  it("replaces when mode is replace", () => {
    const replaceSpy = vi.spyOn(window.history, "replaceState");
    updateHashHistory("pricing", "replace");
    expect(replaceSpy).toHaveBeenCalledWith(null, "", "#pricing");
  });

  it("skips pushing when hash is unchanged", () => {
    window.location.hash = "#features";
    const pushSpy = vi.spyOn(window.history, "pushState");
    updateHashHistory("features", "push");
    expect(pushSpy).not.toHaveBeenCalled();
  });

  it("replaces when hash is unchanged and mode is replace", () => {
    window.location.hash = "#features";
    const replaceSpy = vi.spyOn(window.history, "replaceState");
    updateHashHistory("features", "replace");
    expect(replaceSpy).toHaveBeenCalledWith(null, "", "#features");
  });
});
