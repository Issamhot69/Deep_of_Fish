import React from "react";

export default function ServicesPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Nos Services</h1>
      <p className="text-gray-700 mb-6">
        Nous offrons une gamme complète de services pour accompagner votre projet multilingue.
      </p>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Service 1</h2>
          <p className="mt-2 text-gray-600">Consulting en internationalisation et gestion multilingue.</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Service 2</h2>
          <p className="mt-2 text-gray-600">Audit et optimisation de contenus multilingues.</p>
        </div>
        <div className="border rounded-lg p-6 shadow hover:shadow-md transition">
          <h2 className="text-xl font-semibold">Service 3</h2>
          <p className="mt-2 text-gray-600">Formation et accompagnement des équipes.</p>
        </div>
      </section>
    </main>
  );
}
