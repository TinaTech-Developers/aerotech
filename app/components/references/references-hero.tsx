import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";

export default function ReferencesHero() {
  return (
    <section className="relative isolate flex min-h-[460px] items-center overflow-hidden bg-[#061D38] lg:min-h-[540px]">
      <Image
        src="/images/references/references-hero.jpg"
        alt="General aviation aircraft at an airport"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061D38] via-[#061D38]/90 to-[#061D38]/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <Building2 size={16} />
            Our References
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Built on Experience.
            <span className="block text-cyan-400">Recognised Through</span>
            <span className="block">Our References.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Explore the organisations included in Aerotech's company reference
            information, representing a range of aviation, training and industry
            sectors.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#references"
              className="inline-flex items-center gap-3 rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
            >
              View References
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Aerotech
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
