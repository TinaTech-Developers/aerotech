import {
  Cable,
  ClipboardCheck,
  Gauge,
  Hammer,
  Paintbrush,
  Plane,
  Ruler,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Aircraft Maintenance & Rebuilding",
    description:
      "Aircraft servicing, scheduled maintenance, inspections, repairs and rebuilding for general aviation aircraft within Aerotech's authorised maintenance scope.",
    icon: Plane,
  },
  {
    number: "02",
    title: "Sheet Metal & Structural Repairs",
    description:
      "Airframe engineering, sheet metal fabrication, stressed-skin repairs and structural restoration to support aircraft integrity and serviceability.",
    icon: Hammer,
  },
  {
    number: "03",
    title: "Aircraft Refurbishment & Painting",
    description:
      "Aircraft refurbishment, surface restoration and spray painting to support the maintenance, appearance and preservation of aircraft.",
    icon: Paintbrush,
  },
  {
    number: "04",
    title: "Aircraft Weighing",
    description:
      "Aircraft weighing services to establish weight data and support accurate aircraft weight and balance records.",
    icon: Gauge,
  },
  {
    number: "05",
    title: "Fabric & Fibreglass Work",
    description:
      "Specialist fabric and fibreglass repairs supporting aircraft structural maintenance, component restoration and airframe engineering.",
    icon: Ruler,
  },
  {
    number: "06",
    title: "Welding & Precision Machining",
    description:
      "Workshop engineering services encompassing general machining, metal fabrication and aluminium welding for specialist repair requirements.",
    icon: Wrench,
  },
  {
    number: "07",
    title: "Aircraft Cable Fabrication",
    description:
      "Aircraft cable fabrication and associated engineering support for aircraft maintenance and component requirements.",
    icon: Cable,
  },
  {
    number: "08",
    title: "Non-Destructive Testing (NDT)",
    description:
      "Specialist inspection techniques, including Magnetic Particle Inspection and Fluorescent Penetrant Inspection, to help identify material and surface defects.",
    icon: ShieldCheck,
  },
  {
    number: "09",
    title: "Seatbelt Proof Loading",
    description:
      "Aircraft seatbelt proof-loading services as part of Aerotech's specialist aviation testing and engineering capabilities.",
    icon: ClipboardCheck,
  },
];

export default function MaintenanceCapabilities() {
  return (
    <section
      id="maintenance-capabilities"
      className="scroll-mt-24 bg-[#F4F7FB] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-[#087FC1]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
              Our Capabilities
            </span>
            <span className="h-[2px] w-9 bg-[#087FC1]" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#082B52] sm:text-4xl">
            Specialist Aircraft Engineering & Maintenance
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Aerotech brings together a range of aviation engineering and
            technical capabilities to support aircraft maintenance, structural
            repairs, refurbishment and specialist inspection requirements. Our
            multidisciplinary approach contributes to reliable maintenance
            support and aircraft serviceability.
          </p>
        </div>

        {/* Capabilities grid */}
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

        {/* Integrated aviation support */}
        <div className="mt-12 rounded-2xl bg-[#082B52] p-7 sm:p-9 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-cyan-300">
              <Wrench size={24} />
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                Integrated Aviation Support Services
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-blue-100/80">
                Aerotech's wider technical capabilities also encompass engine
                and propeller maintenance and overhauls, instrument testing and
                calibration, electrical and radio systems, component support,
                electroplating and aircraft spares. These services contribute to
                our one-stop aviation maintenance and engineering offering.
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
