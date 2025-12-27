"use client";
import { Metadata } from "next";
import { useI18n } from "../components/i18n";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Deep_of_Fish - Produits",
  description: "Solutions modulaires pour l’internationalisation."
};

export default function ProductsPage() {
  const { t } = useI18n();

  return (
    <main className="px-8 py-16">
      <h2 className="text-3xl font-semibold">{t("products_title")}</h2>
      <p className="mt-4 text-gray-600">{t("products_sub")}</p>

      <ul className="mt-8 space-y-4">
        <li><Link href="/produits/1">{t("product1_title")}</Link></li>
        <li><Link href="/produits/2">{t("product2_title")}</Link></li>
        <li><Link href="/produits/3">{t("product3_title")}</Link></li>
      </ul>
    </main>
  );
}
