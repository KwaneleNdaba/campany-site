import { Building2, Home, Factory, Store, Building, Briefcase, Leaf, Sun, Droplets, Recycle, Lightbulb, PenTool, HardHat, Key, MapPin, Phone, Mail, Clock } from "lucide-react";

export const mockStats = [
  { value: 30, label: "Years Experience", suffix: "+" },
  { value: 100, label: "Developments", suffix: "+" },
  { value: 15, label: "Cities Served", suffix: "" },
  { value: 5, label: "Billion Value", suffix: "B+" },
];

export const mockCarouselItems = [
  {
    id: 1,
    title: "Groot Phesantekraal View",
    status: "TRADING",
    location: "Durbanville",
    description: "This new mixed-use development comprises of a Convenience Shopping Centre of approximately 30,000m²",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "The Apex Tower",
    status: "DEVELOPMENT",
    location: "Sandton CBD",
    description: "A premium commercial office space designed for the modern workforce, featuring sustainable architecture.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Marina Bay Complex",
    status: "COMPLETED",
    location: "Cape Town",
    description: "Luxury residential apartments offering panoramic ocean views and world-class amenities.",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop",
  }
];

export const mockCategories = [
  {
    title: "Office",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
    link: "/commercial"
  },
  {
    title: "Retail",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop",
    link: "/retail"
  },
  {
    title: "Industrial",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
    link: "/industrial"
  },
  {
    title: "Residential",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
    link: "/residential"
  },
  {
    title: "Motor & Other",
    image: "https://images.unsplash.com/photo-1562141961-eeab5913d2e8?q=80&w=2072&auto=format&fit=crop",
    link: "/mixed-use"
  }
];

export const mockOffices = [
  {
    city: "Stellenbosch",
    type: "Head Office",
    address: ["1st Floor,", "16 Mill Street,", "Stellenbosch Central,", "7600."],
    phone: "021 141 2370"
  },
  {
    city: "Johannesburg",
    type: "Regional Office",
    address: ["1st Floor Block D,", "Hertford Office Park,", "90 Bekker Road,", "Midrand,", "1686."],
    phone: "010 142 9000"
  },
  {
    city: "Pretoria",
    type: "Regional Office",
    address: ["Irene Link Building B,", "Office Suites 11,", "7 Impala Avenue,", "Doringkloof, Centurion,", "0157."],
    phone: "012 072 0428"
  },
  {
    city: "International",
    type: "Global Office",
    address: ["Summerfield House,", "Rue des Eturs,", "Castel,", "Guernsey,", "GY5 7DT."],
    phone: ""
  }
];

export const mockTeam = [
  {
    name: "John Doe",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop"
  },
  {
    name: "Jane Smith",
    role: "Chief Operations Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop"
  },
  {
    name: "Michael Johnson",
    role: "Head of Development",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    name: "Sarah Williams",
    role: "Lead Architect",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop"
  }
];

export const mockServices = [
  {
    title: "Commercial Development",
    description: "State-of-the-art office spaces and corporate headquarters designed for modern businesses.",
    icon: Building2,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Residential Communities",
    description: "Premium residential estates and luxury apartment complexes that redefine modern living.",
    icon: Home,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Industrial Parks",
    description: "Efficient, scalable, and strategically located industrial facilities and logistics hubs.",
    icon: Factory,
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Retail Spaces",
    description: "Engaging shopping centers and retail environments that attract and retain customers.",
    icon: Store,
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Mixed-Use Precincts",
    description: "Integrated developments combining live, work, and play elements to create thriving urban ecosystems.",
    icon: Building,
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop",
  },
  {
    title: "Commercial Property Leasing",
    description: "Strategic leasing solutions connecting businesses with premium commercial real estate opportunities.",
    icon: Briefcase,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
  },
];

export const mockProjects = [
  {
    title: "The Apex Tower",
    type: "Commercial",
    location: "Sandton CBD",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Lumina Retail Hub",
    type: "Retail",
    location: "Waterfall City",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Nexus Logistics Park",
    type: "Industrial",
    location: "Midrand",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Oasis Residences",
    type: "Residential",
    location: "Rosebank",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Eco Park Estate",
    type: "Mixed-Use",
    location: "Pretoria",
    image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "Marina Bay Complex",
    type: "Residential",
    location: "Cape Town",
    image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Innovation Hub",
    type: "Commercial",
    location: "Stellenbosch",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "Gateway Mall",
    type: "Retail",
    location: "Durban",
    image: "https://images.unsplash.com/photo-1562141961-eeab5913d2e8?q=80&w=2072&auto=format&fit=crop",
  }
];

