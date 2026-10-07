import { redirect } from "next/navigation";

/** Root without locale — middleware normally handles this; keep a safe fallback. */
export default function RootPage() {
  redirect("/en");
}
