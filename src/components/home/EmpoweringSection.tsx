import { Eye, Target } from "lucide-react";
import Image from "next/image";
import type { Locale } from "@/i18n/config";
import { homeSections } from "@/i18n/home-sections";

export default function EmpoweringSection({ locale }: { locale: Locale }) {
  const copy = homeSections[locale].empowering;
  const pillars = [
    { icon: <Eye className="w-5 h-5" />, label: copy.vision, body: copy.visionBody, color: "text-cyan-500", bg: "bg-cyan-50" },
    { icon: <Target className="w-5 h-5" />, label: copy.mission, body: copy.missionBody, color: "text-pink-500", bg: "bg-pink-50" },
  ];
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6"><div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="relative min-h-[560px]">
          <div className="relative rounded-[40px] overflow-hidden aspect-[4/5] w-full max-w-[450px] shadow-2xl">
            <Image src="/images/interactive-learning.jpg" alt={copy.interactive} fill className="object-cover" />
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-sm p-4 rounded-2xl shadow-lg max-w-[200px]"><p className="text-sm font-bold text-primary">{copy.interactive}</p><p className="text-[10px] text-neutral-500 leading-tight mt-1">{copy.interactiveDesc}</p></div>
          </div>
          <div className="absolute bottom-0 right-0 lg:-right-4 w-[min(280px,75%)] md:w-[320px] rounded-[32px] overflow-hidden shadow-2xl border-8 border-white bg-white">
            <div className="relative aspect-square"><Image src="/images/teacher-discussing.jpg" alt={copy.teacher} fill className="object-cover" /></div>
            <div className="bg-white p-5"><p className="text-sm font-bold text-primary">{copy.teacher}</p><p className="text-[10px] text-neutral-500 leading-tight mt-1">{copy.teacherDesc}</p></div>
          </div>
        </div>
        <div className="flex flex-col"><h2 className="text-4xl md:text-5xl font-bold text-[#0A2540] leading-tight mb-6">{copy.title}</h2><div className="w-full h-[2px] bg-[#0A2540] mb-8" /><p className="text-lg text-neutral-600 leading-relaxed mb-10">{copy.intro}</p>
          <div className="space-y-6">{pillars.map(({ icon, label, color, bg, body }) => <div key={label} className="bg-neutral-50 rounded-[32px] p-8 transition-all hover:bg-white hover:shadow-xl group border border-transparent hover:border-neutral-100"><div className="flex items-start gap-6"><div className={`w-12 h-12 rounded-full flex items-center justify-center shrink-0 ${bg} ${color}`}>{icon}</div><div><h3 className="text-xl font-bold text-[#0A2540] mb-3">{label}</h3><p className="text-neutral-500 leading-relaxed text-sm">{body}</p></div></div></div>)}</div>
        </div>
      </div></div>
    </section>
  );
}
