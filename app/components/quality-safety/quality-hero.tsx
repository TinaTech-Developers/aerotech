import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function QualityHero() {
  return (
    <section className="relative flex min-h-[540px] items-center overflow-hidden bg-[#061D38] lg:min-h-[620px]">
      <Image
        src="/images/quality-safety/quality-hero.jpg"
        alt="Aircraft maintenance engineering and safety"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061D38] via-[#061D38]/90 to-[#061D38]/40" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <ShieldCheck size={17} />
            Quality, Safety & Responsibility
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Quality in Every Detail.
            <span className="block text-cyan-400">
              Safety in Every Service.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            At Aerotech, quality and safety are central to our approach to
            aircraft maintenance and engineering. We recognise the
            responsibility that comes with work where lives depend on quality.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-md bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400"
            >
              Contact Our Team
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-3 rounded-md border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Discover Aerotech
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
