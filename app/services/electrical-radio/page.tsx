import ElectricalCapabilities from "@/app/components/services/electrical-radio/electrical-capabilities";
import ElectricalCTA from "@/app/components/services/electrical-radio/electrical-cta";
import ElectricalHero from "@/app/components/services/electrical-radio/electrical-hero";
import ElectricalOverview from "@/app/components/services/electrical-radio/electrical-overview";
import ElectricalProcess from "@/app/components/services/electrical-radio/electrical-process";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aircraft Electrical & Radio Services | Aerotech Zimbabwe",
  description:
    "Aerotech provides aircraft electrical and radio installations, component overhauls and bench services for general aviation aircraft in Zimbabwe.",
};

export default function ElectricalRadioPage() {
  return (
    <main>
      <ElectricalHero />
      <ElectricalOverview />
      <ElectricalCapabilities />
      <ElectricalProcess />
      <ElectricalCTA />
    </main>
  );
}
