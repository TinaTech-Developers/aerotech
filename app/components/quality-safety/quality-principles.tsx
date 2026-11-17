import {
  ShieldCheck,
  ClipboardCheck,
  Handshake,
  Users,
  Target,
  HeartHandshake,
} from "lucide-react";

const principles = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Safety & Airworthiness",
    description:
      "Recognising our responsibility to support aircraft safety and continued airworthiness through careful maintenance and engineering practices.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "Quality & Excellence",
    description:
      "Applying technical knowledge, attention to detail and professional workmanship across our maintenance and engineering activities.",
  },
  {
    icon: Handshake,
    number: "03",
    title: "Integrity & Accountability",
    description:
      "Acting with honesty, transparency and accountability in our decisions, technical responsibilities and relationships.",
  },
  {
    icon: Users,
    number: "04",
    title: "Teamwork & Collaboration",
    description:
      "Working together, sharing expertise and communicating effectively to achieve common goals and serve our customers.",
  },
  {
    icon: Target,
    number: "05",
    title: "Commitment to Excellence",
    description:
      "Remaining dedicated to continuous improvement, dependable service and high standards in aviation maintenance and engineering.",
  },
  {
    icon: HeartHandshake,
    number: "06",
    title: "Customer Confidence",
    description:
      "Building lasting customer relationships through professional service, responsible communication and a clear understanding of customer requirements.",
  },
];

export default function QualityPrinciples() {
  return (
    <section className="bg-[#F5F8FC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Our Principles
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            The Principles Behind Our Work
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            At Aerotech Technicians, our approach to quality and safety is
            guided by the values of Commitment, Teamwork, Integrity and
            Excellence. These principles shape our technical responsibilities,
            our relationships with customers and the standards we bring to every
            aspect of our work.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group rounded-xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#082B52] text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <span className="text-3xl font-bold text-slate-100">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#082B52]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
