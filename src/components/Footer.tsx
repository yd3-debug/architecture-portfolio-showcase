import { Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="container-professional">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <img 
                src="/LOGOYD.png" 
                alt="Company Logo" 
                className="h-16 w-auto mb-6"
              />
              <p className="text-white/70 mb-6 leading-relaxed">
                Transforming businesses through strategic architecture, process optimization, 
                and innovative technology solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-white/70">
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Work Automation</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Micro SaaS</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Website Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors duration-200">Business Architecture</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Legal</h4>
              <ul className="space-y-3 text-white/70">
                <li><Link to="/legal/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
                <li><Link to="/legal/terms-of-service" className="hover:text-white transition-colors duration-200">Terms of Service</Link></li>
                <li><Link to="/legal/cookie-policy" className="hover:text-white transition-colors duration-200">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>


          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-white/70 text-sm">
                © {currentYear} Business Architecture Strategic Solutions. All rights reserved.
              </div>
              <div className="text-sm text-white/70">
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