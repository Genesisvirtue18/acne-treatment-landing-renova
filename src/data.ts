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

export const acneOverview = {
  intro:
    "Acne scars are not all the same. Depressed scars, uneven texture, dark marks and redness each need a different level of treatment. We assess what is left behind, then combine dermatologist-led procedures and prescribed home care into a staged scar revision plan.",
  symptoms: [
    "Rolling scars that create soft shadows on the cheeks",
    "Boxcar scars with defined, uneven edges",
    "Deep ice-pick scars on the cheeks or temples",
    "Dark post-acne marks or lingering redness",
    "Uneven texture that remains after breakouts have healed",
  ],
  causes: [
    "Loss of collagen after deep or prolonged inflammation",
    "Fibrous bands tethering the skin beneath rolling scars",
    "Picking or squeezing inflamed breakouts",
    "Pigment changes after a spot has healed",
    "Active acne that continues to create new scar tissue",
  ],
  approach: [
    "Map each scar type, its depth and any associated pigmentation",
    "Control active acne first if new inflammation is still present",
    "Release tethered scars with subcision where clinically appropriate",
    "Resurface texture and stimulate collagen with the right procedure",
    "Review progress, prescribe aftercare and plan the next stage",
  ],
  tools: [
    {
      name: "VirtuEx Erbium+ co2",
      text: "Resurfaces texture, rebuilds collagen and softens boxcar and rolling scars.",
    },
    {
      name: "QLARA Q-switched toning",
      text: "Targets the post-acne pigmentation and dark marks that remain after inflammation settles.",
    },
  ],
};

