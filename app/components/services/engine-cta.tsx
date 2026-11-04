import Link from "next/link";
import { ArrowRight, ArrowUpRight, Cog, MapPin } from "lucide-react";

export default function EngineCTA() {
  return (
    <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#082B52] via-[#073968] to-[#087FC1] px-7 py-12 sm:px-12 sm:py-16 lg:px-16">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full border border-white/10" />
          <div className="absolute -right-5 -top-9 h-52 w-52 rounded-full border border-white/10" />
          <div className="absolute -bottom-28 left-1/3 h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-cyan-200">
                <Cog size={15} />
                Engine & Propeller Engineering
              </div>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let's Talk About Your Engine & Propeller Requirements.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-blue-100/85">
                From piston engine and component overhauls to propeller services
                and PT6 component repairs, contact Aerotech to discuss your
                requirements.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-md bg-white px-7 py-4 text-sm font-bold text-[#082B52] transition hover:bg-cyan-50"
                >
                  Make an Enquiry
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/40 px-7 py-4 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  View All Services
                  <ArrowUpRight size={17} />
                </Link>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8 lg:w-[300px]">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15 text-cyan-200">
                <MapPin size={25} />
              </div>

              <h3 className="mt-6 text-lg font-bold text-white">
                Visit Aerotech
              </h3>

              <p className="mt-3 text-sm leading-7 text-blue-100/80">
                Site 10 A,
                <br />
                Charles Prince Airport,
                <br />
                Mt Hampden,
                <br />
                Harare, Zimbabwe.
              </p>

              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-200 transition hover:text-white"
              >
                Contact & Location
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
