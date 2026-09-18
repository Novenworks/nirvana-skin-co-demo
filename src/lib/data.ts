export interface ServiceItem {
  id: string;
  name: string;
  tagline: string;
  duration: string;
  price: string;
  category: 'facials' | 'corrective' | 'body' | 'teeth' | 'consultation';
  concern: ('clarity' | 'hydration' | 'texture' | 'maintenance')[];
  description: string;
  modalitiesIncluded: string[];
  image: string;
  badge?: string;
  combBookingUrl: string;
}

export interface ReviewItem {
  author: string;
  published: string;
  rating: number;
  text: string;
  treatmentMentioned?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'appointments' | 'treatments' | 'policies' | 'first-timers';
}

export const BUSINESS_INFO = {
  name: "Nirvana Skin Co.",
  founder: "Stephanie",
  title: "Licensed Medical Aesthetician",
  experience: "5+ Years of Advanced Clinical Skincare",
  tagline: "Skincare, customized to where you are now.",
  supportingCopy: "Personalized facials and advanced skincare in Rancho Cucamonga, with thoughtful guidance from consultation through aftercare.",
  address: "10737 Laurel St Suite 280",
  city: "Rancho Cucamonga",
  state: "CA",
  zip: "91730",
  fullAddress: "10737 Laurel St Suite 280, Rancho Cucamonga, CA 91730",
  phone: "(909) 504-9341",
  phoneFormatted: "(909) 504-9341",
  phoneNumeric: "9095049341",
  rating: "4.9",
  reviewCount: 31,
  bookingUrl: "https://nirvanaskinco.comb.works/services",
  combBookingUrl: "https://nirvanaskinco.comb.works/services",
  instagramUrl: "https://www.instagram.com/nirvanaskinco/",
  yelpUrl: "https://www.yelp.com/biz/nirvana-skin-rancho-cucamonga-8",
  tiktokUrl: "https://www.tiktok.com/@nirvanaskinco",
  mapsUrl: "https://www.google.com/maps?q=10737+Laurel+St+Suite+280,+Rancho+Cucamonga,+CA+91730",
  hours: [
    { day: "Monday", hours: "10:30 AM – 12:30 PM", status: "open" },
    { day: "Tuesday", hours: "10:30 AM – 7:00 PM", status: "open" },
    { day: "Wednesday", hours: "9:00 AM – 7:00 PM", status: "open" },
    { day: "Thursday", hours: "9:00 AM – 7:00 PM", status: "open" },
    { day: "Friday", hours: "9:00 AM – 6:00 PM", status: "open" },
    { day: "Saturday", hours: "9:00 AM – 3:00 PM", status: "open" },
    { day: "Sunday", hours: "Closed", status: "closed" },
  ],
  amenities: [
    "Private dedicated treatment suite",
    "Tailored playlist & relaxing ambiance",
    "Complimentary refreshments & drinks",
    "Free on-site parking lot",
    "Wheelchair accessible",
    "Kid friendly environment",
    "Flexible payment options (Affirm, Klarna, Apple Pay, Cards)"
  ]
};

