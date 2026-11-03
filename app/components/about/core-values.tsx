import {
  HeartHandshake,
  Users,
  ShieldCheck,
  Award,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const values = [
  {
    number: "01",
    title: "Commitment",
    description:
      "We are dedicated to delivering quality and affordable services, with a focus on meeting the needs of our customers and stakeholders.",
    icon: HeartHandshake,
  },
  {
    number: "02",
    title: "Teamwork",
    description:
      "We are committed to achieving common goals through collaboration, cooperation and effective communication with our stakeholders.",
    icon: Users,
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "We inspire trust by being honest, accountable and ethical in everything we do.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Excellence",
    description:
      "We strive to build lifelong customer relationships because we understand that lives depend on the quality of our work.",
    icon: Award,
  },
];

export default function CoreValues() {
  return (
    <section className="relative overflow-hidden bg-[#061D38] py-20 sm:py-24">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#19B5E5]">
            What Guides Us
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Our Core <span className="text-[#19B5E5]">Values</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-blue-100/65 sm:text-lg">
            Our values shape our decisions, guide our relationships and
            influence the way we approach every aspect of our work.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.number}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#19B5E5]/50 hover:bg-white/[0.07]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#087FC1]/20 text-[#19B5E5] transition-colors group-hover:bg-[#087FC1] group-hover:text-white">
                    <Icon size={27} strokeWidth={1.7} />
                  </div>

                  <span className="text-3xl font-extrabold text-white/10">
                    {value.number}
                  </span>
                </div>

                <h3 className="mt-8 text-xl font-bold text-white">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-blue-100/60">
                  {value.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-[#19B5E5] transition-all duration-300 group-hover:w-16" />
              </div>
            );
          })}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-5 rounded-2xl border border-white/10 bg-white/[0.04] p-7 sm:flex-row sm:p-9">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              Values That Drive Our Work
            </h3>
            <p className="mt-2 text-sm leading-7 text-blue-100/60">
              Quality, responsibility and professionalism remain central to our
              approach.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#087FC1] px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-[#19B5E5]"
          >
            Get in Touch
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
