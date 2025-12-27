"use client";
import Image from "next/image";
import { useI18n } from "./i18n.tsx";

const flags = [
  { code: "fr", label: "Français" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "rus", label: "Русский" },
  { code: "ja", label: "日本語" },
  { code: "zh", label: "中文" },
];

export default function FlagSelector() {
  const { setLocale } = useI18n();

  return (
    <div className="flex space-x-2 ml-4">
      {flags.map(flag => (
        <Image
          key={flag.code}
          src={`/images/flags/${flag.code}.png`}
          alt={flag.label}
          width={24}
          height={24}
          className="cursor-pointer hover:scale-110 transition-transform"
          onClick={() => setLocale(flag.code as any)}
        />
      ))}
    </div>
  );
}
