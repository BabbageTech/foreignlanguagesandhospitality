import { Link } from "@/i18n/routing";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.admissions" });
  return { title: t("title") };
}

export default async function AdmissionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.admissions");
  const cta = await getTranslations("cta");

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-[#0A2540] mb-4">{t("title")}</h1>
      <p className="text-lg text-slate-600 mb-4">{t("subtitle")}</p>
      <p className="text-slate-700 leading-relaxed mb-10 max-w-3xl">{t("intro")}</p>
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
          <h2 className="font-black text-[#0A2540] mb-4">{t("stepsTitle")}</h2>
          <ol className="space-y-3 text-slate-700 text-sm list-decimal list-inside">
            <li>{t("steps.0")}</li>
            <li>{t("steps.1")}</li>
            <li>{t("steps.2")}</li>
          </ol>
        </div>
        <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100">
          <h2 className="font-black text-[#0A2540] mb-4">{t("requirementsTitle")}</h2>
          <ul className="space-y-3 text-slate-700 text-sm list-disc list-inside">
            <li>{t("requirements.0")}</li>
            <li>{t("requirements.1")}</li>
            <li>{t("requirements.2")}</li>
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        <Link href="/contact" className="inline-block bg-[#0A2540] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all">
          {cta("contactUs")}
        </Link>
        <Link href="/academics" className="inline-block border border-[#0A2540] text-[#0A2540] px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#0A2540] hover:text-white transition-all">
          {cta("viewPrograms")}
        </Link>
      </div>
    </div>
  );
}
