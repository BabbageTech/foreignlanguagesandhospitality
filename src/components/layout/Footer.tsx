"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, SOCIAL_LINKS, WHATSAPP_URL } from "@/lib/constants";
import { getMessage, type MessageKey } from "@/i18n/messages";
import { localePath, type Locale } from "@/i18n/config";
import LanguageSelector from "./LanguageSelector";
import { getSharedLayoutCopy } from "@/i18n/shared-layout";

const footerNav = {
  navigation: [
    { key: "aboutInstitute", href: "/about" },
    { key: "academicPrograms", href: "/academics" },
    { key: "admissionsOffice", href: "/admissions" },
    { key: "studentLife", href: "/student-voices" },
    { key: "careerServices", href: "/career-opportunities" },
  ],
  specializations: [
    { key: "germanCourse", href: "/academics/languages" },
    { key: "hospitalityManagement", href: "/academics/hospitality-management" },
    { key: "travelTourism", href: "/academics/travel-tourism" },
    { key: "ictComputing", href: "/academics/ict" },
  ],
};

const socials = [
  {
    label: "Facebook",
    href: SOCIAL_LINKS.facebook,
    brandColor: "group-hover:text-[#1877F2]",
    icon: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  },
  {
    label: "WhatsApp",
    href: WHATSAPP_URL,
    brandColor: "group-hover:text-[#25D366]",
    icon: <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  },

];

export default function Footer({ locale = "en" }: { locale?: Locale }) {
  const href = (path: string) => localePath(path, locale);
  const layoutCopy = getSharedLayoutCopy(locale);
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-[#0A2540] text-white pt-16 md:pt-24 pb-8 relative overflow-hidden border-t border-white/5 font-sans">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-secondary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 md:w-96 h-64 md:h-96 bg-accent/5 rounded-full blur-[80px] md:blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-16 md:mb-20">
          
          {/* Brand Identity */}
          <div className="lg:col-span-5 space-y-8 md:space-y-10">
            <Link href={href("/")} className="flex flex-col md:flex-row md:items-center gap-5 group w-fit">
              <div className="relative w-16 h-16 bg-white shadow-2xl transition-transform group-hover:scale-105 shrink-0 rounded-xl overflow-hidden">
                <Image src="/logo.png" alt="IIFLHM" fill className="object-cover p-1" />
              </div>
              <div className="flex flex-col">
                <h2 className="font-black text-lg md:text-xl uppercase tracking-tighter leading-tight text-white max-w-sm">
                  International Institute of Foreign Languages & Hospitality Management
                </h2>
                <span className="text-accent text-[10px] font-black uppercase tracking-[0.3em] mt-2 block">
                  {layoutCopy.footerTagline}
                </span>
              </div>
            </Link>

            <p className="text-white/70 text-base md:text-lg leading-relaxed max-w-md font-medium italic border-l-2 border-white/10 pl-6">
              {layoutCopy.footerMission}
            </p>

            {/* Social Connect */}
            <div className="flex gap-4">
              {socials.map(({ label, href, icon, brandColor }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="group w-11 h-11 md:w-12 md:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all duration-500 hover:bg-white hover:-translate-y-2 shadow-xl"
                >
                  <svg viewBox="0 0 24 24" className={`w-5 h-5 fill-none stroke-current text-white/50 transition-colors duration-300 ${brandColor}`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    {icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid - optimized for mobile 2-columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12">
            <nav>
              <h4 className="text-accent text-[11px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                {getMessage(locale, "institute")}
              </h4>
              <ul className="space-y-4">
                {footerNav.navigation.map(({ key, href: path }) => (
                  <li key={key}>
                    <Link href={href(path)} className="text-white/60 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group">
                      <span className="hidden md:block w-0 group-hover:w-2 h-[1px] bg-accent transition-all" />
                      {getMessage(locale, key as MessageKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav>
              <h4 className="text-accent text-[11px] font-black uppercase tracking-[0.2em] mb-6 md:mb-8 flex items-center gap-2">
                <span className="w-2 h-2 bg-secondary rounded-full" />
                {getMessage(locale, "programs")}
              </h4>
              <ul className="space-y-4">
                {footerNav.specializations.map(({ key, href: path }) => (
                  <li key={key}>
                    <Link href={href(path)} className="text-white/60 hover:text-white transition-all text-sm font-bold flex items-center gap-2 group">
                      <span className="hidden md:block w-0 group-hover:w-2 h-[1px] bg-accent transition-all" />
                      {getMessage(locale, key as MessageKey)}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <section className="col-span-2 sm:col-span-1 bg-white/5 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
              <h4 className="text-white text-[11px] font-black uppercase tracking-[0.2em] mb-6">
                {getMessage(locale, "reachUs")}
              </h4>
              <address className="not-italic space-y-6">
                <div className="space-y-1">
                   <p className="text-[10px] text-white/30 uppercase font-black">{getMessage(locale, "campus")}</p>
                   <p className="text-xs text-white/80 font-bold leading-relaxed">
                     {SITE_CONFIG.location}
                   </p>
                </div>

                <div className="space-y-3">
                  <a href={`tel:${SITE_CONFIG.phone2.replace(/\s/g, "")}`} className="flex items-center gap-3 group">
                    <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-[#0A2540] transition-all">
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <span className="text-sm font-black group-hover:text-accent transition-colors">{SITE_CONFIG.phone2}</span>
                  </a>
                </div>

                <a href={`mailto:${SITE_CONFIG.email}`} className="text-[11px] font-black text-white/40 hover:text-white transition-all break-all uppercase tracking-tighter block pt-4 border-t border-white/5">
                  {SITE_CONFIG.email}
                </a>
              </address>
            </section>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col gap-3 text-center md:text-left">
            <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">
              © {new Date().getFullYear()} INTERNATIONAL INSTITUTE OF FOREIGN LANGUAGES AND HOSPITALITY MANAGEMENT. {getMessage(locale, "rightsReserved")}.
            </p>
            <p className="text-[10px] font-black text-white/20 uppercase tracking-widest leading-loose">
              {layoutCopy.basedIn} •{" "}
              <span className="text-white/40">{layoutCopy.poweredBy}</span>
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 md:gap-8">
            <LanguageSelector currentLocale={locale} />
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest">
              <Link href={href("/privacy")} className="text-white/30 hover:text-secondary transition-colors py-2">{getMessage(locale, "privacy")}</Link>
              <Link href={href("/terms")} className="text-white/30 hover:text-secondary transition-colors py-2">{getMessage(locale, "terms")}</Link>
            </div>
            
            <button 
              onClick={scrollToTop}
              aria-label={layoutCopy.scrollToTop}
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-[#0A2540] transition-all group"
            >
               <svg className="w-4 h-4 transform group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                 <path d="M5 15l7-7 7 7" />
               </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
