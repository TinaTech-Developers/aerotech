import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  Wrench,
  MapPin,
  Settings,
  Building2,
  Gauge,
} from "lucide-react";

const highlights = [
  {
    icon: Plane,
    title: "General Aviation",
    description: "Aircraft maintenance and engineering services.",
  },
  {
    icon: Wrench,
    title: "Technical Expertise",
    description: "Aircraft, engines and component maintenance.",
  },
  {
    icon: Gauge,
    title: "Instrument Services",
    description: "Testing and calibration of measuring instruments.",
  },
  {
    icon: Settings,
    title: "Engineering Solutions",
    description: "A range of specialist aviation engineering capabilities.",
  },
];

export default function CompanyOverview() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-sky-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image column */}
          <div className="relative">
            <div className="relative h-[380px] overflow-hidden rounded-3xl shadow-xl sm:h-[480px]">
              <Image
                src="/images/about/company-overview.jpg"
                alt="Aircraft at an aviation engineering facility"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/70 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#19B5E5]">
                  Aerotech (Pvt) Ltd
                </p>
                <h3 className="mt-2 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                  Supporting General Aviation Through Engineering Excellence
                </h3>
              </div>
            </div>

            {/* Location card */}
            <div className="relative mx-5 -mt-7 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:mx-8 sm:p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#082B52] text-[#19B5E5]">
                  <MapPin size={23} />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.15em] text-[#087FC1]">
                    Our Location
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[#082B52]">
                    Site 10 A, Charles Prince Airport,
                    <br />
                    Mt Hampden, Harare, Zimbabwe.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Content column */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
              <Building2 size={15} />
              Company Overview
            </span>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
              Who We Are
              <span className="block text-[#087FC1]">Aerotech (Pvt) Ltd</span>
            </h2>

            <div className="mt-6 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Aerotech (Pvt) Ltd is an aviation engineering company based at
                Charles Prince Airport, Mt Hampden, Harare, Zimbabwe. The
                company provides aircraft maintenance, rebuilding and specialist
                engineering services for general aviation.
              </p>

              <p>
                Our capabilities cover aircraft maintenance for aircraft with a
                Maximum All Up Weight of 5,700 kg, piston engine and propeller
                overhauls, electrical and radio services, instrument repairs,
                aircraft refurbishment and other specialist engineering work.
              </p>

              <p>
                Aerotech also provides instrument testing and calibration
                services across pressure, temperature, electrical and standard
                measurement instruments.
              </p>

              <p>
                Aerotech is a member of the KSM Group of companies, operating
                with a focus on its mission to make aircraft maintenance safe
                and affordable.
              </p>
            </div>

            {/* Capability highlights */}
            <div className="mt-9 grid gap-x-6 gap-y-6 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-sky-50 text-[#087FC1]">
                      <Icon size={20} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[#082B52]">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link
                href="/services"
                className="inline-flex items-center gap-3 rounded-lg bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#082B52]"
              >
                Discover Our Services
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#082B52] transition-colors hover:text-[#087FC1]"
              >
                Contact Us
                <ArrowUpRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
