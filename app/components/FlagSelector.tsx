"use client";
import { useI18n } from "./i18n";

export default function FlagSelector() {
  const { lang, changeLang } = useI18n();

  const flags = [
    { code: "fr", label: "🇫🇷" },
    { code: "en", label: "🇬🇧" },
    { code: "es", label: "🇪🇸" },
    { code: "ru", label: "🇷🇺" },
    { code: "ja", label: "🇯🇵" },
    { code: "zh", label: "🇨🇳" },
  ];

  return (
    <div className="flex gap-2">
      {flags.map((f) => (
        <button
          key={f.code}
          onClick={() => changeLang(f.code as any)}
          className={`text-xl ${lang === f.code ? "opacity-100" : "opacity-50"}`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}
