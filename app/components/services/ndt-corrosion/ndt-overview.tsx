import Image from "next/image";
import {
  ShieldCheck,
  Search,
  Layers,
  Wrench,
  CheckCircle2,
} from "lucide-react";

const highlights = [
  {
    icon: Search,
    title: "Non-Destructive Testing",
    description:
      "Inspection methods used to identify surface and material discontinuities without damaging the component being examined.",
  },
  {
    icon: ShieldCheck,
    title: "Corrosion Protection",
    description:
      "Specialist surface treatment processes supporting the protection and preservation of engineering components.",
  },
  {
    icon: Layers,
    title: "Electroplating Services",
    description:
      "Cadmium, silver and other plating processes for applicable engineering components and surface treatment requirements.",
  },
  {
    icon: Wrench,
    title: "Specialist Engineering Support",
    description:
      "Technical services complementing Aerotech's wider aircraft maintenance, component repair and engineering capabilities.",
  },
];

export default function NDTOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div className="relative">
          <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[480px]">
            <Image
              src="/images/services/ndt-inspection.jpg"
              alt="Non-destructive testing and specialist engineering inspection"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-7 right-5 max-w-[270px] rounded-xl bg-[#082B52] p-6 text-white shadow-xl sm:right-8">
            <ShieldCheck className="mb-3 text-cyan-400" size={30} />
            <p className="text-lg font-bold">Inspection & Protection</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Specialist NDT methods and electroplating capabilities.
            </p>
          </div>
        </div>

        <div className="pt-5 lg:pt-0">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Our Expertise
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
            Supporting Aircraft Integrity Through Inspection & Protection
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Aerotech Technicians provides specialist Non-Destructive Testing
            (NDT) capabilities as part of its wider aviation engineering
            services. These inspection methods help identify surface and
            material discontinuities in applicable components without
            compromising the integrity of the items being examined. Our
            identified methods include Magnetic Particle Inspection (MPI) and
            Fluorescent Penetrant Inspection (FPI).
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Complementing these inspection capabilities, Aerotech offers
            electroplating services, including cadmium and silver plating, to
            support surface treatment and corrosion protection requirements for
            applicable engineering components.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Magnetic Particle Inspection (MPI)",
              "Fluorescent Penetrant Inspection (FPI)",
              "Cadmium electroplating",
              "Silver and other plating services",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="shrink-0 text-cyan-500" />
                <span className="font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
