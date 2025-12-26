export default function HomePage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-blue-600">Bienvenue sur Deep_of_Fish</h1>
        <p className="text-lg text-gray-700">
          Une plateforme modulaire et multilingue, conçue pour l’internationalisation et l’harmonie.
        </p>
      </section>

      {/* Section Modules */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Agents</h2>
          <p className="mt-2 text-gray-600">
            Découvrez nos agents intelligents pour traduction et analyse.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Linguistique</h2>
          <p className="mt-2 text-gray-600">
            Analyse, traduction et harmonisation multilingue.
          </p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Produits</h2>
          <p className="mt-2 text-gray-600">
            Solutions modulaires pour l’internationalisation.
          </p>
        </div>
      </section>

      {/* Section CTA */}
      <section className="text-center">
        <h2 className="text-2xl font-bold mb-4">Prêt à collaborer ?</h2>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Contactez-nous
        </button>
      </section>

      {/* Footer */}
      <footer className="text-center mt-12 text-gray-500">
        © 2025 Deep_of_Fish. Tous droits réservés
      </footer>
    </main>
  );
}
