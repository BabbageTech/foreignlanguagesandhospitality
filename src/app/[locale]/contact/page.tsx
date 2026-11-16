"use client";

import { CONTACT_INFO } from "@/lib/constants";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("pages.contact");

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A2540] text-white pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{t("title")}</h1>
          <p className="text-lg text-white/80 max-w-3xl">{t("subtitle")}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div className="space-y-6">
          <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50">
            <h2 className="font-black text-[#0A2540] mb-3">{t("official")}</h2>
            {(CONTACT_INFO.emails || []).map((e: string) => (
              <p key={e} className="text-slate-700 text-sm"><a className="hover:text-[#E30613]" href={`mailto:${e}`}>{e}</a></p>
            ))}
          </div>
          <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50">
            <h2 className="font-black text-[#0A2540] mb-3">{t("hotlines")}</h2>
            {(CONTACT_INFO.phones || []).map((p: string) => (
              <p key={p} className="text-slate-700 text-sm">{p}</p>
            ))}
          </div>
          <div className="p-6 rounded-3xl border border-slate-100 bg-slate-50">
            <h2 className="font-black text-[#0A2540] mb-3">{t("campus")}</h2>
            <p className="text-slate-700 text-sm">{t("address")}</p>
            <p className="text-slate-500 text-sm mt-1">{t("hours")}</p>
          </div>
        </div>
        <form className="space-y-4 p-6 rounded-3xl border border-slate-100 bg-slate-50" onSubmit={(e) => e.preventDefault()}>
          <h2 className="font-black text-[#0A2540] mb-2">{t("formTitle")}</h2>
          <div>
            <label className="block text-sm font-bold text-[#0A2540] mb-1">{t("name")}</label>
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" name="name" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0A2540] mb-1">{t("email")}</label>
            <input className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm" type="email" name="email" />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0A2540] mb-1">{t("message")}</label>
            <textarea className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm min-h-[120px]" name="message" />
          </div>
          <button type="submit" className="bg-[#0A2540] text-white px-6 py-3 rounded-full text-xs font-black uppercase tracking-widest hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all">
            {t("submit")}
          </button>
        </form>
      </section>
    </div>
  );
}
