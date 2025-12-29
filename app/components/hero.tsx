"use client";
import Link from "next/link";
import { useI18n } from "./i18n";

export default function Hero() {
  const { t } = useI18n();

  return (
    <section className="text-center py-20 bg-gray-50">
      <h1 className="text-5xl font-bold text-blue-600">{t("hero_title")}</h1>
      <p className="mt-4 text-lg text-gray-700">{t("hero_sub")}</p>

      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/products"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {t("cta_discover")}
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-100 transition"
        >
          {t("cta_contact")}
        </Link>
      </div>
    </section>
  );
}
