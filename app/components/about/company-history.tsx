import Image from "next/image";
import {
  ArrowUpRight,
  CalendarDays,
  Plane,
  Wrench,
  Building2,
} from "lucide-react";
import Link from "next/link";

const milestones = [
  {
    year: "2003",
    title: "Aerotech's Establishment",
    description:
      "Hunting Aircraft Services was incorporated as part of Aerotech in 2003, marking an important milestone in the company's history.",
    icon: Building2,
  },
  {
    year: "Today",
    title: "Aviation Engineering Capabilities",
    description:
      "Aerotech provides a range of general aviation maintenance, engineering, component overhaul and instrument testing and calibration services.",
    icon: Wrench,
  },
  {
    year: "Our Direction",
    title: "Supporting General Aviation",
    description:
      "Aerotech continues to pursue its vision of becoming the region's best one-stop shop for general aviation services.",
    icon: Plane,
  },
];

export default function CompanyHistory() {
  return (
    <section className="relative overflow-hidden bg-[#F5F8FC] py-20 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-sky-100 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-100/70 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
            <CalendarDays size={15} />
            Our Journey
          </span>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            Our History & <span className="text-[#087FC1]">Development</span>
          </h2>

          <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
            Aerotech's story is rooted in aviation engineering experience and a
            commitment to supporting general aviation through maintenance,
            technical expertise and specialist services.
          </p>
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Image and introduction */}
          <div>
            <div className="relative h-[340px] overflow-hidden rounded-3xl shadow-xl sm:h-[420px]">
              <Image
                src="/images/about/company-history.jpg"
                alt="Aircraft maintenance and engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-7 sm:p-9">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#19B5E5]">
                  Since 2003
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-white sm:text-4xl">
                  Built on Aviation Experience
                </h3>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-[#082B52]">Our Heritage</h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">
                Aerotech's history is associated with Hunting Aircraft Services,
                which was incorporated as part of Aerotech in 2003. Today, the
                company operates from Site 10 A, Charles Prince Airport, Mt
                Hampden, Harare.
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute bottom-8 left-[21px] top-8 w-px bg-gradient-to-b from-[#19B5E5] via-[#087FC1] to-slate-200" />

            <div className="space-y-10">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;

                return (
                  <div key={milestone.year} className="relative flex gap-6">
                    <div className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 border-[#F5F8FC] bg-[#087FC1] text-white shadow-md">
                      <Icon size={18} />
                    </div>

                    <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-7">
                      <span className="text-sm font-extrabold uppercase tracking-[0.15em] text-[#087FC1]">
                        {milestone.year}
                      </span>

                      <h3 className="mt-2 text-xl font-bold text-[#082B52]">
                        {milestone.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-16 flex flex-col justify-between gap-6 rounded-2xl bg-[#082B52] p-8 sm:p-10 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#19B5E5]">
              Looking Ahead
            </p>
            <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
              Continuing to support the future of general aviation.
            </h3>
            <p className="mt-3 text-sm leading-7 text-blue-100/70">
              Guided by our vision to be the region's best one-stop shop for
              general aviation services.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#19B5E5]"
          >
            Contact Aerotech
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
