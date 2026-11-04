import Link from "next/link";
import {
  MessageSquare,
  ClipboardList,
  SearchCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Make an Enquiry",
    description:
      "Contact Aerotech and tell us about the instruments you need tested or calibrated.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Provide Equipment Details",
    description:
      "Share the instrument type, relevant specifications and your service requirements.",
  },
  {
    icon: SearchCheck,
    number: "03",
    title: "Discuss the Requirements",
    description:
      "Our team discusses the equipment and the requested instrument service.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Follow Up",
    description:
      "Our team can guide you on the next steps for your instrument service enquiry.",
  },
];

export default function InstrumentProcess() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            How to Get Started
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            Request an Instrument Service
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Get in touch with our team to discuss the instruments you need
            tested or calibrated.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number}>
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#082B52] text-cyan-400">
                  <Icon size={25} />
                </div>

                <p className="mt-6 text-sm font-bold tracking-widest text-cyan-600">
                  STEP {step.number}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#082B52]">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-14 rounded-2xl bg-[#082B52] p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Need an Instrument Tested or Calibrated?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Contact Aerotech to discuss your pressure, temperature, electrical
            or standard measurement instrument requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400"
          >
            Contact Our Team
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
