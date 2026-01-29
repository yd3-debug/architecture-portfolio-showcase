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
          title="YektaD — From Word-of-Mouth to Enterprise Clients in 90 Days | Business Visibility Consulting"
          description="We've helped 12+ service businesses land 6-figure enterprise contracts. Stop relying on referrals—get found by the clients who need you. Book a free strategy call."
          canonicalPath="/"
          breadcrumbs={[{ name: "Home", path: "/" }]}
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
