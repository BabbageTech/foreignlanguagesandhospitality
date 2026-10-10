import { Link } from "@/i18n/routing";
import {
  ArrowRight,
  Award,
  BookOpen,
  Clock,
  Compass,
  Globe,
  GraduationCap,
  Users,
  Zap,
} from "lucide-react";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

const TRACK_META = [
  { id: "languages", number: "01", link: "/academics/languages", accent: "#E30613", icon: Globe, image: "/images/academics/languages.jpg" },
  { id: "hospitality", number: "02", link: "/academics/hospitality-management", accent: "#0A2540", icon: Users, image: "/images/academics/hospitality.jpg" },
  { id: "tourism", number: "03", link: "/academics/travel-tourism", accent: "#059669", icon: Compass, image: "/images/hospitality/tourism.jpg" },
  { id: "ict", number: "04", link: "/academics/ict", accent: "#7C3AED", icon: Zap, image: "/images/ict-cover.jpg" },
  { id: "nursing", number: "05", link: "/academics/nursing-preparation", accent: "#DC2626", icon: GraduationCap, image: "/images/career-support.jpg" },
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.academics" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function AcademicsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.academics");
  const tc = await getTranslations("pages.commonCta");

  const stats = [
    { number: "94%", label: t("stats.employment"), icon: <Award className="w-5 h-5" /> },
    { number: "15+", label: t("stats.programmes"), icon: <BookOpen className="w-5 h-5" /> },
    { number: "600+", label: t("stats.hours"), icon: <Clock className="w-5 h-5" /> },
    { number: "25+", label: t("stats.partners"), icon: <Globe className="w-5 h-5" /> },
  ];

  type TrackContent = {
    title: string;
    subtitle: string;
    desc: string;
    features: string[];
    highlights: string[];
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero — original visual language */}
      <section className="relative bg-[#0A2540] text-white overflow-hidden min-h-[70vh] flex items-end">
        <div className="absolute inset-0 opacity-25">
          <Image src="/images/academics-hero.png" alt="" fill className="object-cover" priority />
        </div>
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#F2C12C]/8 rounded-full blur-[140px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 pt-32 w-full">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-[2px] bg-[#F2C12C]" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#F2C12C]">
                {t("eyebrow") || "IIFLHM"}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter mb-7">
              {t("heroTitle")}
            </h1>
            <p className="text-xl text-white/75 leading-relaxed max-w-2xl mb-12">{t("heroLead")}</p>
            <div className="flex flex-wrap gap-4 mb-12">
              <Link
                href="#programs"
                className="inline-flex items-center gap-2 bg-[#E30613] text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all duration-300 shadow-lg rounded-lg"
              >
                {tc("learnMore")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 font-black text-xs uppercase tracking-widest hover:bg-white/10 transition-all rounded-lg"
              >
                {tc("applyNow")}
              </Link>
            </div>
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/15">
              {stats.map(({ number, label }) => (
                <div key={label}>
                  <p className="text-2xl font-black text-white">{number}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-white/50 mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tracks */}
      <section id="programs" className="max-w-7xl mx-auto px-6 py-20">
        <div className="mb-14">
          <h2 className="text-3xl md:text-4xl font-black text-[#0A2540] mb-3">{t("tracksTitle")}</h2>
          <p className="text-slate-600 max-w-2xl">{t("tracksSubtitle")}</p>
        </div>

        <div className="space-y-16">
          {TRACK_META.map((meta) => {
            const content = t.raw(`tracks.${meta.id}`) as TrackContent;
            const Icon = meta.icon;
            return (
              <article
                key={meta.id}
                className="grid lg:grid-cols-2 gap-0 items-stretch border border-slate-100 rounded-[2rem] overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-64 lg:h-auto min-h-[300px] bg-slate-100">
                  <Image src={meta.image} alt={content?.title ?? meta.id} fill className="object-cover" />
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur px-4 py-2 rounded-xl">
                    <span className="text-[10px] font-black tracking-widest text-[#E30613]">{meta.number}</span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-flex w-10 h-10 items-center justify-center rounded-xl text-white"
                      style={{ backgroundColor: meta.accent }}
                    >
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                        {content?.subtitle}
                      </p>
                      <h3 className="text-2xl font-black text-[#0A2540]">{content?.title}</h3>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">{content?.desc}</p>
                  <ul className="space-y-2 mb-6">
                    {(content?.features ?? []).map((f) => (
                      <li key={f} className="text-sm text-slate-600 flex gap-2">
                        <span className="text-[#E30613] font-black" aria-hidden>
                          ✓
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mb-8">
                    {(content?.highlights ?? []).map((h) => (
                      <span
                        key={h}
                        className="text-[10px] font-black uppercase tracking-wider bg-slate-100 text-[#0A2540] px-3 py-1.5 rounded-full"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={meta.link}
                    className="mt-auto inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-[#E30613] hover:text-[#0A2540] transition-colors"
                  >
                    {tc("learnMore")} <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="bg-[#0A2540] text-white py-20 px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-black mb-4">{t("ctaTitle")}</h2>
        <p className="text-white/70 max-w-xl mx-auto mb-10">{t("ctaBody")}</p>
        <Link
          href="/admissions"
          className="inline-flex items-center gap-2 bg-[#E30613] text-white px-10 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all"
        >
          {tc("applyNow")} <ArrowRight className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
