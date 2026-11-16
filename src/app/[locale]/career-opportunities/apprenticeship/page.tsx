import OriginalPage from "@/views/career-opportunities/apprenticeship/page";
import { setRequestLocale } from "next-intl/server";
type Props = { params: Promise<{ locale: string }> };
export default async function LocaleWrappedPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <OriginalPage />;
}
