import React from "react";

export default function ContactPage() {
  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Contactez-nous</h1>
      <p className="text-gray-700 mb-6">
        Vous avez une question ou souhaitez collaborer avec nous ? Remplissez le formulaire ci-dessous.
      </p>

      <form className="grid gap-4">
        <input
          type="text"
          placeholder="Nom"
          className="border rounded-lg p-2"
        />
        <input
          type="email"
          placeholder="Email"
          className="border rounded-lg p-2"
        />
        <textarea
          placeholder="Message"
          className="border rounded-lg p-2"
          rows={5}
        />
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          Envoyer
        </button>
      </form>
    </main>
  );
}
