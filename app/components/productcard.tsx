"use client";
import Link from "next/link";

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
};

export default function ProductCard({ title, description, href }: ProductCardProps) {
  return (
    <Link
      href={href}
      className="block border rounded-lg p-6 shadow hover:shadow-md transition"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
}
