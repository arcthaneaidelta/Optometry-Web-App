# VISION HOUSE — Premium Optometry & Eye Care Website

> *"See Life Differently."*

An exceptionally refined, luxury editorial website created for **VISION HOUSE**, a contemporary high-end optometry studio combining unhurried clinical eye care, modern diagnostic technology, and thoughtfully curated independent eyewear.

---

## ✦ Brand Identity & Design System

The visual identity is modeled after luxury editorial publications, boutique hospitality brands, and modern wellness studios (inspired by Aesop and Apple design principles) rather than conventional clinical healthcare templates.

### Color Palette
- **Warm Ivory (`#F7F6F2`)** — Primary background, soft natural lighting ambiance
- **Soft Warm Stone (`#EFEEE8`)** — Secondary background and structural cards
- **Deep Charcoal Green (`#252B27`)** — Primary typography and subtle contrast
- **Muted Grey Olive (`#74786F`)** — Secondary typography, captions, and metadata
- **Muted Forest Green (`#52665B`)** — Primary brand tone and call-to-actions
- **Soft Sage (`#A9B6A5`)** — Secondary brand tone, badges, and accents
- **Warm Sand (`#B8A18A`)** — Earthy warmth for highlights
- **Deep Forest (`#26332D`)** — Dark contrasting statement sections & global footer
- **Soft Neutral Border (`#E4E2DA`)** — Clean, hairline borders replacing heavy drop shadows

### Typography
- **Editorial Headings:** *Cormorant Garamond* with selective italic emphasis on emotive keywords.
- **Body & Navigation:** *DM Sans* with generous line heights and controlled letter-spacing.

---

## ✦ Website Architecture & Pages

The application is built as a multi-page client-rendered single page application (SPA) with zero dead links or placeholders:

1. **Home (`/`)**:
   - Branded loading screen (warm ivory, monogram, line animation, 800ms initial duration).
   - Sticky global navigation with smooth transparency-to-blur scroll transitions.
   - Cinematic hero section with warm editorial imagery, responsive typography, and scroll indicators.
   - Brand Introduction: 2-column editorial narrative and authentic optometrist-patient photography.
   - Three Approach Pillars: Personalized Attention, Modern Technology, Everyday Confidence.
   - Featured Services grid with duration badges and direct booking triggers.
   - Eyewear Showcase featuring 4 flagship frames with live color swatches and interactive detail modals.
   - Dark Forest statement section: "Because your vision is personal."
   - Patient Journey timeline (3-step horizontal/vertical roadmap).
   - Demonstration Testimonials carousel with patient quotes.
   - Closing CTA banner on soft sage.

2. **About Us (`/about`)**:
   - Hero narrative: *"Thoughtful care. A clearer perspective."*
   - Our Story: Why human-centered, unhurried healthcare matters.
   - Four Philosophy Pillars: *Listen First*, *Care Thoughtfully*, *See Every Detail*, and *Put People Before Processes*.
   - Meet the Team: Professional profiles for Dr. Elena Vance, Dr. Julian Thorne, and Maya Lin.
   - Direct consultation booking trigger.

3. **Our Services (`/services`)**:
   - In-depth alternating sections for all 5 clinical specializations:
     1. *Comprehensive Eye Exams* (45-50 min, non-invasive imaging)
     2. *Contact Lens Fittings* (corneal mapping, dry-eye trials)
     3. *Digital Eye Strain Consultations* (ergonomic workstation focal depths)
     4. *Prescription Eyewear Styling* (sub-millimeter pupillometry)
     5. *General Eye Health & Preventative Care* (tear breakup and preventative wellness)
   - Detailed "What to Expect" checklists for each service.
   - Interactive keyboard-operable FAQ Accordion.

4. **Eyewear Boutique (`/eyewear`)**:
   - Curated gallery of 8 handcrafted frames (The Atelier, The Sol, The Forma, The Rowan, The Kanso, The Mercer, The Vesper, The Astrid).
   - Real-time category filtering (*All Frames*, *Classic*, *Minimal*, *Contemporary*, *Optical*).
   - Sort dropdown (*Featured*, *Name A–Z*, *Price: Low to High*, *Price: High to Low*).
   - Interactive Product Detail Modal:
     - Large imagery and architectural specs (measurements, frame weight, fit).
     - Interactive colorway swatches that dynamically update the frame preview.
     - Previous / Next keyboard and button navigation.
     - Direct "Schedule Frame Fitting" action pre-filling the appointment form.

5. **Patient Resources (`/patient-resources`)**:
   - First Visit 3-phase timeline (Welcome & Intake, Doctor Exam, Optical Consultation).
   - Interactive Pre-Appointment Checklist with toggleable checkboxes.
   - Studio logistics: operating hours, location details, public transit & parking validation.
   - Comprehensive Patient FAQs.

6. **Contact & Appointments (`/contact`)**:
   - Practice telephone, direct email, suite address, and hours.
   - Stylized Interactive Neighborhood Map rendered via custom SVG with zoom toggles.
   - Interactive Appointment Request Form:
     - Full Name, Email, Phone Number, Service Type, Preferred Date, Preferred Time, and Notes.
     - Complete frontend validation with real-time error feedback.
     - Loading state and success confirmation screen with appointment summary and celebratory confetti.

7. **Universal Components**:
   - Quick Appointment Drawer Modal accessible from any button on any page.
   - Global Footer (`#26332D`) with quick links, legal privacy modal, and smooth back-to-top scroll.
   - Reduced motion accessibility (`prefers-reduced-motion` compliance).

---

## ✦ Technology Stack

- **React 19 & TypeScript**
- **Vite** — Fast, modern build tool
- **Tailwind CSS 3.4** — Custom design tokens & utility styles
- **React Router DOM 7** — Client-side route handling & scroll restoration
- **Lucide React** — Minimal geometric icons
- **Canvas Confetti** — Tactile celebratory interaction on appointment completion

---

## ✦ Local Development & Preview

### Prerequisites
Node.js (v18+) and npm.

### Running the Project
```bash
# Install dependencies (already completed)
npm install

# Start local development server with Hot Module Replacement (HMR)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

The production preview is currently active on:
**`http://localhost:4173/`**
