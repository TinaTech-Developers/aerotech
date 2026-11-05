import { MapPin, Clock3, Plane, MessageSquareText } from "lucide-react";

const contactDetails = [
  {
    icon: MapPin,
    title: "Visit Our Facility",
    description:
      "Site 10 A, Charles Prince Airport, Mt Hampden, Harare, Zimbabwe",
    detail: "Our location",
  },
  {
    icon: Clock3,
    title: "Business Hours",
    description: "Contact the company during its normal operating hours.",
    detail: "Hours to be confirmed",
  },
  {
    icon: Plane,
    title: "Aviation Enquiries",
    description:
      "Aircraft maintenance, engine and propeller overhauls, instrument calibration and engineering services.",
    detail: "Technical enquiries",
  },
  {
    icon: MessageSquareText,
    title: "Send an Enquiry",
    description:
      "Use the enquiry form to describe your requirements and the service you need.",
    detail: "Online enquiry",
  },
];

export default function ContactInformation() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#087FC1]">
            Get In Touch
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            Connect With Aerotech
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Whether you have a technical question or would like to discuss a
            service requirement, use the information below to get started.
          </p>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactDetails.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-200 bg-[#F5F8FC] p-6 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#082B52] text-cyan-400">
                  <Icon size={23} />
                </div>

                <h3 className="mt-5 font-bold text-[#082B52]">{item.title}</h3>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-slate-600">
                  {item.description}
                </p>

                <div className="mt-4 border-t border-slate-200 pt-4 text-xs font-bold uppercase tracking-wider text-[#087FC1]">
                  {item.detail}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
