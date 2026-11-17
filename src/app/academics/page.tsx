import { getLocalizedPageMetadata } from "@/lib/localized-page-metadata";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle2,
  Clock,
  Compass,
  Globe,
  GraduationCap,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { headers } from "next/headers";
import { defaultLocale, isLocale, localePath, type Locale } from "@/i18n/config";
import { getAcademicsCopy } from "@/i18n/academics";
import { getAcademicsCatalogueCopy } from "@/i18n/academics-catalogue";


// ── Data ───────────────────────────────────────────────────────────

const stats = [
  { number: "Languages", label: "Foreign-language courses", icon: <Globe className="w-5 h-5" /> },
  { number: "Hospitality", label: "Management and service", icon: <BookOpen className="w-5 h-5" /> },
  { number: "Tourism", label: "Travel and tourism", icon: <Compass className="w-5 h-5" /> },
  { number: "ICT", label: "Digital skills", icon: <Zap className="w-5 h-5" /> },
];

const tracks = [
  {
    number:    "01",
    title:     "Language Courses",
    subtitle:  "Global Communication",
    desc:      "Explore language courses that reference proficiency frameworks such as the CEFR. Course levels, instructor credentials and external examination options should be confirmed for the selected language.",
    features:  [
      "Goethe, IELTS, DELF & HSK Exam Preparation",
      "CEFR Levels A1 through C1",
      "Interactive Language Labs",
      "Online & Onsite Scheduling",
    ],
    highlights: ["German A1–B2", "8+ Languages", "Exam Ready"],
    link:      "/academics/languages",
    accent:    "#E30613",
    icon:      Globe,
    image:     "/images/academics/languages.jpg",
  },
  {
    number:    "02",
    title:     "Hospitality Management",
    subtitle:  "Vocational Excellence",
    desc:      "Explore diploma and certificate options in hospitality, culinary arts, front-office operations and food-and-beverage service. Contact admissions for current course outlines and practical-training details.",
    features:  [
      "Supervised Practical Training",
      "International Hospitality Standards",
      "Mock Hotel & Training Kitchen Facilities",
      "Job Placement Assistance",
    ],
    highlights: ["Diploma Programmes", "Real Kitchens", "Hotel Internships"],
    link:      "/academics/hospitality-management",
    accent:    "#0A2540",
    icon:      Users,
    image:     "/images/academics/hospitality.jpg",
  },
  {
    number:    "03",
    title:     "Travel & Tourism",
    subtitle:  "Global Expeditions",
    desc:      "Acquire hands-on field skills required to lead in the global tourism sector. Train in travel agency logistics, sustainable eco-tourism design, tour operations, and destination management plans.",
    features:  [
      "Practical Tour Guiding & Field Excursions",
      "Amadeus & Galileo GDS Systems Intro",
      "Sustainable Destination Design Standards",
      "Local & International Tour Agency Links",
    ],
    highlights: ["Craft Certification", "Field Excursions", "Tour Agency Links"],
    link:      "/academics/travel-tourism",
    accent:    "#059669",
    icon:      Compass,
    image:     "/images/Hospitality/tourism.jpg",
  },
  {
    number:    "04",
    title:     "ICT & Digital Skills",
    subtitle:  "Future-Ready Technology",
    desc:      "High-demand technical programmes covering Full-Stack Web Development, Cybersecurity, Data Analytics, and Mobile App Development — with project-based learning and opportunities to explore relevant certification routes.",
    features:  [
      "Hands-On Project-Based Learning",
      "CompTIA, AWS & Google Cert Preparation",
      "Small Cohorts (max 20 students)",
      "Portfolio Building & Career Support",
    ],
    highlights: ["4 Specialisations", "Global Certs", "Portfolio Ready"],
    link:      "/academics/ict",
    accent:    "#F2C12C",
    icon:      Shield,
    image:     "/images/academics/ict.jpg",
  },
  {
    number:    "05",
    title:     "Germany Career Pathways",
    subtitle:  "Ausbildung & Beyond",
    desc:      "Structured pathways designed specifically for Kenyan graduates seeking careers in Germany — Nursing Ausbildung, general apprenticeships, Chance Karte guidance, and university preparation.",
    features:  [
      "Nursing Ausbildung Preparation",
      "Ausbildung Placement Guidance",
      "Chance Karte & Visa Consultation",
      "German Cultural & Workplace Orientation",
    ],
    highlights: ["Nursing Pathways", "Visa Guidance", "Alumni Stories"],
    link:      "/career-opportunities",
    accent:    "#E30613",
    icon:      GraduationCap,
    image:     "/images/academics/german-pathway.jpg",
  },
];

