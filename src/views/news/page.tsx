"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  ExternalLink,
  GraduationCap,
  Info,
  Mic,
  Play,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────

interface NewsArticle {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  link: string;
  readingTime: string;
  isExternal: boolean;
  isVideo?: boolean;
}

// ── Data ───────────────────────────────────────────────────────────

const ALL_NEWS: NewsArticle[] = [
  {
    id: 1,
    category: "International",
    title: "Founder Profiled in German Media: Buten un Binnen & Weser-Kurier",
    excerpt:
      "Germany's leading regional broadcasters spotlight IIFLHM's mission to provide safe and successful migration pathways for young Africans seeking careers in the DACH region.",
    date: "May 8, 2026",
    image: "/images/news/faith-news.png",
    link: "https://www.butenunbinnen.de/videos/wer-kennt-wen-berufsschule-wkw-kenia-migration-bremen-100.html",
    readingTime: "3 min",
    isExternal: true,
  },
  {
    id: 2,
    category: "Partnerships",
    title: "KBC Channel 1 Feature: Empowering Youth through Foreign Languages",
    excerpt:
      "Kenya's national broadcaster covers IIFLHM's German labour mobility agreement and the growing career paths available in German healthcare and hospitality for Kenyan graduates.",
    date: "May 22, 2025",
    image: "https://img.youtube.com/vi/yBbdXdTv2mw/hqdefault.jpg",
    link: "https://www.youtube.com/watch?v=yBbdXdTv2mw",
    readingTime: "5 min",
    isVideo: true,
    isExternal: true,
  },
  {
    id: 3,
    category: "International",
    title: "Weser-Kurier: IIFLHM's Commitment to Integration",
    excerpt:
      "Detailed editorial coverage of our partnership with German associations to ensure IIFLHM graduates arrive culturally and professionally prepared for the German workplace.",
    date: "May 8, 2026",
    image: "/images/news/landscape.jpg",
    link: "https://www.weser-kurier.de/bremen/einsatz-fuer-die-integration-doc7e4c2hyby07mprrckw1",
    readingTime: "4 min",
    isExternal: true,
  },
  {
    id: 4,
    category: "Admissions",
    title: "September 2026 Intake: Applications Now Open",
    excerpt:
      "IIFLHM officially opens applications for the September 2026 academic cycle across all language, hospitality, ICT, and nursing preparation programmes. Spaces are strictly limited.",
    date: "May 14, 2026",
    image: "/images/news/intake.jpg",
    link: "/admissions",
    readingTime: "2 min",
    isExternal: false,
  },
];

const FEATURED_VIDEOS = [
  {
    id: "yBbdXdTv2mw",
    title: "KBC Channel 1 Feature: Mafunzo ya Lugha za Kigeni",
    subtitle: "Kenya Broadcasting Corporation · May 2025",
    thumbnail: "https://img.youtube.com/vi/yBbdXdTv2mw/maxresdefault.jpg",
    duration: "14:10",
  },
  {
    id: "1nfazv_p9zA",
    title: "Narok County Government Recognition",
    subtitle: "Official County Press · 2025",
    thumbnail: "https://img.youtube.com/vi/1nfazv_p9zA/maxresdefault.jpg",
    duration: "08:15",
  },
];

const CATEGORIES = ["All News", "Admissions", "Programs", "International", "Partnerships", "Achievements"];

// ── Page ───────────────────────────────────────────────────────────

