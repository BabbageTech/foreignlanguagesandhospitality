import Image from "next/image";

const facilities = [
  { 
    title: "Training Kitchens", 
    image: "/images/facilities/kitchens.jpg",
    desc: "Professional-grade equipment and modern cooking facilities for culinary mastery." 
  },
  { 
    title: "Mock Hotel Rooms", 
    image: "/images/facilities/hotel-rooms.jpg",
    desc: "A realistic training environment for hospitality students to practice world-class service." 
  },
  { 
    title: "Language Labs", 
    image: "/images/facilities/labs.jpg",
    desc: "Advanced technology for immersive language learning and professional communication." 
  },
  { 
    title: "Conference Center", 
    image: "/images/facilities/conference.jpg",
    desc: "Modern facilities designed for events, workshops, and practical management training." 
  },
];

export default function Facilities() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary tracking-tight">
            World-Class Facilities
          </h2>
          <p className="text-neutral-500 mt-4 text-base md:text-lg max-w-2xl mx-auto font-medium">
            Modern spaces designed to bridge the gap between classroom theory and industry reality.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((item, index) => (
            <div 
              key={index} 
              className="group relative aspect-[4/5] rounded-xl overflow-hidden bg-primary shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1"
            >
              <Image 
                src={item.image} 
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-70"
              />

              {/* Professional Gradient for Text Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/20 to-transparent opacity-90 transition-all duration-500" />

              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-2 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.desc}
                  </p>
                  <div className="mt-4 w-8 h-1 bg-secondary rounded-full group-hover:w-full transition-all duration-500" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}