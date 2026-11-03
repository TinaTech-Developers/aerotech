import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  MapPin,
  MessageSquare,
  Plane,
  ShieldCheck,
} from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FC] py-20 sm:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-sky-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid overflow-hidden rounded-3xl bg-[#061D38] shadow-2xl lg:grid-cols-[1.15fr_0.85fr]">
          {/* Main CTA */}
          <div className="relative px-7 py-12 sm:px-12 sm:py-16 lg:px-14">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-10 -top-10 h-52 w-52 rounded-full border border-white/10" />

            <div className="relative">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#19B5E5]">
                <MessageSquare size={15} />
                Contact Aerotech
              </span>

              <h2 className="max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                Let's Discuss Your{" "}
                <span className="text-[#19B5E5]">Aviation Engineering</span>{" "}
                Requirements.
              </h2>

              <p className="mt-6 max-w-xl text-base leading-8 text-blue-100/75">
                Whether you require aircraft maintenance, engine and propeller
                overhauls, instrument testing or specialist engineering
                services, our team is ready to hear from you.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#19B5E5]"
                >
                  Make an Enquiry
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/20 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-[#19B5E5] hover:bg-white/5"
                >
                  Explore Our Services
                  <ArrowUpRight size={18} />
                </Link>
              </div>

              <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-7">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-400/10 text-[#19B5E5]">
                  <ShieldCheck size={20} />
                </div>
                <p className="text-sm leading-6 text-blue-100/70">
                  Committed to making aircraft maintenance safe and affordable.
                </p>
              </div>
            </div>
          </div>

          {/* Contact information panel */}
          <div className="relative flex flex-col justify-between bg-[#082B52] px-7 py-12 sm:px-12 sm:py-14 lg:px-10">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <div className="absolute -right-20 top-10 h-64 w-64 rounded-full border-[35px] border-white" />
              <div className="absolute -right-5 top-24 h-36 w-36 rounded-full border border-white" />
            </div>

            <div className="relative">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#19B5E5]/15 text-[#19B5E5]">
                <Plane size={28} />
              </div>

              <h3 className="text-2xl font-bold text-white">Visit Aerotech</h3>

              <p className="mt-3 text-sm leading-7 text-blue-100/70">
                Find us at our aviation engineering facility.
              </p>

              <div className="mt-8 flex gap-4 border-t border-white/10 pt-7">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-[#19B5E5]">
                  <MapPin size={20} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-[#19B5E5]">
                    Our Location
                  </p>
                  <p className="mt-2 text-sm leading-7 text-white">
                    Site 10 A, Charles Prince Airport,
                    <br />
                    Mt Hampden, Harare,
                    <br />
                    Zimbabwe.
                  </p>
                </div>
              </div>

              <div className="mt-7 border-t border-white/10 pt-7">
                <p className="text-xs font-bold uppercase tracking-wider text-[#19B5E5]">
                  Have a project in mind?
                </p>
                <p className="mt-2 text-sm leading-7 text-blue-100/70">
                  Send us your enquiry through our contact page and tell us how
                  we can assist.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="relative mt-10 inline-flex items-center justify-between border-b border-white/20 pb-4 text-sm font-bold text-white transition-colors hover:border-[#19B5E5] hover:text-[#19B5E5]"
            >
              Get in touch with Aerotech
              <ArrowUpRight size={19} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
