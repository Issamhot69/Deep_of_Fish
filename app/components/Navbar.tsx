// app/components/Navbar.tsx
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold text-gray-800">
          Deep_of_Fish
        </div>

        {/* Navigation */}
        <nav className="flex gap-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-gray-900">Accueil</Link>
          <Link href="/agents" className="hover:text-gray-900">Agents</Link>
          <Link href="/produits" className="hover:text-gray-900">Produits</Link>
          <Link href="/contact" className="hover:text-gray-900">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
