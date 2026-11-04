"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Expand, Images } from "lucide-react";

const categories = [
  "All",
  "Aircraft Maintenance",
  "Engine & Propeller",
  "Instrument Calibration",
  "Workshops & Facilities",
  "Team & Operations",
];

const galleryItems = [
  {
    title: "Aircraft Maintenance",
    category: "Aircraft Maintenance",
    image: "/images/gallery/aircraft-maintenance-1.jpg",
    description: "Aircraft maintenance and engineering activities.",
  },
  {
    title: "Aircraft Engineering",
    category: "Aircraft Maintenance",
    image: "/images/gallery/aircraft-maintenance-2.jpg",
    description: "General aviation aircraft engineering.",
  },
  {
    title: "Aircraft Refurbishment",
    category: "Aircraft Maintenance",
    image: "/images/gallery/aircraft-refurbishment.jpg",
    description: "Aircraft refurbishment and restoration work.",
  },
  {
    title: "Engine Overhaul",
    category: "Engine & Propeller",
    image: "/images/gallery/engine-overhaul-1.jpg",
    description: "Piston engine and component overhaul activities.",
  },
  {
    title: "Engine Components",
    category: "Engine & Propeller",
    image: "/images/gallery/engine-components.jpg",
    description: "Aircraft engine components and engineering work.",
  },
  {
    title: "Propeller Services",
    category: "Engine & Propeller",
    image: "/images/gallery/propeller-services.jpg",
    description: "Aircraft propeller overhaul services.",
  },
  {
    title: "Instrument Testing",
    category: "Instrument Calibration",
    image: "/images/gallery/instrument-testing.jpg",
    description: "Instrument testing and calibration activities.",
  },
  {
    title: "Measurement Equipment",
    category: "Instrument Calibration",
    image: "/images/gallery/measurement-equipment.jpg",
    description: "Precision measurement and testing equipment.",
  },
  {
    title: "Technical Workshop",
    category: "Workshops & Facilities",
    image: "/images/gallery/technical-workshop.jpg",
    description: "Aviation engineering workshop environment.",
  },
  {
    title: "Engineering Facilities",
    category: "Workshops & Facilities",
    image: "/images/gallery/engineering-facilities.jpg",
    description: "Technical facilities and engineering workspace.",
  },
  {
    title: "Technical Operations",
    category: "Team & Operations",
    image: "/images/gallery/technical-operations.jpg",
    description: "Technical work and operational activities.",
  },
  {
    title: "Aviation Team",
    category: "Team & Operations",
    image: "/images/gallery/aviation-team.jpg",
    description: "People and teamwork behind aviation services.",
  },
];

export default function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All" ? galleryItems : (
      galleryItems.filter((item) => item.category === activeCategory)
    );

  const selectedItem =
    selectedIndex !== null ? filteredItems[selectedIndex] : null;

  const showPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      (selectedIndex - 1 + filteredItems.length) % filteredItems.length,
    );
  };

  const showNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex((selectedIndex + 1) % filteredItems.length);
  };

  return (
    <section id="gallery" className="bg-[#F5F8FC] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-[#087FC1]">
            Explore Our Gallery
          </span>

          <h2 className="mt-4 text-3xl font-bold text-[#082B52] sm:text-4xl">
            A Look Inside Aerotech
          </h2>

          <p className="mt-5 leading-8 text-slate-600">
            Browse our gallery by service area and explore the different aspects
            of aviation engineering and technical operations.
          </p>
        </div>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setSelectedIndex(null);
              }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeCategory === category ?
                  "bg-[#082B52] text-white shadow-lg shadow-[#082B52]/15"
                : "border border-slate-200 bg-white text-slate-600 hover:border-cyan-400 hover:text-[#087FC1]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mb-6 mt-10 flex items-center justify-between">
          <p className="text-sm font-medium text-slate-500">
            Showing {filteredItems.length} photographs
          </p>

          <div className="flex items-center gap-2 text-sm text-[#087FC1]">
            <Images size={17} />
            <span>Photo collection</span>
          </div>
        </div>

        {/* Image grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, index) => (
            <button
              key={item.image}
              type="button"
              onClick={() => setSelectedIndex(index)}
              className="group relative overflow-hidden rounded-2xl bg-white text-left shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-200">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#061D38]/85 via-transparent to-transparent opacity-80 transition group-hover:opacity-100" />

                <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#082B52] opacity-0 shadow-lg transition group-hover:opacity-100">
                  <Expand size={18} />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
                    {item.category}
                  </span>

                  <h3 className="mt-2 text-xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-200">
                    {item.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Image preview */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020B16]/95 p-4 sm:p-8"
            onClick={() => setSelectedIndex(null)}
          >
            <button
              type="button"
              aria-label="Close image preview"
              onClick={() => setSelectedIndex(null)}
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X size={24} />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                showPrevious();
              }}
              className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:left-8"
            >
              <ChevronLeft size={26} />
            </button>

            <div
              className="relative w-full max-w-5xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative aspect-[4/3] max-h-[75vh] w-full overflow-hidden rounded-xl bg-black">
                <Image
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-5 text-center">
                <p className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  {selectedItem.category}
                </p>

                <h3 className="mt-2 text-2xl font-bold text-white">
                  {selectedItem.title}
                </h3>

                <p className="mt-2 text-sm text-slate-300">
                  {selectedItem.description}
                </p>

                <p className="mt-3 text-xs text-slate-400">
                  {selectedIndex! + 1} of {filteredItems.length}
                </p>
              </div>
            </div>

            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                showNext();
              }}
              className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 sm:right-8"
            >
              <ChevronRight size={26} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
