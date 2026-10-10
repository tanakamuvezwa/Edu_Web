// Future Link Education — Official Dataset & Structure (Direct from PDF & Benchmark)

export const CURRENCIES = {
  USD: { symbol: '$', rate: 1, label: 'USD ($)' },
};

// 1. Home Page: "Why Students Choose Future Link" (Page 2)
export const CORE_SERVICES_TABLE = [
  {
    id: 'admissions',
    service: 'University Admissions',
    icon: 'GraduationCap',
    description: 'Find the right university and program tailored to your career and budget.',
    highlight: '70+ Top Partner Universities'
  },
  {
    id: 'visa',
    service: 'Visa Assistance',
    icon: 'ShieldCheck',
    description: 'Guidance throughout your Turkish student visa application process.',
    highlight: '98.4% Visa Success Rate'
  },
  {
    id: 'accommodation',
    service: 'Accommodation',
    icon: 'Home',
    description: 'Get help arranging suitable student dormitories or private flats.',
    highlight: 'Safe & Verified Dorms'
  },
  {
    id: 'pickup',
    service: 'Airport Pickup',
    icon: 'Plane',
    description: "We'll greet you at the airport and help you get settled when you arrive.",
    highlight: 'VIP Welcome in Istanbul'
  },
  {
    id: 'support',
    service: 'Student Support',
    icon: 'Users',
    description: 'Banking, health insurance, SIM card, and comprehensive settlement assistance.',
    highlight: 'Full On-Ground Concierge'
  }
];

// 2. Study in Turkey: "Why Turkey" (Page 3)
export const WHY_TURKEY_POINTS = [
  {
    title: 'Internationally Recognized Degrees',
    desc: 'European Higher Education Area (Bologna Process) diploma supplement valid across Europe and the globe.',
    icon: 'Award'
  },
  {
    title: '100% English-Taught Programs',
    desc: 'Extensive undergraduate and master programs taught in English with zero Turkish language prerequisite.',
    icon: 'Globe'
  },
  {
    title: 'Affordable Tuition & Living',
    desc: 'European living standards and medical facilities at a fraction of UK, US, or Western European costs.',
    icon: 'Coins'
  },
  {
    title: 'Vibrant Multicultural Student Life',
    desc: 'Study where East meets West in Istanbul, hosting over 300,000 international students from 180+ countries.',
    icon: 'Sparkles'
  },
  {
    title: 'Strategic Eurasian Gateway',
    desc: 'Bridge between Europe, Africa, and Asia, offering unprecedented global networking and career avenues.',
    icon: 'Compass'
  },
  {
    title: 'Safe & Welcoming Environment',
    desc: 'Modern university campuses with 24/7 security, dynamic student clubs, and rich Mediterranean hospitality.',
    icon: 'ShieldCheck'
  }
];

