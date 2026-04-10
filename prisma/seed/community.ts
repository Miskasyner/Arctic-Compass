import { PrismaClient } from "@prisma/client";

export async function seedCommunity(prisma: PrismaClient) {
  await prisma.event.createMany({
    data: [
      {
        title: "Weekly Language Cafe (Kielikahvila)",
        description:
          "Practice Finnish in a relaxed atmosphere! Meet locals and other newcomers over coffee. All levels welcome. Native Finnish speakers volunteer to help with conversation practice.",
        date: new Date("2026-04-16T17:00:00"),
        endDate: new Date("2026-04-16T19:00:00"),
        location: "Salla Library, Keskustie 2",
        municipality: "salla",
        category: "Language & Culture",
        organizer: "Salla Integration Services",
        isFree: true,
        familyFriendly: true,
        confidenceLevel: "CURATED",
      },
      {
        title: "International Dinner — Share Your Culture",
        description:
          "Monthly potluck dinner where newcomers and locals share dishes from their home countries. A wonderful way to meet people and experience different cultures. Bring a dish to share!",
        date: new Date("2026-04-25T18:00:00"),
        endDate: new Date("2026-04-25T21:00:00"),
        location: "Salla Community Hall (Seuratalo)",
        municipality: "salla",
        category: "Social & Cultural",
        organizer: "Salla Multicultural Association",
        isFree: true,
        familyFriendly: true,
        confidenceLevel: "CURATED",
      },
      {
        title: "Spring Nature Walk — Birdwatching in Salla",
        description:
          "Guided nature walk focusing on spring migratory birds in the Salla wilderness. Learn about Finnish nature and meet nature enthusiasts. Binoculars provided.",
        date: new Date("2026-05-10T10:00:00"),
        endDate: new Date("2026-05-10T14:00:00"),
        location: "Meeting point: Salla Visitor Centre",
        municipality: "salla",
        category: "Nature & Outdoors",
        organizer: "Salla Nature Association",
        isFree: true,
        familyFriendly: true,
        confidenceLevel: "CURATED",
      },
      {
        title: "Newcomer Welcome Coffee at Municipal Office",
        description:
          "Informal welcome event for new residents of Salla. Meet municipal officials, learn about local services, and connect with other newcomers. Information available in English.",
        date: new Date("2026-05-03T14:00:00"),
        endDate: new Date("2026-05-03T16:00:00"),
        location: "Salla Municipal Office",
        municipality: "salla",
        category: "Community & Integration",
        organizer: "Salla Municipality",
        isFree: true,
        familyFriendly: true,
        confidenceLevel: "VERIFIED",
      },
      {
        title: "Cross-Country Skiing for Beginners",
        description:
          "Learn the basics of cross-country skiing! Equipment provided free of charge. Finnish families and newcomers ski together. A great way to experience Finnish winter culture.",
        date: new Date("2026-04-20T11:00:00"),
        endDate: new Date("2026-04-20T14:00:00"),
        location: "Salla Ski Resort, beginner tracks",
        municipality: "salla",
        category: "Sports & Recreation",
        organizer: "Salla Sports Club",
        isFree: true,
        familyFriendly: true,
        confidenceLevel: "CURATED",
      },
    ],
  });

  await prisma.mentor.createMany({
    data: [
      {
        name: "Carlos Herrera",
        bio: "Moved from Barcelona to Salla 3 years ago. Started as a kitchen assistant and now runs a small catering business. Speaks Spanish, English, and basic Finnish. Happy to help fellow Spanish speakers navigate life in Lapland.",
        originCountry: "ES",
        currentRole: "Entrepreneur — Catering Business Owner",
        municipality: "salla",
        yearsInFinland: 3,
        languages: ["es", "en", "fi:basic"],
        expertise: ["starting a business", "hospitality", "adjusting to Finnish life", "winter survival"],
        availability: "Weekday evenings, weekends",
        contactMethod: "Through Arctic Compass platform",
        confidenceLevel: "CURATED",
      },
      {
        name: "Elena Popescu",
        bio: "Romanian teacher who moved to Salla 5 years ago with her husband. Now works at Salla school and speaks fluent Finnish. Experienced in navigating bureaucracy, learning Finnish, and building a social network from scratch.",
        originCountry: "RO",
        currentRole: "Teacher at Salla Comprehensive School",
        municipality: "salla",
        yearsInFinland: 5,
        languages: ["ro", "en", "fi:fluent"],
        expertise: ["Finnish language learning", "school system", "bureaucracy", "family integration"],
        availability: "Weekday afternoons after school",
        contactMethod: "Through Arctic Compass platform",
        confidenceLevel: "CURATED",
      },
      {
        name: "Marco Rossi",
        bio: "Italian tourism entrepreneur who fell in love with Lapland during a holiday and decided to stay. Runs a successful adventure tourism company. Can help with business planning, permits, and finding your place in the Salla community.",
        originCountry: "IT",
        currentRole: "CEO — Lapland Adventure Tours",
        municipality: "salla",
        yearsInFinland: 4,
        languages: ["it", "en", "fi:intermediate"],
        expertise: ["entrepreneurship", "tourism", "business permits", "networking"],
        availability: "Weekends, some weekday evenings",
        contactMethod: "Through Arctic Compass platform",
        confidenceLevel: "CURATED",
      },
    ],
  });

  await prisma.hobbyGroup.createMany({
    data: [
      {
        name: "Salla Cross-Country Skiing Club",
        description:
          "Open group for all levels. Weekly group skiing in winter, hiking and trail running in summer. Equipment lending available for beginners. A great way to meet active locals.",
        category: "Sports & Outdoors",
        municipality: "salla",
        meetingSchedule: "Saturdays at 10:00 (winter) / Sundays at 10:00 (summer)",
        location: "Salla Ski Resort / Salla Sports Hall",
        familyFriendly: true,
        confidenceLevel: "CURATED",
      },
      {
        name: "Salla Photography Club",
        description:
          "Capture the beauty of Lapland! Monthly themed photo walks, Northern Lights photography sessions, and photo sharing meetings. All skill levels and camera types welcome.",
        category: "Arts & Culture",
        municipality: "salla",
        meetingSchedule: "First Saturday of each month at 14:00",
        location: "Salla Library / Various outdoor locations",
        familyFriendly: true,
        confidenceLevel: "CURATED",
      },
      {
        name: "Volunteer Nature Guides (Luonto-oppaat)",
        description:
          "Join a group of volunteer nature guides who lead walks for tourists and locals. Training provided. A fantastic way to learn about Finnish nature while making friends and contributing to the community.",
        category: "Volunteering & Nature",
        municipality: "salla",
        meetingSchedule: "Monthly meetings + guided walks on demand",
        location: "Salla Visitor Centre",
        familyFriendly: false,
        confidenceLevel: "CURATED",
      },
      {
        name: "International Families Group",
        description:
          "Support network for families with an international background in Salla and surrounding municipalities. Playdates for children, parenting tips for Finnish life, and mutual support.",
        category: "Family & Social",
        municipality: "salla",
        meetingSchedule: "Bi-weekly Wednesdays at 16:00",
        location: "Salla Family Centre / Playground",
        familyFriendly: true,
        confidenceLevel: "CURATED",
      },
    ],
  });
}
