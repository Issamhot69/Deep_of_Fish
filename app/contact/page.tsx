"use client";
import { Metadata } from "next";
import { useI18n } from "../components/i18n";

export const metadata: Metadata = {
  title: "Deep_of_Fish - Contact",
  description: "Contactez-nous pour toute question ou collaboration."
};

export default function ContactPage() {
  const { t } = useI18n();

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">{t("nav_contact")}</h1>
      <p className="text-gray-700 mb-6">{t("cta_collab")}</p>
      <form className="grid gap-4">
        <input type="text" placeholder="Nom" className="border rounded-lg p-2" />
        <input type="email" placeholder="Email" className="border rounded-lg p-2" />
        <textarea placeholder="Message" className="border rounded-lg p-2" rows={5} />
        <button type="submit" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          {t("cta_contact")}
        </button>
      </form>
    </main>
  );
}
