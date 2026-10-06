export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  gallery: string[];
  video?: string;
  tags: string[];
  href: string;
  featured?: boolean;
  featuredOrder?: number;
  featuredBg?: string;
  gridSpan?: string; // Tailwind grid span class for asymmetric grid
  overview?: string;
  features?: string[];
}

export interface ExperienceItemData {
  id: string;
  role: string;
  company: string;
  date: string;
  location?: string;
  description: string[];
  isCurrent?: boolean;
}

export interface ToolItem {
  id: string;
  name: string;
  iconName: string;
  category: string;
  bgTint?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export const PERSONAL_INFO = {
  name: "Manik Shrestha",
  title: "UI/UX Designer",
  location: "Kathmandu, Nepal",
  availability: "Available for work",
  bio: "I'm Manik Shrestha, a UI/UX designer focused on creating intuitive, modern, and user-centered digital experiences through thoughtful UI, interaction, and prototyping.",
  aboutText: "I'm a UI/UX designer focused on creating clear, intuitive and engaging digital experiences. I enjoy turning complex ideas into simple interfaces and collaborating with developers to bring designs to life.",
  avatar: "/assets/image/new profile.jpg",
  avatarSecondary: "/assets/image/profile.jpg",
  logo: "/assets/image/logo.png",
  heroBg: "/assets/image/background image.png",
  heroPhoneBg: "/assets/image/background image for phone.png",
  cvUrl: "/assets/image/Manik's CV.pdf",
  email: "manikshrestha.ux@gmail.com",
};

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/manik-shrestha-349624295/",
    icon: "linkedin",
  },
  {
    name: "GitHub",
    url: "https://github.com/Manikkkk",
    icon: "github",
  },
  {
    name: "Dribbble",
    url: "https://dribbble.com/Manik9",
    icon: "dribbble",
  },
];

export const FEATURED_MINI_WORK = [
  {
    id: "learnaxis-mini",
    title: "LearnAxis Platform",
    image: "/assets/image/LearnAxis/main.png",
    href: "/projects/learnaxis",
  },
  {
    id: "bl-party-mini",
    title: "BL Party Palace",
    image: "/assets/image/BL Party Palace/Desktop - 1.png",
    href: "/projects/bl-party-palace",
  },
  {
    id: "shambala-mini",
    title: "Shambala Luxury Hotel",
    image: "/assets/image/Shambala Hotel webpage/Hotel.png",
    href: "/projects/shambala",
  },
  {
    id: "sneaker-mini",
    title: "Sneaker E-Commerce",
    image: "/assets/image/E-commerce shoes/shoes first page.png",
    href: "/projects/sneaker-ecommerce",
  },
  {
    id: "thar-mini",
    title: "Thar DriveMax",
    image: "/assets/image/Thar webpage/thar webpage.png",
    href: "/projects/thar-drivemax",
  },
  {
    id: "viewthali-mini",
    title: "Viewthali Resort",
    image: "/assets/image/Viewthali/first.png",
    href: "/projects/viewthali",
  },
];

export const DESIGN_TOOLS: ToolItem[] = [
  { id: "figma", name: "Figma", iconName: "figma", category: "Design & Prototyping" },
  { id: "framer", name: "Framer", iconName: "framer", category: "Interactive Design" },
  { id: "photoshop", name: "Adobe Photoshop", iconName: "photoshop", category: "Visual Design" },
  { id: "canva", name: "Canva", iconName: "canva", category: "Graphic Design" },
  { id: "vscode", name: "VS Code", iconName: "code", category: "Frontend Dev" },
  { id: "penpot", name: "Penpot", iconName: "penpot", category: "Open Source Design" },
  { id: "figjam", name: "FigJam", iconName: "figjam", category: "Ideation & Research" },
  { id: "illustrator", name: "Adobe Illustrator", iconName: "illustrator", category: "Vector Artwork" },
];

