import { ShieldCheck, Handshake, Award } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Professional Responsibility",
    description:
      "A commitment to professional conduct, technical responsibility and dependable aviation maintenance and engineering support.",
  },
  {
    icon: Handshake,
    title: "Industry Experience",
    description:
      "More than five decades of aviation experience behind our heritage, with professional engagement across aviation and related industries.",
  },
  {
    icon: Award,
    title: "Commitment to Quality",
    description:
      "Guided by integrity, teamwork and excellence, with a focus on responsible service and quality workmanship.",
  },
];

export default function ReferencesIntro() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#087FC1]">
              Professional Relationships
            </span>

            <h2 className="mt-4 text-3xl font-bold leading-tight text-[#082B52] sm:text-4xl">
              Experience Built Through Industry Engagement
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Aerotech Technicians operates within Zimbabwe's general aviation
              maintenance and engineering sector. Its multidisciplinary
              capabilities include aircraft maintenance, engine and propeller
              services, instrument testing and calibration, airframe
              engineering, electrical and radio systems, and specialist
              technical support.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The organisations presented on this page are drawn from Aerotech's
              company reference information. They reflect the breadth of its
              industry experience and professional engagement across aviation,
              training and related sectors. Their inclusion is intended as a
              reference to that experience and does not necessarily indicate
              current contractual relationships or endorsements.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-[#F5F8FC] p-6 transition hover:border-cyan-300 hover:shadow-lg"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#082B52] text-cyan-400">
                    <Icon size={23} />
                  </div>

                  <h3 className="mt-5 font-bold text-[#082B52]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
