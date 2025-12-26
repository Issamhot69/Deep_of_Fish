// app/components/Footer.tsx

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-200 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo / Nom */}
        <div className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-gray-800">
            Deep_of_Fish
          </span>
          . Tous droits réservés.
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Accueil
          </Link>
          <Link href="/agents" className="hover:text-gray-900">
            Agents
          </Link>
          <Link href="/produits" className="hover:text-gray-900">
            Produits
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}
