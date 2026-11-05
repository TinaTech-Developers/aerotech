import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative isolate flex min-h-[440px] items-center overflow-hidden bg-[#061D38] lg:min-h-[520px]">
      <Image
        src="/images/contact/contact-hero.jpg"
        alt="Aircraft at an aviation maintenance facility"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#061D38] via-[#061D38]/90 to-[#061D38]/35" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
            <MapPin size={16} />
            Charles Prince Airport, Zimbabwe
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
            Let's Talk Aviation.
            <span className="block text-cyan-400">We're Here to Help.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Get in touch with Aerotech for aircraft maintenance, engineering,
            engine and propeller services, instrument testing and other aviation
            technical enquiries.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Link
              href="#contact-form"
              className="inline-flex items-center gap-3 rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
            >
              Send an Enquiry
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#location"
              className="inline-flex items-center gap-3 rounded-lg border border-white/30 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
            >
              Find Our Location
              <MapPin size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
