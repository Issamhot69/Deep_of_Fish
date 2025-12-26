"use client";

import { useState } from "react";

const dictionaries = {
  fr: {
    bienvenue: "Bienvenue sur Deep_of_Fish",
    description: "Une plateforme modulaire et multilingue, conçue pour l’internationalisation et l’harmonie.",
    agents: "Agents",
    agents_text: "Découvrez nos agents intelligents pour traduction et analyse.",
    linguistique: "Linguistique",
    linguistique_text: "Analyse, traduction et harmonisation multilingue.",
    produits: "Produits",
    produits_text: "Solutions modulaires pour l’internationalisation.",
    contact: "Contact",
    contact_text: "Prêt à collaborer ?",
  },
  en: {
    bienvenue: "Welcome to Deep_of_Fish",
    description: "A modular, multilingual platform designed for internationalization and harmony.",
    agents: "Agents",
    agents_text: "Discover our intelligent agents for translation and analysis.",
    linguistique: "Linguistics",
    linguistique_text: "Multilingual analysis, translation, and harmonization.",
    produits: "Products",
    produits_text: "Modular solutions for internationalization.",
    contact: "Contact",
    contact_text: "Ready to collaborate?",
  },
  es: {
    bienvenue: "Bienvenido a Deep_of_Fish",
    description: "Una plataforma modular y multilingüe, diseñada para internacionalización y armonía.",
    agents: "Agentes",
    agents_text: "Descubre nuestros agentes inteligentes para traducción y análisis.",
    linguistique: "Lingüística",
    linguistique_text: "Análisis, traducción y armonización multilingüe.",
    produits: "Productos",
    produits_text: "Soluciones modulares para la internacionalización.",
    contact: "Contacto",
    contact_text: "¿Listo para colaborar?",
  },
};

export default function useLang() {
  const [lang, setLang] = useState<"fr" | "en" | "es">("fr");

  const dict = dictionaries[lang];

  const changeLang = (newLang: "fr" | "en" | "es") => setLang(newLang);

  return { lang, dict, changeLang };
}