export const PROJECTS: Project[] = [
  {
    id: "learnaxis",
    title: "LearnAxis Education Platform",
    category: "EdTech & Learning Management",
    description: "Leading educational systems platform built to deliver seamless, accessible digital learning, interactive dashboards, and course management.",
    image: "/assets/image/LearnAxis/main.png",
    gallery: [
      "/assets/image/LearnAxis/main.png",
      "/assets/image/LearnAxis/Animated Landing page.png",
      "/assets/image/LearnAxis/Dashboard.png",
      "/assets/image/LearnAxis/Category.png",
      "/assets/image/LearnAxis/first.jpg",
      "/assets/image/LearnAxis/second.png",
      "/assets/image/LearnAxis/third.png",
      "/assets/image/LearnAxis/forth.jpg",
      "/assets/image/LearnAxis/fifth.jpg",
      "/assets/image/LearnAxis/sixth.jpg",
      "/assets/image/LearnAxis/seventh.png",
      "/assets/image/LearnAxis/eight.png",
      "/assets/image/LearnAxis/last.jpg",
    ],
    video: "/assets/image/LearnAxis/screen record.mp4",
    tags: ["Figma", "EdTech", "UI/UX Design", "UX Research", "Web & Mobile"],
    href: "/projects/learnaxis",
    gridSpan: "col-span-1 md:col-span-7",
    overview: "LearnAxis is an end-to-end digital learning management system crafted to bridge instructors and students through fluid course tracking, modular learning cards, and real-time dashboard analytics.",
    features: [
      "Interactive Dashboard analytics for student performance & milestone tracking",
      "Category discovery with filtered course carousels and rich video previews",
      "Adaptive dark & light interface tokens optimized for long study sessions",
      "High-fidelity mobile screens for learning on the go",
    ],
  },
  {
    id: "bl-party-palace",
    title: "BL Party Palace & Venue Booking",
    category: "Venue Reservation & Management",
    description: "All-in-one venue reservation system for banquet halls, party palaces, and corporate event hosting with interactive dashboard analytics.",
    image: "/assets/image/BL Party Palace/Desktop - 1.png",
    gallery: [
      "/assets/image/BL Party Palace/Desktop - 1.png",
      "/assets/image/BL Party Palace/dashboard.png",
      "/assets/image/BL Party Palace/About.png",
      "/assets/image/BL Party Palace/Services.png",
      "/assets/image/BL Party Palace/Gallery.png",
      "/assets/image/BL Party Palace/Reviews.png",
    ],
    tags: ["UI Design", "Dashboard", "Venue Booking", "Figma", "Prototype"],
    href: "/projects/bl-party-palace",
    gridSpan: "col-span-1 md:col-span-5",
    overview: "BL Party Palace digitizes event booking with an intuitive guest portal to explore packages, catering options, and real-time hall availability alongside a robust venue manager control center.",
    features: [
      "Comprehensive event hall filtering and package customized estimator",
      "Host dashboard detailing booking schedules, revenue metrics, and inquiry leads",
      "Customer reviews showcase and high-resolution photo gallery",
    ],
  },
  {
    id: "viewthali",
    title: "Viewthali Retreat and Resort",
    category: "Luxury Hospitality Experience",
    description: "'Where the Valley Meets the Sky' — An immersive, high-end booking web application for a premier luxury retreat in Nepal.",
    image: "/assets/image/Viewthali/first.png",
    gallery: [
      "/assets/image/Viewthali/first.png",
      "/assets/image/Viewthali/second.png",
      "/assets/image/Viewthali/third.png",
      "/assets/image/Viewthali/fourth.png",
      "/assets/image/Viewthali/fifth.png",
      "/assets/image/Viewthali/sixth.png",
      "/assets/image/Viewthali/seventh.png",
    ],
    tags: ["UI/UX Design", "Web Design", "Hospitality", "Prototyping"],
    href: "/projects/viewthali",
    gridSpan: "col-span-1 md:col-span-6",
    overview: "Designed to convey luxury and peace, Viewthali's web platform blends atmospheric hero imagery with streamlined suite reservation workflows and curated guest experiences.",
    features: [
      "Hero experience featuring mountain views and room highlights",
      "Multi-step room and cottage reservation flow",
      "Dining, wellness spa, and excursion activity showcase",
    ],
  },
  // {
  //   id: "shambala",
  //   title: "Shambala Luxury Hotel",
  //   category: "Hotel & Guest Concierge",
  //   description: "Welcome to Our Luxurious Hotel & Resort — Elegant digital presence focusing on seamless room reservation and guest concierge.",
  //   image: "/assets/image/Shambala Hotel webpage/Hotel.png",
  //   gallery: [
  //     "/assets/image/Shambala Hotel webpage/Hotel.png",
  //     "/assets/image/Shambala Hotel webpage/first page.png",
  //     "/assets/image/Shambala Hotel webpage/second.png",
  //     "/assets/image/Shambala Hotel webpage/third page.png",
  //     "/assets/image/Shambala Hotel webpage/Hotel1.png",
  //     "/assets/image/Shambala Hotel webpage/Hotel2.png",
  //     "/assets/image/Shambala Hotel webpage/Screenshot 2025-06-30 185503.png",
  //     "/assets/image/Shambala Hotel webpage/Screenshot 2025-06-30 185600.png",
  //     "/assets/image/Shambala Hotel webpage/Screenshot 2025-06-30 185655.png",
  //     "/assets/image/Shambala Hotel webpage/Screenshot 2025-06-30 205815.png",
  //   ],
  //   tags: ["UX Research", "UI Design", "Mobile & Web", "Figma"],
  //   href: "/projects/shambala",
  //   gridSpan: "col-span-1 md:col-span-6",
  //   overview: "Shambala Luxury Hotel delivers a refined web portal built for high conversion. It enables travelers to compare boutique room suites, review amenity packages, and request personalized concierge services.",
  //   features: [
  //     "Elegant typography and golden-ratio grid layouts",
  //     "Dynamic date range picker and suite comparison tools",
  //     "Interactive amenity tour with full-screen gallery views",
  //   ],
  // },
  {
    id: "movie-ticket",
    title: "BSR Movie Ticket Booking",
    category: "Entertainment Mobile & Web Portal",
    description: "Interactive cinema booking portal featuring real-time seat selection, movie trailers, poster galleries, and instant ticket generation.",
    image: "/assets/image/BSR Movie Ticket Booking/movie ticket webpage.png",
    gallery: [
      "/assets/image/BSR Movie Ticket Booking/movie ticket webpage.png",
      "/assets/image/BSR Movie Ticket Booking/movie.png",
      "/assets/image/BSR Movie Ticket Booking/first page of movie.png",
      "/assets/image/BSR Movie Ticket Booking/second page of movie.png",
      "/assets/image/BSR Movie Ticket Booking/last page of movie.png",
      "/assets/image/BSR Movie Ticket Booking/mobile view of movie.png",
    ],
    tags: ["Mobile", "UI/UX Design", "Prototyping", "Cinema App"],
    href: "/projects/movie-ticket",
    gridSpan: "col-span-1 md:col-span-5",
    overview: "BSR Movie Ticket Booking reimagines moviegoing with dark-mode aesthetic cinema screens, interactive seat maps, snack concessions checkout, and instant mobile QR boarding passes.",
    features: [
      "Interactive screen seat selection with status indicators (Available, Selected, Reserved)",
      "Now Showing and Upcoming movie filter rails with trailer popups",
      "Seamless mobile view optimized for rapid venue entry",
    ],
  },
  {
    id: "sneaker-ecommerce",
    title: "Sneaker E-Commerce & Mobile App",
    category: "Footwear & Retail Mobile App",
    description: "Minimalist online footwear store emphasizing crisp product hierarchy, fluid mobile app flows, and interactive sneaker previews.",
    image: "/assets/image/E-commerce shoes/shoes first page.png",
    gallery: [
      "/assets/image/E-commerce shoes/shoes first page.png",
      "/assets/image/E-commerce shoes/shoes mobile app.png",
      "/assets/image/E-commerce shoes/shoes second page.png",
    ],
    tags: ["E-Commerce", "UI Design", "Mobile App", "Prototype"],
    href: "/projects/sneaker-ecommerce",
    gridSpan: "col-span-1 md:col-span-7",
    overview: "Designed for sneakerheads and modern shoppers, this project pairs bold typography and spacious product cards with intuitive cart drawers, 360-degree shoe mockups, and quick checkout.",
    features: [
      "Mobile-first shopping interface optimized for single-thumb navigation",
      "Colorway selector and size selector with stock availability",
      "Fluid checkout workflow with guest or saved profile payment methods",
    ],
  },
  {
    id: "thar-drivemax",
    title: "Thar DriveMax Web Experience",
    category: "Automotive UI/UX Showcase",
    description: "High-octane automotive showcase web application designed for off-road enthusiasts, featuring interactive vehicle specs and booking.",
    image: "/assets/image/Thar webpage/thar webpage.png",
    gallery: [
      "/assets/image/Thar webpage/thar webpage.png",
      "/assets/image/Thar webpage/front page of  thar.png",
      "/assets/image/Thar webpage/Second page of Thar.png",
      "/assets/image/Thar webpage/third page of thar.png",
      "/assets/image/Thar webpage/four page of thar.png",
      "/assets/image/Thar webpage/last page of thar.png",
      "/assets/image/Thar webpage/Thar1.png",
    ],
    tags: ["UI Design", "Automotive", "Landing Page", "Interactive"],
    href: "/projects/thar-drivemax",
    gridSpan: "col-span-1 md:col-span-6",
    overview: "Thar DriveMax captures the rugged spirit of adventure vehicles through bold dark UI themes, immersive trim customizers, test drive scheduler, and spec breakdowns.",
    features: [
      "Rugged dark theme design with vibrant accent colors",
      "Interactive trim level comparison (4x4 vs 4x2, Hardtop vs Soft top)",
      "Test drive booking and dealership locator map UI",
    ],
  },
  // {
  //   id: "hotel-booking-admin",
  //   title: "Hotel Booking Admin & Control Center",
  //   category: "SaaS Platform & Admin Controls",
  //   description: "Dual-interface web platform with tenant administrative action portals, user auth flows, and room availability management.",
  //   image: "/assets/image/Hotel booking/User login1.png",
  //   gallery: [
  //     "/assets/image/Hotel booking/User login1.png",
  //     "/assets/image/Hotel booking/User action.png",
  //     "/assets/image/Hotel booking/Admin login1.png",
  //     "/assets/image/Hotel booking/Admin action.png",
  //   ],
  //   tags: ["SaaS", "Admin Dashboard", "UX Workflows", "Web App"],
  //   href: "/projects/hotel-booking-admin",
  //   gridSpan: "col-span-1 md:col-span-6",
  //   overview: "An enterprise-grade administrative dashboard and user auth portal designed for hotel managers to control room inventories, approve user actions, monitor guest check-ins, and generate daily reports.",
  //   features: [
  //     "Clear separation of User login and Admin action views",
  //     "Real-time room occupancy status and booking schedule grid",
  //     "Audit logs, role-based access permission screens, and analytics",
  //   ],
  // },
  {
    id: "brand-media",
    title: "Visual Media & Motion Concepts",
    category: "Motion & Hardware Design",
    description: "Showcase of conceptual 3D product visualizer mockups, game controller interfaces, VR designs, and brand commercial videos.",
    image: "/assets/image/Main.png",
    gallery: [
      // "/assets/image/Main.png",
      "/assets/image/MacBook Pro 2- 1.png",
      "/assets/image/Frame1.png",
      "/assets/image/Apartment.png",
      "/assets/image/Controller.png",
      // "/assets/image/VR.png",
    ],
    video: "/assets/image/cocacola brand.mp4",
    tags: ["Visual Design", "Motion Graphics", "3D Rendering", "Video"],
    href: "/projects/brand-media",
    gridSpan: "col-span-1 md:col-span-12",
    overview: "A creative collection highlighting Manik's versatile visual design capabilities across 3D device framing, hardware UI concepts (VR & Gaming controller), architectural visualization, and motion video edits.",
    features: [
      "High-resolution 3D MacBook Pro device mockups and frame composites",
      "Futuristic gaming controller UI and VR headset interface concepts",
      "Brand promotional video demonstration and motion design",
    ],
  },
];

