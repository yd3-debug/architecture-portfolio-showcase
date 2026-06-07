import { HelmetProvider } from 'react-helmet-async';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import AboutYekta from '../components/AboutYekta';
import PainPoints from '../components/PainPoints';
import ServicesHero from '../components/ServicesHero';
import CaseStudy from '../components/CaseStudy';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEOHead
          title="YektaD — Websites & Growth Systems for Small Businesses | Yekta Dastranj"
          description="Hi, I'm Yekta Dastranj. I help independent founders and small teams (1–10 people) with custom websites, sharper positioning, and simple growth systems. From hidden to found — done properly."
          canonicalPath="/"
          breadcrumbs={[{ name: 'Home', path: '/' }]}
        />
        <Header />

        {/* Hero — full viewport, Spline 3D background */}
        <Hero />

        {/* Content scrolls over hero on mobile with rounded corners */}
        <div className="scroll-over-content">
          <TrustStrip />
          <AboutYekta />
          <PainPoints />
          <ServicesHero />
          <CaseStudy />
          <Testimonials />
          <FAQ />
          <Contact />
          <Footer />
        </div>
      </div>
    </HelmetProvider>
  );
};

export default Index;
