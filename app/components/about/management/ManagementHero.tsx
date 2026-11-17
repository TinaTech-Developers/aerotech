import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Users,
  ShieldCheck,
  Award,
  Plane,
} from "lucide-react";

const highlights = [
  {
    icon: Users,
    title: "Experienced Leadership",
    description: "Guiding our aviation operations with professionalism.",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Responsibility",
    description: "Maintaining a strong focus on safety and airworthiness.",
  },
  {
    icon: Award,
    title: "Technical Excellence",
    description: "Supporting quality workmanship and reliable service.",
  },
];

export default function ManagementHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061D38]">
      {/* Background image */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/about/management-hero.jpg"
          alt="Aerotech aviation management and technical team"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Background overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061D38] via-[#061D38]/95 to-[#061D38]/65" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#061D38] via-transparent to-[#061D38]/20" />

      {/* Decorative elements */}
      <div className="pointer-events-none absolute -right-32 top-0 -z-10 h-[500px] w-[500px] rounded-full border border-sky-300/10" />
      <div className="pointer-events-none absolute -right-16 top-16 -z-10 h-[370px] w-[370px] rounded-full border border-sky-300/10" />
      <div className="pointer-events-none absolute right-10 top-32 -z-10 h-[240px] w-[240px] rounded-full border border-sky-300/10" />

      <div className="mx-auto grid min-h-[620px] max-w-7xl items-center gap-14 px-6 py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        {/* Content */}
        <div className="max-w-3xl">
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#19B5E5]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-sky-200">
              Our Leadership & People
            </span>
          </div>

          <h1 className="text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Leadership.
            <span className="block text-[#19B5E5]">Expertise.</span>
            Commitment.
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Behind every reliable aviation service is a dedicated team of
            professionals. Meet the people whose leadership, technical knowledge
            and commitment support Aerotech Technicians&apos; aircraft
            maintenance and engineering operations.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#management-team"
              className="group inline-flex items-center justify-center gap-3 rounded-md bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#19B5E5]"
            >
              Meet Our Team
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 rounded-md border border-white/25 px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-[#19B5E5] hover:bg-white/5"
            >
              Contact Aerotech
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Highlights */}
          <div className="mt-16 grid gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-sky-300/20 bg-sky-300/10 text-[#19B5E5]">
                    <Icon size={19} />
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Visual */}
        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-white/15 bg-[#0B3155] shadow-2xl shadow-black/30">
            <Image
              src="/images/about/management-team.jpg"
              alt="Aerotech management and aviation professionals"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061D38] via-transparent to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-8">
              <div className="mb-3 flex items-center gap-2 text-[#19B5E5]">
                <Plane size={18} />
                <span className="text-xs font-bold uppercase tracking-[0.2em]">
                  Aerotech Technicians
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white">
                The People Behind Our Promise
              </h2>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                Dedicated leadership and technical expertise supporting aviation
                maintenance and engineering.
              </p>
            </div>
          </div>

          {/* Floating experience card */}
          <div className="absolute -bottom-7 -left-10 rounded-xl border border-white/10 bg-[#0B3155] p-5 shadow-xl">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#19B5E5]/10 text-[#19B5E5]">
                <Award size={25} />
              </div>

              <div>
                <p className="text-2xl font-bold text-white">50+</p>
                <p className="text-xs font-medium text-slate-400">
                  Years of Aviation Experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
