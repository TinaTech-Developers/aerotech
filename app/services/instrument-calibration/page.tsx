import InstrumentCapabilities from "@/app/components/services/instrument-calibration/instrument-capabilities";
import InstrumentCTA from "@/app/components/services/instrument-calibration/instrument-cta";
import InstrumentHero from "@/app/components/services/instrument-calibration/instrument-hero";
import InstrumentOverview from "@/app/components/services/instrument-calibration/instrument-overview";
import InstrumentProcess from "@/app/components/services/instrument-calibration/instrument-process";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "Instrument Testing & Calibration | Aerotech Zimbabwe",
  description:
    "Explore Aerotech's instrument testing and calibration capabilities, including pressure, temperature, electrical and standard measurement instruments.",
};

export default function InstrumentCalibrationPage() {
  return (
    <main>
      <InstrumentHero />
      <InstrumentOverview />
      <InstrumentCapabilities />
      <InstrumentProcess />
      <InstrumentCTA />
    </main>
  );
}
