import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.careers" });
  return { title: t("metaTitle"), description: t("heroLead") };
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.careers");

  const paths = [
    { href: "/career-opportunities/apprenticeship", title: t("apprenticeshipTitle"), body: t("apprenticeshipBody") },
    { href: "/career-opportunities/undergraduate", title: t("undergradTitle"), body: t("undergradBody") },
    { href: "/career-opportunities/masters", title: t("mastersTitle"), body: t("mastersBody") },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A2540] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">{t("heroTitle")}</h1>
          <p className="text-white/75 text-lg max-w-2xl">{t("heroLead")}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {paths.map((p) => (
          <article key={p.href} className="border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all flex flex-col">
            <h2 className="text-xl font-black text-[#0A2540] mb-3">{p.title}</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 flex-1">{p.body}</p>
            <Link href={p.href} className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#E30613]">
              {t("exploreCta")} <ArrowRight className="w-4 h-4" />
            </Link>
          </article>
        ))}
      </section>
    </div>
  );
}
