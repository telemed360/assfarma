import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Medicines from "@/components/Medicines";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import Coverage from "@/components/Coverage";
import Specialties from "@/components/Specialties";
import Plans from "@/components/Plans";
import Consultant from "@/components/Consultant";
import PharmacyBrands from "@/components/PharmacyBrands";
// import VisionHealth from "@/components/VisionHealth";
// import Testimonials from "@/components/Testimonials"; // volta quando houver depoimentos reais autorizados
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFab from "@/components/WhatsAppFab";
import { faq, planGroups, site } from "@/lib/site";

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
      name: "Planos Assfarma",
      itemListElement: planGroups.flatMap((g) =>
        g.tiers.map((t) => ({
          "@type": "Offer",
          name: `Plano ${g.name} (${t.code})`,
          price: t.price.replace(".", "").replace(",", "."),
          priceCurrency: "BRL",
          description: `${g.coverage}, com R$ ${t.credit}/mês de crédito para medicamentos.`,
          availability: "https://schema.org/InStock",
        })),
      ),
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
        <Medicines />
        <About />
        <HowItWorks />
        <Coverage />
        <Specialties />
        <Plans />
        {/* <VisionHealth /> */}
        {/* <Testimonials /> */}
        <Faq />
        <FinalCta />
        <Consultant />
        <PharmacyBrands />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  );
}
