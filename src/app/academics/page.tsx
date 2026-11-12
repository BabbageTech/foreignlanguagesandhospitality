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
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academics | World-Class Programs — IIFLHM Narok",
  description:
    "Explore premium academic offerings at IIFLHM: Language Courses, Hospitality Management, Travel & Tourism, ICT & Digital Skills, and German Pathways to international careers.",
  openGraph: {
    title: "Academics — IIFLHM Narok",
    description: "Language, Hospitality, Travel & Tourism, ICT, and Germany Pathways.",
    images: ["/images/academics-hero.png"],
  },
};

// ── Data ───────────────────────────────────────────────────────────

const stats = [
  { number: "94%",  label: "Graduate Employment Rate",     icon: <Award className="w-5 h-5" /> },
  { number: "15+",  label: "Accredited Programmes",         icon: <BookOpen className="w-5 h-5" /> },
  { number: "600+", label: "Hours of Practical Training",   icon: <Clock className="w-5 h-5" /> },
  { number: "25+",  label: "Global Industry Partners",      icon: <Globe className="w-5 h-5" /> },
];

const tracks = [
  {
    number:    "01",
    title:     "Language Courses",
    subtitle:  "Global Communication",
    desc:      "Master international languages with CEFR-aligned curriculum taught by certified instructors. German, English, French, Mandarin, Spanish, Arabic, and more — all aligned to official international examinations.",
    features:  [
      "Goethe, IELTS, DELF & HSK Exam Preparation",
      "CEFR Levels A1 through C1",
      "Interactive Language Labs",
      "Online & Onsite Scheduling",
    ],
    highlights: ["German A1–B2", "8+ Languages", "Exam Ready"],
    link:      "/academics/language-courses",
    accent:    "#E30613",
    icon:      Globe,
    image:     "/images/academics/languages.jpg",
  },
  {
    number:    "02",
    title:     "Hospitality Management",
    subtitle:  "Vocational Excellence",
    desc:      "Industry-focused diplomas and certificates designed with leading hotel groups. Study premium culinary arts, front office operations, and food & beverage systems with intensive practical hours.",
    features:  [
      "600+ Hours Supervised Practical Training",
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
    image:     "/images/hospitality/tourism.jpg",
  },
  {
    number:    "04",
    title:     "ICT & Digital Skills",
    subtitle:  "Future-Ready Technology",
    desc:      "High-demand technical programmes covering Full-Stack Web Development, Cybersecurity, Data Analytics, and Mobile App Development — all project-based with certifications recognised globally.",
    features:  [
      "100% Hands-On Project-Based Learning",
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
    highlights: ["Nursing Pathways", "Visa Guidance", "100+ Alumni in Germany"],
    link:      "/academics/language-courses",
    accent:    "#E30613",
    icon:      GraduationCap,
    image:     "/images/academics/german-pathway.jpg",
  },
];

const whyChoose = [
  {
    title: "CEFR & International Standards",
    desc:  "Every language programme is aligned to the Common European Framework of Reference, ensuring your qualification is recognised by universities and employers worldwide.",
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
    desc:  "From CV workshops to interview coaching in German, our career team supports you from application to first job — including employer introductions and visa guidance.",
    icon:  <Globe className="w-5 h-5 text-[#E30613]" />,
  },
];

const journeySteps = [
  { step: "01", title: "Choose Your Programme",   desc: "Browse our academic tracks and select the pathway that aligns perfectly with your career goals." },
  { step: "02", title: "Apply Online",             desc: "Complete the admissions form in under 5 minutes. Our team responds within 48 hours." },
  { step: "03", title: "Begin Your Studies",       desc: "Join your cohort, access labs and facilities, and start building real skills from day one." },
  { step: "04", title: "Graduate & Launch",        desc: "Receive your certificate, activate your career support, and take your career global." },
];

// ── Sub-components ─────────────────────────────────────────────────

function TrackCard({ track }: { track: typeof tracks[number] }) {
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
          href={track.link}
          className="flex items-center justify-between pt-5 border-t border-slate-100 text-[10px] font-black uppercase tracking-widest transition-all duration-200 group/link"
          style={{ color: track.accent }}
        >
          Explore Programme
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

export default function AcademicsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <Image
          src="/images/academics-hero.png"
          alt="IIFLHM Academic Excellence"
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
                Academic Excellence · IIFLHM Narok
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-7">
              World-Class Education.<br />
              <span className="text-[#F2C12C]">Real-World Impact.</span>
            </h1>

            <p className="text-xl text-white/75 leading-relaxed max-w-2xl mb-12">
              From mastering German for Europe to specialist qualifications in 
              hospitality, travel operations, and digital engineering — our tracks are built 
              to engineer thriving international portfolios.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="#programs"
                className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all duration-300 shadow-lg"
                style={{ borderRadius: "8px" }}
              >
                Explore Programmes <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all"
                style={{ borderRadius: "8px" }}
              >
                Apply Now
              </Link>
            </div>

            {/* Hero stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/15">
              {stats.map(({ number, label }) => (
                <div key={label}>
                  <p className="text-3xl font-black text-[#F2C12C] leading-none">{number}</p>
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
            {stats.map(({ number, label, icon }) => (
              <div key={label} className="text-center group">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <span className="text-[#E30613]">{icon}</span>
                  <p className="text-3xl font-black text-[#0A2540]">{number}</p>
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
              What We Offer
            </p>
            <h2 className="text-4xl font-black text-[#0A2540] tracking-tight mb-4">
              Our Academic Pathways
            </h2>
            <p className="text-slate-500 text-sm max-w-xl mx-auto leading-relaxed">
              Specialised tracks engineered to meet global industrial metrics 
              and reveal cross-border employment — heavily centered on absolute 
              hands-on practice.
            </p>
          </div>

          {/* Adjusted column rules for responsive alignment with 5 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tracks.map((track) => (
              <TrackCard key={track.title} track={track} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose IIFLHM ── */}
      <section className="py-24 bg-[#0A2540]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F2C12C] mb-3">
              The IIFLHM Difference
            </p>
            <h2 className="text-4xl font-black text-white tracking-tight">
              Why Choose Our Institution?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyChoose.map(({ title, desc, icon }) => (
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
              From Application to Career
            </p>
            <div className="text-4xl font-black text-[#0A2540] tracking-tight">
              Your Academic Journey
            </div>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {journeySteps.map(({ step, title, desc }, i) => (
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
                  Featured Pathway · Most Enrolled
                </span>
                <h2 className="text-3xl font-black mb-4 leading-tight">
                  German Language — Your Gateway to Europe
                </h2>
                <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg">
                  German is the most widely spoken native language in the EU and
                  the key to Ausbildung apprenticeships, nursing roles, and
                  university admission across Germany, Austria, and Switzerland.
                  Our A1–B2 programme is Goethe-aligned and taught by certified
                  instructors.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["A1 to B2 Levels", "Goethe Exam Prep", "CEFR Aligned", "Ausbildung Ready", "Online & Onsite"].map((t) => (
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
                  href="/academics/language-courses"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#F2C12C] text-[#0A2540] font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all duration-200"
                  style={{ borderRadius: "8px" }}
                >
                  View German Programme <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              <div className="md:col-span-5 relative hidden md:block min-h-[300px]">
                <Image
                  src="/images/languages/german.jpg"
                  alt="German Language Programme"
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
              Begin Today
            </span>
            <div className="w-8 h-[1px] bg-[#F2C12C]" />
          </div>

          <h2 className="text-4xl font-black mb-5 tracking-tight">
            Ready to Shape Your Future?
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Whether you choose languages, hospitality, travel operations, digital technology, or a
            pathway to Germany — your international career starts here in Narok.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#E30613] text-white font-black text-xs uppercase tracking-widest hover:bg-[#B8040F] transition-colors duration-200 shadow-lg"
              style={{ borderRadius: "10px" }}
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-white/25 text-white font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all duration-200"
              style={{ borderRadius: "10px" }}
            >
              Speak With an Advisor
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}