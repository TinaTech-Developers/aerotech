import MaintenanceCapabilities from "@/app/components/services/maintenance-capabilities";
import MaintenanceCTA from "@/app/components/services/maintenance-cta";
import MaintenanceHero from "@/app/components/services/maintenance-hero";
import MaintenanceOverview from "@/app/components/services/maintenance-overview";
import MaintenanceProcess from "@/app/components/services/maintenance-process";

export const metadata = {
  title: "Aircraft Maintenance & Engineering | Aerotech Zimbabwe",
  description:
    "Explore Aerotech's aircraft maintenance, repair, rebuilding, refurbishment and engineering capabilities for general aviation aircraft up to 5,700 kg Maximum All-up Weight.",
};

export default function AircraftMaintenancePage() {
  return (
    <main>
      <MaintenanceHero />
      <MaintenanceOverview />
      <MaintenanceCapabilities />
      <MaintenanceProcess />
      <MaintenanceCTA />
    </main>
  );
}
