import React from "react";

export default function FaqPage() {
  return (
    <main className="p-8 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">FAQ</h1>
      <section className="space-y-4">
        <div>
          <h2 className="font-semibold">Q: Comment utiliser les agents ?</h2>
          <p className="text-gray-700">R: Chaque agent est accessible depuis la page Agents et peut être utilisé pour traduire ou analyser des contenus.</p>
        </div>
        <div>
          <h2 className="font-semibold">Q: Quels formats de fichiers sont supportés ?</h2>
          <p className="text-gray-700">R: Nous supportons tous les formats textuels classiques tels que TXT, DOCX, et HTML.</p>
        </div>
        <div>
          <h2 className="font-semibold">Q: Comment contacter l’équipe ?</h2>
          <p className="text-gray-700">R: Utilisez le formulaire de la page Contact pour nous envoyer vos messages.</p>
        </div>
      </section>
    </main>
  );
}
