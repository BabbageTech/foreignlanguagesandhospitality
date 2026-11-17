import { NextRequest, NextResponse } from "next/server";

const formspreeId = process.env.FORMSPREE_ENDPOINT || process.env.FORMSPREE_ID || process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || process.env.NEXT_PUBLIC_FORMSPREE_ID || "";
type FormPayload = {
  name?: string; email?: string; phone?: string; message?: string; subject?: string;
  company?: string; website?: string; selectedLocale?: string; pageLocale?: string; sourcePage?: string;
};
const json = (body: unknown, status = 200) => NextResponse.json(body, { status });
const validEmail = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

export async function POST(request: NextRequest) {
  try {
    const raw = await request.text();
    if (raw.length > 20_000) return json({ success: false, error: "Request is too large." }, 413);
    const body = JSON.parse(raw) as FormPayload;

    // Honeypot: return a generic success to avoid giving automated submissions feedback.
    if (typeof body.website === "string" && body.website.trim()) return json({ success: true });
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";
    if (name.length < 2 || name.length > 120) return json({ success: false, error: "Enter a name between 2 and 120 characters." }, 400);
    if (!validEmail(email) || email.length > 254) return json({ success: false, error: "Enter a valid email address." }, 400);
    if (message.length < 10 || message.length > 5000) return json({ success: false, error: "Message must be between 10 and 5,000 characters." }, 400);

    if (!formspreeId) {
      return json({ success: false, error: "The enquiry service is not configured. Please contact the institute by phone or email." }, 503);
    }
    const endpoint = formspreeId.startsWith("http") ? formspreeId : `https://formspree.io/f/${formspreeId}`;
    const payload = {
      name, email, phone: typeof body.phone === "string" ? body.phone.trim().slice(0, 40) : "",
      subject: typeof body.subject === "string" ? body.subject.trim().slice(0, 160) : "Website enquiry",
      message, company: typeof body.company === "string" ? body.company.trim().slice(0, 160) : "",
      selectedLocale: body.selectedLocale || body.pageLocale || "en",
      pageLocale: body.pageLocale || "en",
      sourcePage: typeof body.sourcePage === "string" ? body.sourcePage.slice(0, 300) : "website",
      source: "IIFLHM Website", submittedAt: new Date().toISOString(),
    };
    const upstream = await fetch(endpoint, {
      method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload), signal: AbortSignal.timeout(10_000),
    });
    if (!upstream.ok) {
      console.error("Form provider rejected an enquiry", { status: upstream.status });
      return json({ success: false, error: "We could not send your enquiry. Please try again or contact us directly." }, 502);
    }
    return json({ success: true, message: "Your enquiry has been sent." });
  } catch (error) {
    console.error("Enquiry endpoint failed", error);
    return json({ success: false, error: "We could not process your enquiry. Please try again." }, 500);
  }
}

export function GET() {
  return json({ success: false, error: "Method not allowed" }, 405);
}
