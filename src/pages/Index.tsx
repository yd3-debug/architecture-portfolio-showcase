import Header from '../components/Header';
import Hero from '../components/Hero';
import PainPoints from '../components/PainPoints';
import ServicesHero from '../components/ServicesHero';
import Testimonials from '../components/Testimonials';
import Studio from '../components/Studio';
import Process from '../components/Process';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <PainPoints />
      <ServicesHero />
      <Testimonials />
      <Studio />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
