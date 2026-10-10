import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.studentVoices" });
  return { title: t("metaTitle"), description: t("heroLead") };
}

export default async function StudentVoicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.studentVoices");

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A2540] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">{t("heroTitle")}</h1>
          <p className="text-white/75 text-lg max-w-2xl">{t("heroLead")}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-black text-[#0A2540] mb-6">{t("alumniTitle")}</h2>
        <p className="text-slate-600">—</p>
      </section>
    </div>
  );
}
