import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/lib/site";
import "./globals.css";

const sans = localFont({
  src: [
    { path: "./fonts/PlusJakartaSans-latin.woff2", weight: "200 800", style: "normal" },
    { path: "./fonts/PlusJakartaSans-latin-ext.woff2", weight: "200 800", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
  fallback: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
});

const display = localFont({
  src: [
    { path: "./fonts/Saira-latin.woff2", weight: "100 900", style: "normal" },
    { path: "./fonts/Saira-latin-ext.woff2", weight: "100 900", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
  fallback: ["system-ui", "sans-serif"],
});

export const viewport: Viewport = {
  themeColor: "#3E8254",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Telemedicina & Farmácia`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "telemedicina",
    "consulta médica online",
    "pronto atendimento 24h",
    "plano de telemedicina",
    "médico online",
    "Assfarma",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site.url,
    siteName: site.name,
    title: `${site.name} | Telemedicina & Farmácia`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Telemedicina & Farmácia`,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "health",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${sans.variable} ${display.variable}`}>
      <body className="font-sans" suppressHydrationWarning>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100]
                     focus:rounded-full focus:bg-brand-600 focus:px-5 focus:py-3 focus:text-white"
        >
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
