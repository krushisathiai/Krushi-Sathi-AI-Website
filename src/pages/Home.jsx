import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Features from '../components/Features';
import AppFeatures from '../components/AppFeatures';
import HowItWorks from '../components/HowItWorks';
import Diseases from '../components/Diseases';
import AppShowcase from '../components/AppShowcase';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import SEO from '../components/SEO';

const homeSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://krushisathiai.in/#website",
      "url": "https://krushisathiai.in/",
      "name": "Krushi Sathi AI",
      "alternateName": ["Krushi App", "Agriculture App", "Shetkari Mitra", "Kheti App", "Farming App", "Agri App"],
      "description": "India's #1 AI Farming Assistant for agriculture, krushi, kheti, and sheti.",
      "publisher": {
        "@id": "https://krushisathiai.in/#organization"
      },
      "potentialAction": [{
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://krushisathiai.in/?s={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }]
    },
    {
      "@type": "FAQPage",
      "@id": "https://krushisathiai.in/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is the best Krushi app for agriculture?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Krushi Sathi AI is the best app for agriculture, providing instant crop disease detection, weather alerts, and fertilizer calculators."
          }
        },
        {
          "@type": "Question",
          "name": "How to do smart farming or kheti?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "By using Krushi Sathi, farmers can get expert advice, calculate exact NPK dosage, and protect their crops using advanced AI."
          }
        },
        {
          "@type": "Question",
          "name": "Which app is best for Indian farmers (Shetkari)?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Krushi Sathi AI is designed specifically for Indian farmers (Shetkari) with support for Hindi, Marathi, and English."
          }
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <main>
      <SEO url="/" schema={homeSchema} />
      <Hero />
      <AboutSection />
      <Features />
      <AppFeatures />
      <HowItWorks />
      <Diseases />
      <AppShowcase />
      <Testimonials />
      <CTA />
    </main>
  );
}
