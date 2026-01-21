export function appendViaParam(url: string, search?: string): string {
  try {
    const query =
      search ?? (typeof window !== "undefined" ? window.location.search : "");
    if (!query) {
      return url;
    }

    const params = new URLSearchParams(query);
    const via = params.get("via") || params.get("referral");
    if (!via) {
      return url;
    }

    const destination = new URL(url);
    if (!destination.searchParams.get("via")) {
      destination.searchParams.set("via", via);
    }
    return destination.toString();
  } catch {
    return url;
  }
}
