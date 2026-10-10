import AdmissionForm from "@/components/admissions/AdmissionForm";
import { Link } from "@/i18n/routing";
import { ArrowRight, CheckCircle2, FileText, IdCard, MessageSquare } from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.admissions" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function AdmissionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.admissions");

  const requirements = [
    { icon: <FileText className="w-5 h-5" />, title: t("req1Title"), body: t("req1Body") },
    { icon: <IdCard className="w-5 h-5" />, title: t("req2Title"), body: t("req2Body") },
    { icon: <MessageSquare className="w-5 h-5" />, title: t("req3Title"), body: t("req3Body") },
  ];
  const steps = [
    { n: "01", title: t("step1"), body: t("step1Body") },
    { n: "02", title: t("step2"), body: t("step2Body") },
    { n: "03", title: t("step3"), body: t("step3Body") },
    { n: "04", title: t("step4"), body: t("step4Body") },
  ];
  const why = [t("why1"), t("why2"), t("why3"), t("why4")];

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <Image src="/images/admissions/hero-bg.jpg" alt="" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-[#0A2540]/75" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 pt-32 w-full">
          <span className="text-[11px] font-black uppercase tracking-[0.3em] text-[#F2C12C] mb-4 block">
            {t("heroEyebrow")}
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-6 max-w-3xl">
            {t("heroTitle")}
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mb-8">{t("heroLead")}</p>
          <a
            href="#application-form"
            className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all"
          >
            {t("applyCta")} <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-[#0A2540] mb-3">{t("requirementsTitle")}</h2>
        <p className="text-slate-600 mb-10 max-w-2xl">{t("requirementsLead")}</p>
        <div className="grid md:grid-cols-3 gap-6">
          {requirements.map((r) => (
            <div key={r.title} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
              <div className="text-[#E30613] mb-4">{r.icon}</div>
              <h3 className="font-black text-[#0A2540] mb-2">{r.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{r.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-black text-[#0A2540] mb-12">{t("processTitle")}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.n}>
                <span className="text-[#E30613] font-black text-sm tracking-widest">{s.n}</span>
                <h3 className="font-black text-[#0A2540] mt-2 mb-2">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-black text-[#0A2540] mb-8">{t("whyTitle")}</h2>
        <ul className="grid md:grid-cols-2 gap-4 mb-16">
          {why.map((item) => (
            <li key={item} className="flex gap-3 items-start bg-white border border-slate-100 rounded-xl p-5">
              <CheckCircle2 className="w-5 h-5 text-[#E30613] shrink-0 mt-0.5" />
              <span className="text-slate-700 font-medium">{item}</span>
            </li>
          ))}
        </ul>

        <div id="application-form" className="scroll-mt-28">
          <h2 className="text-3xl font-black text-[#0A2540] mb-3">{t("formTitle")}</h2>
          <p className="text-slate-600 mb-10 max-w-2xl">{t("formLead")}</p>
          <AdmissionForm />
        </div>
      </section>
    </div>
  );
}
