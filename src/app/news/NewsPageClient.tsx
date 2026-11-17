"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, Calendar, Clock, ExternalLink, GraduationCap, Info, Mic, Play, Youtube } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { getNewsCopy } from "@/i18n/news";
import { localeConfig, localePath, type Locale } from "@/i18n/config";

type NewsRecord = { id: number; category: string; date: string; image: string; link: string; minutes: number; external: boolean; video?: boolean };

const NEWS_RECORDS: NewsRecord[] = [
  { id: 1, category: "International", date: "2026-05-08", image: "/images/news/faith-news.png", link: "https://www.butenunbinnen.de/videos/wer-kennt-wen-berufsschule-wkw-kenia-migration-bremen-100.html", minutes: 3, external: true },
  { id: 2, category: "Partnerships", date: "2025-05-22", image: "https://img.youtube.com/vi/yBbdXdTv2mw/hqdefault.jpg", link: "https://www.youtube.com/watch?v=yBbdXdTv2mw", minutes: 5, external: true, video: true },
  { id: 3, category: "International", date: "2026-05-08", image: "/images/news/Landscape.jpg", link: "https://www.weser-kurier.de/bremen/einsatz-fuer-die-integration-doc7e4c2hyby07mprrckw1", minutes: 4, external: true },
  { id: 4, category: "Admissions", date: "2026-05-14", image: "/images/news/intake.jpg", link: "/admissions", minutes: 2, external: false },
] as const;

const VIDEO_RECORDS = [
  { id: "yBbdXdTv2mw", thumbnail: "https://img.youtube.com/vi/yBbdXdTv2mw/maxresdefault.jpg", duration: "14:10" },
  { id: "1nfazv_p9zA", thumbnail: "https://img.youtube.com/vi/1nfazv_p9zA/maxresdefault.jpg", duration: "08:15" },
] as const;
const CATEGORY_IDS = ["All News", "Admissions", "Programs", "International", "Partnerships", "Achievements"];

