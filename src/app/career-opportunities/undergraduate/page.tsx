import { defaultLocale } from "@/i18n/config";
import { redirect } from "next/navigation";
export default function RedirectPage() {
  redirect(`/${defaultLocale}/career-opportunities/undergraduate`);
}
