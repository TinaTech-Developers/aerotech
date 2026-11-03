import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Award,
  Building2,
  Plane,
  ShieldCheck,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: Award,
    title: "Established in 2003",
    description: "Over two decades of aviation industry experience.",
  },
  {
    icon: Building2,
    title: "KSM Group Member",
    description: "Part of the KSM Group of companies.",
  },
  {
    icon: Plane,
    title: "General Aviation",
    description: "Aircraft maintenance up to 5,700 kg MAUW.",
  },
  {
    icon: Wrench,
    title: "Technical Expertise",
    description: "Aircraft engineering and instrument calibration.",
  },
];

const values = [
  "Commitment to quality and affordable service",
  "Teamwork and collaboration",
  "Integrity and accountability",
  "Excellence in every task",
];

export default function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[#087FC1]/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-[#19B5E5]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="mb-14 max-w-2xl">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-10 bg-[#087FC1]" />
            <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087FC1]">
              About Aerotech
            </span>
          </div>

          <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            Engineering Excellence.
            <span className="block text-[#087FC1]">Built on Experience.</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600">
            Your trusted partner in aircraft maintenance, aviation engineering
            and precision instrument calibration.
          </p>
        </div>

        {/* Main content */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[360px] overflow-hidden rounded-2xl sm:h-[460px]">
              <Image
                src="/images/about-aerotech.jpg"
                alt="Aircraft maintenance and engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/60 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#19B5E5]">
                  Aerotech (Pvt) Ltd
                </p>
                <p className="mt-2 text-2xl font-bold text-white">
                  Precision. Safety. Excellence.
                </p>
              </div>
            </div>

            {/* Experience badge */}
            <div className="absolute -bottom-7 -right-3 flex items-center gap-4 rounded-xl bg-[#082B52] px-6 py-5 shadow-xl sm:-right-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#087FC1]">
                <Plane size={25} className="text-white" />
              </div>

              <div>
                <p className="text-2xl font-black text-white">2003</p>
                <p className="text-xs font-medium text-blue-100">Established</p>
              </div>
            </div>

            {/* Decorative border */}
            <div className="pointer-events-none absolute -left-4 -top-4 -z-10 h-full w-full rounded-2xl border-2 border-[#19B5E5]/30" />
          </div>

          {/* Company introduction */}
          <div className="pt-4 lg:pt-0">
            <span className="text-sm font-bold uppercase tracking-widest text-[#087FC1]">
              Who We Are
            </span>

            <h3 className="mt-4 text-2xl font-bold leading-snug text-[#082B52] sm:text-3xl">
              Supporting Aviation Through Engineering Expertise
            </h3>

            <div className="mt-6 space-y-5 text-[15px] leading-8 text-slate-600">
              <p>
                Aerotech (Pvt) Ltd is an aviation engineering and maintenance
                company based at Charles Prince Airport, Mt Hampden, Harare,
                Zimbabwe. Established in 2003, the company provides specialised
                services supporting the general aviation industry.
              </p>

              <p>
                Our capabilities cover aircraft maintenance and rebuilding,
                engine and propeller overhauls, electrical and radio
                installations, instrument repairs, aircraft refurbishment and
                precision instrument calibration.
              </p>

              <p>
                As a member of the KSM Group of companies, Aerotech is committed
                to delivering safe, reliable and affordable aviation services
                through technical expertise, teamwork and a strong commitment to
                quality.
              </p>
            </div>

            {/* Values */}
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {values.map((value) => (
                <div key={value} className="flex items-start gap-3">
                  <CheckCircle2
                    size={18}
                    className="mt-1 shrink-0 text-[#087FC1]"
                  />
                  <span className="text-sm font-medium text-slate-700">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9">
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 rounded-lg bg-[#082B52] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#087FC1]"
              >
                Discover More About Us
                <ArrowUpRight
                  size={18}
                  className="transition group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Company highlights */}
        <div className="mt-24 grid gap-5 border-t border-slate-200 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-xl border border-slate-100 bg-slate-50 p-6 transition duration-300 hover:-translate-y-1 hover:border-[#19B5E5]/40 hover:bg-white hover:shadow-lg"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#087FC1]/10 transition group-hover:bg-[#087FC1]">
                  <Icon
                    size={23}
                    className="text-[#087FC1] transition group-hover:text-white"
                  />
                </div>

                <h4 className="text-base font-bold text-[#082B52]">
                  {item.title}
                </h4>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Vision and mission */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-[#082B52] p-8 sm:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10">
              <Plane size={25} className="text-[#19B5E5]" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#19B5E5]">
              Our Vision
            </p>

            <h3 className="mt-4 text-xl font-bold leading-relaxed text-white sm:text-2xl">
              To be the best one stop shop for all general aviation services in
              the region.
            </h3>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 sm:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#087FC1]/10">
              <ShieldCheck size={25} className="text-[#087FC1]" />
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
              Our Mission
            </p>

            <h3 className="mt-4 text-xl font-bold leading-relaxed text-[#082B52] sm:text-2xl">
              To make aircraft maintenance safe and affordable.
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
