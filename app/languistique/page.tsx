"use client";
import { useI18n } from "../../components/i18n";

export default function LinguistiquePage() {
  const { t } = useI18n();

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">{t("ling_title")}</h1>
      <p className="text-gray-700 mb-8">{t("ling_sub")}</p>

      <section className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">{t("ling_analysis")}</h2>
          <p className="text-gray-600">{t("ling_analysis_desc")}</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">{t("ling_translation")}</h2>
          <p className="text-gray-600">{t("ling_translation_desc")}</p>
        </div>
      </section>
    </main>
  );
}
