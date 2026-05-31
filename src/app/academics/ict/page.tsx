"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  Cpu,
  Laptop,
  Network,
  ShieldCheck,
  Smartphone,
  Terminal,
  Users,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

// ── Types ──────────────────────────────────────────────────────────

interface Course {
  title: string;
  tagline: string;
  desc: string;
  icon: React.ReactNode;
  image: string;
  duration: string;
  level: string;
  mode: string;
  skills: string[];
  outcomes: string[];
  modules: { title: string; topics: string[] }[];
  careers: string[];
  certification: string;
}

// ── Data ───────────────────────────────────────────────────────────

const courses: Course[] = [
  {
    title: "Full-Stack Web Development",
    tagline: "Build production-ready web applications end to end",
    desc: "Master modern frameworks like React, Next.js, and Node.js to design, develop, and deploy scalable full-stack applications. You will work on real client projects from week one.",
    icon: <Code2 className="w-6 h-6" />,
    image: "/images/ict/web-dev.jpg",
    duration: "6 Months",
    level: "Beginner to Advanced",
    mode: "Onsite & Online",
    skills: ["TypeScript", "React / Next.js", "Node.js", "REST APIs", "PostgreSQL", "Docker"],
    outcomes: [
      "Design and build full-stack web applications from scratch",
      "Deploy production apps using CI/CD pipelines",
      "Architect scalable backend systems with Node.js and databases",
      "Collaborate using Git, code review, and agile methodologies",
    ],
    modules: [
      { title: "Web Fundamentals", topics: ["HTML5", "CSS3", "JavaScript ES6+", "Responsive Design"] },
      { title: "Frontend Engineering", topics: ["React", "Next.js", "TypeScript", "State Management"] },
      { title: "Backend Development", topics: ["Node.js", "Express", "REST APIs", "Authentication"] },
      { title: "Databases", topics: ["PostgreSQL", "MongoDB", "ORM / Prisma", "Query Optimization"] },
      { title: "DevOps & Deployment", topics: ["Docker", "CI/CD", "Vercel / AWS", "Monitoring"] },
    ],
    careers: ["Frontend Developer", "Backend Engineer", "Full-Stack Developer", "Software Engineer"],
    certification: "IIFLHM Full-Stack Web Development Certificate",
  },
  {
    title: "Data Analytics & Visualization",
    tagline: "Turn raw data into decisions that move organisations forward",
    desc: "Transform complex datasets into actionable business insights using Python, SQL, and PowerBI. Learn to present findings that influence strategy at the enterprise level.",
    icon: <BarChart3 className="w-6 h-6" />,
    image: "/images/ict/data-analytics.jpg",
    duration: "4 Months",
    level: "Intermediate",
    mode: "Onsite & Online",
    skills: ["Python", "SQL", "PowerBI", "Tableau", "Statistical Modeling", "Excel Advanced"],
    outcomes: [
      "Clean, analyse, and interpret large datasets with Python and SQL",
      "Build interactive dashboards in PowerBI and Tableau",
      "Apply statistical models to forecast business outcomes",
      "Present data narratives to non-technical stakeholders",
    ],
    modules: [
      { title: "Data Foundations", topics: ["Spreadsheets", "SQL Basics", "Data Types", "Data Cleaning"] },
      { title: "Python for Analytics", topics: ["Pandas", "NumPy", "Matplotlib", "Jupyter Notebooks"] },
      { title: "Statistical Methods", topics: ["Descriptive Statistics", "Regression", "Hypothesis Testing"] },
      { title: "Visualization", topics: ["PowerBI", "Tableau", "Storytelling with Data"] },
      { title: "Capstone Project", topics: ["Real Dataset Analysis", "Executive Dashboard", "Presentation"] },
    ],
    careers: ["Data Analyst", "Business Intelligence Analyst", "Reporting Specialist", "Data Consultant"],
    certification: "IIFLHM Data Analytics & Visualization Certificate",
  },
  {
    title: "Cybersecurity Essentials",
    tagline: "Defend digital assets against modern threats",
    desc: "Study network security, ethical hacking, cryptography, and threat mitigation. Gain the practical knowledge demanded by global employers and prepare for industry certifications.",
    icon: <ShieldCheck className="w-6 h-6" />,
    image: "/images/ict/cybersecurity.jpg",
    duration: "5 Months",
    level: "Beginner to Intermediate",
    mode: "Onsite & Online",
    skills: ["Network Security", "Ethical Hacking", "Cryptography", "Linux", "Risk Assessment", "CompTIA Prep"],
    outcomes: [
      "Identify and mitigate common cyber threats and vulnerabilities",
      "Conduct ethical penetration testing and security audits",
      "Implement encryption, firewalls, and secure authentication",
      "Prepare for CompTIA Security+ and CEH certifications",
    ],
    modules: [
      { title: "Security Fundamentals", topics: ["CIA Triad", "Threat Landscape", "Security Policies"] },
      { title: "Network Security", topics: ["Firewalls", "VPNs", "Intrusion Detection", "Wireshark"] },
      { title: "Ethical Hacking", topics: ["Penetration Testing", "Kali Linux", "OWASP Top 10"] },
      { title: "Cryptography", topics: ["Symmetric / Asymmetric", "PKI", "TLS / SSL"] },
      { title: "Incident Response", topics: ["Forensics", "Log Analysis", "Disaster Recovery"] },
    ],
    careers: ["Security Analyst", "Network Security Engineer", "Penetration Tester", "IT Risk Consultant"],
    certification: "IIFLHM Cybersecurity Essentials Certificate (CompTIA Security+ aligned)",
  },
  {
    title: "Mobile App Development",
    tagline: "Ship high-quality apps to iOS and Android from a single codebase",
    desc: "Create polished, high-performance mobile experiences using Flutter and React Native. Cover design, development, testing, and deployment to both major app stores.",
    icon: <Smartphone className="w-6 h-6" />,
    image: "/images/ict/mobile-dev.jpg",
    duration: "5 Months",
    level: "Intermediate",
    mode: "Onsite & Online",
    skills: ["Flutter", "React Native", "Dart", "Firebase", "App Store Publishing", "UI/UX"],
    outcomes: [
      "Build cross-platform mobile apps with Flutter and React Native",
      "Integrate backend services, authentication, and real-time databases",
      "Design intuitive mobile UIs following Material and Human Interface guidelines",
      "Publish and maintain apps on Google Play and the App Store",
    ],
    modules: [
      { title: "Mobile Foundations", topics: ["Mobile UX Principles", "UI Design Patterns", "Prototyping"] },
      { title: "Flutter & Dart", topics: ["Widgets", "State Management", "Navigation", "Animations"] },
      { title: "React Native", topics: ["Components", "Hooks", "Expo", "Native Modules"] },
      { title: "Backend Integration", topics: ["Firebase", "REST APIs", "Auth", "Real-Time Data"] },
      { title: "Launch & Monetisation", topics: ["App Store Submission", "Analytics", "In-App Purchases"] },
    ],
    careers: ["Mobile Developer", "Flutter Engineer", "React Native Developer", "App Product Manager"],
    certification: "IIFLHM Mobile App Development Certificate",
  },
];

