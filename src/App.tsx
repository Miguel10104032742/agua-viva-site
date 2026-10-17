import { navItems } from './config/site';
import { useActiveSection } from './hooks/useActiveSection';
import AboutSection from './components/AboutSection';
import BenefitsSection from './components/BenefitsSection';
import ContactSection from './components/ContactSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';
import GallerySection from './components/GallerySection';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ModalitiesSection from './components/ModalitiesSection';
import OpeningHoursSection from './components/OpeningHoursSection';
import StructuredData from './components/StructuredData';
import WhatsAppButton from './components/WhatsAppButton';

// Seções observadas para marcar o item ativo no menu ("localizacao" fica dentro de "contato").
const OBSERVED = navItems.map((i) => i.id).filter((id) => id !== 'localizacao');

export default function App() {
  const activeId = useActiveSection(OBSERVED);

  return (
    <>
      <a href="#conteudo" className="skip-link">
        Pular para o conteúdo
      </a>
      <Header activeId={activeId} />
      <main id="conteudo">
        <HeroSection />
        <AboutSection />
        <ModalitiesSection />
        <BenefitsSection />
        <GallerySection />
        <OpeningHoursSection />
        <ContactSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
      <StructuredData />
    </>
  );
}
