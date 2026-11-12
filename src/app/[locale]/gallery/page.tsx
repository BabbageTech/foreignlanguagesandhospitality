import { setRequestLocale } from "next-intl/server";
type Props = { params: Promise<{ locale: string }> };
export default async function GalleryPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-black text-[#0A2540] mb-6">Gallery</h1>
      <p className="text-slate-600">Campus life, classrooms, and hospitality training moments.</p>
    </div>
  );
}
