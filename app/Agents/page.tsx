"use client";
import { Metadata } from "next";
import { useI18n } from "../components/i18n";

export const metadata: Metadata = {
  title: "Deep_of_Fish - Agents",
  description: "Découvrez nos agents intelligents pour traduction et analyse."
};

export default function AgentsPage() {
  const { t } = useI18n();

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">{t("agents_title")}</h1>
        <p className="text-lg text-gray-700">{t("agents_sub")}</p>
      </section>

      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="border rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">{t("agent_translation")}</h2>
          <p className="text-gray-600">{t("agent_translation_desc")}</p>
        </div>
        <div className="border rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">{t("agent_analysis")}</h2>
          <p className="text-gray-600">{t("agent_analysis_desc")}</p>
        </div>
        <div className="border rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">{t("agent_automation")}</h2>
          <p className="text-gray-600">{t("agent_automation_desc")}</p>
        </div>
      </section>
    </main>
  );
}
