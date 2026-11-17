"use client";

import SectionTitle from "@/components/common/SectionTitle";
import CategoryFilter from "@/components/gallery/CategoryFilter";
import GalleryGrid, { type GalleryItem } from "@/components/gallery/GalleryGrid";
import LightboxModal from "@/components/gallery/LightboxModal";
import { getGalleryCopy } from "@/i18n/gallery";
import { localeConfig, type Locale } from "@/i18n/config";
import { useCallback, useMemo, useState } from "react";

const sourceItems: Omit<GalleryItem, "title" | "categoryLabel">[] = [
  { id: 1, src: "/images/teacher-discussing.jpg", category: "Classes" },
  { id: 2, src: "/images/facilities/kitchens.jpg", category: "Facilities" },
  { id: 3, src: "/images/IMG-20260429-WA0025.jpg", category: "Students" },
  { id: 4, src: "/images/facilities/labs.jpg", category: "Facilities" },
  { id: 5, src: "/images/IMG-20260427-WA0007.jpg", category: "Events" },
  { id: 6, src: "/images/IMG-20260520-WA0033.jpg", category: "Events" },
];

export default function GalleryPageClient({ locale }: { locale: Locale }) {
  const copy = getGalleryCopy(locale);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const closeLightbox = useCallback(() => setSelectedItem(null), []);
  const categories = useMemo(() => ["All", ...Array.from(new Set(sourceItems.map(item => item.category)))], []);
  const allItems = useMemo(() => sourceItems.map(item => ({
    ...item,
    title: copy.itemTitles[item.id],
    categoryLabel: copy.categories[item.category],
  })), [copy]);
  const filteredItems = useMemo(() => activeCategory === "All" ? allItems : allItems.filter(item => item.category === activeCategory), [activeCategory, allItems]);

  return (
    <main className="min-h-screen bg-white">
      <section className="bg-navy-gradient py-24 text-center text-white">
        <h1 className="mb-4 text-5xl font-black">{copy.title.replace(" | IIFLHM", "")}</h1>
        <p className="mx-auto max-w-xl px-6 text-white/75">{copy.description}</p>
      </section>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionTitle eyebrow={copy.eyebrow} title={copy.sectionTitle} subtitle={copy.subtitle} />
        <div className="mt-10">
          <CategoryFilter categories={categories} active={activeCategory} onChange={setActiveCategory} labels={{ All: copy.all, ...copy.categories }} filterLabel={copy.filterLabel} />
        </div>
        <div className="mt-14">
          <GalleryGrid items={filteredItems} onSelect={setSelectedItem} emptyLabel={copy.empty} openItemLabel={copy.openItem} />
        </div>
      </section>
      <LightboxModal item={selectedItem} onClose={closeLightbox} closeLabel={copy.close} recordLabel={copy.recordLabel} dir={localeConfig[locale].dir} />
    </main>
  );
}
