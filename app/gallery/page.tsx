import type { Metadata } from "next";
import GalleryHero from "../components/gallery/gallery-hero";
import GalleryGrid from "../components/gallery/gallery-grid";
import GalleryCTA from "../components/gallery/gallery-cta";

export const metadata: Metadata = {
  title: "Gallery | Aerotech (Pvt) Ltd",
  description:
    "Explore Aerotech's aviation engineering, aircraft maintenance, engine services, instrument testing and technical operations.",
};

export default function GalleryPage() {
  return (
    <main>
      <GalleryHero />
      <GalleryGrid />
      <GalleryCTA />
    </main>
  );
}
