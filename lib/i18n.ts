import { en } from "@/messages/en";
import { ja } from "@/messages/ja";

export type Locale = "en" | "ja";

export const locales = ["en", "ja"] as const;
export const defaultLocale: Locale = "en";

export function getMessages(locale: Locale) {
  return locale === "ja" ? ja : en;
}

export function getCurrentLocale(pathname: string): Locale {
  return pathname.startsWith("/jp") ? "ja" : "en";
}

export function getPathWithoutLocale(pathname: string): string {
  const normalized = pathname.split("?")[0] || "/";
  if (normalized === "/jp" || normalized === "/jp/") {
    return "/";
  }
  if (normalized.startsWith("/jp/")) {
    return normalized.replace(/^\/jp/, "") || "/";
  }
  return normalized;
}

export function getLocalizedPath(pathname: string, locale: Locale): string {
  const base = getPathWithoutLocale(pathname);
  if (locale === "ja") {
    return base === "/" ? "/jp" : `/jp${base}`;
  }
  return base;
}

export function getLocalizedHref(pathname: string, targetLocale: Locale): string {
  const current = getPathWithoutLocale(pathname);
  if (targetLocale === "ja") {
    return current === "/" ? "/jp" : `/jp${current}`;
  }
  return current;
}
