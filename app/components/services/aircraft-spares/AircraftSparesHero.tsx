import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Boxes,
  PackageSearch,
  Plane,
  Wrench,
} from "lucide-react";

const highlights = [
  {
    icon: PackageSearch,
    title: "Parts Enquiries",
    description: "Support with identifying aviation parts requirements.",
  },
  {
    icon: Boxes,
    title: "Component Support",
    description: "Assistance with applicable aircraft components and spares.",
  },
  {
    icon: Wrench,
    title: "Maintenance Support",
    description: "Parts support aligned with aircraft maintenance needs.",
  },
];

export default function AircraftSparesHero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#061D38] text-white">
      <div className="absolute inset-0">
        <Image
          src="/images/services/aircraft-spares.jpg"
          alt="Aircraft maintenance spares and aviation components"
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#061D38] via-[#061D38]/95 to-[#061D38]/65" />
      </div>

      <div className="absolute -right-24 top-10 h-80 w-80 rounded-full border border-sky-400/10" />
      <div className="absolute -right-12 top-22 h-56 w-56 rounded-full border border-sky-400/10" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
        <div>
          <div className="mb-6 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.22em] text-sky-300">
            <span className="h-px w-10 bg-sky-400" />
            Aircraft Parts & Spares Support
          </div>

          <h1 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Aircraft Spares.
            <span className="mt-2 block text-sky-300">
              Supporting Every Maintenance Need.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            Aerotech Technicians assists with aircraft parts and component
            enquiries to support maintenance and engineering requirements.
            Whether you need to identify a replacement part or enquire about a
            specific component, our team can discuss your requirements and help
            coordinate the next steps.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 rounded-md bg-sky-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-sky-400"
            >
              Enquire About Aircraft Spares
              <ArrowRight size={18} />
            </Link>

            <Link
              href="#spares-capabilities"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-7 py-4 text-sm font-semibold text-white transition hover:border-sky-300 hover:text-sky-300"
            >
              Explore Our Support
              <ArrowUpRight size={17} />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 border-t border-white/15 pt-8 sm:grid-cols-3">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title}>
                  <Icon className="mb-4 text-sky-300" size={25} />
                  <h3 className="text-sm font-bold text-white">{item.title}</h3>
                  <p className="mt-2 text-xs leading-6 text-slate-400">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="relative ml-auto max-w-lg">
            <div className="absolute -inset-4 rounded-2xl border border-sky-300/20" />
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-sm">
              <div className="relative h-[440px] overflow-hidden rounded-xl">
                <Image
                  src="/images/services/aircraft-spares-workshop.jpg"
                  alt="Aircraft components and maintenance spares"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-7">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-sky-500 text-white">
                    <Plane size={24} />
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300">
                    Aviation Support
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-white">
                    The Right Parts. The Right Enquiry.
                  </h2>
                  <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
                    Tell us what your aircraft or maintenance project requires.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
