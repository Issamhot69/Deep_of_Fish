import React from "react";

export default function ProduitsPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Nos Produits</h1>
      <p className="text-gray-700 mb-6">
        Découvrez nos solutions modulaires pour l’internationalisation et la gestion multilingue.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Produit 1</h2>
          <p className="mt-2 text-gray-600">Outil de traduction automatique et d’harmonisation.</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Produit 2</h2>
          <p className="mt-2 text-gray-600">Module de correction et suggestion stylistique.</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Produit 3</h2>
          <p className="mt-2 text-gray-600">Intégration facile avec vos contenus existants.</p>
        </div>
      </section>
    </main>
  );
}
