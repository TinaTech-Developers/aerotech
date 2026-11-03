import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  Clock3,
  History,
  Plane,
  Wrench,
} from "lucide-react";

const milestones = [
  {
    year: "2003",
    title: "A Significant Historical Milestone",
    description:
      "Hunting Aircraft Services was incorporated as part of Aerotech in 2003, marking an important point in the company's history.",
    icon: History,
  },
  {
    year: "Today",
    title: "Aviation Engineering & Technical Services",
    description:
      "Aerotech continues to focus on general aviation maintenance, aircraft rebuilding, component overhauls and specialist instrument calibration services.",
    icon: Plane,
  },
];

export default function OurHistory() {
  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-28">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-cyan-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
            <History size={15} />
            Our History
          </span>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            Built on Experience.
            <span className="text-[#087FC1]"> Focused on the Future.</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#19B5E5]" />

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Discover the historical journey of Aerotech (Pvt) Ltd and its
            continued focus on providing specialised aviation engineering and
            technical services.
          </p>
        </div>

        {/* Main history content */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[380px] overflow-hidden rounded-2xl shadow-xl sm:h-[470px]">
              <Image
                src="/images/about/company-history.jpg"
                alt="Aircraft maintenance and aviation engineering"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 right-0 p-7 sm:p-9">
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#19B5E5]">
                  Our Journey
                </span>

                <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  A History of Aviation Engineering
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-blue-100">
                  Continuing a focus on aircraft maintenance, technical
                  expertise and aviation services.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 -z-10 h-40 w-40 rounded-2xl bg-[#19B5E5]/20" />
          </div>

          {/* Historical narrative */}
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
              Our Background
            </span>

            <h3 className="mt-4 text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
              A Foundation in Aviation Services
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Aerotech's history includes the incorporation of Hunting Aircraft
              Services as part of Aerotech in 2003. This milestone forms an
              important part of the company's historical background.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Today, Aerotech operates from Site 10 A, Charles Prince Airport,
              Mt Hampden, Harare, Zimbabwe, with a range of capabilities
              supporting general aviation.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Its technical services include aircraft maintenance and
              rebuilding, engine and propeller overhauls, airframe repairs,
              electrical and radio services, instrument repairs and calibration,
              and other specialist engineering activities.
            </p>

            {/* Quick facts */}
            <div className="mt-9 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-100 bg-[#F5F8FC] p-5">
                <CalendarDays size={23} className="text-[#087FC1]" />
                <h4 className="mt-3 text-2xl font-bold text-[#082B52]">2003</h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Historical milestone
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-[#F5F8FC] p-5">
                <Plane size={23} className="text-[#087FC1]" />
                <h4 className="mt-3 text-2xl font-bold text-[#082B52]">
                  5,700 kg
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Maximum aircraft weight for the stated maintenance capability
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
              Our Journey
            </span>

            <h3 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
              Key Moments in Our History
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              Important historical context and the company's present-day
              aviation engineering focus.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            <div className="relative space-y-10 before:absolute before:bottom-5 before:left-[19px] before:top-5 before:w-px before:bg-blue-100 sm:before:left-7">
              {milestones.map((item) => {
                const Icon = item.icon;

                return (
                  <div key={item.year} className="relative flex gap-5 sm:gap-8">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#087FC1] text-white shadow-md sm:h-14 sm:w-14">
                      <Icon size={20} />
                    </div>

                    <div className="flex-1 rounded-2xl border border-slate-100 bg-[#F5F8FC] p-6 transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-8">
                      <span className="text-sm font-bold uppercase tracking-[0.15em] text-[#087FC1]">
                        {item.year}
                      </span>

                      <h4 className="mt-2 text-xl font-bold text-[#082B52] sm:text-2xl">
                        {item.title}
                      </h4>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Closing panel */}
        <div className="mt-24 overflow-hidden rounded-2xl bg-[#082B52] p-8 shadow-xl sm:p-12 lg:p-14">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#19B5E5]">
                Looking Ahead
              </span>

              <h3 className="mt-4 max-w-2xl text-3xl font-bold leading-tight text-white sm:text-4xl">
                Continuing Our Commitment to Aviation Engineering
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100">
                Aerotech's focus remains on providing aircraft maintenance and
                technical services while working towards its vision of becoming
                the region's best one-stop shop for general aviation services.
              </p>
            </div>

            <Link
              href="/services"
              className="inline-flex shrink-0 items-center justify-center gap-3 rounded-lg bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-[#19B5E5]"
            >
              Explore Our Services
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
