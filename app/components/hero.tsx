"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Plane,
  Wrench,
  Settings,
  Gauge,
  ShieldCheck,
  Award,
  Clock,
  CheckCircle2,
} from "lucide-react";

const slides = [
  {
    eyebrow: "AIRCRAFT MAINTENANCE & ENGINEERING",
    title: "In Aviation,",
    highlight: "Reliability is Everything.",
    subtitle: "Your Trusted Partner in Airworthiness.",
    description:
      "CAAZ-approved aircraft maintenance, repair and rebuilding capability for general aviation aircraft up to 5,700 kg maximum all-up weight.",
    image: "/images/aviation-hero.jpg",
    primary: "Explore Aircraft Maintenance",
    primaryLink: "/services/aircraft-maintenance",
    secondary: "Speak to Our Team",
    secondaryLink: "/contact",
    tag: "Aircraft Maintenance",
    number: "01",
  },
  {
    eyebrow: "ENGINE & PROPELLER SERVICES",
    title: "Keeping Your Aircraft",
    highlight: "Powered with Confidence.",
    subtitle: "Engine & Propeller Maintenance and Overhauls.",
    description:
      "Specialist support for Lycoming, Continental and PT6A engine capabilities, together with Hartzell and McCauley propeller services.",
    image: "/images/aviation-engine.jpg",
    primary: "Explore Engine Services",
    primaryLink: "/services/engine-propeller",
    secondary: "Make an Enquiry",
    secondaryLink: "/contact",
    tag: "Engine & Propeller",
    number: "02",
  },
  {
    eyebrow: "SPECIALIST AVIATION SUPPORT",
    title: "Everything Aviation.",
    highlight: "Under One Roof.",
    subtitle: "Multiple Technical Capabilities. One Trusted Partner.",
    description:
      "From airframe engineering and electrical systems to NDT, electroplating, instrument support and specialist engineering services.",
    image: "/images/aviation-engineering.jpg",
    primary: "Discover Our Services",
    primaryLink: "/services",
    secondary: "Contact Aerotech",
    secondaryLink: "/contact",
    tag: "One-Stop Aviation Support",
    number: "03",
  },
  {
    eyebrow: "INSTRUMENT TESTING & CALIBRATION",
    title: "Precision in Every",
    highlight: "Measurement.",
    subtitle: "Specialist Calibration and Technical Support.",
    description:
      "Dedicated pressure, temperature, electrical and standard measurement instrument testing and calibration capabilities.",
    image: "/images/aviation-instruments.jpg",
    primary: "Explore Calibration",
    primaryLink: "/services/instrument-calibration",
    secondary: "Request an Enquiry",
    secondaryLink: "/contact",
    tag: "Instrument Calibration",
    number: "04",
  },
];

const capabilities = [
  { icon: Wrench, label: "Aircraft Maintenance" },
  { icon: Settings, label: "Engine & Propeller" },
  { icon: Gauge, label: "Calibration" },
  { icon: ShieldCheck, label: "Specialist Support" },
];

