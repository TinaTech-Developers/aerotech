import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ClipboardList,
  FileText,
  Search,
  Handshake,
  Settings,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Submit Your Enquiry",
    description:
      "Contact Aerotech and outline your precision engineering requirements, including machining, fabrication, welding or component-related work.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Provide Project Details",
    description:
      "Share relevant component information, dimensions, drawings, technical specifications and any available supporting documentation.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Technical Assessment",
    description:
      "Our team reviews the requirements to understand the nature of the work, relevant technical considerations and possible engineering solutions.",
    icon: Search,
  },
  {
    number: "04",
    title: "Coordinate the Next Steps",
    description:
      "Discuss the proposed work, service arrangements, timelines and other relevant requirements before proceeding.",
    icon: Handshake,
  },
];

export default function PrecisionEngineeringProcess() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full border border-sky-100" />
      <div className="pointer-events-none absolute -right-20 top-32 h-[300px] w-[300px] rounded-full border border-sky-100" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
            <Settings size={15} />
            Our Service Process
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            From Engineering Enquiry
            <span className="block text-[#087FC1]">to Technical Support.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Every engineering project begins with understanding the technical
            requirement. Our enquiry process helps establish the nature of the
            work and the appropriate next steps.
          </p>
        </div>

        {/* Process steps */}
        <div className="relative mt-20">
          {/* Connecting line */}
          <div className="absolute left-8 top-8 hidden h-0.5 w-[calc(100%-4rem)] bg-sky-100 lg:block" />

          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.number} className="relative">
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-xl border border-sky-100 bg-white text-[#087FC1] shadow-sm transition-all duration-300 hover:border-[#087FC1] hover:bg-[#087FC1] hover:text-white">
                    <Icon size={26} strokeWidth={1.7} />
                  </div>

                  <p className="mt-7 text-xs font-bold tracking-[0.2em] text-[#087FC1]">
                    STEP {step.number}
                  </p>

                  <h3 className="mt-3 text-lg font-bold text-[#082B52]">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-7 h-1 w-10 rounded-full bg-[#19B5E5]" />
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA panel */}
        <div className="relative mt-24 overflow-hidden rounded-2xl bg-[#061D38] p-8 sm:p-12 lg:p-14">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-sky-300/10" />
          <div className="pointer-events-none absolute -right-5 -top-16 h-56 w-56 rounded-full border border-sky-300/10" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-[#19B5E5]">
                <CheckCircle2 size={20} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Precision Engineering Support
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
                Have an Engineering Project or Component Requirement?
              </h3>

              <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
                Speak to Aerotech about general machining, metal fabrication,
                aluminium welding and specialist engineering workshop
                requirements. Our team can discuss your project and the
                appropriate next steps.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#19B5E5]"
              >
                Enquire With Aerotech
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-md border border-white/25 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-[#19B5E5] hover:bg-white/5"
              >
                Explore Other Services
                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
