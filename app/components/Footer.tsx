"use client";
import Link from "next/link";
import { useI18n } from "./i18n";

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer className="bg-gray-100 text-gray-700 py-8 mt-16">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Deep_of_Fish. All rights reserved.</p>
        <ul className="flex space-x-4 mt-4 md:mt-0">
          <li><Link href="/">{t("nav_home")}</Link></li>
          <li><Link href="/contact">{t("nav_contact")}</Link></li>
          <li><Link href="/faq">{t("nav_faq")}</Link></li>
          <li><Link href="/services">{t("nav_services")}</Link></li>
        </ul>
      </div>
    </footer>
  );
}
