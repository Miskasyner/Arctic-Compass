import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ConfidenceBadge } from "@/components/domain/confidence-badge";
import { Users, Calendar, UserCheck, Heart } from "lucide-react";

export default async function CommunityPage() {
  const session = await auth();
  if (!session?.user?.id) redirect("/login");

  const profile = await prisma.profile.findUnique({
    where: { userId: session.user.id },
  });

  const municipality = profile?.targetMunicipality || "salla";

  const [events, mentors, groups, stories] = await Promise.all([
    prisma.event.findMany({
      where: { municipality },
      orderBy: { date: "asc" },
    }),
    prisma.mentor.findMany({
      where: { municipality },
    }),
    prisma.hobbyGroup.findMany({
      where: { municipality },
    }),
    prisma.successStory.findMany({
      where: { municipality, domains: { has: "COMMUNITY" } },
    }),
  ]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div>
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-purple-100 text-purple-600 flex items-center justify-center">
            <Users className="h-5 w-5" />
          </div>
          Community
        </h1>
        <p className="text-muted-foreground mt-1">
          Events, mentors, and groups to help you belong.
        </p>
      </div>

      {/* Events */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Calendar className="h-5 w-5" />
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {events.map((event) => (
            <Card key={event.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <CardTitle className="text-base">{event.title}</CardTitle>
                  <ConfidenceBadge level={event.confidenceLevel} />
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{event.description}</p>
                <div className="space-y-1 text-xs text-muted-foreground">
                  <p>
                    {new Date(event.date).toLocaleDateString("en-GB", {
                      weekday: "long",
                      day: "numeric",
                      month: "long",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                  <p>{event.location}</p>
                </div>
                <div className="flex gap-2 mt-3">
                  <Badge variant="secondary">{event.category}</Badge>
                  {event.isFree && <Badge variant="verified">Free</Badge>}
                  {event.familyFriendly && <Badge variant="outline">Family-friendly</Badge>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Mentors */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <UserCheck className="h-5 w-5" />
          Mentors
        </h2>
        <div className="grid md:grid-cols-3 gap-4">
          {mentors.map((mentor) => (
            <Card key={mentor.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-base">{mentor.name}</CardTitle>
                    <p className="text-xs text-muted-foreground">
                      From {mentor.originCountry} | {mentor.yearsInFinland} years in Finland
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">{mentor.bio}</p>
                <p className="text-xs font-medium mb-1">{mentor.currentRole}</p>
                <div className="flex flex-wrap gap-1 mt-2">
                  {mentor.expertise.map((exp) => (
                    <Badge key={exp} variant="outline" className="text-xs">
                      {exp}
                    </Badge>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Languages: {mentor.languages.join(", ")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Hobby Groups */}
      <section>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Heart className="h-5 w-5" />
          Hobby Groups & Activities
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          {groups.map((group) => (
            <Card key={group.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-base">{group.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-2">{group.description}</p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{group.category}</Badge>
                  {group.meetingSchedule && (
                    <Badge variant="outline">{group.meetingSchedule}</Badge>
                  )}
                  {group.familyFriendly && <Badge variant="outline">Family-friendly</Badge>}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Community Stories */}
      {stories.length > 0 && (
        <section>
          <h2 className="text-xl font-semibold mb-4">Community Stories</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {stories.map((story) => (
              <Card key={story.id}>
                <CardHeader>
                  <CardTitle className="text-base">{story.title}</CardTitle>
                  <p className="text-sm text-primary">{story.personName}</p>
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
