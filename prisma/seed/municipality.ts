import { PrismaClient } from "@prisma/client";

export async function seedMunicipality(prisma: PrismaClient) {
  await prisma.municipality.upsert({
    where: { slug: "salla" },
    update: {},
    create: {
      slug: "salla",
      name: "Salla",
      region: "Lapland",
      population: 3400,
      description:
        "Salla is a municipality in Finnish Lapland, known for its stunning arctic nature, fell landscapes, and growing tourism industry. Located near the Russian border, Salla offers a unique combination of wilderness living, outdoor recreation, and a tight-knit community. The municipality actively welcomes newcomers and offers incentives for relocation.",
      highlights: [
        "Gateway to arctic wilderness with pristine nature",
        "Salla Ski Resort — growing tourism destination",
        "Affordable housing and free building plots for families",
        "Strong community spirit with active local associations",
        "Northern Lights visible 150+ nights per year",
        "Growing demand for hospitality and tourism professionals",
        "Safe, family-friendly environment with excellent schools",
      ],
      website: "https://www.salla.fi",
      contactEmail: "info@salla.fi",
      latitude: 66.8333,
      longitude: 28.6667,
      imageUrls: [],
    },
  });
}