// Detailed project data for individual project pages
export const mockProjectDetails = [
  {
    id: 1,
    title: "The Apex Tower",
    category: "Commercial",
    location: "Sandton CBD",
    status: "Completed",
    description: "A landmark 45-story mixed-use development featuring Grade A office spaces, premium retail outlets, and luxury apartments. The Apex Tower sets a new standard for sustainable urban living with its innovative design and world-class amenities.",
    details: {
      area: "125,000 m²",
      units: "320 Units",
      completion: "December 2023",
      architect: "Studio Arc"
    },
    features: [
      "LEED Platinum Certification",
      "Smart Building Technology",
      "Energy-efficient HVAC Systems",
      "Rainwater Harvesting",
      "Solar Panel Installation"
    ],
    amenities: [
      "24/7 Security & Concierge",
      "Co-working Spaces",
      "Rooftop Garden",
      "Underground Parking",
      "High-speed Elevators"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 2,
    title: "Lumina Retail Hub",
    category: "Retail",
    location: "Waterfall City",
    status: "Ongoing",
    description: "A premium shopping destination spanning 80,000 square meters, featuring over 200 retail outlets, entertainment facilities, and dining experiences. Lumina Retail Hub combines modern architecture with sustainable design principles.",
    details: {
      area: "80,000 m²",
      units: "200+ Stores",
      completion: "June 2024",
      architect: "Design Collective"
    },
    features: [
      "Natural Lighting Design",
      "Energy Management System",
      "Waste Recycling Program",
      "Green Roof Technology",
      "Electric Vehicle Charging"
    ],
    amenities: [
      "Multi-level Parking",
      "Kids Play Areas",
      "Food Courts",
      "Cinema Complex",
      "Event Spaces"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567958451986-2de427a4a0be?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Nexus Logistics Park",
    category: "Industrial",
    location: "Midrand",
    status: "Completed",
    description: "A state-of-the-art logistics and warehousing facility designed for maximum efficiency. Features advanced automation systems, temperature-controlled storage, and direct highway access for seamless distribution operations.",
    details: {
      area: "95,000 m²",
      units: "12 Warehouses",
      completion: "March 2023",
      architect: "Industrial Architects"
    },
    features: [
      "Automated Storage Systems",
      "Temperature Control Zones",
      "High Bay Warehousing",
      "LED Lighting Throughout",
      "Advanced Security Systems"
    ],
    amenities: [
      "Truck Parking Bays",
      "Loading Docks",
      "Office Spaces",
      "Staff Facilities",
      "24/7 Operations Support"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1494412685616-a5d310fbb07d?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Oasis Residences",
    category: "Residential",
    location: "Rosebank",
    status: "Completed",
    description: "Luxury apartments nestled in the heart of Rosebank, offering panoramic city views and resort-style living. Features include concierge services, infinity pool, and landscaped gardens spanning two hectares.",
    details: {
      area: "55,000 m²",
      units: "180 Apartments",
      completion: "September 2023",
      architect: "Urban Living Design"
    },
    features: [
      "Smart Home Integration",
      "Floor-to-ceiling Windows",
      "Premium Finishes",
      "Balconies & Terraces",
      "Energy Star Appliances"
    ],
    amenities: [
      "Infinity Pool & Spa",
      "Fitness Center",
      "Landscaped Gardens",
      "Residents Lounge",
      "Secure Parking"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1502672260066-6bc35f0bec f?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 5,
    title: "Eco Park Estate",
    category: "Mixed-Use",
    location: "Pretoria",
    status: "Ongoing",
    description: "An innovative mixed-use development combining residential, commercial, and recreational spaces with extensive green areas. Designed to promote community living while maintaining environmental sustainability.",
    details: {
      area: "145,000 m²",
      units: "450+ Units",
      completion: "November 2024",
      architect: "Green Space Architects"
    },
    features: [
      "Net-Zero Energy Design",
      "Integrated Public Transport",
      "Urban Farming Spaces",
      "Bicycle-friendly Infrastructure",
      "Grey Water Systems"
    ],
    amenities: [
      "Community Parks",
      "Retail Precinct",
      "Sports Facilities",
      "Childcare Centers",
      "Medical Suites"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=2071&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Marina Bay Complex",
    category: "Residential",
    location: "Cape Town",
    status: "Completed",
    description: "Waterfront luxury living with breathtaking ocean views. This exclusive development features penthouse suites, private marina access, and world-class amenities designed for discerning residents.",
    details: {
      area: "72,000 m²",
      units: "240 Units",
      completion: "July 2023",
      architect: "Coastal Designs"
    },
    features: [
      "Ocean-facing Units",
      "Smart Climate Control",
      "Premium Interior Design",
      "Private Balconies",
      "Hurricane-resistant Glass"
    ],
    amenities: [
      "Private Marina",
      "Beach Access",
      "Waterfront Dining",
      "Spa & Wellness Center",
      "Yacht Club"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1558036117-15d82a90b9b1?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2053&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 7,
    title: "Innovation Hub",
    category: "Commercial",
    location: "Stellenbosch",
    status: "Ongoing",
    description: "A cutting-edge tech campus designed to foster innovation and collaboration. Features flexible workspaces, advanced IT infrastructure, and sustainable building practices that inspire creativity.",
    details: {
      area: "68,000 m²",
      units: "85 Office Suites",
      completion: "October 2024",
      architect: "Tech Space Design"
    },
    features: [
      "Fiber Optic Connectivity",
      "Modular Office Design",
      "Collaborative Spaces",
      "Green Building Materials",
      "Advanced Ventilation"
    ],
    amenities: [
      "Conference Centers",
      "Cafeteria & Dining",
      "Innovation Labs",
      "Outdoor Work Areas",
      "Secure Data Centers"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1577412647305-991150c7d163?q=80&w=2070&auto=format&fit=crop"
    ]
  },
  {
    id: 8,
    title: "Gateway Mall",
    category: "Retail",
    location: "Durban",
    status: "Completed",
    description: "South Africa's premier retail destination featuring over 300 stores, entertainment complexes, and dining options. An architectural marvel that combines aesthetics with functionality and sustainability.",
    details: {
      area: "110,000 m²",
      units: "300+ Stores",
      completion: "May 2023",
      architect: "Retail Architecture Group"
    },
    features: [
      "Skylight Design",
      "Central Air Conditioning",
      "Digital Wayfinding",
      "Sustainable Materials",
      "Water Feature Installations"
    ],
    amenities: [
      "IMAX Cinema",
      "Food Court",
      "Kids Entertainment",
      "Valet Parking",
      "Event Venues"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1562141961-eeab5913d2e8?q=80&w=2072&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?q=80&w=2071&auto=format&fit=crop"
    ]
  }
];

export const mockTestimonials = [
  {
    quote: "Their commitment to quality and sustainability is unmatched. The new office precinct has transformed our corporate culture.",
    author: "Sarah Jenkins",
    role: "CEO, Global Tech Solutions",
    company: "Tech Hub Precinct",
  },
  {
    quote: "From concept to completion, the team demonstrated exceptional professionalism and delivered our retail center ahead of schedule.",
    author: "David Chen",
    role: "Managing Director, Retail Group",
    company: "Lumina Shopping Centre",
  },
  {
    quote: "The industrial logistics park they developed for us has significantly optimized our supply chain operations. Highly recommended.",
    author: "Michael Ross",
    role: "Operations Head, Logistics Inc.",
    company: "Nexus Logistics Park",
  },
];

export const mockSustainabilityInitiatives = [
  {
    title: "Green Architecture",
    description: "Designing buildings that harmonize with their environment.",
    icon: Leaf,
    progress: 95,
  },
  {
    title: "Energy Efficiency",
    description: "Implementing smart systems to minimize carbon footprint.",
    icon: Sun,
    progress: 88,
  },
  {
    title: "Water Conservation",
    description: "Advanced harvesting and recycling water management.",
    icon: Droplets,
    progress: 92,
  },
  {
    title: "Sustainable Materials",
    description: "Sourcing eco-friendly and recycled construction materials.",
    icon: Recycle,
    progress: 85,
  },
];

export const mockProcessSteps = [
  {
    title: "Concept & Planning",
    description: "Feasibility studies, site acquisition, and initial conceptualization.",
    icon: Lightbulb,
  },
  {
    title: "Design & Architecture",
    description: "Detailed architectural design, engineering, and obtaining necessary approvals.",
    icon: PenTool,
  },
  {
    title: "Construction",
    description: "Execution with rigorous quality control, safety standards, and timeline management.",
    icon: HardHat,
  },
  {
    title: "Delivery & Management",
    description: "Handover, tenant coordination, and ongoing property management.",
    icon: Key,
  },
];

export const mockContactInfo = [
  {
    icon: MapPin,
    title: "Head Office",
    details: "123 Innovation Drive, Sandton, 2196",
  },
  {
    icon: Phone,
    title: "Phone",
    details: "+27 (0) 11 555 0123",
  },
  {
    icon: Mail,
    title: "Email",
    details: "info@modernspaces.co.za",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: "Mon - Fri: 08:00 - 17:00",
  },
];

export const mockAwards2025 = [
  {
    title: "Parkdene Boulevard",
    category: "Retail Developments (Large Regional)",
    image: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2126&auto=format&fit=crop"
  },
  {
    title: "Irene Link Building E",
    category: "Commercial Office Development",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop"
  }
];

export const mockAwards2024 = [
  {
    title: "AVBOB - Irene Link Building D",
    category: "Corporate Office Development",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
  },
  {
    title: "Eyethu Shopping Centre",
    category: "Overall Heritage & Retail Development",
    image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?q=80&w=1974&auto=format&fit=crop"
  }
];

export const mockAccreditations = [
  {
    title: "Monte Circle Building H",
    rating: "4 Star Green Star Office Rating",
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=2067&auto=format&fit=crop"
  },
  {
    title: "35 Lower Long",
    rating: "4 Star Green Star Office Rating",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop"
  }
];

export const mockMemberships = [
  "GBSA", "SAPOA", "SACSC", "NHBRC", "WCPDF", "PPRA"
];

export const mockFeatures = [
  "Sustainable Building Practices",
  "Innovative Architectural Design",
  "End-to-End Project Management",
  "Premium Quality Materials",
];
