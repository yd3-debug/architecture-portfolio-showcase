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
          title="YektaD — Strategic Growth for Enterprise Service Businesses | Enterprise Market Leadership"
          description="Bespoke strategies that secure high-value, 6-figure contracts for established service businesses. Clients engage their first qualified enterprise lead within 6-8 weeks."
          canonicalPath="/"
          breadcrumbs={[{ name: "Home", path: "/" }]}
        />
        <Header />
        <Hero />
        
        {/* Content that scrolls over hero on mobile */}
        <div className="scroll-over-content">
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
      </div>
    </HelmetProvider>
  );
};

export default Index;
