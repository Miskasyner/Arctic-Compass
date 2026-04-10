import { PrismaClient } from "@prisma/client";

export async function seedHousing(prisma: PrismaClient) {
  await prisma.housingListing.createMany({
    data: [
      {
        title: "Cosy 2-room apartment in Salla centre",
        description:
          "Well-maintained apartment in the heart of Salla village, close to all services. Includes sauna access, storage room, and parking. Heated and water included in rent.",
        type: "APARTMENT_RENTAL",
        municipality: "salla",
        address: "Revontulentie 12, 98900 Salla",
        rent: 450,
        size: 52,
        rooms: 2,
        amenities: ["sauna", "parking", "storage", "laundry room", "heating included"],
        availableFrom: new Date("2026-05-01"),
        contactInfo: "asunnot@salla.fi",
        imageUrls: [],
        confidenceLevel: "VERIFIED",
      },
      {
        title: "Spacious 3-room apartment near school",
        description:
          "Family-friendly apartment located near Salla school and sports facilities. Recently renovated with modern kitchen. Pet-friendly building.",
        type: "APARTMENT_RENTAL",
        municipality: "salla",
        address: "Koulutie 5, 98900 Salla",
        rent: 550,
        size: 72,
        rooms: 3,
        amenities: ["sauna", "parking", "storage", "pet-friendly", "playground nearby"],
        availableFrom: new Date("2026-06-01"),
        contactInfo: "asunnot@salla.fi",
        imageUrls: [],
        confidenceLevel: "VERIFIED",
      },
      {
        title: "Studio apartment — ideal for singles",
        description:
          "Compact, warm studio apartment suitable for one person. Walking distance to K-Market and bus stop. All utilities included.",
        type: "APARTMENT_RENTAL",
        municipality: "salla",
        address: "Keskustie 8B, 98900 Salla",
        rent: 350,
        size: 32,
        rooms: 1,
        amenities: ["utilities included", "shared sauna", "bike storage"],
        availableFrom: new Date("2026-04-15"),
        contactInfo: "vuokra@sallanasunnot.fi",
        imageUrls: [],
        confidenceLevel: "CURATED",
      },
      {
        title: "Detached house with garden — Sallatunturi area",
        description:
          "Charming wooden house in a quiet area near Sallatunturi fell. 3 bedrooms, living room, kitchen, sauna, garage. Large garden with berry bushes. Perfect for a family seeking space and nature.",
        type: "HOUSE_RENTAL",
        municipality: "salla",
        address: "Tunturintie 23, 98900 Salla",
        rent: 650,
        size: 95,
        rooms: 4,
        amenities: ["own sauna", "garage", "garden", "fireplace", "storage shed"],
        availableFrom: new Date("2026-05-15"),
        contactInfo: "maria.korhonen@example.fi",
        imageUrls: [],
        confidenceLevel: "CURATED",
      },
      {
        title: "Renovated log house for sale",
        description:
          "Beautiful renovated log house with modern amenities. Traditional Finnish design with contemporary interior. Includes a separate outdoor sauna building and large plot.",
        type: "HOUSE_SALE",
        municipality: "salla",
        address: "Naruska village, Salla",
        salePrice: 65000,
        size: 85,
        rooms: 3,
        amenities: ["own sauna", "large plot", "fireplace", "well water", "wood heating"],
        contactInfo: "kiinteistot@salla.fi",
        imageUrls: [],
        confidenceLevel: "CURATED",
      },
      {
        title: "Affordable house — needs some renovation",
        description:
          "Solid structure with good potential. Needs cosmetic updates. Large plot in Salla village, close to services. An excellent option for handy buyers on a budget.",
        type: "HOUSE_SALE",
        municipality: "salla",
        salePrice: 35000,
        size: 70,
        rooms: 3,
        amenities: ["large plot", "garage", "root cellar"],
        contactInfo: "etuovi@example.fi",
        imageUrls: [],
        confidenceLevel: "CURATED",
      },
    ],
  });

  await prisma.housingIncentive.createMany({
    data: [
      {
        title: "Free building plot for families",
        description:
          "Salla municipality offers free residential building plots for families planning to build a home in Salla. Plots are available in designated residential areas with infrastructure (water, electricity, road) already in place.",
        municipality: "salla",
        amount: "Free plot (value 5,000 - 15,000 EUR)",
        eligibility: [
          "Planning to build a permanent home in Salla",
          "Family with children or planning to start a family",
          "Committed to residing in Salla for minimum 5 years",
        ],
        applicationUrl: "https://www.salla.fi/tontti",
        confidenceLevel: "VERIFIED",
      },
      {
        title: "Relocation bonus for new residents",
        description:
          "Salla offers a relocation bonus to attract new permanent residents. The bonus helps cover moving costs and initial settlement expenses.",
        municipality: "salla",
        amount: "Up to 5,000 EUR",
        eligibility: [
          "Moving to Salla as a permanent resident",
          "Registering in Salla municipality (DVV)",
          "Employed or starting a business in the area",
        ],
        applicationUrl: "https://www.salla.fi/muuttobonus",
        confidenceLevel: "CURATED",
      },
      {
        title: "Home renovation grant",
        description:
          "ARA (The Housing Finance and Development Centre of Finland) provides renovation grants for improving energy efficiency and accessibility of homes. Available for homeowners in Salla.",
        municipality: "salla",
        amount: "Up to 4,000 EUR for energy renovations",
        eligibility: [
          "Homeowner in Salla municipality",
          "Renovation improves energy efficiency",
          "Income below specified threshold",
        ],
        applicationUrl: "https://www.ara.fi/en",
        confidenceLevel: "VERIFIED",
      },
    ],
  });
}
