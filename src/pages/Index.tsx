import Header from '../components/Header';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import WhoWeHelp from '../components/WhoWeHelp';
import ServicesHero from '../components/ServicesHero';
import Studio from '../components/Studio';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PainPoints />
      <WhoWeHelp />
      <ServicesHero />
      <Studio />
      <Testimonials />
      <FAQ />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
