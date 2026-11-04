import {
  Search,
  ShieldCheck,
  Layers,
  Microscope,
  Component,
  Settings,
} from "lucide-react";

const capabilities = [
  {
    icon: Search,
    number: "01",
    title: "Non-Destructive Testing",
    description:
      "NDT services for the inspection of aircraft and engineering components.",
    items: [
      "Non-Destructive Testing",
      "Component inspection enquiries",
      "Aircraft engineering inspection support",
    ],
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Corrosion Protection",
    description:
      "Corrosion protection services supporting aircraft engineering components.",
    items: [
      "Corrosion protection",
      "Surface protection requirements",
      "Component protection enquiries",
    ],
  },
  {
    icon: Layers,
    number: "03",
    title: "Cadmium Plating",
    description:
      "Cadmium plating as part of Aerotech's corrosion protection capabilities.",
    items: [
      "Cadmium plating",
      "Component surface treatment",
      "Corrosion protection applications",
    ],
  },
  {
    icon: Component,
    number: "04",
    title: "Silver Plating",
    description:
      "Silver plating services for relevant engineering components.",
    items: [
      "Silver plating",
      "Component plating enquiries",
      "Surface treatment requirements",
    ],
  },
  {
    icon: Settings,
    number: "05",
    title: "Other Plating Services",
    description:
      "Additional plating capabilities within Aerotech's corrosion protection offering.",
    items: [
      "Other plating services",
      "Component treatment enquiries",
      "Corrosion protection requirements",
    ],
  },
  {
    icon: Microscope,
    number: "06",
    title: "Engineering Inspection Support",
    description:
      "NDT and corrosion protection as part of wider aviation engineering services.",
    items: [
      "Inspection service enquiries",
      "Component-related requirements",
      "Engineering service coordination",
    ],
  },
];

export default function NDTCapabilities() {
  return (
    <section className="bg-[#F5F8FC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Our Capabilities
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            NDT & Corrosion Protection Services
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Explore our inspection and corrosion protection capabilities
            supporting aircraft and engineering components.
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