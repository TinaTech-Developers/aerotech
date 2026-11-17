import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Cog,
  Ruler,
  Wrench,
  Settings,
} from "lucide-react";

const highlights = [
  {
    icon: Cog,
    title: "Precision Machining",
    description: "Specialist machining and engineering workshop support.",
  },
  {
    icon: Wrench,
    title: "Metal Fabrication",
    description: "Fabrication, welding and component engineering.",
  },
  {
    icon: Ruler,
    title: "Technical Precision",
    description: "Careful workmanship for specialist engineering requirements.",
  },
];

export default function PrecisionEngineeringHero() {
  return (
    <section className="relative isolate min-h-[620px] overflow-hidden bg-[#061D38]">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/services/precision-engineering.jpg"
          alt="Precision engineering and metal fabrication workshop"
          fill
          priority
          className="object-cover object-center opacity-35"
        />
      </div>

      {/* Overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061D38] via-[#061D38]/95 to-[#061D38]/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061D38] via-transparent to-[#061D38]/20" />

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-[500px] w-[500px] rounded-full border border-sky-300/10" />
      <div className="pointer-events-none absolute -right-16 top-16 -z-10 h-[370px] w-[370px] rounded-full border border-sky-300/10" />
      <div className="pointer-events-none absolute right-10 top-32 -z-10 h-[240px] w-[240px] rounded-full border border-sky-300/10" />

      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Main content */}
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#19B5E5]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
              Precision Engineering & Fabrication
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Precision Engineering.
            <span className="block text-[#19B5E5]">
              Built Around Expertise.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Aerotech Technicians provides precision engineering and workshop
            support for specialist aviation and engineering requirements. Our
            capabilities include general machining, metal fabrication, aluminium
            welding and component-related engineering work, supporting aircraft
            maintenance and associated technical activities.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#19B5E5]"
            >
              Enquire About Engineering
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#engineering-capabilities"
              className="group inline-flex items-center justify-center gap-3 rounded-md border border-white/25 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-[#19B5E5] hover:bg-white/5"
            >
              Explore Capabilities
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-[#19B5E5]">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right visual */}
        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 bg-[#0B3155] shadow-2xl shadow-black/30">
            <Image
              src="/images/services/precision-workshop.jpg"
              alt="Engineering workshop and precision metalworking"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 0px, 448px"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061D38] via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="mb-3 flex items-center gap-2 text-[#19B5E5]">
                <Settings size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Engineering Workshop
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                Precision in Every Detail
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Practical engineering expertise supporting specialist aviation
                maintenance and fabrication requirements.
              </p>
            </div>
          </div>

          {/* Floating card */}
          <div className="absolute -bottom-7 -left-10 rounded-xl border border-white/10 bg-[#0B3155] p-5 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#19B5E5]/10 text-[#19B5E5]">
                <Ruler size={25} />
              </div>

              <div>
                <p className="text-sm font-bold text-white">
                  Engineering Support
                </p>
                <p className="mt-1 text-xs text-slate-400">
                  Machining & Fabrication
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
