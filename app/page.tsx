"use client";
import { Metadata } from "next";
import { useI18n } from "./components/i18n";

export const metadata: Metadata = {
  title: "Deep_of_Fish - Accueil",
  description: "Une plateforme modulaire et multilingue, conçue pour l’internationalisation et l’harmonie."
};

export default function HomePage() {
  const { t } = useI18n();

  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="text-center py-20 bg-blue-50">
        <h1 className="text-4xl font-bold">{t("hero_title")}</h1>
        <p className="mt-4 text-lg text-gray-600">{t("hero_sub")}</p>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {t("cta_discover")}
        </button>
      </section>

      {/* Agents */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold">{t("agents_title")}</h2>
        <p className="mt-4 text-gray-600">{t("agents_sub")}</p>
      </section>

      {/* Linguistique */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold">{t("ling_title")}</h2>
        <p className="mt-4 text-gray-600">{t("ling_sub")}</p>
      </section>

      {/* Produits */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold">{t("products_title")}</h2>
        <p className="mt-4 text-gray-600">{t("products_sub")}</p>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-2xl font-bold mb-4">{t("cta_collab")}</h2>
        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
          {t("cta_contact")}
        </button>
      </section>
    </main>
  );
}
