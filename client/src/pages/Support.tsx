import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect, useCallback } from "react";
import { Streamdown } from "streamdown";
import supportContentData from "@/lib/supportContent.json";

// Helper to calculate sticky header height dynamically
const getStickyHeaderHeight = () => {
  // 1. Get main nav height (usually 64px)
  const nav = document.querySelector('nav');
  const navHeight = nav ? nav.getBoundingClientRect().height : 64;

  // 2. Get TOC nav height using specific ID
  const toc = document.getElementById('support-toc');
  const tocHeight = toc ? toc.getBoundingClientRect().height : 0;

  // 3. Calculate total offset assuming stacking behavior
  // Force a minimum effective height for the TOC to prevent under-scrolling
  const effectiveTocHeight = tocHeight > 60 ? tocHeight : 68;

  const total = navHeight + effectiveTocHeight + 20;
  // Enforce a strict minimum of 160px to guarantee visibility
  return Math.max(total, 160);
};

export default function Support() {
  const { t, language } = useLanguage();
  const [activeSection, setActiveSection] = useState<string>("");

  // Get sections based on current language
  const sections = supportContentData[language] || supportContentData.en;

  useEffect(() => {
    // Set first section as active by default
    if (sections.length > 0 && !activeSection) {
      setActiveSection(sections[0].id);
    }
  }, [sections, activeSection]);





  const scrollToSection = useCallback((sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const performScroll = (behavior: ScrollBehavior) => {
        const offset = getStickyHeaderHeight();
        const elementPosition = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: elementPosition - offset,
          behavior: behavior
        });
      };

      // Perform initial scroll smoothly
      performScroll("smooth");

      // Perform correction scroll instantly after delay to snap to correct position
      setTimeout(() => performScroll("auto"), 350);
    }

    // Update URL without triggering default browser scroll behavior
    history.pushState(null, "", `#${sectionId}`);
  }, []);

  useEffect(() => {
    // Handle hash navigation
    const hash = window.location.hash.slice(1);
    if (hash) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [scrollToSection]);

  // Intercept anchor link clicks in content and route through scrollToSection
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        const sectionId = anchor.hash.slice(1);
        // Check if this section exists in our content
        if (sections.some(s => s.id === sectionId)) {
          e.preventDefault();
          scrollToSection(sectionId);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, [sections, scrollToSection]);

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 bg-gradient-to-b from-primary/5 to-background">
          <div className="container">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2" size={16} />
                {t("support_back")}
              </Button>
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              <span style={{ fontFamily: "'Zen Dots', cursive", color: '#FF4D00' }}>MadnessBot</span> {t("support_title")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("support_subtitle")}
            </p>
          </div>
        </section>

        {/* Table of Contents Navigation */}
        <section id="support-toc" className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4">
          <div className="container">
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={activeSection === section.id ? "default" : "outline"}
                  size="sm"
                  onClick={() => scrollToSection(section.id)}
                  className="whitespace-nowrap flex-shrink-0"
                >
                  {section.title}
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <section className="py-12">
          <div className="container max-w-4xl">
            <div className="space-y-8">
              {sections.map((section) => (
                <Card key={section.id} id={section.id} className="scroll-mt-32">
                  <CardContent className="pt-6">
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      {section.title}
                    </h2>
                    <div className="prose prose-invert max-w-none 
                      [&_pre]:!bg-[#FAFAFA] [&_pre]:!text-[#171717]
                      [&_code]:!bg-[#F5F5F5] [&_code]:!text-[#404040]
                      [&_.sd-code-block]:!bg-[#FAFAFA]
                      [&_.sd-code-block_code]:!text-[#171717]
                    ">
                      <Streamdown>{section.content}</Streamdown>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
