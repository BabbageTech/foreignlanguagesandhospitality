import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Compass,
  Globe,
  GraduationCap,
  MessageSquare,
  Search
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Career Opportunities in Germany | IIFLHM",
  description: "Explore apprenticeship programs and degrees in Germany. Your gateway to international success from Kenya.",
};

const pathways = [
  {
    number: "01",
    title: "Apprenticeship Programs",
    subtitle: "Ausbildung",
    desc: "Vocational training programs that combine classroom learning with paid on-the-job experience in German companies.",
    features: [
      "Dual education system recognized worldwide", 
      "Earn while you learn (Competitive stipends)", 
      "Direct pathway to employment"
    ],
    href: "/career-opportunities/apprenticeship",
    accent: "bg-secondary",
    icon: <Briefcase size={28} />
  },
  {
    number: "02",
    title: "Undergraduate Degrees",
    subtitle: "Bachelor's Programs",
    desc: "Bachelor&apos;s degree programs at top-ranked universities and applied sciences colleges.",
    features: [
      "Tuition-free or low-cost at public institutions", 
      "Wide range of English-taught programs", 
      "Access to the EU job market"
    ],
    href: "/career-opportunities/undergraduate",
    accent: "bg-primary",
    icon: <GraduationCap size={28} />
  },
  {
    number: "03",
    title: "Master's Degrees",
    subtitle: "Postgraduate Programs",
    desc: "Advanced degree programs designed to enhance your expertise and international career prospects.",
    features: [
      "One to two-year programs", 
      "Research with leading experts", 
      "18-month post-study work visa"
    ],
    href: "/career-opportunities/masters",
    accent: "bg-brand-charcoal",
    icon: <Compass size={28} />
  },
];

