-- CreateEnum
CREATE TYPE "FamilyStatus" AS ENUM ('SINGLE', 'WITH_PARTNER', 'WITH_PARTNER_AND_CHILDREN', 'SINGLE_WITH_CHILDREN');

-- CreateEnum
CREATE TYPE "EducationLevel" AS ENUM ('HIGH_SCHOOL', 'VOCATIONAL', 'BACHELORS', 'MASTERS', 'DOCTORATE', 'OTHER');

-- CreateEnum
CREATE TYPE "RelocationTimeline" AS ENUM ('IMMEDIATELY', 'WITHIN_3_MONTHS', 'WITHIN_6_MONTHS', 'WITHIN_1_YEAR', 'EXPLORING');

-- CreateEnum
CREATE TYPE "BudgetRange" AS ENUM ('UNDER_500', 'FROM_500_TO_800', 'FROM_800_TO_1200', 'OVER_1200');

-- CreateEnum
CREATE TYPE "HousingPreference" AS ENUM ('RENTAL_APARTMENT', 'RENTAL_HOUSE', 'BUY_APARTMENT', 'BUY_HOUSE', 'TEMPORARY', 'NO_PREFERENCE');

-- CreateEnum
CREATE TYPE "EmploymentType" AS ENUM ('FULL_TIME', 'PART_TIME', 'SEASONAL', 'CONTRACT', 'ENTREPRENEURSHIP');

-- CreateEnum
CREATE TYPE "DemandLevel" AS ENUM ('HIGH', 'MEDIUM', 'LOW');

-- CreateEnum
CREATE TYPE "HousingType" AS ENUM ('APARTMENT_RENTAL', 'HOUSE_RENTAL', 'APARTMENT_SALE', 'HOUSE_SALE', 'ROOM_RENTAL', 'TEMPORARY');

-- CreateEnum
CREATE TYPE "BureaucracyCategory" AS ENUM ('PRE_ARRIVAL', 'FIRST_WEEK', 'FIRST_MONTH', 'FIRST_3_MONTHS', 'ONGOING');

-- CreateEnum
CREATE TYPE "LanguageResourceType" AS ENUM ('COURSE', 'APP', 'CONVERSATION_GROUP', 'TUTOR', 'SELF_STUDY');

-- CreateEnum
CREATE TYPE "ProgressStatus" AS ENUM ('NOT_STARTED', 'IN_PROGRESS', 'COMPLETED', 'SKIPPED');

-- CreateEnum
CREATE TYPE "MessageRole" AS ENUM ('USER', 'ASSISTANT', 'SYSTEM');

-- CreateEnum
CREATE TYPE "MaterialType" AS ENUM ('RELOCATION_GUIDE', 'EMPLOYMENT_BRIEF', 'HOUSING_GUIDE', 'INTEGRATION_CHECKLIST', 'COMMUNITY_GUIDE', 'CUSTOM');

-- CreateEnum
CREATE TYPE "GapStatus" AS ENUM ('IDENTIFIED', 'ACKNOWLEDGED', 'RESOLVED');

-- CreateEnum
CREATE TYPE "PathwayDomain" AS ENUM ('EMPLOYMENT', 'HOUSING', 'INTEGRATION', 'COMMUNITY');

