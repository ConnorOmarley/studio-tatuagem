import Header from './components/Header.tsx';
import HeroSection from './components/HeroSection.tsx';
import PortfolioGallery from './components/PortfolioGallery.tsx';
import ServicesSection from './components/ServicesSection.tsx';
import WhyChooseUs from './components/WhyChooseUs.tsx';
import LocationSection from './components/LocationSection.tsx';
import FinalCtaSection from './components/FinalCtaSection.tsx';
import Footer from './components/Footer.tsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.tsx';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-papel text-tinta">
      <Header />

      <main className="flex-grow">
        <HeroSection />
        <PortfolioGallery />
        <ServicesSection />
        <WhyChooseUs />
        <LocationSection />
        <FinalCtaSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
