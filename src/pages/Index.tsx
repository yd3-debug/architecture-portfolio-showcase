import { HelmetProvider } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import PainPoints from '../components/PainPoints';
import WhoWeHelp from '../components/WhoWeHelp';
import ServicesHero from '../components/ServicesHero';
import Testimonials from '../components/Testimonials';
import CaseStudy from '../components/CaseStudy';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEOHead 
          title="YektaD — Business Architect & Strategic Partner"
          description="We help service businesses and consultancies get found by enterprise clients. From strategy to execution—websites, automation, and growth systems that work."
          canonicalPath="/"
        />
        <Header />
        <Hero />
        <TrustStrip />
        <PainPoints />
        <WhoWeHelp />
        <ServicesHero />
        <Testimonials />
        <CaseStudy />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
