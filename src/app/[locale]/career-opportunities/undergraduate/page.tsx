import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/routing";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: "undergraduate" };
}

export default async function Page({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-[#0A2540] mb-6 capitalize">undergraduate</h1>
      <p className="text-slate-600 mb-8">Learn about undergraduate pathways with IIFLHM support and language preparation.</p>
      <Link href="/admissions" className="inline-block bg-[#0A2540] text-white px-6 py-3 rounded-full text-sm font-bold uppercase tracking-wider">Apply Now</Link>
    </div>
  );
}
