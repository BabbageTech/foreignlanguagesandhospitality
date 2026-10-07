import ContactForm from '@/components/contact/ContactForm';
import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';
import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'pages.contact' });
  return { title: t('metaTitle'), description: t('subtitle') };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('pages.contact');

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-primary text-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black mb-4">{t('title')}</h1>
          <p className="text-white/70 text-lg max-w-2xl">{t('subtitle')}</p>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-16">
        <div className="space-y-8">
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-secondary mb-2">{t('visit')}</h2>
            <p className="text-primary font-bold">{CONTACT_INFO.address}</p>
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-secondary mb-2">{t('call')}</h2>
            {CONTACT_INFO.phones.map((p) => (
              <a key={p} href={`tel:${p.replace(/\s/g, '')}`} className="block text-primary font-bold hover:text-secondary">{p}</a>
            ))}
          </div>
          <div>
            <h2 className="text-xs font-black uppercase tracking-widest text-secondary mb-2">{t('email')}</h2>
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary font-bold hover:text-secondary break-all">{SITE_CONFIG.email}</a>
          </div>
        </div>
        <ContactForm />
      </section>
    </div>
  );
}
