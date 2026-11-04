import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Cog,
  Gauge,
  Plane,
  Wrench,
} from "lucide-react";

export default function EngineHero() {
  return (
    <section className="relative isolate min-h-[540px] overflow-hidden bg-[#061D38] lg:min-h-[620px]">
      <Image
        src="/images/services/engine-overhaul.jpg"
        alt="Aircraft engine undergoing maintenance and overhaul"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#04172E]/95 via-[#061D38]/85 to-[#061D38]/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/75 via-transparent to-[#061D38]/10" />

      <div className="relative mx-auto flex min-h-[540px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[620px] lg:px-10">
        <div className="max-w-3xl">
          <div className="mb-7 flex flex-wrap items-center gap-2 text-sm font-medium text-blue-100">
            <Link href="/" className="transition hover:text-white">
              Home
            </Link>
            <ChevronRight size={15} />
            <Link href="/services" className="transition hover:text-white">
              Services
            </Link>
            <ChevronRight size={15} />
            <span className="text-cyan-300">Engine & Propeller Overhauls</span>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-sm font-semibold text-cyan-200 backdrop-blur-sm">
            <Cog size={16} />
            Engine & Propeller Engineering
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl">
            Engine & Propeller
            <span className="block text-cyan-300">Overhauls.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Specialist overhaul and repair capabilities for piston engines,
            propellers and PT6 engine components, supporting general aviation
            engineering requirements.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-[#087FC1] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-950/30 transition hover:bg-[#066DA8]"
            >
              Enquire About Overhauls
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#engine-capabilities"
              className="inline-flex items-center justify-center gap-3 rounded-md border border-white/35 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white/15"
            >
              Explore Capabilities
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-2 gap-5 border-t border-white/20 pt-7 sm:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 text-cyan-300">
                <Cog size={19} />
                <span className="text-lg font-bold">Piston Engines</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Engine and component overhauls
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-cyan-300">
                <Plane size={19} />
                <span className="text-lg font-bold">Propellers</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Propeller overhaul services
              </p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="flex items-center gap-2 text-cyan-300">
                <Gauge size={19} />
                <span className="text-lg font-bold">PT6 Components</span>
              </div>
              <p className="mt-2 text-xs leading-5 text-slate-300">
                Repairs and overhauls
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#087FC1] via-cyan-300 to-transparent" />
    </section>
  );
}
