import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Plane,
  Settings,
  Radio,
  Gauge,
  ShieldCheck,
  Wrench,
  Cog,
  Ruler,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Aircraft Maintenance",
    description:
      "Aircraft maintenance, scheduled servicing, repairs and rebuilding for general aviation aircraft within our authorised maintenance scope, including aircraft up to 5,700 kg Maximum All-up Weight.",
    image: "/images/services/aircraft-maintenance.jpg",
    icon: Plane,
    link: "/services/aircraft-maintenance",
    category: "AIRCRAFT MAINTENANCE",
    featured: true,
  },
  {
    number: "02",
    title: "Engine & Propeller Overhauls",
    description:
      "Specialist engine maintenance, piston engine overhauls, Pratt & Whitney PT6A component support, and propeller maintenance and overhaul services.",
    image: "/images/services/engine-overhaul.jpg",
    icon: Settings,
    link: "/services/engine-propeller",
    category: "ENGINE & PROPELLER",
  },
  {
    number: "03",
    title: "Instrument Calibration",
    description:
      "Instrument testing, inspection and calibration services covering pressure, temperature, electrical and other measurement instruments.",
    image: "/images/services/instrument-calibration.jpg",
    icon: Gauge,
    link: "/services/instrument-calibration",
    category: "TESTING & CALIBRATION",
  },
  {
    number: "04",
    title: "Electrical & Radio Services",
    description:
      "Aircraft electrical and radio systems support, installations, troubleshooting, component maintenance and specialist technical services.",
    image: "/images/services/electrical-radio.jpg",
    icon: Radio,
    link: "/services/electrical-radio",
    category: "ELECTRICAL & RADIO",
  },
  {
    number: "05",
    title: "Airframe & Sheet Metal Engineering",
    description:
      "Airframe engineering, structural inspections, sheet metal fabrication and repairs, aircraft refurbishment, and associated specialist engineering work.",
    image: "/images/services/airframe-engineering.jpg",
    icon: Wrench,
    link: "/services/airframe-engineering",
    category: "AIRFRAME ENGINEERING",
  },
  {
    number: "06",
    title: "NDT & Corrosion Protection",
    description:
      "Non-Destructive Testing support, including Magnetic Particle and Fluorescent Penetrant Inspection, alongside corrosion protection and electroplating services.",
    image: "/images/services/ndt-corrosion.jpg",
    icon: ShieldCheck,
    link: "/services/ndt-corrosion",
    category: "INSPECTION & PROTECTION",
  },
  {
    number: "07",
    title: "Precision Engineering",
    description:
      "Specialist engineering capabilities including machining, aluminium welding, component fabrication, cable fabrication and related technical workshop services.",
    image: "/images/services/precision-engineering.jpg",
    icon: Cog,
    link: "/services/precision-engineering",
    category: "SPECIALIST ENGINEERING",
  },
  {
    number: "08",
    title: "Aircraft Spares & Components",
    description:
      "Aviation parts and component support to assist aircraft maintenance, repairs and engineering requirements.",
    image: "/images/services/aircraft-spares.jpg",
    icon: Ruler,
    link: "/services/aircraft-spares",
    category: "AVIATION SUPPORT",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#F5F8FC] py-20 sm:py-24 lg:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full bg-[#19B5E5]/5 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-20 h-96 w-96 rounded-full bg-[#087FC1]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {/* Section heading */}
        <div className="mb-14 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-5 inline-flex items-center gap-3">
              <span className="h-px w-10 bg-[#087FC1]" />
              <span className="text-xs font-bold uppercase tracking-[0.22em] text-[#087FC1]">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl font-black leading-tight tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
              Complete Aviation
              <span className="block text-[#087FC1]">
                Maintenance & Engineering
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-base leading-8 text-slate-600">
              From aircraft maintenance and engine overhauls to specialist
              engineering, instrument calibration and technical support,
              Aerotech brings a broad range of aviation capabilities together
              under one roof. Our focus is reliability, quality workmanship and
              keeping you flying with confidence.
            </p>
          </div>

          <Link
            href="/services"
            className="group inline-flex shrink-0 items-center gap-3 text-sm font-bold text-[#082B52] transition hover:text-[#087FC1]"
          >
            Explore All Services
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#087FC1]/30 transition group-hover:bg-[#087FC1] group-hover:text-white">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>

        {/* Featured service */}
        <div className="mb-7 grid overflow-hidden rounded-2xl bg-[#082B52] lg:grid-cols-2">
          <div className="relative min-h-[280px] lg:min-h-[400px]">
            <Image
              src={services[0].image}
              alt="Aircraft maintenance and engineering"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/60 to-transparent lg:bg-gradient-to-r" />

            <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-[#061D38]/60 px-4 py-2 text-[10px] font-bold tracking-[0.18em] text-white backdrop-blur-md">
              CORE SERVICE
            </div>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
            <div className="mb-6 flex items-center gap-3">
              <span className="text-4xl font-black text-[#19B5E5]">01</span>
              <span className="h-px w-12 bg-[#19B5E5]/60" />
              <span className="text-[10px] font-bold tracking-[0.2em] text-blue-200">
                AIRCRAFT MAINTENANCE
              </span>
            </div>

            <h3 className="text-2xl font-black leading-tight text-white sm:text-3xl lg:text-4xl">
              Aircraft Maintenance & Rebuilding
            </h3>

            <p className="mt-5 max-w-lg text-sm leading-7 text-blue-100/80 sm:text-base">
              Our core business is keeping general aviation aircraft serviceable
              through maintenance, scheduled servicing, repairs and rebuilding.
              We provide maintenance capability within our authorised scope,
              including aircraft up to 5,700 kg Maximum All-up Weight.
            </p>

            <Link
              href="/services/aircraft-maintenance"
              className="group mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-[#087FC1] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#19B5E5]"
            >
              Discover This Service
              <ArrowRight
                size={17}
                className="transition group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(1).map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.number}
                href={service.link}
                className="group overflow-hidden rounded-xl border border-slate-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#19B5E5]/50 hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/70 via-transparent to-transparent" />

                  <span className="absolute left-5 top-5 rounded-md bg-[#082B52]/80 px-3 py-1.5 text-[10px] font-bold tracking-widest text-white backdrop-blur-sm">
                    {service.category}
                  </span>

                  <span className="absolute bottom-4 right-5 text-3xl font-black text-white/80">
                    {service.number}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-[#087FC1]/10 transition group-hover:bg-[#087FC1]">
                    <Icon
                      size={22}
                      className="text-[#087FC1] transition group-hover:text-white"
                    />
                  </div>

                  <h3 className="text-lg font-bold text-[#082B52] transition group-hover:text-[#087FC1]">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-bold text-[#082B52]">
                      Learn More
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-[#087FC1] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-2xl border border-[#087FC1]/15 bg-white p-7 shadow-sm sm:p-9 lg:flex-row lg:items-center">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#087FC1]/10">
              <Plane size={25} className="text-[#087FC1]" />
            </div>

            <div>
              <h3 className="text-xl font-bold text-[#082B52]">
                Your Aviation Requirements. Our Technical Expertise.
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Whether you require aircraft maintenance, engine services,
                calibration or specialist engineering support, speak to our team
                about your requirements.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center gap-3 rounded-lg bg-[#082B52] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#087FC1]"
          >
            Contact Aerotech
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
