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
} from "lucide-react";

const slides = [
  {
    eyebrow: "AIRCRAFT MAINTENANCE & ENGINEERING",
    title: "Keeping You",
    highlight: "Flying Safely.",
    subtitle: "Engineering with Precision.",
    description:
      "Comprehensive aircraft maintenance, repair and rebuilding services for general aviation aircraft with a Maximum All-up Weight of 5,700 kg.",
    image: "/images/aviation-hero.jpg",
    primary: "Explore Maintenance",
    primaryLink: "/services/aircraft-maintenance",
    secondary: "Contact Our Team",
    secondaryLink: "/contact",
    tag: "Aircraft Maintenance",
    number: "01",
  },
  {
    eyebrow: "ENGINE & PROPELLER OVERHAULS",
    title: "Powering Every",
    highlight: "Journey.",
    subtitle: "Expertise You Can Trust.",
    description:
      "Specialised piston engine and component overhauls, propeller services and PT6 engine component repairs, delivered with precision and care.",
    image: "/images/aviation-engine.jpg",
    primary: "Explore Engine Services",
    primaryLink: "/services/engine-propeller",
    secondary: "Talk to Our Team",
    secondaryLink: "/contact",
    tag: "Engine & Propeller",
    number: "02",
  },
  {
    eyebrow: "INSTRUMENT TESTING & CALIBRATION",
    title: "Precision in",
    highlight: "Every Reading.",
    subtitle: "Confidence in Every Measurement.",
    description:
      "Testing and certification of pressure, temperature, electrical and standard measurement instruments to support dependable and accurate operations.",
    image: "/images/aviation-instruments.jpg",
    primary: "Explore Calibration",
    primaryLink: "/services/instrument-calibration",
    secondary: "Make an Enquiry",
    secondaryLink: "/contact",
    tag: "Instrument Calibration",
    number: "03",
  },
  {
    eyebrow: "COMPLETE AVIATION ENGINEERING",
    title: "Built on Skill.",
    highlight: "Driven by Quality.",
    subtitle: "Your One-Stop Aviation Partner.",
    description:
      "From airframe and sheet metal repairs to electrical installations, aircraft refurbishment, welding, machining, NDT and corrosion protection.",
    image: "/images/aviation-engineering.jpg",
    primary: "Discover Our Expertise",
    primaryLink: "/services",
    secondary: "Get in Touch",
    secondaryLink: "/contact",
    tag: "Aviation Engineering",
    number: "04",
  },
];

const capabilities = [
  { icon: Wrench, label: "Aircraft Maintenance" },
  { icon: Settings, label: "Engine & Propeller" },
  { icon: Gauge, label: "Instrument Calibration" },
  { icon: ShieldCheck, label: "Quality & Safety" },
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
    }, 6000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="relative isolate h-[600px] overflow-hidden bg-[#061D38] sm:h-[540px] lg:h-[560px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Background slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.number}
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out ${
            current === index ? "opacity-100" : "pointer-events-none opacity-0"
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

      {/* Background overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#061D38] via-[#082B52]/90 to-[#082B52]/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#061D38]/95 via-transparent to-[#061D38]/20" />

      {/* Decorative circles */}
      <div className="pointer-events-none absolute -right-40 top-20 z-[2] h-[500px] w-[500px] rounded-full border border-white/10" />
      <div className="pointer-events-none absolute -right-24 top-36 z-[2] h-[360px] w-[360px] rounded-full border border-white/10" />

      {/* Slide content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-5 pb-24 pt-6 lg:px-8 lg:pb-20">
        {slides.map((slide, index) => (
          <div
            key={slide.number}
            className={`absolute inset-x-5 top-[46%] max-w-3xl -translate-y-1/2 transition-all duration-1000 ease-in-out lg:left-8 lg:right-auto ${
              current === index ?
                "translate-x-0 opacity-100"
              : "pointer-events-none translate-x-8 opacity-0"
            }`}
            aria-hidden={current !== index}
          >
            <div className="flex flex-col items-start">
              {/* Eyebrow */}
              <div className="mb-4 inline-flex items-center gap-3 rounded-full border border-[#19B5E5]/40 bg-[#087FC1]/20 px-4 py-2 backdrop-blur-sm">
                <span className="h-2 w-2 rounded-full bg-[#19B5E5] shadow-[0_0_12px_#19B5E5]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-100 sm:text-xs">
                  {slide.eyebrow}
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl">
                {slide.title}
                <span className="block text-[#19B5E5]">{slide.highlight}</span>
                <span className="mt-2 block text-xl font-semibold text-white sm:text-2xl lg:text-3xl">
                  {slide.subtitle}
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base lg:text-lg">
                {slide.description}
              </p>

              {/* Buttons */}
              <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={slide.primaryLink}
                  tabIndex={current === index ? 0 : -1}
                  className="group inline-flex items-center justify-center gap-3 rounded-lg bg-[#087FC1] px-6 py-3 text-sm font-bold text-white shadow-xl transition hover:-translate-y-1 hover:bg-[#19B5E5]"
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
                  className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:bg-white hover:text-[#082B52]"
                >
                  {slide.secondary}
                  <ArrowUpRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        ))}

        {/* Slide navigation */}
        <div className="absolute bottom-28 left-5 right-5 flex items-center justify-between lg:left-8 lg:right-8">
          <div className="flex items-center gap-4">
            <span className="text-2xl font-black text-white">
              {slides[current].number}
            </span>
            <div className="h-px w-10 bg-[#19B5E5]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-slate-300">
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
      <div className="absolute bottom-0 left-0 z-10  w-full border-t  border-white/10 bg-[#061D38]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl flex-col  justify-between gap-3 px-5 py-3 sm:flex-row sm:items-center lg:px-8">
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
    </section>
  );
}
