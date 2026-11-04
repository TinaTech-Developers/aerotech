import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Images } from "lucide-react";

export default function GalleryHero() {
  return (
    <section className="relative isolate flex min-h-[480px] items-center overflow-hidden bg-[#061D38] lg:min-h-[560px]">
      <Image
        src="/images/gallery/gallery-hero.jpg"
        alt="Aircraft at an aviation maintenance facility"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061D38] via-[#061D38]/90 to-[#061D38]/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <Camera size={16} />A closer look at Aerotech
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Our Work.
            <span className="block text-cyan-400">Our Capabilities.</span>
            <span className="block">Our Gallery.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Explore a visual collection of aviation engineering, aircraft
            maintenance, specialist services and the working environment behind
            Aerotech (Pvt) Ltd.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#gallery"
              className="inline-flex items-center gap-3 rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
            >
              Explore Gallery
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Our Team
            </Link>
          </div>
        </div>

        <div className="mt-14 flex items-center gap-3 text-sm text-slate-300">
          <Images size={19} className="text-cyan-400" />
          <span>Aircraft engineering, maintenance and technical services</span>
        </div>
      </div>
    </section>
  );
}
