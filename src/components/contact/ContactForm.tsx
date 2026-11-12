"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const SUBJECT_OPTIONS = [
  "Admission Inquiry",
  "Program Information",
  "Financial Aid",
  "General Enquiry",
  "Other",
 ] as const;

const contactSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters"),
  email:    z.string().email("Please enter a valid email address"),
  phone:    z.string().min(10, "Please enter a valid phone number"),
  subject:  z.enum(SUBJECT_OPTIONS, { message: "Please select a subject" }),
  message:  z.string().min(20, "Message must be at least 20 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const inputBase =
  "w-full border-b-2 border-slate-200 bg-transparent py-3 text-sm font-medium text-[#0A2540] placeholder:text-slate-300 focus:outline-none focus:border-[#0A2540] transition-all duration-200";

const inputErrorClass = "border-[#E30613] focus:border-[#E30613]";

const FieldLabel = ({
  children,
  required,
}: {
  children: React.ReactNode;
  required?: boolean;
}) => (
  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
    {children}
    {required && <span className="text-[#E30613] ml-1">*</span>}
  </label>
);

const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <div className="flex items-center gap-1.5 mt-2">
      <AlertCircle className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
      <p className="text-[11px] font-bold text-[#E30613]">{message}</p>
    </div>
  ) : null;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted]   = useState(false);
  const [error, setError]               = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { subject: "Admission Inquiry" },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (!endpoint) throw new Error("Form endpoint not configured. Please contact us directly.");

      const res = await fetch(endpoint, {
        method:  "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body:    JSON.stringify({
          ...data,
          _subject: `New Contact: ${data.subject} — ${data.fullName}`,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.error ?? "Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
      reset();
      setTimeout(() => setIsSubmitted(false), 10000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div
        className="text-center py-12 px-6 bg-green-50 border border-green-200"
        style={{ borderRadius: "16px" }}
      >
        <div className="w-16 h-16 bg-green-100 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <div className="w-8 h-1 bg-[#F2C12C] rounded-full mx-auto mb-4" />
        <h3 className="text-xl font-black text-[#0A2540] mb-3">Message Received!</h3>
        <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto mb-7">
          Thank you for reaching out. Our team will get back to you within{" "}
          <strong className="text-[#0A2540]">24 hours</strong>.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="https://wa.me/254723104680"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all"
            style={{ borderRadius: "8px" }}
          >
            Chat on WhatsApp
          </a>
          <button
            onClick={() => setIsSubmitted(false)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 text-[#0A2540] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all"
            style={{ borderRadius: "8px" }}
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">

      {/* Name + Phone */}
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
        <div>
          <FieldLabel required>Full Name</FieldLabel>
          <input
            {...register("fullName")}
            placeholder="Jane Doe"
            className={`${inputBase} ${errors.fullName ? inputErrorClass : ""}`}
          />
          <FieldError message={errors.fullName?.message} />
        </div>
        <div>
          <FieldLabel required>Phone Number</FieldLabel>
          <input
            {...register("phone")}
            placeholder="+254 7XX XXX XXX"
            className={`${inputBase} ${errors.phone ? inputErrorClass : ""}`}
          />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>

      {/* Email */}
      <div>
        <FieldLabel required>Email Address</FieldLabel>
        <input
          type="email"
          {...register("email")}
          placeholder="name@example.com"
          className={`${inputBase} ${errors.email ? inputErrorClass : ""}`}
        />
        <FieldError message={errors.email?.message} />
      </div>

      {/* Subject */}
      <div>
        <FieldLabel required>Subject of Enquiry</FieldLabel>
        <select
          {...register("subject")}
          className={`${inputBase} cursor-pointer ${errors.subject ? inputErrorClass : ""}`}
        >
          {SUBJECT_OPTIONS.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        <FieldError message={errors.subject?.message} />
      </div>

      {/* Message */}
      <div>
        <FieldLabel required>Your Message</FieldLabel>
        <textarea
          {...register("message")}
          rows={5}
          placeholder="How can we help you today?"
          className={`w-full border-2 border-slate-100 bg-slate-50/50 p-4 text-sm font-medium text-[#0A2540] placeholder:text-slate-300 focus:bg-white focus:border-[#0A2540] focus:outline-none transition-all duration-200 resize-none ${
            errors.message ? "border-[#E30613] focus:border-[#E30613]" : ""
          }`}
          style={{ borderRadius: "12px" }}
        />
        <FieldError message={errors.message?.message} />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 bg-[#0A2540] text-white font-black text-[10px] uppercase tracking-[0.25em] hover:bg-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ borderRadius: "10px" }}
      >
        {isSubmitting ? (
          <>
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Processing…
          </>
        ) : (
          <>
            Submit Enquiry
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>

      {/* Global error */}
      {error && (
        <div
          className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3"
          style={{ borderRadius: "10px" }}
        >
          <AlertCircle className="w-4 h-4 text-[#E30613] shrink-0" />
          <p className="text-xs font-bold text-[#E30613]">{error}</p>
        </div>
      )}
    </form>
  );
}