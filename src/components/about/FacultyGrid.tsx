"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const facultyMembers = [
  {
    name: "Kennedy Sankale",
    title: "Institute Administrator",
    image: "/images/faculty/Kennedy.jpg",
    bio: "Supporting our students in their educational journey with dedicated leadership and administrative excellence.",
    accent: "group-hover:text-secondary",
    bar: "bg-secondary"
  },
  {
    name: "Metrine Nganga",
    title: "Institute Manager",
    image: "/images/faculty/manager.jpg",
    bio: "Oversees daily operations of the institution and helps implement institutional policies and strategic goals efficiently.",
    accent: "group-hover:text-primary",
    bar: "bg-primary"
  },
  {
    name: "Katherine Müller",
    title: "Career Consultant",
    video: "/images/faculty/kathe.mp4", 
    bio: "Bachelor's in Social sciences and IT. Helping students with CV preparation and consulting on careers in Germany 🇩🇪",
    accent: "group-hover:text-accent",
    bar: "bg-accent"
  },
  {
    name: "Raphael Ketere",
    title: "IT Specialist & Computer Instructor",
    image: "/images/faculty/Raphael.jpg",
    bio: "Enhancing the institute’s digital infrastructure while equipping students with industry-relevant ICT skills.",
    accent: "group-hover:text-primary",
    bar: "bg-primary"
  },
  {
    name: "Maureen Akinyi",
    title: "Institute Secretary",
    image: "/images/faculty/Akinyi.jpg",
    bio: "Ensuring smooth day-to-day operations through efficient coordination and professional administrative support.",
    accent: "group-hover:text-accent",
    bar: "bg-accent"
  },
  {
    name: "Sennah Chepkemboi",
    title: "German Language Teacher",
    image: "/images/faculty/sennah.jpg",
    bio: "Bachelor's Degree in education. Specializing in German Language instruction with a focus on pedagogical excellence.",
    accent: "group-hover:text-primary",
    bar: "bg-primary"
  },
  {
    name: "Sarah Jebet Janssen",
    title: "German Language Teacher",
    image: "/images/faculty/sarah.jpg",
    bio: "Enthusiastic online German teacher specializing in helping beginners and hospitality professionals.",
    accent: "group-hover:text-secondary",
    bar: "bg-secondary"
  },
  {
    name: "Alex Sikawa",
    title: "Head of Media and Marketing",
    image: "/images/faculty/alex.jpg",
    bio: "Expert in digital marketing strategies and brand development. Specializes in creating engaging content.",
    accent: "group-hover:text-accent",
    bar: "bg-accent"
  },
  {
    name: "Sandra Silonde",
    title: "Media and Marketing",
    image: "/images/faculty/sandra.jpg",
    bio: "Leading the institute’s brand storytelling and outreach through innovative media and marketing strategies.",
    accent: "group-hover:text-primary",
    bar: "bg-primary"
  },
];

export default function FacultyGrid() {
  return (
    <section id="faculty" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-black text-[#0A192F] tracking-tight"
          >
            Our Distinguished Faculty
          </motion.h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto mt-4 mb-6 rounded-full" />
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {facultyMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="group bg-white rounded-2xl border border-transparent p-6 transition-all duration-500 flex flex-col w-full max-w-[340px] min-h-[540px] hover:border-neutral-100 hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.08)]"
            >
              {/* Image Container with Softened Edges */}
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-8 bg-neutral-50 shadow-inner">
                {member.video ? (
                  <video
                    src={member.video}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image 
                    src={member.image || ""} 
                    alt={member.name} 
                    fill
                    sizes="340px"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                )}
              </div>

              {/* Text Area */}
              <div className="flex flex-col flex-grow text-center items-center px-2">
                <h3 className="text-2xl font-black text-[#0A192F] tracking-tight transition-colors duration-300">
                  {member.name}
                </h3>
                
                {/* Title */}
                <p className={`text-slate-900 font-black text-[10px] uppercase tracking-[0.2em] mt-3 mb-5 transition-colors duration-300 ${member.accent}`}>
                  {member.title}
                </p>

                <p className="text-slate-500 text-[15px] leading-relaxed font-medium line-clamp-4 group-hover:text-slate-700 transition-colors">
                  {member.bio}
                </p>

                {/* Interactive Accent Bar */}
                <div className="mt-auto pt-8">
                   <div className={`h-1.5 w-8 rounded-full ${member.bar} opacity-10 group-hover:opacity-100 group-hover:w-16 transition-all duration-500 ease-in-out`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}