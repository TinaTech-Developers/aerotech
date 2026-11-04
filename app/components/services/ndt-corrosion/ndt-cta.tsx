import Link from "next/link";
import { ArrowRight, MapPin, ShieldCheck } from "lucide-react";

export default function NDTCTA() {
  return (
    <section className="relative overflow-hidden bg-[#061D38] py-20">
      <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
              <ShieldCheck size={28} />
            </div>

            <h2 className="max-w-2xl text-3xl font-bold text-white sm:text-4xl">
              Supporting Aircraft Inspection & Protection
            </h2>

            <p className="mt-5 max-w-2xl leading-8 text-slate-300">
              Get in touch with Aerotech to discuss NDT, corrosion protection
              and plating service requirements.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-md bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400"
              >
                Contact Aerotech
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-md border border-white/30 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
              >
                View All Services
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-cyan-400" size={24} />

              <div>
                <h3 className="font-bold text-white">Visit Aerotech</h3>

                <p className="mt-3 leading-7 text-slate-300">
                  Site 10 A,
                  <br />
                  Charles Prince Airport,
                  <br />
                  Mt Hampden,
                  <br />
                  Harare, Zimbabwe.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
