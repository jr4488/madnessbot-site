import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { LanguageToggle } from "./LanguageToggle";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();
  const { t } = useLanguage();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/support", label: t("nav_support") },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location !== "/") {
      window.location.href = `/#${sectionId}`;
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              {/* MadnessBot Logo Icon */}
              <svg width="32" height="32" viewBox="0 0 100 100" fill="none">
                <rect x="5" y="5" width="90" height="90" rx="20" fill="#FF4D00"/>
                <path d="M58 18 L42 46 L52 46 L38 82 L62 48 L50 48 L66 18 Z" fill="#fff"/>
              </svg>
              <span className="text-xl font-bold" style={{ fontFamily: "'Zen Dots', cursive", color: '#FF4D00' }}>
                MadnessBot
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <LanguageToggle />
            <button
              onClick={() => scrollToSection("features")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav_features")}
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-foreground hover:text-primary transition-colors"
            >
              {t("nav_pricing")}
            </button>
            <Link href="/support">
              <span className="text-foreground hover:text-primary transition-colors cursor-pointer">
                {t("nav_support")}
              </span>
            </Link>
            <Button asChild>
              <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                {t("nav_try")}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            <LanguageToggle />
            <button
              className="p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                {t("nav_features")}
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-left text-foreground hover:text-primary transition-colors py-2"
              >
                {t("nav_pricing")}
              </button>
              <Link href="/support">
                <span className="text-foreground hover:text-primary transition-colors cursor-pointer block py-2">
                  {t("nav_support")}
                </span>
              </Link>
              <Button asChild className="w-full">
                <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                  {t("nav_try")}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
