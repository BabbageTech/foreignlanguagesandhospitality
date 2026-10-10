import CoreValues from "@/components/about/CoreValues";
import Facilities from "@/components/about/Facilities";
import FacultyGrid from "@/components/about/FacultyGrid";
import FounderBio from "@/components/about/FounderBio";
import MissionVision from "@/components/about/MissionVision";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.about");
  const tc = await getTranslations("pages.commonCta");

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-[#0A2540] pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/about-hero.jpg"
            alt=""
            fill
            priority
            className="object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-[#0A2540]/40 z-10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-4xl">
            <span className="text-secondary font-bold uppercase tracking-[0.3em] text-xs mb-6 block drop-shadow-md">
              {t("eyebrow")}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-xl">
              {t("title1")} <br />
              <span className="text-secondary">{t("title2")}</span>
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-medium drop-shadow-sm">
              {t("lead")}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <a
                href="#founder"
                className="w-full sm:w-auto bg-secondary text-[#0A2540] px-10 py-5 rounded-xl font-black text-xs uppercase tracking-widest text-center hover:bg-white transition-all"
              >
                {t("founderTitle")}
              </a>
              <Link
                href="/admissions"
                className="w-full sm:w-auto border-2 border-white/30 text-white px-10 py-5 rounded-xl font-black text-xs uppercase tracking-widest text-center hover:bg-white hover:text-primary transition-all"
              >
                {tc("applyNow")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MissionVision />
      <CoreValues />
      <Facilities />
      <FounderBio />
      <FacultyGrid />

      <section className="bg-[#0A2540] py-24 relative overflow-hidden text-center px-6">
        <h2 className="text-3xl md:text-5xl font-black text-white mb-4">{t("ctaTitle")}</h2>
        <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">{t("ctaBody")}</p>
        <Link
          href="/admissions"
          className="inline-flex bg-secondary text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all"
        >
          {tc("secureSpot")}
        </Link>
      </section>
    </div>
  );
}
