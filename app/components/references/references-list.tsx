import {
  Building2,
  Plane,
  GraduationCap,
  Factory,
  Landmark,
  ArrowUpRight,
} from "lucide-react";

const references = [
  {
    name: "ZACS",
    category: "Aviation",
    icon: Plane,
    number: "01",
  },
  {
    name: "GRAND AIR",
    category: "Aviation",
    icon: Plane,
    number: "02",
  },
  { name: "AGRIC AIR", category: "Aviation", icon: Plane, number: "03" },
  {
    name: "HAC",
    category: "Aviation",
    icon: Plane,
    number: "04",
  },
  {
    name: "CATS",
    category: "Aviation",
    icon: Plane,
    number: "05",
  },
  {
    name: "CATA",
    category: "Aviation",
    icon: Plane,
    number: "06",
  },
  {
    name: "GUTHRIE",
    category: "Aviation",
    icon: Plane,
    number: "07",
  },
  {
    name: "EXECUTIVE AIR",
    category: "Aviation",
    icon: Plane,
    number: "08",
  },
  {
    name: "Air Force of Zimbabwe",
    category: "Aviation",
    icon: Plane,
    number: "09",
  },
  {
    name: "ZASTI",
    category: "Aviation Training",
    icon: GraduationCap,
    number: "10",
  },
  {
    name: "Zambia Air Services",
    category: "Aviation",
    icon: Plane,
    number: "11",
  },
  {
    name: "Schweppes Zimbabwe Limited",
    category: "Industry",
    icon: Factory,
    number: "12",
  },
  {
    name: "Civil Aviation Authority of Zimbabwe",
    category: "Civil Aviation",
    icon: Landmark,
    number: "13",
  },
];

export default function ReferencesList() {
  return (
    <section id="references" className="bg-[#F5F8FC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#087FC1]">
            Organisations
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            Our Company References
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            The following organisations appear in Aerotech's company reference
            information.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {references.map((reference) => {
            const Icon = reference.icon;

            return (
              <div
                key={reference.number}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="absolute right-5 top-4 text-5xl font-black text-slate-100 transition group-hover:text-cyan-50">
                  {reference.number}
                </div>

                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#082B52] text-cyan-400 transition group-hover:bg-[#087FC1] group-hover:text-white">
                  <Icon size={27} />
                </div>

                <div className="relative mt-8">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#087FC1]">
                    {reference.category}
                  </span>

                  <h3 className="mt-3 min-h-[56px] text-xl font-bold leading-snug text-[#082B52]">
                    {reference.name}
                  </h3>

                  <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-medium text-slate-500">
                      Company reference
                    </span>

                    <ArrowUpRight
                      size={19}
                      className="text-[#087FC1] transition group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-xl border border-blue-100 bg-blue-50/70 p-5 sm:p-6">
          <div className="flex items-start gap-3">
            <Building2 size={21} className="mt-0.5 shrink-0 text-[#087FC1]" />

            <p className="text-sm leading-7 text-slate-600">
              The organisations listed are presented as references from company
              information supplied to Aerotech. Their appearance on this page
              does not, by itself, imply endorsement, sponsorship, partnership
              or a current client relationship.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
