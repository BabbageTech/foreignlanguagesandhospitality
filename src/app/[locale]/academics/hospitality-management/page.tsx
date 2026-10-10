import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.academics" });
  const track = t.raw("tracks.hospitality") as { title?: string };
  return { title: `${track?.title ?? "hospitality"} | IIFLHM`, description: t("metaDescription") };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.academics");
  const tc = await getTranslations("pages.commonCta");
  const track = t.raw("tracks.hospitality") as {
    title: string; subtitle: string; desc: string; features: string[]; highlights: string[];
  };

  return (
    <div className="min-h-screen bg-white">
      <section className="relative bg-[#0A2540] text-white py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image src="/images/academics-hero.png" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <Link href="/academics" className="text-xs font-black uppercase tracking-widest text-[#F2C12C] hover:text-white mb-6 inline-block">
            ← {tc("backToProgrammes")}
          </Link>
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50 mb-3">{track?.subtitle}</p>
          <h1 className="text-4xl md:text-6xl font-black mb-6 tracking-tight">{track?.title}</h1>
          <p className="text-white/75 text-lg max-w-2xl mb-10 leading-relaxed">{track?.desc}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/admissions" className="bg-[#E30613] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all inline-flex items-center gap-2">
              {tc("enrollToday")} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="border border-white/30 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              {tc("inquire")}
            </Link>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <ul className="space-y-3 mb-10 max-w-2xl">
          {(track?.features ?? []).map((f) => (
            <li key={f} className="flex gap-3 text-slate-700"><span className="text-[#E30613] font-black">✓</span>{f}</li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {(track?.highlights ?? []).map((h) => (
            <span key={h} className="text-xs font-black bg-slate-100 text-[#0A2540] px-3 py-1.5 rounded-full uppercase tracking-wider">{h}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
