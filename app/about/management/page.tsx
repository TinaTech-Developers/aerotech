import ManagementTeam from "@/app/components/about/management-team";
import ManagementHero from "@/app/components/about/management/ManagementHero";
import PeopleValues from "@/app/components/about/management/PeopleValues";
import TechnicalTeam from "@/app/components/about/management/TechnicalTeam";

export const metadata = {
  title: "Management & Team | Aerotech Technicians",
  description:
    "Meet the leadership and technical teams behind Aerotech Technicians, supporting aircraft maintenance, engineering and specialist aviation services in Zimbabwe.",
};

export default function ManagementPage() {
  return (
    <main>
      <ManagementHero />
      <ManagementTeam />
      <TechnicalTeam />
      <PeopleValues />
    </main>
  );
}
