import { Link } from "@/i18n/routing";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.careers" });
  return { title: `${t("mastersTitle")} | IIFLHM`, description: t("mastersBody") };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.careers");
  const tc = await getTranslations("pages.commonCta");
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A2540] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/career-opportunities" className="text-xs font-black uppercase tracking-widest text-[#F2C12C] mb-6 inline-block">
            ← {t("heroTitle")}
          </Link>
          <h1 className="text-4xl md:text-5xl font-black mb-6">{t("mastersTitle")}</h1>
          <p className="text-white/75 text-lg max-w-2xl mb-10">{t("mastersBody")}</p>
          <Link href="/admissions" className="inline-flex bg-[#E30613] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest">
            {tc("applyNow")}
          </Link>
        </div>
      </section>
    </div>
  );
}
