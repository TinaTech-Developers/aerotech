import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  Cog,
  Gauge,
  Radio,
  Ruler,
  ShieldCheck,
  Wrench,
  Cable,
  Microscope,
} from "lucide-react";

const technicalTeams = [
  {
    number: "01",
    title: "Aircraft Maintenance",
    description:
      "Technical personnel supporting aircraft inspections, scheduled maintenance, repairs, servicing and rebuilding within the applicable authorised scope.",
    icon: Plane,
    href: "/services/aircraft-maintenance",
  },
  {
    number: "02",
    title: "Engine & Propeller",
    description:
      "Specialist engineering support for piston engine maintenance and overhauls, propeller servicing and applicable PT6A component work.",
    icon: Cog,
    href: "/services/engine-propeller",
  },
  {
    number: "03",
    title: "Airframe Engineering",
    description:
      "Airframe and structural engineering capabilities covering sheet metal work, structural repairs, fabrication, welding and specialist restoration.",
    icon: Wrench,
    href: "/services/airframe-engineering",
  },
  {
    number: "04",
    title: "Instrument Calibration",
    description:
      "Technical personnel supporting the testing and calibration of pressure, temperature, electrical and dimensional measurement instruments.",
    icon: Gauge,
    href: "/services/instrument-calibration",
  },
  {
    number: "05",
    title: "Electrical & Radio",
    description:
      "Specialist support for aircraft electrical and radio installations, servicing, component maintenance and associated technical work.",
    icon: Radio,
    href: "/services/electrical-radio",
  },
  {
    number: "06",
    title: "NDT & Corrosion Protection",
    description:
      "Specialist inspection and surface treatment capabilities, including Magnetic Particle Inspection, Fluorescent Penetrant Inspection and electroplating.",
    icon: ShieldCheck,
    href: "/services/ndt-corrosion",
  },
  {
    number: "07",
    title: "Precision Engineering",
    description:
      "Engineering workshop support involving machining, fabrication, welding and other precision work relevant to aviation components.",
    icon: Ruler,
    href: "/services/precision-engineering",
  },
  {
    number: "08",
    title: "Component & Workshop Support",
    description:
      "Supporting technical activities through component assessment, specialist workshop processes and related engineering services.",
    icon: Cable,
    href: "/services",
  },
];

export default function TechnicalTeam() {
  return (
    <section className="relative overflow-hidden bg-[#F4F8FC] py-24 sm:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full border border-sky-200/60" />
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full border border-sky-200/60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_0.75fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
              <Wrench size={15} />
              Our Technical Expertise
            </div>

            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
              Skilled People.
              <span className="block text-[#087FC1]">
                Specialist Capabilities.
              </span>
            </h2>
          </div>

          <p className="text-base leading-8 text-slate-600">
            Aerotech&apos;s technical capabilities bring together different
            areas of aviation maintenance and engineering expertise. Our
            multidisciplinary approach supports a broad range of general
            aviation service requirements.
          </p>
        </div>

        {/* Technical teams */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {technicalTeams.map((team) => {
            const Icon = team.icon;

            return (
              <Link
                href={team.href}
                key={team.number}
                className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#087FC1]">
                    {team.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087FC1]/10 text-[#087FC1] transition-all duration-300 group-hover:bg-[#087FC1] group-hover:text-white">
                    <Icon size={23} strokeWidth={1.7} />
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-lg font-bold text-[#082B52] transition-colors duration-300 group-hover:text-[#087FC1]">
                    {team.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {team.description}
                  </p>
                </div>

                <div className="mt-auto flex items-center gap-2 pt-6 text-xs font-bold uppercase tracking-wider text-[#087FC1]">
                  Explore Capability
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#19B5E5] transition-all duration-500 group-hover:w-full" />
              </Link>
            );
          })}
        </div>

        {/* Technical support banner */}
        <div className="mt-16 overflow-hidden rounded-2xl bg-[#082B52]">
          <div className="grid lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex items-center gap-3 text-[#19B5E5]">
                <Microscope size={20} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Multidisciplinary Expertise
                </span>
              </div>

              <h3 className="mt-5 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                One Team. Multiple Areas of Aviation Engineering Expertise.
              </h3>

              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Our technical disciplines work together to support aircraft
                maintenance, specialist engineering requirements and dependable
                aviation services.
              </p>
            </div>

            <div className="px-8 pb-8 lg:px-12 lg:py-12">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 rounded-md bg-[#087FC1] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#19B5E5]"
              >
                Explore All Services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
