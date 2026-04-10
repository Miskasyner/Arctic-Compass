import { PrismaClient } from "@prisma/client";

export async function seedIntegration(prisma: PrismaClient) {
  await prisma.bureaucracyStep.createMany({
    data: [
      // PRE_ARRIVAL
      {
        title: "Check residence permit requirements",
        description:
          "EU/EEA citizens have the right to move to Finland freely. You need to register your right of residence if staying longer than 3 months. Non-EU citizens need a residence permit from Migri before arrival.",
        category: "PRE_ARRIVAL",
        orderIndex: 1,
        estimatedDays: 1,
        requiredDocs: ["Valid passport or EU ID card"],
        url: "https://migri.fi/en/moving-to-finland",
        tips: "EU citizens: No visa needed. Just plan to register after arrival. Non-EU: Apply for a residence permit through Enter Finland (enterfinland.fi) well in advance.",
        confidenceLevel: "VERIFIED",
        dependsOn: [],
      },
      {
        title: "Arrange temporary housing",
        description:
          "Secure accommodation for your first weeks in Salla while you search for permanent housing. Options include Airbnb, hotel, or municipal temporary housing.",
        category: "PRE_ARRIVAL",
        orderIndex: 2,
        estimatedDays: 7,
        requiredDocs: [],
        tips: "Contact Salla municipality (info@salla.fi) about temporary housing options for newcomers. Some landlords offer short-term leases for new arrivals.",
        confidenceLevel: "CURATED",
        dependsOn: [],
      },
      {
        title: "Gather and translate key documents",
        description:
          "Prepare copies of your educational certificates, work references, marriage certificate (if applicable), and children's birth certificates. Some may need official translation or apostille.",
        category: "PRE_ARRIVAL",
        orderIndex: 3,
        estimatedDays: 14,
        requiredDocs: ["Educational certificates", "Work references", "Marriage certificate", "Birth certificates"],
        tips: "Finland accepts apostilled documents from EU countries. Get translations into English or Finnish from an authorised translator in your home country — it's cheaper than translating in Finland.",
        confidenceLevel: "VERIFIED",
        dependsOn: [],
      },

      // FIRST_WEEK
      {
        title: "Register at DVV (Digital and Population Data Services Agency)",
        description:
          "Register your move to Finland at DVV. This gives you a Finnish personal identity code (henkilötunnus), which you'll need for almost everything. EU citizens register right of residence at the same time.",
        category: "FIRST_WEEK",
        orderIndex: 4,
        estimatedDays: 3,
        requiredDocs: ["Passport/ID", "Proof of accommodation", "Employment contract or proof of funds"],
        url: "https://dvv.fi/en/moving-to-finland",
        tips: "Book an appointment at the nearest DVV office (Sodankylä, 80km from Salla, or online). Processing takes 1-3 weeks. Your personal identity code is essential for the next steps.",
        confidenceLevel: "VERIFIED",
        dependsOn: [],
      },
      {
        title: "Open a Finnish bank account",
        description:
          "A Finnish bank account is needed for salary payments, rent, and daily transactions. Major banks include Nordea, OP, and S-Pankki.",
        category: "FIRST_WEEK",
        orderIndex: 5,
        estimatedDays: 7,
        requiredDocs: ["Passport/ID", "Finnish personal identity code", "Proof of address"],
        tips: "OP Bank has a branch accessible from Salla. You can also start with Holvi or N26 (online banks) while waiting for a traditional account. Some banks require a personal identity code first.",
        confidenceLevel: "VERIFIED",
        dependsOn: [],
      },
      {
        title: "Apply for a tax card (verokortti)",
        description:
          "Get a tax card from the Finnish Tax Administration (Vero). Your employer needs this to withhold the correct amount of tax from your salary.",
        category: "FIRST_WEEK",
        orderIndex: 6,
        estimatedDays: 5,
        requiredDocs: ["Finnish personal identity code", "Employment contract or estimated income"],
        url: "https://www.vero.fi/en/individuals/",
        tips: "Apply online at vero.fi after getting your personal identity code. Without a tax card, your employer will withhold 60% tax. The process is straightforward and usually takes a few days.",
        confidenceLevel: "VERIFIED",
        dependsOn: [],
      },

      // FIRST_MONTH
      {
        title: "Register with Kela (Social Insurance Institution)",
        description:
          "Kela provides social security benefits including healthcare, housing allowance, child benefits, and unemployment support. You must register to access Finnish social security.",
        category: "FIRST_MONTH",
        orderIndex: 7,
        estimatedDays: 14,
        requiredDocs: ["Finnish personal identity code", "Proof of employment or residence permit"],
        url: "https://www.kela.fi/web/en/moving-to-finland",
        tips: "Apply online at kela.fi. Processing takes 2-4 weeks. Once registered, you get a Kela card and access to public healthcare. You may be eligible for housing allowance (asumistuki) immediately.",
        confidenceLevel: "VERIFIED",
        dependsOn: [],
      },
      {
        title: "Register with public healthcare",
        description:
          "Register at the Lapland Wellbeing Services County (Lapin hyvinvointialue) to access public healthcare services. The nearest health centre to Salla provides basic medical services.",
        category: "FIRST_MONTH",
        orderIndex: 8,
        estimatedDays: 7,
        requiredDocs: ["Kela card or registration confirmation", "Finnish personal identity code"],
        url: "https://lapha.fi/en",
        tips: "Salla has a local health station for basic services. For specialist care, you may need to travel to Sodankylä or Rovaniemi. Emergency services are always available.",
        confidenceLevel: "VERIFIED",
        municipality: "salla",
        dependsOn: [],
      },
      {
        title: "Sign up for Finnish language courses",
        description:
          "Start learning Finnish as soon as possible. Options include local adult education (kansalaisopisto), TE-office integration courses, and online resources.",
        category: "FIRST_MONTH",
        orderIndex: 9,
        estimatedDays: 7,
        requiredDocs: [],
        tips: "The Salla adult education centre (kansalaisopisto) offers Finnish courses for immigrants. TE-office may provide free integration training including Finnish. Start with online apps (Finnishpod101, Duolingo) immediately.",
        confidenceLevel: "CURATED",
        municipality: "salla",
        dependsOn: [],
      },

      // FIRST_3_MONTHS
      {
        title: "Create an integration plan at TE-office",
        description:
          "If you are unemployed or working less than full-time, the TE-office creates a personalised integration plan (kotoutumissuunnitelma) that may include Finnish courses, work training, and career guidance.",
        category: "FIRST_3_MONTHS",
        orderIndex: 10,
        estimatedDays: 30,
        requiredDocs: ["Finnish personal identity code", "CV/resume", "Educational certificates"],
        url: "https://www.te-palvelut.fi/en/",
        tips: "The integration plan is optional for employed people but recommended. It opens access to free language courses and integration allowance. Contact the Lapland TE-office.",
        confidenceLevel: "VERIFIED",
        dependsOn: [],
      },
      {
        title: "Exchange or validate driving license",
        description:
          "EU driving licenses are valid in Finland for 2 years after establishing residence. After that, you must exchange it for a Finnish license. Non-EU licenses may need to be exchanged sooner.",
        category: "FIRST_3_MONTHS",
        orderIndex: 11,
        estimatedDays: 14,
        requiredDocs: ["Current driving license", "Finnish personal identity code", "Passport photo"],
        url: "https://www.traficom.fi/en/transport/road/exchange-foreign-driving-licence",
        tips: "EU license exchange is straightforward — no driving test required. Non-EU may require a test. Having a car in Salla is highly recommended due to distances. Apply through Ajovarma.",
        confidenceLevel: "VERIFIED",
        dependsOn: [],
      },
      {
        title: "Explore childcare and school options (if applicable)",
        description:
          "Finland offers excellent public childcare (päivähoito) and education (peruskoulu). Salla has a primary school and early childhood education centre. Services are available in Finnish.",
        category: "FIRST_3_MONTHS",
        orderIndex: 12,
        estimatedDays: 14,
        requiredDocs: ["Children's personal identity codes", "Previous school records (if school-age)"],
        municipality: "salla",
        tips: "Contact Salla municipality education department. Finnish schools provide free meals, materials, and transport. Preparatory education (VALMO) is available for children who don't speak Finnish.",
        confidenceLevel: "VERIFIED",
        dependsOn: [],
      },

      // ONGOING
      {
        title: "Apply for municipal services and benefits",
        description:
          "As a registered resident, explore municipal services: library, sports facilities, cultural events, and potential financial benefits like housing allowance from Kela.",
        category: "ONGOING",
        orderIndex: 13,
        estimatedDays: 0,
        requiredDocs: [],
        municipality: "salla",
        tips: "The Salla library offers free internet, Finnish learning materials, and community events. The sports hall has affordable fitness classes. Check salla.fi for all available services.",
        confidenceLevel: "CURATED",
        dependsOn: [],
      },
      {
        title: "Continue Finnish language learning",
        description:
          "Reaching functional Finnish proficiency (B1 level) typically takes 1-2 years of active study. Combine formal courses with daily practice, conversation groups, and immersion.",
        category: "ONGOING",
        orderIndex: 14,
        estimatedDays: 0,
        requiredDocs: [],
        tips: "Join the weekly language cafe in Salla. Watch Finnish TV with subtitles (Yle Areena). Practice with neighbours — Finns appreciate the effort. Set a goal of learning 5 new words per day.",
        confidenceLevel: "CURATED",
        dependsOn: [],
      },
    ],
  });

  await prisma.languageResource.createMany({
    data: [
      {
        title: "Salla Kansalaisopisto Finnish Course",
        description:
          "Beginner and intermediate Finnish courses at Salla's adult education centre. Small groups, experienced teachers. Classes 2-3 times per week.",
        type: "COURSE",
        provider: "Salla kansalaisopisto",
        cost: "50-100 EUR/semester",
        level: "A1-B1",
        municipality: "salla",
        online: false,
        confidenceLevel: "VERIFIED",
      },
      {
        title: "TE-office Integration Finnish Training",
        description:
          "Free intensive Finnish language training as part of the integration programme. Full-time study for 6-12 months, including integration allowance.",
        type: "COURSE",
        provider: "TE-palvelut / Lapland ELY Centre",
        url: "https://www.te-palvelut.fi/en/",
        cost: "Free (with integration allowance)",
        level: "A1-B1",
        online: false,
        confidenceLevel: "VERIFIED",
      },
      {
        title: "Finnishpod101",
        description:
          "Online Finnish learning platform with audio and video lessons. Structured curriculum from absolute beginner to advanced. Podcast-style format great for commuters.",
        type: "APP",
        provider: "Innovative Language Learning",
        url: "https://www.finnishpod101.com",
        cost: "Free basic / 8 EUR/month premium",
        level: "A1-B2",
        online: true,
        confidenceLevel: "CURATED",
      },
      {
        title: "Duolingo Finnish",
        description:
          "Free gamified Finnish learning app. Good for building basic vocabulary and getting started. Available in Spanish and English.",
        type: "APP",
        provider: "Duolingo",
        url: "https://www.duolingo.com/course/fi",
        cost: "Free (Premium optional)",
        level: "A1-A2",
        online: true,
        confidenceLevel: "CURATED",
      },
      {
        title: "Salla Language Cafe (Kielikahvila)",
        description:
          "Weekly informal conversation practice at Salla library. Meet locals and other newcomers. Practise Finnish in a relaxed, supportive environment with coffee and snacks.",
        type: "CONVERSATION_GROUP",
        provider: "Salla Library & Integration Services",
        cost: "Free",
        level: "All levels",
        municipality: "salla",
        online: false,
        confidenceLevel: "CURATED",
      },
      {
        title: "YKI Test Preparation (Finnish for Immigrants)",
        description:
          "Finnish language proficiency test recognised by Finnish authorities. Needed for Finnish citizenship and some jobs. Courses available online and through integration training.",
        type: "SELF_STUDY",
        provider: "Jyväskylä University / Various",
        url: "https://www.jyu.fi/en/apply/yki",
        cost: "Test fee: 100 EUR",
        level: "B1-B2",
        online: true,
        confidenceLevel: "VERIFIED",
      },
    ],
  });

  await prisma.incentive.createMany({
    data: [
      {
        title: "TE-office Integration Allowance",
        description:
          "Financial support during integration training (Finnish language courses). Available for unemployed newcomers following an integration plan.",
        domain: "INTEGRATION",
        provider: "Kela / TE-palvelut",
        amount: "Approximately 800 EUR/month",
        eligibility: [
          "Registered in Finland",
          "Following an integration plan",
          "Attending integration training",
        ],
        applicationUrl: "https://www.kela.fi",
        confidenceLevel: "VERIFIED",
      },
      {
        title: "Kela Housing Allowance (Asumistuki)",
        description:
          "Monthly financial support for housing costs. Available for both renters and homeowners with low or moderate income.",
        domain: "HOUSING",
        provider: "Kela",
        amount: "Up to 80% of reasonable housing costs",
        eligibility: [
          "Registered in Finland",
          "Income below threshold",
          "Kela-eligible housing",
        ],
        applicationUrl: "https://www.kela.fi/web/en/housing-allowance",
        confidenceLevel: "VERIFIED",
      },
      {
        title: "Startup Grant (Starttiraha)",
        description:
          "Financial support for new entrepreneurs during the first months of business. Helps cover living costs while the business gets started.",
        domain: "EMPLOYMENT",
        provider: "TE-palvelut",
        amount: "Approximately 750 EUR/month for up to 12 months",
        eligibility: [
          "Full-time entrepreneurship",
          "Viable business plan",
          "Completed basic entrepreneurship training (or equivalent experience)",
        ],
        applicationUrl: "https://www.te-palvelut.fi/en/employers/starting-a-business/startup-grant",
        confidenceLevel: "VERIFIED",
      },
    ],
  });
}
