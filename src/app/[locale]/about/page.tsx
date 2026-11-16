import { Link } from "@/i18n/routing";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import Image from "next/image";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return { title: t("title"), description: t("subtitle") };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("pages.about");

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-[85vh] lg:min-h-screen flex items-center overflow-hidden bg-[#0A2540] pt-24 pb-32">
        <div className="absolute inset-0 z-0">
          <Image src="/images/about-hero.jpg" alt="" fill priority className="object-cover opacity-60" />
          <div className="absolute inset-0 bg-[#0A2540]/40 z-10" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-20 w-full">
          <div className="max-w-4xl">
            <span className="text-[#F2C12C] font-bold uppercase tracking-[0.3em] text-xs mb-6 block drop-shadow-md">
              {t("heroEyebrow")}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-[1.1] drop-shadow-xl">
              {t("heroTitle")}
            </h1>
            <p className="text-white text-lg md:text-xl max-w-2xl leading-relaxed mb-12 font-medium drop-shadow-sm">
              {t("heroBody")}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <Link href="/admissions" className="w-full sm:w-auto bg-[#F2C12C] text-[#0A2540] px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest text-center hover:bg-white transition-all">
                {t("heroCtaPrimary")}
              </Link>
              <Link href="/academics" className="w-full sm:w-auto border-2 border-white/40 text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest text-center hover:bg-white hover:text-[#0A2540] transition-all">
                {t("heroCtaSecondary")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