export const scarTypes = [
  {
    key: "Icepick",
    title: "Icepick Scars",
    desc: "Narrow, deep punctures that look like the skin was pierced with a fine tool. Common on cheeks and temples.",
    protocol: "VirtuEx (Erbium+ co2 )fractional laser",
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
    headline: "VirtuEx (Erbium+ co2 )fractional laser",
    summary:
      "VirtuEx is an advanced Erbium+ co2 fractional laser that stimulates collagen production, resurfaces damaged skin, improves scars and pigmentation, and supports healthier, smoother, younger-looking skin with minimal downtime.",
    detail:
      "By creating microscopic treatment zones beneath the skin's surface, it stimulates collagen remodeling while preserving surrounding healthy tissue for faster healing. In acne scar protocols it is our primary resurfacing tool for boxcar, rolling and icepick scars.",
    spec: [
      ["Laser type", "Erbium+ co2 fractional"],
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
      "https://cdn.sanity.io/images/q7pg9y33/production/9fdf838aeb52ac952f6f770014a7325cb68f7090-1279x1600.jpg",
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
      "https://cdn.sanity.io/images/q7pg9y33/production/0aecb1911635a2e7aa3786d8b60daac9031d3c92-597x1280.jpg",
  },
];

export const cases = [
  {
    id: 1,
    before: "/images/b1.jpeg",
    after: "/images/a1.jpeg",
    title: "Rolling & boxcar scars, left cheek",
    patient: "Female, 27",
    plan: "Subcision + 4 × VirtuEx fractional laser",
    duration: "6 months",
    beforeObjectPosition: "center 38%",
    afterObjectPosition: "center 38%",
  },
  {
    id: 2,
    before: "/images/b2.jpeg",
    after: "/images/a2.jpeg",
    title: "Deep icepick scarring, both cheeks",
    patient: "Male, 31",
    plan: "5 × VirtuEx (Erbium+ co2) + QLARA toning",
    duration: "9 months",
    beforeObjectPosition: "center 35%",
    afterObjectPosition: "center 35%",
  },
  {
    id: 3,
    before: "/images/b3.jpeg",
    after: "/images/a3.jpeg",
    title: "Post-acne pigmentation & shallow scars",
    patient: "Female, 24",
    plan: "6 × QLARA laser toning + medical topicals",
    duration: "4 months",
    beforeObjectPosition: "center 32%",
    afterObjectPosition: "center 32%",
  },
  {
    id: 4,
    before: "/images/b4.jpeg",
    after: "/images/a4.jpeg",
    title: "Mixed acne scarring, right profile",
    patient: "Female, 29",
    plan: "Subcision + resurfacing + pigment correction",
    duration: "7 months",
    beforeObjectPosition: "center 36%",
    afterObjectPosition: "center 36%",
  },
  {
    id: 5,
    before: "/images/b5.jpeg",
    after: "/images/a5.jpeg",
    title: "Textural acne scars with lingering marks",
    patient: "Male, 26",
    plan: "Combination protocol with collagen stimulation",
    duration: "5 months",
    beforeObjectPosition: "center 34%",
    afterObjectPosition: "center 34%",
  },
  {
    id: 6,
    before: "/images/b6.jpeg",
    after: "/images/a6.jpeg",
    title: "Post-inflammatory pigment and shallow atrophy",
    patient: "Female, 34",
    plan: "QLARA toning + fractional resurfacing",
    duration: "6 months",
    beforeObjectPosition: "center 33%",
    afterObjectPosition: "center 33%",
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
      "I had rolling scars that looked much deeper in harsh light. The plan was explained clearly, and after subcision and resurfacing my cheek texture is noticeably softer.",
    name: "Aarti J.",
    treatment: "Rolling Scar Subcision + Resurfacing",
  },
  {
    quote:
      "My cheeks had old boxcar scars and dark marks. The sessions were spaced around healing, and the combination plan made my skin look more even without promising perfection.",
    name: "Meera S.",
    treatment: "Boxcar Scar Resurfacing + QLARA Toning",
  },
  {
    quote:
      "I finally understood why one treatment had not helped my ice-pick scars. Dr. Bhardwaj mapped the scars first and built a gradual plan that gave me measurable improvement.",
    name: "Rohit K.",
    treatment: "Ice-pick Scar Revision",
  },
];

export const steps = [
  {
    n: "01",
    title: "Scar mapping consult",
    desc: "We photograph and map the full scar pattern first, then decide on a combined plan. It is not one machine per scar.",
  },
  {
    n: "02",
    title: "Written treatment plan",
    desc: "You leave with a staged protocol: what to treat first, which techniques may be combined, spacing, downtime and realistic improvement.",
  },
  {
    n: "03",
    title: "Combination therapy",
    desc: "We combine the right techniques in the right sequence - subcision, resurfacing, collagen stimulation and pigment treatment - so different scar types improve together.",
  },
  {
    n: "04",
    title: "Review & maintenance",
    desc: "Standardised photos at every visit, plus a barrier-repair plan with prescribed medication and sun protection so results hold and the plan can be adjusted if needed.",
  },
];

export const faqs = [
  {
    q: "What are the causes of post-acne scars?",
    a: "Scars form when inflamed acne damages collagen in the deeper skin layers. The more severe, prolonged or repeatedly picked the breakout, the higher the risk. Early control of active acne is the best prevention.",
  },
  {
    q: "What are the types of acne scars?",
    a: "The main types are ice-pick scars, boxcar scars and rolling scars. Many patients also have post-acne pigmentation or redness, which are not true scars but often need treatment alongside the texture changes.",
  },
  {
    q: "What are stretch marks and why do they occur?",
    a: "Stretch marks are a separate type of skin change caused by rapid stretching of the skin, such as growth, pregnancy or weight changes. They are treated differently from acne scars, but we can guide you to the right plan if both are present.",
  },
  {
    q: "What services are offered for acne scars and stretch marks?",
    a: "Depending on the skin concern, we may use chemical peels, microneedling, subcision, fractional lasers, PRP or GFC, and supportive medical skincare. The exact combination depends on scar type, skin tone and healing time.",
  },
  {
    q: "What is chemical peeling?",
    a: "Chemical peeling uses a controlled medical solution to lift damaged surface layers and encourage smoother, more even skin renewal. It can help with acne, post-acne marks and dullness when used at the right strength.",
  },
  {
    q: "What is microneedling?",
    a: "Microneedling creates tiny controlled channels in the skin to stimulate collagen and improve texture over time. It is often combined with other treatments for acne scars, pigmentation or stretch marks.",
  },
  {
    q: "What is fractional CO2 laser and how does it work?",
    a: "Fractional lasers deliver energy in a patterned way so that small treatment zones are targeted while nearby skin is preserved for healing. In acne scar treatment, this helps remodel collagen and soften uneven texture with less downtime than older fully ablative lasers.",
  },
  {
    q: "What is PRP?",
    a: "PRP stands for platelet-rich plasma, a preparation made from your own blood that is rich in growth factors. It is sometimes added to skin and hair procedures to support healing and recovery.",
  },
  {
    q: "What does PRP or GFC do for skin?",
    a: "PRP and GFC are supportive regenerative treatments that may help with healing, collagen support and overall skin quality. They are not one-size-fits-all treatments and are best selected after a proper consultation.",
  },
  {
    q: "Who can undergo these treatments?",
    a: "Anyone with acne scars can be assessed for treatment. We first consider the scar type, skin sensitivity, previous procedures and whether new breakouts are still active. If inflammation is present, we treat that first before starting scar revision.",
  },
  {
    q: "How do I choose the right procedure for maximum benefit?",
    a: "The right procedure depends on whether the main issue is active acne, pigmentation, tethered scars or volume loss. The best results usually come from a combined plan rather than one single device.",
  },
  {
    q: "What are the post-procedure instructions?",
    a: "You will usually be asked to keep the skin clean, avoid picking, use prescribed medication as directed, use sunscreen strictly, and pause irritating products for a short period. We will give instructions based on the exact treatment performed.",
  },
  {
    q: "How frequently can I take my sessions?",
    a: "Session spacing depends on the treatment. Some procedures can be repeated after a few weeks, while deeper resurfacing treatments need more healing time between visits.",
  },
  {
    q: "How many sittings will I require?",
    a: "The number of sittings depends on the depth of acne scars, how active the acne is, your skin type and how well you heal. Many patients need a staged plan over several months.",
  },
  {
    q: "Is anesthesia required?",
    a: "For many acne scar procedures, a topical numbing cream is enough. Some deeper procedures may need additional comfort measures, which are discussed before treatment.",
  },
  {
    q: "How will I know my treatment is successful?",
    a: "We track progress with standardised photographs, texture changes, fewer active breakouts, lighter pigment and smoother scars. Improvement should be visible over time, not just after one session.",
  },
  {
    q: "How long will the effects last after the last session?",
    a: "Acne scar treatment results are generally long-lasting, provided new acne is controlled. If you develop more acne after treatment, it can lead to new scarring. Following your prescribed medication, skincare and maintenance plan helps protect your results.",
  },
  {
    q: "Will I be given any medicine after the procedure?",
    a: "Some procedures are followed by supportive medicines or skincare to reduce irritation and protect healing. The exact aftercare plan depends on the treatment you receive.",
  },
  {
    q: "Can acne scars be removed completely?",
    a: "Honest answer: no protocol erases scars 100%. With a correctly combined plan most patients see 60–85% improvement in scar depth, texture and shadowing. We show you standardised photographs at every review so progress is measurable, not marketing.",
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
