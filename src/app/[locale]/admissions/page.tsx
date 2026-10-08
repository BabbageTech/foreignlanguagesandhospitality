// src/app/admissions/page.tsx

import AdmissionForm from "@/components/admissions/AdmissionForm";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Compass, 
  Download,
  Globe,
  HelpCircle,
  MapPin,
  Phone,
  Shield,
  Users,
} from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { Link } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Admissions | 2026/27 Intake — IIFLHM Narok",
    description:
      "Apply for the 2026/2027 academic year at the International Institute of Foreign Languages and Hospitality Management in Narok, Kenya.",
  };
}

// Static Data
const heroStats = [
  { value: "100+", label: "Students Placed Abroad" },
  { value: "A1–B2", label: "German Levels Offered" },
  { value: "48h", label: "Application Response" },
];

const docChecklist = [
  "Valid National ID or Passport",
  "KCSE Result Slip or Certificate",
  "Two Recent Passport-Size Photographs",
  "Professional CV (Nursing applicants only)",
  "Previous Academic Transcripts",
];

const intakes = [
  {
    session: "September 2026 Intake",
    deadline: "August 15, 2026",
    status: "Open",
    statusColor: "text-green-700",
    dot: "bg-green-500",
    rowHighlight: true,
  },
  {
    session: "January 2027 Intake",
    deadline: "December 10, 2026",
    status: "Upcoming",
    statusColor: "text-blue-700",
    dot: "bg-blue-500",
    rowHighlight: false,
  },
  {
    session: "June 2027 Intake",
    deadline: "May 15, 2027",
    status: "Planned",
    statusColor: "text-slate-500",
    dot: "bg-slate-300",
    rowHighlight: false,
  },
];

const processSteps = [
  {
    number: "01",
    title: "Submit Application",
    desc: "Complete the secure online form with accurate personal and academic details.",
  },
  {
    number: "02",
    title: "Document Verification",
    desc: "Deliver or upload required documents to our Narok admissions office.",
  },
  {
    number: "03",
    title: "Admissions Review",
    desc: "Our registrar reviews your application within 48 business hours.",
  },
  {
    number: "04",
    title: "Enrolment Confirmation",
    desc: "Receive your formal offer letter and complete fee payment to secure your place.",
  },
];

