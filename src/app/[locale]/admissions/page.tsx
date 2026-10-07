import AdmissionForm from '@/components/admissions/AdmissionForm';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.admissions' });
  return { title: t('metaTitle'), description: t('subtitle') };
}

export default async function AdmissionsPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.admissions');

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{t('title')}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-black text-primary mb-8">{t('formTitle')}</h2>
        <AdmissionForm />
      </section>
    </div>
  );
}
