import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Cog,
  Ruler,
  Wrench,
  Settings,
  Factory,
  Component,
} from "lucide-react";

const highlights = [
  {
    icon: Cog,
    title: "General Machining",
    description:
      "Machining and workshop engineering support for specialist component and fabrication requirements.",
  },
  {
    icon: Wrench,
    title: "Metal Fabrication",
    description:
      "Metalworking and fabrication services supporting engineering and maintenance activities.",
  },
  {
    icon: Settings,
    title: "Aluminium Welding",
    description:
      "Specialist aluminium welding work for applicable engineering and component requirements.",
  },
  {
    icon: Component,
    title: "Component Engineering",
    description:
      "Workshop-based engineering support for component-related maintenance and repair requirements.",
  },
];

const capabilities = [
  "General machining and precision engineering",
  "Metal fabrication and workshop engineering",
  "Aluminium welding",
  "Aircraft cable fabrication",
  "Specialist component-related engineering support",
];

export default function PrecisionEngineeringOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full border border-sky-100" />
      <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full border border-sky-100" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main content */}
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-slate-100 shadow-xl">
              <Image
                src="/images/services/precision-engineering-overview.jpg"
                alt="Precision engineering and metal fabrication workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/50 via-transparent to-transparent" />
            </div>

            {/* Floating information panel */}
            <div className="absolute -bottom-8 -right-4 max-w-[280px] rounded-xl border border-slate-100 bg-white p-6 shadow-xl sm:-right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#087FC1]/10 text-[#087FC1]">
                  <Factory size={25} />
                </div>

                <div>
                  <p className="text-sm font-bold text-[#082B52]">
                    Engineering Workshop
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Specialist Technical Support
                  </p>
                </div>
              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Practical engineering capabilities supporting aviation
                maintenance and specialist fabrication requirements.
              </p>
            </div>
          </div>

          {/* Text content */}
          <div className="pt-4 lg:pt-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
              <Ruler size={15} />
              Engineering & Workshop Services
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#082B52] sm:text-4xl">
              Engineering Solutions.
              <span className="block text-[#087FC1]">
                Precision Workmanship.
              </span>
            </h2>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Aerotech Technicians provides precision engineering and workshop
              services that complement its wider aircraft maintenance and
              engineering capabilities. These activities include general
              machining, metal fabrication, aluminium welding and specialist
              component-related engineering support.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our engineering capabilities support practical maintenance
              requirements, fabrication work and specialist technical
              applications across general aviation and related engineering
              activities.
            </p>

            {/* Capabilities checklist */}
            <div className="mt-8 space-y-4">
              {capabilities.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-[#087FC1]"
                  />
                  <p className="text-sm font-medium leading-6 text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 text-sm font-bold text-[#087FC1] transition-colors hover:text-[#19B5E5]"
            >
              Discuss Your Engineering Requirements
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Capability cards */}
        <div className="mt-28">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
              Our Engineering Expertise
            </p>

            <h3 className="mt-4 text-3xl font-bold tracking-tight text-[#082B52] sm:text-4xl">
              Supporting Specialist Engineering Requirements
            </h3>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Our workshop capabilities provide complementary technical support
              for aircraft maintenance, fabrication and component engineering
              activities.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/10"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#087FC1]/10 text-[#087FC1] transition-all duration-300 group-hover:bg-[#087FC1] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>

                  <h4 className="mt-7 text-lg font-bold text-[#082B52]">
                    {item.title}
                  </h4>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-6 h-1 w-10 rounded-full bg-[#19B5E5] transition-all duration-300 group-hover:w-16" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
