import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/globals.css";
import { I18nProvider } from "./components/i18n.tsx";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="font-sans">
        <I18nProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
