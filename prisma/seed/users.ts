import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

export async function seedUsers(prisma: PrismaClient) {
  const passwordHash = await bcrypt.hash("demo1234", 10);

  const maria = await prisma.user.upsert({
    where: { email: "maria@demo.example" },
    update: {},
    create: {
      email: "maria@demo.example",
      passwordHash,
      name: "Maria Garcia",
    },
  });

  await prisma.profile.upsert({
    where: { userId: maria.id },
    update: {},
    create: {
      userId: maria.id,
      originCountry: "ES",
      nationality: "Spanish",
      nativeLanguage: "Spanish",
      otherLanguages: ["en:basic", "fi:none"],

      familyStatus: "WITH_PARTNER",
      partnerName: "Diego",
      dependents: 0,
      dependentAges: [],

      educationLevel: "VOCATIONAL",
      fieldOfStudy: "Hospitality Management",
      currentOccupation: "Hotel receptionist",
      skills: [
        "hotel management",
        "customer service",
        "food service",
        "restaurant operations",
        "booking systems",
        "basic bookkeeping",
        "team coordination",
      ],
      yearsExperience: 10,
      certifications: ["Hospitality Management Diploma", "Food Safety Certificate"],

      targetMunicipality: "salla",
      timeline: "WITHIN_6_MONTHS",
      budget: "FROM_500_TO_800",
      housingPreference: "RENTAL_APARTMENT",

      interests: ["cooking", "hiking", "photography", "cultural events", "nature"],
      motivations: [
        "Seeking a quieter life closer to nature",
        "Attracted by Finnish quality of life",
        "Want to build something of our own",
        "Fascinated by Lapland and Northern Lights",
      ],
      concerns: [
        "Language barrier — neither of us speaks Finnish",
        "Finding work in hospitality in a small town",
        "Partner Diego needs work too",
        "Adapting to the dark winter months",
        "Being far from family in Spain",
      ],
    },
  });

  // Add some initial progress items for Maria
  await prisma.progressItem.createMany({
    data: [
      {
        userId: maria.id,
        domain: "EMPLOYMENT",
        category: "exploration",
        title: "Explore employment opportunities",
        status: "IN_PROGRESS",
      },
      {
        userId: maria.id,
        domain: "HOUSING",
        category: "exploration",
        title: "Review housing options",
        status: "NOT_STARTED",
      },
      {
        userId: maria.id,
        domain: "INTEGRATION",
        category: "pre-arrival",
        title: "Check residence permit requirements",
        status: "COMPLETED",
        completedAt: new Date(),
      },
      {
        userId: maria.id,
        domain: "COMMUNITY",
        category: "exploration",
        title: "Explore community & social opportunities",
        status: "NOT_STARTED",
      },
    ],
  });
}