export const SERVICES: ServiceItem[] = [
  {
    id: "new-client-consultation",
    name: "New Client Consultation",
    tagline: "The essential starting point for personalized skin therapy",
    duration: "1 Hour",
    price: "$50.00",
    category: "consultation",
    concern: ["clarity", "hydration", "texture", "maintenance"],
    description: "Designed for first-time clients, this session sets the foundation for your skin journey at Nirvana. Includes a comprehensive skin analysis, lifestyle & routine evaluation, and custom treatment roadmap. May include a gentle mini-treatment (cleanse, light exfoliation, targeted mask) so your esthetician can observe how your skin responds in real time.",
    modalitiesIncluded: ["Skin Analysis", "Gentle Cleanse", "Light Exfoliation", "Targeted Mask", "Treatment Plan"],
    image: "/images/service-consultation.webp",
    badge: "Recommended Starting Point",
    combBookingUrl: "https://nirvanaskinco.comb.works/services"
  },
  {
    id: "nirvana-glow-60",
    name: "Nirvana Glow 60",
    tagline: "Our signature one-hour restorative & corrective facial",
    duration: "1 Hour",
    price: "$200.00",
    category: "facials",
    concern: ["clarity", "hydration", "maintenance"],
    description: "A full hour of intentional skin therapy designed to bring your skin and energy back into balance. Begins with a double cleanse, gentle exfoliation, and warm steam to soften and prepare the skin. Extractions are performed as needed, followed by a customized mask and professional modalities chosen for your skin's immediate condition.",
    modalitiesIncluded: ["Double Cleanse", "Steam & Extractions", "Custom Mask", "Targeted Modality (LED / Microderm / Dermaplane)", "Nourishing Serums & SPF"],
    image: "/images/service-glow60.webp",
    badge: "Signature Treatment",
    combBookingUrl: "https://nirvanaskinco.comb.works/services"
  },
  {
    id: "nirvana-glow-90",
    name: "Nirvana Glow 90",
    tagline: "Extended therapeutic ritual with multi-modality layering",
    duration: "1 Hour 30 Min",
    price: "$250.00",
    category: "facials",
    concern: ["hydration", "texture", "maintenance"],
    description: "An extended, deeply therapeutic experience for elevated results and unhurried care. Includes everything in the 60-minute facial plus additional time for layered advanced modalities — sculpting facial massage, LED therapy, lymphatic drainage, ultrasonic infusion, and high-frequency rejuvenation.",
    modalitiesIncluded: ["Double Cleanse & Steam", "Extractions", "Sculpting Massage", "Ultrasonic Infusion", "High Frequency / LED", "Custom Treatment Boost"],
    image: "/images/service-glow90.webp",
    badge: "Most Comprehensive",
    combBookingUrl: "https://nirvanaskinco.comb.works/services"
  },
  {
    id: "nirvana-glow-45",
    name: "Nirvana Glow 45",
    tagline: "Express radiance reset for busy schedules",
    duration: "45 Minutes",
    price: "$150.00",
    category: "facials",
    concern: ["hydration", "maintenance"],
    description: "A curated boost of radiance delivering fresh, luminous skin in less time. Perfect for midday resets, pre-event touch-ups, or maintaining your glow between comprehensive appointments. Includes gentle cleanse, light exfoliation, targeted extractions, and custom mask with zero downtime.",
    modalitiesIncluded: ["Gentle Cleanse", "Light Exfoliation", "Targeted Extractions", "Brightening Mask", "Finishing Moisture"],
    image: "/images/service-glow45.webp",
    combBookingUrl: "https://nirvanaskinco.comb.works/services"
  },
  {
    id: "custom-chemical-peel",
    name: "Custom Chemical Peel",
    tagline: "Tailored exfoliation for clarity, texture & cellular renewal",
    duration: "1 Hour",
    price: "Custom",
    category: "corrective",
    concern: ["clarity", "texture"],
    description: "Carefully chosen clinical blend and strength matched specifically to your skin sensitivity and goals. Targets stubborn congestion, uneven tone, fine lines, and texture without overwhelming the skin barrier.",
    modalitiesIncluded: ["Barrier Prep", "Layered Acid Solution", "Neutralization & Soothing", "Barrier Support Serum"],
    image: "/images/service-peel.webp",
    combBookingUrl: "https://nirvanaskinco.comb.works/services"
  },
  {
    id: "perfect-derma-peel",
    name: "The Perfect Derma Chemical Peel",
    tagline: "Clinical-grade medium depth transformative peel",
    duration: "1 Hour",
    price: "$350.00",
    category: "corrective",
    concern: ["clarity", "texture"],
    description: "A medium-depth medical-grade peel designed to transform skin from the inside out. Formulated with glutathione, kojic acid, TCA, and vitamin C to target hyperpigmentation, sun damage, and stubborn texture with predictable, gentle shedding over several days.",
    modalitiesIncluded: ["Clinical Degreasing", "Multi-pass Layering", "Post-Peel Take Home Kit", "Recovery Instructions"],
    image: "/images/service-derma-peel.webp",
    badge: "Clinical Favorite",
    combBookingUrl: "https://nirvanaskinco.comb.works/services"
  },
  {
    id: "microneedling-facial",
    name: "Microneedling Facial",
    tagline: "Collagen induction therapy for firmness & scar refinement",
    duration: "1 Hour",
    price: "$250.00",
    category: "corrective",
    concern: ["texture"],
    description: "Includes a full preparation facial. Controlled micro-channels stimulate natural collagen and elastin production, smoothing acne scars, refining enlarged pores, and softening fine lines for plumper, firmer skin.",
    modalitiesIncluded: ["Prep Facial Cleanse", "Precision Microneedling", "Hyaluronic Acid Infusion", "Calming Peptide Finish"],
    image: "/images/service-microneedling.webp",
    badge: "Collagen Induction",
    combBookingUrl: "https://nirvanaskinco.comb.works/services"
  },
  {
    id: "nirvana-teen-glow",
    name: "Nirvana Teen Glow",
    tagline: "Gentle, educational skincare for young & changing skin",
    duration: "45 Minutes",
    price: "$135.00",
    category: "facials",
    concern: ["clarity", "maintenance"],
    description: "Addresses congestion, breakouts, and sensitivity with a supportive approach. Includes purifying cleanse, soft exfoliation, gentle extractions, soothing anti-bacterial high-frequency or LED, and practical guidance on building healthy skincare habits.",
    modalitiesIncluded: ["Purifying Cleanse", "Soft Exfoliation", "Gentle Extractions", "High Frequency / LED", "Habit Coaching"],
    image: "/images/service-teen.webp",
    combBookingUrl: "https://nirvanaskinco.comb.works/services"
  },
  {
    id: "nirvana-body-glow",
    name: "Nirvana Body Glow (Back / Chest)",
    tagline: "Deep purifying care for hard-to-reach areas",
    duration: "1 Hour",
    price: "From $150.00",
    category: "body",
    concern: ["clarity", "texture"],
    description: "A restorative treatment for the back or chest. Clarifying cleanse, deep exfoliation, warm steam, extractions, and a refining mask combined with high-frequency or LED to treat breakouts and texture before vacations or events.",
    modalitiesIncluded: ["Clarifying Cleanse", "Deep Exfoliation & Steam", "Extractions", "Refining Mask", "High-Frequency / LED"],
    image: "/images/service-body-glow.webp",
    combBookingUrl: "https://nirvanaskinco.comb.works/services"
  },
  {
    id: "teeth-whitening-60",
    name: "Professional Teeth Whitening (60 Min)",
    tagline: "FDA-compliant brightening with vegan, cruelty-free gel",
    duration: "1 Hour 30 Min",
    price: "$200.00",
    category: "teeth",
    concern: ["maintenance"],
    description: "Brighten your smile safely and effectively. Using certified vegan, cruelty-free professional bleaching agents with sensitive-safe options to lift surface stains and discoloration.",
    modalitiesIncluded: ["Enamel Prep", "Vegan Whitening Gel", "LED Acceleration", "Post-Shade Assessment"],
    image: "/images/service-teeth.webp",
    combBookingUrl: "https://nirvanaskinco.comb.works/services"
  }
];

