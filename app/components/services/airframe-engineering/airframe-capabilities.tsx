import {
  ClipboardCheck,
  Gauge,
  Hammer,
  Layers3,
  Paintbrush,
  Ruler,
  ShieldCheck,
  Wrench,
  Cable,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Sheet Metal Work",
    description:
      "Aircraft sheet metal work as part of Aerotech's airframe engineering and repair capabilities.",
    icon: Hammer,
  },
  {
    number: "02",
    title: "Stressed-Skin Repairs",
    description: "Repair work involving aircraft stressed-skin structures.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Aircraft Refurbishment",
    description:
      "Complete aircraft refurbishment services, including spray painting.",
    icon: Paintbrush,
  },
  {
    number: "04",
    title: "Aircraft Weighing",
    description:
      "Aircraft weighing services supporting aviation engineering requirements.",
    icon: Gauge,
  },
  {
    number: "05",
    title: "Fabric Work",
    description:
      "Aircraft fabric work included within Aerotech's broader repair capabilities.",
    icon: Layers3,
  },
  {
    number: "06",
    title: "Fibreglass Work",
    description:
      "Fibre glass work as part of the company's aircraft engineering services.",
    icon: Ruler,
  },
  {
    number: "07",
    title: "General Machining",
    description:
      "General machining services supporting engineering and component work.",
    icon: Wrench,
  },
  {
    number: "08",
    title: "Aluminium Welding",
    description: "Welding services, including aluminium welding.",
    icon: Cable,
  },
  {
    number: "09",
    title: "Supporting Technical Services",
    description:
      "Additional specialist capabilities include non-destructive testing and aircraft component services.",
    icon: ClipboardCheck,
  },
];

export default function AirframeCapabilities() {
  return (
    <section
      id="airframe-capabilities"
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
            Airframe Engineering Services
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Explore Aerotech's airframe repair, refurbishment and associated
            engineering capabilities.
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
              <Wrench size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Connected Aviation Engineering Services
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-blue-100/80">
                Airframe engineering forms part of Aerotech's wider technical
                offering, which includes engine and propeller services,
                electrical and radio installations, instrument repairs and
                non-destructive testing.
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
