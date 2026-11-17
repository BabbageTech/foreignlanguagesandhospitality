"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { getContactCopy } from "@/i18n/contact";
import { getLegalPageCopy } from "@/i18n/legal-pages";
import { localePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, CheckCircle } from "lucide-react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const SUBJECT_OPTIONS = ["Admission Inquiry", "Program Information", "Financial Aid", "General Enquiry", "Other"] as const;
type ContactFormData = { fullName: string; email: string; phone: string; subject: typeof SUBJECT_OPTIONS[number]; message: string };
const inputBase = "w-full border-b-2 border-slate-200 bg-transparent py-3 text-sm font-medium text-[#0A2540] placeholder:text-slate-300 focus:outline-none focus:border-[#0A2540] transition-all duration-200";
const inputErrorClass = "border-[#E30613] focus:border-[#E30613]";

export default function ContactForm({ locale }: { locale: Locale }) {
  const t = (key: Parameters<typeof getContactCopy>[1]) => getContactCopy(locale, key);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const schema = z.object({
    fullName: z.string().min(3, t("nameMin")),
    email: z.string().email(t("emailInvalid")),
    phone: z.string().min(10, t("phoneInvalid")),
    subject: z.enum(SUBJECT_OPTIONS, { message: t("subjectRequired") }),
    message: z.string().min(20, t("messageMin")),
  });
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormData>({
    resolver: zodResolver(schema), defaultValues: { subject: "Admission Inquiry" },
  });
  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true); setError(null);
    try {
      const response = await fetch("/api/submit-form", {
        method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ name: data.fullName, email: data.email, phone: data.phone, subject: data.subject, message: data.message, selectedLocale: locale, pageLocale: locale, sourcePage: window.location.pathname }),
      });
      const body = await response.json().catch(() => ({}));
      if (!response.ok || !body.success) {
        setError(response.status === 503 ? t("serverError") : t("genericError"));
        return;
      }
      setIsSubmitted(true); reset();
    } catch {
      setError(t("genericError"));
    } finally { setIsSubmitting(false); }
  };
  const subjectLabels: Record<typeof SUBJECT_OPTIONS[number], string> = {
    "Admission Inquiry": t("admissionInquiry"), "Program Information": t("programInformation"),
    "Financial Aid": t("financialAid"), "General Enquiry": t("generalEnquiry"), Other: t("other"),
  };
  const FieldError = ({ message, id }: { message?: string; id: string }) => message ? (
    <div id={id} role="alert" className="flex items-center gap-1.5 mt-2">
      <AlertCircle className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
      <p className="text-[11px] font-bold text-[#E30613]">{message}</p>
    </div>
  ) : null;

  if (isSubmitted) return (
    <div role="status" aria-live="polite" className="text-center py-12 px-6 bg-green-50 border border-green-200" style={{ borderRadius: "16px" }}>
      <div className="w-16 h-16 bg-green-100 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-5"><CheckCircle className="w-8 h-8 text-green-600" /></div>
      <div className="w-8 h-1 bg-[#F2C12C] rounded-full mx-auto mb-4" />
      <h3 className="text-xl font-black text-[#0A2540] mb-3">{t("successTitle")}</h3>
      <p className="text-slate-600 text-sm leading-relaxed max-w-sm mx-auto mb-7">{t("successBody")}</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all" style={{ borderRadius: "8px" }}>{t("whatsappAction")}</a>
        <button type="button" onClick={() => setIsSubmitted(false)} className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 text-[#0A2540] font-black text-[10px] uppercase tracking-widest hover:bg-slate-50 transition-all" style={{ borderRadius: "8px" }}>{t("sendAnother")}</button>
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      <p className="border-l-4 border-amber-500 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-slate-700" role="note">
        {getLegalPageCopy(locale, "privacy").body} {" "}
        <a href={localePath("/privacy", locale)} className="font-bold underline underline-offset-2">{getLegalPageCopy(locale, "privacy").title}</a>
      </p>
      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
        <div>
          <label htmlFor="contact-full-name" className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{t("fullName")} <span className="text-[#E30613]">*</span></label>
          <input id="contact-full-name" autoComplete="name" aria-invalid={!!errors.fullName} aria-describedby={errors.fullName ? "contact-full-name-error" : undefined} {...register("fullName")} placeholder={t("namePlaceholder")} className={`${inputBase} ${errors.fullName ? inputErrorClass : ""}`} />
          <FieldError id="contact-full-name-error" message={errors.fullName?.message} />
        </div>
        <div>
          <label htmlFor="contact-phone" className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{t("phoneNumber")} <span className="text-[#E30613]">*</span></label>
          <input id="contact-phone" type="tel" autoComplete="tel" aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "contact-phone-error" : undefined} {...register("phone")} placeholder={t("phonePlaceholder")} className={`${inputBase} ${errors.phone ? inputErrorClass : ""}`} />
          <FieldError id="contact-phone-error" message={errors.phone?.message} />
        </div>
      </div>
      <div>
        <label htmlFor="contact-email" className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{t("emailAddress")} <span className="text-[#E30613]">*</span></label>
        <input id="contact-email" type="email" autoComplete="email" aria-invalid={!!errors.email} aria-describedby={errors.email ? "contact-email-error" : undefined} {...register("email")} placeholder={t("emailPlaceholder")} className={`${inputBase} ${errors.email ? inputErrorClass : ""}`} />
        <FieldError id="contact-email-error" message={errors.email?.message} />
      </div>
      <div>
        <label htmlFor="contact-subject" className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{t("subject")} <span className="text-[#E30613]">*</span></label>
        <select id="contact-subject" aria-invalid={!!errors.subject} aria-describedby={errors.subject ? "contact-subject-error" : undefined} {...register("subject")} className={`${inputBase} cursor-pointer ${errors.subject ? inputErrorClass : ""}`}>
          {SUBJECT_OPTIONS.map((option) => <option key={option} value={option}>{subjectLabels[option]}</option>)}
        </select>
        <FieldError id="contact-subject-error" message={errors.subject?.message} />
      </div>
      <div>
        <label htmlFor="contact-message" className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{t("message")} <span className="text-[#E30613]">*</span></label>
        <textarea id="contact-message" rows={5} aria-invalid={!!errors.message} aria-describedby={errors.message ? "contact-message-error" : undefined} {...register("message")} placeholder={t("messagePlaceholder")} className={`w-full border-2 border-slate-100 bg-slate-50/50 p-4 text-sm font-medium text-[#0A2540] placeholder:text-slate-300 focus:bg-white focus:border-[#0A2540] focus:outline-none transition-all duration-200 resize-none ${errors.message ? "border-[#E30613] focus:border-[#E30613]" : ""}`} style={{ borderRadius: "12px" }} />
        <FieldError id="contact-message-error" message={errors.message?.message} />
      </div>
      <button type="submit" disabled={isSubmitting} className="w-full flex items-center justify-center gap-2 py-4 bg-[#0A2540] text-white font-black text-[10px] uppercase tracking-[0.25em] hover:bg-black transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed" style={{ borderRadius: "10px" }}>
        {isSubmitting ? <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden="true" />{t("processing")}</> : <>{t("submit")}<ArrowRight className="w-4 h-4" /></>}
      </button>
      {error && <div role="alert" aria-live="assertive" className="flex items-center gap-3 bg-red-50 border border-red-200 px-4 py-3" style={{ borderRadius: "10px" }}><AlertCircle className="w-4 h-4 text-[#E30613] shrink-0" /><p className="text-xs font-bold text-[#E30613]">{error}</p></div>}
    </form>
  );
}
