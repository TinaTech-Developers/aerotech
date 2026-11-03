import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  Network,
  Plane,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const groupHighlights = [
  {
    icon: Building2,
    title: "Corporate Group Membership",
    description: "Aerotech (Pvt) Ltd is a member of KSM Group of Companies.",
  },
  {
    icon: Plane,
    title: "Aviation Specialisation",
    description:
      "Aerotech focuses on general aviation maintenance, engineering and technical services.",
  },
  {
    icon: ShieldCheck,
    title: "Technical Expertise",
    description:
      "The company provides specialised aircraft maintenance, component overhaul and instrument calibration services.",
  },
];

export default function KSMGroup() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
            <Network size={15} />
            Our Corporate Affiliation
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            Part of the <span className="text-[#087FC1]">KSM Group</span> of
            Companies
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#19B5E5]" />

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Aerotech (Pvt) Ltd is a member of KSM Group of Companies, bringing
            its specialised aviation engineering and technical services into a
            wider corporate group.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image section */}
          <div className="relative">
            <div className="relative h-[380px] overflow-hidden rounded-2xl shadow-xl sm:h-[470px]">
              <Image
                src="/images/about/ksm-group.jpg"
                alt="Aviation engineering and aircraft maintenance"
                fill
                priority={false}
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/90 via-[#061D38]/10 to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#19B5E5]">
                  KSM Group of Companies
                </span>

                <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Aerotech (Pvt) Ltd
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-blue-100">
                  Specialised aviation engineering, aircraft maintenance and
                  instrument calibration services.
                </p>
              </div>
            </div>

            {/* Decorative frame */}
            <div className="absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-2xl bg-[#19B5E5]/20" />

            <div className="absolute -left-5 -top-5 -z-10 h-32 w-32 rounded-2xl border-2 border-[#087FC1]/20" />
          </div>

          {/* Information */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
              About the Group
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
              Specialist Aviation Services Within a Wider Group
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Aerotech operates as a specialised aviation engineering company
              and is part of KSM Group of Companies. Its operations are focused
              on supporting general aviation through aircraft maintenance,
              repairs, component overhauls and technical services.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Located at Charles Prince Airport in Mt Hampden, Harare, Aerotech
              provides a range of aviation engineering capabilities, including
              aircraft maintenance and rebuilding, engine and propeller
              overhauls, electrical and radio services, and instrument
              calibration.
            </p>

            {/* Highlights */}
            <div className="mt-9 space-y-6">
              {groupHighlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#087FC1]">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h4 className="text-base font-bold text-[#082B52]">
                        {item.title}
                      </h4>

                      <p className="mt-1 text-sm leading-6 text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              href="/services"
              className="mt-10 inline-flex items-center gap-3 rounded-lg bg-[#087FC1] px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-900/10 transition duration-300 hover:-translate-y-1 hover:bg-[#082B52]"
            >
              Explore Aerotech Services
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        {/* Corporate relationship panel */}
        <div className="mt-24 overflow-hidden rounded-2xl bg-[#082B52] shadow-xl">
          <div className="grid items-center gap-8 p-8 sm:p-10 lg:grid-cols-[1fr_auto_1fr] lg:gap-10 lg:p-14">
            {/* KSM Group */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-[#19B5E5]">
                <Building2 size={32} />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white">KSM Group</h3>

              <p className="mt-2 text-sm text-blue-100">Group of Companies</p>
            </div>

            {/* Connector */}
            <div className="flex items-center justify-center">
              <div className="hidden h-px w-20 bg-[#19B5E5] lg:block" />
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#19B5E5]/40 bg-[#087FC1]/20 text-[#19B5E5]">
                <ArrowRight size={22} />
              </div>
              <div className="hidden h-px w-20 bg-[#19B5E5] lg:block" />
            </div>

            {/* Aerotech */}
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[#19B5E5]/30 bg-[#087FC1]/20 text-[#19B5E5]">
                <Plane size={32} />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white">
                Aerotech (Pvt) Ltd
              </h3>

              <p className="mt-2 text-sm text-blue-100">
                Aviation Engineering & Technical Services
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 px-6 py-5 text-center">
            <p className="text-sm leading-6 text-blue-100">
              Aerotech (Pvt) Ltd is a member of KSM Group of Companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
