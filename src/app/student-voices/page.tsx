"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  MapPin,
  Maximize2,
  Play,
  Quote,
  X,
} from "lucide-react";
import { Playfair_Display } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  style: "italic",
});

// ── Data ───────────────────────────────────────────────────────────

const testimonials = [
  {
    id: 1,
    name: "Damaris",
    initials: "DA",
    role: "Undergraduate Student",
    location: "Flensburg University, Germany",
    quote:
      "Studying in Germany has been a life-changing experience. The comprehensive language training and cultural immersion through IIFLHM broadened my global outlook and communication skills immensely. I arrived in Germany confident — because I was prepared.",
    videoSrc: "/videos/damaris.mp4",
    reversed: false,
    palette: { bg: "#0A2540", text: "#FFFFFF" },
  },
  {
    id: 2,
    name: "Daniel",
    initials: "DA",
    role: "Student Studying in Germany",
    location: "Germany",
    quote:
      "Studying in Germany has been an incredible journey. I strongly encourage others to learn languages through IIFLHM — it helped me adapt, communicate, and thrive in a completely new environment.",
    videoSrc: "/videos/daniel.mp4",
    reversed: true,
    palette: { bg: "#E30613", text: "#FFFFFF" },
  },
  {
    id: 3,
    name: "Zablon Ledama Kimong'o",
    initials: "ZL",
    role: "Professional Chef",
    location: "Germany",
    quote:
      "Coming from Kenya to Germany, my journey has been truly life-changing. IIFLHM gave me the language skills and hospitality training that opened doors to work abroad. I'm now working in Germany as a chef, and I strongly urge others to take this opportunity — it can transform your future.",
    videoSrc: "/videos/zablon.mp4",
    reversed: false,
    palette: { bg: "#F2C12C", text: "#0A2540" },
  },
  {
    id: 4,
    name: "Sempeyo",
    initials: "SE",
    role: "Nursing Ausbildung",
    location: "Berlin, Germany",
    quote:
      "If you want to be a nurse in Germany, you must at least have attained B1 level. I came through IIFLHM and that training made all the difference. The teachers were patient and the programme was thorough.",
    videoSrc: null,
    reversed: true,
    palette: { bg: "#0A2540", text: "#F2C12C" },
  },
  {
    id: 5,
    name: "Hilda",
    initials: "HI",
    role: "Social Work",
    location: "Flensburg University",
    quote:
      "Learning German at B1 or B2 level made my Anerkennung process much smoother. The institute played a key role in my journey and I am grateful for every lesson.",
    videoSrc: null,
    reversed: false,
    palette: { bg: "#E30613", text: "#FFFFFF" },
  },
  {
    id: 6,
    name: "Saitoti",
    initials: "SA",
    role: "Dairy Farm Ausbildung",
    location: "Lilienthal, Germany",
    quote:
      "Learning the German language will help you connect and find your way to Germany. I came through this institute from Narok South. If I can do it, you can do it.",
    videoSrc: null,
    reversed: true,
    palette: { bg: "#0A2540", text: "#FFFFFF" },
  },
];

const videoTestimonials = testimonials.filter((t) => t.videoSrc);
const quoteTestimonials = testimonials.filter((t) => !t.videoSrc);

const fadeInUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.55, ease: "easeOut" },
};

// ── Page ───────────────────────────────────────────────────────────

