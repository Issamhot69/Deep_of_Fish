import React from "react";

export default function AgentsPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      
      {/* Titre */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Agents Intelligents
        </h1>
        <p className="text-lg text-gray-700">
          Des agents spécialisés conçus pour l’analyse linguistique, la traduction
          et l’automatisation multilingue.
        </p>
      </section>

      {/* Types d'agents */}
      <section className="grid md:grid-cols-3 gap-6 mb-12">
        <div className="border rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Agent de Traduction</h2>
          <p className="text-gray-600">
            Traduction précise et contextualisée entre plusieurs langues,
            adaptée aux contenus professionnels et techniques.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Agent d’Analyse</h2>
          <p className="text-gray-600">
            Analyse sémantique, détection d’incohérences linguistiques
            et harmonisation terminologique.
          </p>
        </div>

        <div className="border rounded-lg p-6 shadow">
          <h2 className="text-xl font-semibold mb-2">Agent d’Automatisation</h2>
          <p className="text-gray-600">
            Automatisation des flux multilingues pour sites, plateformes
            et documents internationaux.
          </p>
        </div>
      </section>

      {/* Fonctionnement */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Comment fonctionnent nos agents</h2>
        <p className="text-gray-700 leading-relaxed">
          Les agents Deep_of_Fish combinent intelligence artificielle,
          règles linguistiques avancées et contrôle humain pour garantir
          des résultats fiables, cohérents et exploitables à grande échelle.
        </p>
      </section>

      {/* Cas d'usage */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Cas d’usage</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Sites web multilingues</li>
          <li>Plateformes SaaS internationales</li>
          <li>Documentation technique</li>
          <li>Contenus marketing globaux</li>
        </ul>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Besoin d’un agent sur mesure ?</h2>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Nous contacter
        </button>
      </section>

    </main>
  );
}
