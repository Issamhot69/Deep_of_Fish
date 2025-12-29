"use client";
import Head from "next/head";

type SEOProps = {
  title: string;
  description?: string;
};

export default function SEO({ title, description }: SEOProps) {
  return (
    <Head>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
    </Head>
  );
}
