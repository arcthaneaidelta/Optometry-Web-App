export interface FAQItem {
  id: string;
  category: 'services' | 'general' | 'eyewear' | 'appointments';
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'services',
    question: 'How often should I schedule an eye exam?',
    answer: 'For most healthy adults, we recommend a comprehensive exam every 12 to 24 months. If you wear contact lenses, spend extensive hours on digital screens, or have underlying health factors such as diabetes or a family history of glaucoma, an annual evaluation helps ensure proactive preventative health.'
  },
  {
    id: 'faq-2',
    category: 'services',
    question: 'Should I bring my current glasses to the appointment?',
    answer: 'Yes, please bring all pairs of eyewear you currently use—including computer glasses, reading spectacles, and prescription sunglasses. This allows us to accurately measure your existing optics, assess optical changes, and calibrate your new prescription seamlessly.'
  },
  {
    id: 'faq-3',
    category: 'services',
    question: 'Can I book a contact lens fitting during the same visit as my exam?',
    answer: 'Absolutely. When requesting your appointment, simply select or mention "Contact Lens Fitting". We will allot dedicated time for corneal measurement, trial lens insertion, and comfort verification during your visit.'
  },
  {
    id: 'faq-4',
    category: 'services',
    question: 'What should I expect during my first visit to Vision House?',
    answer: 'Expect an unhurried, collaborative experience in a quiet, sunlit setting. We begin with a relaxed conversation about your daily visual lifestyle, conduct advanced digital imaging without uncomfortable air puffs, review your retinal health together on high-resolution screens, and allow ample time for custom frame styling.'
  },
  {
    id: 'faq-5',
    category: 'appointments',
    question: 'Can I request an appointment online?',
    answer: 'Yes. You can use our interactive booking form on this website to select your preferred date, time window, and visit type. Our concierge team responds promptly to confirm your scheduled time and provide pre-visit notes.'
  },
  {
    id: 'faq-6',
    category: 'general',
    question: 'Will my eyes need to be dilated?',
    answer: 'Thanks to our ultra-widefield retinal imaging system, many routine screenings can be conducted comfortably without chemical dilation drops. If our optometrist detects a specific retinal condition that requires traditional dilation, we will discuss it with you in advance and offer disposable post-dilation sun shades.'
  },
  {
    id: 'faq-7',
    category: 'eyewear',
    question: 'Do you offer complimentary adjustments for frames purchased elsewhere?',
    answer: 'We happily offer complimentary frame adjustments, nose-pad replacements, and ultrasonic ultrasonic cleanings for all Vision House frames for life. For frames brought in from outside, our opticians provide gentle courtesy adjustments upon inspection.'
  },
  {
    id: 'faq-8',
    category: 'appointments',
    question: 'What insurance plans do you accept?',
    answer: 'Vision House partners as an open-access provider with major vision carriers including VSP, EyeMed, and Blue Cross. We provide detailed itemized reimbursement documentation and assist you directly in filing out-of-network claims so you maximize your policy benefits.'
  }
];
