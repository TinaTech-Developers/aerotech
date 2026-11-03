"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Plane,
  Wrench,
  Settings,
  Gauge,
  RadioTower,
  ShieldCheck,
  Building2,
  Users,
  History,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    title: "Aircraft Maintenance",
    description: "Aircraft maintenance, repair and rebuilding.",
    href: "/services/aircraft-maintenance",
    icon: Plane,
  },
  {
    title: "Engine & Propeller",
    description: "Piston engines, PT6 components and propeller overhauls.",
    href: "/services/engine-propeller",
    icon: Settings,
  },
  {
    title: "Airframe Engineering",
    description: "Structural repairs, sheet metal and fabrication.",
    href: "/services/airframe-engineering",
    icon: Wrench,
  },
  {
    title: "Electrical & Radio",
    description: "Aircraft electrical and radio installations.",
    href: "/services/electrical-radio",
    icon: RadioTower,
  },
  {
    title: "Instrument Calibration",
    description: "Pressure, temperature and electrical calibration.",
    href: "/services/instrument-calibration",
    icon: Gauge,
  },
  {
    title: "NDT & Corrosion Protection",
    description: "Inspection, testing and corrosion treatments.",
    href: "/services/ndt-corrosion",
    icon: ShieldCheck,
  },
];

const about = [
  { title: "Company Overview", href: "/about", icon: Building2 },
  { title: "Our History", href: "/about/history", icon: History },
  { title: "KSM Group", href: "/about/ksm-group", icon: Users },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState("");

  const closeMenu = () => {
    setMobileOpen(false);
    setActiveMenu("");
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top information bar */}
      <div className="bg-[#082B52] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-2 text-xs sm:flex-row sm:text-sm lg:px-8">
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#19B5E5]" />
            <span>Site 10 A, Charles Prince Airport, Harare, Zimbabwe</span>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={14} className="text-[#19B5E5]" />
            <span>Contact Aerotech for professional aviation services</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-slate-100">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Brand */}
          <Link
            href="/"
            onClick={closeMenu}
            className="group flex shrink-0 items-center gap-3"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#082B52] text-white shadow-md transition group-hover:bg-[#087FC1]">
              <Plane size={27} strokeWidth={1.8} />
            </div>

            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-[0.12em] text-[#082B52]">
                AEROTECH
              </span>
              <span className="mt-1 text-[10px] font-bold tracking-[0.35em] text-[#087FC1]">
                (PVT) LTD
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              href="/"
              className="text-sm font-semibold text-slate-700 transition hover:text-[#087FC1]"
            >
              Home
            </Link>

            {/* About dropdown */}
            <div className="group relative">
              <button
                type="button"
                className="flex items-center gap-1.5 py-8 text-sm font-semibold text-slate-700 transition hover:text-[#087FC1]"
              >
                About Us
                <ChevronDown
                  size={15}
                  className="transition group-hover:rotate-180"
                />
              </button>

              <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-xl border border-slate-100 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                {about.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50 hover:text-[#087FC1]"
                    >
                      <Icon size={19} className="text-[#087FC1]" />
                      {item.title}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Services mega menu */}
            <div className="group static">
              <button
                type="button"
                className="flex items-center gap-1.5 py-8 text-sm font-semibold text-slate-700 transition hover:text-[#087FC1]"
              >
                Our Services
                <ChevronDown
                  size={15}
                  className="transition group-hover:rotate-180"
                />
              </button>

              <div className="invisible absolute left-0 top-full w-full translate-y-2 border-t border-slate-100 bg-white opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                <div className="mx-auto grid max-w-7xl grid-cols-12 gap-10 px-8 py-10">
                  {/* Mega menu introduction */}
                  <div className="col-span-4 rounded-2xl bg-[#082B52] p-8 text-white">
                    <span className="text-xs font-bold tracking-[0.25em] text-[#19B5E5]">
                      OUR EXPERTISE
                    </span>

                    <h3 className="mt-4 text-3xl font-bold leading-tight">
                      Aviation engineering solutions.
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-blue-100">
                      Comprehensive aircraft maintenance, repair, overhaul and
                      instrument calibration services delivered with a
                      commitment to quality and safety.
                    </p>

                    <Link
                      href="/services"
                      className="mt-7 inline-flex items-center gap-2 rounded-lg bg-[#087FC1] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#19B5E5]"
                    >
                      Explore all services
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  {/* Services links */}
                  <div className="col-span-8 grid grid-cols-2 gap-3">
                    {services.map((item) => {
                      const Icon = item.icon;

                      return (
                        <Link
                          href={item.href}
                          key={item.href}
                          className="group/item flex gap-4 rounded-xl p-4 transition hover:bg-slate-50"
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#087FC1] transition group-hover/item:bg-[#087FC1] group-hover/item:text-white">
                            <Icon size={22} />
                          </div>

                          <div>
                            <h4 className="text-sm font-bold text-[#082B52] transition group-hover/item:text-[#087FC1]">
                              {item.title}
                            </h4>

                            <p className="mt-1 text-xs leading-5 text-slate-500">
                              {item.description}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="/quality-safety"
              className="text-sm font-semibold text-slate-700 transition hover:text-[#087FC1]"
            >
              Quality & Safety
            </Link>

            <Link
              href="/gallery"
              className="text-sm font-semibold text-slate-700 transition hover:text-[#087FC1]"
            >
              Gallery
            </Link>

            <Link
              href="/references"
              className="text-sm font-semibold text-slate-700 transition hover:text-[#087FC1]"
            >
              References
            </Link>
          </nav>

          {/* Contact button */}
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-lg bg-[#087FC1] px-5 py-3 text-sm font-bold text-white shadow-md shadow-blue-900/10 transition hover:-translate-y-0.5 hover:bg-[#082B52] lg:inline-flex"
          >
            Contact Us
            <ArrowUpRight size={16} />
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-lg bg-slate-100 text-[#082B52] transition hover:bg-blue-50 lg:hidden"
          >
            {mobileOpen ?
              <X size={24} />
            : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-100px)] overflow-y-auto border-t border-slate-100 bg-white px-5 py-5 shadow-xl lg:hidden">
          <nav className="flex flex-col">
            <Link
              href="/"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700 hover:text-[#087FC1]"
            >
              Home
            </Link>

            {/* Mobile About */}
            <button
              type="button"
              onClick={() =>
                setActiveMenu(activeMenu === "about" ? "" : "about")
              }
              className="flex items-center justify-between border-b border-slate-100 py-4 text-left text-sm font-semibold text-slate-700"
            >
              About Us
              <ChevronDown
                size={17}
                className={`transition ${activeMenu === "about" ? "rotate-180" : ""}`}
              />
            </button>

            {activeMenu === "about" && (
              <div className="bg-slate-50 px-4 py-2">
                {about.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-3 text-sm text-slate-600 transition hover:text-[#087FC1]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile Services */}
            <button
              type="button"
              onClick={() =>
                setActiveMenu(activeMenu === "services" ? "" : "services")
              }
              className="flex items-center justify-between border-b border-slate-100 py-4 text-left text-sm font-semibold text-slate-700"
            >
              Our Services
              <ChevronDown
                size={17}
                className={`transition ${activeMenu === "services" ? "rotate-180" : ""}`}
              />
            </button>

            {activeMenu === "services" && (
              <div className="bg-slate-50 px-4 py-2">
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block border-b border-slate-100 py-3 text-sm text-slate-600 transition last:border-0 hover:text-[#087FC1]"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/quality-safety"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700 hover:text-[#087FC1]"
            >
              Quality & Safety
            </Link>

            <Link
              href="/gallery"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700 hover:text-[#087FC1]"
            >
              Gallery
            </Link>

            <Link
              href="/references"
              onClick={closeMenu}
              className="border-b border-slate-100 py-4 text-sm font-semibold text-slate-700 hover:text-[#087FC1]"
            >
              References
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-5 flex items-center justify-center gap-2 rounded-lg bg-[#087FC1] px-5 py-4 text-sm font-bold text-white transition hover:bg-[#082B52]"
            >
              Contact Us
              <ArrowUpRight size={17} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
