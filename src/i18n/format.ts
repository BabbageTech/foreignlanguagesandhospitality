import { localeConfig, type Locale } from "./config";

export function formatDate(value: Date | string | number, locale: Locale, options: Intl.DateTimeFormatOptions = {}) {
  return new Intl.DateTimeFormat(localeConfig[locale].intl, {
    year: "numeric", month: "long", day: "numeric", ...options,
  }).format(value instanceof Date ? value : new Date(value));
}

export function formatDateTime(value: Date | string | number, locale: Locale, options: Intl.DateTimeFormatOptions = {}) {
  return new Intl.DateTimeFormat(localeConfig[locale].intl, {
    year: "numeric", month: "short", day: "numeric", hour: "numeric", minute: "2-digit", ...options,
  }).format(value instanceof Date ? value : new Date(value));
}

export function formatNumber(value: number, locale: Locale, options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat(localeConfig[locale].intl, options).format(value);
}

/** Currency is deliberately independent of interface locale; KES remains the default. */
export function formatCurrency(value: number, locale: Locale, currency = "KES", options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat(localeConfig[locale].intl, {
    style: "currency", currency, maximumFractionDigits: 0, ...options,
  }).format(value);
}

export function formatPercent(value: number, locale: Locale, options: Intl.NumberFormatOptions = {}) {
  return new Intl.NumberFormat(localeConfig[locale].intl, {
    style: "percent", maximumFractionDigits: 1, ...options,
  }).format(value);
}
