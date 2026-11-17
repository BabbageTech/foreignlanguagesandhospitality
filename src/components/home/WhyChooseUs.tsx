import { Award, BookOpen, Briefcase, Globe, Hotel, Users } from "lucide-react";
import type { Locale } from "@/i18n/config";
import { homeSections } from "@/i18n/home-sections";

const icons = [Award, BookOpen, Users, Globe, Briefcase, Hotel];
const colors = ["text-secondary bg-secondary/10", "text-accent bg-accent/10", "text-[#0A2540] bg-[#0A2540]/10", "text-secondary bg-secondary/10", "text-accent bg-accent/10", "text-[#0A2540] bg-[#0A2540]/10"];
export default function WhyChooseUs({ locale }: { locale: Locale }) {
  const copy = homeSections[locale].why;
  return <section className="py-24 bg-white relative overflow-hidden"><div className="max-w-7xl mx-auto px-6 relative">
    <div className="mb-16"><h2 className="text-4xl md:text-5xl font-black text-[#0A2540] leading-tight mb-6">{copy.title}</h2><div className="w-32 h-[3px] bg-[#0A2540] mb-8" /><p className="text-lg text-neutral-500 max-w-2xl font-medium">{copy.subtitle}</p></div>
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">{copy.benefits.map((benefit, index) => { const Icon = icons[index]; return <article key={benefit.title} className="group relative bg-[#F8FAFC] rounded-[32px] p-10 border border-neutral-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:-translate-y-2"><span aria-hidden="true" className="absolute top-8 right-10 text-5xl font-black text-neutral-200 opacity-30">{String(index + 1).padStart(2, "0")}</span><div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 transition-transform group-hover:scale-110 ${colors[index]}`}><Icon className="w-6 h-6" aria-hidden="true" /></div><h3 className="font-black text-xl text-[#0A2540] leading-tight mb-4">{benefit.title}</h3><p className="text-sm text-neutral-500 leading-relaxed font-medium">{benefit.desc}</p><div className="absolute bottom-0 left-0 h-1.5 w-0 bg-secondary rounded-b-[32px] transition-all duration-500 group-hover:w-full" /></article>; })}</div>
  </div></section>;
}