// 3. Featured Universities (Includes Istanbul Okan Benchmark + Kent, Topkapi, Beykoz, Dogus, Gelisim, Medipol, Bahcesehir, Aydin, etc.)
// ALL TUITION IS SET TO "Contact for more" AS DIRECTED
export const UNIVERSITIES = [
  {
    id: 'okan',
    name: 'Istanbul Okan University',
    shortName: 'Okan University',
    city: 'Istanbul',
    locationType: 'Tuzla & Kadıköy, Istanbul',
    ranking: 'QS Europe #701–900',
    type: 'Foundation / Private',
    founded: 1999,
    programsCount: 271,
    degreeLevels: ["Bachelor's", "Master's", "PhD", "Associate"],
    primaryLanguages: ['English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: 'Fall 2026 Intake: Rolling Admissions',
    requirements: 'High School Diploma (WAEC / A-Levels / IB / National Diploma) + Passport. No YÖS required.',
    accommodation: 'On-campus modern dormitories (single, double & quadruple rooms with gym & dining)',
    campus: 'Spacious Tuzla campus with autonomous car research labs, full flight training school & university hospital',
    tagline: 'Leader in civil aviation, medicine, dentistry, and autonomous automotive engineering in Istanbul.',
    featured: true,
    badge: '★ Featured Benchmark in PDF',
    popularPrograms: ['Medicine (English & Turkish)', 'Dentistry (DDS)', 'Flight Training (Pilotage)', 'Software Engineering', 'Business Administration', 'Architecture'],
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'kent',
    name: 'Istanbul Kent University',
    shortName: 'Kent University',
    city: 'Istanbul',
    locationType: 'Taksim (German Hospital Campus) & Kağıthane, Istanbul',
    ranking: 'THE Impact Rankings #1001+',
    type: 'Foundation / Private',
    founded: 2016,
    programsCount: 88,
    degreeLevels: ["Bachelor's", "Master's", "Associate"],
    primaryLanguages: ['English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: 'Fall 2026 Active Admissions',
    requirements: 'High School Certificate / Transcripts + Passport copy. Direct admission.',
    accommodation: 'Partner student residences in central Taksim, Şişli & Kağıthane with 24/7 security.',
    campus: 'Historic Taksim campus in the beating heart of Istanbul alongside ultramodern Kağıthane innovation campus.',
    tagline: 'Boutique premier education in central Taksim specializing in Dentistry, Health Sciences, and Digital Arts.',
    featured: true,
    badge: 'Top for Dentistry & Health in Taksim',
    popularPrograms: ['Dentistry (DDS - English & Turkish)', 'Psychology (English)', 'Physiotherapy & Rehabilitation', 'Gastronomy & Culinary Arts', 'Political Science & IR', 'Software Engineering'],
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'topkapi',
    name: 'Istanbul Topkapı University',
    shortName: 'Topkapı University',
    city: 'Istanbul',
    locationType: 'Kazlıçeşme, Balat & Şişli, Istanbul',
    ranking: 'QS Europe Partner / T-Rank Tier 1',
    type: 'Foundation / Private',
    founded: 2016,
    programsCount: 124,
    degreeLevels: ["Bachelor's", "Master's", "Associate"],
    primaryLanguages: ['English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: 'Fall 2026 Open for International Students',
    requirements: 'High School Diploma + Transcripts with minimum 60% average. Passport copy.',
    accommodation: 'Student residences in Kazlıçeşme and Zeytinburnu near Metro & Marmaray links.',
    campus: 'Four distinct campuses across Istanbul including the historical Balat arts district and high-tech Kazlıçeşme engineering center.',
    tagline: 'Progressive university combining visionary engineering, architectural studios, and applied media sciences.',
    featured: true,
    badge: 'Leader in Tech, Design & Media',
    popularPrograms: ['Software Engineering', 'Computer Engineering', 'Architecture', 'Interior Architecture', 'International Trade & Business', 'Gastronomy'],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'beykoz',
    name: 'Beykoz University',
    shortName: 'Beykoz University',
    city: 'Istanbul',
    locationType: 'Kavacık & Beykoz, Istanbul (Asian Bosphorus)',
    ranking: 'TURKLAB Accredited & EUR-ACE Partner',
    type: 'Foundation / Private',
    founded: 2016,
    programsCount: 96,
    degreeLevels: ["Bachelor's", "Master's", "Associate"],
    primaryLanguages: ['English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: 'Rolling International Admissions 2026',
    requirements: 'High School Diploma / WAEC / A-Levels + Passport. English exam or university proficiency test.',
    accommodation: 'Affiliated student dorms overlooking the Bosphorus Strait with quick campus transit.',
    campus: 'Scenic multi-campus hub in Kavacık next to Fatih Sultan Mehmet bridge with flight simulation labs and logistics terminals.',
    tagline: 'Internationally recognized authority in logistics, aviation management, software engineering, and digital games.',
    featured: true,
    badge: 'Premier Aviation & Logistics Hub',
    popularPrograms: ['Civil Aviation Management', 'Software Engineering (English)', 'Computer Engineering', 'International Logistics & Transport', 'Digital Game Design', 'Interior Architecture'],
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'dogus',
    name: 'Doğuş University',
    shortName: 'Doğuş University',
    city: 'Istanbul',
    locationType: 'Dudullu & Çengelköy, Istanbul (Asian Side)',
    ranking: 'THE WUR #1201+ / Top 50 in Turkey',
    type: 'Foundation / Private',
    founded: 1997,
    programsCount: 142,
    degreeLevels: ["Bachelor's", "Master's", "PhD"],
    primaryLanguages: ['100% English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: '2026/2027 Priority Intake',
    requirements: 'High School Graduation Certificate + official grades. Recognized international certifications.',
    accommodation: 'Modern student halls located 5 minutes from Dudullu campus with full board amenities.',
    campus: 'Two major campuses in Dudullu and scenic Çengelköy with 60+ engineering research laboratories and moot court halls.',
    tagline: 'Over 27 years of academic distinction delivering rigorous English-medium engineering, business, and law degrees.',
    featured: true,
    badge: '27+ Years of Academic Distinction',
    popularPrograms: ['Computer Engineering (English)', 'Industrial Engineering', 'Mechanical Engineering', 'International Relations (English)', 'Psychology (English)', 'Law'],
    imageUrl: 'https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'gelisim',
    name: 'Istanbul Gelisim University (İGÜ)',
    shortName: 'Istanbul Gelisim',
    city: 'Istanbul',
    locationType: 'Avcılar, Istanbul (E-5 Metrobus Hub)',
    ranking: 'THE Impact Rankings #1 in Turkey / QS Europe',
    type: 'Foundation / Private',
    founded: 2008,
    programsCount: 325,
    degreeLevels: ["Bachelor's", "Master's", "PhD", "Associate"],
    primaryLanguages: ['100% English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: 'Fall 2026 Intake Actively Enrolling',
    requirements: 'High School Diploma + Passport copy. Direct institutional entry without YÖS.',
    accommodation: 'High-rise university residential towers with 24/7 security, fitness suites, and dining.',
    campus: 'Mega campus in Avcılar housing 130+ laboratories, supersonic wind tunnels, aircraft flight simulators, and comprehensive sports complexes.',
    tagline: "Turkey's undisputed leader in international accreditations (65+ AQAS, ABET, AHPGS certifications) and aviation training.",
    featured: true,
    badge: '#1 in Turkey for Global Accreditations',
    popularPrograms: ['Aeronautical Engineering', 'Aircraft Maintenance & Pilotage', 'Dentistry (DDS)', 'Civil Engineering', 'Software Engineering', 'Gastronomy & Culinary Arts'],
    imageUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'medipol',
    name: 'Istanbul Medipol University',
    shortName: 'Medipol University',
    city: 'Istanbul',
    locationType: 'Kavacık & Haliç, Istanbul',
    ranking: 'QS WUR #701–850',
    type: 'Foundation / Private',
    founded: 2009,
    programsCount: 103,
    degreeLevels: ["Bachelor's", "Master's", "PhD"],
    primaryLanguages: ['English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: 'Fall 2026 Intake Open',
    requirements: 'High school graduation transcripts + English proficiency (or on-campus test)',
    accommodation: 'Luxury on-campus female & male dorms with private study hubs',
    campus: 'Mega Medipol University Hospital in Bağcılar + Bosphorus Kavacık Tech Campus',
    tagline: "Turkey's highest-rated private medical & healthcare education institution.",
    featured: true,
    badge: '#1 for Medicine & Dentistry',
    popularPrograms: ['Human Medicine (MD)', 'Dentistry (DDS)', 'Pharmacy (PharmD)', 'Biomedical Engineering', 'International Trade'],
    imageUrl: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'bahcesehir',
    name: 'Bahçeşehir University (BAU)',
    shortName: 'Bahçeşehir (BAU)',
    city: 'Istanbul',
    locationType: 'Beşiktaş (Bosphorus Waterfront)',
    ranking: 'QS WUR #801–1000',
    type: 'Foundation / Private',
    founded: 1998,
    programsCount: 224,
    degreeLevels: ["Bachelor's", "Master's", "PhD"],
    primaryLanguages: ['100% English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: 'Applications Open for 2026',
    requirements: 'High School Diploma + Passport',
    accommodation: 'Partner residences in Beşiktaş, Mecidiyeköy & Kadıköy',
    campus: 'Iconic waterfront campus right on the Bosphorus Strait in central Istanbul',
    tagline: 'Global educational powerhouse with satellite campuses in Berlin, D.C., and Batumi.',
    featured: true,
    badge: 'Top for Tech & Global Campus',
    popularPrograms: ['Software Engineering', 'Artificial Intelligence', 'Medicine', 'Digital Game Design', 'Economics'],
    imageUrl: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'aydin',
    name: 'Istanbul Aydın University (İAÜ)',
    shortName: 'Aydın University',
    city: 'Istanbul',
    locationType: 'Florya, Istanbul',
    ranking: 'QS WUR #1201–1400',
    type: 'Foundation / Private',
    founded: 2003,
    programsCount: 218,
    degreeLevels: ["Bachelor's", "Master's", "Associate"],
    primaryLanguages: ['English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: 'Fall 2026 Active',
    requirements: 'High school certificate, transcripts, passport',
    accommodation: 'Modern student dorm complex with 1,000+ bed capacity',
    campus: 'Massive techno-hub campus directly on the Istanbul Metrobus line',
    tagline: "Turkey's largest international student community with 8,000+ foreign scholars.",
    featured: true,
    badge: 'Highest International Enrollment',
    popularPrograms: ['Dentistry', 'Medicine', 'Software Engineering', 'Aviation Management', 'Architecture'],
    imageUrl: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'istinye',
    name: 'İstinye University (İSÜ)',
    shortName: 'İstinye University',
    city: 'Istanbul',
    locationType: 'Vadi Istanbul & Topkapı',
    ranking: 'QS Europe #651–700',
    type: 'Foundation / Private',
    founded: 2015,
    programsCount: 162,
    degreeLevels: ["Bachelor's", "Master's"],
    primaryLanguages: ['English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: 'Fall 2026 Open',
    requirements: 'High School Diploma + transcripts',
    accommodation: 'Luxury private residences near Vadi Istanbul',
    campus: 'Brand new ultra-modern Vadi Istanbul high-tech campus',
    tagline: 'Backed by MLPCare healthcare group (Liv Hospital and Medical Park hospitals).',
    featured: false,
    badge: 'Liv Hospital & Medical Park Clinical Base',
    popularPrograms: ['Medicine (Liv Hospital)', 'Dentistry', 'Software Engineering', 'Molecular Biology'],
    imageUrl: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'altinbas',
    name: 'Altınbaş University',
    shortName: 'Altınbaş University',
    city: 'Istanbul',
    locationType: 'Mahmutbey & Bakırköy',
    ranking: 'THE WUR #1501+',
    type: 'Foundation / Private',
    founded: 2008,
    programsCount: 106,
    degreeLevels: ["Bachelor's", "Master's", "PhD"],
    primaryLanguages: ['English', 'Turkish'],
    tuitionRange: 'Contact for more',
    tuitionDisplay: 'Contact for more',
    scholarshipRate: 'Contact for more',
    deadlines: 'Priority Scholarship Quotas Open',
    requirements: 'High School Diploma',
    accommodation: 'Dedicated university residences with free shuttle service',
    campus: 'Specialized health sciences campus in Bakırköy + engineering in Mahmutbey',
    tagline: 'Unbeatable scholarship accessibility with students from over 100 countries.',
    featured: false,
    badge: 'Premier International Campus',
    popularPrograms: ['Medicine', 'Dentistry', 'Pharmacy', 'Electrical Engineering', 'International Relations'],
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80'
  }
];

// 5. Visa & Immigration: "From Admission to Arrival — We’re With You" (Page 4)
export const VISA_IMMIGRATION_SERVICES = [
  {
    title: 'Turkish Student Visa Assistance',
    desc: 'Step-by-step guidance on consular requirements, scheduling your appointment at the Turkish Embassy or VFS Global center.',
    icon: 'FileText'
  },
  {
    title: 'Residence Permit Assistance (İkamet)',
    desc: 'Full assistance with your official Turkish student residence permit card (e-İkamet), insurance, and provincial immigration filing.',
    icon: 'ShieldCheck'
  },
  {
    title: 'Document Preparation & Sworn Translation',
    desc: 'Certified Turkish translations, apostille guidance, and notarization needed for legal university registration.',
    icon: 'CheckCircle2'
  },
  {
    title: 'Appointment Guidance',
    desc: 'Careful pre-checking of all financial statements, sponsorship affidavits, and official acceptance paperwork.',
    icon: 'Calendar'
  },
  {
    title: 'Health Insurance Assistance',
    desc: 'Procurement of mandatory Turkish student health insurance policies meeting all official Göç İdaresi regulations.',
    icon: 'HeartHandshake'
  },
  {
    title: 'Tax / Residence Process Support',
    desc: 'Obtaining your Turkish Tax Number (Vergi Numarası) and Ministry of Education equivalency (Denklik Belgesi).',
    icon: 'Receipt'
  }
];

// 6. Student Services: "Everything You Need Before You Arrive" (Page 4)
export const STUDENT_SERVICES = [
  {
    title: 'Accommodation Guidance',
    desc: 'Safe, verified student dormitories or private shared apartments close to your university campus.',
    icon: 'Home',
    color: 'from-blue-500/20 to-sky-500/10'
  },
  {
    title: 'Airport Pickup ✈️',
    desc: 'Our representative greets you at Istanbul or Sabiha Gökçen Airport and transfers you safely to your residence.',
    icon: 'Plane',
    color: 'from-amber-500/20 to-yellow-500/10'
  },
  {
    title: 'SIM Card Assistance',
    desc: 'Instant 5G Turkish SIM card setup (Turkcell / Vodafone) on your first day so you stay connected with family.',
    icon: 'Smartphone',
    color: 'from-emerald-500/20 to-teal-500/10'
  },
  {
    title: 'Bank Account Assistance',
    desc: 'Personal escort to open an international student Turkish bank account with multi-currency debit card.',
    icon: 'CreditCard',
    color: 'from-purple-500/20 to-indigo-500/10'
  },
  {
    title: 'Comprehensive Health Insurance',
    desc: 'Full insurance policy activation giving you access to state and private hospitals across Turkey.',
    icon: 'Shield',
    color: 'from-rose-500/20 to-pink-500/10'
  },
  {
    title: 'Transportation Guidance',
    desc: 'Issuance of the subsidized student Istanbulkart giving you unlimited subway, tram, bus, and ferry access for ~$10/mo.',
    icon: 'Navigation',
    color: 'from-cyan-500/20 to-blue-500/10'
  },
  {
    title: 'Student Orientation & Campus Welcome',
    desc: 'In-person campus registration accompany, orientation walk, campus tour, and student club connections.',
    icon: 'Compass',
    color: 'from-violet-500/20 to-purple-500/10'
  }
];

// 7. About Future Link: Mission, Vision, Values (Page 4)
export const ABOUT_FUTURE_LINK = {
  whoWeAre: 'Future Link Education is an international education consultancy helping students take the next step toward studying and building their future in Turkey.',
  mission: 'To make international education simpler, more accessible and more supportive for students.',
  vision: 'To become a trusted education partner connecting students from Africa and other international markets with educational opportunities in Turkey.',
  values: [
    { title: 'Integrity', desc: 'Uncompromising honesty and ethical counseling at every touchpoint.' },
    { title: 'Student First', desc: 'Every decision and university recommendation centers on the student\'s future.' },
    { title: 'Professionalism', desc: 'Fast, certified, and officially licensed university representation.' },
    { title: 'Transparency', desc: 'Official direct university representation and transparent admission criteria.' },
    { title: 'Growth', desc: 'Empowering ambitious students to become global leaders in their fields.' }
  ]
};

// 8. Why Future Link? "More Than an Application" (Pages 4–5: 6-Step Journey)
export const WHY_FUTURE_LINK_JOURNEY = [
  {
    step: '01',
    name: 'Discover',
    role: 'We understand your goals.',
    details: 'One-on-one consultation to understand your academic background, career ambitions, and family budget.'
  },
  {
    step: '02',
    name: 'Choose',
    role: 'We help you identify suitable programs.',
    details: 'Custom shortlist of top-ranked Turkish universities with guaranteed institutional scholarship options.'
  },
  {
    step: '03',
    name: 'Apply',
    role: 'We manage your application process.',
    details: 'Document pre-screening, direct portal submission, and securing your official offer letter within 24–48 hours.'
  },
  {
    step: '04',
    name: 'Prepare',
    role: 'We assist with visa and pre-arrival requirements.',
    details: 'Full consular visa dossier, sworn translation, embassy briefing, and flight coordination.'
  },
  {
    step: '05',
    name: 'Arrive',
    role: 'We help you settle in Turkey.',
    details: 'Airport welcome, safe transport to student dormitories, SIM card, and local bank account setup.'
  },
  {
    step: '06',
    name: 'Start Your Journey',
    role: 'You begin your studies with support behind you.',
    details: 'Final in-person campus enrollment, student residence permit (İkamet), and ongoing advisory.'
  }
];

// Contact details (Updated as specifically requested by user)
export const CONTACT_INFO = {
  headline: 'Contact Us on :',
  label: 'Contact Us on :',
  contactPerson: 'Future Link Admissions Team',
  phone: '+90 537 058 96 32',
  phoneDisplay: '+90 537 058 96 32',
  whatsappNumber: '+90 537 058 96 32',
  whatsappRaw: '905370589632',
  email: 'clemensclaude8@gmail.com',
  officeLocation: 'Gardenia Plaza, Ataşehir Blv., Istanbul, Türkiye',
  whatsappSuggestedMessage: "Hello Future Link, I am interested in studying in Turkey. Please assist me with admissions and university options.",
  web3formsKey: '6ac3ba8a-ddf0-4100-91ad-3294ae894b8a'
};

export const WEB3FORMS_ACCESS_KEY = '6ac3ba8a-ddf0-4100-91ad-3294ae894b8a';
