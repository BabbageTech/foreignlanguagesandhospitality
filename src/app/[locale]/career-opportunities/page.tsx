import { Link } from '@/i18n/routing';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.careers' });
  return { title: t('metaTitle'), description: t('subtitle') };
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.careers');
  const tc = await getTranslations('pages.commonCta');

  const items = [
    { href: '/career-opportunities/apprenticeship', title: t('apprenticeship') },
    { href: '/career-opportunities/undergraduate', title: t('undergraduate') },
    { href: '/career-opportunities/masters', title: t('masters') },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{t('title')}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-3 gap-8">
        {items.map((item) => (
          <Link key={item.href} href={item.href} className="border border-slate-200 rounded-2xl p-8 hover:shadow-xl hover:border-secondary transition-all">
            <h2 className="text-xl font-black text-primary mb-4">{item.title}</h2>
            <span className="text-[10px] font-black uppercase tracking-widest text-secondary">{tc('learnMore')} →</span>
          </Link>
        ))}
      </section>
    </div>
  );
}
