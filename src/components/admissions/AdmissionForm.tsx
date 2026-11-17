"use client";

import { WHATSAPP_URL } from "@/lib/constants";
import { getAdmissionsFormCopy } from "@/i18n/admissions-form";
import { getLegalPageCopy } from "@/i18n/legal-pages";
import { localePath } from "@/i18n/config";
import type { Locale } from "@/i18n/config";
import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "framer-motion";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  CheckCircle,
  Globe,
  MapPin,
  School,
  Trash2,
  Upload,
} from "lucide-react";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import * as z from "zod";

// ── Data ───────────────────────────────────────────────────────────

const programGroups = [
  {
    group: "Language Courses",
    items: [
      "German Language (A1 – Beginner)",
      "German Language (A2 – Elementary)",
      "German Language (B1/B2 – Intermediate)",
      "French (DELF Preparation)",
      "Spanish Language",
      "English Proficiency",
      "Chinese Language",
      "Arabic Language",
      "Italian Language",
      "Japanese Language",
    ],
  },
  {
    group: "Hospitality & Tourism Management",
    items: [
      "Diploma in Hospitality Management",
      "Diploma in Front Office Operations & Administration",
      "Diploma in Food & Beverage Management",
      "Diploma in House Keeping & Laundry Operation",
      "Diploma in Travel and Tourism Operations",
    ],
  },
  {
    group: "Study & Career Pathways",
    items: [
      "Nursing Career Preparation (Ausbildung – Germany)",
      "Ausbildung Guidance (Study + Work)",
      "Chance Karte Guidance",
      "Master's Degree Preparation (Germany)",
    ],
  },
  {
    group: "ICT & Digital Skills",
    items: [
      "Full-Stack Web Development",
      "Cybersecurity Essentials",
      "Data Analytics & Visualization",
      "Mobile App Development",
      "Computer Packages",
    ],
  },
];

const countries = [
  "Kenya", "Uganda", "Tanzania", "Rwanda", "Ethiopia", "South Sudan",
  "Nigeria", "Ghana", "South Africa", "Zambia", "Germany", "United States",
  "United Kingdom", "Canada", "Australia", "India", "United Arab Emirates", "Other",
].sort();

// ── Schema ─────────────────────────────────────────────────────────

const createAdmissionSchema = (messages: ReturnType<typeof getAdmissionsFormCopy>) => z.object({
  fullName: z.string().min(3, messages.errors.fullName),
  email: z.string().email(messages.errors.email),
  phone: z.string().min(10, messages.errors.phone),
  country: z.string().min(1, messages.errors.country),
  branch: z.string().min(1, messages.errors.campus),
  program: z.string().min(1, messages.errors.program),
  learningMode: z.custom<"Onsite" | "Online" | "Hybrid">(
    (value) => value === "Onsite" || value === "Online" || value === "Hybrid",
    messages.errors.learningMode,
  ),
  intake: z.string().min(1, messages.errors.intake),
  eduLevel: z.string().min(1, messages.errors.qualification),
  motivation: z.string().min(20, messages.errors.motivation),
  document: z.any().optional(),
});

type AdmissionFormData = z.infer<ReturnType<typeof createAdmissionSchema>>;



// ── Shared primitives ──────────────────────────────────────────────

const inputBase =
  "w-full border-b-2 border-slate-200 bg-transparent py-3 text-sm font-semibold text-[#0A2540] placeholder:text-slate-300 focus:outline-none focus:border-[#0A2540] transition-all duration-200";

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
    <div className="flex items-center gap-1.5 mt-2" role="alert">
      <AlertCircle className="w-3.5 h-3.5 text-[#E30613] shrink-0" />
      <p className="text-[11px] font-bold text-[#E30613]">{message}</p>
    </div>
  ) : null;

// ── Step indicator ─────────────────────────────────────────────────

