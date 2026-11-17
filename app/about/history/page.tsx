import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CalendarDays,
  History,
  Plane,
  Wrench,
  Settings,
  Gauge,
} from "lucide-react";

const milestones = [
  {
    year: "50+ Years",
    title: "A Heritage of Aviation Experience",
    description:
      "Aerotech's heritage is built on more than five decades of aviation experience in Zimbabwe, reflecting a longstanding contribution to the general aviation industry.",
    icon: History,
  },
  {
    year: "2003",
    title: "An Important Historical Milestone",
    description:
      "Hunting Aircraft Services was incorporated as part of Aerotech in 2003, marking a significant development in the company's historical journey.",
    icon: CalendarDays,
  },
  {
    year: "Today",
    title: "Comprehensive Aviation Engineering",
    description:
      "Aerotech continues to provide aircraft maintenance, engine and propeller support, instrument calibration and specialist aviation engineering services.",
    icon: Plane,
  },
  {
    year: "Looking Ahead",
    title: "Building a One-Stop Aviation Support Centre",
    description:
      "The company continues to develop its multidisciplinary capabilities with the vision of becoming the region's leading one-stop shop for general aviation services.",
    icon: Settings,
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
            More Than Five Decades of Experience.
            <span className="text-[#087FC1]"> A Future in Aviation.</span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#19B5E5]" />

          <p className="mt-6 text-base leading-8 text-slate-600 sm:text-lg">
            Aerotech's story is built on a rich heritage of aviation experience,
            technical expertise and a continued commitment to supporting general
            aviation in Zimbabwe and the wider region.
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
                  Our Heritage
                </span>

                <h3 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Over 50 Years of Supporting Aviation
                </h3>

                <p className="mt-3 max-w-md text-sm leading-7 text-blue-100">
                  A legacy of aviation experience, engineering knowledge and
                  technical service in Zimbabwe.
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
              A Legacy of Aviation Expertise
            </h3>

            <p className="mt-6 text-base leading-8 text-slate-600">
              Aerotech Technicians (Private) Limited draws on more than five
              decades of aviation experience in Zimbabwe. This heritage
              represents years of technical knowledge, industry experience and
              commitment to supporting the general aviation sector.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              An important milestone in the company's history came in 2003, when
              Hunting Aircraft Services was incorporated as part of Aerotech.
              This forms part of the broader historical journey behind the
              organisation's aviation engineering capabilities.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              Today, operating from Site 10 A, Charles Prince Airport, Mt
              Hampden, Harare, Aerotech provides a comprehensive range of
              aviation maintenance and engineering services. These include
              aircraft maintenance and rebuilding, engine and propeller
              overhauls, airframe engineering, electrical and radio support,
              instrument testing and calibration, non-destructive testing,
              corrosion protection and specialist component services.
            </p>

            <p className="mt-5 text-base leading-8 text-slate-600">
              As a member of the KSM Group of companies, Aerotech continues to
              strengthen its technical capabilities and pursue its vision of
              becoming the region's leading one-stop shop for general aviation
              services.
            </p>

            {/* Quick facts */}
            <div className="mt-9 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-100 bg-[#F5F8FC] p-5">
                <History size={23} className="text-[#087FC1]" />
                <h4 className="mt-3 text-2xl font-bold text-[#082B52]">
                  50+ Years
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Aviation experience in Zimbabwe
                </p>
              </div>

              <div className="rounded-xl border border-slate-100 bg-[#F5F8FC] p-5">
                <Plane size={23} className="text-[#087FC1]" />
                <h4 className="mt-3 text-2xl font-bold text-[#082B52]">
                  5,700 kg
                </h4>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Stated maximum aircraft weight within authorised maintenance
                  scope
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
              Our Heritage, Our Progress
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              From decades of aviation experience to today's multidisciplinary
              maintenance and engineering capabilities.
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
                Building the Future of General Aviation Support
              </h3>

              <p className="mt-5 max-w-2xl text-sm leading-7 text-blue-100">
                Guided by our heritage and driven by technical excellence,
                Aerotech is working towards becoming the region's best one-stop
                shop for general aviation services. Our commitment remains to
                make aircraft maintenance safe, reliable and affordable while
                delivering dependable engineering support.
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
