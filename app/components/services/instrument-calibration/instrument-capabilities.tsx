import {
  Gauge,
  Thermometer,
  Zap,
  Ruler,
  Activity,
  Settings,
} from "lucide-react";

const capabilities = [
  {
    icon: Gauge,
    number: "01",
    title: "Pressure Testing",
    description:
      "Testing services covering gas pressure gauges, liquid flow pressure gauges, gauges and regulators.",
    items: [
      "Gas pressure gauges",
      "Liquid flow pressure gauges",
      "Gauges and regulators",
    ],
  },
  {
    icon: Thermometer,
    number: "02",
    title: "Temperature Testing",
    description:
      "Testing services for temperature measurement and monitoring equipment.",
    items: [
      "Incubators and liquid baths",
      "Temperature indicators and recorders",
      "Thermocouple indicators and controllers",
    ],
  },
  {
    icon: Zap,
    number: "03",
    title: "Electrical Testing",
    description:
      "Testing services for electrical measurement and testing equipment.",
    items: [
      "AC/DC ammeters and voltmeters",
      "Multimeters and insulation testers",
      "Power supply units and resistance boxes",
    ],
  },
  {
    icon: Ruler,
    number: "04",
    title: "Standard Measurements",
    description:
      "Measurement services covering dimensional and mechanical instruments.",
    items: [
      "Micrometers and Vernier callipers",
      "Depth and height gauges",
      "Torque testers and analytical balances",
    ],
  },
  {
    icon: Activity,
    number: "05",
    title: "Measurement Equipment",
    description:
      "Instrument services covering a variety of equipment used for measurement and testing.",
    items: [
      "Pressure measurement equipment",
      "Temperature measurement equipment",
      "Electrical measurement equipment",
    ],
  },
  {
    icon: Settings,
    number: "06",
    title: "Instrument Support",
    description:
      "Services covering the range of instruments included in Aerotech's testing and calibration capabilities.",
    items: [
      "Instrument enquiries",
      "Equipment assessment discussions",
      "Service requirement coordination",
    ],
  },
];

export default function InstrumentCapabilities() {
  return (
    <section className="bg-[#F5F8FC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Our Capabilities
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            Instrument Testing & Calibration Capabilities
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our services cover a selection of instruments across four principal
            measurement categories.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group rounded-xl border border-slate-200 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#082B52] text-cyan-400 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={26} />
                  </div>

                  <span className="text-3xl font-bold text-slate-100">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-[#082B52]">
                  {item.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-slate-100 pt-5">
                  <ul className="space-y-3">
                    {item.items.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
    