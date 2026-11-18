import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenAppointment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAppointment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Eyewear', path: '/eyewear' },
    { label: 'Patient Resources', path: '/patient-resources' },
    { label: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          isScrolled
            ? 'bg-ivory/90 backdrop-blur-md border-b border-stone-border/80 py-3.5 shadow-[0_2px_12px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-5 lg:py-7'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Brand Wordmark */}
          <Link
            to="/"
            className="group flex flex-col focus:outline-none focus-visible:ring-1 focus-visible:ring-forest"
            aria-label="Vision House Home"
          >
            <span className="font-serif text-xl sm:text-2xl tracking-[0.18em] uppercase text-charcoal font-medium transition-colors group-hover:text-forest">
              Vision House
            </span>
            <span className="text-[9px] tracking-[0.25em] uppercase text-olive font-light hidden sm:block">
              Modern Optometry
            </span>
          </Link>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8 text-[13px] tracking-wider uppercase font-medium">
            {navLinks.slice(0, 5).map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1 transition-colors duration-200 ${
                    active ? 'text-forest font-semibold' : 'text-charcoal/80 hover:text-forest'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-forest rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: CTA & Mobile Toggle */}
          <div className="flex items-center space-x-4">
            <Link
              to="/contact"
              className="hidden md:inline-flex text-[13px] tracking-wider uppercase font-medium text-charcoal/80 hover:text-forest px-3 py-2 transition-colors"
            >
              Contact
            </Link>

            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center justify-center px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-[13px] font-medium tracking-wider uppercase bg-forest text-ivory hover:bg-forest-dark transition-all duration-200 active:scale-[0.98] shadow-sm hover:shadow"
            >
              <span>Book an Eye Exam</span>
              <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 opacity-80" />
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-charcoal hover:text-forest focus:outline-none"
              aria-label={isMobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Navigation Panel */}
      <div
        className={`fixed inset-0 z-30 lg:hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute inset-0 bg-charcoal/30 backdrop-blur-sm"
        />

        {/* Slide-out Drawer */}
        <div
          className={`absolute top-0 right-0 bottom-0 w-full max-w-sm bg-ivory shadow-2xl p-8 pt-24 flex flex-col justify-between transition-transform duration-300 ease-out border-l border-stone-border ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="space-y-6">
            <div className="border-b border-stone-border pb-4">
              <span className="text-[11px] uppercase tracking-widest text-olive font-medium">
                Navigation
              </span>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => {
                const active = isActive(link.path);
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-2xl font-serif py-1 transition-colors flex items-center justify-between ${
                      active ? 'text-forest italic font-semibold' : 'text-charcoal hover:text-forest'
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-forest" />}
                  </Link>
                );
              })}
            </nav>
          </div>

          <div className="pt-8 border-t border-stone-border space-y-4">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenAppointment();
              }}
              className="w-full py-3.5 rounded-full text-sm font-medium tracking-wider uppercase bg-forest text-ivory hover:bg-forest-dark transition-all flex items-center justify-center space-x-2"
            >
              <span>Book an Eye Exam</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-center pt-2">
              <p className="text-xs text-olive">
                428 Atelier Boulevard, Suite 300
              </p>
              <p className="text-xs text-olive font-medium mt-0.5">
                (415) 890-4822
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
