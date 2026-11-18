export interface EyewearColor {
  name: string;
  hex: string;
  image: string;
}

export interface EyewearProduct {
  id: string;
  name: string;
  tagline: string;
  category: 'Classic' | 'Minimal' | 'Contemporary' | 'Optical';
  price: number;
  description: string;
  details: string[];
  measurements: string;
  weight: string;
  fit: string;
  colors: EyewearColor[];
  featuredHome: boolean;
}

export const EYEWEAR_COLLECTION: EyewearProduct[] = [
  {
    id: 'the-atelier',
    name: 'The Atelier',
    tagline: 'Classic acetate frame with bespoke proportions',
    category: 'Classic',
    price: 340,
    description: 'Crafted from hand-polished bio-acetate, The Atelier balances architectural presence with lightweight balance. Its keyhole bridge and beveled temples offer all-day ergonomic comfort for versatile everyday wear.',
    details: [
      'Japanese cured cellulose acetate',
      'Custom 5-barrel German engineered hinges',
      'Ergonomic sculpted saddle bridge',
      'Prescription & progressive lens compatible'
    ],
    measurements: '49 □ 21 - 145 mm',
    weight: '24g',
    fit: 'Medium to Wide',
    featuredHome: true,
    colors: [
      {
        name: 'Smoked Tortoise',
        hex: '#5A4632',
        image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Deep Forest',
        hex: '#26332D',
        image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Crystal Amber',
        hex: '#C6934B',
        image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'the-sol',
    name: 'The Sol',
    tagline: 'Minimal everyday frame with clean contour lines',
    category: 'Minimal',
    price: 310,
    description: 'The Sol embraces quiet luxury. Ultra-refined rims framed in satin-finished lightweight materials create an effortless silhouette that complements subtle facial features without dominating them.',
    details: [
      'Ultra-thin 1.8mm acetate rim profile',
      'Hypoallergenic titanium core wire',
      'Soft silicone nose pad options available',
      'Anti-reflective, scratch-resistant demonstration lenses'
    ],
    measurements: '48 □ 19 - 142 mm',
    weight: '19g',
    fit: 'Narrow to Medium',
    featuredHome: true,
    colors: [
      {
        name: 'Warm Champagne',
        hex: '#DFD1B8',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Soft Matte Olive',
        hex: '#74786F',
        image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Onyx Black',
        hex: '#1F2421',
        image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'the-forma',
    name: 'The Forma',
    tagline: 'Contemporary geometric frame for bold, quiet expression',
    category: 'Contemporary',
    price: 365,
    description: 'An understated modern silhouette featuring gentle polygonal corners. The Forma is designed for creative thinkers who appreciate subtle geometry, sharp detailing, and flawless weight distribution.',
    details: [
      'Hand-milled multi-angle acetate contours',
      'Threadlocked Teflon-coated screws',
      'Comfort-tapered paddle temple tips',
      'Hand-buffed natural organic wax finish'
    ],
    measurements: '50 □ 20 - 145 mm',
    weight: '22g',
    fit: 'Medium',
    featuredHome: true,
    colors: [
      {
        name: 'Charcoal Slate',
        hex: '#343B37',
        image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Warm Sandstone',
        hex: '#B8A18A',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Muted Sage',
        hex: '#8C9B88',
        image: 'https://images.unsplash.com/photo-1582142839970-2b9da9e37780?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'the-rowan',
    name: 'The Rowan',
    tagline: 'Timeless optical frame reimagined with modern restraint',
    category: 'Optical',
    price: 325,
    description: 'Inspired by mid-century optical heritage, The Rowan features a softened pantoscopic tilt and rounded teardrop lenses. It sits naturally across the brow line, giving an intellectual yet warm presence.',
    details: [
      'Lightweight Italian acetate front with titanium temple cores',
      'Double-barrel precision hinge mechanisms',
      'Comfort fit bridge suited for all-day screen work',
      'Compatible with high-index thin lenses'
    ],
    measurements: '47 □ 21 - 140 mm',
    weight: '21g',
    fit: 'Universal Fit',
    featuredHome: true,
    colors: [
      {
        name: 'Havana Honey',
        hex: '#966336',
        image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Dark Espresso',
        hex: '#2B231D',
        image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Translucent Grey',
        hex: '#8B918E',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'the-kanso',
    name: 'The Kanso',
    tagline: 'Pure Japanese beta-titanium minimalist round silhouette',
    category: 'Minimal',
    price: 395,
    description: 'Named after the Zen aesthetic of simplicity and naturalness, The Kanso weighs barely fifteen grams. Forged from flexible beta-titanium, it provides nearly weightless stability with zero pressure points.',
    details: [
      '100% Japanese beta-titanium wire construction',
      'Self-adjusting medical-grade titanium nose pads',
      'Laser-welded rimless-feel structure',
      'Hypoallergenic, corrosion-proof finish'
    ],
    measurements: '46 □ 22 - 145 mm',
    weight: '14g',
    fit: 'Narrow to Medium',
    featuredHome: false,
    colors: [
      {
        name: 'Antique Gold',
        hex: '#C5A059',
        image: 'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Brushed Silver',
        hex: '#B2B7B9',
        image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Matte Charcoal',
        hex: '#303632',
        image: 'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'the-mercer',
    name: 'The Mercer',
    tagline: 'Sculptural square frame with distinct architectural profile',
    category: 'Contemporary',
    price: 350,
    description: 'The Mercer combines substantial proportions with clean, refined edges. Engineered with balanced weight distribution, it gives strong definition to oval, round, and heart-shaped faces.',
    details: [
      'Substantial 6mm block acetate construction',
      'Custom knurled metal wire cores visible through clear temples',
      'Seven-barrel heavy-duty riveted hinges',
      'Hand-polished satin luster edge work'
    ],
    measurements: '52 □ 19 - 148 mm',
    weight: '27g',
    fit: 'Medium to Wide',
    featuredHome: false,
    colors: [
      {
        name: 'Forest Moss',
        hex: '#4A5B51',
        image: 'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Deep Ink',
        hex: '#1D2529',
        image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Caramel Horn',
        hex: '#8D6E4E',
        image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'the-vesper',
    name: 'The Vesper',
    tagline: 'Subtly softened aviator crafted in dual-finish metal',
    category: 'Classic',
    price: 380,
    description: 'A contemporary evolution of the traditional pilot frame. The Vesper drops the harsh teardrop angle for an organic curve, complemented by a delicate bridge bar and engraved temple filigree.',
    details: [
      'Ultra-fine monel and titanium blend structure',
      'Hand-painted enamel rim inlay',
      'Custom teardrop temple tips with counter-weighting',
      'Comfort temple flex for headache-free wear'
    ],
    measurements: '53 □ 17 - 145 mm',
    weight: '18g',
    fit: 'Medium to Wide',
    featuredHome: false,
    colors: [
      {
        name: 'Pale Gold & Olive',
        hex: '#B59F67',
        image: 'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Smoked Ruthenium',
        hex: '#5E6466',
        image: 'https://images.unsplash.com/photo-1508296695146-257a814070b4?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  },
  {
    id: 'the-astrid',
    name: 'The Astrid',
    tagline: 'Graceful feminine cat-eye with softened contemporary angles',
    category: 'Optical',
    price: 335,
    description: 'The Astrid offers a gentle, uplifting lift to the eyes without exaggeration. Beautifully tapered temple points and soft chamfered corners make it a captivating signature piece.',
    details: [
      'Featherweight Italian cellulose acetate',
      'Precision flush rivet hinges',
      'Optimized beveling for minimal lens edge thickness',
      'Sculpted bridge contour tailored for high cheekbones'
    ],
    measurements: '51 □ 18 - 142 mm',
    weight: '20g',
    fit: 'Narrow to Medium',
    featuredHome: false,
    colors: [
      {
        name: 'Rose Clay',
        hex: '#9E786B',
        image: 'https://images.unsplash.com/photo-1582142839970-2b9da9e37780?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Translucent Sage',
        hex: '#A2B09F',
        image: 'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1000&q=80'
      },
      {
        name: 'Classic Tortoise',
        hex: '#6B4C2F',
        image: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1000&q=80'
      }
    ]
  }
];
