import type { Metadata } from "next";
import QualityHero from "../components/quality-safety/quality-hero";
import QualityCommitment from "../components/quality-safety/quality-commitment";
import QualityPrinciples from "../components/quality-safety/quality-principles";
import QualityInServices from "../components/quality-safety/quality-in-services";
import QualityValues from "../components/quality-safety/quality-values";
import QualityCTA from "../components/quality-safety/quality-cta";

export const metadata: Metadata = {
  title: "Quality & Safety | Aerotech (Pvt) Ltd",
  description:
    "Discover Aerotech's commitment to quality workmanship, safety-conscious operations, integrity, teamwork and excellence in aviation engineering.",
};

export default function QualitySafetyPage() {
  return (
    <main>
      <QualityHero />
      <QualityCommitment />
      <QualityPrinciples />
      <QualityInServices />
      <QualityValues />
      <QualityCTA />
    </main>
  );
}
