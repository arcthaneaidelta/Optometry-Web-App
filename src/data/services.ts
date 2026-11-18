export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  shortDescription: string;
  detailedDescription: string;
  whatToExpect: string[];
  keyHighlights: string[];
  idealFor: string;
  duration: string;
  image: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'comprehensive-eye-exams',
    number: '01',
    title: 'Comprehensive Eye Exams',
    subtitle: 'Holistic clinical evaluation tailored to your visual lifestyle',
    shortDescription: 'Professional vision assessments designed to understand your eye health, visual clarity, and ongoing wellness.',
    detailedDescription: 'Our comprehensive examinations go far beyond simple 20/20 reading charts. Using gentle, modern diagnostic technology, we evaluate your visual acuity, ocular muscle coordination, internal retinal health, and early biomarkers of fatigue or strain—all within an unhurried, comfortable atmosphere.',
    whatToExpect: [
      'In-depth discussion of your daily visual demands, screen hours, and family ocular history',
      'High-precision digital refraction testing for precise distance and reading metrics',
      'Ultra-widefield retinal imaging allowing non-invasive examination of your ocular foundation',
      'Glaucoma risk screening and intraocular pressure checks using gentle non-air-puff methods',
      'Clear, jargon-free walk-through of your imaging with our optometrist'
    ],
    keyHighlights: [
      'Non-invasive retinal imaging',
      'No uncomfortable air-puff testing',
      'Personalized preventative guidance',
      'Complete prescription review'
    ],
    idealFor: 'Annual health maintenance, prescription renewals, and anyone experiencing visual shifts.',
    duration: '45–50 minutes',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'contact-lens-fittings',
    number: '02',
    title: 'Contact Lens Fittings',
    subtitle: 'Precision corneal mapping for effortless daily comfort',
    shortDescription: 'Personalized guidance and advanced lens trials to help you find comfortable, breathable contact lens options.',
    detailedDescription: 'Not all eyes are shaped the same. Whether you have subtle astigmatism, require multifocal vision, or struggle with dryness, our fitting sessions utilize corneal topography to match the exact curvature of your eyes with the most breathable modern materials available.',
    whatToExpect: [
      'Digital corneal topography mapping millions of individual elevation points',
      'Tear film quality analysis to prevent end-of-day dryness and irritation',
      'Trial fitting with leading breathable silicone-hydrogel and daily disposable lenses',
      'Hands-on insertion and removal coaching for new or hesitant lens wearers',
      'Complimentary follow-up assessment after one week of real-world wear'
    ],
    keyHighlights: [
      'Specialty astigmatism & multifocal fittings',
      'High-moisture daily disposable trial lenses',
      'Personalized wear & hygiene schedule',
      'Complimentary adaptation follow-up'
    ],
    idealFor: 'First-time wearers, athletes, multifocal candidates, and patients seeking relief from lens dryness.',
    duration: '40–60 minutes',
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'digital-eye-strain',
    number: '03',
    title: 'Digital Eye Strain Consultations',
    subtitle: 'Targeted solutions for modern monitor-heavy workdays',
    shortDescription: 'Practical guidance, ergonomic assessments, and specialized lenses for visual comfort in a screen-filled world.',
    detailedDescription: 'Prolonged exposure to monitors, laptops, and handheld devices alters our natural blinking patterns and induces micro-spasms in the focusing muscles. Our digital strain assessment diagnoses the root cause of your end-of-day headaches, blurred vision, and dry eyes, prescribing targeted optical solutions.',
    whatToExpect: [
      'Measurement of your exact workstation distances and monitor focal depths',
      'Accommodative lag and convergence testing to check eye muscle fatigue',
      'Custom prescription adjustments designed specifically for mid-range office screens',
      'Demonstration of selective blue-light filtration and anti-reflective lens coatings',
      'Tailored 20-20-20 micro-break and ocular hydration strategies'
    ],
    keyHighlights: [
      'Tailored focal depth lenses',
      'True-color anti-reflective filtering',
      'Ergonomic workstation recommendations',
      'Long-term ocular comfort strategies'
    ],
    idealFor: 'Programmers, designers, writers, students, and professionals working 6+ screen hours daily.',
    duration: '35–45 minutes',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'prescription-eyewear',
    number: '04',
    title: 'Prescription Eyewear Consultation',
    subtitle: 'Bespoke frame styling paired with precision optical optics',
    shortDescription: 'Thoughtfully selected eyewear that balances all-day ergonomic comfort, optical physics, and personal style.',
    detailedDescription: 'Selecting frames should feel like an inspiring styling appointment, not a rushed transaction. Our optical curators assess your facial geometry, skin undertones, and bridge profile to curate frames from independent artisanal houses that elevate your everyday presence.',
    whatToExpect: [
      'One-on-one consultation with our optical stylist in our sunlit boutique',
      'Digital facial pupillometry measuring optical centers to a fraction of a millimeter',
      'Lens material guidance: ultra-thin high index, transitions, or polarized sunwear',
      'Custom pantoscopic tilt and temple curvature adjustment for non-slip balance',
      'Complimentary lifetime adjustments, ultrasonic cleanings, and screw tightening'
    ],
    keyHighlights: [
      'Curated independent frame houses',
      'Bespoke digital pupillary alignment',
      'Premium ultra-thin lens options',
      'Lifetime frame maintenance included'
    ],
    idealFor: 'Anyone seeking frames that authentically reflect their personality while maximizing visual clarity.',
    duration: '30–45 minutes',
    image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'general-eye-health',
    number: '05',
    title: 'General Eye Health & Preventative Care',
    subtitle: 'Proactive wellness monitoring for long-term clarity and comfort',
    shortDescription: 'Comprehensive care for ocular wellness, dry eye therapy, allergy management, and preventative monitoring.',
    detailedDescription: 'Your eyes are a direct window into your overall vascular and systemic health. We offer dedicated consultations for chronic dry eye syndromes, seasonal ocular allergies, contact-lens-related irritation, and ongoing monitoring for age-related changes with gentle, preventative protocols.',
    whatToExpect: [
      'Detailed meibomian gland and tear breakup time (TBUT) analysis',
      'Personalized dry eye treatment protocols including thermal therapy and gentle drops',
      'Ocular surface allergy identification and targeted non-steroidal soothing plans',
      'Baseline anterior and posterior segment documentation for year-over-year comparison',
      'Direct coordination with your primary care provider if systemic signs appear'
    ],
    keyHighlights: [
      'Specialized dry eye diagnostic protocols',
      'Targeted non-steroidal allergy relief',
      'Year-over-year digital retina tracking',
      'Holistic ocular lifestyle guidance'
    ],
    idealFor: 'Patients experiencing burning, redness, persistent dry eyes, foreign-body sensation, or seasonal allergies.',
    duration: '30–40 minutes',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80'
  }
];