export default function NewsPageClient({ locale }: { locale: Locale }) {
  const copy = getNewsCopy(locale);
  const [activeCategory, setActiveCategory] = useState("All News");
  const [activeVideoId, setActiveVideoId] = useState<string>(VIDEO_RECORDS[0].id);
  const [isPlaying, setIsPlaying] = useState(false);
  const articles = useMemo(() => {
    const dateFormatter = new Intl.DateTimeFormat(localeConfig[locale].intl, { dateStyle: "medium", timeZone: "UTC" });
    return NEWS_RECORDS.map(record => ({
      ...record,
      link: record.external ? record.link : localePath(record.link, locale),
      ...copy.articles[record.id],
      formattedDate: dateFormatter.format(new Date(`${record.date}T12:00:00Z`)),
      readingTime: `${record.minutes} ${copy.minuteLabel} ${copy.readTime}`,
    }));
  }, [copy, locale]);
  const filtered = activeCategory === "All News" ? articles : articles.filter(article => article.category === activeCategory);
  const featuredArticle = articles[0];
  const activeVideo = VIDEO_RECORDS.find(video => video.id === activeVideoId) || VIDEO_RECORDS[0];
  const activeVideoCopy = copy.videos[activeVideo.id];

  return (
    <main className="min-h-screen bg-white text-[#0A2540]">
      <section className="relative flex min-h-[620px] items-end overflow-hidden bg-[#0A2540] md:h-[78vh]">
        <div className="absolute inset-0"><Image src="/images/news-hero.jpg" alt={copy.heroDescription} fill priority className="object-cover object-center opacity-50" /></div>
        <div aria-hidden="true" className="absolute inset-0 bg-[#051B2E]/70" />
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-32 pt-32 md:pb-40">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
            <div className="mb-7 flex items-center gap-3"><div className="h-[2px] w-10 bg-[#F2C12C]"/><Mic className="h-4 w-4 text-[#F2C12C]"/><span className="text-[11px] font-black uppercase tracking-[0.25em] text-[#F2C12C]">{copy.heroEyebrow}</span></div>
            <h1 className="mb-7 text-6xl font-black leading-[0.95] tracking-tighter text-white md:text-8xl">{copy.heroLead}<br/><span className="text-[#F2C12C]">{copy.heroAccent}</span></h1>
            <p className="max-w-xl text-lg leading-relaxed text-white/80">{copy.heroDescription}</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 bg-white py-20">
        <div className="mx-auto max-w-7xl space-y-16 px-6">
          <motion.article initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl md:flex-row">
            <div className="relative h-64 md:h-auto md:w-2/5"><Image src="/images/news/intake.jpg" alt={copy.archiveTitle} fill className="object-cover"/><div aria-hidden="true" className="absolute inset-0 bg-[#0A2540]/40"/></div>
            <div className="flex flex-col justify-center p-9 md:w-3/5 lg:p-14">
              <div className="mb-5 flex items-center gap-3"><GraduationCap className="h-5 w-5 text-[#F2C12C]"/><span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">{copy.archiveLabel}</span></div>
              <h2 className="mb-3 text-3xl font-black leading-tight text-[#0A2540]">{copy.archiveTitle}</h2>
              <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-600">{copy.archiveText}</p>
              <div className="border-t border-slate-100 pt-6"><Link href={localePath("/admissions", locale)} className="inline-flex items-center gap-2 rounded-lg bg-[#E30613] px-8 py-4 text-[10px] font-black uppercase tracking-widest text-white shadow-lg transition-colors hover:bg-[#B8040F]">{copy.archiveCta}<ArrowRight className="h-3.5 w-3.5"/></Link></div>
            </div>
          </motion.article>

          <section aria-labelledby="video-hub-title">
            <div className="mb-8"><p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613]">{copy.mediaFeatures}</p><h2 id="video-hub-title" className="text-3xl font-black tracking-tight text-[#0A2540]">{copy.videoHub}</h2></div>
            <div className="flex flex-col gap-8 lg:flex-row">
              <div className="lg:w-[68%]"><div className="group relative aspect-video overflow-hidden rounded-[14px] border border-slate-200 bg-black shadow-xl">
                {!isPlaying ? <>
                  <Image src={activeVideo.thumbnail} alt={activeVideoCopy.title} fill className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-90"/><div aria-hidden="true" className="absolute inset-0 bg-[#0A2540]/40"/>
                  <button type="button" onClick={() => setIsPlaying(true)} aria-label={`${copy.playVideo}: ${activeVideoCopy.title}`} className="absolute inset-0 flex items-center justify-center focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-inset focus-visible:ring-[#F2C12C]"><span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E30613] shadow-2xl transition-transform duration-300 hover:scale-110"><Play className="ml-1 h-8 w-8 fill-white text-white"/></span></button>
                  <div className="pointer-events-none absolute bottom-6 left-6"><div className="mb-1 flex items-center gap-2 text-[#F2C12C]"><Youtube className="h-4 w-4"/><span className="text-[9px] font-black uppercase tracking-widest">{copy.youtubeFeature}</span></div><p className="max-w-md text-lg font-black leading-tight text-white">{activeVideoCopy.title}</p><p className="mt-1 text-xs text-white/70">{activeVideoCopy.subtitle}</p></div>
                  <span className="absolute right-5 top-5 rounded bg-black/50 px-3 py-1.5 text-[9px] font-black text-white">{activeVideo.duration}</span>
                </> : <iframe className="h-full w-full" src={`https://www.youtube-nocookie.com/embed/${activeVideo.id}?autoplay=1`} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen title={activeVideoCopy.title}/>}
              </div></div>
              <aside className="rounded-[14px] border border-slate-100 bg-slate-50 p-6 lg:w-[32%]"><div className="mb-6 flex items-center gap-2"><BookOpen className="h-4 w-4 text-[#F2C12C]"/><h3 className="text-[10px] font-black uppercase tracking-widest text-[#0A2540]">{copy.videoLibrary}</h3></div>
                <div className="space-y-3">{VIDEO_RECORDS.map(video=>{const videoCopy=copy.videos[video.id];const selected=activeVideo.id===video.id;return <button key={video.id} type="button" aria-pressed={selected} onClick={()=>{setActiveVideoId(video.id);setIsPlaying(false);}} className={`flex w-full gap-4 rounded-[10px] border p-4 text-left transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C12C] ${selected?"border-[#F2C12C]/30 bg-white shadow-lg":"border-transparent hover:bg-white"}`}><span className="relative h-10 w-16 shrink-0 overflow-hidden rounded-[6px]"><Image src={video.thumbnail} alt="" fill className="object-cover"/><span aria-hidden="true" className="absolute inset-0 flex items-center justify-center bg-black/30"><Play className="h-3 w-3 fill-white text-white"/></span></span><span className="min-w-0"><span className={`block truncate text-[10px] font-black leading-snug ${selected?"text-[#0A2540]":"text-slate-500"}`}>{videoCopy.title}</span><span className="mt-0.5 block text-[9px] text-slate-400">{video.duration}</span></span></button>})}</div>
                <div className="mt-6 rounded-[10px] bg-[#0A2540] p-4"><div className="flex items-start gap-2"><Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#F2C12C]"/><p className="text-[9px] leading-relaxed text-white/70">{copy.videoArchiveNote}</p></div></div>
              </aside>
            </div>
          </section>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-slate-50 py-12"><div className="mx-auto max-w-7xl px-6"><div className="mb-8"><p className="mb-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613]">{copy.latestStory}</p><h2 className="text-2xl font-black text-[#0A2540]">{copy.featured}</h2></div>
        <a href={featuredArticle.link} target="_blank" rel="noopener noreferrer" className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200/60 bg-white shadow-lg transition-all duration-300 hover:shadow-xl md:flex-row">
          <div className="relative h-64 overflow-hidden md:w-2/5"><Image src={featuredArticle.image} alt={featuredArticle.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105"/><span className="absolute left-4 top-4 rounded bg-[#F2C12C] px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-[#0A2540]">{copy.categories[featuredArticle.category]}</span></div>
          <div className="flex flex-col justify-center gap-4 p-9 md:w-3/5 md:p-10"><div className="flex flex-wrap items-center gap-4 text-[10px] font-black uppercase text-slate-400"><span className="flex items-center gap-1.5"><Calendar className="h-3.5 w-3.5 text-[#F2C12C]"/>{featuredArticle.formattedDate}</span><span className="flex items-center gap-1.5"><Clock className="h-3.5 w-3.5 text-[#F2C12C]"/>{featuredArticle.readingTime}</span></div><h3 className="text-2xl font-black leading-tight text-[#0A2540]">{featuredArticle.title}</h3><p className="text-sm leading-relaxed text-slate-500">{featuredArticle.excerpt}</p><span className="mt-2 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-[#E30613]">{copy.readFullStory}<ExternalLink className="h-3.5 w-3.5"/></span></div>
        </a>
      </div></section>

      <section className="border-t border-slate-50 bg-white py-20"><div className="mx-auto max-w-7xl px-6"><div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between"><div><p className="mb-1 text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613]">{copy.browseAll}</p><h2 className="text-4xl font-black tracking-tight text-[#0A2540]">{copy.chronicles}</h2></div><div className="flex flex-wrap gap-2" role="group" aria-label={copy.categoryFilter}>{CATEGORY_IDS.map(category=><button key={category} type="button" aria-pressed={activeCategory===category} onClick={()=>setActiveCategory(category)} className={`rounded-md border px-5 py-2.5 text-[9px] font-black uppercase tracking-widest transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C12C] ${activeCategory===category?"border-[#0A2540] bg-[#0A2540] text-white shadow-lg":"border-slate-200 bg-slate-50 text-slate-500 hover:border-[#0A2540] hover:text-[#0A2540]"}`}>{copy.categories[category]}</button>)}</div></div>
        {filtered.length===0?<p className="rounded-2xl border border-dashed border-slate-300 py-16 text-center text-sm text-slate-500">{copy.emptyResults}</p>:<motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"><AnimatePresence mode="popLayout">{filtered.map(news=><motion.article key={news.id} layout initial={{opacity:0,scale:0.97}} animate={{opacity:1,scale:1}} exit={{opacity:0,scale:0.97}} transition={{duration:0.2}} className="group flex flex-col overflow-hidden rounded-[14px] border border-slate-200/60 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"><div className="relative h-48 overflow-hidden"><Image src={news.image} alt={news.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105"/><span className="absolute left-4 top-4 rounded bg-[#F2C12C] px-3 py-1.5 text-[9px] font-black uppercase tracking-widest text-[#0A2540]">{copy.categories[news.category]}</span>{news.video&&<span aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E30613]/80"><Play className="h-5 w-5 fill-white text-white"/></span></span>}</div><div className="flex flex-1 flex-col gap-3 p-7"><div className="flex flex-wrap items-center gap-4 text-[9px] font-black uppercase text-slate-400"><span className="flex items-center gap-1.5"><Calendar className="h-3 w-3 text-[#F2C12C]"/>{news.formattedDate}</span><span className="flex items-center gap-1.5"><Clock className="h-3 w-3 text-[#F2C12C]"/>{news.readingTime}</span></div><h3 className="flex-1 text-base font-black leading-tight text-[#0A2540]">{news.title}</h3><p className="line-clamp-3 text-xs leading-relaxed text-slate-500">{news.excerpt}</p><div className="mt-2 h-px bg-slate-100"/><a href={news.link} target={news.external?"_blank":undefined} rel={news.external?"noopener noreferrer":undefined} className="flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-[#E30613] transition-all duration-200 hover:gap-3">{news.external?copy.readFullStory:copy.readMore}{news.external?<ExternalLink className="h-3 w-3"/>:<ArrowRight className="h-3 w-3"/>}</a></div></motion.article>)}</AnimatePresence></motion.div>}
      </div></section>

      <section className="bg-white px-6 pb-24 pt-8"><div className="relative mx-auto max-w-6xl overflow-hidden rounded-[20px] bg-[#0A2540] p-10 text-center shadow-2xl md:p-14"><div aria-hidden="true" className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[#F2C12C]/10 blur-[100px]"/><div className="absolute bottom-0 left-0 top-0 w-1 bg-[#F2C12C]"/><div className="relative z-10"><p className="mb-4 text-[10px] font-black uppercase tracking-[0.25em] text-[#F2C12C]">{copy.stayConnected}</p><h2 className="mb-3 text-4xl font-black tracking-tight text-white">{copy.stayInformed}</h2><p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-slate-300">{copy.stayText}</p><Link href={localePath("/contact", locale)} className="inline-flex items-center justify-center rounded-lg bg-[#F2C12C] px-8 py-4 text-[10px] font-black uppercase tracking-widest text-[#0A2540] transition-colors hover:bg-white">{copy.contact}<ArrowRight className="ml-2 h-3.5 w-3.5"/></Link></div></div></section>
    </main>
  );
}