export default function NewsPage() {
  const [activeCategory, setActiveCategory] = useState("All News");
  const [activeVideo, setActiveVideo] = useState(FEATURED_VIDEOS[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const filtered =
    activeCategory === "All News"
      ? ALL_NEWS
      : ALL_NEWS.filter((n) => n.category === activeCategory);

  const featuredArticle = ALL_NEWS[0];

  return (
    <div className="min-h-screen bg-white text-[#0A2540]">
      {/* ── Hero ── */}
      <section className="relative h-[78vh] bg-[#0A2540] overflow-hidden flex items-end">
        <div className="absolute inset-0">
          <Image
            src="/images/news-hero.jpg"
            alt="IIFLHM News"
            fill
            className="object-cover object-center opacity-50"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-[#051B2E]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-40 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-[2px] bg-[#F2C12C]" />
              <Mic className="w-4 h-4 text-[#F2C12C]" />
              <span className="text-[11px] font-black uppercase tracking-[0.35em] text-[#F2C12C]">
                Official Press Channel · IIFLHM
              </span>
            </div>

            <h1 className="text-7xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-7">
              The<br />
              <span className="text-[#F2C12C]">Journal.</span>
            </h1>

            <p className="text-lg text-white/70 max-w-xl leading-relaxed">
              Media features, international partnerships, intake announcements,
              and campus milestones — all from the official IIFLHM press channel.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Intake banner + Video Hub ── */}
      <section className="py-20 bg-white relative z-20">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          {/* Intake card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row bg-white overflow-hidden border border-slate-200 shadow-xl rounded-[16px]"
          >
            <div className="md:w-2/5 relative h-64 md:h-auto">
              <Image
                src="/images/news/intake.jpg"
                alt="September 2026 Intake"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0A2540]/40" />
            </div>

            <div className="md:w-3/5 p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-5">
                <GraduationCap className="w-5 h-5 text-[#F2C12C]" />
                <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                  Admissions Update
                </span>
              </div>

              <h2 className="text-3xl font-black text-[#0A2540] leading-tight mb-3">
                September 2026 Intake: <span className="text-[#E30613]">Now Open</span>
              </h2>

              <p className="text-slate-500 text-sm leading-relaxed mb-8 max-w-md">
                Applications are officially open for all Language, Hospitality,
                ICT, and Germany Pathway programmes. Spaces per cohort are
                strictly limited — apply early to secure your place.
              </p>

              <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#E30613] text-white font-black text-[10px] uppercase tracking-widest hover:bg-[#B8040F] transition-colors duration-200 shadow-lg rounded-[8px]"
                >
                  Apply Online Now <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400">
                  <Clock className="w-4 h-4 text-[#F2C12C]" />
                  Deadline: August 2026
                </div>
              </div>
            </div>
          </motion.div>

          {/* Video hub */}
          <div>
            <div className="mb-8">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613] mb-2">
                Media Features
              </p>
              <h2 className="text-3xl font-black text-[#0A2540] tracking-tight">Video Hub</h2>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main video */}
              <div className="lg:w-[68%]">
                <div
                  className="relative aspect-video bg-black shadow-xl border border-slate-200 overflow-hidden group rounded-[14px]"
                >
                  {!isPlaying ? (
                    <>
                      <Image
                        src={activeVideo.thumbnail}
                        alt={activeVideo.title}
                        fill
                        className="object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-300"
                      />
                      <div className="absolute inset-0 bg-[#0A2540]/40" />

                      <button
                        onClick={() => setIsPlaying(true)}
                        className="absolute inset-0 flex items-center justify-center"
                      >
                        <div
                          className="w-20 h-20 bg-[#E30613] flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 rounded-full"
                        >
                          <Play className="w-8 h-8 text-white fill-white ml-1" />
                        </div>
                      </button>

                      <div className="absolute bottom-6 left-6">
                        <div className="flex items-center gap-2 text-[#F2C12C] mb-1">
                          <Youtube className="w-4 h-4" />
                          <span className="text-[9px] font-black uppercase tracking-widest">
                            YouTube Feature
                          </span>
                        </div>
                        <p className="font-black text-white text-lg leading-tight max-w-md">
                          {activeVideo.title}
                        </p>
                        <p className="text-white/55 text-xs mt-1">{activeVideo.subtitle}</p>
                      </div>

                      <div className="absolute top-5 right-5">
                        <span
                          className="text-[9px] font-black text-white bg-black/50 border border-white/20 px-3 py-1.5 backdrop-blur-sm rounded-[5px]"
                        >
                          {activeVideo.duration}
                        </span>
                      </div>
                    </>
                  ) : (
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1`}
                      allowFullScreen
                      title={activeVideo.title}
                    />
                  )}
                </div>
              </div>

              {/* Playlist */}
              <div className="lg:w-[32%]">
                <div
                  className="bg-slate-50 border border-slate-100 p-6 h-full rounded-[14px]"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <BookOpen className="w-4 h-4 text-[#F2C12C]" />
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-[#0A2540]">
                      Video Library
                    </h3>
                  </div>

                  <div className="space-y-3">
                    {FEATURED_VIDEOS.map((vid) => (
                      <button
                        key={vid.id}
                        onClick={() => { setActiveVideo(vid); setIsPlaying(false); }}
                        className={`w-full flex gap-4 p-4 text-left transition-all duration-200 rounded-[10px] ${
                          activeVideo.id === vid.id
                            ? "bg-white shadow-lg border border-[#F2C12C]/30"
                            : "hover:bg-white border border-transparent"
                        }`}
                      >
                        <div className="relative w-16 h-10 shrink-0 overflow-hidden rounded-[6px]">
                          <Image
                            src={vid.thumbnail}
                            alt={vid.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                            <Play className="w-3 h-3 text-white fill-white" />
                          </div>
                        </div>
                        <div className="min-w-0">
                          <p className={`text-[10px] font-black leading-snug truncate ${
                            activeVideo.id === vid.id ? "text-[#0A2540]" : "text-slate-500"
                          }`}>
                            {vid.title}
                          </p>
                          <p className="text-[9px] text-slate-400 mt-0.5">{vid.duration}</p>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div
                    className="mt-6 p-4 bg-[#0A2540] rounded-[10px]"
                  >
                    <div className="flex items-start gap-2">
                      <Info className="w-3.5 h-3.5 text-[#F2C12C] shrink-0 mt-0.5" />
                      <p className="text-[9px] text-white/60 leading-relaxed">
                        Video archives updated weekly on our YouTube channel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Featured article ── */}
      <section className="py-10 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613] mb-1">
              Latest Story
            </p>
            <h2 className="text-2xl font-black text-[#0A2540]">Featured</h2>
          </div>

          <Link
            href={featuredArticle.link}
            target={featuredArticle.isExternal ? "_blank" : "_self"}
            rel={featuredArticle.isExternal ? "noopener noreferrer" : undefined}
            className="group flex flex-col md:flex-row bg-white border border-slate-200/60 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden rounded-[16px]"
          >
            <div className="relative md:w-2/5 h-64 md:h-auto overflow-hidden">
              <Image
                src={featuredArticle.image}
                alt={featuredArticle.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute top-4 left-4">
                <span
                  className="text-[9px] font-black uppercase tracking-widest bg-[#F2C12C] text-[#0A2540] px-3 py-1.5 rounded-[5px]"
                >
                  {featuredArticle.category}
                </span>
              </div>
            </div>

            <div className="md:w-3/5 p-10 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-4 text-[10px] font-black uppercase text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#F2C12C]" />
                  {featuredArticle.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F2C12C]" />
                  {featuredArticle.readingTime} read
                </span>
              </div>

              <h3 className="text-2xl font-black text-[#0A2540] leading-tight">
                {featuredArticle.title}
              </h3>

              <p className="text-slate-500 text-sm leading-relaxed">{featuredArticle.excerpt}</p>

              <div className="flex items-center gap-2 text-[#E30613] font-black text-[10px] uppercase tracking-widest mt-2">
                {featuredArticle.isExternal ? (
                  <>Read Full Story <ExternalLink className="w-3.5 h-3.5" /></>
                ) : (
                  <>Read More <ArrowRight className="w-3.5 h-3.5" /></>
                )}
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* ── News grid ── */}
      <section className="py-20 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center mb-12 gap-6">
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613] mb-1">
                Browse All
              </p>
              <h2 className="text-4xl font-black text-[#0A2540] tracking-tight">
                Institute Chronicles
              </h2>
            </div>

            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 text-[9px] font-black uppercase tracking-widest transition-all duration-200 rounded-[6px] ${
                    activeCategory === cat
                      ? "bg-[#0A2540] text-white shadow-lg"
                      : "bg-slate-50 text-slate-500 border border-slate-200 hover:border-[#0A2540] hover:text-[#0A2540]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((news) => (
                <motion.div
                  key={news.id}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.2 }}
                  className="group bg-white border border-slate-200/60 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col rounded-[14px]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={news.image}
                      alt={news.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    <div className="absolute top-4 left-4">
                      <span
                        className="text-[9px] font-black uppercase tracking-widest bg-[#F2C12C] text-[#0A2540] px-3 py-1.5 rounded-[4px]"
                      >
                        {news.category}
                      </span>
                    </div>

                    {news.isVideo && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-12 h-12 bg-[#E30613]/80 backdrop-blur-sm flex items-center justify-center rounded-full"
                        >
                          <Play className="w-5 h-5 text-white fill-white" />
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="p-7 flex flex-col flex-1 gap-3">
                    <div className="flex items-center gap-4 text-[9px] font-black uppercase text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3 h-3 text-[#F2C12C]" />
                        {news.date}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="w-3 h-3 text-[#F2C12C]" />
                        {news.readingTime}
                      </span>
                    </div>

                    <h4 className="text-base font-black text-[#0A2540] leading-tight flex-1">
                      {news.title}
                    </h4>

                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {news.excerpt}
                    </p>

                    <div className="h-px bg-slate-100 mt-2" />

                    <Link
                      href={news.link}
                      target={news.isExternal ? "_blank" : "_self"}
                      rel={news.isExternal ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-2 text-[#E30613] font-black text-[9px] uppercase tracking-widest hover:gap-3 transition-all duration-200"
                    >
                      {news.isExternal ? "Read Full Story" : "Read More"}
                      {news.isExternal ? (
                        <ExternalLink className="w-3 h-3" />
                      ) : (
                        <ArrowRight className="w-3 h-3" />
                      )}
                    </Link>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="pb-24 pt-8 px-6 bg-white">
        <div
          className="max-w-6xl mx-auto bg-[#0A2540] p-14 text-center shadow-2xl relative overflow-hidden rounded-[20px]"
        >
          <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F2C12C]" />
          <div className="absolute -bottom-16 -right-16 w-72 h-72 bg-[#F2C12C]/8 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F2C12C] mb-4">
              Stay Connected
            </p>
            <h2 className="text-4xl font-black text-white mb-3 tracking-tight">
              Stay Informed.
            </h2>
            <p className="text-slate-400 text-sm mb-10 max-w-md mx-auto leading-relaxed">
              Subscribe to receive intake announcements, alumni stories, and
              media features directly to your inbox.
            </p>

            <form
              className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 p-2 bg-white/5 border border-white/10 rounded-[12px]"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 bg-transparent text-white text-sm placeholder:text-white/35 focus:outline-none"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#F2C12C] text-[#0A2540] font-black text-[10px] uppercase tracking-widest hover:bg-white transition-all duration-200 rounded-[8px]"
              >
                Subscribe
              </button>
            </form>

            <p className="text-[9px] text-white/30 mt-4 uppercase tracking-wider">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}