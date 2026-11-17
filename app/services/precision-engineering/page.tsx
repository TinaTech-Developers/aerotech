import PrecisionEngineeringCapabilities from "@/app/components/services/precision-engineering/PrecisionEngineeringCapabilities";
import PrecisionEngineeringHero from "@/app/components/services/precision-engineering/PrecisionEngineeringHero";
import PrecisionEngineeringOverview from "@/app/components/services/precision-engineering/PrecisionEngineeringOverview";
import PrecisionEngineeringProcess from "@/app/components/services/precision-engineering/PrecisionEngineeringProcess";

export const metadata = {
  title: "Precision Engineering & Fabrication | Aerotech Technicians",
  description:
    "Explore Aerotech Technicians' precision engineering, general machining, metal fabrication, aluminium welding and specialist aviation workshop support services in Zimbabwe.",
};

export default function PrecisionEngineeringPage() {
  return (
    <main>
      <PrecisionEngineeringHero />
      <PrecisionEngineeringOverview />
      <PrecisionEngineeringCapabilities />
      <PrecisionEngineeringProcess />
    </main>
  );
}
