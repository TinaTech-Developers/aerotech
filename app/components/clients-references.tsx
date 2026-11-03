import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Plane,
  ShieldCheck,
  Landmark,
  Factory,
  GraduationCap,
} from "lucide-react";

const references = [
  {
    name: "Air Force of Zimbabwe",
    category: "Aviation & Defence",
    icon: ShieldCheck,
  },
  {
    name: "ZASTI",
    category: "Aviation Training",
    icon: GraduationCap,
  },
  {
    name: "Zambia Air Services",
    category: "Aviation Services",
    icon: Plane,
  },
  {
    name: "Schweppes Zimbabwe Limited",
    category: "Industry & Manufacturing",
    icon: Factory,
  },
  {
    name: "Civil Aviation Authority of Zimbabwe",
    category: "Civil Aviation",
    icon: Landmark,
  },
];

export default function ClientsReferences() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-sky-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
            <Building2 size={15} />
            Our Industry Connections
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            Our Clients & <span className="text-[#087FC1]">References</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            Aerotech's company reference information includes organisations
            across aviation, training and industry. These references reflect the
            breadth of sectors represented in our professional network.
          </p>
        </div>

        {/* Reference cards */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((reference, index) => {
            const Icon = reference.icon;

            return (
              <div
                key={reference.name}
                className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-xl ${
                  index === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <div className="absolute right-0 top-0 h-24 w-24 rounded-bl-full bg-sky-50 transition-colors duration-300 group-hover:bg-sky-100" />

                <div className="relative">
                  <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-xl bg-[#082B52] text-white transition-colors duration-300 group-hover:bg-[#087FC1]">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>

                  <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-[#087FC1]">
                    {reference.category}
                  </p>

                  <h3 className="max-w-xs text-xl font-bold leading-snug text-[#082B52]">
                    {reference.name}
                  </h3>

                  <div className="mt-6 h-1 w-10 rounded-full bg-[#19B5E5] transition-all duration-300 group-hover:w-16" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 overflow-hidden rounded-3xl bg-[#061D38] px-7 py-10 sm:px-12 sm:py-12">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#19B5E5]">
                <Plane size={17} />
                Let's Work Together
              </div>

              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                Looking for a dependable aviation engineering partner?
              </h3>

              <p className="mt-3 leading-7 text-blue-100/75">
                Speak to our team about aircraft maintenance, engineering
                services and instrument testing and calibration.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#19B5E5]"
            >
              Contact Our Team
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-6 text-slate-400">
          Organisations are listed as references in Aerotech's company
          information. Their inclusion does not necessarily imply endorsement or
          partnership.
        </p>
      </div>
    </section>
  );
}
