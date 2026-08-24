export const clinic = {
  name: "RenovaAura",
  tagline: "Acne Scar Clinic",
  location: "C-3, 1st floor, Anand Vihar, New Delhi, 110092",
  address: "C-3, 1st floor, Anand Vihar, New Delhi, 110092",
  phone: "+91 9205220070",
  whatsapp: "Chat with our care team",
  email: "info@renovaaura.com",
  hours: "Mon to Sat 10:00 AM to 7:00 PM | Sun: 10:00 AM to 2:00 PM",
};

export const scarTypes = [
  {
    key: "Icepick",
    title: "Icepick Scars",
    desc: "Narrow, deep punctures that look like the skin was pierced with a fine tool. Common on cheeks and temples.",
    protocol: "TCA CROSS + VirtuEx fractional laser",
  },
  {
    key: "Boxcar",
    title: "Boxcar Scars",
    desc: "Round or oval depressions with sharply defined vertical edges, giving skin a pitted, uneven look.",
    protocol: "Subcision + VirtuEx resurfacing",
  },
  {
    key: "Rolling",
    title: "Rolling Scars",
    desc: "Wide, shallow depressions with sloping edges caused by fibrous tethering under the skin.",
    protocol: "Subcision + collagen stimulation",
  },
  {
    key: "PIH",
    title: "Post-Acne Pigmentation",
    desc: "Brown or dark marks left behind after inflammation settles — very common in Indian skin tones.",
    protocol: "QLARA Q-switched laser toning",
  },
  {
    key: "Erythema",
    title: "Post-Acne Redness",
    desc: "Flat pink or red marks from dilated capillaries that linger long after the breakout has healed.",
    protocol: "Medical topicals + laser toning",
  },
  {
    key: "Hypertrophic",
    title: "Raised / Keloid Scars",
    desc: "Thickened, raised scar tissue that sits above the skin surface, often on the jaw, chest or back.",
    protocol: "Intralesional therapy + laser",
  },
];

