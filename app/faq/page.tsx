"use client";
import { useI18n } from "../../components/i18n";

export default function FaqPage() {
  const { t } = useI18n();

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">{t("faq_title")}</h1>

      <section className="space-y-6">
        <div>
          <h2 className="font-semibold">{t("faq_q1")}</h2>
          <p className="text-gray-700">{t("faq_r1")}</p>
        </div>
        <div>
          <h2 className="font-semibold">{t("faq_q2")}</h2>
          <p className="text-gray-700">{t("faq_r2")}</p>
        </div>
        <div>
          <h2 className="font-semibold">{t("faq_q3")}</h2>
          <p className="text-gray-700">{t("faq_r3")}</p>
        </div>
      </section>
    </main>
  );
}
