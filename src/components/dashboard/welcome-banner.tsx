import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface WelcomeBannerProps {
  name: string;
  municipality: string;
  overallProgress: number;
}

export function WelcomeBanner({ name, municipality, overallProgress }: WelcomeBannerProps) {
  const firstName = name.split(" ")[0];
  return (
    <Card className="bg-primary text-primary-foreground border-0">
      <CardContent className="py-6">
        <div className="flex items-start justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-1">
              Welcome, {firstName}!
            </h2>
            <p className="text-primary-foreground/80">
              Your relocation journey to {municipality} is {overallProgress}% underway.
              {overallProgress < 30
                ? " Let's explore what's waiting for you."
                : overallProgress < 70
                ? " Great progress — keep going!"
                : " You're almost ready for your new life!"}
            </p>
          </div>
          <div className="hidden sm:flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-3 py-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">{overallProgress}%</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
