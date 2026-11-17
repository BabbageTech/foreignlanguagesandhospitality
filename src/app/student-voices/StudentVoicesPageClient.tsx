"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Maximize2, Play, Quote, X } from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import { getStudentVoicesCopy } from "@/i18n/student-voices";
import { localeConfig, localePath, type Locale } from "@/i18n/config";
import { useAccessibleDialog } from "@/hooks/useAccessibleDialog";

const playfair = Playfair_Display({ subsets: ["latin"], display: "swap", style: "italic" });
const sourceTestimonials = [
  { id: 1, name: "Damaris", initials: "DA", videoSrc: "/videos/Damaris.mp4", reversed: false, palette: { bg: "#0A2540", text: "#FFFFFF" } },
  { id: 2, name: "Daniel", initials: "DA", videoSrc: "/videos/Daniel.mp4", reversed: true, palette: { bg: "#E30613", text: "#FFFFFF" } },
  { id: 3, name: "Zablon Ledama Kimong'o", initials: "ZL", videoSrc: "/videos/Zablon.mp4", reversed: false, palette: { bg: "#F2C12C", text: "#0A2540" } },
  { id: 4, name: "Sempeyo", initials: "SE", videoSrc: null, reversed: true, palette: { bg: "#0A2540", text: "#F2C12C" } },
  { id: 5, name: "Hilda", initials: "HI", videoSrc: null, reversed: false, palette: { bg: "#E30613", text: "#FFFFFF" } },
  { id: 6, name: "Saitoti", initials: "SA", videoSrc: null, reversed: true, palette: { bg: "#0A2540", text: "#FFFFFF" } },
] as const;

const fadeInUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-40px" }, transition: { duration: 0.55, ease: "easeOut" } };

