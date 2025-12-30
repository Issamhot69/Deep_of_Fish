"use client";
import { useI18n } from "../components/i18n";

function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();

  return (
    <div className="flex gap-2 justify-center mb-8">
      <button
        className={`px-4 py-2 rounded ${locale === "fr" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setLocale("fr")}
      >
        FR
      </button>
      <button
        className={`px-4 py-2 rounded ${locale === "en" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setLocale("en")}
      >
        EN
      </button>
      <button
        className={`px-4 py-2 rounded ${locale === "es" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setLocale("es")}
      >
        ES
      </button>
      <button
        className={`px-4 py-2 rounded ${locale === "ru" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
        onClick={() => setLocale("ru")}
      >
        RU
      </button>
    </div>
  );
}

export default function HomePage() {
  const { t } = useI18n();

  return (
    <main className="px-8 py-16 max-w-6xl mx-auto">
      {/* Language Switcher */}
      <LanguageSwitcher />

      {/* Hero Section */}
      <section className="text-center">
        <h1 className="text-5xl font-bold text-blue-600">{t("hero_title")}</h1>
        <p className="mt-4 text-gray-700 text-lg">{t("hero_sub")}</p>

        <div className="mt-8 flex gap-4 justify-center flex-wrap">
          <a
            href="/products"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            {t("cta_discover")}
          </a>
          <a
            href="/contact"
            className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition"
          >
            {t("cta_contact")}
          </a>
        </div>
      </section>

      {/* Sections d’introduction */}
      <section className="mt-16 grid md:grid-cols-3 gap-8 text-center">
        <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">{t("agents_title")}</h2>
          <p className="text-gray-600">{t("agents_sub")}</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">{t("products_title")}</h2>
          <p className="text-gray-600">{t("products_sub")}</p>
        </div>
        <div className="p-6 border rounded-lg shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold mb-2">{t("services_title")}</h2>
          <p className="text-gray-600">{t("services_intro")}</p>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="mt-20 bg-blue-50 rounded-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-4">{t("cta_collab")}</h2>
        <a
          href="/contact"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          {t("cta_contact")}
        </a>
      </section>
    </main>
  );
}
