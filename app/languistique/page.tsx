"use client";
import { Metadata } from "next";
import { useI18n } from "../components/i18n";

export const metadata: Metadata = {
  title: "Deep_of_Fish - Linguistique",
  description: "Analyse, traduction et harmonisation multilingue."
};

export default function LinguistiquePage() {
  const { t } = use