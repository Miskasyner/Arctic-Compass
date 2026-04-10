import { FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MaterialsPage() {
  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <FileText className="h-8 w-8 text-primary" />
          Materials
        </h1>
        <p className="text-muted-foreground mt-1">
          Generate personalised guides and checklists.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {[
          {
            title: "Your Salla Guide",
            description: "A comprehensive personalised relocation summary covering all four domains.",
          },
          {
            title: "Employment Brief",
            description: "Matched jobs, market gaps, and action steps based on your skills.",
          },
          {
            title: "Integration Checklist",
            description: "Your personalised bureaucracy checklist with timelines and documents needed.",
          },
        ].map((material) => (
          <Card key={material.title}>
            <CardContent className="pt-6">
              <FileText className="h-8 w-8 text-muted-foreground mb-3" />
              <h3 className="font-semibold mb-1">{material.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{material.description}</p>
              <Button variant="outline" className="w-full" disabled>
                Generate PDF (coming soon)
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
