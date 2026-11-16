import { Link } from "@/i18n/routing";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
type Props = { params: Promise<{ locale: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.hospitality-management" });
  return { title: t("title") };
}
export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.hospitality-management");
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A2540] text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black">{t("title")}</h1>
        </div>
      </section>
      <section className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-slate-700 text-lg leading-relaxed mb-8">{t("intro")}</p>
        <ul className="space-y-3 text-slate-700 mb-10">
          <li className="flex gap-3"><span className="text-[#E30613]">•</span>{t("bullets.0")}</li>
          <li className="flex gap-3"><span className="text-[#E30613]">•</span>{t("bullets.1")}</li>
          <li className="flex gap-3"><span className="text-[#E30613]">•</span>{t("bullets.2")}</li>
        </ul>
        <Link href="/admissions" className="inline-block bg-[#0A2540] text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all">{t("cta")}</Link>
      </section>
    </div>
  );
}
