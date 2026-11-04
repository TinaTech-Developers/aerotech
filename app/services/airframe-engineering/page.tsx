import AirframeCapabilities from "@/app/components/services/airframe-engineering/airframe-capabilities";
import AirframeCTA from "@/app/components/services/airframe-engineering/airframe-cta";
import AirframeHero from "@/app/components/services/airframe-engineering/airframe-hero";
import AirframeOverview from "@/app/components/services/airframe-engineering/airframe-overview";
import AirframeProcess from "@/app/components/services/airframe-engineering/airframe-process";

export const metadata = {
  title: "Airframe Engineering & Structural Repairs | Aerotech Zimbabwe",
  description:
    "Explore Aerotech's airframe engineering capabilities, including sheet metal work, stressed-skin repairs, aircraft refurbishment, weighing, fabric and fibreglass work.",
};

export default function AirframeEngineeringPage() {
  return (
    <main>
      <AirframeHero />
      <AirframeOverview />
      <AirframeCapabilities />
      <AirframeProcess />
      <AirframeCTA />
    </main>
  );
}
