import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.academics" });
  return { title: t("title") };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.academics");
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-[#0A2540] mb-4">{t("title")}</h1>
      <p className="text-lg text-slate-600 mb-8">{t.has("subtitle") ? t("subtitle") : ""}</p>
      <Link href="/admissions" className="inline-block bg-[#0A2540] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all">
        Apply Now
      </Link>
    </div>
  );
}
