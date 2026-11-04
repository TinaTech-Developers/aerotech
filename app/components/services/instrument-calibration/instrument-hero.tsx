import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, MoveRight } from "lucide-react";

export default function InstrumentHero() {
  return (
    <section className="relative flex min-h-[540px] items-center overflow-hidden bg-[#061D38] lg:min-h-[620px]">
      <Image
        src="/images/services/instrument-calibration.jpg"
        alt="Precision instrument testing and calibration"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061D38] via-[#061D38]/90 to-[#061D38]/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <Gauge size={17} />
            Precision Instrument Services
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Instrument Testing
            <span className="block text-cyan-400">& Calibration</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Instrument testing and calibration services covering pressure,
            temperature, electrical and standard measurement instruments.
            Supporting precision and confidence in measurement.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400"
            >
              Enquire About Calibration
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="inline-flex items-center gap-3 rounded-md border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Explore Our Services
              <MoveRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
