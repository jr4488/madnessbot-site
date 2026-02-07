type AffiliateParams = {
  via?: string;
  referral?: string;
};

const AFFILIATE_TTL_MS = 1000 * 60 * 60 * 24 * 60;
const STORAGE_KEYS = {
  via: "rewardful_via",
  referral: "rewardful_referral",
  ts: "rewardful_referral_ts",
};

function readStoredParams(): AffiliateParams {
  try {
    if (typeof window === "undefined") {
      return {};
    }
    const via = window.localStorage.getItem(STORAGE_KEYS.via) || undefined;
    const referral =
      window.localStorage.getItem(STORAGE_KEYS.referral) || undefined;
    if (!via && !referral) {
      return {};
    }
    const tsRaw = window.localStorage.getItem(STORAGE_KEYS.ts);
    if (tsRaw) {
      const ts = Number(tsRaw);
      if (Number.isFinite(ts) && Date.now() - ts > AFFILIATE_TTL_MS) {
        window.localStorage.removeItem(STORAGE_KEYS.via);
        window.localStorage.removeItem(STORAGE_KEYS.referral);
        window.localStorage.removeItem(STORAGE_KEYS.ts);
        return {};
      }
    } else {
      window.localStorage.setItem(STORAGE_KEYS.ts, String(Date.now()));
    }
    return { via, referral };
  } catch {
    return {};
  }
}

function storeParams(params: AffiliateParams) {
  try {
    if (typeof window === "undefined") {
      return;
    }
    const { via, referral } = params;
    if (!via && !referral) {
      return;
    }
    if (via) {
      window.localStorage.setItem(STORAGE_KEYS.via, via);
    } else {
      window.localStorage.removeItem(STORAGE_KEYS.via);
    }
    if (referral) {
      window.localStorage.setItem(STORAGE_KEYS.referral, referral);
    } else {
      window.localStorage.removeItem(STORAGE_KEYS.referral);
    }
    window.localStorage.setItem(STORAGE_KEYS.ts, String(Date.now()));
  } catch {
    return;
  }
}

function getAffiliateParams(search?: string): AffiliateParams {
  try {
    const query =
      search ?? (typeof window !== "undefined" ? window.location.search : "");
    if (!query) {
      return readStoredParams();
    }

    const params = new URLSearchParams(query);
    const via = params.get("via") || undefined;
    const referral = params.get("referral") || undefined;
    if (!via && !referral) {
      return readStoredParams();
    }
    const next = { via, referral };
    storeParams(next);
    return next;
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

function isMadnessToolsUrl(href: string): boolean {
  try {
    const url = new URL(href, window.location.origin);
    if (url.protocol !== "http:" && url.protocol !== "https:") {
      return false;
    }
    return url.hostname.endsWith("madnesstools.com");
  } catch {
    return false;
  }
}

function appendViaIfMadnessTools(url: string, search?: string): string {
  if (typeof window === "undefined") {
    return url;
  }
  if (!isMadnessToolsUrl(url)) {
    return url;
  }
  return appendViaParam(url, search);
}

export function rewriteMadnessToolsLinks(
  root: ParentNode = document,
  search?: string
): number {
  if (typeof window === "undefined") {
    return 0;
  }
  let updated = 0;
  root.querySelectorAll("a[href]").forEach((link) => {
    if (!(link instanceof HTMLAnchorElement)) {
      return;
    }
    const rawHref = link.getAttribute("href");
    if (!rawHref || !isMadnessToolsUrl(rawHref)) {
      return;
    }
    const absoluteHref = new URL(rawHref, window.location.origin).toString();
    const nextHref = appendViaIfMadnessTools(absoluteHref, search);
    if (nextHref !== link.href) {
      link.href = nextHref;
      updated += 1;
    }
  });
  return updated;
}

export function wrapOutboundNavigation(search?: string): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const rawOpen = window.open?.bind(window);
  const rawAssign = window.location.assign.bind(window.location);
  const rawReplace = window.location.replace.bind(window.location);
  let patchedOpen = false;
  let patchedAssign = false;
  let patchedReplace = false;

  if (rawOpen) {
    try {
      window.open = (url?: string | URL, target?: string, features?: string) => {
        if (typeof url === "string" || url instanceof URL) {
          const next = appendViaIfMadnessTools(String(url), search);
          return rawOpen(next, target, features);
        }
        // `window.open` accepts `undefined` and will open a blank window.
        return rawOpen(url, target, features);
      };
      patchedOpen = true;
    } catch {
      // Some browsers disallow overriding window.open.
    }
  }

  try {
    window.location.assign = (url: string | URL) => {
      const next = appendViaIfMadnessTools(String(url), search);
      return rawAssign(next);
    };
    patchedAssign = true;
  } catch {
    // Some browsers treat location.assign as read-only.
  }

  try {
    window.location.replace = (url: string | URL) => {
      const next = appendViaIfMadnessTools(String(url), search);
      return rawReplace(next);
    };
    patchedReplace = true;
  } catch {
    // Some browsers treat location.replace as read-only.
  }

  return () => {
    if (patchedOpen && rawOpen) {
      try {
        window.open = rawOpen;
      } catch {
        return;
      }
    }
    if (patchedAssign) {
      try {
        window.location.assign = rawAssign;
      } catch {
        return;
      }
    }
    if (patchedReplace) {
      try {
        window.location.replace = rawReplace;
      } catch {
        return;
      }
    }
  };
}

function startAffiliateClickCapture(search?: string): () => void {
  if (typeof window === "undefined") {
    return () => {};
  }

  const handler = (event: MouseEvent) => {
    const target = event.target as Element | null;
    if (!target) {
      return;
    }
    const anchor = target.closest("a[href]") as HTMLAnchorElement | null;
    if (!anchor || !isMadnessToolsUrl(anchor.href)) {
      return;
    }
    const nextHref = appendViaIfMadnessTools(anchor.href, search);
    if (nextHref !== anchor.href) {
      anchor.href = nextHref;
    }
  };

  window.addEventListener("click", handler, true);
  window.addEventListener("auxclick", handler, true);

  return () => {
    window.removeEventListener("click", handler, true);
    window.removeEventListener("auxclick", handler, true);
  };
}

export function startAffiliateLinkRewriter(search?: string): () => void {
  if (typeof window === "undefined" || !document?.body) {
    return () => {};
  }

  let rafId = 0;
  const stopNavigation = wrapOutboundNavigation(search);
  const stopClickCapture = startAffiliateClickCapture(search);
  const schedule = () => {
    if (rafId) {
      return;
    }
    rafId = window.requestAnimationFrame(() => {
      rafId = 0;
      rewriteMadnessToolsLinks(document, search);
    });
  };

  rewriteMadnessToolsLinks(document, search);
  const observer = new MutationObserver(schedule);
  observer.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    if (rafId) {
      window.cancelAnimationFrame(rafId);
    }
    stopClickCapture();
    stopNavigation();
  };
}
