import Link from "next/link";
import { ArrowRight, Wrench, Plane } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="bg-[#F5F8FC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-[#061D38] px-7 py-14 sm:px-12 lg:px-16">
          <div className="absolute -right-20 -top-24 h-80 w-80 rounded-full border-[45px] border-cyan-400/10" />
          <div className="absolute -bottom-32 right-40 h-72 w-72 rounded-full bg-[#087FC1]/15 blur-3xl" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                <Wrench size={17} />
                Aviation Engineering
              </div>

              <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
                Have an Aircraft Maintenance or Engineering Requirement?
              </h2>

              <p className="mt-5 leading-8 text-slate-300">
                Let us understand your requirements and discuss how Aerotech's
                technical capabilities may assist your organisation.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400"
            >
              Explore Our Services
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="relative z-10 mt-10 flex items-center gap-3 border-t border-white/15 pt-6 text-sm text-slate-300">
            <Plane size={19} className="text-cyan-400" />
            <span>
              Aerotech (Pvt) Ltd — Site 10 A, Charles Prince Airport, Mt
              Hampden, Harare, Zimbabwe
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
