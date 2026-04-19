import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  url?: string;
  type?: string;
  image?: string;
  noindex?: boolean;
  lang?: string;
}

const SITE_URL = "https://madnessbot.com";
const DEFAULT_TITLE =
  "MadnessBot | AI Master Mechanic for Diagnostics, Parts, and Repair Shops";
const DEFAULT_DESCRIPTION =
  "MadnessBot helps mechanics and automotive repair shops diagnose problems faster, source parts, manage tools, and access shop-ready AI support.";
const DEFAULT_IMAGE = `${SITE_URL}/og-card.svg`;
const TRACKING_QUERY_PARAMS = ["via", "referral"];

function getCanonicalUrl(url?: string) {
  const source =
    url ?? (typeof window !== "undefined" ? window.location.href : SITE_URL);
  const canonical = new URL(source, SITE_URL);

  canonical.hash = "";
  for (const key of TRACKING_QUERY_PARAMS) {
    canonical.searchParams.delete(key);
  }

  if (canonical.pathname !== "/") {
    canonical.pathname = canonical.pathname.replace(/\/+$/, "");
  }

  return canonical.toString();
}

export default function SEO({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  url,
  type = "website",
  image = DEFAULT_IMAGE,
  noindex = false,
  lang,
}: SEOProps) {
  useEffect(() => {
    const canonicalUrl = getCanonicalUrl(url);

    // Update document title
    document.title = title;
    if (lang) {
      document.documentElement.lang = lang;
    }

    const ensureMetaTag = (attribute: "name" | "property", key: string, content: string) => {
      let element = document.querySelector(
        `meta[${attribute}="${key}"]`
      ) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    const ensureLinkTag = (rel: string, href: string) => {
      let element = document.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement | null;
      if (!element) {
        element = document.createElement("link");
        element.setAttribute("rel", rel);
        document.head.appendChild(element);
      }
      element.setAttribute("href", href);
    };

    // Standard meta description
    ensureMetaTag("name", "description", description);
    ensureMetaTag(
      "name",
      "robots",
      noindex ? "noindex, nofollow" : "index, follow, max-image-preview:large"
    );

    // Open Graph tags
    ensureMetaTag("property", "og:title", title);
    ensureMetaTag("property", "og:description", description);
    ensureMetaTag("property", "og:url", canonicalUrl);
    ensureMetaTag("property", "og:type", type);
    ensureMetaTag("property", "og:site_name", "MadnessBot");
    ensureMetaTag("property", "og:image", image);
    ensureMetaTag("property", "og:image:alt", "MadnessBot");

    // Twitter Card tags
    ensureMetaTag("name", "twitter:card", "summary_large_image");
    ensureMetaTag("name", "twitter:title", title);
    ensureMetaTag("name", "twitter:description", description);
    ensureMetaTag("name", "twitter:image", image);
    ensureMetaTag("name", "twitter:image:alt", "MadnessBot");

    ensureLinkTag("canonical", canonicalUrl);

    // Keep runtime schema lightweight; route entry HTML carries the full static schema.
    const structuredData = {
      "@context": "https://schema.org",
      "@type": canonicalUrl === `${SITE_URL}/` ? "WebSite" : "WebPage",
      "@id": `${canonicalUrl}#page`,
      "name": title,
      "description": description,
      "url": canonicalUrl,
      "isPartOf": {
        "@id": `${SITE_URL}/#website`,
      },
    };

    let scriptTag = document.querySelector(
      'script[data-seo-json-ld="page"]'
    ) as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.setAttribute("data-seo-json-ld", "page");
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, [title, description, url, type, image, noindex, lang]);

  return null;
}
