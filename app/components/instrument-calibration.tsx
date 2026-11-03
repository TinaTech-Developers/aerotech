import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Gauge,
  Thermometer,
  Activity,
  Ruler,
  CheckCircle2,
} from "lucide-react";

const categories = [
  {
    number: "01",
    icon: Gauge,
    title: "Pressure Testing",
    description:
      "Testing and certification of pressure measurement instruments.",
    instruments: [
      "Gas pressure gauges",
      "Liquid flow pressure gauges",
      "Gauges and regulators",
    ],
  },
  {
    number: "02",
    icon: Thermometer,
    title: "Temperature Testing",
    description:
      "Testing and certification of temperature measurement and control instruments.",
    instruments: [
      "Incubators and liquid baths",
      "Temperature indicators and recorders",
      "Thermocouple indicators and controllers",
    ],
  },
  {
    number: "03",
    icon: Activity,
    title: "Electrical Testing",
    description:
      "Testing and certification of electrical measurement and testing equipment.",
    instruments: [
      "AC/DC ammeters and voltmeters",
      "Multimeters and insulation testers",
      "Power supply units and resistance boxes",
    ],
  },
  {
    number: "04",
    icon: Ruler,
    title: "Standard Measurements",
    description:
      "Testing and certification of dimensional, mechanical and other measurement instruments.",
    instruments: [
      "Micrometers and Vernier callipers",
      "Depth and height gauges",
      "Torque testers and analytical balances",
    ],
  },
];

export default function InstrumentCalibration() {
  return (
    <section className="overflow-hidden bg-[#F5F8FC]">
      {/* Introduction */}
      <div className="mx-auto max-w-7xl px-5 pb-12 pt-20 sm:px-8 lg:pb-16 lg:pt-24">
        <div className="grid items-end gap-8 lg:grid-cols-2">
          <div>
            <div className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
              <span className="h-0.5 w-8 bg-[#19B5E5]" />
              Precision & Technical Services
            </div>

            <h2 className="max-w-2xl text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl lg:text-5xl">
              Instrument Testing
              <span className="block text-[#087FC1]">& Calibration</span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl text-base leading-8 text-slate-600">
              Aerotech provides testing and certification services across a
              broad range of measurement instruments. Our capabilities cover
              pressure, temperature, electrical indicators and standard
              measurement equipment.
            </p>

            <Link
              href="/services/instrument-calibration"
              className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#087FC1] transition hover:text-[#061D38]"
            >
              Explore Calibration Services
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>

      {/* Main visual and categories */}
      <div className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-24">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          {/* Image panel */}
          <div className="relative min-h-[400px] overflow-hidden rounded-xl bg-[#061D38] lg:min-h-full">
            <Image
              src="/images/calibration-laboratory.jpg"
              alt="Precision measurement and instrument calibration equipment"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#061D38] via-[#061D38]/45 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-7 sm:p-9">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg border border-cyan-300/30 bg-cyan-400/15 text-cyan-300">
                <Gauge size={25} />
              </div>

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Aerotech Technical Capabilities
              </p>

              <h3 className="mt-3 max-w-md text-2xl font-bold leading-tight text-white sm:text-3xl">
                Precision Testing Across Multiple Instrument Categories
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                Supporting a range of measurement and testing requirements
                through our instrument testing and certification services.
              </p>

              <Link
                href="/services/instrument-calibration"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-white transition hover:text-cyan-300"
              >
                View Full Service Details
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="grid gap-5 sm:grid-cols-2">
            {categories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.number}
                  className="group rounded-xl border border-slate-200 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-slate-200/60 sm:p-7"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#EAF6FC] text-[#087FC1] transition group-hover:bg-[#087FC1] group-hover:text-white">
                      <Icon size={24} />
                    </div>

                    <span className="text-2xl font-bold text-slate-200">
                      {category.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-bold text-[#082B52]">
                    {category.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {category.description}
                  </p>

                  <div className="my-5 h-px bg-slate-100" />

                  <ul className="space-y-3">
                    {category.instruments.map((instrument) => (
                      <li key={instrument} className="flex items-start gap-2.5">
                        <CheckCircle2
                          size={16}
                          className="mt-0.5 shrink-0 text-[#087FC1]"
                        />
                        <span className="text-xs leading-5 text-slate-600">
                          {instrument}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom information strip */}
        <div className="mt-8 flex flex-col justify-between gap-5 rounded-xl bg-[#082B52] px-6 py-7 sm:flex-row sm:items-center sm:px-9">
          <div>
            <h3 className="text-lg font-bold text-white">
              Looking for a specific instrument calibration service?
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Explore the full list of instruments covered by Aerotech.
            </p>
          </div>

          <Link
            href="/services/instrument-calibration"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-md bg-[#087FC1] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#19B5E5]"
          >
            View All Capabilities
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </div>
    </section>
  );
}
