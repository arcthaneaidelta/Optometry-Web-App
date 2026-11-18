import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Accordion } from '../components/ui/Accordion';
import { SERVICES } from '../data/services';
import { FAQS } from '../data/faqs';
import { ArrowUpRight, Check, Clock, Sparkles } from 'lucide-react';

interface ServicesProps {
  onOpenAppointment: (serviceType?: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenAppointment }) => {
  const serviceFaqs = FAQS.filter(
    (f) => f.category === 'services' || f.category === 'appointments'
  );

  return (
    <div className="bg-ivory text-charcoal pt-24 sm:pt-28">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-forest font-semibold block mb-3">
              Clinical & Optical Services
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-charcoal font-normal leading-editorial">
              Care for every <span className="italic text-forest">perspective.</span>
            </h1>
            <p className="mt-5 text-base sm:text-xl text-olive font-light leading-relaxed">
              From routine eye examinations to personalized eyewear styling and specialty contact lenses, explore care designed around your vision.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INDIVIDUAL DETAILED SERVICE SECTIONS (Alternating Layouts)
          ========================================================================= */}
      <section className="divide-y divide-stone-border">
        {SERVICES.map((service, index) => {
          const isEven = index % 2 === 1;

          return (
            <div
              key={service.id}
              id={service.id}
              className={`py-20 sm:py-28 ${
                isEven ? 'bg-stone-soft' : 'bg-ivory'
              }`}
            >
              <div className="max-w-7xl mx-auto px-6 sm:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                  {/* Visual Column */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? 'lg:order-2' : 'lg:order-1'
                    }`}
                  >
                    <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden shadow-md border border-stone-border bg-white">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1 rounded-full text-[11px] font-mono tracking-widest uppercase text-charcoal shadow-sm">
                        Service {service.number}
                      </div>
                      <div className="absolute bottom-4 right-4 bg-forest-dark/90 backdrop-blur-sm text-ivory px-3.5 py-1 rounded-full text-xs flex items-center space-x-1.5">
                        <Clock className="w-3.5 h-3.5 text-sage" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                  </div>

                  {/* Content Column */}
                  <div
                    className={`lg:col-span-7 space-y-6 ${
                      isEven ? 'lg:order-1' : 'lg:order-2'
                    }`}
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-widest text-forest font-semibold block mb-2">
                        {service.subtitle}
                      </span>
                      <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-normal">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm sm:text-base text-charcoal/80 font-light leading-relaxed">
                      {service.detailedDescription}
                    </p>

                    {/* What to Expect Checklist */}
                    <div className="pt-2">
                      <span className="text-xs uppercase tracking-wider text-charcoal font-semibold block mb-3 flex items-center">
                        <Sparkles className="w-3.5 h-3.5 mr-1.5 text-forest" />
                        What You Can Expect
                      </span>
                      <ul className="space-y-2.5 text-xs sm:text-sm text-olive font-light">
                        {service.whatToExpect.map((step, sIdx) => (
                          <li key={sIdx} className="flex items-start">
                            <Check className="w-4 h-4 text-forest mr-2.5 mt-0.5 shrink-0 stroke-[2]" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Highlights Tags */}
                    <div className="pt-2 flex flex-wrap gap-2">
                      {service.keyHighlights.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 bg-white rounded-full border border-stone-border text-xs text-charcoal/80 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Appointment CTA */}
                    <div className="pt-4 flex flex-col sm:flex-row sm:items-center gap-4">
                      <button
                        onClick={() => onOpenAppointment(service.title)}
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs uppercase tracking-wider font-medium bg-forest text-ivory hover:bg-forest-dark transition-all duration-200 active:scale-[0.98] shadow-sm"
                      >
                        <span>Reserve This Service</span>
                        <ArrowUpRight className="w-4 h-4 ml-2" />
                      </button>
                      <span className="text-xs text-olive font-light italic">
                        Ideal for: {service.idealFor}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* =========================================================================
          INTERACTIVE FAQS SECTION
          ========================================================================= */}
      <section id="faqs" className="py-24 sm:py-32 bg-ivory border-t border-stone-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="Clear Answers"
            title="Frequently Asked"
            italicWord="Questions."
            description="Find thoughtful details on scheduling, examination procedures, and what to expect during your visit."
            align="center"
          />

          <div className="mt-12">
            <Accordion items={serviceFaqs} defaultOpenIndex={0} />
          </div>

          <div className="mt-12 text-center p-6 bg-stone-soft rounded-2xl border border-stone-border">
            <h4 className="font-serif text-lg text-charcoal mb-1">
              Have a specific clinical question or inquiry?
            </h4>
            <p className="text-xs text-olive mb-4 font-light">
              Our concierge team is available to discuss your needs and tailor your exam appointment.
            </p>
            <button
              onClick={() => onOpenAppointment('General Eye Health Inquiry')}
              className="text-xs uppercase tracking-wider text-forest font-semibold hover:underline"
            >
              Ask Our Optometry Team →
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HEALTHCARE DEMONSTRATION NOTICE
          ========================================================================= */}
      <div className="bg-stone-soft py-6 border-t border-stone-border text-center px-6">
        <p className="text-[11px] text-olive max-w-2xl mx-auto leading-relaxed">
          <strong>Demonstration Practice Note:</strong> Vision House is a design showcase for client presentation. The healthcare descriptions provided are educational and do not constitute formal medical diagnosis or clinical treatment.
        </p>
      </div>
    </div>
  );
};