export default function StudentVoicesPage() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (activeVideo && videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [activeVideo]);

  useEffect(() => {
    document.body.style.overflow = activeVideo ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeVideo]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#E30613]/20">
      {/* ── Hero ── */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-32 md:pt-48">
        <Image
          src="/images/student-hero-bg.jpg"
          alt="IIFLHM Students"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#051B2E]/85" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-20 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-[2px] bg-[#F2C12C]" />
              <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.35em] text-[#F2C12C]">
                Alumni Success Stories
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-7">
              Our<br />
              <span className="text-[#F2C12C]">Stories.</span>
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl leading-relaxed mb-10">
              Real stories from the people who took the leap — from Narok to Germany, from classrooms to professional kitchens.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Chef Spotlight (Restored) ── */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613] mb-2">Inside Our Facilities</p>
            <h2 className="text-3xl font-black text-[#0A2540]">Chef Spotlight</h2>
          </motion.div>
          <motion.div
            {...fadeInUp}
            className="relative aspect-video max-w-4xl mx-auto bg-black shadow-2xl overflow-hidden group cursor-pointer"
            style={{ borderRadius: "24px" }}
            onClick={() => setActiveVideo("/videos/master-chef.mp4")}
          >
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <div className="w-20 h-20 bg-[#E30613] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300" style={{ borderRadius: "50%" }}>
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
            <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-60">
              <source src="/videos/master-chef.mp4" type="video/mp4" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* ── Video Testimonials ── */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-32">
            {videoTestimonials.map((item) => (
              <motion.div
                key={item.id}
                {...fadeInUp}
                className={`flex flex-col ${item.reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-16`}
              >
                <div className="w-full lg:w-1/2 group">
                  <div
                    className="relative aspect-[4/5] md:aspect-video shadow-2xl cursor-pointer border border-slate-200 bg-slate-900 overflow-hidden"
                    style={{ borderRadius: "20px" }}
                    onClick={() => item.videoSrc && setActiveVideo(item.videoSrc)}
                  >
                    <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-70 group-hover:opacity-90 transition-opacity duration-500">
                      <source src={item.videoSrc!} type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 bg-white/10 border border-white/25 backdrop-blur-xl flex items-center justify-center group-hover:bg-[#F2C12C] transition-all duration-300" style={{ borderRadius: "50%" }}>
                        <Maximize2 className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2">
                  <Quote className="w-8 h-8 text-[#F2C12C] mb-6 opacity-30" />
                  <p className={`${playfair.className} text-xl md:text-2xl font-medium text-[#0A2540] leading-relaxed mb-10 italic`}>
                    &quot;{item.quote}&quot;
                  </p>
                  <div className="flex items-center gap-5">
                    <div className="w-14 h-14 flex items-center justify-center text-base font-black shrink-0" style={{ background: item.palette.bg, color: item.palette.text, borderRadius: "14px" }}>
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-[#0A2540]">{item.name}</h4>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#E30613]">{item.role}</p>
                      <div className="flex items-center gap-1.5 mt-1 text-slate-400">
                        <MapPin className="w-3 h-3" />
                        <span className="text-[10px] font-medium">{item.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quote Grid ── */}
      <section className="py-24 bg-slate-50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid md:grid-cols-3 gap-8">
            {quoteTestimonials.map((item) => (
              <motion.div key={item.id} {...fadeInUp} className="bg-white border border-slate-200/60 p-10 flex flex-col gap-6 text-left" style={{ borderRadius: "24px" }}>
                <Quote className="w-6 h-6 text-[#F2C12C] opacity-30" />
                <p className={`${playfair.className} italic text-slate-600 text-base leading-relaxed flex-1`}>
                  &quot;{item.quote}&quot;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center text-sm font-black shrink-0" style={{ background: item.palette.bg, color: item.palette.text, borderRadius: "12px" }}>{item.initials}</div>
                  <div>
                    <p className="font-black text-[#0A2540] text-sm">{item.name}</p>
                    <div className="flex items-center gap-1 text-slate-400">
                      <MapPin className="w-2.5 h-2.5" />
                      <span className="text-[9px] font-medium">{item.location}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA (Restored) ── */}
      <section className="py-24 px-6 bg-white">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto bg-[#0A2540] text-white p-10 md:p-16 text-center relative overflow-hidden" style={{ borderRadius: "32px" }}>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Start Your Journey Today</h2>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link href="/admissions" className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-[#E30613] text-white font-black text-[11px] uppercase tracking-widest hover:scale-105 transition-all" style={{ borderRadius: "14px" }}>
                Apply Now <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── Video Modal ── */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#051B2E]/95 backdrop-blur-lg">
            <div className="absolute inset-0" onClick={() => setActiveVideo(null)} />
            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.95, opacity: 0 }} className="relative w-full max-w-5xl aspect-video bg-black overflow-hidden" style={{ borderRadius: "24px" }}>
              <button onClick={() => setActiveVideo(null)} className="absolute top-5 right-5 z-[110] bg-white/10 text-white p-2 hover:bg-[#E30613]" style={{ borderRadius: "12px" }}>
                <X className="w-5 h-5" />
              </button>
              <video key={activeVideo} ref={videoRef} controls className="w-full h-full"><source src={activeVideo} type="video/mp4" /></video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
