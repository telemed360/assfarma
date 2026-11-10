/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Esconde o botão "N" do Next.js que aparece só no modo de desenvolvimento.
  devIndicators: false,
  images: {
    // Todas as imagens do projeto são locais (pasta /public).
    // Nenhum recurso é carregado de domínios externos.
    remotePatterns: [],
  },
};

export default nextConfig;
