import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Compass, Briefcase, Home, Users, ArrowRight, Sparkles } from "lucide-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <Compass className="h-4 w-4 text-primary-foreground" />
            </div>
            <span className="font-semibold text-lg text-primary">Arctic Compass</span>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/login">
              <Button variant="ghost" size="sm">Sign in</Button>
            </Link>
            <Link href="/register">
              <Button size="sm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero */}
      <main className="flex-1">
        <section className="py-20 md:py-32 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-sm text-accent mb-6">
              <Sparkles className="h-4 w-4" />
              AI-powered relocation companion
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
              Your guide to a new life in{" "}
              <span className="text-primary">Finnish Lapland</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Arctic Compass personalises your entire relocation journey — from finding work
              and housing to navigating bureaucracy and building community. Powered by AI,
              grounded in trusted local data.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/register">
                <Button size="lg" className="text-base px-8">
                  Start your journey
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/login">
                <Button size="lg" variant="outline" className="text-base px-8">
                  Try demo as Maria
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Pathway Domains */}
        <section className="py-20 px-4 bg-muted/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              Four pathways to your new home
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
              Everything you need, personalised to your background, skills, and family situation.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Briefcase,
                  title: "Employment",
                  description:
                    "Matched job listings, market gap analysis, entrepreneurship opportunities, and success stories from people like you.",
                  color: "text-blue-600 bg-blue-100",
                },
                {
                  icon: Home,
                  title: "Housing",
                  description:
                    "Available apartments and houses, municipal incentives like free building plots, and AI-powered recommendations.",
                  color: "text-emerald-600 bg-emerald-100",
                },
                {
                  icon: ArrowRight,
                  title: "Integration",
                  description:
                    "Step-by-step bureaucracy checklist, language learning guide, and proactive incentive discovery — all personalised.",
                  color: "text-amber-600 bg-amber-100",
                },
                {
                  icon: Users,
                  title: "Community",
                  description:
                    "Local events, mentor matching, hobby groups, and family support to help you belong — not just live here.",
                  color: "text-purple-600 bg-purple-100",
                },
              ].map((domain) => (
                <div
                  key={domain.title}
                  className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div
                    className={`h-10 w-10 rounded-lg ${domain.color} flex items-center justify-center mb-4`}
                  >
                    <domain.icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{domain.title}</h3>
                  <p className="text-sm text-muted-foreground">{domain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Tell us about yourself",
                  description:
                    "Create your profile: where you're from, your skills, your family situation, and what matters to you.",
                },
                {
                  step: "2",
                  title: "Get your personalised dashboard",
                  description:
                    "See matched opportunities, relevant incentives, and a clear pathway across all four domains.",
                },
                {
                  step: "3",
                  title: "Ask anything — in your own words",
                  description:
                    "Type any question, concern, or idea. Our AI understands context and gives you personalised, honest answers.",
                },
                {
                  step: "4",
                  title: "Take action with confidence",
                  description:
                    "Track your progress, generate personalised guides, and connect with mentors who've been where you are.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to explore your future in Lapland?
            </h2>
            <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
              Join Arctic Compass and get AI-powered, personalised guidance for every step of your relocation.
            </p>
            <Link href="/register">
              <Button size="lg" variant="secondary" className="text-base px-8">
                Get started — it&apos;s free
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Compass className="h-4 w-4" />
            <span>Arctic Compass</span>
          </div>
          <p>Trusted information for your relocation journey. Data sourced from verified public sources.</p>
        </div>
      </footer>
    </div>
  );
}
