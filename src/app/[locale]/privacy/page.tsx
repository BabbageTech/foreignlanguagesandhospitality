import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.privacy' });
  return { title: t('metaTitle') };
}

export default async function PrivacyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.privacy');
  const a = await getTranslations('about.privacy');

  const sections = [
    { title: a('collectTitle'), body: a('collectBody') },
    { title: a('useTitle'), body: a('useBody') },
    { title: a('shareTitle'), body: a('shareBody') },
    { title: a('rightsTitle'), body: a('rightsBody') },
    { title: a('contactTitle'), body: a('contactBody') },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black mb-4">{t('title')}</h1>
          <p className="text-white/70 text-lg leading-relaxed">{a('intro')}</p>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-6 py-16 space-y-10">
        {sections.map((s) => (
          <div key={s.title}>
            <h2 className="text-xl font-black text-primary mb-3">{s.title}</h2>
            <p className="text-slate-600 leading-relaxed">{s.body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
