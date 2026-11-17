import { Target, Users, ShieldCheck, Award } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Commitment",
    description:
      "We are dedicated to providing safe, reliable and affordable aircraft maintenance and engineering services, while meeting our responsibilities to customers and the aviation industry.",
  },
  {
    icon: Users,
    title: "Teamwork",
    description:
      "We work collaboratively, share technical knowledge and communicate effectively to achieve common goals and deliver dependable aviation support.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We conduct our business with honesty, professionalism and accountability, building trust through responsible decisions and ethical conduct.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We pursue high standards of technical workmanship, continuous improvement and customer service, recognising the importance of quality in aviation.",
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
            Commitment, Teamwork, Integrity and Excellence define our
            organisational culture and guide how we serve our customers, work
            with our colleagues and fulfil our responsibilities within the
            aviation industry.
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
