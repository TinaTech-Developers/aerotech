import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Users } from "lucide-react";

const management = [
  {
    name: "Tendai Moyo",
    role: "Managing Director",
    category: "Executive Leadership",
    image: "/images/about/management/managing-director.jpg",
    bio: "Provides strategic leadership and oversees the company's overall direction, business development and commitment to delivering reliable aviation maintenance and engineering services.",
  },
  {
    name: "David Chikowore",
    role: "Operations Manager",
    category: "Operations",
    image: "/images/about/management/operations-manager.jpg",
    bio: "Oversees operational activities, coordinating resources, service delivery and workflow to support efficient and professional aviation engineering operations.",
  },
  {
    name: "Michael Dube",
    role: "Technical Manager",
    category: "Technical Leadership",
    image: "/images/about/management/technical-manager.jpg",
    bio: "Provides technical oversight across maintenance and engineering activities, supporting quality workmanship, technical standards and responsible maintenance practices.",
  },
  {
    name: "Patricia Ndlovu",
    role: "Finance & Administration Manager",
    category: "Corporate Services",
    image: "/images/about/management/finance-manager.jpg",
    bio: "Oversees financial administration and corporate support functions, contributing to effective organisational management and business operations.",
  },
];

export default function ManagementTeam() {
  return (
    <section
      id="management-team"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 top-20 h-96 w-96 rounded-full border border-sky-100" />
      <div className="pointer-events-none absolute -right-20 top-40 h-72 w-72 rounded-full border border-sky-100" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-sky-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#087FC1]">
            <Users size={15} />
            Our Management
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-[#082B52] sm:text-4xl lg:text-5xl">
            Leadership That Drives
            <span className="block text-[#087FC1]">
              Excellence & Reliability.
            </span>
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            Our management team provides the leadership, coordination and
            professional oversight that guide Aerotech Technicians&apos;
            aviation maintenance and engineering operations. Together, they
            support our commitment to safety, quality and dependable service.
          </p>
        </div>

        {/* Management cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {management.map((person, index) => (
            <article
              key={person.name}
              className="group relative overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-sky-200 hover:shadow-2xl hover:shadow-sky-900/10"
            >
              {/* Portrait */}
              <div className="relative aspect-[4/4.5] overflow-hidden bg-slate-100">
                <Image
                  src={person.image}
                  alt={person.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/70 via-transparent to-transparent opacity-70" />

                <div className="absolute left-4 top-4">
                  <span className="rounded-full border border-white/30 bg-[#061D38]/70 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {person.category}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-[#087FC1] text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={19} />
                </div>
              </div>

              {/* Details */}
              <div className="p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-[#19B5E5] transition-all duration-300 group-hover:w-16" />

                <h3 className="text-lg font-bold text-[#082B52]">
                  {person.name}
                </h3>

                <p className="mt-1 text-sm font-semibold text-[#087FC1]">
                  {person.role}
                </p>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {person.bio}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 rounded-2xl bg-[#061D38] p-8 sm:flex-row sm:p-10">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#19B5E5]">
              Working Together
            </p>

            <h3 className="mt-3 text-2xl font-bold text-white">
              Strong Leadership. Dedicated People. Reliable Aviation Support.
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-300">
              Our leadership works alongside our technical personnel to support
              professional service delivery and the continued development of our
              aviation capabilities.
            </p>
          </div>

          <Link
            href="/contact"
            className="group inline-flex shrink-0 items-center gap-3 rounded-md bg-[#087FC1] px-6 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#19B5E5]"
          >
            Get in Touch
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
