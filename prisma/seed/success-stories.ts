import { PrismaClient } from "@prisma/client";

export async function seedSuccessStories(prisma: PrismaClient) {
  await prisma.successStory.createMany({
    data: [
      {
        title: "From Barcelona to Salla: How Carlos Built a Catering Empire in Lapland",
        summary:
          "Carlos left his restaurant job in Barcelona for an adventure in the Arctic — and found a business opportunity no one had filled yet.",
        content: `When Carlos Herrera, 31, first told his family he was moving to Salla, Finnish Lapland, they thought he was joking. "Barcelona to the Arctic? You'll freeze and come back in a week," his mother said.

Three years later, Carlos runs Salla's only catering business, serving everything from corporate events at the ski resort to intimate wedding celebrations under the Northern Lights.

**The journey wasn't easy.** Carlos arrived with basic English, no Finnish, and only his hospitality experience. "The first month was the hardest. Everything felt different — the darkness, the silence, the cold. But the people were incredibly warm."

He started as a kitchen assistant at a local hotel, working 6 months while learning the ropes. "I noticed there was no catering service. Every event had to rely on the hotel restaurant or bring food from Rovaniemi. I thought: I can do this."

With help from the Salla Enterprise Agency (free business consultation) and a startup grant from the TE-office, Carlos launched his catering business. He now employs 2 part-time staff and is planning to open a small tapas bar.

**His advice to newcomers:** "Don't wait for the perfect moment. Start learning Finnish from day one — even if it's bad Finnish, people appreciate it. And say yes to every invitation. That's how you build your network here."`,
        personName: "Carlos Herrera",
        originCountry: "ES",
        municipality: "salla",
        domains: ["EMPLOYMENT", "COMMUNITY"],
        tags: ["hospitality", "entrepreneurship", "spanish", "catering", "business startup"],
        skills: ["hospitality", "cooking", "restaurant management", "customer service"],
        familyStatus: "SINGLE",
        confidenceLevel: "CURATED",
      },
      {
        title: "Finding Home Under the Northern Lights: Ana's Teaching Journey",
        summary:
          "Ana came from Portugal as a volunteer, fell in love with Lapland, and found a way to stay — as a teacher.",
        content: `Ana Silva, 28, never planned to live in Finland. She came to Salla as a European Voluntary Service participant for 6 months, teaching Portuguese and helping with multicultural activities.

"I arrived in January. It was -30°C and completely dark at 3 PM. I thought I'd made a terrible mistake," she laughs. "But then I saw the Northern Lights for the first time, and everything changed."

During her volunteer period, Ana connected deeply with the local community. She started taking Finnish classes at the kansalaisopisto and was amazed by the Finnish education system. "I have a teaching degree from Portugal. When I learned that Finland needed teachers and that my degree could be recognised, I saw a path."

**The bureaucracy was real but manageable.** "The recognition process took about 4 months. I had to submit my degree, get translations, and pass a Finnish language assessment. The TE-office was incredibly helpful — they even found me a preparatory Finnish course specifically designed for professionals."

Now a teacher at Salla Comprehensive School, Ana teaches Portuguese and helps international students adjust. "My students teach me Finnish, and I teach them Portuguese. It's a beautiful exchange."

**Her biggest surprise:** "How accepted I feel. Finland has this reputation of being cold and distant, but in a small place like Salla, people genuinely care. My neighbours bring me blueberries in summer and check on me when it's cold."

**Advice:** "Learn Finnish. I know it's hard, but it opens everything. And don't be afraid to ask for help — Finnish people won't offer unless you ask, but once you do, they'll move mountains for you."`,
        personName: "Ana Silva",
        originCountry: "PT",
        municipality: "salla",
        domains: ["INTEGRATION", "COMMUNITY"],
        tags: ["teaching", "language learning", "volunteering", "education", "portuguese"],
        skills: ["teaching", "languages", "education", "community work"],
        familyStatus: "SINGLE",
        confidenceLevel: "CURATED",
      },
      {
        title: "Launching Lapland Adventure Tours: Marco's Entrepreneurship Story",
        summary:
          "A holiday in Salla turned into a business plan when Marco spotted what was missing from Lapland's tourism scene.",
        content: `Marco Rossi, 40, was a marketing manager in Milan who visited Salla for a winter holiday. "I came for a week. I never really left."

What started as a post-holiday daydream became a business plan within 3 months. "I noticed that all the tourism activities were organised by the same few operators. International visitors — especially Italian, Spanish, and French — wanted more personalised experiences, but there was no one who could communicate in their language and understand their expectations."

**Building the business:** Marco used Business Finland resources and the Salla Enterprise Agency to develop his plan. He got a startup grant (starttiraha) and a small business development loan from the ELY Centre.

"The hardest part was the permits and paperwork. But once I understood the system — and I had a good accountant — it flowed. Finnish bureaucracy is actually very logical, just different from Italian chaos," he jokes.

Lapland Adventure Tours now offers Northern Lights photography tours, snowmobile safaris, ice fishing experiences, and summer hiking expeditions — all in Italian, English, Spanish, and Finnish.

"Last year we served over 500 customers. We're growing 30% year over year. The demand is there — Lapland is a dream destination, and people want authentic, personal experiences."

**On life in Salla:** "I have more space, more nature, and more peace than I ever had in Milan. My commute is 5 minutes. My office view is a frozen lake. I've traded fashion shows for Northern Lights, and I wouldn't go back."

**His tip:** "If you see a gap in the market here, trust your instinct. Rural Finland needs entrepreneurs. They'll support you more than you expect."`,
        personName: "Marco Rossi",
        originCountry: "IT",
        municipality: "salla",
        domains: ["EMPLOYMENT"],
        tags: ["entrepreneurship", "tourism", "business", "italian", "adventure tourism"],
        skills: ["marketing", "tourism", "business management", "languages"],
        familyStatus: "SINGLE",
        confidenceLevel: "CURATED",
      },
      {
        title: "Family Life Under the Northern Lights: Sofia & Pedro's Story",
        summary:
          "A Spanish couple moved to Salla with their two young children — and discovered that Finnish family life has unexpected perks.",
        content: `Sofia Garcia, 36, and Pedro Martinez, 38, made the biggest decision of their lives in 2023: leaving Valencia for Salla with their children Lucia (6) and Pablo (4).

"Our apartment in Valencia cost 900 EUR/month for 60 square meters. In Salla, we pay 550 EUR for a house with a garden, a sauna, and a forest literally at our doorstep," Sofia explains.

Pedro, an IT professional, works remotely for a Finnish company. Sofia, who has a background in marketing, started a part-time online business helping Finnish companies reach Spanish-speaking markets.

**The children adapted faster than expected.** "Lucia started school and within 3 months was chattering in Finnish. The school provided a preparatory class (VALMO) with extra Finnish support. Pablo goes to daycare, which is excellent and affordable — we pay about 200 EUR/month."

"The Finnish education system is incredible. No homework for young children, lots of outdoor play even in winter, and teachers who genuinely care. Lucia has never been happier in school."

**Challenges:** "The darkness in winter was hard the first year. And missing family in Spain. But now we visit in summer, and our parents come here for Christmas — they love seeing the snow."

**The housing incentive made a difference:** "Salla offered us a free building plot. We're planning to build our own house next year. The cost of building here is much less than buying in Valencia."

**Their advice:** "If you have children, Finland is an incredible place to raise them. The nature, the safety, the education — it's a different world. Just prepare for the dark winter months with good routines, vitamin D, and lots of cosy candles."`,
        personName: "Sofia & Pedro",
        originCountry: "ES",
        municipality: "salla",
        domains: ["HOUSING", "COMMUNITY"],
        tags: ["family", "children", "remote work", "spanish", "housing", "education"],
        skills: ["IT", "marketing", "remote work"],
        familyStatus: "WITH_PARTNER_AND_CHILDREN",
        confidenceLevel: "CURATED",
      },
      {
        title: "From Zero Finnish to B1 in 8 Months: Elena's Language Journey",
        summary:
          "Elena from Romania cracked the code of learning Finnish efficiently — here's the method that worked.",
        content: `Elena Ionescu, 35, arrived in Salla speaking Romanian, English, and a few Italian phrases. Finnish seemed impossible. "I looked at the words and nothing made sense. No familiar roots, no similar grammar. I almost gave up before starting."

Eight months later, she passed the YKI B1 test — the level needed for Finnish citizenship and most jobs. Here's how she did it:

**Month 1-2: Foundation**
"I started with Duolingo (30 minutes/day) and Finnishpod101 (podcast during walks). The goal was just getting used to the sounds. I also made flashcards for every Finnish word I encountered — at the shop, on signs, everywhere."

**Month 3-4: Structured learning**
"I enrolled in the Salla kansalaisopisto Finnish course (twice a week) and started TE-office integration training. Having a classroom environment with other learners was motivating."

**Month 5-6: Immersion**
"This was the breakthrough. I started attending the weekly language cafe, watching Yle TV with Finnish subtitles, and — this is key — I asked my neighbours to speak only Finnish with me. They were patient and encouraging."

**Month 7-8: Intensive preparation**
"I focused on the YKI test format. The speaking and writing sections were hardest. I practised writing short texts every day and did speaking exercises with my language cafe friends."

**Key insight:** "Romanian helped more than I expected. Both languages have complex grammar, so my brain was already wired for case endings and conjugations. If you speak a language with rich grammar, Finnish isn't as scary as it seems."

**Her daily routine:** Wake up, 15 minutes of Anki flashcards. Coffee with Finnish radio (Yle Radio Suomi). Kansalaisopisto class or self-study (1 hour). Evening: Finnish TV show or 30 minutes of reading (children's books first, then news).

**Advice:** "Don't wait until you're 'ready' to speak. Speak badly from day one. Finns won't judge you — they'll be amazed you're even trying. And find a routine that you can actually maintain every day."`,
        personName: "Elena Ionescu",
        originCountry: "RO",
        municipality: "salla",
        domains: ["INTEGRATION"],
        tags: ["language learning", "finnish", "study tips", "integration", "romanian"],
        skills: ["language learning", "self-study"],
        familyStatus: "SINGLE",
        confidenceLevel: "CURATED",
      },
    ],
  });
}
