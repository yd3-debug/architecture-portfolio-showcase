import { Mail, MapPin } from 'lucide-react';
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
      <div className="py-10 sm:py-14 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-12 relative z-10">
        <div className="container-professional">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-10 sm:mb-12 md:mb-16">
            {/* Company Info */}
            <div className="col-span-2">
              <img 
                src="/LOGOYD.png" 
                alt="YektaD Logo" 
                className="h-10 sm:h-12 md:h-14 lg:h-16 w-auto mb-4 sm:mb-6 brightness-0 invert"
              />
              <p className="text-white/80 mb-6 sm:mb-8 leading-relaxed max-w-md text-sm sm:text-base">
                Transforming businesses through strategic architecture, process optimization, 
                and innovative technology solutions.
              </p>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4 md:mb-6">Services</h4>
              <ul className="space-y-2 sm:space-y-3">
                {['Business Architecture', 'Operations Management', 'Digital Infrastructure', 'Growth Strategy'].map((service) => (
                  <li key={service}>
                    <a href="#services" className="text-white/70 hover:text-accent transition-colors duration-200 flex items-center gap-2 group text-xs sm:text-sm">
                      <span className="w-0 h-0.5 bg-accent group-hover:w-4 transition-all duration-200"></span>
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal & Contact */}
            <div>
              <h4 className="text-sm sm:text-base md:text-lg font-bold mb-3 sm:mb-4 md:mb-6">Company</h4>
              <ul className="space-y-2 sm:space-y-3 mb-4 sm:mb-6 text-xs sm:text-sm">
                <li><a href="#portfolio" className="text-white/70 hover:text-accent transition-colors duration-200">Portfolio</a></li>
                <li><Link to="/legal/privacy-policy" className="text-white/70 hover:text-accent transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/legal/terms-of-service" className="text-white/70 hover:text-accent transition-colors duration-200">Terms of Service</Link></li>
                <li><Link to="/legal/cookie-policy" className="text-white/70 hover:text-accent transition-colors duration-200">Cookie Policy</Link></li>
              </ul>
              
              <div className="space-y-2 sm:space-y-3">
                <div className="flex items-start gap-2 sm:gap-3">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <a href="mailto:contact@yektad.com" className="text-white/70 hover:text-accent transition-colors text-xs sm:text-sm break-all">
                    contact@yektad.com
                  </a>
                </div>
                <div className="flex items-start gap-2 sm:gap-3">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-white/70 text-xs sm:text-sm">Serving Globally</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 pt-6 sm:pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
              <div className="text-white/60 text-xs sm:text-sm text-center md:text-left">
                © {currentYear} YektaD. All rights reserved.
              </div>
              <div className="text-xs sm:text-sm text-white/60">
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
