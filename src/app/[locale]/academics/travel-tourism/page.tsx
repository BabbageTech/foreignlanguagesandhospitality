import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.academics" });
  return {
    title: `${t("tourism")} | IIFLHM`,
    description: t("metaDescription"),
  };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.academics");
  const tc = await getTranslations("pages.commonCta");

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/academics" className="text-xs font-black uppercase tracking-widest text-accent hover:text-white mb-6 inline-block">
            ← {tc("backToProgrammes")}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t("tourism")}</h1>
          <p className="text-white/70 text-lg max-w-2xl mb-8">{t("subtitle")}</p>
          <div className="flex flex-wrap gap-4">
            <Link href="/admissions" className="bg-secondary text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-primary transition-all">
              {tc("enrollToday")}
            </Link>
            <Link href="/contact" className="border border-white/30 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              {tc("inquire")}
            </Link>
            <a href="/docs/bronchure.pdf" className="border border-white/30 text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all">
              {tc("downloadBrochure")}
            </a>
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16 space-y-8">
        <p className="text-slate-600 text-lg leading-relaxed max-w-3xl">
          {t("tourism")} — {t("subtitle")}
        </p>
        <Link href="/contact" className="inline-flex text-secondary font-black text-xs uppercase tracking-widest">
          {tc("whatsappAsk")} →
        </Link>
      </section>
    </div>
  );
}
