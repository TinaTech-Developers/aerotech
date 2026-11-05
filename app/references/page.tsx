import type { Metadata } from "next";
import ReferencesHero from "../components/references/references-hero";
import ReferencesIntro from "../components/references/references-intro";
import ReferencesList from "../components/references/references-list";
import ReferencesCTA from "../components/references/references-cta";


export const metadata: Metadata = {
  title: "References | Aerotech (Pvt) Ltd",
  description:
    "Explore the organisations listed in Aerotech's company reference information, covering aviation, training and industry.",
};

export default function ReferencesPage() {
  return (
    <main>
      <ReferencesHero />
      <ReferencesIntro />
      <ReferencesList />
      <ReferencesCTA />
    </main>
  );
}