const features = [
  {
    title: "Project-Based Learning",
    desc: "Build a portfolio of real-world applications that impress recruiters globally.",
    icon: <Terminal className="w-5 h-5 text-[#E30613]" />,
  },
  {
    title: "Industry Mentorship",
    desc: "Learn from senior developers and tech leads currently working in the field.",
    icon: <Cpu className="w-5 h-5 text-[#E30613]" />,
  },
  {
    title: "Global Certification",
    desc: "Prepare for international exams including CompTIA, AWS, and Google certifications.",
    icon: <Network className="w-5 h-5 text-[#E30613]" />,
  },
  {
    title: "Small Cohorts",
    desc: "Maximum 20 students per cohort ensures personal attention and peer collaboration.",
    icon: <Users className="w-5 h-5 text-[#E30613]" />,
  },
];

// ── Course Detail Modal ────────────────────────────────────────────

function CourseModal({
  course,
  onClose,
}: {
  course: Course;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl rounded-[20px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal hero image */}
        <div className="relative h-52 w-full overflow-hidden rounded-t-[20px]">
          <Image
            src={course.image}
            alt={course.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#0A2540]/75" />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F2C12C] mb-2">
              {course.level} · {course.duration} · {course.mode}
            </p>
            <h2 className="text-2xl font-black text-white leading-tight">{course.title}</h2>
            <p className="text-sm text-white/70 mt-1">{course.tagline}</p>
          </div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors rounded-[8px]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-8 md:p-10 space-y-10">

          {/* Quick meta */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: "Duration", value: course.duration, icon: <Clock className="w-4 h-4" /> },
              { label: "Level", value: course.level, icon: <BookOpen className="w-4 h-4" /> },
              { label: "Mode", value: course.mode, icon: <Laptop className="w-4 h-4" /> },
            ].map(({ label, value, icon }) => (
              <div
                key={label}
                className="bg-[#F8FAFC] border border-slate-100 p-4 flex flex-col gap-2 rounded-[10px]"
              >
                <span className="text-[#0A2540]">{icon}</span>
                <p className="text-[9px] font-black uppercase tracking-widest text-slate-400">{label}</p>
                <p className="text-xs font-black text-[#0A2540]">{value}</p>
              </div>
            ))}
          </div>

          {/* Description */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E30613] mb-3">About This Course</p>
            <p className="text-slate-600 leading-relaxed text-sm">{course.desc}</p>
          </div>

          {/* Learning outcomes */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E30613] mb-4">What You Will Learn</p>
            <ul className="space-y-3">
              {course.outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-green-50 border border-green-100 flex items-center justify-center shrink-0 mt-0.5 rounded-[5px]">
                    <CheckCircle2 className="w-3 h-3 text-green-600" />
                  </div>
                  <span className="text-sm text-slate-600 font-medium">{o}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Curriculum */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E30613] mb-4">Curriculum Overview</p>
            <div className="space-y-3">
              {course.modules.map((mod, i) => (
                <div
                  key={mod.title}
                  className="border border-slate-100 overflow-hidden rounded-[10px]"
                >
                  <div className="flex items-center gap-4 px-5 py-4 bg-slate-50">
                    <div
                      className="w-7 h-7 bg-[#0A2540] text-white flex items-center justify-center text-[10px] font-black shrink-0 rounded-[6px]"
                    >
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <p className="font-black text-[#0A2540] text-sm">{mod.title}</p>
                  </div>
                  <div className="px-5 py-4 flex flex-wrap gap-2">
                    {mod.topics.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-bold text-slate-600 bg-white border border-slate-200 px-2.5 py-1 rounded-[5px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech skills */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E30613] mb-4">Key Technologies</p>
            <div className="flex flex-wrap gap-2">
              {course.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 bg-[#0A2540] text-white text-[10px] font-black uppercase tracking-wider rounded-[5px]"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          {/* Career paths */}
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-[#E30613] mb-4">Career Pathways</p>
            <div className="grid grid-cols-2 gap-3">
              {course.careers.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2.5 p-3 border border-slate-100 bg-slate-50 rounded-[8px]"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
                  <span className="text-xs font-bold text-[#0A2540]">{c}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Certification */}
          <div
            className="flex items-start gap-4 p-5 bg-[#F2C12C]/10 border border-[#F2C12C]/30 rounded-[10px]"
          >
            <Award className="w-5 h-5 text-[#D4A520] shrink-0 mt-0.5" />
            <div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#D4A520] mb-1">Certification Awarded</p>
              <p className="text-sm font-bold text-[#0A2540]">{course.certification}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Link
              href={`/admissions?course=${encodeURIComponent(course.title)}`}
              className="flex-1 flex items-center justify-center gap-2 py-4 bg-[#E30613] text-white font-black text-[10px] uppercase tracking-widest hover:bg-[#B8040F] transition-colors duration-200 shadow-lg rounded-[10px]"
            >
              Enroll in This Course <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 py-4 border border-[#0A2540] text-[#0A2540] font-black text-[10px] uppercase tracking-widest hover:bg-[#0A2540] hover:text-white transition-all duration-200 rounded-[10px]"
            >
              Ask a Question
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Page ───────────────────────────────────────────────────────────

export default function ICTPage() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  return (
    <div className="min-h-screen bg-[#F8FAFC] selection:bg-[#E30613] selection:text-white">

      {/* ── Hero ── */}
      <section className="relative min-h-[75vh] flex items-end overflow-hidden bg-[#0A2540]">
        <div className="absolute inset-0">
          <Image
            src="/images/ict/tech-bg.jpg"
            alt="Digital Transformation"
            fill
            className="object-cover opacity-35" // Increased from 20 to 35
            priority
          />
        </div>
        {/* Lightened horizontal gradient: from full to 70/40 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A2540]/70 via-[#0A2540]/40 to-transparent" />
        
        {/* Softened bottom fade: added /50 opacity */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#F8FAFC]/50 via-transparent to-transparent" />

        {/* Dot texture */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-44 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-10 h-[2px] bg-[#F2C12C]" />
              <span className="text-[11px] font-black uppercase tracking-[0.4em] text-[#F2C12C]">
                School of ICT & Digital Innovation
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
              Develop High-Demand<br />
              <span className="text-[#F2C12C]">Technical Skills.</span>
            </h1>

            <p className="text-xl text-white leading-relaxed mb-12 max-w-2xl">
              Equipping the next generation of African innovators for the digital
              transformation era. Our curriculum bridges academic theory and
              industry demand — with real projects from day one.
            </p>

            <div className="flex flex-wrap gap-4 mb-16">
              <Link
                href="/admissions"
                className="px-8 py-4 bg-[#E30613] text-white text-xs font-black uppercase tracking-widest hover:bg-white hover:text-[#0A2540] transition-all duration-300 rounded-[8px]"
              >
                Apply Now
              </Link>
              
              <Link
                href="#courses"
                className="px-8 py-4 border border-white/25 text-white text-xs font-black uppercase tracking-widest hover:bg-white/10 transition-all duration-300 rounded-[8px]"
              >
                View Courses
              </Link>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-white/15">
              {[
                { value: "4", label: "Specialisations" },
                { value: "100%", label: "Practical Labs" },
                { value: "≤20", label: "Students per Cohort" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="text-3xl font-black text-[#F2C12C] leading-none">{value}</p>
                  <p className="text-xs text-white/55 mt-1.5 font-medium uppercase tracking-wider">{label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Course Grid ── */}
      <section id="courses" className="py-24 max-w-7xl mx-auto px-6 -mt-24 relative z-20">
        <div className="mb-12">
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#E30613] mb-2">
            Academic Offerings
          </p>
          <h2 className="text-3xl font-black text-[#0A2540] tracking-tight">
            Core Specialisations
          </h2>
          <p className="text-slate-500 text-sm mt-2 max-w-xl">
            Choose a path that aligns with your career goals in the global tech ecosystem.
            Click any course to see the full curriculum and career outcomes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courses.map((course, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group bg-white border border-slate-200/70 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col rounded-[16px]"
            >
              {/* Course image */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#0A2540]/55" />

                {/* Level badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-[9px] font-black uppercase tracking-widest bg-white/15 border border-white/25 text-white px-3 py-1.5 backdrop-blur-sm rounded-[6px]"
                  >
                    {course.level}
                  </span>
                </div>

                {/* Icon */}
                <div
                  className="absolute bottom-4 right-4 w-11 h-11 bg-[#E30613] text-white flex items-center justify-center rounded-[10px]"
                >
                  {course.icon}
                </div>
              </div>

              <div className="p-7 flex flex-col gap-4 flex-1">
                {/* Title + tagline */}
                <div>
                  <h3 className="text-lg font-black text-[#0A2540] leading-tight">{course.title}</h3>
                  <p className="text-xs text-[#E30613] font-bold mt-1">{course.tagline}</p>
                </div>

                <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">{course.desc}</p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {course.skills.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="text-[9px] font-bold text-slate-600 bg-slate-100 px-2.5 py-1 uppercase tracking-wider rounded-[4px]"
                    >
                      {s}
                    </span>
                  ))}
                  {course.skills.length > 4 && (
                    <span className="text-[9px] font-bold text-slate-400 px-1 py-1">
                      +{course.skills.length - 4} more
                    </span>
                  )}
                </div>

                {/* Meta + CTA */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="text-xs font-bold">{course.duration}</span>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-widest text-[#E30613] hover:gap-3 transition-all duration-200"
                  >
                    View Details <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── Advantage section ── */}
      <section className="bg-[#0A2540] py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">

            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-[#F2C12C] mb-4">
                The IIFLHM Advantage
              </p>
              <h2 className="text-4xl font-black text-white mb-10 leading-tight tracking-tight">
                Built for the Real<br />World of Tech
              </h2>

              <div className="space-y-7">
                {features.map(({ title, desc, icon }) => (
                  <div key={title} className="flex gap-5">
                    <div
                      className="w-11 h-11 bg-white/5 border border-white/10 flex items-center justify-center shrink-0 rounded-[10px]"
                    >
                      {icon}
                    </div>
                    <div>
                      <h4 className="text-white font-black text-sm mb-1.5">{title}</h4>
                      <p className="text-slate-400 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code terminal mockup */}
            <div className="relative">
              <div
                className="relative bg-slate-900 border border-white/10 p-8 shadow-2xl rounded-[20px]"
              >
                <div className="flex gap-2 mb-6">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>

                <div className="space-y-3 font-mono text-sm">
                  <p className="text-blue-400">class TechLeader {"{"}</p>
                  <p className="text-slate-500 pl-4">{"// Preparing for the Digital Era"}</p>
                  <p className="text-purple-400 pl-4">{"constructor() {"}</p>
                  <p className="text-white pl-8">
                    {"this.skills = [\"Fullstack\", \"Data\", \"Security\"];"}
                  </p>
                  <p className="text-white pl-8">this.ready = <span className="text-green-400">true</span>;</p>
                  <p className="text-white pl-8">this.location = <span className="text-yellow-400">&quot;Narok, Kenya&quot;</span>;</p>
                  <p className="text-purple-400 pl-4">{"}"}</p>
                  <p className="text-blue-400">{"}"}</p>
                </div>

                <div
                  className="mt-10 flex items-center gap-4 p-4 bg-white/5 border border-white/5 rounded-[10px]"
                >
                  <Laptop className="text-[#F2C12C] w-5 h-5 shrink-0" />
                  <div>
                    <p className="text-white text-xs font-black">100% Practical Labs</p>
                    <p className="text-slate-500 text-[10px]">Narok Campus & Virtual Labs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Final CTA ── */}
      <section className="py-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <CheckCircle2 className="w-10 h-10 text-[#E30613] mx-auto mb-8" />
          <h2 className="text-4xl font-black text-[#0A2540] mb-5 tracking-tight">
            Ready to Build the Future?
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed text-sm max-w-lg mx-auto">
            Applications for the 2026/27 cycle are now open. Secure your spot in
            our limited-intake ICT cohorts before the deadline..
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#0A2540] text-white text-xs font-black uppercase tracking-widest hover:bg-[#E30613] transition-all duration-300 shadow-lg rounded-[10px]"
            >
              Begin Your Application <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border border-[#0A2540] text-[#0A2540] text-xs font-black uppercase tracking-widest hover:bg-[#0A2540] hover:text-white transition-all duration-300 rounded-[10px]"
            >
              Speak with an Advisor
            </Link>
          </div>
        </div>
      </section>

      {/* ── Course Detail Modal ── */}
      <AnimatePresence>
        {selectedCourse && (
          <CourseModal
            course={selectedCourse}
            onClose={() => setSelectedCourse(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
}