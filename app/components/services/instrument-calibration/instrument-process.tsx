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
    title: "Submit Your Enquiry",
    description:
      "Contact Aerotech and outline your instrument testing or calibration requirements, including the type of equipment involved.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Provide Instrument Details",
    description:
      "Share the instrument type, measurement range, relevant specifications and any available equipment or service records.",
  },
  {
    icon: SearchCheck,
    number: "03",
    title: "Technical Assessment",
    description:
      "Discuss your requirements with our team to establish the nature of the instrument, applicable testing needs and available service options.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Coordinate the Next Steps",
    description:
      "Review the proposed service arrangements and coordinate the next steps for your instrument testing or calibration enquiry.",
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
            Request Instrument Testing & Calibration
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Every instrument service begins with understanding your equipment
            and measurement requirements. Contact our team to discuss the
            appropriate testing or calibration support.
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
            Need Specialist Instrument Testing or Calibration?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Speak to Aerotech about pressure, temperature, electrical and
            dimensional measurement equipment, and discuss your instrument
            testing and calibration requirements.
          </p>

          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-md bg-cyan-500 px-7 py-4 font-semibold text-white transition hover:bg-cyan-400"
          >
            Enquire With Aerotech
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
