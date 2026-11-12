import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return { title: "hospitality-management" };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-[#0A2540] mb-6 capitalize">hospitality management</h1>
      <p className="text-slate-600 mb-8">Explore this programme at IIFLHM. Contact admissions for current schedules and requirements.</p>
      <Link href="/admissions" className="inline-flex items-center gap-2 bg-[#0A2540] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider hover:bg-[#F2C12C] hover:text-[#0A2540] transition-all">
        Apply Now <ArrowRight size={16} />
      </Link>
    </div>
  );
}
