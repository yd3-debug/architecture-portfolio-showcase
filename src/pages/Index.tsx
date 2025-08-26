import Header from '../components/Header';
import Hero from '../components/Hero';
import ServicesHero from '../components/ServicesHero';
import Testimonials from '../components/Testimonials';
import AboutHero from '../components/AboutHero';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import CookieBanner from '../components/CookieBanner';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ServicesHero />
      <Testimonials />
      <AboutHero />
      <Contact />
      <Footer />
      <CookieBanner />
    </div>
  );
};

export default Index;
