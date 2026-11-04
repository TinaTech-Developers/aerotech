import NDTCapabilities from "@/app/components/services/ndt-corrosion/ndt-capabilities";
import NDTCTA from "@/app/components/services/ndt-corrosion/ndt-cta";
import NDTHero from "@/app/components/services/ndt-corrosion/ndt-hero";
import NDTOverview from "@/app/components/services/ndt-corrosion/ndt-overview";
import NDTProcess from "@/app/components/services/ndt-corrosion/ndt-process";
import type { Metadata } from "next";


export const metadata: Metadata = {
  title: "NDT & Corrosion Protection | Aerotech Zimbabwe",
  description:
    "Explore Aerotech's Non-Destructive Testing, corrosion protection, cadmium plating, silver plating and other plating capabilities.",
};

export default function NDTCorrosionPage() {
  return (
    <main>
      <NDTHero />
      <NDTOverview />
      <NDTCapabilities />
      <NDTProcess />
      <NDTCTA />
    </main>
  );
}
