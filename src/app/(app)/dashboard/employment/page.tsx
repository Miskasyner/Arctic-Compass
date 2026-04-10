import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConfidenceBadge } from "@/components/domain/confidence-badge";
import { Briefcase, TrendingUp, Lightbulb } from "lucide-react";

export default async function EmploymentPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const profile = await prisma.profile.findUnique({
    where: { userId: session.user.id },
  });

  const [jobs, marketGaps, stories] = await Promise.all([
    prisma.jobListing.findMany({
      where: { municipality: profile?.targetMunicipality || "salla", isActive: true },
      orderBy: { postedAt: "desc" },
    }),
    prisma.marketGap.findMany({
      where: { municipality: profile?.targetMunicipality || "salla" },
    }),
    prisma.successStory.findMany({
      where: {
        municipality: profile?.targetMunicipality || "salla",
        domains: { has: "EMPLOYMENT" },
      },
    }),
  ]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center">
            <Briefcase className="h-5 w-5" />
          </div>
          Employment
        </h1>
        <p className="text-muted-foreground mt-1">
          Jobs, market opportunities & entrepreneurship paths matched to your profile.
        </p>
      </div>

      {/* Job Listings */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Briefcase className="h-5 w-5" />
          Open Positions ({jobs.length})
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{job.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{job.employer}</p>
                  </div>
                  <ConfidenceBadge level={job.confidenceLevel} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                  {job.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-3">
                  <Badge variant="secondary">{job.employmentType.replace("_", " ")}</Badge>
                  <Badge variant="secondary">{job.sector}</Badge>
                  {job.salaryRange && (
                    <Badge variant="outline">{job.salaryRange}</Badge>
                  )}
                </div>
                {job.languageReqs.length > 0 && (
                  <p className="text-xs text-muted-foreground">
                    Languages: {job.languageReqs.join(", ")}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Market Gaps */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Market Opportunities ({marketGaps.length})
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {marketGaps.map((gap) => (
            <Card key={gap.id} className="border-l-4 border-l-accent hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">{gap.title}</CardTitle>
                  <div className="flex items-center gap-2">
                    <Badge variant={gap.demandLevel === "HIGH" ? "default" : "secondary"}>
                      {gap.demandLevel} demand
                    </Badge>
                    <ConfidenceBadge level={gap.confidenceLevel} />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  {gap.description}
                </p>
                {gap.potentialIncome && (
                  <p className="text-sm font-medium text-emerald-600 mb-2">
                    Potential income: {gap.potentialIncome}
                  </p>
                )}
                {gap.supportAvailable.length > 0 && (
                  <div className="mt-2">
                    <p className="text-xs font-medium mb-1">Support available:</p>
                    <ul className="text-xs text-muted-foreground space-y-1">
                      {gap.supportAvailable.map((support, i) => (
                        <li key={i} className="flex items-start gap-1">
                          <Lightbulb className="h-3 w-3 mt-0.5 flex-shrink-0 text-amber-500" />
                          {support}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Success Stories */}
      {stories.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Success Stories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {stories.map((story) => (
              <Card key={story.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <CardTitle className="text-base">{story.title}</CardTitle>
                  <p className="text-sm text-primary">{story.personName} from {story.originCountry}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{story.summary}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
