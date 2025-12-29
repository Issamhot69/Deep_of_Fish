"use client";
import Link from "next/link";
import { useI18n } from "./i18n";

export default function CTASection() {
  const { t } = useI18n();

  return (
    <section className="py-16 text-center bg-blue-50">
      <h2 className="text-3xl font-bold mb-4">{t("cta_collab")}</h2>
      <Link
        href="/contact"
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        {t("cta_contact")}
      </Link>
    </section>
  );
}
