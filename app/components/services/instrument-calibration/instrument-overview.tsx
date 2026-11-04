import Image from "next/image";
import { Gauge, Thermometer, Zap, Ruler, CheckCircle2 } from "lucide-react";

const categories = [
  {
    icon: Gauge,
    title: "Pressure Instruments",
    description: "Pressure gauges, indicators and regulators.",
  },
  {
    icon: Thermometer,
    title: "Temperature Instruments",
    description: "Temperature indicators, recorders and controllers.",
  },
  {
    icon: Zap,
    title: "Electrical Instruments",
    description: "Electrical meters, testers and measurement equipment.",
  },
  {
    icon: Ruler,
    title: "Standard Measurements",
    description: "Dimensional and mechanical measuring instruments.",
  },
];

export default function InstrumentOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div className="relative">
          <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[480px]">
            <Image
              src="/images/calibration-laboratory.jpg"
              alt="Instrument testing and measurement equipment"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-7 right-5 max-w-[270px] rounded-xl bg-[#082B52] p-6 text-white shadow-xl sm:right-8">
            <Gauge className="mb-3 text-cyan-400" size={30} />
            <p className="text-lg font-bold">Precision Measurement</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Instrument testing across multiple measurement categories.
            </p>
          </div>
        </div>

        <div className="pt-5 lg:pt-0">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Instrument Services
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
            Precision Testing for Reliable Measurements
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Aerotech provides instrument testing and calibration services across
            a range of measurement equipment. Our capabilities include pressure,
            temperature, electrical and standard measurement instruments.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            From pressure gauges and temperature indicators to electrical
            testing equipment and dimensional measuring instruments, our
            services cover a broad range of measurement requirements.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Pressure testing",
              "Temperature testing",
              "Electrical testing",
              "Standard measurement instruments",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="shrink-0 text-cyan-500" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#082B52] text-cyan-400">
                <Icon size={24} />
              </div>

              <h3 className="mt-5 font-bold text-[#082B52]">{item.title}</h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
