import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight, Eye, Sparkles, ShieldCheck, HeartHandshake, ChevronRight } from 'lucide-react';
import { SectionHeader } from '../components/ui/SectionHeader';
import { ProductModal } from '../components/ui/ProductModal';
import { EYEWEAR_COLLECTION } from '../data/eyewear';
import type { EyewearProduct } from '../data/eyewear';
import { SERVICES } from '../data/services';
import { TESTIMONIALS } from '../data/testimonials';

interface HomeProps {
  onOpenAppointment: (initialType?: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onOpenAppointment }) => {
  const [selectedProduct, setSelectedProduct] = useState<EyewearProduct | null>(null);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // 4 Featured Eyewear items for the homepage showcase
  const featuredEyewear = EYEWEAR_COLLECTION.filter((p) => p.featuredHome);

  // 4 Featured Services
  const featuredServices = SERVICES.slice(0, 4);

  return (
    <div className="bg-ivory text-charcoal">
      {/* =========================================================================
          7.1 CINEMATIC HERO SECTION
          ========================================================================= */}
      <section className="relative min-h-[90vh] lg:min-h-[94vh] flex items-center justify-center overflow-hidden pt-24 pb-16">
        {/* Background Visual Layer: Atmospheric imagery with soft cinematic warmth */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85"
            alt="Warm architectural interior of Vision House optical studio"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Subtle Warm Editorial Overlays for perfect legibility without harsh darkening */}
          <div className="absolute inset-0 bg-gradient-to-t from-ivory via-ivory/60 to-ivory/30" />
          <div className="absolute inset-0 bg-forest-dark/20 mix-blend-multiply" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-8 text-center flex flex-col items-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-stone-border/80 shadow-sm mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-forest" />
            <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.22em] text-charcoal font-medium">
              Personalized Eye Care & Modern Optometry
            </span>
          </div>

          {/* Editorial Main Heading with Italic Phrase */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-charcoal font-normal tracking-tight leading-[1.1] max-w-4xl">
            Your vision deserves a little <span className="italic text-forest">more.</span>
          </h1>

          {/* Supporting Copy */}
          <p className="mt-6 text-base sm:text-lg md:text-xl text-charcoal/80 font-light max-w-2xl leading-relaxed">
            Thoughtful eye care, advanced vision solutions, and eyewear chosen around you. Experience unhurried clinical attention in a sunlit boutique studio.
          </p>

          {/* Action CTAs */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              onClick={() => onOpenAppointment('Comprehensive Eye Exam')}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs sm:text-[13px] font-medium tracking-wider uppercase bg-forest text-ivory hover:bg-forest-dark transition-all duration-200 active:scale-[0.98] shadow-md hover:shadow-lg group"
            >
              <span>Book an Eye Exam</span>
              <ArrowUpRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-full text-xs sm:text-[13px] font-medium tracking-wider uppercase bg-white/80 backdrop-blur text-charcoal hover:bg-white border border-stone-border/80 transition-all duration-200"
            >
              <span>Explore Our Practice</span>
            </Link>
          </div>

          {/* Practice Highlights Pills */}
          <div className="mt-14 pt-8 border-t border-stone-border/50 grid grid-cols-2 md:grid-cols-4 gap-6 text-left max-w-3xl w-full">
            <div>
              <span className="text-xs uppercase tracking-widest text-forest font-semibold block">01 / Unhurried</span>
              <span className="text-xs text-olive mt-0.5 block">45-minute comprehensive exams</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-forest font-semibold block">02 / Non-Invasive</span>
              <span className="text-xs text-olive mt-0.5 block">Gentle ultra-widefield imaging</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-forest font-semibold block">03 / Independent</span>
              <span className="text-xs text-olive mt-0.5 block">Artisanal handcrafted frames</span>
            </div>
            <div>
              <span className="text-xs uppercase tracking-widest text-forest font-semibold block">04 / Transparent</span>
              <span className="text-xs text-olive mt-0.5 block">Jargon-free clinical insights</span>
            </div>
          </div>

          {/* Bottom Scroll Indicator */}
          <div className="mt-12 flex flex-col items-center">
            <span className="text-[10px] tracking-[0.25em] uppercase text-olive/80 font-medium mb-2">
              Scroll to Discover
            </span>
            <div className="w-4 h-7 rounded-full border border-forest/30 flex items-start justify-center p-1">
              <div className="w-1 h-2 rounded-full bg-forest animate-pulse" />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7.2 BRAND INTRODUCTION
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory border-t border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Column: Editorial Narrative */}
            <div className="lg:col-span-6 space-y-6">
              <span className="text-[11px] uppercase tracking-[0.22em] text-forest font-semibold block">
                The Vision House Experience
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-charcoal font-normal leading-editorial">
                More than an eye exam. <span className="italic text-forest">A better way to see.</span>
              </h2>
              <p className="text-base sm:text-lg text-charcoal/80 font-light leading-relaxed">
                Your eyes deserve thoughtful attention. At Vision House, we bring together personalized care, modern diagnostic technology, and a welcoming atmosphere to help you feel completely confident about your vision.
              </p>
              <p className="text-sm text-olive leading-relaxed font-light">
                We believe healthcare should feel human. We discard the clinical sterility and rushed conveyor-belt schedules of conventional practices in favor of an environment where conversations are unhurried, questions are invited, and every frame is chosen to honor your individuality.
              </p>
              <div className="pt-4">
                <Link
                  to="/about"
                  className="inline-flex items-center text-xs uppercase tracking-wider font-medium text-forest hover:text-forest-dark border-b border-forest/40 pb-1 group"
                >
                  <span>Get to Know Us</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Column: Authentic Editorial Imagery */}
            <div className="lg:col-span-6 relative">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-stone-border bg-stone-soft">
                <img
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80"
                  alt="Optometrist in consultation with patient in modern studio"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-[10px] uppercase tracking-widest text-sage-light block">
                    Patient-Centered Care
                  </span>
                  <p className="text-sm font-serif italic mt-1 text-ivory/90">
                    "Every patient arrives with a unique visual story. Our duty is to listen first."
                  </p>
                </div>
              </div>

              {/* Decorative Offset Badge */}
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-5 rounded-xl border border-stone-border shadow-xl max-w-xs">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-sage/20 text-forest flex items-center justify-center shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-serif text-charcoal font-medium block">
                      Dedicated One-on-One
                    </span>
                    <span className="text-[11px] text-olive font-light">
                      Never double-booked. Your time is solely yours.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7.3 OUR APPROACH (3 Pillars)
          ========================================================================= */}
      <section className="py-24 bg-stone-soft border-t border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="Our Approach"
            title="Care that sees the whole"
            italicWord="picture."
            description="We combine three fundamental pillars to deliver an eye care experience that feels refined, supportive, and remarkably clear."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 01 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-border shadow-sm flex flex-col justify-between hover:border-forest/40 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl text-forest/40 font-light group-hover:text-forest transition-colors">
                    01
                  </span>
                  <div className="w-9 h-9 rounded-full bg-ivory text-forest flex items-center justify-center border border-stone-border">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-3">
                  Personalized Attention
                </h3>
                <p className="text-sm text-olive leading-relaxed font-light">
                  Every patient is different. We take the time to understand your vision, daily screen habits, hobbies, and personal lifestyle before making a single clinical recommendation.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-border/60 text-xs text-forest font-medium">
                Comprehensive 45-min appointments
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-border shadow-sm flex flex-col justify-between hover:border-forest/40 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl text-forest/40 font-light group-hover:text-forest transition-colors">
                    02
                  </span>
                  <div className="w-9 h-9 rounded-full bg-ivory text-forest flex items-center justify-center border border-stone-border">
                    <Sparkles className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-3">
                  Modern Technology
                </h3>
                <p className="text-sm text-olive leading-relaxed font-light">
                  Thoughtful eye care supported by contemporary diagnostic tools. From digital wavefront refraction to gentle retinal imaging, precision meets supreme comfort.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-border/60 text-xs text-forest font-medium">
                No uncomfortable air-puffs
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-stone-border shadow-sm flex flex-col justify-between hover:border-forest/40 transition-all duration-300 group">
              <div>
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-3xl text-forest/40 font-light group-hover:text-forest transition-colors">
                    03
                  </span>
                  <div className="w-9 h-9 rounded-full bg-ivory text-forest flex items-center justify-center border border-stone-border">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-charcoal mb-3">
                  Everyday Confidence
                </h3>
                <p className="text-sm text-olive leading-relaxed font-light">
                  From clearer vision to finding frames that genuinely feel like you, we curate independent eyewear lines that complement your face and elevate your personal expression.
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-stone-border/60 text-xs text-forest font-medium">
                Lifetime frame styling & fit care
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7.4 FEATURED SERVICES
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory border-t border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader
              eyebrow="Clinical Excellence"
              title="Your eyes, in good"
              italicWord="hands."
              description="Explore dedicated services designed to protect your ocular health and bring effortless visual comfort into every part of your day."
              className="mb-0"
            />
            <Link
              to="/services"
              className="inline-flex items-center text-xs uppercase tracking-widest font-medium text-forest hover:text-forest-dark border-b border-forest/40 pb-1 shrink-0"
            >
              <span>Explore All Services</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>

          {/* 4 Distinct Editorial Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {featuredServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl border border-stone-border overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-soft">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] tracking-widest uppercase font-mono text-charcoal">
                    {service.number} / {service.duration}
                  </div>
                </div>

                <div className="p-6 sm:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-2xl font-serif text-charcoal group-hover:text-forest transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs text-forest/90 font-medium mb-3">
                      {service.subtitle}
                    </p>
                    <p className="text-xs sm:text-sm text-olive font-light leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-border flex items-center justify-between">
                    <button
                      onClick={() => onOpenAppointment(service.title)}
                      className="text-xs uppercase tracking-wider text-charcoal font-medium hover:text-forest flex items-center group/btn"
                    >
                      <span>Request Booking</span>
                      <ChevronRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover/btn:translate-x-1" />
                    </button>
                    <Link
                      to={`/services#${service.id}`}
                      className="text-xs text-olive hover:text-forest underline underline-offset-4"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7.5 EYEWEAR SHOWCASE
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-stone-soft border-t border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeader
              eyebrow="The Optical Boutique"
              title="Find your perfect"
              italicWord="perspective."
              description="A curated preview of our handcrafted eyewear collection, sculpted in bio-acetate and surgical titanium."
              className="mb-0"
            />
            <Link
              to="/eyewear"
              className="inline-flex items-center px-6 py-3 rounded-full text-xs uppercase tracking-widest font-medium bg-white border border-stone-border text-charcoal hover:bg-forest hover:text-ivory hover:border-forest transition-all shrink-0"
            >
              <span>Explore Entire Eyewear Collection</span>
              <ArrowRight className="w-3.5 h-3.5 ml-2" />
            </Link>
          </div>

          {/* 4 Fictional Showcase Products */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredEyewear.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-stone-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group"
              >
                {/* Product Thumbnail */}
                <div className="relative aspect-[4/3] bg-ivory p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={item.colors[0].image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                  />
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-white/90 text-[10px] uppercase tracking-wider text-charcoal font-medium">
                    {item.category}
                  </span>
                </div>

                {/* Details */}
                <div className="p-5 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-baseline justify-between mb-1">
                      <h3 className="font-serif text-xl text-charcoal group-hover:text-forest transition-colors">
                        {item.name}
                      </h3>
                      <span className="text-sm font-serif font-medium text-charcoal">
                        ${item.price}
                      </span>
                    </div>
                    <p className="text-xs text-olive line-clamp-1 mb-3">
                      {item.tagline}
                    </p>

                    {/* Color Swatch Dots Preview */}
                    <div className="flex items-center space-x-1.5 mb-4">
                      {item.colors.map((c) => (
                        <span
                          key={c.name}
                          title={c.name}
                          className="w-3 h-3 rounded-full border border-black/10 inline-block"
                          style={{ backgroundColor: c.hex }}
                        />
                      ))}
                      <span className="text-[10px] text-olive ml-1">
                        {item.colors.length} shades
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProduct(item)}
                    className="w-full py-2.5 rounded-full text-xs uppercase tracking-wider font-medium border border-stone-border text-charcoal hover:bg-forest hover:text-ivory hover:border-forest transition-all"
                  >
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          7.6 WHY CHOOSE US (Dark Section)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-forest-dark text-ivory relative overflow-hidden border-t border-forest-light/20">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-8">
              <SectionHeader
                eyebrow="The Vision House Standard"
                title="Because your vision is"
                italicWord="personal."
                description="Great eye care begins with listening. We believe every appointment should feel thoughtful, comfortable, and centered around you."
                dark={true}
                className="mb-6"
              />

              <div className="space-y-6">
                <div className="border-l-2 border-sage/40 pl-6 py-1">
                  <h3 className="text-xl font-serif text-ivory mb-1">
                    Time That Matters
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light">
                    We reserve generous forty-five minute examination blocks so our doctors can thoroughly evaluate your ocular health and answer every question without haste.
                  </p>
                </div>

                <div className="border-l-2 border-sage/40 pl-6 py-1">
                  <h3 className="text-xl font-serif text-ivory mb-1">
                    Care Without Compromise
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light">
                    Modern diagnostic instrumentation paired with gentle clinical empathy ensures you receive clear, actionable guidance regarding your preventative health.
                  </p>
                </div>

                <div className="border-l-2 border-sage/40 pl-6 py-1">
                  <h3 className="text-xl font-serif text-ivory mb-1">
                    Confidence in Every Detail
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/70 leading-relaxed font-light">
                    From digital facial pupillometry down to millimeter-exact lens beveling, our optical boutique pairs clinical precision with refined aesthetic sensibility.
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <button
                  onClick={() => onOpenAppointment('Comprehensive Eye Exam')}
                  className="px-8 py-3.5 rounded-full text-xs uppercase tracking-widest font-medium bg-ivory text-forest-dark hover:bg-sage-light transition-all shadow-md active:scale-[0.98]"
                >
                  Schedule Your Visit
                </button>
              </div>
            </div>

            {/* Right Supporting Photo */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border border-forest-light/20 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern diagnostic consultation at Vision House"
                  className="w-full h-full object-cover aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-ivory">
                  <span className="text-[10px] uppercase tracking-widest text-sage block">
                    Our Clinic Promise
                  </span>
                  <p className="font-serif text-sm italic mt-1 text-ivory/90">
                    "Precision testing conducted with gentleness and clarity."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7.7 PATIENT EXPERIENCE (Timeline)
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-ivory border-t border-stone-border">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="The Patient Journey"
            title="Your visit, made"
            italicWord="comfortable."
            description="From the moment you reserve your appointment to walking out with crystal clarity, here is what your visit looks like."
            align="center"
          />

          {/* 3 Step Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mt-16">
            {/* Desktop Connector Line */}
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-[1px] bg-stone-border -z-0" />

            {/* Step 01 */}
            <div className="relative z-10 bg-white p-8 rounded-2xl border border-stone-border text-center shadow-sm flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-ivory text-forest border-2 border-stone-border flex items-center justify-center font-serif text-xl font-medium mb-6 shadow-sm">
                01
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2">
                Make an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-olive leading-relaxed font-light">
                Choose a convenient time online or by phone. We provide a simple digital intake to respect your schedule.
              </p>
            </div>

            {/* Step 02 */}
            <div className="relative z-10 bg-white p-8 rounded-2xl border border-stone-border text-center shadow-sm flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-ivory text-forest border-2 border-stone-border flex items-center justify-center font-serif text-xl font-medium mb-6 shadow-sm">
                02
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2">
                Get to Know Your Vision
              </h3>
              <p className="text-xs sm:text-sm text-olive leading-relaxed font-light">
                Meet our optometrists for a thorough assessment of your eye health, screen demands, and prescription needs.
              </p>
            </div>

            {/* Step 03 */}
            <div className="relative z-10 bg-white p-8 rounded-2xl border border-stone-border text-center shadow-sm flex flex-col items-center">
              <div className="w-14 h-14 rounded-full bg-ivory text-forest border-2 border-stone-border flex items-center justify-center font-serif text-xl font-medium mb-6 shadow-sm">
                03
              </div>
              <h3 className="text-xl font-serif text-charcoal mb-2">
                Leave With Clarity
              </h3>
              <p className="text-xs sm:text-sm text-olive leading-relaxed font-light">
                Receive personalized guidance, explore handcrafted frames, and understand your next steps with confidence.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/patient-resources"
              className="inline-flex items-center text-xs uppercase tracking-wider font-medium text-forest hover:text-forest-dark border-b border-forest/40 pb-1"
            >
              <span>View First Visit Preparation Guide</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7.8 TESTIMONIALS
          ========================================================================= */}
      <section className="py-24 bg-stone-soft border-t border-stone-border">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <SectionHeader
            eyebrow="Demonstration Feedback"
            title="A little feedback goes a long"
            italicWord="way."
            description="Illustrative sample reviews showing how patient satisfaction and optical care are celebrated."
            align="center"
          />

          {/* Editorial Quotes Carousel / Tabs */}
          <div className="bg-white rounded-3xl border border-stone-border p-8 sm:p-14 shadow-sm relative">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-6xl font-serif text-forest/20 block leading-none select-none mb-4">
                “
              </span>

              <p className="text-lg sm:text-2xl font-serif text-charcoal font-normal leading-relaxed italic">
                "{TESTIMONIALS[activeTestimonialIdx].quote}"
              </p>

              <div className="mt-8 pt-6 border-t border-stone-border/60 flex flex-col items-center">
                <span className="font-serif text-base text-charcoal font-medium">
                  {TESTIMONIALS[activeTestimonialIdx].author}
                </span>
                <span className="text-xs text-olive mt-0.5">
                  {TESTIMONIALS[activeTestimonialIdx].location} • {TESTIMONIALS[activeTestimonialIdx].service}
                </span>
              </div>

              {/* Minimal dots to switch testimonials */}
              <div className="flex items-center justify-center space-x-2.5 mt-8">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIdx(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeTestimonialIdx === idx
                        ? 'w-8 bg-forest'
                        : 'w-2 bg-stone-border hover:bg-forest/40'
                    }`}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="text-center mt-6">
              <span className="text-[10px] uppercase tracking-widest text-olive/70 font-mono">
                Sample Demonstration Reviews
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          7.9 FINAL HOMEPAGE CTA
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-sage/20 border-t border-stone-border relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-[0.2em] text-forest font-semibold block mb-3">
            Begin Your Consultation
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif text-charcoal font-normal leading-editorial">
            Ready to see things <span className="italic text-forest">differently?</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-olive font-light max-w-xl mx-auto leading-relaxed">
            Your next step toward more confident, comfortable vision starts here. Reserve your personalized visit in our studio today.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onOpenAppointment('Comprehensive Eye Exam')}
              className="w-full sm:w-auto px-9 py-4 rounded-full text-xs uppercase tracking-widest font-medium bg-forest text-ivory hover:bg-forest-dark transition-all shadow-md active:scale-[0.98]"
            >
              Schedule Your Visit
            </button>
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-full text-xs uppercase tracking-widest font-medium bg-white text-charcoal hover:bg-ivory border border-stone-border transition-colors"
            >
              Contact & Studio Location
            </Link>
          </div>
        </div>
      </section>

      {/* Product Modal Preview */}
      <ProductModal
        product={selectedProduct}
        allProducts={EYEWEAR_COLLECTION}
        onClose={() => setSelectedProduct(null)}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onRequestFitting={(p) => onOpenAppointment(`Eyewear Fitting - ${p.name}`)}
      />
    </div>
  );
};
