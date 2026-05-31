import Link from "next/link";

const alumni = [
  {
    name: "Sempeyo",
    role: "Nursing Ausbildung",
    location: "Berlin, Germany",
    initials: "SE",
    quote: "If you want to be a nurse in Germany, you must at least have attained a B1 Level. I came through the International Institute of Foreign Languages and Hospitality Management.",
  },
  {
    name: "Saitoti",
    role: "Dairy Farm Ausbildung",
    location: "Lilienthal, Germany",
    initials: "SA",
    quote: "Learning the German language will help you connect and find your way to Germany. I came through this institute from Narok South.",
  },
  {
    name: "Hilda",
    role: "Social Work",
    location: "Flensburg University",
    initials: "HI",
    quote: "Learning German at B1 or B2 level made my Anerkennung process much smoother. The institute played a key role in my journey.",
  },
  {
    name: "Kasaine",
    role: "Undergraduate Student",
    location: "Germany",
    initials: "KA",
    quote: "The support from the International Institute enabled me to pursue my master's degree in Germany.",
  },
  {
    name: "Damaris",
    role: "Undergraduate Student",
    location: "Flensburg University",
    initials: "DA",
    quote: "The German language training I received was essential for my university admission. It laid the foundation for my success.",
  },
  {
    name: "Zablon Ledama",
    role: "Professional Chef",
    location: "Germany",
    initials: "ZL",
    quote: "From Transmara to Germany as a chef — the skills and training from this institute transformed my future completely.",
  },
];

const QuoteIcon = () => (
  <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
);

export default function Testimonials() {
  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(#0A2540 1px, transparent 1px), linear-gradient(90deg, #0A2540 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section - Standardized Sizes */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12">
          <div className="max-w-xl">
             <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-1 bg-secondary" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Student Voices</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-primary leading-tight">
              Global Success Starts Here
            </h2>
          </div>
          <Link 
            href="/admissions" 
            className="bg-primary text-white px-7 py-3.5 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-secondary transition-all shadow-lg active:scale-95"
          >
            Begin Your Journey
          </Link>
        </div>

        {/* Grid Section - Optimized Spacing */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {alumni.map((person, index) => (
            <div
              key={index}
              className="group relative bg-brand-gray border border-slate-200/50 rounded-2xl p-7 flex flex-col transition-all duration-300 hover:bg-white hover:border-accent hover:shadow-xl hover:-translate-y-1"
            >
              <div className="mb-4 text-secondary opacity-20 group-hover:opacity-100 transition-opacity">
                <QuoteIcon />
              </div>

              <p className="text-sm md:text-[15px] leading-relaxed text-primary/80 mb-6 flex-1 font-medium italic">
                &quot;{person.quote}&quot;
              </p>

              <div className="flex items-center gap-4 pt-5 border-t border-slate-200/40">
                {/* Avatar Badge - Normalized Size */}
                <div className="w-11 h-11 bg-white border-2 border-accent text-primary flex items-center justify-center font-black text-sm rounded-xl shadow-sm transition-transform group-hover:rotate-6">
                  {person.initials}
                </div>
                
                <div>
                  <p className="font-black text-primary text-base leading-none mb-1">
                    {person.name}
                  </p>
                  <p className="text-secondary text-[9px] font-black uppercase tracking-wider">
                    {person.role}
                  </p>
                  <p className="text-[9px] font-bold text-primary/40 mt-0.5 uppercase">
                    {person.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
