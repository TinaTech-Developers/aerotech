import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  MapPin,
  ShieldCheck,
} from "lucide-react";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="relative overflow-hidden rounded-3xl bg-[#061D38] px-7 py-14 shadow-2xl sm:px-12 sm:py-16 lg:px-16">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />

          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#19B5E5]">
                <Plane size={15} />
                Work With Aerotech
              </span>

              <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Engineering the Future of{" "}
                <span className="text-[#19B5E5]">General Aviation.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/70 sm:text-lg">
                Discover how Aerotech can support your aviation maintenance,
                engineering and instrument testing requirements. Our team
                welcomes your enquiries.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#19B5E5]"
                >
                  Make an Enquiry
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/25 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-[#19B5E5] hover:bg-white/5"
                >
                  Explore Services
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>

            {/* Side information */}
            <div className="w-full rounded-2xl border border-white/10 bg-white/[0.05] p-6 lg:w-72">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087FC1]/20 text-[#19B5E5]">
                <ShieldCheck size={25} />
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">Our Mission</h3>

              <p className="mt-3 text-sm leading-7 text-blue-100/65">
                To make aircraft maintenance safe and affordable.
              </p>

              <div className="mt-6 border-t border-white/10 pt-5">
                <div className="flex items-start gap-3">
                  <MapPin size={19} className="mt-1 shrink-0 text-[#19B5E5]" />
                  <p className="text-sm leading-6 text-blue-100/70">
                    Charles Prince Airport,
                    <br />
                    Mt Hampden, Harare,
                    <br />
                    Zimbabwe.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
