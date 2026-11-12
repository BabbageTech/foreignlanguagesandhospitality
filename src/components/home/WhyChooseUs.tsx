import {
  Award,
  BookOpen,
  Briefcase,
  Globe,
  Hotel,
  Users
} from "lucide-react";

const benefits = [
  {
    number: "01",
    title: "Accredited Programs",
    desc: "Our programs are internationally recognized and accredited by leading hospitality and education authorities.",
    icon: <Award className="w-6 h-6" />,
    palette: { bar: "bg-secondary", iconBg: "bg-secondary/10", iconColor: "text-secondary" },
  },
  {
    number: "02",
    title: "Industry-Driven Curriculum",
    desc: "Curriculum designed with industry leaders, balancing theory with the practical skills employers actually seek.",
    icon: <BookOpen className="w-6 h-6" />,
    palette: { bar: "bg-accent", iconBg: "bg-accent/10", iconColor: "text-accent" },
  },
  {
    number: "03",
    title: "Expert Faculty",
    desc: "Learn from experienced professionals who bring real-world expertise and international experience to every lesson.",
    icon: <Users className="w-6 h-6" />,
    palette: { bar: "bg-[#0A2540]", iconBg: "bg-[#0A2540]/10", iconColor: "text-[#0A2540]" },
  },
  {
    number: "04",
    title: "Global Opportunities",
    desc: "Strong partnerships with employers in Germany, Austria, and Switzerland provide real international pathways.",
    icon: <Globe className="w-6 h-6" />,
    palette: { bar: "bg-secondary", iconBg: "bg-secondary/10", iconColor: "text-secondary" },
  },
  {
    number: "05",
    title: "Career Support",
    desc: "CV workshops, interview preparation, visa guidance, and a growing alumni network across Europe.",
    icon: <Briefcase className="w-6 h-6" />,
    palette: { bar: "bg-accent", iconBg: "bg-accent/10", iconColor: "text-accent" },
  },
  {
    number: "06",
    title: "Modern Facilities",
    desc: "State-of-the-art training kitchens, mock hotel rooms, language labs, and a professional conference centre.",
    icon: <Hotel className="w-6 h-6" />,
    palette: { bar: "bg-[#0A2540]", iconBg: "bg-[#0A2540]/10", iconColor: "text-[#0A2540]" },
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor (Optional - removed grid for cleaner look) */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-neutral-50 rounded-full blur-[120px] -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Standardized Header Section to match screenshot aesthetic */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[#0A2540] leading-tight mb-6">
            Why Choose Our <span className="text-secondary">Institution?</span>
          </h2>
          <div className="w-32 h-[3px] bg-[#0A2540] mb-8" />
          <p className="text-lg text-neutral-500 max-w-2xl font-medium">
            We combine modern European standards with practical training to prepare you for global success in hospitality and digital industries.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {benefits.map(({ number, title, desc, icon, palette }) => (
            <div
              key={number}
              className="group relative bg-[#F8FAFC] rounded-[32px] p-10 border border-neutral-100 transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-neutral-200/50 hover:-translate-y-2"
            >
              {/* Ghost Numbering */}
              <span className="absolute top-8 right-10 text-5xl font-black text-neutral-200 opacity-20 group-hover:opacity-40 transition-opacity">
                {number}
              </span>

              {/* Icon Container */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-10 ${palette.iconBg} ${palette.iconColor} transition-transform duration-500 group-hover:scale-110`}>
                {icon}
              </div>

              <div className="relative z-10">
                <h3 className="font-black text-xl text-[#0A2540] leading-tight mb-4 transition-colors">
                  {title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed font-medium">
                  {desc}
                </p>
              </div>

              {/* Progress Line - animates from bottom to fill the width on hover */}
              <div className="absolute bottom-0 left-0 h-1.5 w-0 bg-secondary rounded-b-[32px] transition-all duration-500 group-hover:w-full opacity-70" 
                   style={{ backgroundColor: palette.bar.replace('bg-', '') === 'secondary' ? '#FBBF24' : palette.bar.replace('bg-', '') }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}