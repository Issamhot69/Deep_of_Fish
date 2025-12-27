"use client";
import { Metadata } from "next";
import { useI18n } from "../components/i18n";

export const metadata: Metadata = {
  title: "Deep_of_Fish - Services",
  description: "Découvrez nos services pour accompagner vos projets multilingues."
};

export default function ServicesPage() {
  const { t } = useI18n();

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">{t("services_title")}</h1>
      <p className="text-gray-700 mb-6">{t("services_intro")}</p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">{t("service1_title")}</h2>
          <p className="mt-2 text-gray-600">{t("service1_desc")}</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">{t("service2_title")}</h2>
          <p className="mt-2 text-gray-600">{t("service2_desc")}</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">{t("service3_title")}</h2>
          <p className="mt-2 text-gray-600">{t("service3_desc")}</p>
        </div>
      </section>
    </main>
  );
}
