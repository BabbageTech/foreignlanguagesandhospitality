"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cards = [
  {
    label: "Mission",
    heading: "Our Mission",
    body: "To equip individuals with practical language skills and hospitality expertise that empower them to thrive in global environments and enhance career opportunities.",
    accent: "#DC2626", // Professional Red
    icon: "🎯",
  },
  {
    label: "Vision",
    heading: "Our Vision",
    body: "To be a renowned institution recognized for excellence in Language Training, shaping globally competent professionals for the international industry.",
    accent: "var(--secondary)", // Using your Standard Secondary Gold
    icon: "👁️",
  },
];

export default function MissionVision() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230A2540' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left: Text Cards */}
          <div className="space-y-6 order-2 lg:order-1">
            {cards.map(({ label, heading, body, accent, icon }) => (
              <motion.div 
                key={label}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ x: 10 }} // Subtle nudge hover effect
                className="group relative bg-white rounded-xl border border-neutral-100 p-8 shadow-sm hover:shadow-xl hover:border-neutral-200 transition-all duration-500 cursor-default"
              >
                {/* Side accent line that expands on hover */}
                <div 
                  className="absolute top-0 left-0 w-1 h-full rounded-l-xl transition-all duration-300 group-hover:w-2" 
                  style={{ backgroundColor: accent.includes('var') ? '#F2C12C' : accent }} // Fallback to standard gold if var is used
                />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-xl shadow-inner transition-transform duration-500 group-hover:rotate-[360deg]"
                      style={{ backgroundColor: accent.includes('var') ? 'rgba(242,193,44,0.1)' : accent + '10' }}
                    >
                       {icon}
                    </div>
                    <h3 className="text-2xl font-black text-[#0A2540] tracking-tight">{heading}</h3>
                  </div>
                  <p className="text-neutral-600 leading-relaxed font-medium transition-colors duration-300 group-hover:text-neutral-900">
                    {body}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right: Balanced Image with Hover & Floating Badge */}
          <div className="relative order-1 lg:order-2">
            {/* Aspect-Video (16:9) or 3:2 prevents the "too tall" look */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl border-[8px] border-white ring-1 ring-neutral-200 group"
            >
              <Image 
                src="/images/about.jpg" 
                alt="IFL Campus" 
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                priority
              />
              
              {/* Refined Glassmorphism Badge */}
              <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl border border-white/50 transform transition-transform duration-500 group-hover:-translate-y-1">
                 <p className="text-[#0A2540] font-black text-[10px] uppercase tracking-widest text-center">
                  Est. <span className="text-secondary text-sm">2024</span>
                </p>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-[#0A2540] to-transparent translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white font-bold text-sm">
                  Excellence in Language & Hospitality
                </p>
              </div>
            </motion.div>

            {/* Geometric accents - Balanced & Standard Gold */}
            <div 
              className="absolute -top-6 -right-6 w-32 h-32 border-2 rounded-2xl -z-10 opacity-30 animate-pulse" 
              style={{ borderColor: '#F2C12C' }} // Standard Gold
            />
            <div 
              className="absolute -bottom-6 -left-6 w-24 h-24 rounded-2xl -z-10 opacity-20" 
              style={{ backgroundColor: '#DC2626' }} // Mission Red
            />
          </div>
          
        </div>
      </div>
    </section>
  );
}