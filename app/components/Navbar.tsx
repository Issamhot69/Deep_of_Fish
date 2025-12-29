"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "./i18n";
import FlagSelector from "./FlagSelector";

export default function Navbar() {
  const { t } = useI18n();
  const pathname = usePathname();

  // Fonction utilitaire pour appliquer le style actif
  const linkClass = (href: string) =>
    pathname === href
      ? "text-blue-800 font-bold underline"
      : "text-gray-700 hover:text-blue-600 transition";

  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-white shadow-md">
      {/* Logo / Brand */}
      <Link href="/" className="text-xl font-bold text-blue-600">
        Deep_of_Fish
      </Link>

      {/* Liens de navigation */}
      <ul className="flex space-x-6">
        <li><Link href="/" className={linkClass("/")}>{t("nav_home")}</Link></li>
        <li><Link href="/agents" className={linkClass("/agents")}>{t("nav_agents")}</Link></li>
        <li><Link href="/products" className={linkClass("/products")}>{t("nav_products")}</Link></li>
        <li><Link href="/linguistique" className={linkClass("/linguistique")}>{t("nav_linguistique")}</Link></li>
        <li><Link href="/faq" className={linkClass("/faq")}>{t("nav_faq")}</Link></li>
        <li><Link href="/histoire" className={linkClass("/histoire")}>{t("nav_histoire")}</Link></li>
        <li><Link href="/contact" className={linkClass("/contact")}>{t("nav_contact")}</Link></li>
        <li><Link href="/services" className={linkClass("/services")}>{t("nav_services")}</Link></li>
      </ul>

      {/* Sélecteur de langue */}
      <FlagSelector />
    </nav>
  );
}
