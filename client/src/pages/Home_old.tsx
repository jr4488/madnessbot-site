import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import {
  Wrench,
  Search,
  Image,
  Video,
  Database,
  Zap,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: Wrench,
      title: "Tool Inventory Management",
      description:
        "Track your tools in real-time. Check what you have before starting any job. Never hunt for tools or buy duplicates again.",
    },
    {
      icon: Search,
      title: "Real-Time Parts Sourcing",
      description:
        "Search 17+ suppliers instantly. Get pricing, part numbers, and direct purchase links for every component you need.",
    },
    {
      icon: Image,
      title: "Image Analysis",
      description:
        "Upload photos of parts, work orders, or damage. Get expert diagnostic analysis and repair recommendations instantly.",
    },
    {
      icon: Video,
      title: "AI Video Demonstrations",
      description:
        "Generate custom repair videos on-demand. Perfect for training techs or refreshing your memory on complex procedures.",
    },
    {
      icon: Database,
      title: "Persistent Memory",
      description:
        "MadnessBot remembers every conversation, document, and vehicle. Access your complete repair history anytime.",
    },
    {
      icon: Zap,
      title: "TSB & Recall Search",
      description:
        "Real-time access to Technical Service Bulletins and recalls. Stay informed about known issues and manufacturer updates.",
    },
  ];

  const pricingPlans = [
    {
      name: "Trial",
      price: "Free",
      description: "Perfect for testing",
      features: [
        "100 free queries",
        "Full diagnostic capabilities",
        "All features enabled",
        "Image & video analysis",
        "Tool inventory management",
      ],
    },
    {
      name: "Premium",
      price: "$19.99",
      period: "/month",
      description: "For professional shops",
      features: [
        "Unlimited queries",
        "Image generation & analysis",
        "Video demonstrations",
        "Priority support",
        "Advanced TSB search",
        "Tool inventory management",
        "Persistent memory",
      ],
      highlighted: true,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO />
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
            }}
          />
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Your Shop's{" "}
              <span className="text-primary" style={{ fontFamily: "'Zen Dots', cursive" }}>
                Master Mechanic
              </span>
              , Available 24/7
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              AI-powered diagnostic guidance, real-time parts sourcing, and intelligent toolbox management for automotive professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg px-8">
                <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                  Try MadnessBot Now
                  <ArrowRight className="ml-2" size={20} />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8"
                onClick={() => {
                  const element = document.getElementById("features");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Learn More
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              100 free queries • No credit card required • Full feature access
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-card/50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span style={{ fontFamily: "'Zen Dots', cursive", color: '#f82525' }}>MadnessBot</span> vs ChatGPT
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Purpose-built for automotive professionals, not just another general AI assistant
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {/* MadnessBot Column */}
              <Card className="border-primary shadow-lg shadow-primary/20">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl" style={{ fontFamily: "'Zen Dots', cursive", color: '#f22121' }}>
                    MadnessBot
                  </CardTitle>
                  <CardDescription className="text-base">Automotive AI Specialist</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">Real-Time Parts Sourcing</span>
                        <p className="text-sm text-muted-foreground">Search 17+ suppliers with live pricing and direct purchase links</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">Toolbox Inventory Management</span>
                        <p className="text-sm text-muted-foreground">Track your tools and check what you need vs what you have before starting jobs</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">Automotive-Specific Knowledge</span>
                        <p className="text-sm text-muted-foreground">Trained exclusively on automotive repair, diagnostics, and procedures</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">TSB & Recall Database</span>
                        <p className="text-sm text-muted-foreground">Real-time access to Technical Service Bulletins and safety recalls</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">Persistent Memory System</span>
                        <p className="text-sm text-muted-foreground">Remembers all conversations, vehicles, and repair history permanently</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">Custom Video Demonstrations</span>
                        <p className="text-sm text-muted-foreground">Generate AI repair videos on-demand for any procedure</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">Image Analysis</span>
                        <p className="text-sm text-muted-foreground">Upload photos of parts, damage, or work orders for instant analysis</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                      <div>
                        <span className="font-semibold">Affordable Pricing</span>
                        <p className="text-sm text-muted-foreground">$19.99/month - cheaper than AllData, Mitchell1 and ChatGPT</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* ChatGPT Column */}
              <Card className="border-border opacity-75">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl">ChatGPT</CardTitle>
                  <CardDescription className="text-base">General Purpose AI</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">No Parts Integration</span>
                        <p className="text-sm text-muted-foreground">Can't search suppliers or provide real-time pricing</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">No Tool Management</span>
                        <p className="text-sm text-muted-foreground">Can't track your inventory or check tool availability</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">General Knowledge</span>
                        <p className="text-sm text-muted-foreground">Trained on everything, not specialized for automotive work</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">No TSB Access</span>
                        <p className="text-sm text-muted-foreground">Cannot search Technical Service Bulletins or recalls</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">Limited Memory</span>
                        <p className="text-sm text-muted-foreground">Forgets conversations after sessions end, no repair history</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">Generic Video Generation</span>
                        <p className="text-sm text-muted-foreground">Not specialized for automotive repair demonstrations</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">Basic Image Analysis</span>
                        <p className="text-sm text-muted-foreground">General image understanding, not automotive-specific diagnostics</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 mt-1 flex-shrink-0 rounded-full border-2 border-muted-foreground/30" />
                      <div>
                        <span className="font-semibold text-muted-foreground">Higher Cost</span>
                        <p className="text-sm text-muted-foreground">$30 /month for Plus, limited features for automotive work</p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-lg text-muted-foreground mb-6">
                MadnessBot is purpose-built for automotive professionals. Every feature is designed to save you time, reduce costs, and improve diagnostic accuracy.
              </p>
              <a
                href="https://madnesstools.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity font-semibold"
              >
                Try MadnessBot Free
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you're ready. No hidden fees.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card
                key={index}
                className={`relative ${
                  plan.highlighted
                    ? "border-primary shadow-lg shadow-primary/20"
                    : "border-border"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <div className="mb-2">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                  </div>
                  <CardDescription className="text-base">{plan.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="text-primary mt-0.5 flex-shrink-0" size={18} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className="w-full"
                    variant={plan.highlighted ? "default" : "outline"}
                    asChild
                  >
                    <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                      {plan.name === "Trial" ? "Start Free Trial" : "Get Started"}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-12 border border-primary/20">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Shop?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of automotive professionals using MadnessBot to diagnose faster, fix smarter, and grow their business.
            </p>
            <Button size="lg" asChild className="text-lg px-8">
              <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                Try MadnessBot Free
                <ArrowRight className="ml-2" size={20} />
              </a>
            </Button>
            <p className="mt-4 text-sm text-muted-foreground">
              No credit card required • 100 free queries • Cancel anytime
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
