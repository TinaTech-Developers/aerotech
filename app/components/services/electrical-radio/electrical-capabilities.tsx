import {
  Radio,
  Cable,
  Settings,
  Wrench,
  CircuitBoard,
  Gauge,
} from "lucide-react";

const capabilities = [
  {
    icon: Cable,
    number: "01",
    title: "Aircraft Electrical Installations",
    description:
      "Installation and servicing support for aircraft electrical systems and associated equipment used in general aviation.",
  },
  {
    icon: Radio,
    number: "02",
    title: "Aircraft Radio Installations",
    description:
      "Installation and technical support for aircraft radio equipment and onboard communication systems.",
  },
  {
    icon: Settings,
    number: "03",
    title: "Electrical Component Overhauls",
    description:
      "Overhaul and maintenance support for aircraft electrical components to help maintain their serviceability and operational reliability.",
  },
  {
    icon: CircuitBoard,
    number: "04",
    title: "Radio Component Overhauls",
    description:
      "Maintenance and overhaul support for aircraft radio components and communication equipment.",
  },
  {
    icon: Wrench,
    number: "05",
    title: "Electrical Component Bench Services",
    description:
      "Workshop-based bench services for the inspection, servicing and maintenance of aircraft electrical components.",
  },
  {
    icon: Gauge,
    number: "06",
    title: "Radio Component Bench Services",
    description:
      "Bench services and technical support for aircraft radio components as part of wider electrical and communication system maintenance.",
  },
];

export default function ElectricalCapabilities() {
  return (
    <section className="bg-[#F5F8FC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Our Capabilities
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            Electrical & Radio Engineering Services
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Aerotech's electrical and radio engineering capabilities include
            aircraft system installations, component maintenance and overhaul
            support, and specialist workshop-based bench services.
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
