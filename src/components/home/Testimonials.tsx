import Link from "next/link";
import { localePath, type Locale } from "@/i18n/config";
import { homeSections } from "@/i18n/home-sections";

const alumni = [
  { name: "Sempeyo", location: "Berlin, Germany", initials: "SE" },
  { name: "Saitoti", location: "Lilienthal, Germany", initials: "SA" },
  { name: "Hilda", location: "Flensburg University", initials: "HI" },
  { name: "Kasaine", location: "Germany", initials: "KA" },
  { name: "Damaris", location: "Flensburg University", initials: "DA" },
  { name: "Zablon Ledama", location: "Germany", initials: "ZL" },
];
const QuoteIcon = () => <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden="true"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>;
export default function Testimonials({ locale }: { locale: Locale }) {
  const copy = homeSections[locale].testimonials;
  return <section className="py-16 md:py-20 bg-white relative overflow-hidden"><div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: "linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
    <div className="max-w-7xl mx-auto px-6 relative z-10"><div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12"><div className="max-w-xl"><div className="flex items-center gap-2 mb-3"><div className="w-8 h-1 bg-secondary" /><span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">{copy.eyebrow}</span></div><h2 className="text-3xl md:text-4xl font-black text-primary leading-tight">{copy.title}</h2></div><Link href={localePath("/admissions", locale)} className="bg-primary text-white px-7 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-lg active:scale-95">{copy.action}</Link></div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">{alumni.map((person, index) => <article key={person.name} className="group relative bg-brand-gray border border-slate-200/50 rounded-2xl p-7 flex flex-col transition-all duration-300 hover:bg-white hover:border-accent hover:shadow-xl hover:-translate-y-1"><div className="mb-4 text-secondary opacity-40 group-hover:opacity-100 transition-opacity"><QuoteIcon /></div><p className="text-sm md:text-[15px] leading-relaxed text-primary/80 mb-6 flex-1 font-medium italic">&ldquo;{copy.quotes[index]}&rdquo;</p><div className="flex items-center gap-4 pt-5 border-t border-slate-200/40"><div aria-hidden="true" className="w-11 h-11 bg-white border-2 border-accent text-primary flex items-center justify-center font-black text-sm rounded-xl shadow-sm">{person.initials}</div><div><p className="font-black text-primary text-base leading-none mb-1">{person.name}</p><p className="text-secondary text-[9px] font-black uppercase tracking-wider">{copy.roles[index]}</p><p className="text-[9px] font-bold text-primary/40 mt-0.5 uppercase">{person.location}</p></div></div></article>)}</div>
    </div></section>;
}
