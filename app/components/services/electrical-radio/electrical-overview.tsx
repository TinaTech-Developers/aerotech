import Image from "next/image";
import { Radio, Settings, Wrench, Cable } from "lucide-react";

const highlights = [
  {
    icon: Radio,
    title: "Aircraft Radio Systems",
    description:
      "Installation and technical support for aircraft radio and onboard communication systems.",
  },
  {
    icon: Cable,
    title: "Aircraft Electrical Systems",
    description:
      "Electrical installation and servicing support for general aviation aircraft systems.",
  },
  {
    icon: Settings,
    title: "Component Maintenance",
    description:
      "Maintenance and overhaul support for aircraft electrical and radio components.",
  },
  {
    icon: Wrench,
    title: "Component Bench Services",
    description:
      "Workshop-based inspection, servicing and technical support for electrical and radio components.",
  },
];

export default function ElectricalOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div className="relative">
          <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[480px]">
            <Image
              src="/images/services/electrical-radio-workshop.jpg"
              alt="Aircraft electrical and radio workshop"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-7 right-5 max-w-[260px] rounded-xl bg-[#082B52] p-6 text-white shadow-xl sm:right-8">
            <Radio className="mb-3 text-cyan-400" size={30} />
            <p className="text-lg font-bold">Electrical & Radio Engineering</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Aircraft electrical systems, radio installations and component
              support.
            </p>
          </div>
        </div>

        <div className="pt-5 lg:pt-0">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            What We Do
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
            Supporting Aircraft Electrical & Communication Systems
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Aerotech Technicians provides specialist electrical and radio
            engineering support as part of its general aviation maintenance
            capabilities. Services include aircraft electrical and radio
            installations, component maintenance and overhaul support, and
            workshop-based bench services.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our electrical and radio capabilities complement our wider aircraft
            maintenance and engineering services, contributing to the servicing
            and support of general aviation aircraft at Charles Prince Airport,
            Harare.
          </p>

          <div className="mt-9 grid gap-6 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
                    <Icon size={22} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#082B52]">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
