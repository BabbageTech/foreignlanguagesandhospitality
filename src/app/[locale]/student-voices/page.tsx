import Testimonials from '@/components/home/Testimonials';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.studentVoices' });
  return { title: t('metaTitle'), description: t('subtitle') };
}

export default async function StudentVoicesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.studentVoices');
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{t('title')}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>
      <Testimonials />
    </div>
  );
}
