
import Header from '@/components/Header';
import DynamicHero from '@/components/DynamicHero';
import Services from '@/components/Services';
import Benefits from '@/components/Benefits';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <DynamicHero />
      <Services />
      <Benefits />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
