"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Our Stories", href: "/student-voices" },
  { label: "Careers", href: "/career-opportunities" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/95 backdrop-blur-md py-2 shadow-md" 
          : "bg-white py-4 border-b border-slate-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo Identity - Clean white background to match the new logo */}
        <Link href="/" className="flex items-center gap-4 group">
          {/* ENLARGED LOGO CONTAINER HERE: Changed from w-14 h-14 md:w-16 md:h-16 to w-16 h-16 md:w-20 md:h-20 */}
          <div className="relative w-16 h-16 md:w-20 md:h-20 bg-white rounded-full flex items-center justify-center transition-transform group-hover:scale-105 p-1 shrink-0">
            <div className="relative w-full h-full rounded-full overflow-hidden">
               <Image 
                src="/logo.png" 
                alt="International Institute Logo" 
                fill
                className="object-contain" 
                priority
              />
            </div>
          </div>
          
          <div className="flex flex-col border-l border-slate-200 pl-4">
            <span className="font-black text-[10px] md:text-[13px] text-[#0A2540] leading-tight uppercase tracking-tight max-w-[200px] md:max-w-none">
              International Institute of Foreign <br className="hidden md:block" /> Languages & Hospitality Management
            </span>
            <span className="text-[9px] font-bold text-[#E30613] uppercase tracking-[0.2em] mt-0.5">
              Empowering Local & Global Careers
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-slate-600 hover:text-[#0A2540] transition-all relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#0A2540] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
          
          <div className="h-4 w-px bg-slate-100 mx-3" />

          {/* Navy Button with Gold Hover */}
          <Link
            href="/admissions"
            className="bg-[#0A2540] text-white px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all shadow-lg active:scale-95"
          >
            Apply Now
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-[#0A2540]"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`h-0.5 w-full bg-[#0A2540] transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-[#E30613] transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-[#0A2540] transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div 
        className={`lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-50 transition-all duration-500 ease-in-out overflow-hidden ${
          mobileOpen ? 'max-h-[100vh] opacity-100 shadow-2xl' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-8 py-10 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link 
              key={link.label} 
              href={link.href} 
              onClick={() => setMobileOpen(false)}
              className="text-lg font-black text-[#0A2540] hover:text-[#E30613] transition-colors flex items-center justify-between"
            >
              {link.label}
              <div className="w-2 h-2 rounded-full bg-[#E30613]" />
            </Link>
          ))}
          
          <Link 
            href="/admissions" 
            onClick={() => setMobileOpen(false)}
            className="mt-4 bg-[#0A2540] text-white py-4 rounded-full text-center font-black uppercase tracking-widest text-sm shadow-xl"
          >
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  );
  }
