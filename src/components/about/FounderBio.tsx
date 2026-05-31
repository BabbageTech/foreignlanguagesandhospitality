import Image from "next/image";

const focusAreas = ["Language Training", "Hospitality Education", "Career Preparation"];
const stats = [
  { value: "3", label: "Core Programs" },
  { value: "2", label: "Countries" },
  { value: "100+", label: "Success Stories" },
];

export default function FounderBio() {
  return (
    <section id="founder" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT - The Founder Card (Square with Overlay Quote) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-primary">
              
              {/* Square Image Container */}
              <div className="relative aspect-square w-full">
                <Image 
                  src="/images/faculty/Soila.jpg" 
                  alt="Soila Lasoi - Founder & CEO"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  priority
                />
                
                {/* Lightened Gradient Overlay - Pulling back the primary color opacity */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-primary/10 to-transparent" />

                {/* Floating Quote - Lightened background for better image visibility */}
                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent">
                  <div className="text-4xl font-serif text-secondary leading-none mb-3 opacity-90">“</div>
                  <p className="text-lg md:text-xl font-bold italic text-white leading-relaxed drop-shadow-md">
                    Language skills can open doors to new countries, cultures, careers, and a future once thought impossible.
                  </p>
                </div>
              </div>

              {/* Founder Identity Footer */}
              <div className="p-6 bg-white border-t border-neutral-100 flex items-center justify-between">
                <div>
                  <p className="font-bold text-primary text-xl tracking-tight">Soila Lasoi</p>
                  <p className="text-secondary font-bold text-[10px] uppercase tracking-[0.2em]">Founder & CEO</p>
                </div>
                <div className="h-8 w-px bg-neutral-200" />
                <div className="flex gap-2 text-primary/20">
                    <div className="w-2 h-2 rounded-full bg-secondary" />
                    <div className="w-2 h-2 rounded-full bg-neutral-200" />
                </div>
              </div>
            </div>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {stats.map(({ value, label }) => (
                <div key={label} className="bg-neutral-50 rounded-xl py-4 px-2 text-center border border-neutral-100">
                  <p className="text-xl font-bold text-primary">{value}</p>
                  <p className="text-[9px] font-black text-neutral-400 uppercase tracking-tighter">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT - Professional Narrative */}
          <div className="lg:col-span-7 lg:pl-6">
            <div className="inline-flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-secondary" />
              <span className="text-xs font-black uppercase tracking-[0.3em] text-secondary">
                Leadership Perspective
              </span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-primary mb-8 leading-[1.1]">
              Bridging Talent with <br />
              <span className="text-secondary italic">Global Opportunity</span>
            </h2>

            <div className="space-y-6 text-neutral-600 text-base md:text-lg leading-relaxed">
              <p className="font-medium">
                Welcome! I’m <span className="text-primary font-bold">Soila Lasoi</span>. With a background in International Studies and professional experience in Kenya and Germany, I established this institute to bridge the gap between local talent and international opportunity.
              </p>
              <p className="font-medium">
                My experience supporting youth integration in Germany inspired our mission: to help African youth access safe, legal, and meaningful pathways abroad through specialized education and hands-on hospitality training.
              </p>

              {/* Focus Area Badges */}
              <div className="flex flex-wrap gap-2 pt-4">
                {focusAreas.map((area) => (
                  <span key={area} className="px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary font-bold text-[11px] uppercase tracking-wider">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Signature Block */}
            <div className="mt-12 flex items-center gap-6">
               <div className="flex-grow h-px bg-neutral-100" />
               <div className="text-right">
                  <p className="text-neutral-400 text-xs italic mb-1">Signed,</p>
                  <p className="font-serif text-3xl text-primary lowercase italic">Soila Lasoi</p>
               </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}