export const EXPERIENCES: ExperienceItemData[] = [
  {
    id: "gurkha-labs",
    role: "Associate UI/UX Designer",
    company: "Gurkha Labs",
    date: "Aug 2026 – Present",
    isCurrent: true,
    description: [
      "Designed and refined responsive web interfaces for client and internal software products.",
      "Conducted UI/UX reviews, heuristic evaluations, and continuous design iterations.",
      "Collaborated closely with frontend developers to translate Figma designs into responsive, accessible web interfaces.",
      "Created design systems, interactive prototypes, and modular reusable components in Figma.",
    ],
  },
  {
    id: "seinxera-trainee",
    role: "UI/UX Designer Trainee",
    company: "Innovation Center Nepal (Seinxera)",
    date: "Apr 2026 – Jun 2026",
    description: [
      "Developed high-fidelity wireframes and interactive prototypes for web and mobile client applications.",
      "Conducted user research, affinity mapping, and usability testing to validate design concepts.",
      "Standardized UI component libraries and visual tokens to streamline handoff to engineering.",
    ],
  },
  {
    id: "seinxera-intern",
    role: "UI/UX Designer Intern",
    company: "Innovation Center Nepal (Seinxera)",
    date: "Jan 2026 – Mar 2026",
    description: [
      "Assisted senior product designers in visual layout creation, icon crafting, and visual asset production.",
      "Documented design system guidelines and component state specs for cross-functional alignment.",
    ],
  },
];

export const ABOUT_INFO = {
  heading: "A Little About Me",
  paragraph: "I'm a UI/UX designer focused on creating clear, intuitive and engaging digital experiences. I enjoy turning complex ideas into simple interfaces and collaborating with developers to bring designs to life.",
  details: [
    { label: "Location", value: "Kathmandu, Nepal" },
    { label: "Focus", value: "UI/UX Design" },
    { label: "Core Tools", value: "Figma, Framer, Canva, Adobe Photoshop" },
    { label: "Interests", value: "Product Design, Interaction, Animation, Prototyping" },
  ],
};
