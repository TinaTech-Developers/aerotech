import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Building2, Network, Plane } from "lucide-react";

export default function KSMGroup() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[350px] overflow-hidden rounded-3xl shadow-xl sm:h-[450px]">
              <Image
                src="/images/about/ksm-group.jpg"
                alt="Aviation and engineering operations"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/70 to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#19B5E5]">
                  Part of a Wider Group
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-white">
                  KSM Group
                </h3>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-3 hidden rounded-2xl bg-[#087FC1] p-6 text-white shadow-xl sm:block sm:right-5">
              <Network size={30} />
              <p className="mt-3 text-sm font-bold">Group Affiliation</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-100 bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
              <Building2 size={15} />
              Our Group
            </span>

            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
              Aerotech & <span className="text-[#087FC1]">KSM Group</span>
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-slate-600">
              <p>
                Aerotech (Pvt) Ltd is a member of the KSM Group of companies,
                forming part of a wider corporate group.
              </p>

              <p>
                Within the group, Aerotech focuses on aviation maintenance,
                aircraft engineering, specialist component services and
                instrument testing and calibration.
              </p>

              <p>
                Its aviation engineering focus supports the group's wider
                corporate presence while maintaining Aerotech's specialist role
                in general aviation services.
              </p>
            </div>

            <div className="mt-9 rounded-2xl border border-slate-200 bg-[#F5F8FC] p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#082B52] text-[#19B5E5]">
                  <Plane size={24} />
                </div>

                <div>
                  <h3 className="font-bold text-[#082B52]">
                    Aerotech's Specialised Role
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    Delivering aviation engineering and maintenance capabilities
                    from Charles Prince Airport, Harare, Zimbabwe.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-lg bg-[#087FC1] px-7 py-4 text-sm font-bold text-white transition-colors hover:bg-[#082B52]"
            >
              Contact Aerotech
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
