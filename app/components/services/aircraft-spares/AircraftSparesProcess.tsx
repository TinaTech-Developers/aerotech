import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  Handshake,
  Search,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Your Enquiry",
    description:
      "Contact Aerotech and explain the aircraft parts, spares or component you require.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Provide Part Details",
    description:
      "Share the aircraft type, part number, component description and any relevant technical information available.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Enquiry Review",
    description:
      "Our team reviews the information provided to clarify the requirement and discuss possible sourcing options.",
    icon: Search,
  },
  {
    number: "04",
    title: "Coordinate Next Steps",
    description:
      "Discuss availability, suitability, pricing and proposed supply arrangements where options can be identified.",
    icon: Handshake,
  },
];

export default function AircraftSparesProcess() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-sky-600">
            <span className="h-px w-9 bg-sky-500" />
            How It Works
            <span className="h-px w-9 bg-sky-500" />
          </div>

          <h2 className="text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
            From Parts Enquiry to Supply Coordination
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            We follow a straightforward enquiry process to understand your
            aircraft parts requirements, review the information provided and
            discuss the appropriate next steps.
          </p>
        </div>

        <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-sky-200 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
                <div className="relative z-10 mb-7 flex h-16 w-16 items-center justify-center rounded-full border-4 border-slate-50 bg-[#082B52] text-sky-300 shadow-lg">
                  <Icon size={25} />
                </div>

                <p className="text-xs font-bold tracking-[0.2em] text-sky-600">
                  STEP {step.number}
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#082B52]">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 overflow-hidden rounded-2xl bg-[#082B52] shadow-xl">
          <div className="grid lg:grid-cols-[1fr_auto]">
            <div className="p-8 sm:p-12">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-sky-300">
                Contact Our Team
              </p>

              <h2 className="mt-4 max-w-2xl text-2xl font-bold leading-tight text-white sm:text-3xl">
                Looking for Aircraft Parts or Specialist Components?
              </h2>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
                Speak to Aerotech Technicians about your aircraft spares,
                replacement parts and component requirements. Provide the
                details available to you and let us discuss the appropriate way
                forward.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-3 rounded-md bg-sky-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-sky-400"
              >
                Enquire With Aerotech
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="flex items-center justify-center border-t border-white/10 bg-white/[0.04] p-10 lg:border-l lg:border-t-0">
              <div className="text-center">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-sky-300/30 bg-sky-400/10 text-sky-300">
                  <CheckCircle2 size={38} />
                </div>
                <p className="mt-5 text-lg font-bold text-white">
                  Clear. Practical. Professional.
                </p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-400">
                  Every enquiry starts with understanding the actual
                  requirement.
                </p>
                <Link
                  href="/services"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-sky-300 transition hover:text-white"
                >
                  Explore Our Services
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
