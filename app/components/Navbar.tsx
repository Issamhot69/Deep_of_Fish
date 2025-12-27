"use client";
import Link from "next/link";
import FlagSelector from "./FlagSelector";
import { useI18n } from "./i18n";

export default function Navbar() {
  const { t } = useI18n();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gray-100 shadow">
      {/* Liens de navigation */}
      <div className="flex space-x-6 text-gray-800 font-medium">
        <Link href="/">{t("nav_home")}</Link>
        <Link href="/agents">{t("nav_agents")}</Link>
        <Link href="/products">{t("nav_products")}</Link>
        <Link href="/contact">{t("nav_contact")}</Link>
      </div>

      {/* Sélecteur de langue */}
      <FlagSelector />
    </nav>
  );
}

