"use client";
import { useI18n } from "../../components/i18n";

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">{t("services_title")}</h1>
      <p className="text-gray-700 mb-8">{t("services_intro")}</p>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">{t("service1_title")}</h2>
          <p className="text-gray-600">{t("service1_desc")}</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">{t("service2_title")}</h2>
          <p className="text-gray-600">{t("service2_desc")}</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">{t("service3_title")}</h2>
          <p className="text-gray-600">{t("service3_desc")}</p>
        </div>
      </section>
    </main>
  );
}

