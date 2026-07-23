import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import Diseases from '../components/Diseases';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutSection />
      <Features />
      <HowItWorks />
      <Diseases />
      <Testimonials />
      <CTA />
    </main>
  );
}
