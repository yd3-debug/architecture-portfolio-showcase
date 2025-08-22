import { ExternalLink, Apple } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="hero-full-screen hero-overlay relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${appsHeroBg})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-primary-light/70 to-primary-soft/60" />
        <div className="container-professional flex items-center h-full relative z-10">
          <div className="text-center text-white w-full">
            <h1 className="heading-hero mb-6">
              Mobile Applications
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Discover BusyBees - the parenting app that helps keep your kids engaged without screens, 
              featuring over 12,000 activities tailored to your child's age, mood, and location.
            </p>
          </div>
        </div>
      </section>

      {/* Apps Grid */}
      <section className="section-padding">
        <div className="container-professional">
          <div className="grid lg:grid-cols-2 gap-8">
            {apps.map((app, index) => (
              <div key={index} className="card-elevated group col-span-full">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  {/* Logo Section */}
                  <div className="flex-shrink-0">
                    <img 
                      src={app.logo} 
                      alt={`${app.title} Logo`}
                      className="w-32 h-32 rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  {/* Content Section */}
                  <div className="flex-grow">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-3xl font-bold mb-2">{app.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">{app.category}</span>
                          <span className="flex items-center">
                            <div className="w-2 h-2 rounded-full mr-2 bg-green-500"></div>
                            {app.status}
                          </span>
                          <span className="flex items-center">
                            <Apple className="w-4 h-4 mr-1" />
                            Available on {app.platform}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <a 
                          href="https://apps.apple.com" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-200"
                        >
                          <Apple className="w-4 h-4 mr-2" />
                          App Store
                        </a>
                      </div>
                    </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{app.description}</p>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Key Features</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {app.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold mb-2">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {app.tech.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                    <div className="flex items-center justify-center pt-6 border-t border-border">
                      <span className="text-xs text-muted-foreground">Parent Approved</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-professional mb-8">
              Interested in learning more about BusyBees or discussing mobile app development?
            </p>
            <a 
              href="https://apps.apple.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-hero mr-4"
            >
              <Apple className="w-4 h-4 mr-2" />
              Download on App Store
            </a>
            <button className="btn-professional">
              Contact for App Development
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Apps;