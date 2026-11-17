import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Box,
  ClipboardCheck,
  FileSearch,
  PackageCheck,
  Plane,
  Search,
  Settings,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    number: "01",
    title: "Aircraft Replacement Parts",
    description:
      "Enquiries for replacement parts required for applicable general aviation aircraft maintenance and repair activities.",
    icon: Plane,
  },
  {
    number: "02",
    title: "Maintenance Consumables",
    description:
      "Parts and consumable enquiries associated with aircraft servicing, inspections and routine maintenance requirements.",
    icon: PackageCheck,
  },
  {
    number: "03",
    title: "Aircraft Components",
    description:
      "Enquiries relating to aircraft components, assemblies and associated equipment based on the details supplied.",
    icon: Settings,
  },
  {
    number: "04",
    title: "Part Number Identification",
    description:
      "Review of available part numbers, descriptions and equipment details to help clarify the required item.",
    icon: FileSearch,
  },
  {
    number: "05",
    title: "Sourcing Coordination",
    description:
      "Coordination of parts sourcing enquiries and discussion of possible supply options, subject to availability.",
    icon: Search,
  },
  {
    number: "06",
    title: "Parts Requirement Assessment",
    description:
      "Initial review of aircraft details, component requirements and supporting information before proposed next steps.",
    icon: ClipboardCheck,
  },
  {
    number: "07",
    title: "Component Enquiry Support",
    description:
      "Assistance with communicating component requirements for maintenance, replacement or workshop-related needs.",
    icon: Box,
  },
  {
    number: "08",
    title: "Technical Requirement Coordination",
    description:
      "Coordination of relevant technical details to help ensure that parts enquiries are clearly understood.",
    icon: ShieldCheck,
  },
];

export default function AircraftSparesCapabilities() {
  return (
    <section
      id="spares-capabilities"
      className="relative overflow-hidden bg-[#061D38] py-24 text-white"
    >
      <div className="absolute -left-40 top-20 h-96 w-96 rounded-full border border-sky-400/10" />
      <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full border border-sky-400/10" />

      <div className="relative mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
            <span className="h-px w-9 bg-sky-400" />
            Our Capabilities
            <span className="h-px w-9 bg-sky-400" />
          </div>

          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            Aircraft Spares & Parts Support
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            From identifying a required component to coordinating a parts
            enquiry, Aerotech Technicians provides a point of contact for
            aviation spares requirements connected to aircraft maintenance and
            engineering activities.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group rounded-xl border border-white/10 bg-white/[0.04] p-7 transition duration-300 hover:-translate-y-1 hover:border-sky-400/50 hover:bg-white/[0.08]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-sky-400">
                    {item.number}
                  </span>
                  <Icon
                    size={27}
                    className="text-sky-300 transition duration-300 group-hover:scale-110"
                  />
                </div>

                <h3 className="mt-8 text-lg font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-400">
                  {item.description}
                </p>

                <div className="mt-7 h-px w-10 bg-sky-400/70 transition-all duration-300 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-sky-300/20 bg-gradient-to-r from-[#0B3158] to-[#0A2545] p-8 sm:p-10">
          <div className="grid items-center gap-8 md:grid-cols-[1fr_auto]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                Aviation Maintenance Support
              </p>
              <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                A Clear Starting Point for Your Parts Enquiry.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
                Share the aircraft type, part number or component details with
                our team. We can review the enquiry and discuss the available
                options and next steps.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-sky-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-sky-400"
            >
              Make an Enquiry
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-400">
            All parts enquiries are subject to technical review, suitability,
            supplier confirmation and availability.
          </p>
          <Link
            href="/services"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-white"
          >
            View All Services
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
