import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { useLanguage } from "@/contexts/LanguageContext";
import { 
  ArrowLeft, 
  DollarSign, 
  Users, 
  TrendingUp, 
  Gift, 
  Download, 
  Copy, 
  CheckCircle2,
  Youtube,
  Instagram,
  MessageCircle,
  Wrench,
  Truck,
  Star,
  Zap,
  BarChart3,
  Clock,
  Shield
} from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

// MadnessBot M-Bolt Logo SVG Component
const MBoltLogo = ({ className = "", size = 100 }: { className?: string; size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none" className={className}>
    <path d="M5 92 L5 25 L18 25 L18 55 L32 25 L50 70 L68 25 L82 25 L82 55 L95 25 L95 92 L75 92 L75 50 L60 85 L50 60 L40 85 L25 50 L25 92 Z" fill="currentColor" />
  </svg>
);

// Banner Preview Component
const BannerPreview = ({ 
  width, 
  height, 
  variant, 
  label,
  copyText,
  copiedText,
  downloadText
}: { 
  width: number; 
  height: number; 
  variant: 'dark' | 'light' | 'orange';
  label: string;
  copyText: string;
  copiedText: string;
  downloadText: string;
}) => {
  const [copied, setCopied] = useState(false);
  
  const bgColors = {
    dark: 'bg-[#0A0A0F]',
    light: 'bg-[#F5F5F5]',
    orange: 'bg-gradient-to-r from-[#FF4D00] to-[#E64500]'
  };
  
  const textColors = {
    dark: 'text-[#F5F5F5]',
    light: 'text-[#0A0A0F]',
    orange: 'text-white'
  };

  const logoColors = {
    dark: 'text-[#FF4D00]',
    light: 'text-[#FF4D00]',
    orange: 'text-white'
  };

  const isVertical = height > width;
  const isSmall = width <= 300;
  
  const handleCopyCode = () => {
    const code = `<a href="https://madnesstools.com?via=YOUR_AFFILIATE_ID" target="_blank" rel="noopener">
  <img src="https://madnesstools.com/banners/madnessbot-${width}x${height}-${variant}.png" 
       alt="MadnessBot - AI Master Mechanic" 
       width="${width}" height="${height}" />
</a>`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-3">
      <div className="text-sm text-muted-foreground">{label} ({width}×{height})</div>
      <div 
        className={`${bgColors[variant]} ${textColors[variant]} rounded-lg overflow-hidden flex items-center justify-center border border-border`}
        style={{ 
          width: Math.min(width, 320), 
          height: Math.min(height, 250),
          aspectRatio: `${width}/${height}`
        }}
      >
        <div className={`flex ${isVertical ? 'flex-col' : 'flex-row'} items-center gap-2 p-3`}>
          <MBoltLogo size={isSmall ? 24 : 32} className={logoColors[variant]} />
          <div className={`${isVertical ? 'text-center' : 'text-left'}`}>
            <div className={`font-bold ${isSmall ? 'text-xs' : 'text-sm'}`} style={{ fontFamily: "'Zen Dots', cursive" }}>
              MadnessBot
            </div>
            <div className={`${isSmall ? 'text-[10px]' : 'text-xs'} opacity-80`}>
              AI Master Mechanic
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <Button size="sm" variant="outline" className="text-xs" onClick={handleCopyCode}>
          {copied ? <CheckCircle2 size={14} className="mr-1" /> : <Copy size={14} className="mr-1" />}
          {copied ? copiedText : copyText}
        </Button>
        <Button size="sm" variant="outline" className="text-xs">
          <Download size={14} className="mr-1" />
          {downloadText}
        </Button>
      </div>
    </div>
  );
};

// Social Media Card Component
const SocialCard = ({ 
  icon: Icon, 
  platform, 
  description, 
  tips 
}: { 
  icon: React.ElementType; 
  platform: string; 
  description: string;
  tips: string[];
}) => (
  <Card className="bg-[#111118] border-[#2A2A3A]">
    <CardHeader>
      <CardTitle className="flex items-center gap-3 text-xl">
        <div className="p-2 rounded-lg bg-[#FF4D00]/10">
          <Icon className="text-[#FF4D00]" size={24} />
        </div>
        {platform}
      </CardTitle>
      <CardDescription className="text-[#A3A3A3]">{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <ul className="space-y-2">
        {tips.map((tip, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-[#D4D4D4]">
            <CheckCircle2 className="text-[#FF4D00] mt-0.5 flex-shrink-0" size={16} />
            {tip}
          </li>
        ))}
      </ul>
    </CardContent>
  </Card>
);

export default function Affiliates() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title={`${t("aff_tab_overview")} - MadnessBot`}
        description={t("aff_hero_subtitle")}
      />
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FF4D00]/10 via-background to-background" />
          <div className="container relative">
            <Link href="/">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2" size={16} />
                {t("aff_back")}
              </Button>
            </Link>
            
            <div className="max-w-4xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4D00]/10 border border-[#FF4D00]/20 mb-6">
                <Star className="text-[#FF4D00]" size={16} />
                <span className="text-sm text-[#FF4D00] font-medium">{t("aff_badge")}</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                {t("aff_hero_title_1")}
                <span style={{ fontFamily: "'Zen Dots', cursive", color: '#FF4D00' }}>{t("aff_hero_title_2")}</span>
                {t("aff_hero_title_3")}
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8">
                {t("aff_hero_subtitle")}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Button size="lg" asChild className="text-lg px-8 btn-glow bg-[#FF4D00] hover:bg-[#E64500]">
                  <a href="https://anansi-portia-inc.getrewardful.com/signup" target="_blank" rel="noopener noreferrer">
                    {t("aff_cta_primary")}
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 border-[#2A2A3A] hover:bg-[#1A1A25]" asChild>
                  <a href="#program-details">
                    {t("aff_cta_secondary")}
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center p-4 rounded-xl bg-[#111118] border border-[#2A2A3A]">
                  <div className="text-3xl font-bold text-[#FF4D00]">20%</div>
                  <div className="text-sm text-muted-foreground">{t("aff_stat_commission")}</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-[#111118] border border-[#2A2A3A]">
                  <div className="text-3xl font-bold text-[#FF4D00]">{t("aff_stat_lifetime")}</div>
                  <div className="text-sm text-muted-foreground">{t("aff_stat_recurring")}</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-[#111118] border border-[#2A2A3A]">
                  <div className="text-3xl font-bold text-[#FF4D00]">60 Days</div>
                  <div className="text-sm text-muted-foreground">{t("aff_stat_cookie")}</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-[#111118] border border-[#2A2A3A]">
                  <div className="text-3xl font-bold text-[#FF4D00]">$50</div>
                  <div className="text-sm text-muted-foreground">{t("aff_stat_payout")}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Details Tabs */}
        <section id="program-details" className="py-20 bg-[#111118]">
          <div className="container">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2 bg-transparent h-auto p-0">
                <TabsTrigger 
                  value="overview" 
                  className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-[#1A1A25] border border-[#2A2A3A] py-3"
                >
                  <DollarSign size={18} className="mr-2" />
                  {t("aff_tab_overview")}
                </TabsTrigger>
                <TabsTrigger 
                  value="banners" 
                  className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-[#1A1A25] border border-[#2A2A3A] py-3"
                >
                  <Download size={18} className="mr-2" />
                  {t("aff_tab_banners")}
                </TabsTrigger>
                <TabsTrigger 
                  value="social" 
                  className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-[#1A1A25] border border-[#2A2A3A] py-3"
                >
                  <Users size={18} className="mr-2" />
                  {t("aff_tab_social")}
                </TabsTrigger>
                <TabsTrigger 
                  value="special" 
                  className="data-[state=active]:bg-[#FF4D00] data-[state=active]:text-white bg-[#1A1A25] border border-[#2A2A3A] py-3"
                >
                  <Truck size={18} className="mr-2" />
                  {t("aff_tab_special")}
                </TabsTrigger>
              </TabsList>

              {/* Overview Tab */}
              <TabsContent value="overview" className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#FF4D00]/10">
                          <TrendingUp className="text-[#FF4D00]" size={24} />
                        </div>
                        {t("aff_how_title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#FF4D00] flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                        <div>
                          <h4 className="font-semibold text-[#F5F5F5]">{t("aff_how_step1_title")}</h4>
                          <p className="text-sm text-[#A3A3A3]">{t("aff_how_step1_desc")}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#FF4D00] flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                        <div>
                          <h4 className="font-semibold text-[#F5F5F5]">{t("aff_how_step2_title")}</h4>
                          <p className="text-sm text-[#A3A3A3]">{t("aff_how_step2_desc")}</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-[#FF4D00] flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                        <div>
                          <h4 className="font-semibold text-[#F5F5F5]">{t("aff_how_step3_title")}</h4>
                          <p className="text-sm text-[#A3A3A3]">{t("aff_how_step3_desc")}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-[#FF4D00]/10">
                          <Gift className="text-[#FF4D00]" size={24} />
                        </div>
                        {t("aff_commission_title")}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 rounded-lg bg-[#1A1A25] border border-[#2A2A3A]">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[#A3A3A3]">{t("pricing_diy_title")} ($19.99/mo)</span>
                            <span className="text-[#FF4D00] font-bold">$4.00/mo</span>
                          </div>
                          <div className="text-xs text-[#737373]">{t("aff_commission_per_customer")}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-[#1A1A25] border border-[#FF4D00]" style={{ boxShadow: '0 0 20px rgba(255,77,0,0.15)' }}>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[#F5F5F5] font-medium">{t("pricing_pro_title")} ($49.99/mo)</span>
                            <span className="text-[#FF4D00] font-bold">$10.00/mo</span>
                          </div>
                          <div className="text-xs text-[#737373]">{t("aff_commission_per_customer")}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-[#1A1A25] border border-[#2A2A3A]">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-[#A3A3A3]">{t("pricing_ent_title")} ($199.95/mo)</span>
                            <span className="text-[#FF4D00] font-bold">$40.00/mo</span>
                          </div>
                          <div className="text-xs text-[#737373]">{t("aff_commission_per_customer")}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Benefits */}
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-6 rounded-xl bg-[#0A0A0F] border border-[#2A2A3A]">
                    <Clock className="text-[#FF4D00] mb-4" size={32} />
                    <h3 className="font-semibold text-lg mb-2">{t("aff_benefit_cookie_title")}</h3>
                    <p className="text-sm text-[#A3A3A3]">{t("aff_benefit_cookie_desc")}</p>
                  </div>
                  <div className="p-6 rounded-xl bg-[#0A0A0F] border border-[#2A2A3A]">
                    <BarChart3 className="text-[#FF4D00] mb-4" size={32} />
                    <h3 className="font-semibold text-lg mb-2">{t("aff_benefit_dashboard_title")}</h3>
                    <p className="text-sm text-[#A3A3A3]">{t("aff_benefit_dashboard_desc")}</p>
                  </div>
                  <div className="p-6 rounded-xl bg-[#0A0A0F] border border-[#2A2A3A]">
                    <Shield className="text-[#FF4D00] mb-4" size={32} />
                    <h3 className="font-semibold text-lg mb-2">{t("aff_benefit_payout_title")}</h3>
                    <p className="text-sm text-[#A3A3A3]">{t("aff_benefit_payout_desc")}</p>
                  </div>
                </div>

                {/* Example Earnings */}
                <Card className="bg-gradient-to-r from-[#FF4D00]/10 to-[#0A0A0F] border-[#FF4D00]/30">
                  <CardHeader>
                    <CardTitle className="text-2xl">{t("aff_earnings_title")}</CardTitle>
                    <CardDescription className="text-[#A3A3A3]">{t("aff_earnings_subtitle")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="text-center p-4 rounded-lg bg-[#0A0A0F]/50">
                        <div className="text-sm text-[#A3A3A3] mb-1">10 {t("aff_earnings_referrals")}</div>
                        <div className="text-2xl font-bold text-[#F5F5F5]">$100<span className="text-sm text-[#A3A3A3]">/mo</span></div>
                        <div className="text-xs text-[#737373]">$1,200/{t("aff_earnings_year")}</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[#0A0A0F]/50">
                        <div className="text-sm text-[#A3A3A3] mb-1">25 {t("aff_earnings_referrals")}</div>
                        <div className="text-2xl font-bold text-[#F5F5F5]">$250<span className="text-sm text-[#A3A3A3]">/mo</span></div>
                        <div className="text-xs text-[#737373]">$3,000/{t("aff_earnings_year")}</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[#0A0A0F]/50">
                        <div className="text-sm text-[#A3A3A3] mb-1">50 {t("aff_earnings_referrals")}</div>
                        <div className="text-2xl font-bold text-[#F5F5F5]">$500<span className="text-sm text-[#A3A3A3]">/mo</span></div>
                        <div className="text-xs text-[#737373]">$6,000/{t("aff_earnings_year")}</div>
                      </div>
                      <div className="text-center p-4 rounded-lg bg-[#FF4D00]/20 border border-[#FF4D00]/30">
                        <div className="text-sm text-[#FF4D00] mb-1">100 {t("aff_earnings_referrals")}</div>
                        <div className="text-2xl font-bold text-[#FF4D00]">$1,000<span className="text-sm text-[#A3A3A3]">/mo</span></div>
                        <div className="text-xs text-[#737373]">$12,000/{t("aff_earnings_year")}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Banners Tab */}
              <TabsContent value="banners" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">{t("aff_banners_title")}</h2>
                  <p className="text-[#A3A3A3] max-w-2xl mx-auto">
                    {t("aff_banners_subtitle")}
                  </p>
                </div>

                {/* Leaderboard Banners */}
                <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                  <CardHeader>
                    <CardTitle>{t("aff_banners_leaderboard")}</CardTitle>
                    <CardDescription>{t("aff_banners_leaderboard_desc")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <BannerPreview width={728} height={90} variant="dark" label={t("aff_banners_dark")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                      <BannerPreview width={728} height={90} variant="light" label={t("aff_banners_light")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                      <BannerPreview width={728} height={90} variant="orange" label={t("aff_banners_orange")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                    </div>
                  </CardContent>
                </Card>

                {/* Medium Rectangle */}
                <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                  <CardHeader>
                    <CardTitle>{t("aff_banners_rectangle")}</CardTitle>
                    <CardDescription>{t("aff_banners_rectangle_desc")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <BannerPreview width={300} height={250} variant="dark" label={t("aff_banners_dark")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                      <BannerPreview width={300} height={250} variant="light" label={t("aff_banners_light")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                      <BannerPreview width={300} height={250} variant="orange" label={t("aff_banners_orange")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                    </div>
                  </CardContent>
                </Card>

                {/* Skyscraper */}
                <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                  <CardHeader>
                    <CardTitle>{t("aff_banners_skyscraper")}</CardTitle>
                    <CardDescription>{t("aff_banners_skyscraper_desc")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <BannerPreview width={160} height={600} variant="dark" label={t("aff_banners_dark")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                      <BannerPreview width={160} height={600} variant="light" label={t("aff_banners_light")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                      <BannerPreview width={160} height={600} variant="orange" label={t("aff_banners_orange")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                    </div>
                  </CardContent>
                </Card>

                {/* Square / Social */}
                <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                  <CardHeader>
                    <CardTitle>{t("aff_banners_square")}</CardTitle>
                    <CardDescription>{t("aff_banners_square_desc")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-8">
                      <BannerPreview width={1080} height={1080} variant="dark" label={t("aff_banners_dark")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                      <BannerPreview width={1080} height={1080} variant="light" label={t("aff_banners_light")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                      <BannerPreview width={1080} height={1080} variant="orange" label={t("aff_banners_orange")} copyText={t("aff_banners_copy")} copiedText={t("aff_banners_copied")} downloadText={t("aff_banners_download")} />
                    </div>
                  </CardContent>
                </Card>

                {/* Logo Assets */}
                <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                  <CardHeader>
                    <CardTitle>{t("aff_banners_logos")}</CardTitle>
                    <CardDescription>{t("aff_banners_logos_desc")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="p-6 rounded-lg bg-[#0A0A0F] border border-[#2A2A3A] flex flex-col items-center gap-4">
                        <MBoltLogo size={64} className="text-[#FF4D00]" />
                        <div className="text-sm text-center">
                          <div className="font-medium">{t("aff_banners_icon")}</div>
                          <div className="text-[#737373]">SVG / PNG</div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full">
                          <Download size={14} className="mr-1" /> {t("aff_banners_download")}
                        </Button>
                      </div>
                      <div className="p-6 rounded-lg bg-[#0A0A0F] border border-[#2A2A3A] flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2">
                          <MBoltLogo size={32} className="text-[#FF4D00]" />
                          <span className="text-xl font-bold" style={{ fontFamily: "'Zen Dots', cursive", color: '#FF4D00' }}>MadnessBot</span>
                        </div>
                        <div className="text-sm text-center">
                          <div className="font-medium">{t("aff_banners_full_dark")}</div>
                          <div className="text-[#737373]">SVG / PNG</div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full">
                          <Download size={14} className="mr-1" /> {t("aff_banners_download")}
                        </Button>
                      </div>
                      <div className="p-6 rounded-lg bg-[#F5F5F5] border border-[#E8E8E8] flex flex-col items-center gap-4">
                        <div className="flex items-center gap-2">
                          <MBoltLogo size={32} className="text-[#FF4D00]" />
                          <span className="text-xl font-bold text-[#0A0A0F]" style={{ fontFamily: "'Zen Dots', cursive" }}>MadnessBot</span>
                        </div>
                        <div className="text-sm text-center text-[#0A0A0F]">
                          <div className="font-medium">{t("aff_banners_full_light")}</div>
                          <div className="text-[#737373]">SVG / PNG</div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full border-[#2A2A3A]">
                          <Download size={14} className="mr-1" /> {t("aff_banners_download")}
                        </Button>
                      </div>
                      <div className="p-6 rounded-lg bg-[#0A0A0F] border border-[#2A2A3A] flex flex-col items-center gap-4">
                        <div className="text-4xl font-bold" style={{ fontFamily: "'Zen Dots', cursive", color: '#FF4D00' }}>M</div>
                        <div className="text-sm text-center">
                          <div className="font-medium">{t("aff_banners_favicon")}</div>
                          <div className="text-[#737373]">ICO / PNG</div>
                        </div>
                        <Button size="sm" variant="outline" className="w-full">
                          <Download size={14} className="mr-1" /> {t("aff_banners_download")}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Social Media Tab */}
              <TabsContent value="social" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">{t("aff_social_title")}</h2>
                  <p className="text-[#A3A3A3] max-w-2xl mx-auto">
                    {t("aff_social_subtitle")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <SocialCard
                    icon={Youtube}
                    platform={t("aff_social_youtube")}
                    description={t("aff_social_youtube_desc")}
                    tips={[
                      t("aff_social_youtube_tip1"),
                      t("aff_social_youtube_tip2"),
                      t("aff_social_youtube_tip3"),
                      t("aff_social_youtube_tip4"),
                      t("aff_social_youtube_tip5"),
                      t("aff_social_youtube_tip6")
                    ]}
                  />
                  
                  <SocialCard
                    icon={Instagram}
                    platform={t("aff_social_instagram")}
                    description={t("aff_social_instagram_desc")}
                    tips={[
                      t("aff_social_instagram_tip1"),
                      t("aff_social_instagram_tip2"),
                      t("aff_social_instagram_tip3"),
                      t("aff_social_instagram_tip4"),
                      t("aff_social_instagram_tip5"),
                      t("aff_social_instagram_tip6")
                    ]}
                  />

                  <SocialCard
                    icon={MessageCircle}
                    platform={t("aff_social_tiktok")}
                    description={t("aff_social_tiktok_desc")}
                    tips={[
                      t("aff_social_tiktok_tip1"),
                      t("aff_social_tiktok_tip2"),
                      t("aff_social_tiktok_tip3"),
                      t("aff_social_tiktok_tip4"),
                      t("aff_social_tiktok_tip5"),
                      t("aff_social_tiktok_tip6")
                    ]}
                  />

                  <SocialCard
                    icon={Users}
                    platform={t("aff_social_facebook")}
                    description={t("aff_social_facebook_desc")}
                    tips={[
                      t("aff_social_facebook_tip1"),
                      t("aff_social_facebook_tip2"),
                      t("aff_social_facebook_tip3"),
                      t("aff_social_facebook_tip4"),
                      t("aff_social_facebook_tip5"),
                      t("aff_social_facebook_tip6")
                    ]}
                  />
                </div>

                {/* Content Ideas */}
                <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Zap className="text-[#FF4D00]" size={24} />
                      {t("aff_social_ideas_title")}
                    </CardTitle>
                    <CardDescription>{t("aff_social_ideas_subtitle")}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { title: t("aff_social_idea1_title"), desc: t("aff_social_idea1_desc") },
                        { title: t("aff_social_idea2_title"), desc: t("aff_social_idea2_desc") },
                        { title: t("aff_social_idea3_title"), desc: t("aff_social_idea3_desc") },
                        { title: t("aff_social_idea4_title"), desc: t("aff_social_idea4_desc") },
                        { title: t("aff_social_idea5_title"), desc: t("aff_social_idea5_desc") },
                        { title: t("aff_social_idea6_title"), desc: t("aff_social_idea6_desc") }
                      ].map((idea, index) => (
                        <div key={index} className="p-4 rounded-lg bg-[#1A1A25] border border-[#2A2A3A]">
                          <h4 className="font-semibold text-[#F5F5F5] mb-1">{idea.title}</h4>
                          <p className="text-sm text-[#A3A3A3]">{idea.desc}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Hashtags */}
                <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                  <CardHeader>
                    <CardTitle>{t("aff_social_hashtags")}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "#MadnessBot", "#AIMechanic", "#AutomotiveTech", "#AutoRepair",
                        "#DiagnosticTools", "#CarRepair", "#AutomotiveAI", "#Gearhead",
                        "#WrenchLife", "#AutoTech", "#PerformanceUpgrade", "#Horsepower",
                        "#CarRestoration", "#ClassicCars", "#ProjectCar", "#Restomod"
                      ].map((tag, index) => (
                        <span key={index} className="px-3 py-1 rounded-full bg-[#1A1A25] border border-[#2A2A3A] text-sm text-[#A3A3A3]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Special Programs Tab */}
              <TabsContent value="special" className="space-y-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">{t("aff_special_title")}</h2>
                  <p className="text-[#A3A3A3] max-w-2xl mx-auto">
                    {t("aff_special_subtitle")}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  {/* Tool Truck Program */}
                  <Card className="bg-gradient-to-br from-[#FF4D00]/10 to-[#0A0A0F] border-[#FF4D00]/30 relative overflow-hidden">
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 rounded-full bg-[#FF4D00] text-white text-xs font-semibold">
                        {t("aff_special_top")}
                      </span>
                    </div>
                    <CardHeader>
                      <div className="p-3 rounded-xl bg-[#FF4D00]/10 w-fit mb-4">
                        <Truck className="text-[#FF4D00]" size={40} />
                      </div>
                      <CardTitle className="text-2xl">{t("aff_truck_title")}</CardTitle>
                      <CardDescription className="text-[#A3A3A3]">
                        {t("aff_truck_subtitle")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0A0A0F]/50">
                          <DollarSign className="text-[#FF4D00]" size={20} />
                          <div>
                            <div className="font-semibold text-[#F5F5F5]">{t("aff_truck_bonus")}</div>
                            <div className="text-sm text-[#A3A3A3]">{t("aff_truck_bonus_desc")}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0A0A0F]/50">
                          <Gift className="text-[#FF4D00]" size={20} />
                          <div>
                            <div className="font-semibold text-[#F5F5F5]">{t("aff_truck_free")}</div>
                            <div className="text-sm text-[#A3A3A3]">{t("aff_truck_free_desc")}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#0A0A0F]/50">
                          <Users className="text-[#FF4D00]" size={20} />
                          <div>
                            <div className="font-semibold text-[#F5F5F5]">{t("aff_truck_materials")}</div>
                            <div className="text-sm text-[#A3A3A3]">{t("aff_truck_materials_desc")}</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 rounded-lg bg-[#1A1A25] border border-[#2A2A3A]">
                        <h4 className="font-semibold mb-2">{t("aff_truck_why")}</h4>
                        <p className="text-sm text-[#A3A3A3]">
                          {t("aff_truck_why_desc")}
                        </p>
                      </div>

                      <Button size="lg" asChild className="w-full btn-glow bg-[#FF4D00] hover:bg-[#E64500]">
                        <a href="mailto:partners@madnesstools.com?subject=Tool%20Truck%20Partner%20Program">
                          {t("aff_truck_apply")}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Influencer Program */}
                  <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                    <CardHeader>
                      <div className="p-3 rounded-xl bg-[#FF4D00]/10 w-fit mb-4">
                        <Star className="text-[#FF4D00]" size={40} />
                      </div>
                      <CardTitle className="text-2xl">{t("aff_influencer_title")}</CardTitle>
                      <CardDescription className="text-[#A3A3A3]">
                        {t("aff_influencer_subtitle")}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1A1A25]">
                          <Gift className="text-[#FF4D00]" size={20} />
                          <div>
                            <div className="font-semibold text-[#F5F5F5]">{t("aff_influencer_lifetime")}</div>
                            <div className="text-sm text-[#A3A3A3]">{t("aff_influencer_lifetime_desc")}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1A1A25]">
                          <DollarSign className="text-[#FF4D00]" size={20} />
                          <div>
                            <div className="font-semibold text-[#F5F5F5]">{t("aff_influencer_bonus")}</div>
                            <div className="text-sm text-[#A3A3A3]">{t("aff_influencer_bonus_desc")}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1A1A25]">
                          <TrendingUp className="text-[#FF4D00]" size={20} />
                          <div>
                            <div className="font-semibold text-[#F5F5F5]">{t("aff_influencer_commission")}</div>
                            <div className="text-sm text-[#A3A3A3]">{t("aff_influencer_commission_desc")}</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-[#1A1A25] border border-[#2A2A3A]">
                        <h4 className="font-semibold mb-2">{t("aff_influencer_requirements")}</h4>
                        <ul className="text-sm text-[#A3A3A3] space-y-1">
                          <li>• {t("aff_influencer_req1")}</li>
                          <li>• {t("aff_influencer_req2")}</li>
                          <li>• {t("aff_influencer_req3")}</li>
                          <li>• {t("aff_influencer_req4")}</li>
                        </ul>
                      </div>

                      <Button size="lg" variant="outline" asChild className="w-full border-[#2A2A3A] hover:bg-[#1A1A25]">
                        <a href="mailto:partners@madnesstools.com?subject=Influencer%20Program%20Application">
                          {t("aff_influencer_apply")}
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>

                {/* Trade School Program */}
                <Card className="bg-[#0A0A0F] border-[#2A2A3A]">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-xl bg-[#FF4D00]/10">
                        <Wrench className="text-[#FF4D00]" size={32} />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{t("aff_school_title")}</CardTitle>
                        <CardDescription className="text-[#A3A3A3]">
                          {t("aff_school_subtitle")}
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="p-4 rounded-lg bg-[#1A1A25]">
                        <h4 className="font-semibold mb-2 text-[#F5F5F5]">{t("aff_school_free")}</h4>
                        <p className="text-sm text-[#A3A3A3]">{t("aff_school_free_desc")}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-[#1A1A25]">
                        <h4 className="font-semibold mb-2 text-[#F5F5F5]">{t("aff_school_curriculum")}</h4>
                        <p className="text-sm text-[#A3A3A3]">{t("aff_school_curriculum_desc")}</p>
                      </div>
                      <div className="p-4 rounded-lg bg-[#1A1A25]">
                        <h4 className="font-semibold mb-2 text-[#F5F5F5]">{t("aff_school_bonus")}</h4>
                        <p className="text-sm text-[#A3A3A3]">{t("aff_school_bonus_desc")}</p>
                      </div>
                    </div>
                    <div className="mt-6">
                      <Button variant="outline" asChild className="border-[#2A2A3A] hover:bg-[#1A1A25]">
                        <a href="mailto:partners@madnesstools.com?subject=Trade%20School%20Program">
                          {t("aff_school_apply")}
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-[#FF4D00]/10 via-[#0A0A0F] to-[#FF4D00]/5">
          <div className="container text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-[#F5F5F5]">
              {t("aff_cta_title")}
            </h2>
            <p className="text-xl text-[#A3A3A3] mb-8 max-w-2xl mx-auto">
              {t("aff_cta_subtitle")}
            </p>
            <Button size="lg" asChild className="text-lg px-8 btn-glow bg-[#FF4D00] hover:bg-[#E64500] text-white">
              <a href="https://anansi-portia-inc.getrewardful.com/signup" target="_blank" rel="noopener noreferrer">
                {t("aff_cta_button")} <span className="ml-2">→</span>
              </a>
            </Button>
            <p className="text-sm text-[#737373] mt-4">{t("aff_cta_note")}</p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#0A0A0F]">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">{t("aff_faq_title")}</h2>
            <div className="space-y-4">
              {[
                { q: t("aff_faq1_q"), a: t("aff_faq1_a") },
                { q: t("aff_faq2_q"), a: t("aff_faq2_a") },
                { q: t("aff_faq3_q"), a: t("aff_faq3_a") },
                { q: t("aff_faq4_q"), a: t("aff_faq4_a") },
                { q: t("aff_faq5_q"), a: t("aff_faq5_a") },
                { q: t("aff_faq6_q"), a: t("aff_faq6_a") }
              ].map((faq, index) => (
                <div key={index} className="p-6 rounded-xl bg-[#111118] border border-[#2A2A3A]">
                  <h3 className="font-semibold text-lg mb-2 text-[#F5F5F5]">{faq.q}</h3>
                  <p className="text-[#A3A3A3]">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
