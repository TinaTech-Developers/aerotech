import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  ShieldCheck,
  Settings,
  Plane,
  Calculator,
  Users,
} from "lucide-react";

const management = [
  {
    title: "Accountable Manager",
    description:
      "Provides overall management leadership and organisational accountability.",
    icon: BriefcaseBusiness,
    level: "Executive Management",
  },
  {
    title: "Quality & Safety Manager",
    description:
      "Oversees the company's quality and safety management responsibilities.",
    icon: ShieldCheck,
    level: "Management",
  },
  {
    title: "Engine Section Manager",
    description: "Responsible for the management of engine section activities.",
    icon: Settings,
    level: "Technical Management",
  },
  {
    title: "Airframe Section Manager",
    description:
      "Responsible for the management of airframe section activities.",
    icon: Plane,
    level: "Technical Management",
  },
  {
    title: "Finance Manager",
    description:
      "Oversees the company's financial management responsibilities.",
    icon: Calculator,
    level: "Management",
  },
];

export default function ManagementTeam() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FC] py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-sky-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
            <Users size={15} />
            Leadership & Structure
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            Our <span className="text-[#087FC1]">Management Team</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Aerotech's management structure brings together leadership,
            technical oversight, quality and safety responsibilities, and
            financial management.
          </p>
        </div>

        {/* Management cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {management.map((person, index) => {
            const Icon = person.icon;

            return (
              <div
                key={person.title}
                className={`group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#082B52] text-[#19B5E5] transition-colors group-hover:bg-[#087FC1] group-hover:text-white">
                  <Icon size={26} />
                </div>

                <p className="mt-7 text-xs font-bold uppercase tracking-[0.15em] text-[#087FC1]">
                  {person.level}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#082B52]">
                  {person.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {person.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#19B5E5] transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>

        {/* Structure note */}
        <div className="mt-12 flex flex-col gap-5 rounded-2xl bg-[#082B52] p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Technical Leadership & Accountability
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100/70">
              Our management structure supports the coordination of aviation
              engineering activities and the responsibilities associated with
              our specialist services.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#087FC1] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#19B5E5]"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
