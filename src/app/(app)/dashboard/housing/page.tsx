import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConfidenceBadge } from "@/components/domain/confidence-badge";
import { Home, Gift } from "lucide-react";

export default async function HousingPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const profile = await prisma.profile.findUnique({
    where: { userId: session.user.id },
  });

  const municipality = profile?.targetMunicipality || "salla";

  const [listings, incentives] = await Promise.all([
    prisma.housingListing.findMany({
      where: { municipality, isActive: true },
    }),
    prisma.housingIncentive.findMany({
      where: { municipality },
    }),
  ]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center">
            <Home className="h-5 w-5" />
          </div>
          Housing
        </h1>
        <p className="text-muted-foreground mt-1">
          Available homes and municipal incentives for newcomers.
        </p>
      </div>

      {/* Incentives */}
      {incentives.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Gift className="h-5 w-5 text-emerald-600" />
            Municipal Incentives
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {incentives.map((inc) => (
              <Card key={inc.id} className="border-l-4 border-l-emerald-500">
                <CardHeader className="pb-2">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-base">{inc.title}</CardTitle>
                    <ConfidenceBadge level={inc.confidenceLevel} />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-2">{inc.description}</p>
                  {inc.amount && (
                    <p className="text-sm font-semibold text-emerald-600">{inc.amount}</p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      )}

      {/* Listings */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Available Housing ({listings.length})</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {listings.map((listing) => (
            <Card key={listing.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">{listing.title}</CardTitle>
                  <ConfidenceBadge level={listing.confidenceLevel} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{listing.description}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  <Badge variant="secondary">{listing.type.replace(/_/g, " ")}</Badge>
                  {listing.size && <Badge variant="outline">{listing.size} m&sup2;</Badge>}
                  {listing.rooms && <Badge variant="outline">{listing.rooms} rooms</Badge>}
                </div>
                <div className="text-lg font-bold text-primary">
                  {listing.rent
                    ? `${listing.rent} EUR/month`
                    : listing.salePrice
                    ? `${Number(listing.salePrice).toLocaleString()} EUR`
                    : "Contact for price"}
                </div>
                {listing.address && (
                  <p className="text-xs text-muted-foreground mt-1">{listing.address}</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