const trustPoints = [
  {
    icon: Award,
    value: "50+ Years",
    label: "Aviation Experience",
  },
  {
    icon: ShieldCheck,
    value: "CAAZ Approved",
    label: "Maintenance Organisation",
  },
  {
    icon: Plane,
    value: "5,700 kg",
    label: "Maximum Aircraft Weight",
  },
  {
    icon: CheckCircle2,
    value: "One-Stop",
    label: "Aviation Support",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative isolate overflow-hidden bg-[#061D38]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Main hero slideshow */}
      <div className="relative h-[650px] sm:h-[610px] lg:h-[620px]">
        {/* Background images */}
        {slides.map((slide, index) => (
          <div
            key={slide.number}
            className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
              current === index ? "opacity-100" : (
                "pointer-events-none opacity-0"
              )
            }`}
            aria-hidden={current !== index}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={index === 0}
              sizes="100vw"
              className="object-cover object-center"
            />
          </div>
        ))}

        {/* Image overlays */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#061D38] via-[#082B52]/95 to-[#082B52]/35" />
        <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#061D38]/95 via-transparent to-[#061D38]/20" />

        {/* Decorative elements */}
        <div className="pointer-events-none absolute -right-40 top-16 z-[2] h-[520px] w-[520px] rounded-full border border-white/10" />
        <div className="pointer-events-none absolute -right-24 top-32 z-[2] h-[380px] w-[380px] rounded-full border border-white/10" />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 pb-28 pt-8 lg:px-8">
          {slides.map((slide, index) => (
            <div
              key={slide.number}
              className={`absolute inset-x-5 top-[45%] max-w-3xl -translate-y-1/2 transition-all duration-1000 ease-in-out lg:left-8 lg:right-auto ${
                current === index ?
                  "translate-x-0 opacity-100"
                : "pointer-events-none translate-x-8 opacity-0"
              }`}
              aria-hidden={current !== index}
            >
              <div className="flex flex-col items-start">
                {/* Eyebrow */}
                <div className="mb-5 inline-flex items-center gap-3 rounded-full border border-[#19B5E5]/40 bg-[#087FC1]/20 px-4 py-2 backdrop-blur-sm">
                  <span className="h-2 w-2 rounded-full bg-[#19B5E5] shadow-[0_0_12px_#19B5E5]" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-100 sm:text-xs">
                    {slide.eyebrow}
                  </span>
                </div>

                {/* Heading */}
                <h1 className="max-w-3xl text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-[64px]">
                  {slide.title}
                  <span className="block text-[#19B5E5]">
                    {slide.highlight}
                  </span>
                  <span className="mt-3 block text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                    {slide.subtitle}
                  </span>
                </h1>

                {/* Description */}
                <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base lg:text-lg">
                  {slide.description}
                </p>

                {/* Brand promise */}
                <div className="mt-5 flex items-center gap-2 text-xs font-semibold text-blue-100 sm:text-sm">
                  <ShieldCheck size={17} className="shrink-0 text-[#19B5E5]" />
                  Your Trusted Partner in Airworthiness.
                </div>

                {/* CTA buttons */}
                <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                  <Link
                    href={slide.primaryLink}
                    tabIndex={current === index ? 0 : -1}
                    className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#087FC1] px-6 py-3.5 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#19B5E5]"
                  >
                    {slide.primary}
                    <ArrowRight
                      size={18}
                      className="transition group-hover:translate-x-1"
                    />
                  </Link>

                  <Link
                    href={slide.secondaryLink}
                    tabIndex={current === index ? 0 : -1}
                    className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/10 px-6 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#082B52]"
                  >
                    {slide.secondary}
                    <ArrowUpRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* Slide controls */}
          <div className="absolute bottom-8 left-5 right-5 flex items-center justify-between lg:left-8 lg:right-8">
            <div className="flex items-center gap-4">
              <span className="text-2xl font-black text-white">
                {slides[current].number}
              </span>
              <div className="h-px w-10 bg-[#19B5E5]" />
              <span className="max-w-[160px] text-[10px] font-semibold uppercase tracking-widest text-slate-300 sm:max-w-none sm:text-xs">
                {slides[current].tag}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#082B52]"
              >
                <ArrowLeft size={18} />
              </button>

              <button
                type="button"
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-white transition hover:bg-white hover:text-[#082B52]"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom capability strip */}
        <div className="absolute bottom-0 left-0 z-10 w-full border-t border-white/10 bg-[#061D38]/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-3 sm:flex-row sm:items-center lg:px-8">
            <div className="flex items-center gap-3 text-xs text-slate-300">
              <Plane size={18} className="shrink-0 text-[#19B5E5]" />
              <span>Charles Prince Airport, Harare, Zimbabwe</span>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
              {capabilities.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 text-[11px] font-semibold text-white"
                  >
                    <Icon size={15} className="text-[#19B5E5]" />
                    {item.label}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Trust and experience strip */}
      <div className="relative z-20 border-t border-white/10 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-slate-200 px-5 sm:grid-cols-4 sm:divide-y-0 lg:px-8">
          {trustPoints.map((point) => {
            const Icon = point.icon;

            return (
              <div
                key={point.label}
                className="flex items-center gap-3 px-3 py-5 sm:justify-center sm:px-4 lg:py-7"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-[#087FC1]">
                  <Icon size={21} />
                </div>

                <div>
                  <p className="text-sm font-black text-[#082B52] sm:text-base">
                    {point.value}
                  </p>
                  <p className="mt-1 text-[10px] font-medium leading-4 text-slate-500 sm:text-xs">
                    {point.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
