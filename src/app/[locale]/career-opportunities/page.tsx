import { Link } from "@/i18n/routing";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

const CARDS = [
  { href: "/career-opportunities/undergraduate", key: "undergraduate" },
  { href: "/career-opportunities/masters", key: "masters" },
  { href: "/career-opportunities/apprenticeship", key: "apprenticeship" },
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.careers" });
  return { title: t("title") };
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.careers");
  const cta = await getTranslations("cta");

  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-[#0A2540] mb-4">{t("title")}</h1>
      <p className="text-lg text-slate-600 mb-4">{t("subtitle")}</p>
      <p className="text-slate-700 leading-relaxed mb-12 max-w-3xl">{t("intro")}</p>
      <div className="grid md:grid-cols-3 gap-6">
        {CARDS.map((c) => (
          <Link key={c.href} href={c.href} className="block p-6 rounded-3xl border border-slate-100 bg-white shadow-sm hover:shadow-xl transition-all">
            <h2 className="font-black text-[#0A2540] text-lg mb-2">{t(`cards.${c.key}.title`)}</h2>
            <p className="text-sm text-slate-600 mb-4">{t(`cards.${c.key}.desc`)}</p>
            <span className="text-xs font-bold uppercase tracking-wider text-[#E30613]">{cta("learnMore")}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
