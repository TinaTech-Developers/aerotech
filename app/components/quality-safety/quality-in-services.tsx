import { Plane, Settings, Gauge, Wrench, Radio, Search } from "lucide-react";

const serviceAreas = [
  {
    icon: Plane,
    title: "Aircraft Maintenance",
    description:
      "Maintenance, inspections, repairs and rebuilding carried out with attention to aircraft safety, technical requirements and continued airworthiness.",
  },
  {
    icon: Settings,
    title: "Engine & Propeller Services",
    description:
      "Piston engine maintenance and overhauls, propeller servicing and specialist repair and overhaul support for applicable PT6A components.",
  },
  {
    icon: Gauge,
    title: "Instrument Testing & Calibration",
    description:
      "Testing and calibration services for pressure, temperature, electrical and dimensional measurement instruments.",
  },
  {
    icon: Wrench,
    title: "Airframe Engineering",
    description:
      "Structural repairs, sheet metal fabrication, aircraft fabric and fibreglass work, welding and precision engineering.",
  },
  {
    icon: Radio,
    title: "Electrical & Radio Services",
    description:
      "Aircraft electrical and radio installations, component maintenance and specialist workshop-based technical support.",
  },
  {
    icon: Search,
    title: "NDT & Corrosion Protection",
    description:
      "Non-destructive testing capabilities, including Magnetic Particle and Fluorescent Penetrant Inspection, alongside electroplating and surface treatment services.",
  },
];

export default function QualityInServices() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
              Across Our Operations
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
              Quality Is Part of Everything We Do
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Aerotech Technicians brings together a range of aircraft
              maintenance, engineering and specialist aviation support
              capabilities. Across these service areas, we recognise the
              importance of technical responsibility, careful workmanship and
              attention to detail.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              From aircraft maintenance and engine overhauls to instrument
              calibration, airframe engineering, electrical and radio systems
              and non-destructive testing, our multidisciplinary capabilities
              support a coordinated approach to general aviation maintenance.
            </p>

            <div className="mt-8 rounded-xl bg-[#082B52] p-7 text-white">
              <p className="text-sm font-bold uppercase tracking-wider text-cyan-400">
                Our Vision
              </p>

              <p className="mt-3 text-lg font-semibold leading-8">
                To be the best one stop shop for all general aviation services
                in the region.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {serviceAreas.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-xl border border-slate-200 p-6 transition hover:border-cyan-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                    <Icon size={24} />
                  </div>

                  <h3 className="mt-5 font-bold text-[#082B52]">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
