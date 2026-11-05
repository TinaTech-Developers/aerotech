import { ShieldCheck, Handshake, Award } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Professional Responsibility",
    description:
      "A commitment to responsible, careful and professional aviation services.",
  },
  {
    icon: Handshake,
    title: "Industry Connections",
    description:
      "Reference information spanning aviation, training and other industries.",
  },
  {
    icon: Award,
    title: "Commitment to Quality",
    description:
      "A focus on workmanship, integrity and the quality of every service.",
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
              Our References Reflect Our Place in the Industry
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Aerotech operates within the general aviation engineering sector,
              with capabilities covering aircraft maintenance, engine and
              propeller services, instrument testing and calibration, and other
              specialist technical services.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              The organisations presented on this page are drawn from Aerotech's
              supplied company reference information. They represent a range of
              institutions and organisations across different sectors.
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