-- CreateEnum
CREATE TYPE "ConfidenceLevel" AS ENUM ('VERIFIED', 'CURATED', 'INFERRED');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "passwordHash" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "originCountry" TEXT NOT NULL,
    "nationality" TEXT,
    "nativeLanguage" TEXT NOT NULL,
    "otherLanguages" TEXT[],
    "familyStatus" "FamilyStatus" NOT NULL,
    "partnerName" TEXT,
    "dependents" INTEGER NOT NULL DEFAULT 0,
    "dependentAges" INTEGER[],
    "educationLevel" "EducationLevel" NOT NULL,
    "fieldOfStudy" TEXT,
    "currentOccupation" TEXT,
    "skills" TEXT[],
    "yearsExperience" INTEGER,
    "certifications" TEXT[],
    "targetMunicipality" TEXT NOT NULL,
    "timeline" "RelocationTimeline" NOT NULL,
    "budget" "BudgetRange",
    "housingPreference" "HousingPreference",
    "interests" TEXT[],
    "motivations" TEXT[],
    "concerns" TEXT[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JobListing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "employer" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "requirements" TEXT[],
    "skills" TEXT[],
    "sector" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "salaryRange" TEXT,
    "employmentType" "EmploymentType" NOT NULL,
    "languageReqs" TEXT[],
    "contactInfo" TEXT,
    "sourceUrl" TEXT,
    "confidenceLevel" "ConfidenceLevel" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "postedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),

    CONSTRAINT "JobListing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MarketGap" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sector" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "demandLevel" "DemandLevel" NOT NULL,
    "requiredSkills" TEXT[],
    "potentialIncome" TEXT,
    "supportAvailable" TEXT[],
    "confidenceLevel" "ConfidenceLevel" NOT NULL,
    "source" TEXT,

    CONSTRAINT "MarketGap_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HousingListing" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "HousingType" NOT NULL,
    "municipality" TEXT NOT NULL,
    "address" TEXT,
    "rent" DECIMAL(65,30),
    "salePrice" DECIMAL(65,30),
    "size" INTEGER,
    "rooms" INTEGER,
    "amenities" TEXT[],
    "availableFrom" TIMESTAMP(3),
    "contactInfo" TEXT,
    "sourceUrl" TEXT,
    "imageUrls" TEXT[],
    "confidenceLevel" "ConfidenceLevel" NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "HousingListing_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HousingIncentive" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "amount" TEXT,
    "eligibility" TEXT[],
    "applicationUrl" TEXT,
    "deadline" TIMESTAMP(3),
    "confidenceLevel" "ConfidenceLevel" NOT NULL,

    CONSTRAINT "HousingIncentive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BureaucracyStep" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" "BureaucracyCategory" NOT NULL,
    "municipality" TEXT,
    "orderIndex" INTEGER NOT NULL,
    "estimatedDays" INTEGER,
    "requiredDocs" TEXT[],
    "url" TEXT,
    "tips" TEXT,
    "confidenceLevel" "ConfidenceLevel" NOT NULL,
    "dependsOn" TEXT[],

    CONSTRAINT "BureaucracyStep_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LanguageResource" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "type" "LanguageResourceType" NOT NULL,
    "provider" TEXT NOT NULL,
    "url" TEXT,
    "cost" TEXT,
    "level" TEXT,
    "municipality" TEXT,
    "online" BOOLEAN NOT NULL DEFAULT false,
    "confidenceLevel" "ConfidenceLevel" NOT NULL,

    CONSTRAINT "LanguageResource_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Incentive" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "domain" "PathwayDomain" NOT NULL,
    "municipality" TEXT,
    "provider" TEXT NOT NULL,
    "amount" TEXT,
    "eligibility" TEXT[],
    "applicationUrl" TEXT,
    "deadline" TIMESTAMP(3),
    "confidenceLevel" "ConfidenceLevel" NOT NULL,

    CONSTRAINT "Incentive_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3),
    "location" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "organizer" TEXT,
    "url" TEXT,
    "isFree" BOOLEAN NOT NULL DEFAULT true,
    "familyFriendly" BOOLEAN NOT NULL DEFAULT false,
    "confidenceLevel" "ConfidenceLevel" NOT NULL,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Mentor" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "bio" TEXT NOT NULL,
    "originCountry" TEXT NOT NULL,
    "currentRole" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "yearsInFinland" INTEGER NOT NULL,
    "languages" TEXT[],
    "expertise" TEXT[],
    "availability" TEXT,
    "contactMethod" TEXT,
    "imageUrl" TEXT,
    "confidenceLevel" "ConfidenceLevel" NOT NULL,

    CONSTRAINT "Mentor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HobbyGroup" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "meetingSchedule" TEXT,
    "location" TEXT,
    "contactInfo" TEXT,
    "url" TEXT,
    "familyFriendly" BOOLEAN NOT NULL DEFAULT false,
    "confidenceLevel" "ConfidenceLevel" NOT NULL,

    CONSTRAINT "HobbyGroup_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SuccessStory" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "personName" TEXT NOT NULL,
    "originCountry" TEXT NOT NULL,
    "municipality" TEXT NOT NULL,
    "domains" "PathwayDomain"[],
    "tags" TEXT[],
    "skills" TEXT[],
    "familyStatus" "FamilyStatus",
    "imageUrl" TEXT,
    "publishedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "confidenceLevel" "ConfidenceLevel" NOT NULL,

    CONSTRAINT "SuccessStory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProgressItem" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "domain" "PathwayDomain" NOT NULL,
    "category" TEXT NOT NULL,
    "itemId" TEXT,
    "title" TEXT NOT NULL,
    "status" "ProgressStatus" NOT NULL,
    "notes" TEXT,
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ProgressItem_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Conversation" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "title" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Conversation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL,
    "conversationId" TEXT NOT NULL,
    "role" "MessageRole" NOT NULL,
    "content" TEXT NOT NULL,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Message_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GeneratedMaterial" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" "MaterialType" NOT NULL,
    "title" TEXT NOT NULL,
    "content" JSONB NOT NULL,
    "domain" "PathwayDomain",
    "pdfUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GeneratedMaterial_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GapReport" (
    "id" TEXT NOT NULL,
    "userId" TEXT,
    "domain" "PathwayDomain" NOT NULL,
    "query" TEXT NOT NULL,
    "description" TEXT,
    "status" "GapStatus" NOT NULL DEFAULT 'IDENTIFIED',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "GapReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Municipality" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "population" INTEGER,
    "description" TEXT NOT NULL,
    "highlights" TEXT[],
    "website" TEXT,
    "contactEmail" TEXT,
    "latitude" DOUBLE PRECISION,
    "longitude" DOUBLE PRECISION,
    "imageUrls" TEXT[],

    CONSTRAINT "Municipality_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- CreateIndex
CREATE INDEX "ProgressItem_userId_domain_idx" ON "ProgressItem"("userId", "domain");

-- CreateIndex
CREATE INDEX "Conversation_userId_idx" ON "Conversation"("userId");

-- CreateIndex
CREATE INDEX "Message_conversationId_idx" ON "Message"("conversationId");

-- CreateIndex
CREATE INDEX "GeneratedMaterial_userId_idx" ON "GeneratedMaterial"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Municipality_slug_key" ON "Municipality"("slug");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProgressItem" ADD CONSTRAINT "ProgressItem_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Conversation" ADD CONSTRAINT "Conversation_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_conversationId_fkey" FOREIGN KEY ("conversationId") REFERENCES "Conversation"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GeneratedMaterial" ADD CONSTRAINT "GeneratedMaterial_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "GapReport" ADD CONSTRAINT "GapReport_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
