import AircraftSparesCapabilities from "@/app/components/services/aircraft-spares/AircraftSparesCapabilities";
import AircraftSparesHero from "@/app/components/services/aircraft-spares/AircraftSparesHero";
import AircraftSparesOverview from "@/app/components/services/aircraft-spares/AircraftSparesOverview";
import AircraftSparesProcess from "@/app/components/services/aircraft-spares/AircraftSparesProcess";

export const metadata = {
  title: "Aircraft Spares & Parts Support | Aerotech Technicians",
  description:
    "Contact Aerotech Technicians for aircraft parts enquiries, component identification, maintenance spares and aviation parts sourcing support in Zimbabwe.",
};

export default function AircraftSparesPage() {
  return (
    <main>
      <AircraftSparesHero />
      <AircraftSparesOverview />
      <AircraftSparesCapabilities />
      <AircraftSparesProcess />
    </main>
  );
}
