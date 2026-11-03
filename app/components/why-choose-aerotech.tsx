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
    icon: Plane,
    title: "Comprehensive Aviation Services",
    description:
      "Aircraft maintenance, engine and propeller overhauls, instrument calibration and specialist engineering services brought together under one company.",
  },
  {
    number: "02",
    icon: Wrench,
    title: "Broad Technical Capabilities",
    description:
      "From airframe repairs and electrical installations to machining, welding, NDT and corrosion protection, Aerotech offers a diverse range of technical capabilities.",
  },
  {
    number: "03",
    icon: Gauge,
    title: "Specialist Instrument Calibration",
    description:
      "Testing and certification services covering pressure, temperature, electrical and standard measurement instruments.",
  },
  {
    number: "04",
    icon: MapPin,
    title: "Strategic Aviation Location",
    description:
      "Based at Site 10 A, Charles Prince Airport, Mt Hampden, Harare, within Zimbabwe's general aviation environment.",
  },
  {
    number: "05",
    icon: Users,
    title: "Experienced Technical Team",
    description:
      "Our organisational structure brings together dedicated management and specialist responsibilities across engineering, quality, safety and finance.",
  },
  {
    number: "06",
    icon: ShieldCheck,
    title: "Commitment to Quality",
    description:
      "Our work is guided by commitment, teamwork, integrity and excellence, with a mission to make aircraft maintenance safe and affordable.",
  },
];

const highlights = [
  "Aircraft maintenance and rebuilding up to 5,700 kg Maximum All Up Weight",
  "Aircraft, engine and component engineering services",
  "Instrument testing and calibration capabilities",
  "Part of the KSM Group of companies",
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
              Your Aviation Partner.
              <span className="block text-[#19B5E5]">
                Our Commitment to Excellence.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
              Aerotech brings together a wide range of aircraft maintenance,
              engineering and instrument calibration capabilities. Our focus is
              on delivering quality and affordable services while building
              lasting relationships with our customers.
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
                "To be the best one stop shop for all general aviation services
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
            One Company. Multiple Aviation Capabilities.
          </h3>

          <p className="mt-5 leading-8 text-slate-600">
            We bring together different areas of aviation engineering and
            technical expertise to support the varied needs of the general
            aviation sector.
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
                Looking for an Aviation Engineering Partner?
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                Connect with Aerotech to discuss your aircraft maintenance,
                engineering or instrument calibration requirements.
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
