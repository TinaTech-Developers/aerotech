import Image from "next/image";
import { ShieldCheck, Target, Users, Award } from "lucide-react";

const commitments = [
  {
    icon: ShieldCheck,
    title: "Safety-Conscious Operations",
    description:
      "Recognising the importance of safety in aircraft maintenance and engineering activities.",
  },
  {
    icon: Target,
    title: "Quality Workmanship",
    description:
      "Maintaining a commitment to quality in the services and work delivered.",
  },
  {
    icon: Users,
    title: "Teamwork & Communication",
    description:
      "Working towards common goals through collaboration and communication with stakeholders.",
  },
  {
    icon: Award,
    title: "Integrity & Accountability",
    description:
      "Inspiring trust through honesty, accountability and ethical conduct.",
  },
];

export default function QualityCommitment() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div>
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-600">
            Our Commitment
          </span>

          <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
            Quality Is Our Responsibility
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Aircraft maintenance and engineering demand responsibility,
            attention to detail and a commitment to quality. At Aerotech, we
            recognise that the quality of our work has an important bearing on
            the safety and reliability of aircraft.
          </p>

          <p className="mt-4 leading-8 text-slate-600">
            Our commitment is reflected in our values of commitment, teamwork,
            integrity and excellence. These principles guide our approach to
            serving customers and working with stakeholders.
          </p>

          <div className="mt-9 border-l-4 border-cyan-500 bg-[#F5F8FC] p-6">
            <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">
              Our Mission
            </p>

            <p className="mt-3 text-xl font-bold leading-8 text-[#082B52]">
              &ldquo;To make aircraft maintenance safe and affordable.&rdquo;
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="relative h-[380px] overflow-hidden rounded-2xl sm:h-[480px]">
            <Image
              src="/images/quality-safety/quality-workmanship.jpg"
              alt="Aircraft maintenance engineering workmanship"
              fill
              className="object-cover"
            />
          </div>

          <div className="absolute -bottom-7 left-5 max-w-[270px] rounded-xl bg-[#082B52] p-6 text-white shadow-xl sm:left-8">
            <ShieldCheck className="mb-3 text-cyan-400" size={30} />

            <p className="text-lg font-bold">Quality & Safety</p>

            <p className="mt-2 text-sm leading-6 text-slate-300">
              A responsibility at the heart of aviation engineering.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 grid max-w-7xl gap-6 px-5 sm:grid-cols-2 sm:px-8 lg:grid-cols-4 lg:px-12">
        {commitments.map((item) => {
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
