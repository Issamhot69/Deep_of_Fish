"use client";
import Link from "next/link";
import { useI18n } from "../../components/i18n";

export default function ProductsPage() {
  const { t } = useI18n();

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-blue-600">{t("products_title")}</h1>
      <p className="text-gray-700 mb-8">{t("products_sub")}</p>

      <ul className="grid md:grid-cols-3 gap-6">
        <li className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <Link href="/products/1" className="font-semibold text-lg text-blue-600 hover:underline">
            {t("product1_title")}
          </Link>
          <p className="text-gray-600 mt-2">{t("product1_desc")}</p>
        </li>
        <li className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <Link href="/products/2" className="font-semibold text-lg text-blue-600 hover:underline">
            {t("product2_title")}
          </Link>
          <p className="text-gray-600 mt-2">{t("product2_desc")}</p>
        </li>
        <li className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <Link href="/products/3" className="font-semibold text-lg text-blue-600 hover:underline">
            {t("product3_title")}
          </Link>
          <p className="text-gray-600 mt-2">{t("product3_desc")}</p>
        </li>
      </ul>
    </main>
  );
}
