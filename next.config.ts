import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true, // Active le mode strict React
  images: {
    domains: [], // Autorise des domaines externes pour les images (à configurer si tu utilises des images externes)
    unoptimized: false, // Si nécessaire pour éviter l'optimisation automatique (rarement utilisé)
  },
  env: {
    CUSTOM_VAR: "valeur_par_defaut", // Variables d'environnement accessibles dans le code
  },
};

export default nextConfig;
