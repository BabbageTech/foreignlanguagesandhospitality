import { NextRequest, NextResponse } from "next/server";

// Optional: environment variable (recommended)
const FORMSPREE_ENDPOINT = process.env.NEXT_PUBLIC_FORMSPREE_ID || "";

// ─────────────────────────────────────────────
// Types
// ─────────────────────────────────────────────
type FormPayload = {
  name: string;
  email: string;
  phone?: string;
  message: string;
  subject?: string;
  company?: string;

  // honeypot (anti-spam)
  website?: string;
};

// ─────────────────────────────────────────────
// Helpers
// ─────────────────────────────────────────────
function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function badRequest(message: string) {
  return NextResponse.json(
    { success: false, error: message },
    { status: 400 }
  );
}

function serverError(message = "Something went wrong") {
  return NextResponse.json(
    { success: false, error: message },
    { status: 500 }
  );
}

// ─────────────────────────────────────────────
// POST Handler
// ─────────────────────────────────────────────
export async function POST(req: NextRequest) {
  try {
    const body: FormPayload = await req.json();

    const {
      name,
      email,
      phone,
      message,
      subject,
      company,
      website, // honeypot
    } = body;

    // ─────────────────────────────────────────
    // 🛑 Honeypot Spam Protection
    // ─────────────────────────────────────────
    if (website) {
      return NextResponse.json({ success: true }); // silently ignore bots
    }

    // ─────────────────────────────────────────
    // ✅ Validation
    // ─────────────────────────────────────────
    if (!name || name.trim().length < 2) {
      return badRequest("Name is required");
    }

    if (!email || !isValidEmail(email)) {
      return badRequest("Valid email is required");
    }

    if (!message || message.trim().length < 10) {
      return badRequest("Message must be at least 10 characters");
    }

    // ─────────────────────────────────────────
    // 📦 Prepare Payload
    // ─────────────────────────────────────────
    const payload = {
      name: name.trim(),
      email: email.trim(),
      phone: phone?.trim() || "",
      subject: subject?.trim() || "Website Inquiry",
      message: message.trim(),
      company: company?.trim() || "",
      source: "IIFLHM Website",
      timestamp: new Date().toISOString(),
    };

    // ─────────────────────────────────────────
    // 🚀 Send to Formspree (or webhook)
    // ─────────────────────────────────────────
    if (FORMSPREE_ENDPOINT) {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        console.error("Formspree error:", await response.text());
        return serverError("Failed to submit form");
      }
    } else {
      // fallback (dev mode)
      console.log("Form submission (no endpoint configured):", payload);
    }

    // ─────────────────────────────────────────
    // ✅ Success Response
    // ─────────────────────────────────────────
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });

  } catch (error) {
    console.error("API ERROR:", error);
    return serverError();
  }
}

// ─────────────────────────────────────────────
// Optional: Handle unsupported methods
// ─────────────────────────────────────────────
export async function GET() {
  return NextResponse.json(
    { success: false, error: "Method not allowed" },
    { status: 405 }
  );
}