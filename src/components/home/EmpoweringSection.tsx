import { Eye, Target } from "lucide-react";
import Image from "next/image";

const pillars = [
  {
    icon: <Eye className="w-5 h-5" />,
    label: "Our Vision",
    color: "text-cyan-500",
    bg: "bg-cyan-50",
    body: "To be a renowned institution recognized for excellence in Language Training and Hospitality Management, shaping globally competent professionals who contribute to international understanding and industry growth.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    label: "Our Mission",
    color: "text-pink-500",
    bg: "bg-pink-50",
    body: "To equip individuals with practical language skills and hospitality expertise that empower them to thrive in global environments, foster cultural understanding, and enhance career opportunities in the international job market.",
  },
];

export default function EmpoweringSection() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT: Image Collage Style */}
          <div className="relative">
            {/* Main Background Image */}
            <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] w-full max-w-[450px] shadow-2xl">
              <Image 
                src="/images/interactive-learning.jpg" // Replace with your path
                alt="Students learning"
                fill
                className="object-cover"
              />
              {/* Bottom Label on Main Image */}
              <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-[200px]">
                <p className="text-sm font-bold text-primary">Interactive Learning</p>
                <p className="text-[10px] text-neutral-500 leading-tight mt-1">Hands-on classroom experience with modern tools.</p>
              </div>
            </div>

            {/* Overlapping Front Image */}
            <div className="absolute -bottom-10 -right-4 lg:-right-10 w-[280px] md:w-[320px] rounded-[32px] overflow-hidden shadow-2xl border-8 border-white">
              <div className="relative aspect-square">
                <Image 
                  src="/images/teacher-discussing.jpg" // Replace with your path
                  alt="Teacher discussing"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-white p-5">
                <p className="text-sm font-bold text-primary">Teacher Discussing</p>
                <p className="text-[10px] text-neutral-500 leading-tight mt-1">
                  Teachers engaging in interactive discussions and sharing knowledge with students.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Content Section */}
          <div className="flex flex-col">
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] leading-tight mb-6">
              Empowering Future Leaders in Hospitality
            </h2>
            <div className="w-full h-[2px] bg-[#0A2540] mb-8" />

            <p className="text-lg text-neutral-600 leading-relaxed mb-10">
              We are dedicated to providing world-class education in hospitality
              and languages, preparing our students for successful careers in the
              global hospitality industry. Our comprehensive programs combine
              theoretical knowledge with practical experience, ensuring our
              graduates are ready to excel in their chosen fields.
            </p>

            <div className="space-y-6">
              {pillars.map(({ icon, label, color, bg, body }) => (
                <div
                  key={label}
                  className="bg-neutral-50 rounded-[32px] p-8 transition-all hover:bg-white hover:shadow-xl group border border-transparent hover:border-neutral-100"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${bg} ${color}`}>
                      {icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#0A2540] mb-3">{label}</h4>
                      <p className="text-neutral-500 leading-relaxed text-sm">
                        {body}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}