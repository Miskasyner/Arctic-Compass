import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { Briefcase, Home, FileCheck, Users } from "lucide-react";
import { DomainCard } from "@/components/dashboard/domain-card";
import { WelcomeBanner } from "@/components/dashboard/welcome-banner";
import { AIInputBar } from "@/components/layout/ai-input-bar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const profile = await prisma.profile.findUnique({
    where: { userId: session.user.id },
  });

  if (!profile) redirect("/onboarding");

  // Fetch counts for each domain
  const [jobCount, housingCount, stepCount, eventCount, progressItems, matchedStories] =
    await Promise.all([
      prisma.jobListing.count({ where: { municipality: profile.targetMunicipality, isActive: true } }),
      prisma.housingListing.count({ where: { municipality: profile.targetMunicipality, isActive: true } }),
      prisma.bureaucracyStep.count(),
      prisma.event.count({ where: { municipality: profile.targetMunicipality } }),
      prisma.progressItem.findMany({ where: { userId: session.user.id } }),
      prisma.successStory.findMany({
        where: { municipality: profile.targetMunicipality },
        take: 3,
      }),
    ]);

  // Calculate progress per domain
  function domainProgress(domain: string) {
    const items = progressItems.filter((p) => p.domain === domain);
    if (items.length === 0) return 0;
    const completed = items.filter((p) => p.status === "COMPLETED").length;
    return Math.round((completed / items.length) * 100);
  }

  const empProgress = domainProgress("EMPLOYMENT");
  const houProgress = domainProgress("HOUSING");
  const intProgress = domainProgress("INTEGRATION");
  const comProgress = domainProgress("COMMUNITY");
  const overallProgress = Math.round((empProgress + houProgress + intProgress + comProgress) / 4);

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <WelcomeBanner
        name={session.user.name || "Explorer"}
        municipality="Salla"
        overallProgress={overallProgress}
      />

      {/* Domain Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        <DomainCard
          title="Employment"
          description="Jobs, market gaps & entrepreneurship opportunities matched to your skills."
          href="/dashboard/employment"
          icon={Briefcase}
          iconColor="text-blue-600 bg-blue-100"
          progress={empProgress}
          itemCount={jobCount}
          itemLabel="opportunities"
        />
        <DomainCard
          title="Housing"
          description="Available homes, rental options & municipal incentives for newcomers."
          href="/dashboard/housing"
          icon={Home}
          iconColor="text-emerald-600 bg-emerald-100"
          progress={houProgress}
          itemCount={housingCount}
          itemLabel="options"
        />
        <DomainCard
          title="Integration"
          description="Step-by-step checklist, language resources & personalised guidance."
          href="/dashboard/integration"
          icon={FileCheck}
          iconColor="text-amber-600 bg-amber-100"
          progress={intProgress}
          itemCount={stepCount}
          itemLabel="steps"
        />
        <DomainCard
          title="Community"
          description="Events, mentors, hobby groups & family support to help you belong."
          href="/dashboard/community"
          icon={Users}
          iconColor="text-purple-600 bg-purple-100"
          progress={comProgress}
          itemCount={eventCount}
          itemLabel="events"
        />
      </div>

      {/* Matched Stories */}
      {matchedStories.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Stories from people like you</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {matchedStories.map((story) => (
                <div key={story.id} className="p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                  <p className="font-medium text-sm mb-1">{story.title}</p>
                  <p className="text-xs text-muted-foreground line-clamp-2">{story.summary}</p>
                  <p className="text-xs text-primary mt-2">{story.personName} from {story.originCountry}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* AI Input */}
      <AIInputBar />
    </div>
  );
}
