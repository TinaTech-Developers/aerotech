import Link from "next/link";
import {
  ArrowUpRight,
  Eye,
  Target,
  Plane,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function VisionMission() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FC] py-20 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-sky-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
            <Plane size={15} />
            Our Purpose & Direction
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            Our Vision & <span className="text-[#087FC1]">Mission</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Our vision defines where we aspire to go, while our mission guides
            the work we do every day.
          </p>
        </div>

        {/* Vision and Mission cards */}
        <div className="grid gap-7 lg:grid-cols-2">
          {/* Vision */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#082B52] p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-110" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full border border-white/10" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#19B5E5]/15 text-[#19B5E5]">
                <Eye size={32} strokeWidth={1.7} />
              </div>

              <p className="mt-9 text-xs font-bold uppercase tracking-[0.22em] text-[#19B5E5]">
                Our Vision
              </p>

              <h3 className="mt-4 text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                To be the best one stop shop for all general aviation services
                in the region.
              </h3>

              <div className="mt-9 flex items-center gap-3 border-t border-white/15 pt-6">
                <div className="h-1 w-10 rounded-full bg-[#19B5E5]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-blue-100/60">
                  Our Aspirations
                </span>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 sm:p-10 lg:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full border border-sky-100 transition-transform duration-700 group-hover:scale-110" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full border border-sky-100" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-sky-50 text-[#087FC1]">
                <Target size={32} strokeWidth={1.7} />
              </div>

              <p className="mt-9 text-xs font-bold uppercase tracking-[0.22em] text-[#087FC1]">
                Our Mission
              </p>

              <h3 className="mt-4 text-2xl font-extrabold leading-snug text-[#082B52] sm:text-3xl">
                To make aircraft maintenance safe and affordable.
              </h3>

              <div className="mt-9 flex items-center gap-3 border-t border-slate-100 pt-6">
                <div className="h-1 w-10 rounded-full bg-[#087FC1]" />
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Our Commitment
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Supporting statement */}
        <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-7 sm:p-9">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#082B52] text-[#19B5E5]">
                <ShieldCheck size={24} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#082B52]">
                  Guided by Purpose. Driven by Responsibility.
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-600">
                  Our vision and mission provide direction for our engineering
                  activities, customer relationships and commitment to aviation
                  maintenance.
                </p>
              </div>
            </div>

            <Link
              href="/services"
              className="inline-flex shrink-0 items-center gap-3 text-sm font-bold text-[#087FC1] transition-colors hover:text-[#082B52]"
            >
              Explore Our Capabilities
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