const whyChoose = [
  {
    title: "CEFR & International Standards",
    desc:  "Language course content references proficiency frameworks such as the CEFR. Certificate recognition depends on the examination provider and the specific qualification.",
    icon:  <Award className="w-5 h-5 text-[#E30613]" />,
  },
  {
    title: "Practical-First Curriculum",
    desc:  "We believe learning by doing. Whether arranging a travel itinerary, cooking in a professional kitchen, or coding a live app, real experience is integrated from week one.",
    icon:  <Zap className="w-5 h-5 text-[#E30613]" />,
  },
  {
    title: "Small Class Sizes",
    desc:  "Maximum 25 students per class ensures personalised attention, stronger peer collaboration, and instructor engagement that large institutions cannot offer.",
    icon:  <Users className="w-5 h-5 text-[#E30613]" />,
  },
  {
    title: "Certified Faculty",
    desc:  "Our instructors hold international teaching qualifications and bring real-world professional experience from Germany, Kenya, and across the East African region.",
    icon:  <GraduationCap className="w-5 h-5 text-[#E30613]" />,
  },
  {
    title: "Flexible Study Modes",
    desc:  "Morning, evening, and weekend classes. Onsite at our Narok campus or fully online — designed to fit around your current work or family commitments.",
    icon:  <Clock className="w-5 h-5 text-[#E30613]" />,
  },
  {
    title: "Career & Placement Support",
    desc:  "The institute lists CV preparation, interview coaching and pathway information among its support areas. Confirm current services and any employer-specific arrangements with admissions; employment and visa outcomes are not guaranteed.",
    icon:  <Globe className="w-5 h-5 text-[#E30613]" />,
  },
];

const journeySteps = [
  { step: "01", title: "Choose Your Programme",   desc: "Browse our academic tracks and select the pathway that aligns perfectly with your career goals." },
  { step: "02", title: "Apply Online",             desc: "Complete the admissions form with your details. Our team will review your enquiry and advise on next steps." },
  { step: "03", title: "Begin Your Studies",       desc: "Join your cohort, access labs and facilities, and start building real skills from day one." },
  { step: "04", title: "Graduate & Launch",        desc: "Complete your programme and discuss further study or career options with the institute. Outcomes depend on individual eligibility and third-party decisions." },
];

// ── Sub-components ─────────────────────────────────────────────────

