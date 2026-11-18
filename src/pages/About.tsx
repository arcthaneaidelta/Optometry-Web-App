import React from 'react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { TEAM_MEMBERS } from '../data/team';
import { ArrowUpRight, CheckCircle2, Heart, Sparkles, Compass } from 'lucide-react';

interface AboutProps {
  onOpenAppointment: (service?: string) => void;
}

export const About: React.FC<AboutProps> = ({ onOpenAppointment }) => {
  const philosophyValues = [
    {
      number: '01',
      title: 'Listen First',
      description: 'We do not begin with tests or numbers. We begin with a genuine conversation about how you live, work, read, and experience your day-to-day visual world.',
      icon: Compass,
    },
    {
      number: '02',
      title: 'Care Thoughtfully',
      description: 'Healthcare does not need to feel sterile or brisk. Every procedure is explained beforehand with warmth, gentle technique, and absolute clarity.',
      icon: Heart,
    },
    {
      number: '03',
      title: 'See Every Detail',
      description: 'From micro-millimeter pupillary alignments to nuanced tear film dynamics, our diagnostic rigor ensures subtle shifts are spotted early and addressed proactively.',
      icon: Sparkles,
    },
    {
      number: '04',
      title: 'Put People Before Processes',
      description: 'We avoid assembly-line scheduling. Appointments are generously spaced so our optometrists can invest the time your eye health truly deserves.',
      icon: CheckCircle2,
    },
  ];

  return (
    <div className="bg-ivory text-charcoal pt-24 sm:pt-28">
      {/* =========================================================================
          HERO SECTION
          ========================================================================= */}
      <section className="py-16 sm:py-24 border-b border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-[11px] uppercase tracking-[0.22em] text-forest font-semibold block mb-3">
              About Vision House
            </span>
            <h1 className="text-4xl sm:text-6xl font-serif text-charcoal font-normal leading-editorial">
              Thoughtful care. <span className="italic text-forest">A clearer perspective.</span>
            </h1>
            <p className="mt-5 text-base sm:text-xl text-olive font-light leading-relaxed">
              Discover a more personal approach to modern eye care, where clinical expertise meets an unhurried, comfortable atmosphere.
            </p>
          </div>

          {/* Large Hero Editorial Photograph */}
          <div className="relative aspect-[16/9] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-stone-border shadow-md bg-stone-soft">
            <img
              src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85"
              alt="Sunlit Vision House optometry boutique interior"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between text-ivory gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-sage-light block">
                  Studio Atmosphere
                </span>
                <p className="font-serif text-base sm:text-lg italic text-ivory">
                  Designed as an oasis of calm for your eyes and mind.
                </p>
              </div>
              <span className="text-xs text-ivory/80 font-mono">
                San Francisco Design District
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR STORY
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="text-[11px] uppercase tracking-[0.22em] text-forest font-semibold block mb-3">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-serif text-charcoal font-normal leading-editorial">
                Born from the belief that <span className="italic text-forest">healthcare should feel human.</span>
              </h2>
              <div className="mt-8 p-6 bg-stone-soft rounded-xl border border-stone-border">
                <span className="text-xs uppercase tracking-widest text-forest font-medium block mb-2">
                  Our Mission
                </span>
                <p className="text-xs sm:text-sm text-charcoal/80 font-light leading-relaxed">
                  To elevate preventative eye care from an annual chore into an inspiring ritual of personal wellness and visual clarity.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 text-sm sm:text-base text-olive font-light leading-relaxed">
              <p>
                Vision House was founded out of a simple observation: conventional optometry had become uncomfortably hurried. Patients were rushed between darkened cubicles, subjected to sudden air puffs, and handed generic prescriptions with little explanation of their broader ocular health.
              </p>
              <p>
                We envisioned something fundamentally different: a practice that feels like a quiet gallery of design and wellness. Here, the spaces are naturally lit, the diagnostic instrumentation is whisper-quiet and non-invasive, and the optical curation honors independent artisans rather than mass-market conglomerates.
              </p>
              <p>
                Whether diagnosing subtle digital eye fatigue caused by demanding modern careers, or carefully adjusting a bespoke acetate frame to sit weightlessly across your nose, our focus remains unwavering—delivering care that is precise, respectful, and centered around you.
              </p>

              <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-stone-border/80">
                <div>
                  <span className="font-serif text-3xl text-forest block">45 Min</span>
                  <span className="text-xs text-olive font-normal mt-1 block">Standard Exam Time</span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-forest block">100%</span>
                  <span className="text-xs text-olive font-normal mt-1 block">Digital Non-Air-Puff</span>
                </div>
                <div>
                  <span className="font-serif text-3xl text-forest block">1 : 1</span>
                  <span className="text-xs text-olive font-normal mt-1 block">Dedicated Doctor Attention</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          OUR PHILOSOPHY (4 Values)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-stone-soft border-t border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="Our Guiding Principles"
            title="The philosophy behind"
            italicWord="everything we do."
            description="Four fundamental commitments that define our patient relationships and clinical standards."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {philosophyValues.map((val) => {
              const Icon = val.icon;
              return (
                <div
                  key={val.number}
                  className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-border shadow-sm flex flex-col justify-between hover:border-forest/40 transition-colors"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-serif text-3xl text-forest/40 font-light">
                        {val.number}
                      </span>
                      <div className="w-10 h-10 rounded-full bg-ivory text-forest flex items-center justify-center border border-stone-border">
                        <Icon className="w-5 h-5 stroke-[1.5]" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-serif text-charcoal mb-3">
                      {val.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-olive leading-relaxed font-light">
                      {val.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          MEET THE TEAM
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory border-t border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader
              eyebrow="Clinical & Optical Guidance"
              title="Meet the"
              italicWord="team."
              description="Passionate optometrists and optical curators dedicated to your ocular wellness and personal aesthetic."
              className="mb-0"
            />
            <div className="shrink-0">
              <span className="inline-block px-3 py-1 rounded bg-stone-soft text-[10px] uppercase tracking-widest text-olive border border-stone-border">
                Fictional Demonstration Profiles
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-2xl border border-stone-border overflow-hidden shadow-sm flex flex-col group hover:shadow-md transition-shadow"
              >
                <div className="relative aspect-[4/5] bg-stone-soft overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute bottom-3 left-3 right-3 bg-white/90 backdrop-blur-sm p-3 rounded-lg text-charcoal shadow-sm">
                    <span className="text-[10px] uppercase tracking-widest text-forest font-semibold block">
                      {member.credentials}
                    </span>
                    <span className="text-xs text-olive block mt-0.5">
                      {member.specialty}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="font-serif text-2xl text-charcoal mb-1">
                      {member.name}
                    </h3>
                    <span className="text-xs text-forest font-medium block mb-4">
                      {member.role}
                    </span>
                    <p className="text-xs sm:text-sm text-olive leading-relaxed font-light mb-6">
                      {member.bio}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-border">
                    <p className="text-xs italic font-serif text-charcoal/80">
                      "{member.quote}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLOSING CTA
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-stone-soft border-t border-stone-border text-center">
        <div className="max-w-3xl mx-auto px-6 sm:px-8">
          <span className="text-xs uppercase tracking-[0.2em] text-forest font-semibold block mb-3">
            Personal Attention Awaits
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal font-normal leading-editorial">
            Let's take better care of your <span className="italic text-forest">vision.</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-olive font-light leading-relaxed max-w-xl mx-auto">
            Book an appointment today and experience an optometry practice designed completely around you.
          </p>
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => onOpenAppointment('Comprehensive Eye Exam')}
              className="inline-flex items-center px-8 py-4 rounded-full text-xs uppercase tracking-widest font-medium bg-forest text-ivory hover:bg-forest-dark transition-all shadow-md active:scale-[0.98]"
            >
              <span>Book an Appointment</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
