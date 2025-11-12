import { Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-coral rounded-full blur-3xl"></div>
      </div>

      {/* Main Footer */}
      <div className="section-padding relative z-10">
        <div className="container-professional">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Company Info */}
            <div className="sm:col-span-2">
              <img 
                src="/LOGOYD.png" 
                alt="Company Logo" 
                className="h-16 w-auto mb-6"
              />
              <p className="text-white/80 mb-8 leading-relaxed max-w-md">
                Transforming businesses through strategic architecture, process optimization, 
                and innovative technology solutions.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <a href="https://linkedin.com/company/yourcompany" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/yourcompany" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://github.com/yourcompany" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent flex items-center justify-center transition-all hover:scale-110">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6">Services</h4>
              <ul className="space-y-3">
                {['Work Automation', 'Micro SaaS', 'Website Design', 'Business Architecture'].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-white/70 hover:text-accent transition-colors duration-200 flex items-center gap-2 group">
                      <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-200"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6">Company</h4>
              <ul className="space-y-3 mb-6">
                <li><a href="#about" className="text-white/70 hover:text-accent transition-colors duration-200">About Us</a></li>
                <li><a href="#portfolio" className="text-white/70 hover:text-accent transition-colors duration-200">Portfolio</a></li>
                <li><Link to="/legal/privacy-policy" className="text-white/70 hover:text-accent transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/legal/terms-of-service" className="text-white/70 hover:text-accent transition-colors duration-200">Terms of Service</Link></li>
                <li><Link to="/legal/cookie-policy" className="text-white/70 hover:text-accent transition-colors duration-200">Cookie Policy</Link></li>
              </ul>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <a href="mailto:hello@businesssolutions.com" className="text-white/70 hover:text-accent transition-colors text-sm">
                    hello@businesssolutions.com
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-sm">Serving Globally</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="text-white/60 text-sm">
                © {currentYear} Business Architecture Strategic Solutions. All rights reserved.
              </div>
              <div className="text-sm text-white/60">
                Built with ❤️ for business growth
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
