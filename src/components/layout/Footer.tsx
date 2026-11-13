"use client";

import { Link } from "@/i18n/routing";
import { CONTACT_INFO, SITE_CONFIG } from "@/lib/constants";
import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0A2540] text-white pt-16 pb-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <p className="font-black text-lg tracking-tight mb-2">{SITE_CONFIG.shortName}</p>
            <p className="text-white/60 text-sm leading-relaxed mb-4">{t("location")}</p>
            <div className="space-y-1 text-sm text-white/70">
              {CONTACT_INFO.phones.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {CONTACT_INFO.emails.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </div>
          </div>
          <div>
            <p className="font-black text-xs uppercase tracking-[0.2em] text-[#F2C12C] mb-4">{t("quickLinks")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white">{nav("home")}</Link></li>
              <li><Link href="/about" className="hover:text-white">{nav("about")}</Link></li>
              <li><Link href="/admissions" className="hover:text-white">{nav("admissions")}</Link></li>
              <li><Link href="/contact" className="hover:text-white">{nav("contact")}</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-black text-xs uppercase tracking-[0.2em] text-[#F2C12C] mb-4">{t("programmes")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/academics" className="hover:text-white">{nav("academics")}</Link></li>
              <li><Link href="/academics/german-language" className="hover:text-white">German</Link></li>
              <li><Link href="/academics/hospitality-management" className="hover:text-white">Hospitality</Link></li>
              <li><Link href="/career-opportunities" className="hover:text-white">{nav("careers")}</Link></li>
            </ul>
          </div>
          <div>
            <p className="font-black text-xs uppercase tracking-[0.2em] text-[#F2C12C] mb-4">{t("legal")}</p>
            <ul className="space-y-2 text-sm text-white/70">
              <li><Link href="/privacy" className="hover:text-white">{t("privacy")}</Link></li>
              <li><Link href="/terms" className="hover:text-white">{t("terms")}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/40">
          <p>© {year} {SITE_CONFIG.shortName}. {t("rights")}</p>
        </div>
      </div>
    </footer>
  );
}
