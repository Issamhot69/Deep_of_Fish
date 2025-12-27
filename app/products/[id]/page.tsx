"use client";
import { useParams } from "next/navigation";
import { useI18n } from "../../components/i18n";

export default function ProduitPage() {
  const { t } = useI18n();
  const params = useParams();
  const id = params.id; // récupère l’ID depuis l’URL

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold">{t(`product${id}_title`)}</h1>
      <p className="text-gray-700 mt-4">{t(`product${id}_desc`)}</p>
    </main>
  );
}
