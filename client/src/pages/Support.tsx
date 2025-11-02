import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { useState, useEffect } from "react";
import { Streamdown } from "streamdown";
import supportContentData from "@/lib/supportContent.json";

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

  useEffect(() => {
    // Handle hash navigation
    const hash = window.location.hash.slice(1);
    if (hash) {
      setActiveSection(hash);
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    window.location.hash = sectionId;
  };

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
              <span style={{ fontFamily: "'Zen Dots', cursive", color: '#f72b2b' }}>MadnessBot</span> {t("support_title")}
            </h1>
            <p className="text-xl text-muted-foreground">
              {t("support_subtitle")}
            </p>
          </div>
        </section>

        {/* Table of Contents Navigation */}
        <section className="sticky top-16 z-40 bg-background/95 backdrop-blur-sm border-b border-border py-4">
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
                    <div className="prose prose-invert max-w-none">
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
