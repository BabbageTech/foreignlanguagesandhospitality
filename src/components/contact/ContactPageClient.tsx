"use client";

import ContactForm from "@/components/contact/ContactForm";
import { SITE_CONFIG } from "@/lib/constants";
import { Link } from "@/i18n/routing";
import { Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPageClient() {
  const t = useTranslations("pages.contact");

  const cards = [
    {
      title: t("cardEmail"),
      icon: <Mail className="w-5 h-5 text-[#E30613]" />,
      links: [
        { text: "info@foreignlanguagesandhospitality.com", href: "mailto:info@foreignlanguagesandhospitality.com" },
        { text: "admissions@foreignlanguagesandhospitality.com", href: "mailto:admissions@foreignlanguagesandhospitality.com" },
      ],
    },
    {
      title: t("cardPhone"),
      icon: <Phone className="w-5 h-5 text-[#E30613]" />,
      links: [
        { text: SITE_CONFIG.phone1, href: `tel:${SITE_CONFIG.phone1.replace(/\s/g, "")}` },
        { text: SITE_CONFIG.phone2, href: `tel:${SITE_CONFIG.phone2.replace(/\s/g, "")}` },
      ],
    },
    {
      title: t("cardVisit"),
      icon: <MapPin className="w-5 h-5 text-[#E30613]" />,
      links: [{ text: "Newline Building, Narok, Kenya", href: "#" }],
    },
    {
      title: t("cardHours"),
      icon: <MessageSquare className="w-5 h-5 text-[#E30613]" />,
      links: [{ text: t("hoursBody"), href: "#" }],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A2540] text-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-6">{t("heroTitle")}</h1>
          <p className="text-white/75 text-lg max-w-2xl mb-8">{t("heroLead")}</p>
          <a
            href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex bg-[#25D366] text-white px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:opacity-90 transition-all"
          >
            {t("whatsappCta")}
          </a>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12">
        <div className="grid sm:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.title} className="border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                {c.icon}
                <h3 className="font-black text-[#0A2540] text-sm">{c.title}</h3>
              </div>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.text}>
                    {l.href.startsWith("#") ? (
                      <span className="text-sm text-slate-600 whitespace-pre-line">{l.text}</span>
                    ) : (
                      <a href={l.href} className="text-sm text-slate-600 hover:text-[#E30613] break-all">
                        {l.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div>
          <h2 className="text-2xl font-black text-[#0A2540] mb-2">{t("formTitle")}</h2>
          <p className="text-slate-600 mb-8">{t("formLead")}</p>
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
