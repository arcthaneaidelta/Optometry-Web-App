import React, { useState } from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { Accordion } from '../components/ui/Accordion';
import { FAQS } from '../data/faqs';
import { Clock, MapPin, Phone, CheckSquare, Square, ArrowUpRight } from 'lucide-react';

interface PatientResourcesProps {
  onOpenAppointment: () => void;
}

export const PatientResources: React.FC<PatientResourcesProps> = ({ onOpenAppointment }) => {
  // Interactive checklist state
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({
    'item-1': true,
    'item-2': false,
    'item-3': false,
    'item-4': false,
  });

  const toggleCheck = (id: string) => {
    setCheckedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const checklist = [
    {
      id: 'item-1',
      title: 'Current Eyewear & Sunglasses',
      desc: 'Bring all pairs of glasses you currently wear (distance, reading, computer, and prescription sunglasses) so we can analyze your baseline optics.',
    },
    {
      id: 'item-2',
      title: 'Current Contact Lens Packaging',
      desc: 'If you wear contacts, bring your lens boxes or current blister foil showing your current brand, curvature, and power.',
    },
    {
      id: 'item-3',
      title: 'Insurance Card or Member ID',
      desc: 'Have your vision or medical insurance credentials handy if you plan to submit for out-of-network benefits or direct billing.',
    },
    {
      id: 'item-4',
      title: 'Noted Symptoms or Screen Habits',
      desc: 'Jot down any specific screen fatigue, dry eye timing, light sensitivity, or questions you would like Dr. Vance or Dr. Thorne to investigate.',
    },
  ];

  return (
    <div className="bg-ivory text-charcoal pt-24 sm:pt-28">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl">
            <span className="text-[11px] uppercase tracking-[0.22em] text-forest font-semibold block mb-3">
              Patient Care & Guidance
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-charcoal font-normal leading-editorial">
              Everything you need <span className="italic text-forest">before your visit.</span>
            </h1>
            <p className="mt-5 text-base sm:text-xl text-olive font-light leading-relaxed">
              We value your time. Review our first-visit timeline, interactive pre-appointment checklist, and clinic logistics for a completely stress-free experience.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FIRST VISIT: WHAT TO EXPECT
          ========================================================================= */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="Your First Visit"
            title="A calm, unhurried"
            italicWord="experience."
            description="Here is what you will encounter from the moment you step through our studio doors."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-stone-border shadow-sm">
              <span className="text-xs uppercase tracking-widest text-forest font-mono font-medium block mb-2">
                Phase 01 • 10 Minutes
              </span>
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                Welcome & Intake
              </h3>
              <p className="text-xs sm:text-sm text-olive font-light leading-relaxed">
                Enjoy an artisan tea or espresso in our lounge while our concierge confirms your details and reviews your lifestyle visual questionnaire.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-border shadow-sm">
              <span className="text-xs uppercase tracking-widest text-forest font-mono font-medium block mb-2">
                Phase 02 • 35 Minutes
              </span>
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                Doctor Examination
              </h3>
              <p className="text-xs sm:text-sm text-olive font-light leading-relaxed">
                Meet one-on-one with your optometrist for digital wavefront refraction, ultra-widefield imaging, and an in-depth conversation regarding your ocular health.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-border shadow-sm">
              <span className="text-xs uppercase tracking-widest text-forest font-mono font-medium block mb-2">
                Phase 03 • 20 Minutes
              </span>
              <h3 className="font-serif text-2xl text-charcoal mb-3">
                Optical Consultation
              </h3>
              <p className="text-xs sm:text-sm text-olive font-light leading-relaxed">
                Receive your personalized prescription and work with our dispensing stylist to select frames tailored to your bone structure and aesthetic preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE PREPARATION CHECKLIST
          ========================================================================= */}
      <section id="checklist" className="py-24 bg-stone-soft border-t border-stone-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="Interactive Preparation"
            title="Pre-Appointment"
            italicWord="Checklist."
            description="Click to check off items as you gather them for your upcoming consultation."
            align="center"
          />

          <div className="mt-12 bg-white rounded-2xl border border-stone-border p-6 sm:p-10 shadow-sm space-y-4">
            {checklist.map((item) => {
              const isChecked = checkedItems[item.id] || false;
              return (
                <div
                  key={item.id}
                  onClick={() => toggleCheck(item.id)}
                  className={`p-4 sm:p-5 rounded-xl border cursor-pointer transition-all duration-200 flex items-start space-x-4 ${
                    isChecked
                      ? 'bg-ivory/80 border-forest/40'
                      : 'bg-white border-stone-border hover:border-forest/30'
                  }`}
                  role="checkbox"
                  aria-checked={isChecked}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === ' ' || e.key === 'Enter') {
                      e.preventDefault();
                      toggleCheck(item.id);
                    }
                  }}
                >
                  <div className="pt-0.5 text-forest shrink-0">
                    {isChecked ? (
                      <CheckSquare className="w-5 h-5 fill-forest/10" />
                    ) : (
                      <Square className="w-5 h-5 text-stone-border hover:text-forest" />
                    )}
                  </div>
                  <div className="flex-grow">
                    <h4
                      className={`text-base font-serif font-medium transition-colors ${
                        isChecked ? 'text-charcoal line-through opacity-70' : 'text-charcoal'
                      }`}
                    >
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-olive font-light leading-relaxed mt-1">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <div className="pt-4 flex items-center justify-between text-xs text-olive border-t border-stone-border/60">
              <span>
                {Object.values(checkedItems).filter(Boolean).length} of {checklist.length} items checked
              </span>
              <button
                onClick={() => setCheckedItems({ 'item-1': true, 'item-2': true, 'item-3': true, 'item-4': true })}
                className="text-forest hover:underline font-medium"
              >
                Mark All as Ready
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          APPOINTMENT & CLINIC DETAILS
          ========================================================================= */}
      <section className="py-24 bg-ivory border-t border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="Location & Logistics"
            title="Studio information &"
            italicWord="arrival."
            description="We are located in the heart of the Design District with convenient valet and garage parking."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white p-8 rounded-2xl border border-stone-border shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-sage/20 text-forest flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal">
                Clinic Hours
              </h3>
              <div className="text-xs sm:text-sm text-olive space-y-1.5 font-light">
                <p><strong className="font-medium text-charcoal">Monday – Friday:</strong> 8:30 AM – 6:00 PM</p>
                <p><strong className="font-medium text-charcoal">Saturday:</strong> 9:00 AM – 4:00 PM</p>
                <p><strong className="font-medium text-charcoal">Sunday:</strong> Closed for Rest</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-border shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-sage/20 text-forest flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal">
                Studio Address
              </h3>
              <p className="text-xs sm:text-sm text-olive leading-relaxed font-light">
                428 Atelier Boulevard, Suite 300<br />
                San Francisco Design District, CA 94103<br />
                <span className="text-[11px] text-forest font-medium mt-1 inline-block">
                  Elevator access to 3rd Floor Penthouse
                </span>
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-stone-border shadow-sm space-y-4">
              <div className="w-10 h-10 rounded-full bg-sage/20 text-forest flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-xl text-charcoal">
                Direct Inquiries
              </h3>
              <div className="text-xs sm:text-sm text-olive space-y-1 font-light">
                <p>Phone: (415) 890-4822</p>
                <p>Email: concierge@visionhouse.demo</p>
                <p className="text-[11px] text-forest font-medium pt-1">
                  Average response under 2 business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQS ACCORDION
          ========================================================================= */}
      <section className="py-24 bg-stone-soft border-t border-stone-border">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="Questions & Policies"
            title="Patient Care"
            italicWord="FAQs."
            description="Answers to common questions regarding dilation, insurance reimbursement, and appointment rescheduling."
            align="center"
          />

          <div className="mt-12">
            <Accordion items={FAQS} defaultOpenIndex={1} />
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={onOpenAppointment}
              className="inline-flex items-center px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium bg-forest text-ivory hover:bg-forest-dark transition-all shadow-sm active:scale-[0.98]"
            >
              <span>Schedule Your Consultation</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