export default async function AdmissionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const tAdmissions = await getTranslations("pages.admissions");
 {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-end overflow-hidden">
        <Image
          src="/images/admissions/hero-bg.jpg"
          alt="IIFLHM Campus — Narok, Kenya"
          fill
          className="object-cover object-center"
          priority
        />

        <div className="absolute inset-0 bg-[#051B2E]/85" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent" />

        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#F2C12C]/10 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-48 pt-32 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-[2px] bg-[#F2C12C]" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#F2C12C]">
                Institutional Admissions · 2026/2027
              </span>
            </div>

            <h1 className="text-6xl md:text-7xl font-black text-white leading-[0.95] mb-7 tracking-tighter">
              Launch Your<br />
              <span className="text-[#F2C12C]">Global Career</span>
            </h1>

            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-lg font-medium">
              Join Kenya&apos;s gateway to Germany. Master the German
              language or specialise in international hospitality management.
              Applications are officially open for our{" "}
              <span className="text-white font-black underline decoration-[#F2C12C] underline-offset-4">
                September 2026
              </span>{" "}
              intake — spaces are strictly limited.
            </p>

            <div className="flex flex-wrap gap-4 items-center mb-14">
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/25 px-5 py-2.5">
                <Calendar className="w-4 h-4 text-[#F2C12C]" />
                <span className="text-xs font-black text-white uppercase tracking-wider">
                  Next Intake: Sept 15, 2026
                </span>
              </div>

              <a
                href="#application-form"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#E30613] text-white text-xs font-black uppercase tracking-widest hover:bg-[#B8040F] transition-colors duration-200"
              >
                Apply Now <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/15">
              {heroStats.map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-black text-[#F2C12C] leading-none">{value}</p>
                  <p className="text-xs text-white/55 mt-1.5 font-medium uppercase tracking-wider">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 -mt-32 pb-28 relative z-20">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-8 space-y-8">
            <WhyApplyCards />
            <ProgramsOverview />

            {/* Application Form */}
            <div
              id="application-form"
              className="bg-white shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-200/60"
              style={{ borderRadius: "20px" }}
            >
              <div className="h-1 bg-[#0A2540]" />

              <div className="p-8 md:p-14">
                <div className="mb-10 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-5 h-[2px] bg-[#E30613]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E30613]">
                      Enrollment Gateway
                    </span>
                  </div>
                  <h2 className="text-3xl font-black text-[#0A2540] tracking-tight">
                    Online Application
                  </h2>
                  <p className="text-slate-500 mt-3 text-sm leading-relaxed max-w-lg">
                    Fill in the form below to begin your journey. Our registrar
                    will review your details for the 2026/27 academic cycle and
                    contact you within 48 hours.
                  </p>
                </div>

                <AdmissionForm />
              </div>
            </div>

            {/* Process Steps */}
            <div
              className="bg-[#0A2540] text-white p-8 md:p-12"
              style={{ borderRadius: "20px" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-5 h-[2px] bg-[#F2C12C]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F2C12C]">
                  How It Works
                </span>
              </div>
              <h3 className="text-2xl font-black mb-10 tracking-tight">
                The Application Process
              </h3>

              <div className="grid sm:grid-cols-2 gap-6">
                {processSteps.map(({ number, title, desc }) => (
                  <div key={number} className="flex gap-5">
                    <div
                      className="w-10 h-10 bg-[#F2C12C] flex items-center justify-center shrink-0 mt-0.5"
                      style={{ borderRadius: "8px" }}
                    >
                      <span className="text-[10px] font-black text-[#0A2540] tracking-wider">
                        {number}
                      </span>
                    </div>
                    <div>
                      <p className="font-black text-white text-sm mb-1">{title}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Intake Schedule */}
            <div
              className="bg-white p-8 md:p-10 border border-slate-200/60 shadow-lg shadow-slate-200/40"
              style={{ borderRadius: "20px" }}
            >
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
                <div className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 bg-slate-50 flex items-center justify-center border border-slate-100"
                    style={{ borderRadius: "10px" }}
                  >
                    <Calendar className="w-5 h-5 text-[#0A2540]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-[#0A2540]">
                      2026/27 Intake Schedule
                    </h3>
                    <p className="text-xs text-slate-400 font-medium mt-0.5">
                      Plan your transition to international study early
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-100">
                      <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-left">
                        Academic Intake
                      </th>
                      <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-left">
                        Application Deadline
                      </th>
                      <th className="pb-4 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-right">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {intakes.map(({ session, deadline, status, statusColor, dot, rowHighlight }) => (
                      <tr
                        key={session}
                        className={`border-b border-slate-50 last:border-0 transition-colors ${
                          rowHighlight ? "bg-green-50/40 hover:bg-green-50/70" : "hover:bg-slate-50/60"
                        }`}
                      >
                        <td className="py-5 font-black text-[#0A2540] text-sm">{session}</td>
                        <td className="py-5 text-slate-500 text-sm font-medium">{deadline}</td>
                        <td className="py-5 text-right">
                          <span className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 shadow-sm" style={{ borderRadius: "6px" }}>
                            <span className={`w-1.5 h-1.5 rounded-full ${dot}`} />
                            <span className={`text-[10px] font-black uppercase tracking-widest ${statusColor}`}>
                              {status}
                            </span>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            {/* Brochure — SYNCED DOWNLOAD LOGIC */}
            <div
              className="relative bg-[#0A2540] p-8 text-white overflow-hidden border border-[#0A2540]/80 shadow-2xl"
              style={{ borderRadius: "20px" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F2C12C]" style={{ borderRadius: "20px 0 0 20px" }} />

              <div className="relative z-10">
                <div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-7 border border-white/10" style={{ borderRadius: "10px" }}>
                  <Download className="w-5 h-5 text-[#F2C12C]" />
                </div>

                <span className="text-[9px] font-black uppercase tracking-[0.25em] text-[#F2C12C] block mb-2">
                  Free Download
                </span>
                <h4 className="text-xl font-black mb-3 leading-tight">Study Prospectus</h4>
                <p className="text-slate-400 text-sm mb-8 leading-relaxed">
                  Complete breakdown of tuition, visa requirements, course modules, and career pathways for 2026/27.
                </p>

                <Link
                  href="/docs/bronchure.pdf"
                  className="flex items-center justify-center gap-2 w-full bg-[#F2C12C] text-[#0A2540] py-4 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-[#0A2540] transition-all duration-300 shadow-lg active:scale-[0.98]"
                  style={{ borderRadius: "10px" }}
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Guide
                </Link>
              </div>
            </div>

            {/* Document Checklist */}
            <div
              className="bg-white p-8 border border-slate-200/60 shadow-lg shadow-slate-200/30 overflow-hidden"
              style={{ borderRadius: "20px" }}
            >
              <div className="flex items-center gap-2 mb-7 pb-5 border-b border-slate-100">
                <CheckCircle2 className="w-4 h-4 text-[#0A2540]" />
                <h3 className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-500">
                  Required Documents
                </h3>
              </div>

              <ul className="space-y-5">
                {docChecklist.map((item) => (
                  <li key={item} className="flex items-start gap-3 group">
                    <div
                      className="w-5 h-5 bg-green-50 border border-green-100 flex items-center justify-center shrink-0 mt-0.5"
                      style={{ borderRadius: "5px" }}
                    >
                      <CheckCircle2 className="text-green-600 w-3 h-3" />
                    </div>
                    <span className="text-sm font-semibold text-slate-600 leading-snug group-hover:text-[#0A2540] transition-colors duration-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Support */}
            <div
              className="bg-slate-900 p-8 text-center relative overflow-hidden border border-white/5"
              style={{ borderRadius: "20px" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#E30613]/8 to-transparent pointer-events-none" />

              <div className="relative z-10">
                <div className="w-14 h-14 bg-white/5 flex items-center justify-center mx-auto mb-6 border border-white/10" style={{ borderRadius: "12px" }}>
                  <HelpCircle className="w-7 h-7 text-[#F2C12C]" />
                </div>

                <h4 className="text-sm font-black text-white uppercase tracking-widest mb-3">
                  Need Assistance?
                </h4>
                <p className="text-slate-400 text-xs mb-8 leading-relaxed">
                  Our advisors are available Monday–Friday, 8 AM–5 PM EAT to walk you through every step.
                </p>

                <div className="space-y-3">
                  <a
                    href="tel:+254705704554"
                    className="flex items-center justify-between w-full px-5 py-3.5 bg-white/5 border border-white/10 text-white font-bold text-xs hover:bg-white/10 transition-all duration-200"
                    style={{ borderRadius: "10px" }}
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-[#F2C12C]" />
                      +254 705 704 554
                    </span>
                    <ArrowRight className="w-3 h-3 text-slate-500" />
                  </a>

                  <a
                    href="https://wa.me/254705704554"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all duration-200 shadow-lg"
                    style={{ borderRadius: "10px" }}
                  >
                    WhatsApp Us Now
                  </a>
                </div>
              </div>
            </div>

            {/* Alumni Quote */}
            <div
              className="relative bg-white p-8 border border-slate-200/60 shadow-lg overflow-hidden"
              style={{ borderRadius: "20px" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F2C12C]" style={{ borderRadius: "20px 0 0 20px" }} />

              <span className="text-[9px] font-black uppercase tracking-[0.2em] text-[#F2C12C] block mb-3">
                From Our Alumni
              </span>

              <blockquote className="text-sm text-slate-600 italic leading-relaxed mb-5">
                “From Transmara to Germany as a chef — the language skills from this institute transformed my future completely.”
              </blockquote>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <div>
                  <p className="text-xs font-black text-[#0A2540]">Zablon Ledama</p>
                  <p className="text-[10px] text-slate-400 uppercase tracking-wider mt-0.5">
                    Professional Chef · Germany
                  </p>
                </div>
                <Link
                  href="/student-voices"
                  className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#0A2540] hover:text-[#E30613] transition-colors duration-200"
                >
                  More Stories <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="relative py-20 bg-[#0A2540] text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-[1px] bg-[#F2C12C]" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#F2C12C]">
              Questions?
            </span>
            <div className="w-8 h-[1px] bg-[#F2C12C]" />
          </div>

          <h2 className="text-4xl font-black text-white mb-5 leading-tight tracking-tight">
            We&apos;re Here to Guide You
          </h2>
          <p className="text-white/55 text-base leading-relaxed mb-10 max-w-lg mx-auto">
            Speak directly with our admissions team for personalised guidance on programmes, documents, and your pathway to Germany.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+254705704554"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#E30613] text-white font-black text-xs uppercase tracking-widest hover:bg-[#B8040F] transition-colors duration-200 shadow-lg"
              style={{ borderRadius: "10px" }}
            >
              <Phone className="w-4 h-4" />
              +254 705 704 554
            </a>

            <a
              href="https://wa.me/254705704554"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all duration-200 shadow-lg"
              style={{ borderRadius: "10px" }}
            >
              WhatsApp Us
            </a>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/25 bg-white/8 text-white font-black text-[10px] uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all duration-200"
              style={{ borderRadius: "10px" }}
            >
              Contact Admissions
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Sub Components
function WhyApplyCards() {
  const cards = [
    {
      title: "CEFR-Aligned German Courses",
      desc: "A1 through B2 — the exact proficiency level German employers and universities require.",
      iconBg: "bg-[#E30613]/8",
      iconColor: "text-[#E30613]",
      icon: <Globe className="w-5 h-5" />,
    },
    {
      title: "Real Pathways to Germany",
      desc: "Alumni are working as nurses, chefs, and hospitality professionals across Germany today.",
      iconBg: "bg-[#F2C12C]/15",
      iconColor: "text-[#D4A520]",
      icon: <Award className="w-5 h-5" />,
    },
    {
      title: "Hands-On Training Facilities",
      desc: "Professional kitchens, mock hotel rooms, language labs, and a conference centre.",
      iconBg: "bg-[#0A2540]/10",
      iconColor: "text-[#0A2540]",
      icon: <Shield className="w-5 h-5" />,
    },
  ];

  return (
    <div className="grid sm:grid-cols-3 gap-4">
      {cards.map(({ title, desc, icon, iconBg, iconColor }) => (
        <div
          key={title}
          className="bg-white/95 backdrop-blur-sm border border-slate-200/70 shadow-sm p-6 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          style={{ borderRadius: "14px" }}
        >
          <div className={`w-11 h-11 flex items-center justify-center ${iconBg} ${iconColor}`} style={{ borderRadius: "10px" }}>
            {icon}
          </div>
          <div>
            <p className="font-black text-[#0A2540] text-sm leading-tight">{title}</p>
            <p className="text-xs text-slate-500 mt-1.5 leading-relaxed">{desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function ProgramsOverview() {
  const programs = [
    {
      category: "Language Training",
      icon: <BookOpen className="w-4 h-4" />,
      items: ["German A1–B2 (Goethe)", "English Proficiency", "French · Spanish · Arabic"],
    },
    {
      category: "Hospitality Management",
      icon: <Users className="w-4 h-4" />,
      items: ["Craft Certificate in Catering and Accommodation", "Front Office Operations", "Food & Beverage Management"],
    },
    {
      category: "Travel & Tourism",
      icon: <Compass className="w-4 h-4" />,
      items: ["Craft Certificate in Tour Guide & Travel Operations", "Destination & Itinerary Planning", "Travel Agency Logistics"],
    },
    {
      category: "ICT Pathways",
      icon: <MapPin className="w-4 h-4" />,
      items: ["Web Development and Design","Artificial Inteligence ", "Cybersecurity Fundamentals"],
    },
  ];
  
  return (
    <div className="bg-white border border-slate-200/60 shadow-sm overflow-hidden" style={{ borderRadius: "16px" }}>
      <div className="px-8 py-6 border-b border-slate-100 flex items-center justify-between">
        <div>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613] mb-1">
            Academic Offerings
          </p>
          <h3 className="text-xl font-black text-[#0A2540]">
            Programmes at IIFLHM
          </h3>
        </div>
        <Link
          href="/programs"
          className="hidden sm:inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#0A2540] hover:text-[#E30613] transition-colors duration-200"
        >
          View All <ArrowRight className="w-3 h-3" />
        </Link>
      </div>

      {/* Adjusted grid template fractions to balance out the 4 items perfectly */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:border-b lg:border-b-0 lg:divide-x divide-slate-100">
        {programs.map(({ category, icon, items }) => (
          <div key={category} className="p-7">
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[#0A2540]">{icon}</span>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                {category}
              </p>
            </div>
            <ul className="space-y-2.5">
              {items.map((item) => (
                <li key={item} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                  <span className="w-1 h-1 rounded-full bg-[#E30613] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}