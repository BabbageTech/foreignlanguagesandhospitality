import { Link } from "@/i18n/routing";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.german-language" });
  return { title: t("title") };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.german-language");

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-[#0A2540] mb-6">{t("title")}</h1>
      <p className="text-slate-700 leading-relaxed mb-8 max-w-3xl">{t("intro")}</p>
      <ul className="space-y-3 text-slate-700 mb-10 list-disc list-inside">
        <li>{t("bullets.0")}</li>
        <li>{t("bullets.1")}</li>
        <li>{t("bullets.2")}</li>
      </ul>
      <Link href="/admissions" className="inline-block bg-[#0A2540] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all">
        {t("cta")}
      </Link>
    </div>
  );
}
