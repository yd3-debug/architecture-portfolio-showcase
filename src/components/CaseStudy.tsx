import { Building2, Truck, Shield, ArrowRight } from 'lucide-react';
import heroImage from '@/assets/casestudy-hero.jpg';

const CaseStudy = () => {
  const deliverables = [
    {
      icon: Building2,
      title: "Commercial Roadmap",
      description: (
        <>
          Provided the commercial roadmap for <span className="text-charcoal font-medium">market entry</span> and <span className="text-charcoal font-medium">B2B channel acquisition</span> (<span className="text-charcoal font-medium">1stDibs</span>, <span className="text-charcoal font-medium">The Oblist</span>), while the client retained full autonomy over Brand Identity and Social Media execution
        </>
      )
    },
    {
      icon: Truck,
      title: "Global Logistics",
      description: (
        <>
          Built <span className="text-charcoal font-medium">end-to-end supply chain</span> with manufacturing in <span className="text-charcoal font-medium">Italy</span> and freight lanes to <span className="text-charcoal font-medium">US (New York)</span> and <span className="text-charcoal font-medium">France (Paris)</span>
        </>
      )
    },
    {
      icon: Shield,
      title: "Risk Mitigation",
      description: (
        <>
          Professionalized financial and legal framework with <span className="text-charcoal font-medium">robust contracts</span>, <span className="text-charcoal font-medium">insurance recovery</span>, and <span className="text-charcoal font-medium">automated invoicing</span>
        </>
      )
    }
  ];

  return (
    <section className="bg-soft-gray/30">
      {/* FULL WIDTH HERO IMAGE - TRUE EDGE TO EDGE */}
      <div className="w-full h-[350px] md:h-[450px] lg:h-[550px]">
        <img 
          src={heroImage} 
          alt="Artisan furniture workshop with handcrafted wooden chairs and scattered design sketches, soft morning light, hidden potential waiting to be discovered" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT BELOW */}
      <div className="py-16 sm:py-20 md:py-24">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            {/* Section Label */}
            <div className="text-center mb-8 sm:mb-12">
              <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-muted-foreground border border-border rounded-full mb-6">
                Featured Case Study
              </span>
            </div>

            {/* Main Headline */}
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 text-charcoal leading-tight max-w-4xl mx-auto">
                VandaVee: Engineering the Commercial & Operational Infrastructure for a Luxury Brand
              </h2>
            </div>

            {/* Three Column Layout: Challenge → Architecture → Result */}
            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16 md:mb-20">
              {/* The Challenge */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-border">
                <h3 className="font-serif text-lg sm:text-xl mb-4 text-charcoal">The Challenge</h3>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  VandaVee possessed a high-value aesthetic and product but lacked the operational "engine" required to scale. The business relied on <span className="text-charcoal font-medium">ad-hoc social media sales</span>, <span className="text-charcoal font-medium">undefined logistics</span>, and a founder-centric workflow that was <span className="text-charcoal font-medium">unscalable and high-risk</span>.
                </p>
              </div>

              {/* The Architecture */}
              <div className="bg-white rounded-xl p-6 sm:p-8 border border-border relative">
                {/* Arrow indicators for desktop */}
                <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-charcoal rounded-full items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-4 text-charcoal">The Architecture</h3>
                <p className="text-sm sm:text-base text-muted-foreground font-light leading-relaxed">
                  Operating as <span className="text-charcoal font-medium">Director of Operations & Growth</span>, I engineered the business backend from the ground up to support <span className="text-charcoal font-medium">global expansion</span>—focusing on <span className="text-charcoal font-medium">Commercial Visibility</span> and <span className="text-charcoal font-medium">Supply Chain Resilience</span>.
                </p>
              </div>

              {/* The Result */}
              <div className="bg-charcoal rounded-xl p-6 sm:p-8 text-white relative">
                {/* Arrow indicator for desktop */}
                <div className="hidden md:flex absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-accent rounded-full items-center justify-center">
                  <ArrowRight className="w-4 h-4 text-white" />
                </div>
                <h3 className="font-serif text-lg sm:text-xl mb-4">The Result</h3>
                <p className="text-sm sm:text-base font-light leading-relaxed opacity-90">
                  A <span className="font-medium text-white">fully operationalized luxury brand</span> with secured access to the <span className="font-medium text-white">US and EU markets</span>, functioning <span className="font-medium text-white">independent of the founder's daily oversight</span>.
                </p>
              </div>
            </div>

            {/* Key Deliverables */}
            <div className="border-t border-border pt-10 sm:pt-14 md:pt-16">
              <h4 className="text-center text-sm font-medium tracking-wider uppercase text-muted-foreground mb-8 sm:mb-10 md:mb-12">
                Key Deliverables
              </h4>
              <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
                {deliverables.map((item, index) => (
                  <div key={index} className="text-center">
                    <div className="w-12 h-12 rounded-xl border border-charcoal/10 flex items-center justify-center mb-4 mx-auto bg-white">
                      <item.icon className="w-5 h-5 text-charcoal" />
                    </div>
                    <h5 className="font-serif text-base sm:text-lg mb-2 text-charcoal">{item.title}</h5>
                    <p className="text-xs sm:text-sm text-muted-foreground font-light leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
