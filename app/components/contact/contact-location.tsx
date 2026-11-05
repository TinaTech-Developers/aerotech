import Link from "next/link";
import { ExternalLink, MapPin, Plane } from "lucide-react";

const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Site%2010%20A%2C%20Charles%20Prince%20Airport%2C%20Mt%20Hampden%2C%20Harare%2C%20Zimbabwe";

export default function ContactLocation() {
  return (
    <section id="location" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#087FC1]">
            Find Us
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            Visit Aerotech at Charles Prince Airport
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Our facility is located at Charles Prince Airport in Mt Hampden,
            Harare, Zimbabwe.
          </p>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-2xl border border-slate-200 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex flex-col justify-center bg-[#082B52] p-8 text-white sm:p-10">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-400">
              <MapPin size={27} />
            </div>

            <h3 className="mt-7 text-2xl font-bold">Aerotech (Pvt) Ltd</h3>

            <p className="mt-4 leading-8 text-slate-300">
              Site 10 A,
              <br />
              Charles Prince Airport,
              <br />
              Mt Hampden,
              <br />
              Harare, Zimbabwe.
            </p>

            <div className="mt-8 flex items-center gap-3 border-t border-white/15 pt-6 text-sm text-slate-300">
              <Plane size={20} className="text-cyan-400" />
              <span>Located within the Charles Prince Airport area</span>
            </div>

            <Link
              href={mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 rounded-lg bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
            >
              Open in Google Maps
              <ExternalLink size={17} />
            </Link>
          </div>

          <div className="min-h-[350px] bg-slate-200 lg:min-h-[480px]">
            <iframe
              title="Aerotech location at Charles Prince Airport"
              src="https://www.google.com/maps?q=Site%2010%20A%2C%20Charles%20Prince%20Airport%2C%20Mt%20Hampden%2C%20Harare%2C%20Zimbabwe&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "350px" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
