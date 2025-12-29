// useLang.ts
"use client";
import { useState } from "react";

const dictionaries = { fr: {}, en: {}, es: {} };
export default function useLang() {
  const [lang, setLang] = useState<"fr" | "en" | "es">("fr");
  const dict = dictionaries[lang];
  const changeLang = (newLang: "fr" | "en" | "es") => setLang(newLang);
  return { lang, dict, changeLang };
}
