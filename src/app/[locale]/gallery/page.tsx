"use client";

import SectionTitle from "@/components/common/SectionTitle";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import GalleryGrid, { GalleryItem } from "@/components/gallery/GalleryGrid";
import LightboxModal from "@/components/gallery/LightboxModal";
import { useMemo, useState } from "react";

const allItems: GalleryItem[] = [
  {
    id: 1,
    src: "/images/gallery/classroom.jpg",
    title: "Language Class Session",
    category: "Classes",
  },
  {
    id: 2,
    src: "/images/gallery/kitchen.jpg",
    title: "Hospitality Training Kitchen",
    category: "Facilities",
  },
  {
    id: 3,
    src: "/images/gallery/students.jpg",
    title: "Students Group",
    category: "Students",
  },
  {
    id: 4,
    src: "/images/gallery/lab.jpg",
    title: "Language Lab",
    category: "Facilities",
  },
  {
    id: 5,
    src: "/images/gallery/event.jpg",
    title: "Cultural Event",
    category: "Events",
  },
  {
    id: 6,
    src: "/images/gallery/graduation.jpg",
    title: "Graduation Ceremony",
    category: "Events",
  },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Categories
  const categories = useMemo(() => {
    const unique = Array.from(new Set(allItems.map((i) => i.category)));
    return ["All", ...unique];
  }, []);

  // Filter logic
  const filteredItems = useMemo(() => {
    if (activeCategory === "All") return allItems;
    return allItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-white">

      {/* HERO */}
      <div className="bg-navy-gradient text-white py-24 text-center">
        <h1 className="text-5xl font-black mb-4">Gallery</h1>
        <p className="text-white/70 max-w-xl mx-auto">
          Explore our campus, training facilities, and student life.
        </p>
      </div>

      {/* CONTENT */}
      <section className="py-20 max-w-7xl mx-auto px-6">

        <SectionTitle
          eyebrow="Our Moments"
          title="Campus & Student Life"
          subtitle="A glimpse into learning, growth, and experiences at IIFLHM"
        />

        {/* FILTER */}
        <div className="mt-10">
          <CategoryFilter
            categories={categories}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>

        {/* GRID */}
        <div className="mt-14">
          <GalleryGrid
            items={filteredItems}
            onSelect={setSelectedItem}
          />
        </div>
      </section>

      {/* MODAL */}
      <LightboxModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />
    </div>
  );
}