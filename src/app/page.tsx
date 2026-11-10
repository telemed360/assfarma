import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Coverage from "@/components/Coverage";
import Specialties from "@/components/Specialties";
import Plans from "@/components/Plans";
// import VisionHealth from "@/components/VisionHealth";
// import Testimonials from "@/components/Testimonials"; // volta quando houver depoimentos reais autorizados
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { faq, plans, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${site.url}#organizacao`,
      name: site.name,
      url: site.url,
      email: site.email,
      description: site.description,
      logo: `${site.url}/brand/logo-full.png`,
      image: `${site.url}/opengraph-image.png`,
      areaServed: { "@type": "Country", name: "Brasil" },
      medicalSpecialty: "PrimaryCare",
      availableService: {
        "@type": "MedicalTherapy",
        name: "Teleconsulta médica",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}#site`,
      url: site.url,
      name: site.name,
      inLanguage: "pt-BR",
      publisher: { "@id": `${site.url}#organizacao` },
    },
    {
      "@type": "OfferCatalog",
      name: "Planos AssFarma",
      itemListElement: plans
        .filter((p) => p.price.startsWith("R$"))
        .map((p) => ({
          "@type": "Offer",
          name: p.name,
          price: p.price.replace("R$ ", "").replace(",", "."),
          priceCurrency: "BRL",
          description: p.summary,
          availability: "https://schema.org/InStock",
        })),
    },
    {
      "@type": "FAQPage",
      mainEntity: faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <HowItWorks />
        <Coverage />
        <Specialties />
        <Plans />
        {/* <VisionHealth /> */}
        {/* <Testimonials /> */}
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
