import SectionTitle from "@/components/common/SectionTitle";

const values = [
  {
    number: "01",
    title: "Excellence",
    description: "Committed to delivering the highest quality education and maintaining exceptional standards across all programs.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    bar: "bg-secondary",
  },
  {
    number: "02",
    title: "Innovation",
    description: "Embracing new technologies and teaching methods to prepare students for the evolving future of hospitality.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 2.5-1.3 4.7-3.3 6L15 17H9l-.7-2C6.3 13.7 5 11.5 5 9a7 7 0 017-7z" />
      </svg>
    ),
    iconBg: "bg-accent/15",
    iconColor: "text-accent-dark",
    bar: "bg-accent",
  },
  {
    number: "03",
    title: "Diversity",
    description: "Celebrating different cultures and perspectives, creating an inclusive and welcoming learning environment.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    iconBg: "bg-primary/10",
    iconColor: "text-primary",
    bar: "bg-primary",
  },
  {
    number: "04",
    title: "Practical Learning",
    description: "Combining theoretical knowledge with hands-on experience for comprehensive, real-world skill development.",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8}>
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    iconBg: "bg-secondary/10",
    iconColor: "text-secondary",
    bar: "bg-secondary",
  },
];

export default function CoreValues() {
  return (
    <section className="py-20 relative bg-white overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-neutral-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-neutral-50 rounded-full blur-3xl -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-16">
          <SectionTitle
            title="Our Core Values"
            subtitle="The professional principles that define our educational excellence"
          />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map(({ number, title, description, icon, iconBg, iconColor, bar }) => (
            <div
              key={title}
              className="group bg-white rounded-xl border border-neutral-200 p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:border-neutral-300"
            >
              {/* Value Number & Accent Line */}
              <div className="flex items-center justify-between mb-8">
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
                  Value {number}
                </span>
                <div className={`h-1 w-10 rounded-full ${bar} opacity-40 group-hover:opacity-100 group-hover:w-16 transition-all duration-500`} />
              </div>

              {/* Professional Icon Container */}
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${iconBg} ${iconColor} mb-6 transition-transform duration-500 group-hover:scale-110`}>
                {icon}
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">
                  {title}
                </h3>
                <p className="text-neutral-500 text-sm leading-relaxed font-medium">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}