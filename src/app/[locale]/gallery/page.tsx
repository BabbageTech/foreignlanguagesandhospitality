import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.gallery" });
  return { title: t("title"), description: t("subtitle") };
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.gallery");
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A2540] text-white pt-28 pb-16"><div className="max-w-7xl mx-auto px-6"><h1 className="text-4xl md:text-6xl font-black mb-4">{t("title")}</h1><p className="text-white/80 text-lg">{t("subtitle")}</p></div></section>
      <section className="max-w-5xl mx-auto px-6 py-16"><p className="text-slate-700 text-lg mb-6">{t("intro")}</p><p className="text-slate-500 text-sm">{t("empty")}</p></section>
    </div>
  );
}
