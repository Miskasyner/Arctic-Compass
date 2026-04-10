import { prisma } from "@/lib/db";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen } from "lucide-react";

export default async function StoriesPage() {
  const stories = await prisma.successStory.findMany({
    orderBy: { publishedAt: "desc" },
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <BookOpen className="h-8 w-8 text-primary" />
          Success Stories
        </h1>
        <p className="text-muted-foreground mt-1">
          Real stories from people who relocated to Salla.
        </p>
      </div>

      <div className="grid gap-6">
        {stories.map((story) => (
          <Card key={story.id}>
            <CardHeader>
              <CardTitle>{story.title}</CardTitle>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span>{story.personName}</span>
                <span>from {story.originCountry}</span>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{story.summary}</p>
              <div className="prose prose-sm max-w-none text-foreground whitespace-pre-line">
                {story.content}
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {story.domains.map((d) => (
                  <Badge key={d} variant="secondary">{d}</Badge>
                ))}
                {story.tags.map((t) => (
                  <Badge key={t} variant="outline">{t}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
