import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User } from "lucide-react";

export default async function ProfilePage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.user.id },
    include: { profile: true },
  });

  const profile = user?.profile;

  if (!profile) {
    redirect("/onboarding");
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <User className="h-8 w-8 text-primary" />
          Your Profile
        </h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground">Name</p>
              <p className="font-medium">{user.name}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Email</p>
              <p className="font-medium">{user.email}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Origin</p>
              <p className="font-medium">{profile.originCountry}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Native language</p>
              <p className="font-medium">{profile.nativeLanguage}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Family status</p>
              <p className="font-medium">{profile.familyStatus.replace(/_/g, " ")}</p>
            </div>
            {profile.partnerName && (
              <div>
                <p className="text-muted-foreground">Partner</p>
                <p className="font-medium">{profile.partnerName}</p>
              </div>
            )}
            <div>
              <p className="text-muted-foreground">Education</p>
              <p className="font-medium">{profile.educationLevel.replace(/_/g, " ")}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Occupation</p>
              <p className="font-medium">{profile.currentOccupation || "Not specified"}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Target</p>
              <p className="font-medium capitalize">{profile.targetMunicipality}</p>
            </div>
            <div>
              <p className="text-muted-foreground">Timeline</p>
              <p className="font-medium">{profile.timeline.replace(/_/g, " ")}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {profile.skills.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Skills</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {profile.skills.map((skill) => (
                <Badge key={skill} variant="secondary">{skill}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {profile.interests.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Interests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {profile.interests.map((interest) => (
                <Badge key={interest} variant="outline">{interest}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {profile.concerns.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Concerns</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {profile.concerns.map((concern) => (
                <li key={concern}>{concern}</li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
