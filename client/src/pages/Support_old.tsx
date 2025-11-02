import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import SEO from "@/components/SEO";
import { ArrowLeft, BookOpen, Wrench, Image, Video, Search, Database, Settings, HelpCircle } from "lucide-react";
import { Link } from "wouter";

export default function Support() {
  const sections = [
    {
      id: "getting-started",
      icon: BookOpen,
      title: "Getting Started",
      content: `MadnessBot is your AI-powered Master Mechanic assistant. Think of it as having a 64-year-old master tech with perfect memory available 24/7 to help you diagnose problems, find parts, manage your tools, and learn new procedures.

**Accessing MadnessBot:**
1. Open your web browser (Chrome, Firefox, Safari, or Edge)
2. Navigate to madnesstools.com
3. Sign in or create an account

No app download required! MadnessBot works on desktop computers, laptops, tablets, and smartphones.

**Creating an Account:**
- Click "Sign In" button in the top-right corner
- Choose "Sign in with Google" (fastest - one click) or create username/password
- For Google Sign-In: Select your account and grant permissions
- For Manual Registration: Enter username, create password, and optionally add email for recovery

After signing in, you'll see a welcome message from Madness, your subscription status, and the chat interface ready to use.`,
    },
    {
      id: "basic-features",
      icon: Wrench,
      title: "Basic Features",
      content: `**Starting a Conversation:**
It's as simple as talking to a coworker! Type your question in the message box at the bottom, click "Send" or press Enter, and watch Madness respond in real-time.

**Example Questions:**
- "How do I reset the oil life monitor on a 2019 Honda Accord?"
- "2018 F-150 5.0L, P0171 and P0174 codes, rough idle, no vacuum leaks found"
- "What's the torque spec for a 2020 Silverado wheel lug nuts?"

**Understanding Responses:**
Madness formats responses with bold headings, bullet points, emojis for visual clarity, clickable links for parts, and step-by-step numbered procedures.

**Continuing the Conversation:**
MadnessBot remembers everything in your conversation! You can ask follow-up questions, request clarification, go deeper into diagnostics, or switch topics—Madness tracks it all.

**Keyboard Shortcuts:**
- Enter: Send message
- Shift + Enter: New line (multi-line messages)
- Ctrl/Cmd + K: Clear chat display
- Esc: Close modals/popups`,
    },
    {
      id: "tool-inventory",
      icon: Wrench,
      title: "Tool Inventory Management",
      content: `**THE GAME-CHANGER FEATURE**
Never hunt for tools again. Never buy duplicates. Always know what you have.

**Checking Your Inventory:**
Ask Madness to show you what tools you own:
- "What tools do I have?"
- "Show my inventory"
- "List my tools"

**Checking If You Have Everything for a Job:**
The most powerful feature—ask BEFORE you start:
- "Do I have everything to replace a timing belt on a 2018 Honda Accord?"

Madness checks your inventory and tells you exactly what you have and what you're missing. This saves you from starting a job and discovering you're missing tools, making emergency parts runs, wasting billable hours, and customer delays.

**Adding Tools:**
Three ways to add tools:
1. **Add Missing Tools (Easiest):** After Madness shows what you're missing, say "Yes, add the missing tools"
2. **Add Individual Tools:** "Add a brake bleeder kit to my inventory"
3. **Add with Details:** "Add a torque wrench, 10-150 ft-lbs, note: needs calibration by March 15"

**Removing Tools:**
If you sold, lost, or loaned out a tool: "Remove the brake bleeder from my inventory"

**Updating Quantities:**
If you have multiple of something: "I have 3 impact wrenches, update quantity"

**Adding Notes:**
Track important details: "Add note to torque wrench: needs calibration"

**Best Practices:**
- Add tools as you buy them (takes 5 seconds)
- Check before starting big jobs (saves hours)
- Use notes for calibration dates, locations, condition
- Update when you loan tools
- Regular audits: "Show my inventory" once a month

**Pro Tip:** If you're a shop with multiple techs, each person has their own inventory. Your tools won't mix with others!`,
    },
    {
      id: "image-analysis",
      icon: Image,
      title: "Image Analysis",
      content: `**Upload Photos for Expert Analysis**

MadnessBot can analyze:
- Parts (wear, damage, condition)
- Work orders (extract info, build diagnostic plan)
- Vehicle damage
- Fluid contamination
- Wiring issues

**How to Upload Images:**

**Method 1: Click Upload Button**
1. Click the camera icon 📷 next to the message box
2. Select "Choose File"
3. Browse to your photo and click Open
4. Preview appears—verify it's the right image
5. Type your question (optional)
6. Click Send

**Method 2: Drag and Drop**
1. Open the photo on your computer
2. Drag it into the chat window
3. Drop it when you see the upload area highlight
4. Preview appears
5. Add your question and send

**Example Use Cases:**
- Upload a photo of worn brake rotors for condition assessment
- Take a picture of a work order for instant diagnostic plan
- Show fluid contamination for analysis
- Photograph error codes on a scan tool
- Capture wiring diagrams for troubleshooting

**Tips for Best Results:**
- Use good lighting
- Get close to the subject
- Keep the image in focus
- Include context (surrounding components)
- Multiple angles help for complex issues`,
    },
    {
      id: "video-demos",
      icon: Video,
      title: "Video Demonstrations",
      content: `**AI-Generated Repair Videos**

MadnessBot can generate custom video demonstrations for complex repairs using cutting-edge AI technology.

**How It Works:**
Simply ask Madness to show you a procedure:
- "Show me how to replace a water pump on a 2015 Silverado"
- "Generate a video showing how to safely jack up a 2020 F-150 for brake work"
- "Demonstrate proper timing belt installation technique"

MadnessBot generates a 4-12 second video showing the procedure with proper camera angles, lighting, and tool usage.

**Use Cases:**
- Training new technicians
- Refreshing memory on rare procedures
- Showing customers what needs to be done
- Safety reminders for hazardous operations
- Demonstrating proper tool technique

**Technical Details:**
- Videos are generated on-demand
- Duration: 4, 8, or 12 seconds
- Resolution: 720x1280 (mobile-optimized)
- Videos expire after ~1 hour but can be downloaded
- Cached locally for repeat viewing

**Note:** Video generation is available on Premium plans and uses advanced AI to create realistic demonstrations.`,
    },
    {
      id: "parts-sourcing",
      icon: Search,
      title: "Web Search & Parts Sourcing",
      content: `**Real-Time Information Access**

Unlike generic AI assistants, MadnessBot can recursively search the web in real-time for current information.

**What MadnessBot Can Find:**
- Current part prices across 17+ major suppliers
- Technical Service Bulletins (TSBs)
- Recalls and safety campaigns
- Repair procedures
- Torque specifications
- Labor time estimates

**Supported Parts Suppliers:**
- AutoZone, NAPA, O'Reilly, Advance Auto Parts
- Amazon, RockAuto, Summit Racing, JEGS
- Harbor Freight, Grainger, Fastenal
- Snap-on (preferred), Matco Tools, Mac Tools
- eBay for hard-to-find parts

**Intelligent Link Generation:**
MadnessBot uses a secondary AI model to search for exact parts and returns clickable purchase links in proper format with price ranges and part numbers.

**Example Output:**
When you ask about parts for a repair, Madness provides:
- Required parts list with part numbers
- Clickable purchase links
- Price ranges
- Labor time estimates
- Customer pricing recommendations

**How to Use:**
Simply ask about any repair and Madness will automatically search for and include relevant parts information:
- "I need to replace the alternator on a 2017 Honda Civic"
- "What parts do I need for a complete brake job on a 2019 F-150?"
- "Find me a water pump for a 2015 Camry"`,
    },
    {
      id: "memory",
      icon: Database,
      title: "Memory & Conversation History",
      content: `**Persistent Memory System**

MadnessBot remembers everything—unlike generic AI assistants that forget after each session.

**What Gets Stored:**
- All conversations: Full chat history per user
- Uploaded documents: Service manuals, wiring diagrams, TSBs
- Vehicle information: VINs, customer vehicles, repair history
- Session summaries: Quick recaps of previous work
- Tool inventory: What you own, quantities, notes

**How It Works:**
- SQL Database stores structured data (messages, inventory, subscriptions)
- Vector Store enables semantic search across documents
- Per-user isolation: Your data never mixes with other shops
- Environment separation: Test and production data kept separate

**Practical Applications:**
- "What did we discuss about that 2019 Camry last week?"
- "Pull up the wiring diagram I uploaded for the F-150"
- "What was the part number for that fuel pump we talked about?"
- "Show me all the brake jobs we've discussed this month"

**File Search Tool:**
Upload PDFs, service manuals, and documents. MadnessBot uses AI to search them and find relevant sections, providing context-aware answers from your documents.

**Privacy & Security:**
- Your data is isolated from other users
- All data encrypted at rest
- Secure authentication with Google OAuth
- HTTPS-only traffic encryption
- Regular automatic backups`,
    },
    {
      id: "account",
      icon: Settings,
      title: "Account Management",
      content: `**Subscription Plans**

**Trial Plan (Free):**
- 100 free queries (one-time)
- Full diagnostic capabilities
- All features enabled
- Perfect for testing the system

**Premium Plan ($19.99/month):**
- Unlimited queries (10,000/month soft limit)
- Image generation and analysis
- Video generation
- Priority support
- Advanced TSB and recall searches
- Tool inventory management
- Persistent memory

**Managing Your Subscription:**
- View usage in your account dashboard
- Upgrade from Trial to Premium anytime
- Secure payment processing via Stripe
- Automatic billing and renewals
- Cancel anytime from customer portal

**Email Verification:**
Email verification is required for security. Check your email for the verification link after registration.

**Password Reset:**
If you forget your password, use the "Forgot Password" link on the login page. You'll receive a reset link via email.

**Multiple Technicians:**
Shops can have multiple technicians with separate accounts. Each user has their own:
- Conversation history
- Tool inventory
- Uploaded documents
- Usage tracking`,
    },
    {
      id: "tips",
      icon: HelpCircle,
      title: "Tips & Best Practices",
      content: `**Getting the Most from MadnessBot**

**Be Specific:**
The more details you provide, the better Madness can help:
- Include year, make, model, engine size
- Mention symptoms, codes, and what you've already checked
- Describe unusual sounds, smells, or behaviors

**Ask Follow-Up Questions:**
Don't hesitate to dig deeper:
- "Why would that cause this symptom?"
- "What's the most common cause?"
- "How do I test that component?"

**Use Images:**
A picture is worth a thousand words:
- Upload photos of parts, damage, or work orders
- Include multiple angles for complex issues
- Good lighting and focus improve analysis

**Check Tools First:**
Before starting big jobs:
- "Do I have everything for [specific repair]?"
- Saves time and prevents delays

**Upload Reference Materials:**
Build your knowledge base:
- Upload service manuals
- Save wiring diagrams
- Store TSBs and technical bulletins

**Track Your Inventory:**
Keep your tool list current:
- Add tools as you buy them
- Update notes for calibration dates
- Remove tools when sold or loaned

**Review Conversation History:**
Reference past discussions:
- "What did we discuss about [vehicle]?"
- Learn from previous repairs
- Track recurring issues

**Stay Professional:**
MadnessBot is focused on automotive work:
- Stays on-topic (automotive only)
- Won't write software or do non-automotive tasks
- Provides expert guidance for repair work`,
    },
    {
      id: "troubleshooting",
      icon: HelpCircle,
      title: "Troubleshooting",
      content: `**Common Issues & Solutions**

**Can't Sign In:**
- Verify your username/password
- Check email for verification link
- Try "Forgot Password" if needed
- Ensure cookies are enabled in browser

**Images Won't Upload:**
- Check file size (max 20MB)
- Supported formats: JPG, PNG, GIF, WebP
- Try a different browser
- Ensure stable internet connection

**Slow Response Times:**
- Check your internet connection
- Clear browser cache
- Try a different browser
- Complex queries may take longer

**Out of Queries (Trial Users):**
- Upgrade to Premium for unlimited queries
- Each trial account gets 100 queries
- Premium: $19.99/month unlimited

**Tool Inventory Not Updating:**
- Be specific with tool names
- Use clear commands: "Add [tool name]"
- Check inventory: "Show my tools"
- Contact support if issues persist

**Video Generation Not Working:**
- Premium feature only
- Check subscription status
- Ensure clear, specific request
- Videos take 30-60 seconds to generate

**Forgot Password:**
- Click "Forgot Password" on login page
- Enter your email address
- Check email for reset link
- Create new password

**Need More Help:**
Visit madnesstools.com for:
- Live chat support
- Email support
- Video tutorials
- Community forums`,
    },
    {
      id: "faq",
      icon: HelpCircle,
      title: "Frequently Asked Questions",
      content: `**General Questions**

**Q: How is MadnessBot different from ChatGPT?**
A: MadnessBot is purpose-built for automotive professionals with real-time web search, tool inventory management, image analysis, video generation, and persistent memory. It stays focused on automotive topics and provides actionable repair guidance with pricing and part numbers.

**Q: Do I need to download an app?**
A: No! MadnessBot is web-based and works on any modern browser on desktop, laptop, tablet, or smartphone.

**Q: How many queries do I get?**
A: Trial users get 100 free queries. Premium users get unlimited queries (10,000/month soft limit).

**Q: Can multiple technicians use the same account?**
A: Each technician should have their own account. This keeps tool inventories, conversation histories, and uploaded documents separate.

**Q: Is my data secure?**
A: Yes! All data is encrypted at rest and in transit. Per-user isolation ensures your data never mixes with others. We use Google OAuth for secure authentication.

**Q: What if I run out of trial queries?**
A: Upgrade to Premium ($19.99/month) for unlimited queries and continued access to all features.

**Q: Can I cancel anytime?**
A: Yes! Premium subscriptions can be canceled anytime from your account dashboard. No long-term contracts.

**Q: Does MadnessBot work offline?**
A: No, an internet connection is required for real-time web search, parts sourcing, and AI processing.

**Q: What browsers are supported?**
A: Chrome, Firefox, Safari, and Edge. We recommend using the latest version for best performance.

**Q: Can I export my conversation history?**
A: Contact support for data export options. All your conversations are stored and searchable within MadnessBot.

**Q: How accurate are the diagnostics?**
A: MadnessBot provides expert guidance based on extensive automotive knowledge and real-time data. Always verify critical information and use professional judgment.

**Q: Can I upload service manuals?**
A: Yes! Upload PDFs, service manuals, wiring diagrams, and TSBs. MadnessBot will search them to provide context-aware answers.

**Q: Is there a mobile app?**
A: Not yet, but the web version works great on mobile browsers. Native iOS and Android apps are on the roadmap.

**Q: How do I contact support?**
A: Visit madnesstools.com for live chat, email support, and help documentation.`,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SEO 
        title="MadnessBot Support - User Manual & Documentation"
        description="Complete user manual and documentation for MadnessBot. Learn about tool inventory management, image analysis, video demonstrations, parts sourcing, and more."
        url="https://madnessbot.com/support"
      />
      <Navigation />

      {/* Header */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="mr-2" size={18} />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span style={{ fontFamily: "'Zen Dots', cursive", color: '#f72b2b' }}>MadnessBot</span> Support
          </h1>
          <p className="text-xl text-muted-foreground">
            Complete user manual and documentation for automotive professionals
          </p>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-8 bg-card/50 sticky top-16 z-40 border-b border-border overflow-hidden">
        <div className="container">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-thin">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => {
                  const element = document.getElementById(section.id);
                  element?.scrollIntoView({ behavior: "smooth", block: "start" });
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-background hover:bg-accent transition-colors whitespace-nowrap text-sm flex-shrink-0"
              >
                <section.icon size={16} />
                {section.title}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <Card key={section.id} id={section.id} className="scroll-mt-32">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="text-primary" size={24} />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold mb-2">{section.title}</h2>
                      </div>
                    </div>
                    <div className="prose prose-invert max-w-none">
                      {section.content.split("\n\n").map((paragraph, pIndex) => {
                        if (paragraph.startsWith("**") && paragraph.endsWith("**")) {
                          return (
                            <h3 key={pIndex} className="text-lg font-semibold mt-6 mb-3 text-foreground">
                              {paragraph.replace(/\*\*/g, "")}
                            </h3>
                          );
                        }
                        if (paragraph.startsWith("- ")) {
                          const items = paragraph.split("\n");
                          return (
                            <ul key={pIndex} className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
                              {items.map((item, iIndex) => (
                                <li key={iIndex}>{item.replace(/^- /, "")}</li>
                              ))}
                            </ul>
                          );
                        }
                        return (
                          <p key={pIndex} className="text-muted-foreground mb-4 leading-relaxed">
                            {paragraph.split(/(\*\*.*?\*\*)/).map((part, partIndex) => {
                              if (part.startsWith("**") && part.endsWith("**")) {
                                return (
                                  <strong key={partIndex} className="text-foreground font-semibold">
                                    {part.replace(/\*\*/g, "")}
                                  </strong>
                                );
                              }
                              return part;
                            })}
                          </p>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA at bottom */}
          <div className="mt-12 text-center bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Try MadnessBot free with 100 queries. No credit card required.
            </p>
            <Button size="lg" asChild>
              <a href="https://madnesstools.com" target="_blank" rel="noopener noreferrer">
                Try MadnessBot Now
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
