import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";
import { trackConversion } from "@/lib/analytics";

// MadnessBot M-Bolt Logo SVG Component
const MBoltLogo = ({ className = "", size = 20 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M5 92 L5 25 L18 25 L18 55 L32 25 L50 70 L68 25 L82 25 L82 55 L95 25 L95 92 L75 92 L75 50 L60 85 L50 60 L40 85 L25 50 L25 92 Z" fill="currentColor" />
  </svg>
);

// Subtle background pattern - clean, no spark particles per style guide v3
const BackgroundPattern = () => (
  <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 400 200" fill="none" preserveAspectRatio="xMidYMid slice">
    <circle cx="50" cy="30" r="20" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="350" cy="170" r="25" stroke="currentColor" strokeWidth="1" fill="none" />
    <circle cx="200" cy="100" r="40" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5" />
  </svg>
);

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF4D00]/5 via-background to-background" />
          <BackgroundPattern />
          <div className="container relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
              {t("hero_title_1")}
              <span style={{ fontFamily: "'Zen Dots', cursive", color: '#FF4D00' }}>
                {t("hero_title_2")}
              </span>
              {t("hero_title_3")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
              {t("hero_subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8 btn-glow bg-[#FF4D00] hover:bg-[#E64500]">
                <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('signUp')}>
                  {t("hero_cta_primary")}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-[#2A2A3A] hover:bg-[#1A1A25]" asChild>
                <a href="#features">
                  {t("hero_cta_secondary")}
                </a>
              </Button>
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              {t("hero_note")}
            </p>
          </div>
        </section>

        {/* Comparison Section */}
        <section id="features" className="py-20 bg-[#111118]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span style={{ fontFamily: "'Zen Dots', cursive", color: '#FF4D00' }}>MadnessBot</span> {t("comp_title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("comp_subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* MadnessBot Column */}
              <Card className="border-[#FF4D00] shadow-lg bg-[#111118]" style={{ boxShadow: '0 0 30px rgba(255,77,0,0.2)' }}>
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl" style={{ fontFamily: "'Zen Dots', cursive", color: '#FF4D00' }}>
                    {t("comp_madness_title")}
                  </CardTitle>
                  <CardDescription className="text-base text-[#A3A3A3]">{t("comp_madness_subtitle")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      { title: "feat_parts_title", desc: "feat_parts_desc" },
                      { title: "feat_toolbox_title", desc: "feat_toolbox_desc" },
                      { title: "feat_knowledge_title", desc: "feat_knowledge_desc" },
                      { title: "feat_tsb_title", desc: "feat_tsb_desc" },
                      { title: "feat_memory_title", desc: "feat_memory_desc" },
                      { title: "feat_video_title", desc: "feat_video_desc" },
                      { title: "feat_image_title", desc: "feat_image_desc" },
                      { title: "feat_growth_title", desc: "feat_growth_desc" },
                      { title: "feat_price_title", desc: "feat_price_desc" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle2 className="text-[#FF4D00] mt-1 flex-shrink-0" size={20} />
                        <div>
                          <span className="font-semibold text-[#F5F5F5]">{t(item.title as any)}</span>
                          <p className="text-sm text-[#A3A3A3]">{t(item.desc as any)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* ChatGPT Column */}
              <Card className="border-[#2A2A3A] bg-[#111118]">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-[#737373]">{t("comp_chatgpt_title")}</CardTitle>
                  <CardDescription className="text-base text-[#737373]">{t("comp_chatgpt_subtitle")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      { title: "limit_parts_title", desc: "limit_parts_desc" },
                      { title: "limit_toolbox_title", desc: "limit_toolbox_desc" },
                      { title: "limit_knowledge_title", desc: "limit_knowledge_desc" },
                      { title: "limit_tsb_title", desc: "limit_tsb_desc" },
                      { title: "limit_memory_title", desc: "limit_memory_desc" },
                      { title: "limit_video_title", desc: "limit_video_desc" },
                      { title: "limit_image_title", desc: "limit_image_desc" },
                      { title: "limit_growth_title", desc: "limit_growth_desc" },
                      { title: "limit_price_title", desc: "limit_price_desc" },
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-[#3A3A4A]" />
                        <div>
                          <span className="font-semibold text-[#737373]">{t(item.title as any)}</span>
                          <p className="text-sm text-[#4A4A5A]">{t(item.desc as any)}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-[#A3A3A3] mt-12 max-w-3xl mx-auto">
              {t("comp_bottom_text")}
            </p>

            <div className="flex justify-center mt-8">
              <Button size="lg" asChild className="text-lg px-8 btn-glow bg-[#FF4D00] hover:bg-[#E64500]">
                <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('signUp')}>
                  {t("comp_cta")} <span className="ml-2">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-[#0A0A0F]">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#F5F5F5]">{t("pricing_title")}</h2>
              <p className="text-xl text-[#A3A3A3]">{t("pricing_subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* DIY Plan */}
              <Card className="bg-[#111118] border-[#2A2A3A]">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-[#F5F5F5]">{t("pricing_diy_title")}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#F5F5F5]">{t("pricing_diy_price")}</span>
                    <span className="text-[#A3A3A3]">{t("pricing_diy_period")}</span>
                  </div>
                  <CardDescription className="mt-2 text-[#737373]">{t("pricing_diy_desc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {["pricing_diy_feat1", "pricing_diy_feat2", "pricing_diy_feat3", "pricing_diy_feat4"].map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#FF4D00]" size={20} />
                        <span className="text-[#D4D4D4]">{t(feat as any)}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full border-[#2A2A3A] text-[#D4D4D4] hover:bg-[#1A1A25]" variant="outline" asChild>
                    <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('purchaseDiy')}>
                      {t("pricing_diy_cta")}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Pro Plan */}
              <Card className="border-[#FF4D00] bg-[#111118] relative transform md:-translate-y-4" style={{ boxShadow: '0 0 30px rgba(255,77,0,0.2)' }}>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#FF4D00] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {t("pricing_popular")}
                  </span>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-[#F5F5F5]">{t("pricing_pro_title")}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold text-[#F5F5F5]">{t("pricing_pro_price")}</span>
                    <span className="text-[#A3A3A3]">{t("pricing_pro_period")}</span>
                  </div>
                  <CardDescription className="mt-2 text-[#737373]">{t("pricing_pro_desc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {["pricing_pro_feat1", "pricing_pro_feat2", "pricing_pro_feat3", "pricing_pro_feat4", "pricing_pro_feat5"].map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#FF4D00]" size={20} />
                        <span className="text-[#D4D4D4]">{t(feat as any)}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full btn-glow bg-[#FF4D00] hover:bg-[#E64500] text-white" size="lg" asChild>
                    <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('purchasePro')}>
                      {t("pricing_pro_cta")}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Enterprise Plan */}
              <Card className="bg-[#111118] border-[#2A2A3A]">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-[#F5F5F5]">{t("pricing_ent_title")}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-[#F5F5F5]">{t("pricing_ent_price")}</span>
                    {t("pricing_ent_period") && <span className="text-[#A3A3A3]">{t("pricing_ent_period")}</span>}
                  </div>
                  <CardDescription className="mt-2 text-[#737373]">{t("pricing_ent_desc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {["pricing_ent_feat1", "pricing_ent_feat2", "pricing_ent_feat3", "pricing_ent_feat4", "pricing_ent_feat5"].map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="text-[#FF4D00]" size={20} />
                        <span className="text-[#D4D4D4]">{t(feat as any)}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full border-[#2A2A3A] text-[#D4D4D4] hover:bg-[#1A1A25]" variant="outline" asChild>
                    <a href="mailto:sales@madnesstools.com" onClick={() => trackConversion('leadEnterprise')}>
                      {t("pricing_ent_cta")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#FF4D00]/10 via-[#0A0A0F] to-[#FF4D00]/5 relative overflow-hidden">
          <BackgroundPattern />
          <div className="container text-center relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#F5F5F5]">{t("cta_title")}</h2>
            <p className="text-xl text-[#A3A3A3] mb-8 max-w-2xl mx-auto">
              {t("cta_subtitle")}
            </p>
            <Button size="lg" asChild className="text-lg px-8 btn-glow bg-[#FF4D00] hover:bg-[#E64500] text-white">
              <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer" onClick={() => trackConversion('signUp')}>
                {t("cta_button")} <span className="ml-2">→</span>
              </a>
            </Button>
            <p className="text-sm text-[#737373] mt-4">{t("cta_note")}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
