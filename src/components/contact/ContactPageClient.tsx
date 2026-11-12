"use client";

import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { Link } from "@/i18n/routing";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPageClient() {
  const t = useTranslations("pages.contact");

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-[#0A2540] mb-2">{t("title")}</h1>
      <p className="text-lg text-slate-600 mb-10">{t("subtitle")}</p>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-[#E30613] mt-1 shrink-0" />
            <div>
              <p className="font-bold text-[#0A2540]">Location</p>
              <p className="text-slate-600">{CONTACT_INFO.address}</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Phone className="w-5 h-5 text-[#E30613] mt-1 shrink-0" />
            <div>
              <p className="font-bold text-[#0A2540]">Phone</p>
              {CONTACT_INFO.phones.map((p) => (
                <p key={p} className="text-slate-600">{p}</p>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Mail className="w-5 h-5 text-[#E30613] mt-1 shrink-0" />
            <div>
              <p className="font-bold text-[#0A2540]">Email</p>
              {CONTACT_INFO.emails.map((e) => (
                <p key={e} className="text-slate-600">{e}</p>
              ))}
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MessageSquare className="w-5 h-5 text-[#E30613] mt-1 shrink-0" />
            <div>
              <p className="font-bold text-[#0A2540]">WhatsApp</p>
              <a className="text-[#25D366] font-semibold" href={`https://wa.me/${SITE_CONFIG.phone1.replace(/\s+/g, "").replace("+", "")}`} target="_blank" rel="noopener noreferrer">
                Chat with us
              </a>
            </div>
          </div>
        </div>

        <form className="space-y-4 bg-slate-50 p-6 rounded-2xl border border-slate-100" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block text-sm font-bold text-[#0A2540] mb-1">{t("name")}</label>
            <input className="w-full rounded-lg border border-slate-200 px-4 py-2.5" name="name" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0A2540] mb-1">{t("email")}</label>
            <input type="email" className="w-full rounded-lg border border-slate-200 px-4 py-2.5" name="email" required />
          </div>
          <div>
            <label className="block text-sm font-bold text-[#0A2540] mb-1">{t("message")}</label>
            <textarea className="w-full rounded-lg border border-slate-200 px-4 py-2.5 min-h-[120px]" name="message" required />
          </div>
          <button type="submit" className="w-full bg-[#0A2540] text-white py-3 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all">
            {t("submit")}
          </button>
          <p className="text-xs text-slate-500 text-center">Or contact us directly via WhatsApp for faster response.</p>
        </form>
      </div>
    </div>
  );
}
