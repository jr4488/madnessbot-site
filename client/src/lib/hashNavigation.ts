export type HashHistoryMode = "push" | "replace";

export function updateHashHistory(
  sectionId: string,
  mode: HashHistoryMode = "push"
) {
  if (typeof window === "undefined") {
    return;
  }

  const nextHash = `#${sectionId}`;
  const currentHash = window.location.hash;

  if (currentHash === nextHash) {
    if (mode === "replace") {
      window.history.replaceState(null, "", nextHash);
    }
    return;
  }

  if (mode === "replace") {
    window.history.replaceState(null, "", nextHash);
  } else {
    window.history.pushState(null, "", nextHash);
  }
}
