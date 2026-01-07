import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Projects', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#process' },
    { name: 'Studio', href: '#studio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' 
        : 'bg-transparent'
    }`}>
      <nav className="container-professional">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img 
              src="/LOGOYD.png" 
              alt="Company Logo" 
              className="h-9 sm:h-10 md:h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`text-sm font-light tracking-wide transition-all duration-200 relative group ${
                  isScrolled ? 'text-foreground hover:text-accent' : 'text-white hover:text-accent'
                }`}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
            <a href="#contact">
              <button className="px-6 py-2 text-sm font-light text-foreground bg-white border border-charcoal/10 hover:bg-charcoal hover:text-white transition-all duration-300">
                Get in Touch
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-colors duration-200 z-50 ${
              isScrolled ? 'text-foreground hover:bg-secondary' : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden fixed inset-0 top-16 bg-background/98 backdrop-blur-lg z-40">
            <div className="flex flex-col p-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-foreground hover:text-accent transition-colors duration-200 py-2.5 border-b border-border/50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                <button className="w-full mt-4 px-6 py-2.5 text-sm font-light text-white bg-charcoal hover:bg-accent transition-all duration-300">
                  Get Started
                </button>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
