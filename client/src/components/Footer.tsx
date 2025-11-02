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
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "'Zen Dots', cursive", color: '#f52424' }}>
              MadnessBot
            </h3>
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
