import { PrismaClient } from "@prisma/client";

export async function seedEmployment(prisma: PrismaClient) {
  // Job Listings
  await prisma.jobListing.createMany({
    data: [
      {
        title: "Restaurant Manager",
        employer: "Salla Fell Hotel & Restaurant",
        description:
          "We are looking for an experienced restaurant manager to lead our growing restaurant team. The role involves managing daily operations, menu planning, staff coordination, and ensuring excellent customer experience for both Finnish and international guests.",
        requirements: [
          "3+ years restaurant management experience",
          "Customer service orientation",
          "Team leadership skills",
          "Basic English required",
        ],
        skills: ["restaurant management", "hospitality", "customer service", "team leadership", "food service"],
        sector: "Hospitality & Tourism",
        municipality: "salla",
        salaryRange: "2,800 - 3,500 EUR/month",
        employmentType: "FULL_TIME",
        languageReqs: ["en:intermediate", "fi:not_required_but_helpful"],
        contactInfo: "hr@sallafell.fi",
        sourceUrl: "https://te-palvelut.fi",
        confidenceLevel: "VERIFIED",
      },
      {
        title: "Hotel Receptionist",
        employer: "Holiday Club Salla",
        description:
          "Join our front desk team at one of Salla's premier holiday resorts. You'll be the first point of contact for guests from around the world, handling check-ins, bookings, and guest inquiries.",
        requirements: [
          "Hospitality or customer service experience",
          "Good English skills",
          "Computer literacy",
          "Friendly and professional demeanour",
        ],
        skills: ["customer service", "hospitality", "reception", "booking systems", "communication"],
        sector: "Hospitality & Tourism",
        municipality: "salla",
        salaryRange: "2,200 - 2,600 EUR/month",
        employmentType: "FULL_TIME",
        languageReqs: ["en:good", "fi:basic_helpful"],
        contactInfo: "jobs@holidayclub.fi",
        confidenceLevel: "VERIFIED",
      },
      {
        title: "Tourism Activity Guide (Seasonal)",
        employer: "Salla Wilderness Adventures",
        description:
          "Lead groups on snowmobile safaris, husky rides, Northern Lights excursions, and summer hiking trips. Training provided for specific activities. A passion for nature and working with international visitors is essential.",
        requirements: [
          "Love for outdoor activities",
          "Good physical condition",
          "English communication skills",
          "Valid driving license",
        ],
        skills: ["outdoor activities", "tourism", "customer service", "guiding", "nature"],
        sector: "Hospitality & Tourism",
        municipality: "salla",
        salaryRange: "2,000 - 2,800 EUR/month",
        employmentType: "SEASONAL",
        languageReqs: ["en:good", "fi:not_required"],
        confidenceLevel: "CURATED",
      },
      {
        title: "Kitchen Assistant / Cook",
        employer: "Ravintola Kievari Salla",
        description:
          "Local restaurant seeking a kitchen team member. Duties include food preparation, cooking, and kitchen maintenance. Experience with Nordic or international cuisine is a plus.",
        requirements: [
          "Basic cooking skills",
          "Hygiene passport (can be obtained locally)",
          "Willingness to learn Finnish cuisine",
        ],
        skills: ["cooking", "food preparation", "kitchen management", "food service"],
        sector: "Hospitality & Tourism",
        municipality: "salla",
        salaryRange: "2,000 - 2,400 EUR/month",
        employmentType: "FULL_TIME",
        languageReqs: ["en:basic", "fi:not_required"],
        confidenceLevel: "CURATED",
      },
      {
        title: "Grocery Store Assistant",
        employer: "K-Market Salla",
        description:
          "Part-time position in Salla's main grocery store. Tasks include customer service, stocking shelves, cashier duties, and maintaining store cleanliness.",
        requirements: [
          "Customer service attitude",
          "Ability to work in shifts",
          "Basic Finnish helpful but not required initially",
        ],
        skills: ["retail", "customer service", "cashier"],
        sector: "Retail",
        municipality: "salla",
        salaryRange: "1,800 - 2,100 EUR/month",
        employmentType: "PART_TIME",
        languageReqs: ["fi:basic_helpful", "en:basic"],
        confidenceLevel: "CURATED",
      },
      {
        title: "Maintenance Technician",
        employer: "Salla Municipality",
        description:
          "The municipality is seeking a maintenance technician for public buildings and infrastructure. Responsibilities include building maintenance, snow removal, basic plumbing and electrical work.",
        requirements: [
          "Technical/vocational education or equivalent experience",
          "Valid driving license (B, C preferred)",
          "Ability to work independently",
        ],
        skills: ["maintenance", "technical", "plumbing", "electrical", "construction"],
        sector: "Public Services",
        municipality: "salla",
        salaryRange: "2,400 - 2,900 EUR/month",
        employmentType: "FULL_TIME",
        languageReqs: ["fi:basic_required"],
        confidenceLevel: "VERIFIED",
      },
      {
        title: "Cleaner / Housekeeping Staff",
        employer: "Salla Fell Hotel & Restaurant",
        description:
          "Hotel housekeeping position including room cleaning, linen management, and maintaining cleanliness standards. Full training provided.",
        requirements: ["Attention to detail", "Physical fitness", "Reliable and punctual"],
        skills: ["cleaning", "housekeeping", "hospitality"],
        sector: "Hospitality & Tourism",
        municipality: "salla",
        salaryRange: "1,900 - 2,200 EUR/month",
        employmentType: "FULL_TIME",
        languageReqs: ["en:basic", "fi:not_required"],
        confidenceLevel: "CURATED",
      },
      {
        title: "Remote Software Developer",
        employer: "Various (Remote-friendly positions)",
        description:
          "Multiple Finnish companies offer remote-friendly software development positions. Living in Salla while working remotely is increasingly popular. Fast internet infrastructure is available throughout the municipality.",
        requirements: [
          "Software development experience",
          "Self-motivated remote worker",
          "Good internet connection (available in Salla)",
        ],
        skills: ["software development", "programming", "IT", "remote work"],
        sector: "Technology",
        municipality: "salla",
        salaryRange: "3,500 - 5,500 EUR/month",
        employmentType: "FULL_TIME",
        languageReqs: ["en:good", "fi:not_required"],
        confidenceLevel: "INFERRED",
      },
    ],
  });

  // Market Gaps
  await prisma.marketGap.createMany({
    data: [
      {
        title: "Tapas Restaurant / Mediterranean Cuisine",
        description:
          "Salla has only basic Finnish restaurant options but receives 12,000+ tourist visits per year, many from Southern Europe. There is no Mediterranean or tapas-style restaurant in the area. With growing international tourism and a lack of diverse dining options, a tapas/Mediterranean restaurant could capture both tourist and local demand. The nearest comparable restaurant is 150km away in Rovaniemi.",
        sector: "Hospitality & Food Service",
        municipality: "salla",
        demandLevel: "HIGH",
        requiredSkills: ["restaurant management", "cooking", "hospitality", "food service", "customer service"],
        potentialIncome: "3,000 - 5,000 EUR/month (owner-operator)",
        supportAvailable: [
          "Business Finland startup grant (up to 50,000 EUR)",
          "ELY Centre business development grant",
          "Salla municipality new business incentive",
          "Free business advisory at Salla Enterprise Agency",
        ],
        confidenceLevel: "CURATED",
        source: "Cross-referenced tourism statistics, restaurant density data, and tourist origin analysis",
      },
      {
        title: "International Tourism Guide Service",
        description:
          "Spanish-speaking tourism services are completely absent despite growing Spanish and Latin American tourist numbers. A multi-lingual guide service offering cultural tourism experiences (Northern Lights, husky safaris, ice fishing) in Spanish, English, and potentially Portuguese would fill a clear market gap.",
        sector: "Tourism Services",
        municipality: "salla",
        demandLevel: "HIGH",
        requiredSkills: ["tourism", "guiding", "customer service", "languages", "outdoor activities"],
        potentialIncome: "2,500 - 4,500 EUR/month (seasonal variation)",
        supportAvailable: [
          "TE-palvelut startup grant for new entrepreneurs",
          "Salla tourism cooperative membership",
          "Visit Finland marketing support",
        ],
        confidenceLevel: "CURATED",
        source: "Tourist visitor statistics, language service availability analysis",
      },
      {
        title: "Catering & Event Services",
        description:
          "No dedicated catering service exists in the Salla area. Events, corporate retreats, and tourism groups currently rely on limited hotel restaurant options. A flexible catering service could serve weddings, corporate events, tourist group dining, and local celebrations.",
        sector: "Hospitality & Food Service",
        municipality: "salla",
        demandLevel: "MEDIUM",
        requiredSkills: ["catering", "cooking", "event management", "food service", "logistics"],
        potentialIncome: "2,500 - 4,000 EUR/month",
        supportAvailable: [
          "Business Finland startup grant",
          "Salla Enterprise Agency free consultation",
        ],
        confidenceLevel: "INFERRED",
        source: "Local event frequency analysis, service provider density",
      },
      {
        title: "Wellness & Spa Services",
        description:
          "With growing wellness tourism trends and Salla's natural assets (clean air, nature, silence), there is an opportunity for a wellness practitioner offering massage, yoga, or nature therapy services. Current options are extremely limited.",
        sector: "Wellness & Health",
        municipality: "salla",
        demandLevel: "MEDIUM",
        requiredSkills: ["massage therapy", "wellness", "yoga", "customer service"],
        potentialIncome: "2,000 - 3,500 EUR/month",
        supportAvailable: [
          "ELY Centre business development grant",
          "Salla tourism cooperative partnership",
        ],
        confidenceLevel: "INFERRED",
        source: "Tourism trend analysis, local service gap survey",
      },
    ],
  });
}
