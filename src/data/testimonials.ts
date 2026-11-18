export interface Testimonial {
  id: string;
  author: string;
  location: string;
  service: string;
  quote: string;
  highlight: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Clara M.',
    location: 'Architect & Interior Designer',
    service: 'Comprehensive Exam & Custom Eyewear',
    quote: 'The entire experience felt welcoming from the moment I stepped inside. Everything was explained clearly with zero medical jargon, and I never felt rushed. I finally found frames that feel comfortable and actually suit my style.',
    highlight: 'Welcoming, unhurried, and genuinely thoughtful.'
  },
  {
    id: '2',
    author: 'Julian K.',
    location: 'Software Engineering Director',
    service: 'Digital Eye Strain Consultation',
    quote: 'After years of twelve-hour monitor days, I was experiencing daily afternoon tension. Dr. Vance pinpointed my exact focal discrepancies. The customized computer prescription completely resolved my headaches within forty-eight hours.',
    highlight: 'My afternoon screen fatigue completely vanished.'
  },
  {
    id: '3',
    author: 'Sarah B.',
    location: 'Art Director & Photographer',
    service: 'Contact Lens Fitting & Frame Styling',
    quote: 'Professional, thoughtful, and genuinely pleasant from beginning to end. Maya helped me select The Atelier frames, and people compliment them weekly. You can tell they care deeply about craftsmanship.',
    highlight: 'Professional, thoughtful, and pleasant from beginning to end.'
  }
];
