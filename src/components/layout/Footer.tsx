"use client";
import { Link } from "@/i18n/routing";
import { CONTACT_INFO, SITE_CONFIG, SOCIAL_LINKS } from "@/lib/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tSite = useTranslations("site");
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="flex items-center gap-4">
              <div className="relative w-14 h-14 bg-white rounded-xl overflow-hidden shrink-0">
                <Image src="/logo.png" alt={tSite("shortName")} fill className="object-cover p-1" />
              </div>
              <div>
                <h2 className="font-black text-lg leading-tight">{tSite("name")}</h2>
                <span className="text-accent text-[10px] font-black uppercase tracking-widest">{tSite("tagline")}</span>
              </div>
            </Link>
            <p className="text-white/70 text-sm leading-relaxed border-l-2 border-white/10 pl-4">{t("bridge")}</p>
            {SOCIAL_LINKS.facebook && (
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="text-white/50 hover:text-white text-sm">Facebook</a>
            )}
          </div>
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <nav>
              <h4 className="text-accent text-[11px] font-black uppercase tracking-wider mb-4">{t("quickLinks")}</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/about" className="text-white/60 hover:text-white">{tNav("about")}</Link></li>
                <li><Link href="/academics" className="text-white/60 hover:text-white">{tNav("academics")}</Link></li>
                <li><Link href="/admissions" className="text-white/60 hover:text-white">{tNav("admissions")}</Link></li>
                <li><Link href="/contact" className="text-white/60 hover:text-white">{tNav("contact")}</Link></li>
              </ul>
            </nav>
            <nav>
              <h4 className="text-accent text-[11px] font-black uppercase tracking-wider mb-4">{t("programmes")}</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="/academics/languages" className="text-white/60 hover:text-white">German (A1–B2)</Link></li>
                <li><Link href="/academics/hospitality-management" className="text-white/60 hover:text-white">Hospitality</Link></li>
                <li><Link href="/academics/ict" className="text-white/60 hover:text-white">ICT</Link></li>
              </ul>
            </nav>
            <section>
              <h4 className="text-accent text-[11px] font-black uppercase tracking-wider mb-4">{t("contact")}</h4>
              <address className="not-italic text-sm space-y-2">
                <p className="text-white/60">{CONTACT_INFO.address}</p>
                {CONTACT_INFO.phones.map((p) => (
                  <a key={p} href={`tel:${p.replace(/\s/g, "")}`} className="block text-white/70 hover:text-white font-bold">{p}</a>
                ))}
                <a href={`mailto:${SITE_CONFIG.email}`} className="block text-white/40 hover:text-white text-xs break-all">{SITE_CONFIG.email}</a>
              </address>
            </section>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold text-white/30 uppercase tracking-wider">
          <p>© {new Date().getFullYear()} {SITE_CONFIG.name}. {t("rights")}</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-secondary">{tNav("privacy")}</Link>
            <Link href="/terms" className="hover:text-secondary">{tNav("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
