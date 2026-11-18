export interface TeamMember {
  id: string;
  name: string;
  role: string;
  credentials: string;
  specialty: string;
  bio: string;
  image: string;
  quote: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'dr-elena-vance',
    name: 'Dr. Elena Vance',
    role: 'Lead Optometrist & Founder',
    credentials: 'OD, Clinical Optometry',
    specialty: 'Comprehensive Diagnostics & Preventative Vision',
    bio: 'With over a decade of clinical experience, Dr. Vance founded Vision House to bring unhurried, human-centered care into modern optometry. She believes that an eye exam should be an empowering conversation where patients gain genuine understanding of their ocular wellness.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=800&q=80',
    quote: 'Clear vision is not simply a number on a chart—it is how we connect with the people, work, and art we cherish every day.'
  },
  {
    id: 'dr-julian-thorne',
    name: 'Dr. Julian Thorne',
    role: 'Corneal Specialist & Contact Lens Lead',
    credentials: 'OD, FAAO',
    specialty: 'Specialty Contact Lenses & Dry Eye Therapy',
    bio: 'Dr. Thorne is known for his patient, methodical approach to complex visual challenges. He specializes in anterior segment topography, custom multifocal lenses, and gentle treatment protocols for patients suffering from screen fatigue and chronic dryness.',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=800&q=80',
    quote: 'When your eyes feel comfortable, your entire relationship with your daily environment transforms.'
  },
  {
    id: 'maya-lin',
    name: 'Maya Lin',
    role: 'Optical Curator & Dispensing Specialist',
    credentials: 'ABO Certified Optician',
    specialty: 'Frame Architecture & Precision Pupillary Alignment',
    bio: 'With a background in product design and architectural styling, Maya brings an intuitive eye to frame curation. She guides each patient through our collection to discover silhouettes that flatter bone structure, bridge width, and personal aesthetics.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    quote: 'Eyewear sits in the exact center of how the world sees you. The right frame feels like an effortless extension of who you are.'
  }
];
