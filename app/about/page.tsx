import AboutHero from "../components/about/about-hero";
import CompanyOverview from "../components/about/company-overview";
import CompanyHistory from "../components/about/company-history";
import VisionMission from "../components/about/vision-mission";
import CoreValues from "../components/about/core-values";
import KSMGroup from "../components/about/ksm-group";
import ManagementTeam from "../components/about/management-team";
import AboutCTA from "../components/about/about-cta";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <CompanyOverview />
      <CompanyHistory />
      <VisionMission />
      <CoreValues />
      <KSMGroup />
      <ManagementTeam />
      <AboutCTA />
    </main>
  );
}
