import React, { useState } from 'react';
import { AppointmentForm } from '../components/appointment/AppointmentForm';
import { MapPin, Phone, Mail, Clock, Navigation } from 'lucide-react';

export const Contact: React.FC = () => {
  const [mapZoom, setMapZoom] = useState(false);

  return (
    <div className="bg-ivory text-charcoal pt-24 sm:pt-28">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-forest font-semibold block mb-3">
              Appointments & Studio Visit
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-charcoal font-normal leading-editorial">
              Let's make your next <span className="italic text-forest">visit easy.</span>
            </h1>
            <p className="mt-5 text-base sm:text-xl text-olive font-light leading-relaxed">
              Whether you are scheduling an annual comprehensive eye exam, looking for bespoke frame styling, or seeking relief from digital screen strain, our team is ready to welcome you.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TWO-COLUMN CONTACT & APPOINTMENT FORM SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-stone-soft">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left Column: Practice Info & Styled Map */}
            <div className="lg:col-span-5 space-y-8">
              <div className="bg-white p-8 rounded-2xl border border-stone-border shadow-sm space-y-6">
                <div>
                  <span className="text-[11px] uppercase tracking-widest text-forest font-semibold block mb-1">
                    Vision House Studio
                  </span>
                  <h2 className="text-2xl font-serif text-charcoal">
                    Visit Our Practice
                  </h2>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-charcoal/80 font-light divide-y divide-stone-border/70">
                  <div className="flex items-start space-x-3 pt-2">
                    <MapPin className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-charcoal block">Location</strong>
                      <span>428 Atelier Boulevard, Suite 300<br />San Francisco Design District, CA 94103</span>
                      <span className="text-[11px] text-olive block mt-0.5">Complimentary 2-hour garage parking validated</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-3">
                    <Phone className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-charcoal block">Telephone</strong>
                      <span>(415) 890-4822</span>
                      <span className="text-[11px] text-olive block mt-0.5">Direct concierge & appointment line</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-3">
                    <Mail className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-charcoal block">Email</strong>
                      <span>concierge@visionhouse.demo</span>
                      <span className="text-[11px] text-olive block mt-0.5">For general inquiries and records transfer</span>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 pt-3">
                    <Clock className="w-5 h-5 text-forest shrink-0 mt-0.5" />
                    <div>
                      <strong className="font-medium text-charcoal block">Operating Hours</strong>
                      <div className="space-y-0.5 text-xs text-olive mt-1">
                        <p>Monday – Friday: 8:30 AM – 6:00 PM</p>
                        <p>Saturday: 9:00 AM – 4:00 PM</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Styled Interactive Demonstration Map */}
              <div className="bg-white rounded-2xl border border-stone-border shadow-sm overflow-hidden">
                <div className="p-4 bg-ivory border-b border-stone-border flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Navigation className="w-4 h-4 text-forest" />
                    <span className="text-xs uppercase tracking-wider text-charcoal font-medium">
                      Studio Neighborhood Map
                    </span>
                  </div>
                  <button
                    onClick={() => setMapZoom(!mapZoom)}
                    className="text-[11px] text-forest hover:underline font-medium"
                  >
                    {mapZoom ? 'Reset Zoom' : 'Interactive Zoom'}
                  </button>
                </div>

                <div
                  className={`relative aspect-[16/10] bg-[#F4F2EB] flex items-center justify-center overflow-hidden transition-all duration-300 ${
                    mapZoom ? 'scale-105' : 'scale-100'
                  }`}
                >
                  {/* Stylized Architectural Map SVG with Ivory/Forest Palette */}
                  <svg
                    viewBox="0 0 500 320"
                    className="w-full h-full opacity-90"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Background Blocks */}
                    <rect width="500" height="320" fill="#EFECE3" />
                    {/* City Grid Roads */}
                    <path
                      d="M 0 80 Q 250 90 500 70 M 0 170 Q 250 160 500 180 M 0 250 L 500 240 M 120 0 L 140 320 M 260 0 L 250 320 M 390 0 L 400 320"
                      stroke="#DDD9CC"
                      strokeWidth="18"
                      fill="none"
                    />
                    <path
                      d="M 0 80 Q 250 90 500 70 M 0 170 Q 250 160 500 180 M 0 250 L 500 240 M 120 0 L 140 320 M 260 0 L 250 320 M 390 0 L 400 320"
                      stroke="#FFFFFF"
                      strokeWidth="12"
                      fill="none"
                    />
                    {/* Atelier Boulevard Accent Highway */}
                    <path
                      d="M 50 0 C 180 120 320 180 450 320"
                      stroke="#C8D4C5"
                      strokeWidth="20"
                      fill="none"
                    />
                    <path
                      d="M 50 0 C 180 120 320 180 450 320"
                      stroke="#A9B6A5"
                      strokeWidth="10"
                      fill="none"
                    />

                    {/* Urban blocks */}
                    <rect x="145" y="95" width="105" height="60" rx="4" fill="#E6E2D8" />
                    <rect x="270" y="95" width="110" height="60" rx="4" fill="#E6E2D8" />
                    <rect x="145" y="185" width="105" height="50" rx="4" fill="#E6E2D8" />
                    <rect x="270" y="185" width="110" height="50" rx="4" fill="#E6E2D8" />

                    {/* Park Greenery */}
                    <circle cx="80" cy="130" r="35" fill="#D3DDCF" opacity="0.6" />
                    <text x="55" y="135" fill="#52665B" fontSize="9" fontFamily="sans-serif">
                      Atelier Park
                    </text>

                    {/* Street Labels */}
                    <text x="15" y="70" fill="#74786F" fontSize="8" fontFamily="sans-serif">
                      Market Blvd
                    </text>
                    <text x="280" y="85" fill="#52665B" fontSize="9" fontWeight="600" fontFamily="sans-serif">
                      Atelier Boulevard
                    </text>
                    <text x="15" y="265" fill="#74786F" fontSize="8" fontFamily="sans-serif">
                      Design Walk
                    </text>

                    {/* Pin for Vision House */}
                    <g transform="translate(250, 150)">
                      <circle cx="0" cy="0" r="14" fill="#52665B" opacity="0.2">
                        <animate attributeName="r" values="10;22;10" dur="2.5s" repeatCount="indefinite" />
                        <animate attributeName="opacity" values="0.4;0.05;0.4" dur="2.5s" repeatCount="indefinite" />
                      </circle>
                      <circle cx="0" cy="0" r="7" fill="#52665B" stroke="#FFFFFF" strokeWidth="2" />
                    </g>
                  </svg>

                  {/* Marker Floating Badge */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-12 bg-forest-dark text-ivory px-3 py-1.5 rounded-lg shadow-lg text-[11px] font-medium flex items-center space-x-1.5 whitespace-nowrap border border-forest-light/40">
                    <span className="w-2 h-2 rounded-full bg-sage" />
                    <span>Vision House • Suite 300</span>
                  </div>
                </div>

                <div className="p-3.5 bg-ivory text-center border-t border-stone-border">
                  <span className="text-[11px] text-olive font-light">
                    Public transit: 3 blocks from Design District Light Rail & MUNI
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Appointment Request Form */}
            <div className="lg:col-span-7">
              <AppointmentForm initialType="Comprehensive Eye Exam" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
