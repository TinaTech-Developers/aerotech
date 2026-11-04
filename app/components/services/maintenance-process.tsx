import Link from "next/link";
import {
  ArrowRight,
  ClipboardList,
  MessageSquareText,
  Plane,
  Wrench,
} from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Make an Enquiry",
    description:
      "Contact Aerotech with details of your aircraft and the maintenance or repair support you require.",
    icon: MessageSquareText,
  },
  {
    number: "02",
    title: "Discuss Your Requirements",
    description:
      "Share relevant aircraft information and explain the work you would like Aerotech to assist with.",
    icon: ClipboardList,
  },
  {
    number: "03",
    title: "Technical Discussion",
    description:
      "Discuss the requested work and the relevant technical service requirements with the Aerotech team.",
    icon: Wrench,
  },
  {
    number: "04",
    title: "Coordinate the Service",
    description:
      "Engage with the team to discuss the next steps, arrangements and requirements for the requested service.",
    icon: Plane,
  },
];

export default function MaintenanceProcess() {
  return (
    <section className="relative overflow-hidden bg-[#061D38] py-20 sm:py-24">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/5" />
      <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/5" />
      <div className="absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-[#087FC1]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-9 bg-cyan-300" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Working With Aerotech
            </span>
            <span className="h-[2px] w-9 bg-cyan-300" />
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl">
            Start Your Aircraft Maintenance Enquiry
          </h2>

          <p className="mt-5 text-base leading-8 text-blue-100/75">
            Get in touch with our team to discuss your aircraft maintenance,
            repair or engineering requirements.
          </p>
        </div>

        <div className="relative mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-7">
          <div className="absolute left-[12%] right-[12%] top-7 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/50 to-transparent lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-300/30 bg-[#0B315A] text-cyan-300 shadow-lg shadow-black/10">
                  <Icon size={27} strokeWidth={1.7} />
                </div>

                <span className="mt-5 block text-xs font-bold tracking-[0.2em] text-cyan-300">
                  STEP {step.number}
                </span>

                <h3 className="mt-3 text-lg font-bold text-white">
                  {step.title}
                </h3>

                <p className="mx-auto mt-3 max-w-xs text-sm leading-7 text-blue-100/70">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl border border-white/10 bg-white/[0.05] p-7 sm:p-9 lg:flex-row">
          <div>
            <p className="text-xl font-bold text-white">
              Have an aircraft maintenance requirement?
            </p>
            <p className="mt-2 text-sm leading-6 text-blue-100/70">
              Contact Aerotech to discuss the service you need.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex w-full items-center justify-center gap-3 rounded-md bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#066DA8] sm:w-auto"
          >
            Talk to Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
