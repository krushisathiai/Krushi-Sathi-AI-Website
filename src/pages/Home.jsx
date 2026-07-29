import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Features from '../components/Features';
import AppFeatures from '../components/AppFeatures';
import HowItWorks from '../components/HowItWorks';
import Diseases from '../components/Diseases';
import AppShowcase from '../components/AppShowcase';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
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
