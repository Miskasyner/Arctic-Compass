"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Compass, ArrowRight, ArrowLeft } from "lucide-react";

const STEPS = [
  { title: "Where are you from?", description: "Tell us about your origin and languages" },
  { title: "Your family", description: "Who is joining you on this journey?" },
  { title: "Skills & experience", description: "Your professional background helps us find opportunities" },
  { title: "Interests & goals", description: "What matters most to you?" },
  { title: "Timeline & housing", description: "When and how do you plan to move?" },
];

const COUNTRIES = [
  { code: "ES", name: "Spain" }, { code: "PT", name: "Portugal" }, { code: "IT", name: "Italy" },
  { code: "DE", name: "Germany" }, { code: "FR", name: "France" }, { code: "PL", name: "Poland" },
  { code: "RO", name: "Romania" }, { code: "GB", name: "United Kingdom" }, { code: "US", name: "United States" },
  { code: "IN", name: "India" }, { code: "PH", name: "Philippines" }, { code: "TR", name: "Turkey" },
  { code: "UA", name: "Ukraine" }, { code: "RU", name: "Russia" }, { code: "CN", name: "China" },
  { code: "OTHER", name: "Other" },
];

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    originCountry: "",
    nativeLanguage: "",
    otherLanguages: "",
    familyStatus: "SINGLE",
    partnerName: "",
    dependents: 0,
    educationLevel: "VOCATIONAL",
    fieldOfStudy: "",
    currentOccupation: "",
    skills: "",
    yearsExperience: 0,
    interests: "",
    motivations: "",
    concerns: "",
    timeline: "WITHIN_6_MONTHS",
    budget: "FROM_500_TO_800",
    housingPreference: "RENTAL_APARTMENT",
  });

  function update(field: string, value: string | number) {
    setData((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      const res = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        router.push("/dashboard");
      }
    } catch (e) {
      console.error("Onboarding failed:", e);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-8">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Compass className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium text-muted-foreground">
                Step {step + 1} of {STEPS.length}
              </span>
            </div>
            <div className="flex gap-1">
              {STEPS.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 w-8 rounded-full ${
                    i <= step ? "bg-primary" : "bg-muted"
                  }`}
                />
              ))}
            </div>
          </div>
          <CardTitle>{STEPS[step].title}</CardTitle>
          <CardDescription>{STEPS[step].description}</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          {step === 0 && (
            <>
              <div className="space-y-2">
                <Label>Country of origin</Label>
                <Select value={data.originCountry} onChange={(e) => update("originCountry", e.target.value)}>
                  <option value="">Select country...</option>
                  {COUNTRIES.map((c) => (
                    <option key={c.code} value={c.code}>{c.name}</option>
                  ))}
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Native language</Label>
                <Input value={data.nativeLanguage} onChange={(e) => update("nativeLanguage", e.target.value)} placeholder="e.g. Spanish" />
              </div>
              <div className="space-y-2">
                <Label>Other languages (with level)</Label>
                <Input value={data.otherLanguages} onChange={(e) => update("otherLanguages", e.target.value)} placeholder="e.g. English:basic, Finnish:none" />
              </div>
            </>
          )}

          {step === 1 && (
            <>
              <div className="space-y-2">
                <Label>Family status</Label>
                <Select value={data.familyStatus} onChange={(e) => update("familyStatus", e.target.value)}>
                  <option value="SINGLE">Single</option>
                  <option value="WITH_PARTNER">With partner</option>
                  <option value="WITH_PARTNER_AND_CHILDREN">With partner and children</option>
                  <option value="SINGLE_WITH_CHILDREN">Single with children</option>
                </Select>
              </div>
              {data.familyStatus.includes("PARTNER") && (
                <div className="space-y-2">
                  <Label>Partner&apos;s name</Label>
                  <Input value={data.partnerName} onChange={(e) => update("partnerName", e.target.value)} placeholder="e.g. Diego" />
                </div>
              )}
              {data.familyStatus.includes("CHILDREN") && (
                <div className="space-y-2">
                  <Label>Number of children</Label>
                  <Input type="number" min={0} value={data.dependents} onChange={(e) => update("dependents", parseInt(e.target.value) || 0)} />
                </div>
              )}
            </>
          )}

          {step === 2 && (
            <>
              <div className="space-y-2">
                <Label>Education level</Label>
                <Select value={data.educationLevel} onChange={(e) => update("educationLevel", e.target.value)}>
                  <option value="HIGH_SCHOOL">High School</option>
                  <option value="VOCATIONAL">Vocational / Trade</option>
                  <option value="BACHELORS">Bachelor&apos;s Degree</option>
                  <option value="MASTERS">Master&apos;s Degree</option>
                  <option value="DOCTORATE">Doctorate</option>
                  <option value="OTHER">Other</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Field of study</Label>
                <Input value={data.fieldOfStudy} onChange={(e) => update("fieldOfStudy", e.target.value)} placeholder="e.g. Hospitality Management" />
              </div>
              <div className="space-y-2">
                <Label>Current occupation</Label>
                <Input value={data.currentOccupation} onChange={(e) => update("currentOccupation", e.target.value)} placeholder="e.g. Hotel receptionist" />
              </div>
              <div className="space-y-2">
                <Label>Key skills (comma-separated)</Label>
                <Input value={data.skills} onChange={(e) => update("skills", e.target.value)} placeholder="e.g. customer service, cooking, team management" />
              </div>
              <div className="space-y-2">
                <Label>Years of experience</Label>
                <Input type="number" min={0} value={data.yearsExperience} onChange={(e) => update("yearsExperience", parseInt(e.target.value) || 0)} />
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <div className="space-y-2">
                <Label>Interests & hobbies (comma-separated)</Label>
                <Input value={data.interests} onChange={(e) => update("interests", e.target.value)} placeholder="e.g. hiking, cooking, photography" />
              </div>
              <div className="space-y-2">
                <Label>Why are you considering this move?</Label>
                <Input value={data.motivations} onChange={(e) => update("motivations", e.target.value)} placeholder="e.g. Better quality of life, closer to nature" />
              </div>
              <div className="space-y-2">
                <Label>What concerns you most? (optional)</Label>
                <Input value={data.concerns} onChange={(e) => update("concerns", e.target.value)} placeholder="e.g. Language barrier, dark winters" />
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <div className="space-y-2">
                <Label>When do you plan to move?</Label>
                <Select value={data.timeline} onChange={(e) => update("timeline", e.target.value)}>
                  <option value="IMMEDIATELY">As soon as possible</option>
                  <option value="WITHIN_3_MONTHS">Within 3 months</option>
                  <option value="WITHIN_6_MONTHS">Within 6 months</option>
                  <option value="WITHIN_1_YEAR">Within 1 year</option>
                  <option value="EXPLORING">Just exploring</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Monthly housing budget</Label>
                <Select value={data.budget} onChange={(e) => update("budget", e.target.value)}>
                  <option value="UNDER_500">Under 500 EUR</option>
                  <option value="FROM_500_TO_800">500 - 800 EUR</option>
                  <option value="FROM_800_TO_1200">800 - 1200 EUR</option>
                  <option value="OVER_1200">Over 1200 EUR</option>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Housing preference</Label>
                <Select value={data.housingPreference} onChange={(e) => update("housingPreference", e.target.value)}>
                  <option value="RENTAL_APARTMENT">Rent an apartment</option>
                  <option value="RENTAL_HOUSE">Rent a house</option>
                  <option value="BUY_APARTMENT">Buy an apartment</option>
                  <option value="BUY_HOUSE">Buy a house</option>
                  <option value="TEMPORARY">Temporary / short-term</option>
                  <option value="NO_PREFERENCE">No preference</option>
                </Select>
              </div>
            </>
          )}
        </CardContent>

        <CardFooter className="flex justify-between">
          <Button
            variant="outline"
            onClick={() => setStep(step - 1)}
            disabled={step === 0}
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back
          </Button>
          {step < STEPS.length - 1 ? (
            <Button onClick={() => setStep(step + 1)}>
              Next
              <ArrowRight className="h-4 w-4 ml-1" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={loading}>
              {loading ? "Saving..." : "Complete Setup"}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
