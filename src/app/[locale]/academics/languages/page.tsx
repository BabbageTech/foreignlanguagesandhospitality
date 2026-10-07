import FeaturedLanguage from '@/components/languages/FeaturedLanguage';
import LanguageHero from '@/components/languages/LanguageHero';
import LanguagesClient from '@/components/languages/LanguagesClient';
import { setRequestLocale } from 'next-intl/server';

type Props = { params: Promise<{ locale: string }> };

export default async function LanguagesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="min-h-screen bg-white">
      <LanguageHero />
      <FeaturedLanguage />
      <div id="courses">
        <LanguagesClient />
      </div>
    </div>
  );
}
