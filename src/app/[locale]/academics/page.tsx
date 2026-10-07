import { Link } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

const PROGRAMMES = [
  { key: 'languages', href: '/academics/languages' },
  { key: 'hospitality', href: '/academics/hospitality-management' },
  { key: 'tourism', href: '/academics/travel-tourism' },
  { key: 'ict', href: '/academics/ict' },
  { key: 'german', href: '/academics/german-language' },
  { key: 'nursing', href: '/academics/nursing-preparation' },
] as const;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.academics' });
  return { title: t('metaTitle'), description: t('metaDescription') };
}

export default async function AcademicsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.academics');
  const tc = await getTranslations('pages.commonCta');

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{t('title')}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROGRAMMES.map((p) => (
          <Link key={p.key} href={p.href} className="group border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-secondary transition-all">
            <h2 className="text-xl font-black text-primary mb-2 group-hover:text-secondary transition-colors">
              {t(p.key === 'tourism' ? 'tourism' : p.key === 'hospitality' ? 'hospitality' : p.key === 'languages' ? 'languages' : p.key === 'ict' ? 'ict' : p.key === 'german' ? 'german' : 'nursing')}
            </h2>
            <p className="text-sm text-slate-600 mb-6">
              {t(p.key === 'tourism' ? 'tourismDesc' : p.key === 'hospitality' ? 'hospitalityDesc' : p.key === 'languages' ? 'languagesDesc' : p.key === 'ict' ? 'ictDesc' : p.key === 'german' ? 'languagesDesc' : 'nursing')}
            </p>
            <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{tc('exploreProgram')} →</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