function StepIndicator({ current, labels }: { current: number; labels: readonly string[] }) {
  return (
    <div className="flex items-center mb-12 pb-8 border-b border-slate-100">
      {labels.map((label, i) => {
        const done   = i < current;
        const active = i === current;
        return (
          <div key={label} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`w-9 h-9 flex items-center justify-center text-xs font-black transition-all duration-400 ${
                  done
                    ? "bg-[#0A2540] text-white shadow-lg"
                    : active
                    ? "bg-[#E30613] text-white"
                    : "border-2 border-slate-200 text-slate-300"
                }`}
                style={{ borderRadius: "8px" }}
              >
                {done ? <Check className="w-4 h-4" /> : i + 1}
              </div>
              <span
                className={`text-[9px] font-black uppercase tracking-[0.15em] hidden sm:block text-center leading-tight max-w-[70px] ${
                  active ? "text-[#E30613]" : done ? "text-[#0A2540]" : "text-slate-300"
                }`}
              >
                {label}
              </span>
            </div>
            {i < labels.length - 1 && (
              <div
                className={`flex-1 h-[2px] mx-3 mb-6 transition-colors duration-500 ${
                  done ? "bg-[#0A2540]" : "bg-slate-100"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────────

export default function AdmissionForm({ locale = "en" }: { locale?: Locale }) {
  const t = getAdmissionsFormCopy(locale);
  const admissionSchema = createAdmissionSchema(t);
  const [step, setStep]                       = useState(0);
  const [isSuccess, setIsSuccess]             = useState(false);
  const [submitError, setSubmitError]         = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    trigger,
    setValue,
    control,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<AdmissionFormData>({
    resolver: zodResolver(admissionSchema),
    defaultValues: {
      country:      "Kenya",
      branch:       "Narok Campus",
      intake:       "To be confirmed with admissions",
      learningMode: "Onsite",
      eduLevel:     "KCSE",
    },
  });

  const watched = useWatch({ control });

  // Smart: auto-set branch to Virtual when Online is selected
  useEffect(() => {
    if (watched.learningMode === "Online") {
      setValue("branch", "Virtual Campus");
    } else if (watched.branch === "Virtual Campus") {
      setValue("branch", "Narok Campus");
    }
  }, [watched.learningMode, setValue, watched.branch]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      setValue("document", file);
    }
  };

  const removeFile = (e: React.MouseEvent) => {
    e.preventDefault();
    setUploadedFileName(null);
    setValue("document", undefined);
  };

  const next = async () => {
    const fieldsByStep: Array<(keyof AdmissionFormData)[]> = [
      ["fullName", "email", "phone", "country", "branch"],
      ["program", "learningMode", "intake", "eduLevel"],
    ];
    const valid = await trigger(fieldsByStep[step]);
    if (valid) setStep((s) => s + 1);
  };

  const onSubmit = async (data: AdmissionFormData) => {
    setSubmitError(null);
    try {
      const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ADMISSIONS;
      if (!endpoint) throw new Error(t.endpointMissing);

      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        if (value && key !== "document") formData.append(key, value as string);
      });
      formData.append("selectedLocale", locale);
      formData.append("pageLocale", locale);
      formData.append("sourcePage", window.location.pathname);
      if (data.document instanceof File) formData.append("document", data.document);

      const res = await fetch(endpoint, {
        method:  "POST",
        body:    formData,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error(t.submitFailed);

      setIsSuccess(true);
      reset();
      setUploadedFileName(null);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : t.genericError);
    }
  };

  // ── Success ─────────────────────────────────────────────────────
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-14 px-6"
      >
        <div
          className="w-20 h-20 bg-green-50 border-2 border-green-200 flex items-center justify-center mx-auto mb-6"
          style={{ borderRadius: "50%" }}
        >
          <CheckCircle className="w-10 h-10 text-green-600" />
        </div>
        <div className="w-8 h-1 bg-[#F2C12C] rounded-full mx-auto mb-5" />
        <h3 className="text-2xl font-black text-[#0A2540] mb-3">
          {t.received}
        </h3>
        <p className="text-slate-500 text-sm leading-relaxed max-w-sm mx-auto mb-8">
          {t.thankYou},{" "}
          <strong className="text-[#0A2540]">{watched.fullName}</strong>. {t.receivedBody}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#25D366] text-white font-black text-[10px] uppercase tracking-widest hover:brightness-110 transition-all"
            style={{ borderRadius: "10px" }}
          >
            {t.chat}
          </a>
          <button
            onClick={() => { setIsSuccess(false); setStep(0); }}
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-[#0A2540] text-[#0A2540] font-black text-[10px] uppercase tracking-widest hover:bg-[#0A2540] hover:text-white transition-all duration-200"
            style={{ borderRadius: "10px" }}
          >
            {t.newApplication}
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="w-full">
      <StepIndicator current={step} labels={t.steps} />

      {submitError && (
        <div
          role="alert"
          aria-live="assertive"
          className="mb-8 flex items-center gap-3 bg-red-50 border-l-4 border-[#E30613] px-4 py-3"
          style={{ borderRadius: "0 10px 10px 0" }}
        >
          <AlertCircle className="w-4 h-4 text-[#E30613] shrink-0" />
          <p className="text-xs font-bold text-[#E30613]">{submitError}</p>
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label={t.summary}>
        <p className="mb-8 border-l-4 border-amber-500 bg-amber-50 px-4 py-3 text-xs leading-relaxed text-slate-700" role="note">
          {getLegalPageCopy(locale, "privacy").body} {" "}
          <a href={localePath("/privacy", locale)} className="font-bold underline underline-offset-2">{getLegalPageCopy(locale, "privacy").title}</a>
        </p>
        <AnimatePresence mode="wait">

          {/* ── Step 0 ── */}
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8"
            >
              <div className="sm:col-span-2">
                <FieldLabel required>{t.fullName}</FieldLabel>
                <input
                  {...register("fullName")}
                  placeholder={t.fullNamePlaceholder}
                  className={`${inputBase} ${errors.fullName ? inputErrorClass : ""}`}
                />
                <FieldError message={errors.fullName?.message} />
              </div>

              <div>
                <FieldLabel required>{t.email}</FieldLabel>
                <input
                  type="email"
                  {...register("email")}
                  placeholder="name@example.com"
                  className={`${inputBase} ${errors.email ? inputErrorClass : ""}`}
                />
                <FieldError message={errors.email?.message} />
              </div>

              <div>
                <FieldLabel required>{t.phone}</FieldLabel>
                <input
                  {...register("phone")}
                  placeholder="+254 700 000 000"
                  className={`${inputBase} ${errors.phone ? inputErrorClass : ""}`}
                />
                <FieldError message={errors.phone?.message} />
              </div>

              <div>
                <FieldLabel required>{t.country}</FieldLabel>
                <select
                  {...register("country")}
                  className={`${inputBase} cursor-pointer ${errors.country ? inputErrorClass : ""}`}
                >
                  {countries.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <FieldLabel required>{t.campus}</FieldLabel>
                {watched.learningMode === "Online" ? (
                  <div
                    className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100"
                    style={{ borderRadius: "10px" }}
                  >
                    <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-blue-700">
                      {t.virtualCampus}
                    </span>
                  </div>
                ) : (
                  <div className="flex gap-3 pt-1">
                    {["Narok Campus", "Nairobi Campus"].map((b) => (
                      <label
                        key={b}
                        className={`flex items-center gap-2.5 flex-1 p-3.5 border-2 cursor-pointer transition-all duration-200 ${
                          watched.branch === b
                            ? "border-[#0A2540] bg-[#0A2540]/5"
                            : "border-slate-100 bg-slate-50/30 hover:border-slate-200"
                        }`}
                        style={{ borderRadius: "10px" }}
                      >
                        <input
                          type="radio"
                          value={b}
                          {...register("branch")}
                          className="accent-[#0A2540] w-4 h-4 shrink-0"
                        />
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#0A2540]">
                          {b}
                        </span>
                      </label>
                    ))}
                  </div>
                )}
                <FieldError message={errors.branch?.message} />
              </div>
            </motion.div>
          )}

          {/* ── Step 1 ── */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-9"
            >
              <div>
                <FieldLabel required>{t.program}</FieldLabel>
                <select
                  {...register("program")}
                  className={`${inputBase} cursor-pointer ${errors.program ? inputErrorClass : ""}`}
                >
                  <option value="">{t.chooseCourse}</option>
                  {programGroups.map((g) => (
                    <optgroup key={g.group} label={g.group === "Language Courses" ? t.groupLanguages : g.group === "Hospitality & Tourism Management" ? t.groupHospitality : g.group === "Study & Career Pathways" ? t.groupPathways : t.groupICT}>
                      {g.items.map((item) => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </optgroup>
                  ))}
                </select>
                <FieldError message={errors.program?.message} />
              </div>

              {/* Learning mode */}
              <div>
                <FieldLabel required>{t.learningMode}</FieldLabel>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { id: "Onsite", label: t.onsite, icon: <MapPin className="w-4 h-4" /> },
                    { id: "Online", label: t.online, icon: <Globe className="w-4 h-4" /> },
                    { id: "Hybrid", label: t.hybrid, icon: <School className="w-4 h-4" /> },
                  ].map(({ id, label, icon }) => (
                    <label
                      key={id}
                      className={`flex flex-col items-center justify-center gap-2 py-5 border-2 cursor-pointer transition-all duration-200 ${
                        watched.learningMode === id
                          ? "border-[#0A2540] bg-[#0A2540]/5"
                          : "border-slate-100 bg-slate-50/30 hover:border-slate-200"
                      }`}
                      style={{ borderRadius: "12px" }}
                    >
                      <input
                        type="radio"
                        value={id}
                        {...register("learningMode")}
                        className="hidden"
                      />
                      <span className={watched.learningMode === id ? "text-[#0A2540]" : "text-slate-400"}>
                        {icon}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-[#0A2540]">
                        {label}
                      </span>
                    </label>
                  ))}
                </div>
                <FieldError message={errors.learningMode?.message} />
              </div>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                <div>
                  <FieldLabel required>{t.intake}</FieldLabel>
                  <select
                    {...register("intake")}
                    className={`${inputBase} cursor-pointer`}
                  >
                    <option value="To be confirmed with admissions">{t.intakeTbc}</option>
                  </select>
                </div>
                <div>
                  <FieldLabel required>{t.qualification}</FieldLabel>
                  <select
                    {...register("eduLevel")}
                    className={`${inputBase} cursor-pointer`}
                  >
                    <option value="KCSE">{t.kcse}</option>
                    <option value="Certificate">{t.certificate}</option>
                    <option value="Diploma">{t.diploma}</option>
                    <option value="Degree">{t.degree}</option>
                    <option value="Postgraduate">{t.postgraduate}</option>
                  </select>
                </div>
              </div>

              {/* File upload */}
              <div>
                <FieldLabel>{t.supportingDoc}</FieldLabel>
                <label
                  className={`flex flex-col items-center justify-center border-2 border-dashed py-8 cursor-pointer transition-all duration-200 ${
                    uploadedFileName
                      ? "border-green-400 bg-green-50/40"
                      : "border-slate-200 bg-slate-50/50 hover:border-[#0A2540]"
                  }`}
                  style={{ borderRadius: "12px" }}
                >
                  <Upload className={`w-7 h-7 mb-2 ${uploadedFileName ? "text-green-500" : "text-slate-400"}`} />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    {uploadedFileName ? t.fileAttached : t.uploadFile}
                  </span>
                  <input
                    type="file"
                    className="hidden"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.jpeg"
                  />
                </label>

                {uploadedFileName && (
                  <div
                    className="mt-3 flex items-center justify-between p-3 bg-white border border-slate-100"
                    style={{ borderRadius: "8px" }}
                  >
                    <span className="text-[10px] font-mono text-slate-500 truncate max-w-[80%]">
                      {uploadedFileName}
                    </span>
                    <button
                      type="button"
                      aria-label={locale === "en" ? "Remove attached file" : locale === "de" ? "Angehängte Datei entfernen" : locale === "sw" ? "Ondoa faili lililoambatishwa" : locale === "fr" ? "Supprimer le fichier joint" : locale === "es" ? "Quitar archivo adjunto" : locale === "nl" ? "Bijgevoegd bestand verwijderen" : locale === "it" ? "Rimuovi il file allegato" : "移除已附加的文件"}
                      onClick={removeFile}
                      className="text-[#E30613] hover:bg-red-50 p-1.5 transition-colors"
                      style={{ borderRadius: "6px" }}
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {/* ── Step 2 ── */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.25 }}
              className="space-y-8"
            >
              <div>
                <FieldLabel required>{t.statement}</FieldLabel>
                <p className="text-[10px] text-slate-400 mb-2">
                  {t.statementHelp}
                </p>
                <textarea
                  {...register("motivation")}
                  rows={5}
                  placeholder={t.statementPlaceholder}
                  className={`w-full border-2 border-slate-100 bg-slate-50/50 p-4 text-sm font-medium text-[#0A2540] placeholder:text-slate-300 focus:bg-white focus:border-[#0A2540] focus:outline-none transition-all duration-200 resize-none ${
                    errors.motivation ? "border-[#E30613] focus:border-[#E30613]" : ""
                  }`}
                  style={{ borderRadius: "12px" }}
                />
                <FieldError message={errors.motivation?.message} />
              </div>

              {/* Application review card */}
              <div
                className="bg-[#0A2540] text-white p-7 md:p-8 relative overflow-hidden"
                style={{ borderRadius: "16px" }}
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#F2C12C]" style={{ borderRadius: "16px 0 0 16px" }} />
                <div className="absolute top-0 right-0 opacity-5 p-6">
                  <School className="w-28 h-28" />
                </div>

                <p className="text-[9px] font-black uppercase tracking-[0.3em] text-[#F2C12C] mb-6">
                  {t.summary}
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <p className="text-xl font-black leading-tight">
                      {watched.fullName || "—"}
                    </p>
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs">
                      <MapPin className="w-3 h-3" />
                      <span>{watched.country}</span>
                    </div>
                    <p className="text-xs text-slate-500">{watched.email}</p>
                    <p className="text-xs text-slate-500">{watched.phone}</p>
                  </div>

                  <div className="border-t sm:border-t-0 sm:border-l border-white/10 pt-4 sm:pt-0 sm:pl-6 space-y-2">
                    <div className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-[#F2C12C] shrink-0" />
                      <p className="text-[10px] font-black uppercase tracking-widest text-[#F2C12C]">
                        {t.programmeLabel}
                      </p>
                    </div>
                    <p className="text-sm font-bold">
                      {watched.program || t.notSelected}
                    </p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {watched.learningMode === "Onsite" ? t.onsite : watched.learningMode === "Online" ? t.online : t.hybrid} · {watched.branch === "Virtual Campus" ? t.virtualCampus : watched.branch} · {watched.intake === "To be confirmed with admissions" ? t.intakeTbc : watched.intake} · {watched.eduLevel}
                    </p>
                  </div>
                </div>
              </div>

              {/* Consent */}
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  className="mt-0.5 w-4 h-4 accent-[#0A2540] shrink-0"
                />
                <span className="text-xs text-slate-500 leading-relaxed">
                  {t.consent}
                </span>
              </label>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Navigation ── */}
        <div className={`flex gap-4 mt-10 pt-6 border-t border-slate-100 ${step > 0 ? "justify-between" : "justify-end"}`}>
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="flex-1 py-4 border-2 border-[#0A2540] text-[#0A2540] font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-slate-50 transition-all duration-200"
              style={{ borderRadius: "10px" }}
            >
              <ArrowLeft className="w-3.5 h-3.5" /> {t.back}
            </button>
          )}

          {step < 2 ? (
            <button
              type="button"
              onClick={next}
              className="flex-[2] py-4 bg-[#0A2540] text-white font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-black transition-all duration-200"
              style={{ borderRadius: "10px" }}
            >
              {t.continue} <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-[2] py-4 bg-[#E30613] text-white font-black text-[10px] uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-[#B8040F] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              style={{ borderRadius: "10px" }}
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  {t.processing}
                </>
              ) : (
                <>
                  {t.submit} <ArrowRight className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
