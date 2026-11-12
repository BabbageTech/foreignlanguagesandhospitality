"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function FinalCTA() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    // Simulate API call for newsletter/alerts
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="py-24 md:py-32 bg-[#0A2540] text-white relative overflow-hidden border-t border-white/5">
      
      {/* 1. BRANDED BACKGROUND AMBIENCE */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        
        {/* Eyebrow - Red Accent */}
        <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-secondary font-black text-[10px] uppercase tracking-[0.4em] mb-8">
          Next Intake: September 2026
        </span>

        {/* Headline */}
        <h2 className="text-4xl md:text-6xl font-black mb-8 leading-[1.05] tracking-tight">
          Enroll Now and Transform <br className="hidden md:block" />
          Your <span className="relative inline-block">
            Global Future
            <span className="absolute bottom-1 left-0 w-full h-3 bg-secondary/30 -z-10" />
          </span>
        </h2>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-white/70 mb-14 max-w-2xl mx-auto leading-relaxed font-medium">
          Join a community of successful graduates working across Germany, Austria, and Switzerland. 
          Your path to an international career starts here.
        </p>

        {/* Action Center */}
        <div className="flex flex-col items-center gap-12">
          
          {/* Subscription Box (Glassmorphism) */}
          <div className="w-full max-w-lg">
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white/5 border border-secondary/50 p-6 rounded-2xl backdrop-blur-md"
                >
                  <div className="flex items-center justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                       <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                         <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                       </svg>
                    </div>
                    <p className="text-white font-bold text-sm uppercase tracking-widest">Registration Alerts Enabled</p>
                  </div>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubscribe} 
                  className="relative group p-1.5 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm focus-within:border-secondary transition-all"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Get scholarship & intake updates"
                    className="w-full bg-transparent px-6 py-4 outline-none text-white text-sm font-bold placeholder:text-white/30"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="md:absolute right-2 top-2 bottom-2 px-8 bg-white text-[#0A2540] rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-secondary hover:text-white transition-all disabled:opacity-50 h-12 md:h-auto mt-2 md:mt-0 w-full md:w-auto"
                  >
                    {status === "loading" ? "Processing..." : "Notify Me"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
            <p className="text-[10px] text-white/30 mt-4 uppercase tracking-[0.2em] font-black">
              * We respect your privacy. No spam, only career opportunities.
            </p>
          </div>

          {/* Divider with Center Text */}
          <div className="relative w-full max-w-md flex items-center justify-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-white/10" /></div>
            <span className="relative px-4 bg-[#0A2540] text-[10px] font-black text-white/40 uppercase tracking-widest">Or take the first step</span>
          </div>

          {/* Primary Navigation Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 w-full justify-center px-4">
            <a
              href="/admissions"
              className="group relative px-12 py-5 bg-[#E30613] text-white font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl shadow-[0_10px_40px_-10px_rgba(227,6,19,0.5)] hover:scale-105 hover:brightness-110 transition-all flex items-center justify-center gap-4 overflow-hidden"
            >
              <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
              Apply Now
              <svg viewBox="0 0 16 16" className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" strokeWidth={3}>
                <path d="M3 8h10M9 4l4 4-4 4" />
              </svg>
            </a>
            
            <a
              href="/contact"
              className="px-12 py-5 bg-white/5 hover:bg-white hover:text-[#0A2540] border border-white/10 text-white font-black text-[12px] uppercase tracking-[0.3em] rounded-2xl backdrop-blur-sm transition-all text-center flex items-center justify-center"
            >
              Enquire
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}