import { Link } from "@/i18n/routing";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.admissions" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function AdmissionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.admissions");

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A2540] text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{t("heroTitle")}</h1>
          <p className="text-lg text-white/80 max-w-3xl mb-10">{t("heroBody")}</p>
          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl">
            {(["0", "1", "2"] as const).map((k) => (
              <div key={k} className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-3xl font-black text-[#F2C12C]">{t(`stats.${k}.value`)}</p>
                <p className="text-sm text-white/70 mt-1">{t(`stats.${k}.label`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-black text-[#0A2540] mb-6">{t("docsTitle")}</h2>
          <ul className="space-y-3 text-slate-700">
            {(["0","1","2","3","4"] as const).map((k) => (
              <li key={k} className="flex gap-3"><span className="text-[#E30613]">•</span>{t(`docs.${k}`)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-black text-[#0A2540] mb-6">{t("intakesTitle")}</h2>
          <div className="space-y-4">
            {(["0","1","2"] as const).map((k) => (
              <div key={k} className="border border-slate-100 rounded-2xl p-5 bg-slate-50">
                <p className="font-black text-[#0A2540]">{t(`intakes.${k}.session`)}</p>
                <p className="text-sm text-slate-600 mt-1">{t(`intakes.${k}.deadline`)} · {t(`intakes.${k}.status`)}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <h2 className="text-2xl font-black text-[#0A2540] mb-6">{t("howTitle")}</h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 list-none">
            {(["0","1","2","3"] as const).map((k, i) => (
              <li key={k} className="p-5 rounded-2xl border border-slate-100 bg-white shadow-sm">
                <span className="text-[#E30613] font-black text-sm">0{i + 1}</span>
                <p className="text-slate-700 mt-2 text-sm leading-relaxed">{t(`howSteps.${k}`)}</p>
              </li>
            ))}
          </ol>
          <Link href="/contact" className="inline-block mt-10 bg-[#0A2540] text-white px-8 py-4 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all">
            {t("applyCta")}
          </Link>
        </div>
      </section>
    </div>
  );
}
