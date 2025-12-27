"use client";
import { Metadata } from "next";
import { useI18n } from "../components/i18n";

export const metadata: Metadata = {
  title: "Deep_of_Fish - Histoire",
  description: "Découvrez l’histoire et la mission de Deep_of_Fish."
};

export default function HistoirePage() {
  const { t } = useI18n();

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">{t("nav_histoire")}</h1>
      <p className="text-gray-700 mb-6">{t("histoire_intro")}</p>
      <section className="space-y-4">
        <p>{t("histoire_p1")}</p>
        <p>{t("histoire_p2")}</p>
      </section>
    </main>
  );
}
