"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  MapPin,
  Plane,
  ShieldCheck,
  ChevronRight,
} from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Aerotech", href: "/about" },
  { name: "Our Services", href: "/services" },
  { name: "Quality & Safety", href: "/quality-safety" },
  { name: "References", href: "/references" },
  { name: "Contact Us", href: "/contact" },
];

const serviceLinks = [
  {
    name: "Aircraft Maintenance",
    href: "/services/aircraft-maintenance",
  },
  {
    name: "Engine & Propeller Overhauls",
    href: "/services/engine-propeller",
  },
  {
    name: "Instrument Calibration",
    href: "/services/instrument-calibration",
  },
  {
    name: "Electrical & Radio Services",
    href: "/services/electrical-radio",
  },
  {
    name: "Airframe Engineering",
    href: "/services/airframe-engineering",
  },
  {
    name: "NDT & Corrosion Protection",
    href: "/services/ndt-corrosion",
  },
];

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="relative overflow-hidden bg-[#061D38] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-[450px] w-[450px] rounded-full border border-white/5" />
      <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/5" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Main footer */}
        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_1.1fr_1fr] lg:gap-10">
          {/* Company information */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#087FC1] text-white">
                <Plane size={27} />
              </div>

              <div>
                <p className="text-xl font-extrabold tracking-wide text-white">
                  AEROTECH
                </p>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#19B5E5]">
                  (Private) Limited
                </p>
              </div>
            </Link>

            <p className="mt-7 max-w-sm text-sm leading-7 text-blue-100/65">
              Aerotech (Pvt) Ltd provides aircraft maintenance, aviation
              engineering and instrument testing and calibration services from
              Charles Prince Airport, Harare, Zimbabwe.
            </p>

            <div className="mt-7 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-[#19B5E5]">
                <ShieldCheck size={20} />
              </div>
              <p className="text-xs leading-5 text-blue-100/65">
                Our mission
                <span className="block font-semibold text-white">
                  To make aircraft maintenance safe and affordable.
                </span>
              </p>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Quick Links
            </h3>

            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-blue-100/65 transition-colors hover:text-[#19B5E5]"
                  >
                    <ChevronRight
                      size={14}
                      className="text-[#087FC1] transition-transform group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Our Services
            </h3>

            <ul className="space-y-4">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-start gap-2 text-sm leading-5 text-blue-100/65 transition-colors hover:text-[#19B5E5]"
                  >
                    <ChevronRight
                      size={14}
                      className="mt-0.5 shrink-0 text-[#087FC1] transition-transform group-hover:translate-x-1"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact information */}
          <div>
            <h3 className="mb-7 text-sm font-bold uppercase tracking-[0.16em] text-white">
              Find Us
            </h3>

            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/5 text-[#19B5E5]">
                <MapPin size={20} />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#19B5E5]">
                  Our Location
                </p>
                <p className="mt-2 text-sm leading-7 text-blue-100/65">
                  Site 10 A,
                  <br />
                  Charles Prince Airport,
                  <br />
                  Mt Hampden, Harare,
                  <br />
                  Zimbabwe.
                </p>
              </div>
            </div>

            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#19B5E5] transition-colors hover:text-white"
            >
              Send an Enquiry
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* Vision strip */}
        <div className="flex flex-col gap-4 border-b border-white/10 py-7 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#19B5E5]">
              Our Vision
            </p>
            <p className="mt-2 text-sm text-blue-100/70">
              To be the best one stop shop for all general aviation services in
              the region.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-[#19B5E5]"
          >
            Talk to our team
            <ArrowUpRight size={17} />
          </Link>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 py-7 text-xs text-blue-100/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Aerotech (Pvt) Ltd. All rights reserved.</p>

          <div className="flex flex-wrap items-center gap-5">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link href="/terms" className="transition-colors hover:text-white">
              Terms & Conditions
            </Link>

            <span className="text-blue-100/30">Member of KSM Group</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
