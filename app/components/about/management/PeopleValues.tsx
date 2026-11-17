import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Handshake,
  ShieldCheck,
  Target,
  Award,
  Users,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    number: "01",
    title: "Commitment",
    description:
      "We are dedicated to delivering dependable aviation maintenance and engineering services, approaching every responsibility with care and professionalism.",
    icon: Target,
  },
  {
    number: "02",
    title: "Teamwork",
    description:
      "We value collaboration, shared knowledge and cooperation across our management, technical and support teams to achieve common objectives.",
    icon: Users,
  },
  {
    number: "03",
    title: "Integrity",
    description:
      "We believe in honesty, accountability and professional conduct, building trust through responsible decisions and transparent working relationships.",
    icon: ShieldCheck,
  },
  {
    number: "04",
    title: "Excellence",
    description:
      "We pursue quality workmanship, continuous improvement and attention to detail in our aviation maintenance and engineering activities.",
    icon: Award,
  },
];

export default function PeopleValues() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-10 h-[420px] w-[420px] rounded-full border border-sky-100" />
      <div className="pointer-events-none absolute -right-20 top-32 h-[300px] w-[300px] rounded-full border border-sky-100" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
            <HeartHandshake size={15} />
            Our People & Values
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            United by Purpose.
            <span className="block text-[#087FC1]">Driven by Our Values.</span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            The strength of Aerotech lies in its people and the principles that
            guide their work. Our shared values shape how we serve our
            customers, work together and approach the responsibilities of
            aviation maintenance and engineering.
          </p>
        </div>

        {/* Values grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => {
            const Icon = value.icon;

            return (
              <div
                key={value.number}
                className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white p-8 transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-sky-900/10"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-[#087FC1]">
                    {value.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#087FC1]/10 text-[#087FC1] transition-all duration-300 group-hover:bg-[#087FC1] group-hover:text-white">
                    <Icon size={25} strokeWidth={1.7} />
                  </div>
                </div>

                <h3 className="mt-9 text-xl font-bold text-[#082B52]">
                  {value.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {value.description}
                </p>

                <div className="mt-7 h-1 w-10 rounded-full bg-[#19B5E5] transition-all duration-500 group-hover:w-20" />
              </div>
            );
          })}
        </div>

        {/* Closing statement */}
        <div className="relative mt-20 overflow-hidden rounded-2xl bg-[#061D38] px-8 py-14 text-center sm:px-14 sm:py-16">
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-sky-300/10" />
          <div className="pointer-events-none absolute -left-20 -bottom-32 h-80 w-80 rounded-full border border-sky-300/10" />

          <div className="relative mx-auto max-w-3xl">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-sky-300/20 bg-sky-300/10 text-[#19B5E5]">
              <Handshake size={30} strokeWidth={1.5} />
            </div>

            <p className="mt-7 text-xs font-bold uppercase tracking-[0.22em] text-[#19B5E5]">
              Our Shared Commitment
            </p>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl">
              In Aviation, Reliability Is Everything.
            </h3>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-slate-300 sm:text-base">
              Through committed leadership, technical expertise and a dedicated
              workforce, Aerotech Technicians continues to pursue its vision of
              becoming the region&apos;s leading one-stop shop for general
              aviation services.
            </p>

            <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/services"
                className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#19B5E5]"
              >
                Explore Our Services
                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-3 rounded-md border border-white/25 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-[#19B5E5] hover:bg-white/5"
              >
                Contact Our Team
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
