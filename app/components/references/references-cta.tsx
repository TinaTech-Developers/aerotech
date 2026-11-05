import Link from "next/link";
import { ArrowRight, MapPin, Plane } from "lucide-react";

export default function ReferencesCTA() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#061D38] px-7 py-14 sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-cyan-400/10" />
          <div className="absolute -bottom-32 right-40 h-72 w-72 rounded-full bg-[#087FC1]/15 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                <Plane size={17} />
                Work With Aerotech
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Looking for Aviation Engineering Services?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Speak to our team about your aircraft maintenance, engineering,
                engine and propeller, or instrument testing requirements.
              </p>

              <div className="mt-6 flex items-start gap-3 text-sm text-slate-300">
                <MapPin size={19} className="mt-0.5 shrink-0 text-cyan-400" />
                <span>
                  Site 10 A, Charles Prince Airport, Mt Hampden, Harare,
                  Zimbabwe
                </span>
              </div>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400"
            >
              Contact Our Team
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
