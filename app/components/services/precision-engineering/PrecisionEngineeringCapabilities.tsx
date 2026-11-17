import {
  Cog,
  Ruler,
  Wrench,
  Settings,
  Component,
  Drill,
  Cable,
  Factory,
  Layers,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "General Machining",
    description:
      "Workshop machining services supporting the production, modification and repair of applicable engineering components and parts.",
    icon: Cog,
  },
  {
    number: "02",
    title: "Precision Engineering",
    description:
      "Precision engineering work involving component measurements, machining operations and specialist workshop processes.",
    icon: Ruler,
  },
  {
    number: "03",
    title: "Aluminium Welding",
    description:
      "Aluminium welding services for applicable fabrication, repair and engineering requirements, subject to technical assessment.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Metal Fabrication",
    description:
      "Metal fabrication and workshop engineering services supporting structural work, component requirements and specialist projects.",
    icon: Factory,
  },
  {
    number: "05",
    title: "Component Repair Support",
    description:
      "Engineering workshop support for applicable component repair, modification and maintenance requirements.",
    icon: Component,
  },
  {
    number: "06",
    title: "Aircraft Cable Fabrication",
    description:
      "Specialist aircraft cable fabrication supporting applicable aircraft maintenance and engineering requirements.",
    icon: Cable,
  },
  {
    number: "07",
    title: "Workshop Engineering",
    description:
      "Practical engineering support using workshop equipment and processes to address specialist fabrication and maintenance needs.",
    icon: Drill,
  },
  {
    number: "08",
    title: "Specialist Fabrication",
    description:
      "Fabrication support for selected engineering applications requiring careful workmanship and appropriate technical assessment.",
    icon: Layers,
  },
];

export default function PrecisionEngineeringCapabilities() {
  return (
    <section
      id="engineering-capabilities"
      className="relative overflow-hidden bg-[#F4F8FC] py-24 sm:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full border border-sky-200/60" />
      <div className="pointer-events-none absolute -left-20 top-40 h-72 w-72 rounded-full border border-sky-200/60" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
            <Settings size={15} />
            Our Capabilities
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            Precision Engineering
            <span className="block text-[#087FC1]">
              & Workshop Capabilities
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Our engineering capabilities combine machining, fabrication, welding
            and specialist workshop support to address a range of
            aviation-related and general engineering requirements.
          </p>
        </div>

        {/* Capability cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative flex min-h-[300px] flex-col overflow-hidden rounded-xl border border-slate-200 bg-white p-7 transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#087FC1]">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#087FC1]/10 text-[#087FC1] transition-all duration-300 group-hover:bg-[#087FC1] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>
                </div>

                <h3 className="mt-8 text-lg font-bold text-[#082B52] transition-colors duration-300 group-hover:text-[#087FC1]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-auto flex items-center justify-between pt-7">
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    Engineering Services
                  </span>

                  <div className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-[#087FC1] transition-all duration-300 group-hover:border-[#087FC1] group-hover:bg-[#087FC1] group-hover:text-white">
                    <Wrench size={14} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#19B5E5] transition-all duration-500 group-hover:w-full" />
              </article>
            );
          })}
        </div>

        {/* Bottom information panel */}
        <div className="mt-16 grid gap-8 rounded-2xl bg-[#082B52] p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <div className="flex items-center gap-3 text-[#19B5E5]">
              <Factory size={20} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Integrated Engineering Support
              </span>
            </div>

            <h3 className="mt-5 max-w-2xl text-2xl font-bold text-white sm:text-3xl">
              Engineering Expertise Supporting Aviation Maintenance.
            </h3>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              Our precision engineering and workshop capabilities complement
              Aerotech&apos;s wider aircraft maintenance, airframe engineering
              and specialist aviation services.
            </p>
          </div>

          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-3 rounded-md bg-[#087FC1] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#19B5E5]"
          >
            Discuss Your Project
            <Settings size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
