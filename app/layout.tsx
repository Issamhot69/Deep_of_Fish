import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./globals.css";
import { I18nProvider } from "./components/i18n";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="font-sans bg-white text-gray-800">
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
