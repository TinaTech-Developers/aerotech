import { Target, Users, ShieldCheck, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Commitment",
    description:
      "We are dedicated to delivering quality and affordable service.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We are committed to achieving common goals through collaboration and communication with stakeholders.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We inspire trust by being honest, accountable and ethical in everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We strive to build lifelong customer relationships, recognising that lives depend on the quality of our work.",
  },
];

export default function QualityValues() {
  return (
    <section className="bg-[#061D38] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
            What Guides Us
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
            Our Core Values
          </h2>

          <p className="mt-5 leading-8 text-slate-300">
            The values that define our culture and guide our relationships with
            customers, employees and stakeholders.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-xl border border-white/10 bg-white/5 p-7 transition hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-white/10"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400">
                  <Icon size={26} />
                </div>

                <h3 className="mt-7 text-xl font-bold text-white">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-300">
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
