import React from "react";

export default function LinguistiquePage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Linguistique</h1>
      <p className="text-gray-700 mb-6">
        Analyse, traduction et harmonisation multilingue pour tous vos contenus.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Analyse linguistique</h2>
          <p className="mt-2 text-gray-600">Détecte les incohérences et améliore la fluidité des textes.</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Traduction multilingue</h2>
          <p className="mt-2 text-gray-600">Traduction rapide et fidèle dans plusieurs langues.</p>
        </div>
      </section>
    </main>
  );
}
