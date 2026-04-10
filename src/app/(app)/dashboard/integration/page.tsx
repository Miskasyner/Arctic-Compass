import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConfidenceBadge } from "@/components/domain/confidence-badge";
import { FileCheck, BookOpen, ExternalLink } from "lucide-react";

const CATEGORY_LABELS: Record<string, string> = {
  PRE_ARRIVAL: "Before You Arrive",
  FIRST_WEEK: "First Week",
  FIRST_MONTH: "First Month",
  FIRST_3_MONTHS: "First 3 Months",
  ONGOING: "Ongoing",
};

export default async function IntegrationPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const [steps, languageResources] = await Promise.all([
    prisma.bureaucracyStep.findMany({ orderBy: { orderIndex: "asc" } }),
    prisma.languageResource.findMany(),
  ]);

  const groupedSteps = steps.reduce((acc, step) => {
    const cat = step.category;
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(step);
    return acc;
  }, {} as Record<string, typeof steps>);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center">
            <FileCheck className="h-5 w-5" />
          </div>
          Integration
        </h1>
        <p className="text-muted-foreground mt-1">
          Your step-by-step guide to settling in Finland.
        </p>
      </div>

      {/* Bureaucracy Checklist */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Bureaucracy Checklist</h2>
        <div className="space-y-6">
          {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
            const categorySteps = groupedSteps[key];
            if (!categorySteps?.length) return null;
            return (
              <div key={key}>
                <h3 className="font-medium text-sm text-muted-foreground uppercase tracking-wide mb-3">
                  {label}
                </h3>
                <div className="space-y-2">
                  {categorySteps.map((step) => (
                    <Card key={step.id}>
                      <CardContent className="py-4">
                        <div className="flex items-start gap-3">
                          <div className="mt-0.5 h-5 w-5 rounded border-2 border-muted-foreground/30 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-2">
                              <p className="font-medium text-sm">{step.title}</p>
                              <ConfidenceBadge level={step.confidenceLevel} />
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">{step.description}</p>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {step.estimatedDays && step.estimatedDays > 0 && (
                                <Badge variant="outline" className="text-xs">
                                  ~{step.estimatedDays} days
                                </Badge>
                              )}
                              {step.url && (
                                <a
                                  href={step.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  Official website
                                </a>
                              )}
                            </div>
                            {step.tips && (
                              <p className="text-xs text-accent mt-2 italic">
                                Tip: {step.tips}
                              </p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Language Resources */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Language Learning Resources
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {languageResources.map((res) => (
            <Card key={res.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">{res.title}</CardTitle>
                  <ConfidenceBadge level={res.confidenceLevel} />
                </div>
                <p className="text-xs text-muted-foreground">{res.provider}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{res.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{res.type.replace(/_/g, " ")}</Badge>
                  {res.level && <Badge variant="outline">{res.level}</Badge>}
                  <Badge variant={res.cost === "Free" || res.cost?.startsWith("Free") ? "verified" : "outline"}>
                    {res.cost}
                  </Badge>
                  {res.online && <Badge variant="outline">Online</Badge>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
