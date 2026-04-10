import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(request: Request) {
  try {
    const session = await auth();
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    // Parse comma-separated fields into arrays
    const parseArray = (val: string) =>
      val ? val.split(",").map((s: string) => s.trim()).filter(Boolean) : [];

    await prisma.profile.upsert({
      where: { userId: session.user.id },
      update: {
        originCountry: data.originCountry,
        nativeLanguage: data.nativeLanguage,
        otherLanguages: parseArray(data.otherLanguages),
        familyStatus: data.familyStatus,
        partnerName: data.partnerName || null,
        dependents: data.dependents || 0,
        dependentAges: [],
        educationLevel: data.educationLevel,
        fieldOfStudy: data.fieldOfStudy || null,
        currentOccupation: data.currentOccupation || null,
        skills: parseArray(data.skills),
        yearsExperience: data.yearsExperience || null,
        certifications: [],
        targetMunicipality: "salla",
        timeline: data.timeline,
        budget: data.budget || null,
        housingPreference: data.housingPreference || null,
        interests: parseArray(data.interests),
        motivations: parseArray(data.motivations),
        concerns: parseArray(data.concerns),
      },
      create: {
        userId: session.user.id,
        originCountry: data.originCountry || "OTHER",
        nativeLanguage: data.nativeLanguage || "Unknown",
        otherLanguages: parseArray(data.otherLanguages),
        familyStatus: data.familyStatus || "SINGLE",
        partnerName: data.partnerName || null,
        dependents: data.dependents || 0,
        dependentAges: [],
        educationLevel: data.educationLevel || "OTHER",
        fieldOfStudy: data.fieldOfStudy || null,
        currentOccupation: data.currentOccupation || null,
        skills: parseArray(data.skills),
        yearsExperience: data.yearsExperience || null,
        certifications: [],
        targetMunicipality: "salla",
        timeline: data.timeline || "EXPLORING",
        budget: data.budget || null,
        housingPreference: data.housingPreference || null,
        interests: parseArray(data.interests),
        motivations: parseArray(data.motivations),
        concerns: parseArray(data.concerns),
      },
    });

    // Create initial progress items
    await prisma.progressItem.createMany({
      data: [
        {
          userId: session.user.id,
          domain: "EMPLOYMENT",
          category: "exploration",
          title: "Explore employment opportunities",
          status: "NOT_STARTED",
        },
        {
          userId: session.user.id,
          domain: "HOUSING",
          category: "exploration",
          title: "Review housing options",
          status: "NOT_STARTED",
        },
        {
          userId: session.user.id,
          domain: "INTEGRATION",
          category: "pre-arrival",
          title: "Check residence permit requirements",
          status: "NOT_STARTED",
        },
        {
          userId: session.user.id,
          domain: "COMMUNITY",
          category: "exploration",
          title: "Explore community & social opportunities",
          status: "NOT_STARTED",
        },
      ],
      skipDuplicates: true,
    });

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("Onboarding error:", e);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
