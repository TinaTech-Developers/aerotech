import {
  Cog,
  Component,
  Gauge,
  Settings,
  Wrench,
  Plane,
  RotateCw,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Piston Engine Overhauls",
    description:
      "Specialist maintenance and overhaul services for general aviation piston engines, including applicable Lycoming and Continental engine types.",
    icon: Cog,
  },
  {
    number: "02",
    title: "Engine Component Maintenance",
    description:
      "Inspection, servicing, repair and overhaul support for applicable piston engine components to maintain their condition and serviceability.",
    icon: Component,
  },
  {
    number: "03",
    title: "Propeller Maintenance & Overhauls",
    description:
      "Propeller servicing, inspection and overhaul capabilities supporting the maintenance and continued serviceability of aircraft propeller systems.",
    icon: RotateCw,
  },
  {
    number: "04",
    title: "PT6A Component Repairs",
    description:
      "Specialist repair services for applicable Pratt & Whitney PT6A turbine-engine components, supporting component maintenance requirements.",
    icon: Wrench,
  },
  {
    number: "05",
    title: "PT6A Component Overhauls",
    description:
      "Overhaul services for applicable PT6A engine components as part of Aerotech's specialist turbine-engine engineering capabilities.",
    icon: Settings,
  },
  {
    number: "06",
    title: "Associated Engineering Support",
    description:
      "Complementary technical capabilities across aircraft maintenance, mechanical engineering, component support and related aviation services.",
    icon: Gauge,
  },
];

export default function EngineCapabilities() {
  return (
    <section
      id="engine-capabilities"
      className="scroll-mt-24 bg-[#F4F7FB] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#087FC1]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
              Our Technical Capabilities
            </span>
            <span className="h-[2px] w-9 bg-[#087FC1]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#082B52] sm:text-4xl">
            Engine & Propeller Services
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Aerotech Technicians delivers engine and propeller maintenance
            capabilities covering piston engine overhauls, propeller servicing
            and specialist repair and overhaul support for applicable PT6A
            turbine-engine components.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;

            return (
              <article
                key={capability.number}
                className="group relative overflow-hidden rounded-xl border border-slate-200/80 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#087FC1]/40 hover:shadow-xl hover:shadow-blue-950/5"
              >
                <div className="absolute right-5 top-4 text-5xl font-black text-slate-100 transition group-hover:text-blue-50">
                  {capability.number}
                </div>

                <div className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[#087FC1] transition duration-300 group-hover:bg-[#087FC1] group-hover:text-white">
                  <Icon size={26} strokeWidth={1.8} />
                </div>

                <h3 className="relative mt-7 text-lg font-bold leading-snug text-[#082B52]">
                  {capability.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {capability.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#19B5E5] transition-all duration-300 group-hover:w-16" />
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl bg-[#082B52] p-7 sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
              <Plane size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Integrated Aviation Engineering Support
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-blue-100/80">
                Aerotech's wider capabilities include aircraft maintenance and
                rebuilding, airframe engineering, instrument testing and
                calibration, electrical and radio systems, non-destructive
                testing, corrosion protection and specialist component services.
              </p>
            </div>
          </div>

          <a
            href="/services"
            className="mt-7 inline-flex shrink-0 items-center justify-center rounded-md border border-white/30 px-5 py-3 text-sm font-bold text-white transition hover:border-cyan-300 hover:bg-white/10 lg:mt-0"
          >
            Explore All Services
          </a>
        </div>
      </div>
    </section>
  );
}
