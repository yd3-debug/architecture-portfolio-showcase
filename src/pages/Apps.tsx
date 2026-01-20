import { HelmetProvider } from 'react-helmet-async';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import Header from '../components/Header';
import Footer from '../components/Footer';
import appsHeroBg from '@/assets/apps-hero-bg.jpg';

const Apps = () => {
  const apps = [
    {
      title: "BusyBees",
      category: "Mobile Application",
      description: "BusyBees helps you keep your kids happy without screens. When you are out of ideas and running on empty BusyBees gives you fast low effort activities based on your child's age mood and location. Whether it is a rainy day a busy work call or just a restless afternoon we are here with more than twelve thousand real parent approved ideas. Created by parents for parents BusyBees makes it easy to enjoy calm fun moments together without spending hours planning or scrolling",
      logo: "/BUSYBEELOGO.png",
      tech: ["React Native", "Firebase", "Node.js", "MongoDB"],
      features: ["Age-Based Activities", "Mood Detection", "Location-Aware", "12,000+ Ideas", "Parent-Approved", "Screen-Free Fun"],
      status: "Live on App Store",
      platform: "iOS"
    }
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEOHead 
          title="BusyBees Parenting App — Screen-Free Activities for Kids | YektaD"
          description="Discover BusyBees, the parenting app with 12,000+ age-appropriate activities to keep your kids happy without screens. Built by parents, for parents."
          canonicalPath="/apps"
        />
        <Header />
      {/* Hero Section */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${appsHeroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-light/70 to-primary-soft/60" />
        <div className="container-professional relative z-10 px-4 sm:px-6">
          <div className="text-center text-white w-full">
            <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-3 sm:mb-4 md:mb-6">
              Mobile Applications
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 max-w-3xl mx-auto">
              Discover BusyBees - the parenting app that helps keep your kids engaged without screens, 
              featuring over 12,000 activities tailored to your child's age, mood, and location.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {apps.map((app, index) => (
              <div key={index} className="card-elevated group col-span-full p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 lg:gap-8">
                  {/* Logo Section */}
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <img 
                      src={app.logo} 
                      alt={`${app.title} Logo`}
                      className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-xl sm:rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-grow">
                    <div className="text-center sm:text-left mb-4 sm:mb-6">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">{app.title}</h3>
                      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                        <span className="bg-primary/10 text-primary px-2 sm:px-3 py-0.5 sm:py-1 rounded-full">{app.category}</span>
                        <span className="flex items-center">
                          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full mr-1.5 sm:mr-2 bg-green-500"></div>
                          {app.status}
                        </span>
                        <span className="hidden sm:inline">
                          Available on {app.platform}
                        </span>
                      </div>
                    </div>

                    <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-center sm:text-left">{app.description}</p>

                    <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold mb-2">Key Features</h4>
                        <div className="grid grid-cols-2 gap-1.5 sm:gap-2">
                          {app.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-xs sm:text-sm">
                              <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-primary rounded-full mr-1.5 sm:mr-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="text-xs sm:text-sm font-semibold mb-2">Technology Stack</h4>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {app.tech.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-2 sm:px-3 py-0.5 sm:py-1 bg-primary/10 text-primary text-[10px] sm:text-xs font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-center pt-4 sm:pt-6 border-t border-border">
                      <span className="text-[10px] sm:text-xs text-muted-foreground">Parent Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 sm:mt-12 md:mt-16">
            <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 md:mb-8">
              Interested in learning more about BusyBees or discussing mobile app development?
            </p>
            <button className="px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300">
              Contact for App Development
            </button>
          </div>
        </div>
      </section>

      <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Apps;