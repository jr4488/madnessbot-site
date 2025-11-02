import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { CheckCircle2 } from "lucide-react";

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO />
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background" />
          <div className="container relative">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center mb-6">
              {t("hero_title_1")}
              <span className="text-primary" style={{ fontFamily: "'Zen Dots', cursive" }}>
                {t("hero_title_2")}
              </span>
              {t("hero_title_3")}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
              {t("hero_subtitle")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                  {t("hero_cta_primary")}
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8" asChild>
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
        <section id="features" className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span style={{ fontFamily: "'Zen Dots', cursive", color: '#f82525' }}>MadnessBot</span> {t("comp_title")}
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                {t("comp_subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {/* MadnessBot Column */}
              <Card className="border-primary shadow-lg shadow-primary/20">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl" style={{ fontFamily: "'Zen Dots', cursive", color: '#f22121' }}>
                    {t("comp_madness_title")}
                  </CardTitle>
                  <CardDescription className="text-base">{t("comp_madness_subtitle")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">{t("feat_parts_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("feat_parts_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">{t("feat_toolbox_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("feat_toolbox_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">{t("feat_knowledge_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("feat_knowledge_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">{t("feat_tsb_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("feat_tsb_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">{t("feat_memory_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("feat_memory_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">{t("feat_video_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("feat_video_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">{t("feat_image_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("feat_image_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">{t("feat_price_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("feat_price_desc")}</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* ChatGPT Column */}
              <Card className="border-muted-foreground/20">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl text-muted-foreground">{t("comp_chatgpt_title")}</CardTitle>
                  <CardDescription className="text-base">{t("comp_chatgpt_subtitle")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">{t("limit_parts_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("limit_parts_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">{t("limit_toolbox_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("limit_toolbox_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">{t("limit_knowledge_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("limit_knowledge_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">{t("limit_tsb_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("limit_tsb_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">{t("limit_memory_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("limit_memory_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">{t("limit_video_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("limit_video_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">{t("limit_image_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("limit_image_desc")}</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">{t("limit_price_title")}</span>
                        <p className="text-sm text-muted-foreground">{t("limit_price_desc")}</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-muted-foreground mt-12 max-w-3xl mx-auto">
              {t("comp_bottom_text")}
            </p>
            
            <div className="flex justify-center mt-8">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                  {t("comp_cta")} <span className="ml-2">→</span>
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("pricing_title")}</h2>
              <p className="text-xl text-muted-foreground">{t("pricing_subtitle")}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Trial Plan */}
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{t("pricing_trial_title")}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{t("pricing_trial_price")}</span>
                  </div>
                  <CardDescription className="mt-2">{t("pricing_trial_desc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_trial_feat1")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_trial_feat2")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_trial_feat3")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_trial_feat4")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_trial_feat5")}</span>
                    </li>
                  </ul>
                  <Button className="w-full" variant="outline" asChild>
                    <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                      {t("pricing_trial_cta")}
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Plan */}
              <Card className="border-primary shadow-lg relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    {t("pricing_popular")}
                  </span>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">{t("pricing_premium_title")}</CardTitle>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">{t("pricing_premium_price")}</span>
                    <span className="text-muted-foreground">{t("pricing_premium_period")}</span>
                  </div>
                  <CardDescription className="mt-2">{t("pricing_premium_desc")}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_premium_feat1")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_premium_feat2")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_premium_feat3")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_premium_feat4")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_premium_feat5")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_premium_feat6")}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="text-primary" size={20} />
                      <span>{t("pricing_premium_feat7")}</span>
                    </li>
                  </ul>
                  <Button className="w-full" asChild>
                    <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                      {t("pricing_premium_cta")}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
          <div className="container text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">{t("cta_title")}</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              {t("cta_subtitle")}
            </p>
            <Button size="lg" asChild className="text-lg px-8">
              <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                {t("cta_button")} <span className="ml-2">→</span>
              </a>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">{t("cta_note")}</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