export const CONCERN_PATHWAYS = [
  {
    id: "clarity",
    name: "Clarity & Congestion",
    icon: "Sparkles",
    summary: "For breakouts, clogged pores, inflammation, and excess oil.",
    description: "Gentle extractions, oxygenating therapy, high-frequency, and tailored chemical peels to calm irritation and clear buildup without stripping your protective skin barrier.",
    suggestedServices: ["new-client-consultation", "custom-chemical-peel", "nirvana-glow-60", "nirvana-teen-glow"]
  },
  {
    id: "hydration",
    name: "Deep Hydration & Barrier",
    icon: "Droplets",
    summary: "For tightness, dryness, dull complexion, and compromised barrier.",
    description: "Infusing active moisture, soothing hydrojelly masks, ultrasonic replenishment, and calming botanicals to restore a radiant, comfortable glow.",
    suggestedServices: ["nirvana-glow-60", "nirvana-glow-90", "nirvana-glow-45"]
  },
  {
    id: "texture",
    name: "Texture & Cellular Renewal",
    icon: "Layers",
    summary: "For uneven texture, acne scarring, sun spots, and fine lines.",
    description: "Targeted dermaplaning, microneedling, and clinical-grade chemical peels that stimulate natural collagen and reveal smooth, renewed skin.",
    suggestedServices: ["microneedling-facial", "perfect-derma-peel", "custom-chemical-peel"]
  },
  {
    id: "maintenance",
    name: "Routine Glow & Maintenance",
    icon: "Smile",
    summary: "For ongoing wellness, event preparation, and regular resets.",
    description: "Consistent monthly facials, teeth whitening, and curated seasonal boosts that keep your skin balanced, fresh, and confident bare-faced.",
    suggestedServices: ["nirvana-glow-60", "nirvana-glow-45", "teeth-whitening-60"]
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    author: "Desi Aguayo",
    published: "Google Review",
    rating: 5,
    text: "I had such an amazing experience with Stephanie. It’s been years since I’ve had a facial, and this was such a treat! Not only was Stephanie the kindest person ever, but the service she provided was amazing! My face feels so much lighter and breathable. My skin is glowing and now I feel a bit more confident in a bare face! Thank you Stephanie, I will be coming back soon!",
    treatmentMentioned: "Custom Facial"
  },
  {
    author: "Amanda Palma",
    published: "Google Review",
    rating: 5,
    text: "Stephanie is so sweet! She makes you feel comfortable and explains everything. She does a quick consultation to ask about your concerns and skin care routine and gives advice and recommendations. Her office is so cute and cozy! Will be returning for more treatments. I received a facial and teeth whitening and my teeth and skin look great!",
    treatmentMentioned: "Facial & Teeth Whitening"
  },
  {
    author: "Barbie Mercado",
    published: "Google Review",
    rating: 5,
    text: "Stephanie is the best! She is flexible to help me schedule, even last minute which is so helpful for a mom of 2 littles like me. I’ve now had a facial, teeth whitening and microneedling with Stephanie and plan on doing more. Stephanie makes you feel like an instant friend making it easy to relax and enjoy services.",
    treatmentMentioned: "Microneedling & Facial"
  },
  {
    author: "Tara Stone",
    published: "Google Review",
    rating: 5,
    text: "Went to Nirvana Skin Co over the weekend for a facial and Stephanie is amazing! She didn't make me feel bad at all for not taking care of my skin and not having a facial for years. Instead she got me on a plan for my skin that was feasible for me. She is very knowledgeable and able to answer any skincare questions.",
    treatmentMentioned: "Consultation & Facial"
  },
  {
    author: "Elizabeth Hagman",
    published: "Google Review",
    rating: 5,
    text: "I had such a wonderful experience! Both procedures were individualized and attentive. Everything down to the smallest detail such as the products used to even the music played was customized to my preference. My teeth came out much lighter and my skin came out hydrated and pore free. After the procedures I was given free samples and an at-home care kit.",
    treatmentMentioned: "Personal Facial & Teeth Whitening"
  },
  {
    author: "Samantha Eickhoff",
    published: "Google Review",
    rating: 5,
    text: "Do yourself a favor & book your appointment with Stephanie! I’m 5 days post my first facial and my skin is GLOWING! She is so knowledgeable & just made you feel at ease which automatically built the trust you want with someone who is dealing with the skin on your face!",
    treatmentMentioned: "Nirvana Glow Facial"
  },
  {
    author: "Janella Mendez",
    published: "Google Review",
    rating: 5,
    text: "Stephanie is truly the most amazing esthetician I have ever gone to. She has a smooth touch and is so gentle with your skin. She gave me amazing tips on how to continue to have the best skin I can have. She truly cares about her craft and puts her clients first.",
    treatmentMentioned: "Custom Skin Therapy"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "I haven't had a facial in a long time (or ever). Where should I start?",
    answer: "The New Client Consultation ($50) or the Nirvana Glow 60 ($200) is the best starting place. We begin by reviewing your current routine, assessing your skin barrier, and selecting the exact exfoliation, hydration, and modality blend for where your skin is today—with zero judgment.",
    category: "first-timers"
  },
  {
    question: "How do you customize each treatment?",
    answer: "No two facials at Nirvana are identical. Stephanie evaluates your skin under magnification before starting and dynamically adapts the cleansers, enzymes, peeling strength, extractions, masks, and modalities (such as LED therapy, ultrasonic infusion, high frequency, microdermabrasion, or dermaplaning) to what your skin requires that day.",
    category: "treatments"
  },
  {
    question: "What is your appointment and cancellation policy?",
    answer: "Nirvana operates strictly by appointment to give each client undivided, unhurried care. Because your appointment time is reserved exclusively for you, no-shows are charged full service fee, and reschedules require 50% advance deposit to secure your new time.",
    category: "policies"
  },
  {
    question: "Where is the studio located and what is parking like?",
    answer: "We are located at 10737 Laurel St Suite 280 in Rancho Cucamonga, CA 91730. Free and convenient parking is always available in the attached on-site lot.",
    category: "appointments"
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, American Express, Discover, Apple Pay, Google Pay, Venmo, Zelle, Cash, and flexible split-payment options through Affirm and Klarna on qualifying bookings.",
    category: "policies"
  },
  {
    question: "Is there downtime after treatments like chemical peels or microneedling?",
    answer: "Our standard facials (Nirvana Glow 45/60/90) have zero downtime—you leave glowing and refreshed. For corrective treatments like The Perfect Derma Peel or Microneedling, mild redness or light peeling occurs over 3–5 days. We provide comprehensive aftercare instructions and take-home samples with every corrective service.",
    category: "treatments"
  },
  {
    question: "Do you offer membership or package savings?",
    answer: "Yes! The annual Nirvana Skin Studio Membership ($400/yr) provides 20% off all treatment services and 15% off professional retail skincare products throughout the year.",
    category: "policies"
  }
];

export const FAQ_ITEMS = FAQS;
