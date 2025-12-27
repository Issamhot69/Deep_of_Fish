"use client";
import Link from "next/link";
import { useI18n } from "./i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Texte copyright multilingue */}
        <div className="text-sm text-gray-600">
          {t("footer")}
        </div>

        {/* Navigation multilingue */}
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            {t("nav_home")}
          </Link>
          <Link href="/agents" className="hover:text-gray-900">
            {t("nav_agents")}
          </Link>
          <Link href="/products" className="hover:text-gray-900">
            {t("nav_products")}
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            {t("nav_contact")}
          </Link>
        </nav>
      </div>
    </footer>
  );
}
