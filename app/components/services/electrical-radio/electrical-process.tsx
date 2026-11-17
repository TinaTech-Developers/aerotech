import Link from "next/link";
import {
  MessageSquare,
  ClipboardList,
  Wrench,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Submit Your Enquiry",
    description:
      "Contact Aerotech and outline your aircraft electrical or radio system requirements, including the service or technical support you need.",
  },
  {
    icon: ClipboardList,
    number: "02",
    title: "Provide Equipment Details",
    description:
      "Share relevant aircraft information, equipment details and any available technical or maintenance records relating to the requested service.",
  },
  {
    icon: Wrench,
    number: "03",
    title: "Technical Discussion",
    description:
      "Discuss your requirements with the Aerotech team to establish the nature of the installation, component maintenance, overhaul or bench service required.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Agree on Next Steps",
    description:
      "Review the proposed service arrangements and coordinate the next steps for progressing your electrical or radio engineering enquiry.",
  },
];

export default function ElectricalProcess() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Working With Aerotech
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            Your Aircraft Electrical & Radio Requirements, Our Technical
            Expertise
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Every service enquiry begins with understanding your aircraft and
            its equipment. Our team works with you to discuss the appropriate
            electrical, radio or component support required.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative">
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
            Need Specialist Electrical or Radio Engineering Support?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
            Speak to Aerotech about aircraft electrical installations, radio
            systems, component maintenance, overhaul support and workshop-based
            bench services.
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
