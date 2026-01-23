type AffiliateParams = {
  via?: string;
  referral?: string;
};

function getAffiliateParams(search?: string): AffiliateParams {
  try {
    const query =
      search ?? (typeof window !== "undefined" ? window.location.search : "");
    if (!query) {
      return {};
    }

    const params = new URLSearchParams(query);
    const via = params.get("via") || undefined;
    const referral = params.get("referral") || undefined;
    if (!via && !referral) {
      return {};
    }
    return { via, referral };
  } catch {
    return {};
  }
}

export function appendViaParam(url: string, search?: string): string {
  try {
    const { via, referral } = getAffiliateParams(search);
    const value = via ?? referral;
    if (!value) {
      return url;
    }

    const destination = new URL(url);
    if (!destination.searchParams.get("via")) {
      destination.searchParams.set("via", value);
    }
    return destination.toString();
  } catch {
    return url;
  }
}

export function appendAffiliateParams(path: string, search?: string): string {
  try {
    const { via, referral } = getAffiliateParams(search);
    if (!via && !referral) {
      return path;
    }

    const base =
      typeof window !== "undefined" ? window.location.origin : "http://local";
    const destination = new URL(path, base);
    if (via && !destination.searchParams.get("via")) {
      destination.searchParams.set("via", via);
    }
    if (referral && !destination.searchParams.get("referral")) {
      destination.searchParams.set("referral", referral);
    }
    return `${destination.pathname}${destination.search}${destination.hash}`;
  } catch {
    return path;
  }
}
