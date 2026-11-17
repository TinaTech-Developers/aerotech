import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Plane,
  Wrench,
  Gauge,
  MapPin,
  Users,
  ShieldCheck,
  Settings,
  CheckCircle2,
  Building2,
} from "lucide-react";

const reasons = [
  {
    number: "01",
    icon: ShieldCheck,
    title: "Reliability You Can Depend On",
    description:
      "We understand that reliability is essential in aviation. Our approach centres on responsible maintenance, quality workmanship and technical support that helps customers maintain confidence in their aircraft.",
  },
  {
    number: "02",
    icon: Plane,
    title: "One-Stop Aviation Capability",
    description:
      "Aircraft maintenance, engine and propeller overhauls, instrument calibration and specialist engineering services are brought together to provide customers with a broad range of aviation support under one roof.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Over 50 Years of Aviation Experience",
    description:
      "Built on more than five decades of aviation experience in Zimbabwe, our heritage reflects a long-standing commitment to aircraft maintenance, engineering and specialist technical services.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "CAAZ-Approved Maintenance Capability",
    description:
      "Our maintenance organisation operates within its applicable Civil Aviation Authority of Zimbabwe approval and authorised technical scope, supporting responsible aircraft maintenance and airworthiness.",
  },
  {
    number: "05",
    icon: Wrench,
    title: "Multidisciplinary Technical Expertise",
    description:
      "Our capabilities extend across airframe engineering, engine and propeller services, electrical and radio systems, instrument testing, calibration, NDT and specialist workshop engineering.",
  },
  {
    number: "06",
    icon: Users,
    title: "A Customer-Focused Approach",
    description:
      "We value collaboration, clear communication and professional service. By bringing different technical capabilities together, we aim to simplify service coordination and support our customers' operational requirements.",
  },
];

const highlights = [
  "Aircraft maintenance and rebuilding within our authorised scope, including aircraft up to 5,700 kg MAUW",
  "Engine maintenance, piston engine and propeller overhaul capabilities",
  "Instrument testing, calibration and specialist engineering services",
  "More than five decades of aviation experience in Zimbabwe",
  "Proud member of the KSM Group of companies",
];

export default function WhyChooseAerotech() {
  return (
    <section className="overflow-hidden bg-white">
      {/* Main introduction */}
      <div className="relative bg-[#061D38]">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-cyan-400/10" />
        <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-cyan-400/10" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              <Building2 size={15} />
              Why Aerotech
            </div>

            <h2 className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
              In Aviation,
              <span className="block text-[#19B5E5]">
                Reliability Is Everything.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Aerotech Technicians brings together aircraft maintenance, engine
              and propeller services, instrument calibration and specialist
              aviation engineering. Built on more than five decades of aviation
              experience in Zimbabwe, we are committed to quality, reliability
              and keeping our customers flying with confidence.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-3 rounded-md bg-[#087FC1] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#19B5E5]"
              >
                Discover Aerotech
                <ArrowUpRight size={17} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md border border-white/25 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
              >
                Talk to Our Team
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Highlights panel */}
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-7 backdrop-blur-sm sm:p-9">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                  The Aerotech Advantage
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  What Sets Us Apart
                </h3>
              </div>

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400/10 text-cyan-300">
                <Settings size={25} />
              </div>
            </div>

            <div className="space-y-5">
              {highlights.map((highlight) => (
                <div key={highlight} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-0.5 shrink-0 text-[#19B5E5]"
                  />
                  <p className="text-sm leading-7 text-slate-200">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-sm font-semibold text-white">Our Vision</p>
              <p className="mt-2 text-sm italic leading-7 text-slate-300">
                "To be the best one-stop shop for all general aviation services
                in the region."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reasons grid */}
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="mb-14 max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
            The Aerotech Difference
          </span>

          <h3 className="mt-4 text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
            One Partner. Comprehensive Aviation Support.
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            Aviation operations require dependable technical support across
            multiple disciplines. Our broad capabilities bring maintenance,
            engineering and specialist services together, helping customers
            coordinate their aviation requirements through one organisation.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.number}
                className="group border-t-2 border-slate-200 pt-7 transition duration-300 hover:border-[#19B5E5]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF6FC] text-[#087FC1] transition group-hover:bg-[#087FC1] group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <span className="text-3xl font-bold text-slate-100 transition group-hover:text-cyan-100">
                    {reason.number}
                  </span>
                </div>

                <h4 className="mt-6 text-lg font-bold text-[#082B52]">
                  {reason.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Closing banner */}
      <div className="bg-[#F5F8FC]">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-12 sm:px-8 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#087FC1] text-white sm:flex">
              <Plane size={24} />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-[#082B52]">
                Your Trusted Partner in Airworthiness.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                From aircraft maintenance and engine overhauls to specialist
                engineering and calibration, connect with Aerotech for
                comprehensive aviation support.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-md bg-[#087FC1] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#061D38]"
          >
            Enquire Now
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
