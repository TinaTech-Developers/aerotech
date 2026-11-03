import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronRight, Plane } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative isolate min-h-[480px] overflow-hidden bg-[#061D38] sm:min-h-[540px] lg:min-h-[600px]">
      {/* Background image */}
      <Image
        src="/images/about/about-hero.jpg"
        alt="Aircraft at an aviation maintenance facility"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Image overlays */}
      <div className="absolute inset-0 bg-[#061D38]/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#061D38] via-[#061D38]/85 to-[#061D38]/25" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/70 via-transparent to-transparent" />

      {/* Decorative aviation elements */}
      <div className="pointer-events-none absolute right-[8%] top-1/2 hidden -translate-y-1/2 lg:block">
        <div className="flex h-72 w-72 items-center justify-center rounded-full border border-white/10">
          <div className="flex h-56 w-56 items-center justify-center rounded-full border border-white/10">
            <div className="flex h-40 w-40 items-center justify-center rounded-full border border-white/10 text-white/20">
              <Plane size={76} strokeWidth={0.8} />
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[480px] max-w-7xl flex-col justify-center px-5 py-20 sm:min-h-[540px] sm:px-8 lg:min-h-[600px] lg:px-10">
        {/* Breadcrumb */}
        <div className="mb-8 flex items-center gap-2 text-sm text-blue-100/70">
          <Link href="/" className="transition-colors hover:text-[#19B5E5]">
            Home
          </Link>
          <ChevronRight size={15} />
          <span className="font-semibold text-[#19B5E5]">About Us</span>
        </div>

        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#19B5E5]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#19B5E5] sm:text-sm">
              About Aerotech
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Engineering
            <br />
            Excellence in
            <span className="block text-[#19B5E5]">Aviation.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-blue-50/80 sm:text-lg">
            Discover Aerotech (Pvt) Ltd, an aviation engineering company based
            at Charles Prince Airport, Harare, providing aircraft maintenance,
            specialist engineering and instrument testing and calibration
            services.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#19B5E5]"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-[#19B5E5] hover:bg-white/10"
            >
              Contact Aerotech
            </Link>
          </div>
        </div>

        {/* Bottom information */}
        <div className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/15 pt-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#19B5E5]">
              Location
            </p>
            <p className="mt-1 text-sm text-white/80">
              Charles Prince Airport, Harare
            </p>
          </div>

          <div className="hidden h-9 w-px bg-white/20 sm:block" />

          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#19B5E5]">
              Our Mission
            </p>
            <p className="mt-1 text-sm text-white/80">
              Safe and affordable aircraft maintenance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
