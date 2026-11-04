import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  MapPin,
  Plane,
  Wrench,
} from "lucide-react";

const highlights = [
  "Aircraft maintenance and rebuilding",
  "General aviation aircraft up to 5,700 kg",
  "Aircraft refurbishment and spray painting",
  "Airframe and structural repair capabilities",
];

export default function MaintenanceOverview() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div className="relative">
          <div className="relative min-h-[360px] overflow-hidden rounded-2xl sm:min-h-[490px]">
            <Image
              src="/images/services/airframe-engineering.jpg"
              alt="Aircraft engineering and maintenance work"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-7 right-4 max-w-[280px] rounded-xl border border-slate-100 bg-white p-5 shadow-xl sm:right-8 sm:p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-[#087FC1]">
                <Plane size={25} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#082B52]">5,700 kg</p>
                <p className="text-xs text-slate-500">Maximum All-up Weight</p>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-4 lg:pt-0">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-[2px] w-10 bg-[#087FC1]" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#087FC1]">
              Aircraft Maintenance
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#082B52] sm:text-4xl">
            Comprehensive Maintenance for General Aviation
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Aerotech (Pvt) Ltd provides aircraft maintenance, repair and
            rebuilding services, supported by a broad range of aviation
            engineering capabilities. Our work covers general aviation aircraft
            with a Maximum All-up Weight of up to 5,700 kg.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            From airframe and sheet metal work to complete aircraft
            refurbishment, our range of services brings together different
            technical capabilities to support aircraft maintenance requirements.
          </p>

          <div className="mt-8 space-y-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#087FC1]"
                />
                <span className="text-sm leading-6 text-slate-700">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 border-t border-slate-200 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3 text-sm text-slate-500">
              <MapPin size={19} className="shrink-0 text-[#087FC1]" />
              <span>
                Charles Prince Airport,
                <br />
                Mt Hampden, Harare
              </span>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#087FC1] transition hover:text-[#082B52]"
            >
              Contact Aerotech
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
