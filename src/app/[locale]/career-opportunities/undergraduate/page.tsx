import { Link } from "@/i18n/routing";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.careers" });
  return { title: `${t("undergraduate")} | IIFLHM`, description: t("subtitle") };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.careers");
  const tc = await getTranslations("pages.commonCta");
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t("undergraduate")}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{t("subtitle")}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16">
        <Link href="/admissions" className="inline-flex bg-secondary text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest">
          {tc("applyNow")}
        </Link>
      </section>
    </div>
  );
}
