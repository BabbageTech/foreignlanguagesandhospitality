import { redirect } from "next/navigation";

/** Legacy non-locale route — redirects to default locale. Safe for static build. */
export default function LegacyRedirectPage() {
  redirect("/en/academics");
}
