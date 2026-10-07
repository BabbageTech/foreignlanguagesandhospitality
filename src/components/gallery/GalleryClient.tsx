"use client";

import CategoryFilter from "@/components/gallery/CategoryFilter";
import GalleryGrid, { GalleryItem } from "@/components/gallery/GalleryGrid";
import LightboxModal from "@/components/gallery/LightboxModal";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

const GALLERY_META: Omit<GalleryItem, "title" | "category">[] = [
  { id: 1, src: "/images/gallery/classroom.jpg" },
  { id: 2, src: "/images/gallery/kitchen.jpg" },
  { id: 3, src: "/images/gallery/students.jpg" },
  { id: 4, src: "/images/gallery/lab.jpg" },
  { id: 5, src: "/images/gallery/event.jpg" },
  { id: 6, src: "/images/gallery/graduation.jpg" },
];

const CATEGORY_KEYS = ["classes", "facilities", "students", "events"] as const;
const ITEM_CATEGORY: Record<number, (typeof CATEGORY_KEYS)[number]> = {
  1: "classes",
  2: "facilities",
  3: "students",
  4: "facilities",
  5: "events",
  6: "events",
};

export default function GalleryClient() {
  const t = useTranslations("pages.gallery");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const allItems: GalleryItem[] = useMemo(
    () =>
      GALLERY_META.map((m) => {
        const catKey = ITEM_CATEGORY[m.id] ?? "events";
        return {
          ...m,
          title: t(`items.${m.id}.title` as "items.1.title"),
          category: t(`categories.${catKey}` as "categories.classes"),
        };
      }),
    [t]
  );

  const categories = useMemo(() => {
    const labels = [
      t("categories.all"),
      ...CATEGORY_KEYS.map((k) => t(`categories.${k}` as "categories.classes")),
    ];
    return labels;
  }, [t]);

  const filteredItems = useMemo(() => {
    if (activeCategory === "all" || activeCategory === t("categories.all")) {
      return allItems;
    }
    return allItems.filter((item) => item.category === activeCategory);
  }, [activeCategory, allItems, t]);

  return (
    <section className="py-16 max-w-7xl mx-auto px-6">
      <div className="mb-10">
        <CategoryFilter
          categories={categories}
          active={
            activeCategory === "all" ? t("categories.all") : activeCategory
          }
          onChange={(cat) => {
            if (cat === t("categories.all")) setActiveCategory("all");
            else setActiveCategory(cat);
          }}
        />
      </div>
      <GalleryGrid items={filteredItems} onSelect={setSelectedItem} />
      <LightboxModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
