import { Badge } from "@/components/ui/badge";

type ConfidenceLevel = "VERIFIED" | "CURATED" | "INFERRED";

const config: Record<ConfidenceLevel, { label: string; variant: "verified" | "curated" | "gap"; emoji: string }> = {
  VERIFIED: { label: "Verified", variant: "verified", emoji: "\u{1F7E2}" },
  CURATED: { label: "Curated", variant: "curated", emoji: "\u{1F7E1}" },
  INFERRED: { label: "AI Inferred", variant: "gap", emoji: "\u{1F534}" },
};

export function ConfidenceBadge({ level }: { level: ConfidenceLevel }) {
  const { label, variant, emoji } = config[level];
  return (
    <Badge variant={variant} className="text-xs">
      {emoji} {label}
    </Badge>
  );
}
