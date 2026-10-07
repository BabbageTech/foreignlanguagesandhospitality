"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, ArrowRight, CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as z from "zod";

const SUBJECT_IDS = ["admission", "program", "financial", "general", "other"] as const;
type SubjectId = (typeof SUBJECT_IDS)[number];

const inputBase =
  "w-full border-b-2 border-slate-200 bg-transparent py-3 text-sm font-medium text-[#0A2540] placeholder:text-slate-300 focus:outline-none focus:border-[#0A2540] transition-all duration-200";
const inputErrorClass = "border-[#E30613] focus:border-[#E30613]";

const FieldLabel = ({ children, required }: { children: React.ReactNode; required?: boolean }) => (
  <label className="block text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
    {children}
    {required && <span className="text-[#E30613] ml-1">*</span>}
  </label>
);

const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <div className="flex items-center gap-1.5 mt-2">
      <AlertCircle className="w-3.5 h-3.5 text-[#E30613] shrink-0" aria-hidden />
      <p className="text-[11px] font-bold text-[#E30613]">{message}</p>
    </div>
  ) : null;

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  subject: SubjectId;
  message: string;
};

export default function ContactForm() {
  const t = useTranslations("forms.contact");
  const tv = useTranslations("forms.validation");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const schema = useMemo(
    () =>
      z.object({
        fullName: z.string().min(3, tv("minLength", { min: 3 })),
        email: z.string().email(tv("email")),
        phone: z.string().min(10, tv("phone")),
        subject: z.enum(SUBJECT_IDS, { message: tv("selectSubject") }),
        message: z.string().min(20, tv("minLength", { min: 20 })),
      }),
    [tv]
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    defaultValues: { subject: "admission" },
  });

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    setIsSubmitting(true);
    setError(null);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
      if (!endpoint) throw new Error(t("error"));
      const subjectLabel = t(`subjects.${data.subject}` as "subjects.admission");
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...data,
          subject: subjectLabel,
          _form: "contact",
        }),
      });
      if (!res.ok) throw new Error(t("error"));
      setIsSubmitted(true);
      reset({ subject: "admission" });
      setTimeout(() => setIsSubmitted(false), 10000);
    } catch {
      setError(t("error"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center" role="status">
        <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto mb-4" aria-hidden />
        <p className="text-lg font-black text-primary mb-2">{t("success")}</p>
        <button
          type="button"
          onClick={() => setIsSubmitted(false)}
          className="mt-4 text-sm font-bold text-secondary underline"
        >
          {t("title")}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-7">
      {error && (
        <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-[#E30613]" role="alert">
          {error}
        </div>
      )}
      <div className="grid sm:grid-cols-2 gap-7">
        <div>
          <FieldLabel required>{t("name")}</FieldLabel>
          <input {...register("fullName")} className={`${inputBase} ${errors.fullName ? inputErrorClass : ""}`} autoComplete="name" />
          <FieldError message={errors.fullName?.message} />
        </div>
        <div>
          <FieldLabel required>{t("phone")}</FieldLabel>
          <input {...register("phone")} placeholder="+254 …" className={`${inputBase} ${errors.phone ? inputErrorClass : ""}`} autoComplete="tel" />
          <FieldError message={errors.phone?.message} />
        </div>
      </div>
      <div>
        <FieldLabel required>{t("email")}</FieldLabel>
        <input type="email" {...register("email")} className={`${inputBase} ${errors.email ? inputErrorClass : ""}`} autoComplete="email" />
        <FieldError message={errors.email?.message} />
      </div>
      <div>
        <FieldLabel required>{t("subject")}</FieldLabel>
        <select {...register("subject")} className={`${inputBase} cursor-pointer ${errors.subject ? inputErrorClass : ""}`}>
          {SUBJECT_IDS.map((id) => (
            <option key={id} value={id}>
              {t(`subjects.${id}` as "subjects.admission")}
            </option>
          ))}
        </select>
        <FieldError message={errors.subject?.message} />
      </div>
      <div>
        <FieldLabel required>{t("message")}</FieldLabel>
        <textarea
          {...register("message")}
          rows={5}
          className={`w-full border-2 border-slate-100 bg-slate-50/50 p-4 text-sm font-medium text-[#0A2540] focus:bg-white focus:border-[#0A2540] focus:outline-none transition-all resize-none rounded-xl ${errors.message ? "border-[#E30613]" : ""}`}
        />
        <FieldError message={errors.message?.message} />
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full flex items-center justify-center gap-2 py-4 bg-[#0A2540] text-white font-black text-[10px] uppercase tracking-[0.25em] hover:bg-black transition-all disabled:opacity-50 rounded-[10px]"
      >
        {isSubmitting ? (
          <>
            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" aria-hidden />
            {t("sending")}
          </>
        ) : (
          <>
            {t("submit")}
            <ArrowRight className="w-4 h-4" aria-hidden />
          </>
        )}
      </button>
    </form>
  );
}
