import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  Package,
  Search,
  Settings,
} from "lucide-react";

const supportAreas = [
  {
    icon: Package,
    title: "Aircraft Maintenance Spares",
    description:
      "Enquiries for parts and supplies required for scheduled maintenance, inspections and repair activities.",
  },
  {
    icon: Settings,
    title: "Aircraft Components",
    description:
      "Assistance with identifying component requirements for applicable aircraft and maintenance work.",
  },
  {
    icon: Search,
    title: "Parts Identification & Sourcing",
    description:
      "Support in reviewing part descriptions, part numbers and available technical information when making an enquiry.",
  },
  {
    icon: ClipboardList,
    title: "Parts Enquiry Coordination",
    description:
      "A structured enquiry process to help clarify requirements and discuss possible supply arrangements.",
  },
];

const included = [
  "Aircraft parts and maintenance spares enquiries",
  "Component identification using available part details",
  "Review of part numbers and equipment information",
  "Enquiries for applicable replacement components",
  "Coordination of sourcing and supply requirements",
];

export default function AircraftSparesOverview() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative">
            <div className="relative h-[420px] overflow-hidden rounded-2xl sm:h-[520px]">
              <Image
                src="/images/services/aircraft-spares-overview.jpg"
                alt="Aircraft components prepared for maintenance"
                fill
                className="object-cover"
              />
            </div>

            <div className="absolute -bottom-7 right-5 max-w-xs rounded-xl bg-[#082B52] p-6 text-white shadow-xl sm:-right-7">
              <Package size={30} className="mb-4 text-sky-300" />
              <p className="text-lg font-bold">
                Parts Support for Aviation Maintenance
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                Clear communication helps establish the right component
                requirements for each enquiry.
              </p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
              <span className="h-px w-9 bg-sky-500" />
              Aircraft Parts & Components
            </div>

            <h2 className="text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
              Supporting Your Aircraft Parts & Component Requirements
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Access to suitable parts and components is an important part of
              effective aircraft maintenance. Aerotech Technicians provides a
              point of contact for aircraft spares enquiries, helping customers
              communicate their requirements and explore applicable sourcing
              arrangements.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our approach begins with understanding the aircraft, component and
              part information involved. Availability, suitability and supply
              arrangements are considered on an enquiry-by-enquiry basis.
            </p>

            <div className="mt-8 space-y-4">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={19}
                    className="mt-1 shrink-0 text-sky-600"
                  />
                  <span className="text-sm leading-6 text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 text-sm font-bold text-[#087FC1] transition hover:gap-5"
            >
              Discuss Your Parts Requirements
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-28">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
              Our Support Areas
            </p>
            <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
              Aircraft Spares Enquiry Support
            </h2>
            <p className="mt-5 leading-8 text-slate-600">
              We work to understand the parts and component requirements behind
              each enquiry so that appropriate next steps can be discussed.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {supportAreas.map((area) => {
              const Icon = area.icon;

              return (
                <div
                  key={area.title}
                  className="rounded-xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-300 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#082B52] text-sky-300">
                    <Icon size={27} />
                  </div>
                  <h3 className="text-lg font-bold text-[#082B52]">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {area.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
