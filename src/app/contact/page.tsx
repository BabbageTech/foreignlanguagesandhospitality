"use client";

import ContactForm from "@/components/contact/ContactForm";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  ChevronRight,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const contactCards = [
  {
    title: "Official Correspondence",
    icon:  <Mail className="w-5 h-5 text-[#E30613]" />,
    links: [
      { text: "info@foreignlanguagesandhospitality.com",      href: "mailto:info@foreignlanguagesandhospitality.com" },
      { text: "admissions@foreignlanguagesandhospitality.com", href: "mailto:admissions@foreignlanguagesandhospitality.com" },
    ],
  },
  {
    title: "Direct Hotlines",
    icon:  <Phone className="w-5 h-5 text-[#E30613]" />,
    links: [
      { text: "+254 705 704 554", href: "tel:+254723104680" },
      { text: "+254 723 104 680", href: "tel:+254705704554" },
    ],
  },
  {
    title: "Campus Location",
    icon:  <MapPin className="w-5 h-5 text-[#E30613]" />,
    links: [
      { text: "Newline Building, Narok Town", href: null },
      { text: "Mon–Fri, 8:00 AM – 6:00 PM EAT", href: null },
    ],
  },
  {
    title: "Office Hours",
    icon:  <Clock className="w-5 h-5 text-[#E30613]" />,
    links: [
      { text: "Saturday by appointment only", href: null },
      { text: "Response time: within 24 hours", href: null },
    ],
  },
];

const quickLinks = [
  { label: "View Academic Programmes",  href: "/academics" },
  { label: "Start Your Application",    href: "/admissions" },
  { label: "Read Student Voices",       href: "/student-voices" },
  { label: "Download Brochure",         href: "/docs/brochure.pdf" },
];