export default function CareerOpportunitiesPage() {
  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── Hero Section ── */}
      <section className="relative h-[85vh] min-h-[650px] flex items-center overflow-hidden">
        <Image 
          src="/images/career-hero.jpg" 
          alt="German Careers"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-0" />
        
        <div className="relative max-w-7xl mx-auto px-6 w-full z-10">
          <div className="max-w-3xl drop-shadow-2xl">
            <div className="inline-flex items-center gap-3 mb-8 bg-accent px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">
                For High School & University Graduates
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
              Opportunity <span className="text-accent">Hub.</span><br />
              <span className="text-white font-light italic">Your Gateway to Germany</span>
            </h1>

            <p className="text-lg md:text-xl text-white max-w-xl leading-relaxed mb-10 font-medium">
              We provide a complete ecosystem for Kenyan graduates — moving you from language proficiency in Nairobi to professional success in Germany.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Link href="#paths" className="bg-secondary text-white px-10 py-4 rounded-lg font-bold uppercase text-xs tracking-widest hover:scale-105 transition-all flex items-center gap-2 shadow-lg">
                Explore Pathways <ArrowRight size={16} />
              </Link>
              <Link href="/contact" className="bg-white/90 text-primary px-10 py-4 rounded-lg font-bold uppercase text-xs tracking-widest hover:bg-white transition-all shadow-lg">
                Book Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Opportunity Hub Introduction ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h4 className="text-secondary font-bold uppercase tracking-[0.3em] text-[11px] mb-4">Empowering Kenyan Minds</h4>
                <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight leading-tight">
                  Start Your International <br /> Career Journey.
                </h2>
              </div>
              <div className="space-y-6 text-brand-charcoal text-lg font-medium opacity-80 leading-relaxed">
                <p>
                  Are you a recent high school graduate eager to kickstart your international career? Or a university graduate looking to enhance your skills and access training opportunities abroad?
                </p>
                <p>
                  The International Institute for Foreign Languages and Hospitality Management proudly introduces our <span className="text-primary font-bold underline decoration-accent underline-offset-4">Opportunity Hub</span>—a specialized platform connecting aspiring Kenyans with world-class education and career pathways in Germany.
                </p>
              </div>
            </div>

            <div className="bg-brand-gray p-8 md:p-12 rounded-2xl border border-slate-100 shadow-inner">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white">
                  <Globe size={24} />
                </div>
                <h3 className="text-xl font-bold text-primary">Why Germany?</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "World-class education with affordable or free tuition",
                  "Strong focus on research and innovation",
                  "Excellent career prospects after graduation",
                  "Diverse range of English-taught programs",
                  "Safe and welcoming environment for international students"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-brand-charcoal font-bold text-sm">
                    <CheckCircle2 size={18} className="text-secondary shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Career Pathways ── */}
      <section id="paths" className="py-24 bg-brand-gray">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h4 className="text-secondary font-bold uppercase tracking-[0.3em] text-[11px] mb-4">What We Offer</h4>
            <h2 className="text-4xl md:text-5xl font-black text-primary tracking-tight">Structured Pathways to Success</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {pathways.map((path) => (
              <div key={path.number} className="flex flex-col group h-full bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500">
                <div className={`relative h-40 w-full ${path.accent} flex items-center justify-center text-white transition-transform group-hover:scale-105 duration-700`}>
                   {path.icon}
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h4 className="text-secondary font-bold uppercase tracking-widest text-[10px] mb-2">{path.subtitle}</h4>
                  <h3 className="text-2xl font-bold text-primary mb-4">{path.title}</h3>
                  <p className="text-brand-charcoal text-sm mb-8 leading-relaxed font-medium opacity-70">{path.desc}</p>
                  
                  <ul className="space-y-3 mb-8 mt-auto">
                    {path.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs font-bold text-primary">
                        <CheckCircle2 size={14} className="text-secondary" />
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <Link 
                    href={path.href} 
                    className="flex items-center justify-between w-full p-5 border border-slate-100 rounded-xl font-bold text-[11px] uppercase tracking-widest hover:bg-primary hover:text-white transition-all group/btn"
                  >
                    Explore Details 
                    <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Job Market Access ── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary rounded-3xl overflow-hidden shadow-2xl flex flex-col lg:flex-row items-stretch border border-white/10">
            <div className="lg:w-1/2 relative min-h-[350px]">
              <Image 
                src="/images/career-support.jpg" 
                alt="Job Market Support" 
                fill 
                className="object-cover transition-all duration-700" 
              />
            </div>
            <div className="lg:w-1/2 p-12 md:p-20 text-white flex flex-col justify-center">
              <div className="inline-flex p-3 bg-accent/20 rounded-lg mb-6 w-fit">
                <Search className="text-accent" size={24} />
              </div>
              <h3 className="text-3xl font-black mb-6 tracking-tight">Job Market Access</h3>
              <p className="text-white/70 text-lg mb-10 leading-relaxed font-medium">
                Our support doesn&apos;t end with education. We connect you with potential employers and help you navigate the nuances of the German professional world.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Career Counseling",
                  "Culture Workshops",
                  "Placement Support",
                  "Industry Networking"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-accent" size={18} />
                    <span className="text-xs font-black tracking-widest uppercase">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA Footer ── */}
      <section className="py-32 bg-brand-gray relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-primary mb-8 tracking-tight leading-tight">
            Ready to Transform <br /> Your Future?
          </h2>
          <p className="text-xl text-brand-charcoal font-medium opacity-70 mb-12 max-w-2xl mx-auto">
            Book a consultation with our experts to create your personalized pathway to Germany. At IIFLHM, we are committed to empowering young minds to succeed globally.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/contact" className="bg-secondary text-white px-10 py-5 rounded-xl font-black uppercase text-xs tracking-[0.2em] shadow-xl hover:scale-105 transition-all flex items-center gap-3">
              Schedule Your Consultation <ArrowRight size={18} />
            </Link>
            <div className="flex items-center gap-3 text-primary font-bold">
              <MessageSquare className="text-secondary" />
              <span>Expert Support Available</span>
            </div>
          </div>
          <p className="mt-16 text-[10px] font-black uppercase tracking-[0.4em] text-primary/30 italic">
            Your Future, Our Mission.
          </p>
        </div>
      </section>
    </div>
  );
}