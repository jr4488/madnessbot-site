const VITE_PLACEHOLDER_RE = /^%VITE_[A-Z0-9_]+%$/;

export function shouldLoadUmami(
  endpoint: string | undefined,
  websiteId: string | undefined
) {
  if (!endpoint || !websiteId) {
    return false;
  }

  if (VITE_PLACEHOLDER_RE.test(endpoint) || VITE_PLACEHOLDER_RE.test(websiteId)) {
    return false;
  }

  return true;
}

type InitUmamiOptions = {
  endpoint?: string;
  websiteId?: string;
  doc?: Document;
};

export function initUmami(options: InitUmamiOptions = {}) {
  if (typeof document === "undefined") {
    return;
  }

  const endpoint = options.endpoint ?? import.meta.env.VITE_ANALYTICS_ENDPOINT;
  const websiteId =
    options.websiteId ?? import.meta.env.VITE_ANALYTICS_WEBSITE_ID;

  if (!shouldLoadUmami(endpoint, websiteId)) {
    return;
  }

  const doc = options.doc ?? document;
  const script = doc.createElement("script");
  script.defer = true;
  script.src = endpoint.replace(/\/$/, "") + "/umami";
  script.setAttribute("data-website-id", websiteId);
  doc.body.appendChild(script);
}