const fadeInUp = {
  initial:     { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport:    { once: true, margin: "-40px" },
  transition:  { duration: 0.55, ease: "easeOut" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-[#E30613]/20 selection:text-[#0A2540]">

      {/* ── Hero ── */}
      <section className="relative min-h-[70vh] flex items-end bg-[#0A2540] overflow-hidden">

        {/* Background image */}
        <Image
          src="/images/contact/hero-bg.jpg"
          alt="IIFLHM Campus"
          fill
          className="object-cover opacity-20"
          priority
        />

        {/* Ambient glow */}
        <div className="absolute -top-32 left-1/4 w-[600px] h-[600px] bg-[#E30613]/20 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] bg-[#F2C12C]/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Dot texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Bottom page fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-36 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            {/* Live badge */}
            <div className="inline-flex items-center gap-2.5 mb-8 px-5 py-2.5 bg-white/5 border border-white/15 backdrop-blur-md"
              style={{ borderRadius: "8px" }}
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E30613] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E30613]" />
              </span>
              <span className="text-white font-black uppercase tracking-[0.3em] text-[10px]">
                Admissions Open · Sept 2026
              </span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter mb-7">
              Partnering in<br />Your{" "}
              <span className="text-[#F2C12C]">Global Journey.</span>
            </h1>

            <p className="text-lg text-white/70 leading-relaxed max-w-xl mb-12">
              Whether you are looking to master a new language or launch a global
              career in hospitality — our Narok campus team is here to guide every
              step of your journey.
            </p>

            {/* Quick stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/15">
              {[
                { value: "24h",    label: "Average Response Time" },
                { value: "2",      label: "Campus Locations" },
                { value: "8 AM",   label: "Office Opens" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-black text-[#F2C12C] leading-none">{value}</p>
                  <p className="text-xs text-white/50 mt-1.5 font-medium uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Main content ── */}
      <main className="max-w-7xl mx-auto px-6 py-20 -mt-4">
        <div className="grid lg:grid-cols-12 gap-12 items-start">

          {/* ── Left column ── */}
          <div className="lg:col-span-5 space-y-8">

            <motion.div {...fadeInUp}>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613] mb-3">
                Get in Touch
              </p>
              <h2 className="text-3xl font-black text-[#0A2540] tracking-tight mb-4">
                We&apos;d Love to Hear from You
              </h2>
              <p className="text-slate-500 text-sm leading-relaxed">
                Experience our world-class language labs and hospitality simulation
                suites. We offer guided tours for prospective students every
                weekday — no appointment needed.
              </p>
            </motion.div>

            {/* Contact cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {contactCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08 }}
                  className="group p-6 border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-lg hover:border-slate-200 transition-all duration-300"
                  style={{ borderRadius: "14px" }}
                >
                  <div
                    className="w-10 h-10 bg-white border border-slate-100 shadow-sm flex items-center justify-center mb-4 group-hover:bg-[#E30613]/5 transition-colors duration-300"
                    style={{ borderRadius: "10px" }}
                  >
                    {card.icon}
                  </div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 mb-3">
                    {card.title}
                  </p>
                  <div className="space-y-2">
                    {card.links.map(({ text, href }) =>
                      href ? (
                        <a
                          key={text}
                          href={href}
                          className="flex items-center gap-1.5 text-sm font-bold text-[#0A2540] hover:text-[#E30613] transition-colors duration-200 group/link"
                        >
                          {text}
                          <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover/link:opacity-100 -translate-x-1 group-hover/link:translate-x-0 transition-all duration-200" />
                        </a>
                      ) : (
                        <p key={text} className="text-sm font-medium text-slate-500">
                          {text}
                        </p>
                      )
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              {...fadeInUp}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.985 }}
              href="https://wa.me/254705704554"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-6 bg-[#25D366] text-white shadow-xl shadow-green-500/20 group"
              style={{ borderRadius: "14px" }}
            >
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 bg-white/20 flex items-center justify-center backdrop-blur-sm"
                  style={{ borderRadius: "10px" }}
                >
                  <MessageSquare className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/70 mb-0.5">
                    Instant Support
                  </p>
                  <p className="text-lg font-black tracking-tight">Chat on WhatsApp</p>
                  <p className="text-[9px] text-white/60 font-medium">+254 705704554 · Replies within minutes</p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-200" />
            </motion.a>

            {/* Quick links */}
            <motion.div
              {...fadeInUp}
              className="border border-slate-100 bg-slate-50/50 p-6"
              style={{ borderRadius: "14px" }}
            >
              <p className="text-[9px] font-black uppercase tracking-[0.25em] text-slate-400 mb-5">
                Quick Links
              </p>
              <div className="space-y-2">
                {quickLinks.map(({ label, href }) => (
                  <Link
                    key={label}
                    href={href}
                    className="flex items-center justify-between py-2.5 px-1 border-b border-slate-100 last:border-0 text-sm font-bold text-[#0A2540] hover:text-[#E30613] transition-colors duration-200 group"
                  >
                    {label}
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Intake reminder */}
            <motion.div
              {...fadeInUp}
              className="relative bg-[#0A2540] text-white p-6 overflow-hidden"
              style={{ borderRadius: "14px" }}
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F2C12C]" style={{ borderRadius: "14px 0 0 14px" }} />
              <div className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-[#F2C12C] shrink-0 mt-0.5" />
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#F2C12C] mb-1">
                    Next Intake
                  </p>
                  <p className="text-sm font-black">September 2026 — Now Open</p>
                  <p className="text-xs text-white/50 mt-1">Deadline: August 15, 2026</p>
                  <Link
                    href="/admissions"
                    className="inline-flex items-center gap-1.5 mt-3 text-[9px] font-black uppercase tracking-widest text-[#F2C12C] hover:gap-3 transition-all duration-200"
                  >
                    Apply Now <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <div className="lg:col-span-7 space-y-8">

            {/* Form card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white shadow-xl shadow-slate-200/50 overflow-hidden border border-slate-100"
              style={{ borderRadius: "20px" }}
            >
              <div className="h-1 bg-[#0A2540]" />

              <div className="p-8 md:p-12">
                <div className="mb-10 pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-5 h-[2px] bg-[#E30613]" />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E30613]">
                      Direct Enquiry
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-[#0A2540] tracking-tight">
                    Send an Official Enquiry
                  </h3>
                  <p className="text-slate-400 text-sm mt-3 leading-relaxed">
                    Ready to join? Fill in your details below and our admissions
                    team will get back to you within 24 hours.
                  </p>
                </div>

                <ContactForm />
              </div>
            </motion.div>

            {/* Google Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative w-full h-[380px] overflow-hidden border border-slate-200 shadow-lg"
              style={{ borderRadius: "20px" }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.1587884841!2d35.867!3d-1.078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMDQnNDAuOCJTIDM1wrA1MicwMS4yIkU!5e0!3m2!1sen!2ske!4v1625000000000!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="IIFLHM Narok Location"
                className="grayscale-[0.3] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
              />

              {/* Floating address card */}
              <div
                className="absolute bottom-5 left-5 bg-[#0A2540] text-white p-4 flex items-center gap-3 shadow-2xl border border-white/10"
                style={{ borderRadius: "12px" }}
              >
                <div
                  className="w-9 h-9 bg-[#E30613] flex items-center justify-center shrink-0"
                  style={{ borderRadius: "8px" }}
                >
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-widest text-[#F2C12C]">
                    Our Campus
                  </p>
                  <p className="text-xs font-bold">Newline Building, Narok Town</p>
                  <p className="text-[9px] text-white/50">Mon–Fri · 8:00 AM – 6:00 PM</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      {/* ── Bottom CTA ── */}
      <div className="relative py-16 bg-[#0A2540] text-white overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <h2 className="text-3xl font-black text-white mb-4 leading-tight">
            Ready to Start Your Journey?
          </h2>
          <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
            Don&apos;t wait — join the next intake and take your first step
            toward a global career in languages, hospitality, or technology.
          </p>
          <Link
            href="/admissions"
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#E30613] text-white font-black text-[10px] uppercase tracking-widest hover:bg-[#B8040F] transition-colors duration-200 shadow-lg"
            style={{ borderRadius: "10px" }}
          >
            Apply Now <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
