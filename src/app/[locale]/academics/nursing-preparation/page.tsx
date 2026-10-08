import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.academics" });
  return { title: `${t("nursing")} | IIFLHM`, description: t("metaDescription") };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.academics");
  const tc = await getTranslations("pages.commonCta");
  const track = t.raw("tracks.nursing") as { title: string; desc: string; features: string[]; highlights: string[] };

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A2540] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/academics" className="text-xs font-black uppercase tracking-widest text-[#F2C12C] hover:text-white mb-6 inline-block">
            ← {tc("backToProgrammes")}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{track?.title ?? t("nursing")}</h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8">{track?.desc}</p>
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
        <ul className="space-y-3 mb-10">
          {(track?.features ?? []).map((f) => (
            <li key={f} className="flex gap-2 text-slate-600">
              <span className="text-[#E30613] font-black">✓</span> {f}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {(track?.highlights ?? []).map((h) => (
            <span key={h} className="text-xs font-black bg-slate-100 text-[#0A2540] px-3 py-1.5 rounded-full">{h}</span>
          ))}
        </div>
      </section>
    </div>
  );
}