function TrackCard({ track, locale }: { track: (typeof tracks[number]) & { exploreAction: string }; locale: Locale }) {
  const Icon = track.icon;
  return (
    <div
      className="group bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col h-full"
      style={{ borderRadius: "16px" }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={track.image}
          alt={track.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-[#0A2540]/60" />

        {/* Number */}
        <div className="absolute top-4 left-4">
          <span
            className="text-[10px] font-black uppercase tracking-widest text-white bg-white/10 border border-white/20 px-3 py-1.5 backdrop-blur-sm"
            style={{ borderRadius: "6px" }}
          >
            {track.number}
          </span>
        </div>

        {/* Icon */}
        <div
          className="absolute bottom-4 right-4 w-11 h-11 flex items-center justify-center"
          style={{ background: track.accent, borderRadius: "10px" }}
        >
          <Icon className="w-5 h-5 text-white" />
        </div>

        {/* Highlights */}
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5">
          {track.highlights.map((h) => (
            <span
              key={h}
              className="text-[9px] font-black text-white bg-white/10 border border-white/20 backdrop-blur-sm px-2 py-1 uppercase tracking-wider"
              style={{ borderRadius: "4px" }}
            >
              {h}
            </span>
          ))}
        </div>
      </div>

      <div className="p-7 flex flex-col flex-1 gap-4">
        {/* Title */}
        <div>
          <p
            className="text-[9px] font-black uppercase tracking-[0.2em] mb-1"
            style={{ color: track.accent }}
          >
            {track.subtitle}
          </p>
          <h3 className="text-xl font-black text-[#0A2540] leading-tight">{track.title}</h3>
        </div>

        <p className="text-sm text-slate-500 leading-relaxed">{track.desc}</p>

        {/* Features */}
        <ul className="space-y-2 flex-1">
          {track.features.map((f) => (
            <li key={f} className="flex items-start gap-2.5">
              <div
                className="w-4 h-4 flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${track.accent}18`, borderRadius: "4px" }}
              >
                <CheckCircle2 className="w-2.5 h-2.5" style={{ color: track.accent }} />
              </div>
              <span className="text-xs text-slate-600 font-medium leading-snug">{f}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <Link
          href={localePath(track.link, locale)}
          className="flex items-center justify-between pt-5 border-t border-slate-100 text-[10px] font-black uppercase tracking-widest transition-all duration-200 group/link"
          style={{ color: track.accent }}
        >
          {track.exploreAction}
          <span
            className="w-8 h-8 flex items-center justify-center transition-all duration-200 group-hover/link:translate-x-1"
            style={{ background: `${track.accent}15`, borderRadius: "6px", color: track.accent }}
          >
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}

// ── Page ───────────────────────────────────────────────────────────

function catalogueCopyNumber(locale: import("@/i18n/config").Locale, index: number) {
  const labels: Record<import("@/i18n/config").Locale, string[]> = {
    en: ["Languages", "Hospitality", "Tourism", "ICT"], de: ["Sprachen", "Hospitality", "Tourismus", "IKT"],
    sw: ["Lugha", "Ukarimu", "Utalii", "TEHAMA"], fr: ["Langues", "Hôtellerie", "Tourisme", "TIC"],
    es: ["Idiomas", "Hostelería", "Turismo", "TIC"], nl: ["Talen", "Hospitality", "Toerisme", "ICT"],
    it: ["Lingue", "Ospitalità", "Turismo", "TIC"], zh: ["语言", "酒店服务", "旅游", "信息技术"],
  };
  return labels[locale][index];
}

export default async function AcademicsPage() {
  const requestHeaders = await headers();
  const requestedLocale = requestHeaders.get("x-iiflhm-locale") || defaultLocale;
  const locale = isLocale(requestedLocale) ? requestedLocale : defaultLocale;
  const copy = getAcademicsCopy(locale);
  const localizedStats = stats.map((stat, index) => ({ ...stat, number: catalogueCopyNumber(locale, index), label: [copy.statLanguage, copy.statHospitality, copy.statTourism, copy.statICT][index] }));
  const localizedJourney = journeySteps.map((step, index) => ({ ...step, title: [copy.step1Title, copy.step2Title, copy.step3Title, copy.step4Title][index], desc: [copy.step1Body, copy.step2Body, copy.step3Body, copy.step4Body][index] }));
  const catalogueCopy = getAcademicsCatalogueCopy(locale);
  const localizedTracks = tracks.map((track, index) => ({ ...track, title: catalogueCopy.titles[index], subtitle: catalogueCopy.subtitles[index], desc: catalogueCopy.descriptions[index], features: catalogueCopy.features[index], highlights: catalogueCopy.highlights, exploreAction: catalogueCopy.exploreAction }));
  const localizedWhyChoose = whyChoose.map((item, index) => ({ ...item, title: catalogueCopy.whyTitles[index], desc: catalogueCopy.whyDescriptions[index] }));
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <Image
          src="/images/academics-hero.png"
          alt={copy.title1 + " " + copy.title2}
          fill
          className="object-cover object-center"
          priority
        />

        {/* Solid dark base — ensures text always readable */}
        <div className="absolute inset-0 bg-[#051B2E]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0A2540]/30" />
        <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-[#F8FAFC] to-transparent" />

        {/* Dot texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Gold ambient glow */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#F2C12C]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-48 pt-32 w-full">
          <div className="max-w-3xl">

            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-[2px] bg-[#F2C12C]" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#F2C12C]">
                {copy.eyebrow}
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-7">
              {copy.title1}<br />
              <span className="text-[#F2C12C]">{copy.title2}</span>
            </h1>

            <p className="text-xl text-white/75 leading-relaxed max-w-2xl mb-12">
              {copy.body}
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="#programs"
                className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all duration-300 shadow-lg"
                style={{ borderRadius: "8px" }}
              >
                {copy.explore} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={localePath("/admissions", locale)}
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                style={{ borderRadius: "8px" }}
              >
                {copy.apply}
              </Link>
            </div>

            {/* Hero stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/15">
              {localizedStats.map(({ number, label }) => (
                <div key={label}>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#F2C12C] leading-tight break-words">{number}</p>
                  <p className="text-xs text-white/50 mt-1.5 font-medium uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Stats bar ── */}
      <div className="bg-white border-b border-slate-100 shadow-sm relative z-20 -mt-1">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {localizedStats.map(({ number, label, icon }) => (
              <div key={label} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-[#E30613]">{icon}</span>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-[#0A2540] leading-tight break-words">{number}</p>
                </div>
                <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Academic tracks ── */}
      <section id="programs" className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613] mb-3">
              {copy.offerEyebrow}
            </p>
            <h2 className="text-4xl font-black text-[#0A2540] tracking-tight mb-4">
              {copy.offerTitle}
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              {copy.offerBody}
            </p>
          </div>

          {/* Adjusted column rules for responsive alignment with 5 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {localizedTracks.map((track) => (
              <TrackCard key={track.number} track={track} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose IIFLHM ── */}
      <section className="py-24 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F2C12C] mb-3">
              {copy.whyEyebrow}
            </p>
            <h2 className="text-4xl font-black text-white tracking-tight">
              {copy.whyTitle}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {localizedWhyChoose.map(({ title, desc, icon }) => (
              <div
                key={title}
                className="bg-white/5 border border-white/10 p-7 hover:bg-white/8 transition-colors duration-300"
                style={{ borderRadius: "14px" }}
              >
                <div
                  className="w-11 h-11 bg-white/5 border border-white/10 flex items-center justify-center mb-5"
                  style={{ borderRadius: "10px" }}
                >
                  {icon}
                </div>
                <h4 className="text-white font-black text-sm mb-2">{title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── The Journey ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613] mb-3">
              {copy.journeyEyebrow}
            </p>
            <div className="text-4xl font-black text-[#0A2540] tracking-tight">
              {copy.journeyTitle}
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {localizedJourney.map(({ step, title, desc }, i) => (
              <div key={step} className="relative flex flex-col items-start">
                {/* Connector line */}
                {i < journeySteps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(100%-0px)] w-full h-px bg-slate-200 z-0" />
                )}

                <div
                  className="w-10 h-10 bg-[#0A2540] text-white flex items-center justify-center text-[10px] font-black mb-5 relative z-10"
                  style={{ borderRadius: "8px" }}
                >
                  {step}
                </div>
                <h4 className="font-black text-[#0A2540] text-sm mb-2">{title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured programme — German ── */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="relative bg-[#0A2540] text-white overflow-hidden shadow-2xl"
            style={{ borderRadius: "20px" }}
          >
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F2C12C]" style={{ borderRadius: "20px 0 0 20px" }} />
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-[#F2C12C]/8 rounded-full blur-[100px] pointer-events-none" />

            <div className="grid md:grid-cols-12">
              <div className="md:col-span-7 p-10 md:p-14">
                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F2C12C] block mb-4">
                  {copy.featuredEyebrow}
                </span>
                <h2 className="text-3xl font-black mb-4 leading-tight">
                  {copy.featuredTitle}
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg">
                  {copy.featuredBody}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {catalogueCopy.highlights.map((t) => (
                    <span
                      key={t}
                      className="text-[9px] font-black uppercase tracking-wider text-[#F2C12C] bg-white/5 border border-white/10 px-3 py-1.5"
                      style={{ borderRadius: "5px" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={localePath("/academics/languages", locale)}
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F2C12C] text-[#0A2540] font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all duration-200"
                  style={{ borderRadius: "8px" }}
                >
                  {copy.featuredAction} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="md:col-span-5 relative hidden md:block min-h-[300px]">
                <Image
                  src="/images/languages/german.jpg"
                  alt={copy.featuredTitle}
                  fill
                  className="object-cover opacity-40"
                  style={{ borderRadius: "0 20px 20px 0" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#F2C12C]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F2C12C]">
              {copy.ctaEyebrow}
            </span>
            <div className="w-8 h-[1px] bg-[#F2C12C]" />
          </div>

          <h2 className="text-4xl font-black mb-5 tracking-tight">
            {copy.ctaTitle}
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            {copy.ctaBody}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={localePath("/admissions", locale)}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#E30613] text-white font-black text-xs uppercase tracking-widest hover:bg-[#B8040F] transition-colors duration-200 shadow-lg"
              style={{ borderRadius: "10px" }}
            >
              {copy.apply} <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href={localePath("/contact", locale)}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/25 text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all duration-200"
              style={{ borderRadius: "10px" }}
            >
              {copy.advisor}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
export async function generateMetadata() {
  return getLocalizedPageMetadata("academics", "/academics", "/images/academics-hero.png");
}
