import Link from "next/link";
import { type LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface DomainCardProps {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconColor: string;
  progress: number;
  itemCount: number;
  itemLabel: string;
}

export function DomainCard({
  title,
  description,
  href,
  icon: Icon,
  iconColor,
  progress,
  itemCount,
  itemLabel,
}: DomainCardProps) {
  return (
    <Link href={href}>
      <Card className="hover:shadow-md transition-shadow cursor-pointer h-full">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div className={`h-10 w-10 rounded-lg ${iconColor} flex items-center justify-center`}>
              <Icon className="h-5 w-5" />
            </div>
            <span className="text-sm font-medium text-muted-foreground">
              {progress}%
            </span>
          </div>
          <CardTitle className="text-lg mt-2">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-3">{description}</p>
          <Progress value={progress} className="mb-2" />
          <p className="text-xs text-muted-foreground">
            {itemCount} {itemLabel}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