export const technologies = [
  {
    id: "virtuex",
    name: "VirtuEx Laser",
    category: "Laser",
    partner: "Derma Lasertech Pvt. Ltd. technology partner",
    headline: "1550 nm Erbium Glass fractional laser",
    summary:
      "VirtuEx is an advanced 1550 nm Erbium Glass fractional laser that stimulates collagen production, resurfaces damaged skin, improves scars and pigmentation, and supports healthier, smoother, younger-looking skin with minimal downtime.",
    detail:
      "By creating microscopic treatment zones beneath the skin's surface, it stimulates collagen remodeling while preserving surrounding healthy tissue for faster healing. In acne scar protocols it is our primary resurfacing tool for boxcar, rolling and icepick scars.",
    spec: [
      ["Laser type", "1550 nm Erbium Glass fractional"],
      ["Mechanism", "Microthermal zones → collagen remodeling"],
      ["Best for", "Atrophic acne scars, surgical scars, texture"],
      ["Sessions", "Typically 3–6, spaced several weeks apart"],
      ["Comfort", "Topical numbing; mild discomfort only"],
      ["Downtime", "Minimal — mild redness for 24–72 hrs"],
    ],
    benefits: [
      "Stimulates natural collagen production",
      "Improves acne and surgical scars",
      "Reduces fine lines and wrinkles",
      "Enhances skin texture and tone",
      "Minimises enlarged pores",
      "Improves pigmentation irregularities",
      "Supports skin resurfacing",
      "Minimal downtime",
    ],
    areas: [
      "Face",
      "Neck",
      "Décolletage",
      "Acne scars",
      "Surgical scars",
      "Stretch marks",
      "Enlarged pores",
      "Uneven texture",
    ],
    image:
      "https://images.pexels.com/photos/4586726/pexels-photo-4586726.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "qlara",
    name: "QLARA — Pigmentation",
    category: "Skin",
    partner: "Reveal Lasers technology partner",
    headline: "Q-switched multi-wavelength with Smart MultiTone",
    summary:
      "The QLARA is a Q-switched multi-wavelength laser platform with Smart MultiTone mode that lets our dermatologists match wavelength, pulse and energy precisely to your pigmentation — for enhanced safety, versatility and speed.",
    detail:
      "532 nm targets superficial epidermal pigment where melanin absorption is highest, while 1064 nm penetrates deeper to reach dermal pigment and support gentle laser toning. Nanosecond and microsecond pulses shatter pigment into particles the body clears naturally — ideal for the dark marks left behind after acne.",
    spec: [
      ["Laser type", "Q-switched multi-wavelength, Smart MultiTone"],
      ["Wavelengths", "532 nm · 1064 nm · 595/660 nm"],
      ["Pulse control", "Nanosecond & microsecond, multi-pulse"],
      ["Best for", "Post-acne pigmentation, melasma, dyschromia"],
      ["Skin types", "Depth-tunable for all Fitzpatrick types"],
      ["Downtime", "Minimal — same-day return to activity"],
    ],
    benefits: [
      "Multi-wavelength — treats surface and deep pigment",
      "Smart MultiTone mode for safer, tailored sessions",
      "Effective on stubborn post-acne pigmentation",
      "Adds glow and evens tone with gentle laser toning",
      "Safe for Indian skin with minimal downtime",
      "Also treats melasma, freckles and solar lentigo",
    ],
    areas: [
      "Post-acne pigmentation",
      "Melasma",
      "Freckles",
      "Solar lentigo",
      "Sun spots",
      "Dyschromia",
      "Skin toning & glow",
    ],
    image:
      "https://images.pexels.com/photos/4586749/pexels-photo-4586749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export const cases = [
  {
    id: 1,
    before: "/images/before1.jpg",
    after: "/images/after1.jpg",
    title: "Rolling & boxcar scars, left cheek",
    patient: "Female, 27",
    plan: "Subcision + 4 × VirtuEx fractional laser",
    duration: "6 months",
  },
  {
    id: 2,
    before: "/images/before2.jpg",
    after: "/images/after2.jpg",
    title: "Deep icepick scarring, both cheeks",
    patient: "Male, 31",
    plan: "TCA CROSS + 5 × VirtuEx + QLARA toning",
    duration: "9 months",
  },
  {
    id: 3,
    before: "/images/before3.jpg",
    after: "/images/after3.jpg",
    title: "Post-acne pigmentation & shallow scars",
    patient: "Female, 24",
    plan: "6 × QLARA laser toning + medical topicals",
    duration: "4 months",
  },
];

export const gallery = [
  {
    src: "https://images.pexels.com/photos/10521230/pexels-photo-10521230.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Our treatment suite",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.pexels.com/photos/37078056/pexels-photo-37078056.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "VirtuEx fractional session",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/5069499/pexels-photo-5069499.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "Precision handpiece work",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/5619462/pexels-photo-5619462.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Sterile procedure room",
    span: "md:col-span-2",
  },
  {
    src: "https://images.pexels.com/photos/4586727/pexels-photo-4586727.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "Post-laser skin cooling",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/5069507/pexels-photo-5069507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    caption: "QLARA pigmentation protocol",
    span: "",
  },
  {
    src: "https://images.pexels.com/photos/5619453/pexels-photo-5619453.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    caption: "Consultation room",
    span: "md:col-span-2",
  },
];

export const doctor = {
  name: "Dr. Bhawna Bhardwaj",
  role: "Senior Consultant Dermatologist & Hair Transplant Surgeon",
  quote:
    "The right protocol for the right patient — not the most-marketed treatment of the month.",
  rating: "4.9/5",
  bio: "MBBS, DVDL (Skin & VD). Dr. Bhardwaj is a senior consultant dermatologist and hair transplant surgeon whose practice combines medical dermatology with surgical hair restoration. She trained in skin & VD at a leading Indian medical institution and has spent the last 15+ years building expertise across acne and scar management, melasma protocols calibrated for Indian skin, surgical hair transplant techniques (FUE, DHT, beard, eyebrow), and energy-based aesthetic devices. Patients consistently describe her consultations as unhurried, honest, and detail-oriented.",
  credentials: [
    {
      tag: "MBBS",
      title: "Bachelor of Medicine, Bachelor of Surgery",
      desc: "Foundational medical training in clinical medicine and surgery.",
    },
    {
      tag: "DVDL",
      title: "Diploma in Venereology, Dermatology and Leprosy",
      desc: "Specialised post-graduate training in clinical and cosmetic dermatology with focus on Indian skin types.",
    },
    {
      tag: "FUE",
      title: "Hair Transplant Surgery Certification",
      desc: "Advanced training in Follicular Unit Extraction, DHI Choi-pen, beard and eyebrow transplantation.",
    },
    {
      tag: "✦",
      title: "Aesthetic & Laser Dermatology",
      desc: "Multi-platform certification across diode, Nd:YAG, Q-switch and RF-based aesthetic devices.",
    },
  ],
  expertise: [
    "Acne & Acne Scar Management",
    "Pigmentation & Melasma (Cosmelan)",
    "Q-Switch & Tattoo Removal",
    "Skin Tightening",
    "Anti-Wrinkle Therapy (Botox)",
    "Dermal Fillers",
    "Laser Hair Reduction",
    "FUE Hair Transplant",
    "DHT Hair Transplant",
    "Beard & Eyebrow Restoration",
    "Female Hair Transplant",
  ],
};

export const testimonials = [
  {
    quote:
      "Honest consult, no rush, no upsell. That's why I drive across the city for my monthly visit.",
    name: "Aarti J.",
    treatment: "Acne Management",
  },
  {
    quote:
      "She didn't sell me a treatment, she diagnosed my melasma properly and built a plan I could actually follow. Three months in, the difference is real.",
    name: "Meera S.",
    treatment: "Cosmelan Protocol",
  },
  {
    quote:
      "Dr. Bhardwaj walked me through the entire plan before I committed to anything. A year on, my cheeks look completely different.",
    name: "Rohit K.",
    treatment: "Acne Scar Resurfacing",
  },
];

export const steps = [
  {
    n: "01",
    title: "Scar mapping consult",
    desc: "We photograph and map every scar type on your face — icepick, boxcar, rolling, pigment — because each responds to a different tool.",
  },
  {
    n: "02",
    title: "Written treatment plan",
    desc: "You leave with a printed protocol: number of sessions, devices used, spacing, downtime and realistic percentage improvement.",
  },
  {
    n: "03",
    title: "Combination therapy",
    desc: "Subcision and TCA CROSS release tethered scars, VirtuEx rebuilds collagen, QLARA clears the pigment left behind.",
  },
  {
    n: "04",
    title: "Review & maintenance",
    desc: "Standardised photos at every visit, plus a barrier-repair and sun-protection routine so results hold.",
  },
];

export const faqs = [
  {
    q: "Can acne scars be removed completely?",
    a: "Honest answer: no protocol erases scars 100%. With a correctly combined plan most patients see 60–85% improvement in scar depth, texture and shadowing. We show you standardised photographs at every review so progress is measurable, not marketing.",
  },
  {
    q: "How many sessions will I need?",
    a: "Depending on the condition being treated, most patients benefit from 3–6 VirtuEx sessions spaced several weeks apart. Pigmentation on the QLARA may need a few sessions for superficial marks, and a longer gradual course for deeper pigment.",
  },
  {
    q: "Is laser treatment painful?",
    a: "Most patients experience only mild discomfort. A topical numbing cream is applied 30–45 minutes before treatment, and cooling is used throughout the session.",
  },
  {
    q: "Is it safe for Indian skin?",
    a: "Yes. Both platforms are depth- and energy-tunable. The QLARA's Smart MultiTone mode lets us calibrate gentle settings that are safe and effective across all Fitzpatrick types, and VirtuEx's fractional delivery preserves healthy tissue between microthermal zones.",
  },
  {
    q: "What is the downtime?",
    a: "QLARA toning has minimal downtime — mild redness that settles within hours. VirtuEx fractional resurfacing typically leaves redness and a sandpaper texture for 2–4 days. Sunscreen is non-negotiable afterwards.",
  },
  {
    q: "Should I treat active acne first?",
    a: "Yes. Resurfacing an actively inflamed face risks new scarring and pigmentation. We stabilise active acne medically first, then move to scar revision — usually within 2–3 months.",
  },
];
