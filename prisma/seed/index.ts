import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import pg from "pg";
import { seedMunicipality } from "./municipality";
import { seedEmployment } from "./employment";
import { seedHousing } from "./housing";
import { seedIntegration } from "./integration";
import { seedCommunity } from "./community";
import { seedSuccessStories } from "./success-stories";
import { seedUsers } from "./users";

const pool = new pg.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  console.log("Seeding database...");

  console.log("  -> Municipality data...");
  await seedMunicipality(prisma);

  console.log("  -> Employment data...");
  await seedEmployment(prisma);

  console.log("  -> Housing data...");
  await seedHousing(prisma);

  console.log("  -> Integration data...");
  await seedIntegration(prisma);

  console.log("  -> Community data...");
  await seedCommunity(prisma);

  console.log("  -> Success stories...");
  await seedSuccessStories(prisma);

  console.log("  -> Demo users...");
  await seedUsers(prisma);

  console.log("Seeding complete!");
}

main()
  .catch((e) => {
    console.error("Seed failed:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
