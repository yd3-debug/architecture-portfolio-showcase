import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesHero from '../components/ServicesHero';
import Portfolio from '../components/Portfolio';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import Studio from '../components/Studio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesHero />
      <Portfolio />
      <Process />
      <Testimonials />
      <Studio />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
