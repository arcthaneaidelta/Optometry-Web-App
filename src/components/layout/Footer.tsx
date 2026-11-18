import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

interface FooterProps {
  onOpenAppointment: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAppointment }) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'terms' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="bg-forest-dark text-ivory/90 relative overflow-hidden pt-20 pb-12 border-t border-forest-light/20">
        {/* Subtle decorative background watermarks */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full border border-forest-light/10 pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full border border-forest-light/5 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          {/* Top Editorial Banner */}
          <div className="border-b border-forest-light/20 pb-16 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.2em] text-sage font-medium block mb-3">
                Experience Thoughtful Eye Care
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-ivory font-normal leading-editorial">
                Your vision. <span className="italic text-sage-light">Our priority.</span>
              </h2>
              <p className="mt-4 text-sm sm:text-base text-ivory/70 font-light leading-relaxed max-w-xl">
                We're here to help you see, feel, and experience the difference. Discover unhurried clinical care and handcrafted frames in a welcoming studio setting.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenAppointment}
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium bg-ivory text-forest-dark hover:bg-sage-light transition-all duration-200 active:scale-[0.98]"
              >
                <span>Book an Exam</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </button>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-7 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium border border-ivory/30 text-ivory hover:bg-ivory/10 transition-colors"
              >
                <span>Get in Touch</span>
              </Link>
            </div>
          </div>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Column 1: Brand & Tagline */}
            <div className="space-y-4">
              <Link to="/" className="inline-block">
                <span className="font-serif text-2xl tracking-[0.16em] uppercase text-ivory font-medium">
                  Vision House
                </span>
              </Link>
              <p className="text-sm italic text-sage-light font-serif">
                "See Life Differently."
              </p>
              <p className="text-xs text-ivory/70 leading-relaxed pt-2">
                A contemporary optometry practice blending precision vision diagnostics, personalized ocular wellness, and thoughtfully curated independent eyewear.
              </p>
              <div className="pt-2">
                <span className="inline-block px-3 py-1 text-[10px] tracking-widest uppercase bg-forest/40 text-sage-light rounded border border-sage/20">
                  Interactive Demo Practice
                </span>
              </div>
            </div>

            {/* Column 2: Explore */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-sage font-semibold">
                Explore
              </h3>
              <ul className="space-y-2.5 text-sm text-ivory/80 font-light">
                <li>
                  <Link to="/" className="hover:text-sage-light transition-colors">
                    Home Practice
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-sage-light transition-colors">
                    About Our Philosophy
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-sage-light transition-colors">
                    Clinical Services
                  </Link>
                </li>
                <li>
                  <Link to="/eyewear" className="hover:text-sage-light transition-colors">
                    Eyewear Boutique
                  </Link>
                </li>
                <li>
                  <Link to="/patient-resources" className="hover:text-sage-light transition-colors">
                    Patient Resources
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Patient Info */}
            <div className="space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-sage font-semibold">
                Patient Care
              </h3>
              <ul className="space-y-2.5 text-sm text-ivory/80 font-light">
                <li>
                  <Link to="/patient-resources" className="hover:text-sage-light transition-colors">
                    First Visit Guide
                  </Link>
                </li>
                <li>
                  <Link to="/patient-resources#checklist" className="hover:text-sage-light transition-colors">
                    Pre-Visit Checklist
                  </Link>
                </li>
                <li>
                  <Link to="/services#faqs" className="hover:text-sage-light transition-colors">
                    Frequently Asked Questions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-sage-light transition-colors">
                    Directions & Parking
                  </Link>
                </li>
                <li>
                  <button
                    onClick={onOpenAppointment}
                    className="text-sage hover:underline transition-all text-left"
                  >
                    Request Appointment
                  </button>
                </li>
              </ul>
            </div>

            {/* Column 4: Contact & Hours */}
            <div className="space-y-4 text-xs text-ivory/80 font-light leading-relaxed">
              <h3 className="text-xs uppercase tracking-widest text-sage font-semibold">
                Studio & Hours
              </h3>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                <span>428 Atelier Boulevard, Suite 300<br />Design District, CA 94103</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sage shrink-0" />
                <span>(415) 890-4822</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-sage shrink-0" />
                <span>concierge@visionhouse.demo</span>
              </div>
              <div className="flex items-start space-x-2.5 pt-1 border-t border-forest-light/20">
                <Clock className="w-4 h-4 text-sage shrink-0 mt-0.5" />
                <span>
                  Mon – Fri: 8:30 AM – 6:00 PM<br />
                  Sat: 9:00 AM – 4:00 PM<br />
                  Sun: Closed for Rest
                </span>
              </div>
            </div>
          </div>

          {/* Bottom Area: Legal, Disclaimer & Back to Top */}
          <div className="pt-8 border-t border-forest-light/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/60">
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-center sm:text-left">
              <span>© {new Date().getFullYear()} VISION HOUSE. All rights reserved.</span>
              <button
                onClick={() => setLegalModal('privacy')}
                className="hover:text-ivory transition-colors underline-offset-4 hover:underline"
              >
                Privacy Notice
              </button>
              <button
                onClick={() => setLegalModal('terms')}
                className="hover:text-ivory transition-colors underline-offset-4 hover:underline"
              >
                Terms of Service
              </button>
              <span className="text-[11px] text-sage/80 italic">
                Illustrative demonstration for client presentation
              </span>
            </div>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full border border-forest-light/40 hover:bg-forest-light/20 text-ivory/80 hover:text-ivory transition-colors"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </footer>

      {/* Simple Accessible Legal Modal */}
      {legalModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/60 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-ivory max-w-lg w-full p-8 rounded-xl border border-stone-border shadow-2xl space-y-4">
            <h3 className="text-2xl font-serif text-charcoal">
              {legalModal === 'privacy' ? 'Privacy Demonstration Notice' : 'Terms of Demonstration'}
            </h3>
            <p className="text-xs text-olive leading-relaxed">
              {legalModal === 'privacy'
                ? 'This website is an interactive demonstration built to showcase modern optometry branding, user experience, and digital design. No private medical data, personal health information (PHI), or live cookies are transmitted to third parties.'
                : 'All brand names, doctor profiles, product specifications, and patient testimonials displayed on Vision House are fictional creative mockups designed for client preview purposes only and do not constitute actual medical diagnosis or retail services.'}
            </p>
            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-5 py-2 text-xs uppercase tracking-wider bg-forest text-ivory rounded-full hover:bg-forest-dark"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
