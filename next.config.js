/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'cdn.example.com'], // ajoute les domaines d’images externes
  },
  i18n: {
    locales: ['en', 'fr'],
    defaultLocale: 'en',
  },
};

module.exports = nextConfig;
