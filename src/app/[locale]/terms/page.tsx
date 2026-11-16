import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.terms" });
  return { title: t("title") };
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.terms");
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A2540] text-white pt-28 pb-16"><div className="max-w-7xl mx-auto px-6"><h1 className="text-4xl font-black">{t("title")}</h1></div></section>
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-6">
        <p className="text-lg text-slate-600">{t("intro")}</p>
        <p className="text-slate-700 leading-relaxed">{t("body")}</p>
      </section>
    </div>
  );
}
