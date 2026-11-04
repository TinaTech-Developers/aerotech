import EngineCapabilities from "@/app/components/services/engine-capabilities";
import EngineCTA from "@/app/components/services/engine-cta";
import EngineHero from "@/app/components/services/engine-hero";
import EngineOverview from "@/app/components/services/engine-overview";
import EngineProcess from "@/app/components/services/engine-process";

export const metadata = {
  title: "Engine & Propeller Overhauls | Aerotech Zimbabwe",
  description:
    "Explore Aerotech's piston engine and component overhauls, propeller overhauls, and PT6 engine component repair and overhaul services in Zimbabwe.",
};

export default function EnginePropellerPage() {
  return (
    <main>
      <EngineHero />
      <EngineOverview />
      <EngineCapabilities />
      <EngineProcess />
      <EngineCTA />
    </main>
  );
}
