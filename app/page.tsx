"use client";
import { useI18n } from "./components/i18n";

export default function HomePage() {
  const { t } = useI18n();

  return (
    <main className="px-8 py-16 max-w-5xl mx-auto">
      <section className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">{t("hero_title")}</h1>
        <p className="mt-4 text-gray-700">{t("hero_sub")}</p>

        <div className="mt-8 flex gap-4 justify-center">
          <a href="/produits" className="px-4 py-2 bg-blue-600 text-white rounded">
            {t("cta_discover")}
          </a>
          <a href="/contact" className="px-4 py-2 border border-blue-600 text-blue-600 rounded">
            {t("cta_contact")}
          </a>
        </div>
      </section>
    </main>
  );
}
