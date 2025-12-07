import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              {/* M-Bolt Logo */}
              <svg width="24" height="24" viewBox="0 0 100 100" fill="none">
                <path d="M5 92 L5 25 L18 25 L18 55 L32 25 L50 70 L68 25 L82 25 L82 55 L95 25 L95 92 L75 92 L75 50 L60 85 L50 60 L40 85 L25 50 L25 92 Z" fill="#FF4D00"/>
              </svg>
              <h3 className="text-xl font-bold text-[#F5F5F5]" style={{ fontFamily: "'Zen Dots', cursive" }}>
                MadnessBot
              </h3>
            </div>
            <p className="text-muted-foreground text-sm">
              {t("footer_desc")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer_quick_links")}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {t("footer_link_home")}
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <span className="text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    {t("footer_link_support")}
                  </span>
                </Link>
              </li>
              <li>
                <a
                  href="https://madnesstools.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t("footer_link_try")}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t("footer_get_started")}</h4>
            <p className="text-muted-foreground text-sm mb-4">
              {t("footer_get_started_desc")}
            </p>
            <a
              href="https://madnesstools.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity text-sm font-medium"
            >
              {t("footer_cta")}
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>{t("footer_copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