export default function StudentVoicesPageClient({ locale }: { locale: Locale }) {
  const copy = getStudentVoicesCopy(locale);
  const prefersReducedMotion = useReducedMotion();
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const videoDialogTitleId = useId();
  const closeModal = useCallback(() => setActiveVideo(null), []);
  useAccessibleDialog(Boolean(activeVideo), closeModal, dialogRef, closeButtonRef);
  const testimonials = sourceTestimonials.map(person => ({ ...person, ...copy.testimonials[person.id] }));
  const videoTestimonials = testimonials.filter(item => item.videoSrc);
  const quoteTestimonials = testimonials.filter(item => !item.videoSrc);

  useEffect(() => {
    if (activeVideo && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => undefined);
    }
  }, [activeVideo]);

  return (
    <main className="min-h-screen bg-white font-sans selection:bg-[#E30613]/20">
      <section className="relative flex min-h-[85vh] items-center overflow-hidden pt-32 md:pt-48"><Image src="/images/student-hero-bg.jpg" alt={copy.heroText} fill priority className="object-cover object-center"/><div aria-hidden="true" className="absolute inset-0 bg-[#051B2E]/85"/><div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-20"><motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:0.7}}><div className="mb-7 flex items-center gap-3"><div className="h-[2px] w-10 bg-[#F2C12C]"/><span className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F2C12C] md:text-[11px]">{copy.eyebrow}</span></div><h1 className="mb-7 text-5xl font-black leading-[0.9] tracking-tighter text-white md:text-8xl">{copy.heroLead}<br/><span className="text-[#F2C12C]">{copy.heroAccent}</span></h1><p className="mb-8 max-w-2xl text-base leading-relaxed text-white/80 md:text-xl">{copy.heroText}</p></motion.div></div></section>

      <section className="border-y border-slate-100 bg-slate-50 py-20"><div className="mx-auto max-w-7xl px-6"><motion.div {...fadeInUp} className="mb-12 text-center"><p className="mb-2 text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613]">{copy.facilities}</p><h2 className="text-3xl font-black text-[#0A2540]">{copy.chefSpotlight}</h2></motion.div><motion.button {...fadeInUp} type="button" onClick={()=>setActiveVideo("/videos/master-chef.mp4")} aria-label={`${copy.playVideo}: ${copy.chefSpotlight}`} className="group relative mx-auto block aspect-video w-full max-w-4xl cursor-pointer overflow-hidden bg-black text-left shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2C12C]" style={{borderRadius:"24px"}}><video autoPlay={prefersReducedMotion !== true} muted loop playsInline aria-hidden="true" tabIndex={-1} className="h-full w-full object-cover opacity-60"><source src="/videos/master-chef.mp4" type="video/mp4"/></video><span aria-hidden="true" className="absolute inset-0 z-10 flex items-center justify-center"><span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#E30613] shadow-2xl transition-transform duration-300 group-hover:scale-110"><Play className="ml-1 h-8 w-8 fill-white text-white"/></span></span></motion.button></div></section>

      <section className="py-24"><div className="mx-auto max-w-6xl px-6"><div className="space-y-32">{videoTestimonials.map(item=><motion.article key={item.id} {...fadeInUp} className={`flex flex-col items-center gap-12 lg:gap-16 ${item.reversed?"lg:flex-row-reverse":"lg:flex-row"}`}>
        <div className="w-full lg:w-1/2"><button type="button" onClick={()=>item.videoSrc&&setActiveVideo(item.videoSrc)} aria-label={`${copy.playVideo}: ${item.name}`} className="group relative block aspect-[4/5] w-full cursor-pointer overflow-hidden border border-slate-200 bg-slate-900 shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2C12C] md:aspect-video" style={{borderRadius:"20px"}}><video autoPlay={prefersReducedMotion !== true} muted loop playsInline aria-hidden="true" tabIndex={-1} className="h-full w-full object-cover opacity-70 transition-opacity duration-500 group-hover:opacity-90"><source src={item.videoSrc || undefined} type="video/mp4"/></video><span aria-hidden="true" className="absolute inset-0 flex items-center justify-center"><span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/25 bg-white/10 backdrop-blur-xl transition-all duration-300 group-hover:bg-[#F2C12C]"><Maximize2 className="h-6 w-6 text-white"/></span></span></button></div>
        <div className="w-full lg:w-1/2"><Quote className="mb-6 h-8 w-8 text-[#F2C12C] opacity-40"/><blockquote className={`${playfair.className} mb-10 text-xl font-medium italic leading-relaxed text-[#0A2540] md:text-2xl`}>&ldquo;{item.quote}&rdquo;</blockquote><div className="flex items-center gap-5"><div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[14px] text-base font-black" style={{background:item.palette.bg,color:item.palette.text}}>{item.initials}</div><div><h3 className="text-lg font-black text-[#0A2540]">{item.name}</h3><p className="text-[10px] font-black uppercase tracking-[0.15em] text-[#E30613]">{item.role}</p><div className="mt-1 flex items-center gap-1.5 text-slate-400"><MapPin className="h-3 w-3"/><span className="text-[10px] font-medium">{item.location}</span></div></div></div></div>
      </motion.article>)}</div></div></section>

      <section className="border-t border-slate-100 bg-slate-50 py-24"><div className="mx-auto max-w-7xl px-6"><div className="mb-10 text-center"><h2 className="text-3xl font-black text-[#0A2540]">{copy.quoteStories}</h2></div><div className="grid gap-8 md:grid-cols-3">{quoteTestimonials.map(item=><motion.article key={item.id} {...fadeInUp} className="flex flex-col gap-6 border border-slate-200/60 bg-white p-9 text-left" style={{borderRadius:"24px"}}><Quote className="h-6 w-6 text-[#F2C12C] opacity-40"/><blockquote className={`${playfair.className} flex-1 text-base italic leading-relaxed text-slate-600`}>&ldquo;{item.quote}&rdquo;</blockquote><div className="flex items-center gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-black" style={{background:item.palette.bg,color:item.palette.text}}>{item.initials}</div><div><p className="text-sm font-black text-[#0A2540]">{item.name}</p><div className="flex items-center gap-1 text-slate-400"><MapPin className="h-2.5 w-2.5"/><span className="text-[9px] font-medium">{item.location}</span></div></div></div></motion.article>)}</div><p className="mx-auto mt-10 max-w-4xl text-center text-xs leading-relaxed text-slate-500">{copy.experienceNote}</p></div></section>

      <section className="bg-white px-6 py-24"><motion.div {...fadeInUp} className="relative mx-auto max-w-4xl overflow-hidden bg-[#0A2540] p-10 text-center text-white md:p-16" style={{borderRadius:"32px"}}><h2 className="mb-6 text-4xl font-black tracking-tight md:text-5xl">{copy.journeyTitle}</h2><Link href={localePath("/admissions", locale)} className="inline-flex items-center justify-center gap-2 rounded-[14px] bg-[#E30613] px-10 py-5 text-[11px] font-black uppercase tracking-widest text-white transition-all hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#F2C12C]">{copy.apply}<ArrowRight className="h-4 w-4"/></Link></motion.div></section>

      <AnimatePresence>{activeVideo&&<motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#051B2E]/95 p-4 backdrop-blur-lg" onClick={closeModal}><div aria-hidden="true" className="absolute inset-0"/><motion.div ref={dialogRef} role="dialog" aria-modal="true" aria-labelledby={videoDialogTitleId} dir={localeConfig[locale].dir} tabIndex={-1} initial={{scale:0.95,opacity:0}} animate={{scale:1,opacity:1}} exit={{scale:0.95,opacity:0}} className="relative aspect-video w-full max-w-5xl overflow-hidden bg-black focus:outline-none" style={{borderRadius:"24px"}} onClick={event=>event.stopPropagation()}><h2 id={videoDialogTitleId} className="sr-only">{copy.videoDialogTitle}</h2><button ref={closeButtonRef} type="button" onClick={closeModal} aria-label={copy.videoClose} className="absolute end-5 top-5 z-[110] rounded-xl bg-white/15 p-3 text-white transition-colors hover:bg-[#E30613] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2C12C]"><X className="h-5 w-5"/></button><video key={activeVideo} ref={videoRef} controls autoPlay className="h-full w-full"><source src={activeVideo} type="video/mp4"/></video></motion.div></motion.div>}</AnimatePresence>
    </main>
  );
}
