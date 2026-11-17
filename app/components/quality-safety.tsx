import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  ClipboardCheck,
  Users,
  Target,
  Award,
  CheckCircle2,
} from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Safety & Airworthiness",
    description:
      "We recognise that aircraft maintenance carries a responsibility for the safety of aircraft, crew and passengers. Our work is guided by a safety-conscious approach and a commitment to maintaining airworthiness.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality & Technical Excellence",
    description:
      "We are committed to dependable aircraft maintenance, engine and propeller services, inspections and specialist engineering through careful, professional technical workmanship.",
  },
  {
    icon: Users,
    title: "Teamwork & Collaboration",
    description:
      "We bring together technical expertise and effective communication to work with aircraft owners, operators, customers and industry stakeholders towards shared goals.",
  },
  {
    icon: Target,
    title: "Integrity & Accountability",
    description:
      "We conduct our work responsibly, uphold professional and ethical standards, and take accountability for the quality and reliability of the services we provide.",
  },
];

const values = [
  "Commitment to safe, reliable and quality service",
  "Teamwork and collaboration in everything we do",
  "Integrity, honesty and accountability",
  "Excellence in technical workmanship and customer service",
];

export default function QualitySafety() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Intro */}
      <div className="relative bg-[#061D38]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(25,181,229,0.16),transparent_35%)]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              <ShieldCheck size={15} />
              Quality & Safety
            </div>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-[3.4rem]">
              Safety in Every Detail.
              <span className="block text-[#19B5E5]">
                Reliability in Every Service.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              At Aerotech Technicians, we understand that reliability in
              aviation begins with responsible maintenance and quality
              engineering. Our commitment is to make aircraft maintenance safe
              and affordable through professional workmanship, technical
              responsibility and a strong focus on airworthiness.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/quality-safety"
                className="inline-flex items-center gap-3 rounded-md bg-[#087FC1] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#19B5E5]"
              >
                Our Quality & Safety Approach
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Contact Our Team
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Quality & Safety Image */}
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 h-32 w-32 border-b-4 border-l-4 border-[#19B5E5]" />

            <div className="relative aspect-[5/4] overflow-hidden rounded-xl border border-white/10 shadow-2xl">
              <Image
                src="/images/quality-safety.jpg"
                alt="Aircraft maintenance engineering and technical inspection"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/60 via-transparent to-transparent" />

              <div className="absolute bottom-5 left-5 flex items-center gap-3 rounded-lg border border-white/20 bg-[#061D38]/90 px-5 py-4 backdrop-blur">
                <div className="rounded-full bg-cyan-400/15 p-3 text-cyan-300">
                  <ShieldCheck size={25} />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">
                    Safety & Airworthiness
                  </p>
                  <p className="mt-1 text-xs text-slate-300">
                    Responsible aviation engineering
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commitments */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
            Our Commitment
          </span>

          <h3 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            The Principles Behind Our Work
          </h3>

          <p className="mt-5 leading-7 text-slate-600">
            In aviation, reliability is everything. Our approach is guided by
            safety, technical responsibility, quality workmanship and
            professional integrity in every service we provide.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {commitments.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-200/60"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#EAF6FC] text-[#087FC1] transition group-hover:bg-[#087FC1] group-hover:text-white">
                  <Icon size={27} />
                </div>

                <h4 className="text-lg font-bold text-[#082B52]">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Values panel */}
      <div className="border-t border-slate-100 bg-[#F5F8FC]">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:py-20">
          <div>
            <div className="mb-4 flex items-center gap-3 text-[#087FC1]">
              <Award size={22} />
              <span className="text-xs font-bold uppercase tracking-[0.2em]">
                Our Core Values
              </span>
            </div>

            <h3 className="text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
              A Culture Built on
              <span className="block text-[#087FC1]">
                Commitment & Excellence
              </span>
            </h3>

            <p className="mt-5 max-w-xl leading-8 text-slate-600">
              Our work is built on values that shape our relationships with
              customers, guide our technical teams and influence every decision
              we make. From aircraft maintenance to specialist engineering
              support, we strive to uphold these principles throughout our
              operations.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
            <h4 className="mb-6 text-lg font-bold text-[#082B52]">
              What Guides Us
            </h4>

            <div className="space-y-5">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-0.5 shrink-0 text-[#087FC1]"
                  />
                  <p className="text-sm leading-6 text-slate-700">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Closing CTA */}
      <div className="bg-[#087FC1]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-12 sm:px-8 md:flex-row md:items-center">
          <div>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Your Trusted Partner in Airworthiness.
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-white/85">
              Keeping you flying with confidence. Speak to our team about
              aircraft maintenance, engine and propeller services, engineering
              and specialist aviation support.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-md bg-white px-6 py-3.5 text-sm font-bold text-[#082B52] transition hover:bg-slate-100"
          >
            Get in Touch
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
