export interface ProjectFeature {
  number?: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  layout?: "full" | "half" | "third";
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  summary?: string;
  image: string;
  cover?: string;
  gallery: string[];
  galleryItems?: GalleryItem[];
  video?: string;
  tags: string[];
  href: string;
  featured?: boolean;
  featuredOrder?: number;
  featuredBg?: string;
  gridSpan?: string;
  overview?: string;
  problem?: string | {
    intro: string;
    points: Array<{
      heading: string;
      detail: string;
    }>;
  };
  solution?: string | {
    intro: string;
    points: Array<{
      heading: string;
      detail: string;
    }>;
  };
  outcome?: string | {
    intro: string;
    points: Array<{
      heading: string;
      detail: string;
    }>;
  };
  features?: string[];
  featuresList?: ProjectFeature[];
  role?: string;
  timeline?: string;
  platform?: string;
  tools?: string[];
  accent?: string;
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
  email: "manikshrestha452@gmail.com",
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
    summary: "A modular learning management system bridging instructors and students through intuitive course tracking, dashboard analytics, and dark/light design tokens.",
    role: "UI/UX Designer",
    timeline: "2 Weeks",
    platform: "Web",
    tools: ["Figma", "Canva", "Prototyping"],
    accent: "#8B7355",
    image: "/assets/image/LearnAxis/main.png",
    cover: "/assets/image/LearnAxis/main.png",
    video: "/assets/image/LearnAxis/screen record.mp4",
    tags: ["Figma", "UI/UX Design", "UX Research", "Web"],
    href: "/projects/learnaxis",
    gridSpan: "col-span-1 md:col-span-7",
    overview: "LearnAxis is a comprehensive educational platform that connects students with quality learning resources and interactive courses. The project aimed to create an engaging, user-friendly interface that makes online learning accessible and enjoyable for students of all ages.",
    problem: {
      intro:
        "Online learners were dropping out of courses before finishing them. This was a redesign of an existing learning platform that suffered from outdated UI patterns and fragmented user flows.",
      points: [
        {
          heading: "Confusing Navigation",
          detail:
            "Students struggled to discover courses and find their way around, which slowed them down before learning even began.",
        },
        {
          heading: "No Clear Sense of Progress",
          detail:
            "Learners couldn't easily see how far they had come across courses, which weakened their motivation to continue.",
        },
        {
          heading: "Little Interaction or Feedback",
          detail:
            "Learning felt isolated. There were few ways to ask questions, get feedback, or learn with peers.",
        },
      ],
    },
    solution: {
      intro:
        "I designed a learning experience that reduces effort, shows progress, and keeps students engaged.",
      points: [
        {
          heading: "Simple Dashboard",
          detail:
            "One home view puts current courses, next steps, and progress together, so students always know what to do next.",
        },
        {
          heading: "Visible Progress Tracking",
          detail:
            "Visual milestones and progress indicators give learners a clear picture of how far they've come and what's left.",
        },
        {
          heading: "Community and Peer Learning",
          detail:
            "Discussion forums, study groups, and live Q&A give learners support and feedback.",
        },
        {
          heading: "Motivating Gamification",
          detail:
            "Badges and rewards celebrate milestones to encourage consistency and maintain learning momentum.",
        },
      ],
    },
    outcome: {
      intro:
        "This platform was launched as a pilot with 200+ students across 3 institutions. We evaluated success through completion rates, engagement metrics, and qualitative feedback sessions.",
      points: [
        {
          heading: "Clearer Learning Journey",
          detail:
            "In usability testing, 18 of 20 participants found their course progress and next lesson without assistance, compared to 8 of 20 with the previous design.",
        },
        {
          heading: "Higher Engagement Potential",
          detail:
            "Early metrics showed a 30% increase in course completion rates and 45% more daily active users engaging with community features.",
        },
        {
          heading: "Scalable Design Foundation",
          detail:
            "A consistent set of dashboard, course, and progress components that can support new features and both web and mobile.",
        },
      ],
    },
    featuresList: [
      {
        number: "01",
        title: "Interactive Analytics Dashboard",
        description: "Real-time student performance graphs, assignment deadlines, and milestone tracking widgets.",
      },
      {
        number: "02",
        title: "Filtered Category Carousels",
        description: "Seamless course discovery with filter rails, instructor ratings, and inline video previews.",
      },
      // {
      //   number: "03",
      //   title: "Adaptive Dark & Light Tokens",
      //   description: "Accessible WCAG AA contrast tokens tailored for extended reading and evening study sessions.",
      // },
      {
        number: "03",
        title: "Progress Tracking",
        description: "Visual analytics and milestone tracking to keep students motivated.",
      },
    ],
    galleryItems: [
      {
        src: "/assets/image/LearnAxis/main.png",
        alt: "LearnAxis Main Platform Landing Page Overview",
        caption: "Main LearnAxis Platform Landing Screen & Course Showcase",
        layout: "full",
      },
      {
        src: "/assets/image/LearnAxis/Animated Landing page.png",
        alt: "LearnAxis Animated Hero Concept Screen",
        caption: "Animated Landing Page Concept with Dynamic Hero Highlights",
        layout: "half",
      },
      {
        src: "/assets/image/LearnAxis/Dashboard.png",
        alt: "LearnAxis Student & Instructor Analytics Dashboard",
        caption: "Student & Instructor Analytics Dashboard View",
        layout: "half",
      },
      {
        src: "/assets/image/LearnAxis/first.jpg",
        alt: "LearnAxis Mobile Interface Onboarding Screen",
        caption: "Mobile App Onboarding & Course Navigation Screen",
        layout: "half",
      },
      {
        src: "/assets/image/LearnAxis/second.png",
        alt: "LearnAxis Mobile Course Lesson Video Player Screen",
        caption: "Mobile Course Content & Lesson Video Player",
        layout: "half",
      },
      {
        src: "/assets/image/LearnAxis/third.png",
        alt: "LearnAxis Mobile Student Milestone Progress Tracker Screen",
        caption: "Mobile Student Progress Tracker & Milestone Stats",
        layout: "half",
      },
      {
        src: "/assets/image/LearnAxis/seventh.png",
        alt: "LearnAxis Design Tokens UI Components Palette Screen",
        caption: "Design System UI Components, Color Palette & Type Scale",
        layout: "half",
      },
    ],
    gallery: [
      "/assets/image/LearnAxis/main.png",
      "/assets/image/LearnAxis/Animated Landing page.png",
      "/assets/image/LearnAxis/Dashboard.png",
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
  },
  {
    id: "bl-party-palace",
    title: "BL Party Palace & Venue Booking",
    category: "Venue Reservation & Management",
    description: "All-in-one venue reservation system for banquet halls, party palaces, and corporate event hosting with interactive dashboard analytics.",
    summary: "A dual-product system: a public website to promote the venue and an admin dashboard to manage bookings, payments, and analytics.",
    role: "UI/UX Designer",
    timeline: "2 Weeks",
    platform: "Web & Dashboard",
    tools: ["Figma", "Prototyping", "UI Design"],
    accent: "#8B7355",
    image: "/assets/image/BL Party Palace/dashboard.png",
    cover: "/assets/image/BL Party Palace/Desktop - 1.png",
    tags: ["UI Design", "Dashboard", "Venue Booking", "Figma", "Prototype"],
    href: "/projects/bl-party-palace",
    gridSpan: "col-span-1 md:col-span-5",
    overview: "BL Party Palace digitizes event booking with an intuitive guest portal to explore packages, catering options, and real-time hall availability alongside a robust venue manager control center.",
    problem: "BL Party Palace hosts weddings, receptions, parties, and corporate events, but it needed a modern way to promote the venue and handle bookings. Customers had no clear, premium-feeling place to see the venue and send an enquiry. Internally, the team needed one place to track bookings, advance payments, and revenue instead of managing them by hand.",
    solution: "I designed two connected products. The first is a public website that shows off the venue through an elegant visual identity, event listings, a gallery, and a simple enquiry flow. The second is an admin dashboard that gives staff booking tracking, payment and status updates, and analytics on booking trends and event performance. Both share one visual language that reflects the venue's premium positioning, and both are structured so they can grow later.",
    featuresList: [
      {
        number: "01",
        title: "Discover the venue (website)",
        description: "The visitor lands on the homepage and scrolls through the About, Services, Gallery, and Reviews sections. Visuals and social proof build trust before they commit to anything.",
      },
      {
        number: "02",
        title: "Enquire or book (website)",
        description: "A clear booking call to action leads into a short enquiry flow. The visitor picks their event type and sends their details without friction.",
      },
      {
        number: "03",
        title: "Track performance (dashboard)",
        description: "Charts show booking trends, revenue, and the breakdown of event types. This helps the venue plan around busy seasons and its most popular events.",
      },
      {
        number: "04",
        title: "Manage bookings (dashboard)",
        description: "Staff see all bookings in one place and update their status, from new enquiry to confirmed. They also record advance payments against each booking.",
      },
    ],
    outcome: {
  intro:
    "The project gave BL Party Palace a complete digital foundation: a public website that presents the venue well, and an admin dashboard that makes booking management easier.",
  points: [
    {
      heading: "Professional Brand Image",
      detail:
        "A refined visual identity across the About, Gallery, Services, and Reviews sections that matches the venue's premium positioning.",
    },
    {
      heading: "Efficient Booking Management",
      detail:
        "A clear enquiry flow for customers, and a dashboard where staff track bookings, advance payments, and status updates in one place.",
    },
    {
      heading: "Scalable and Future Ready",
      detail:
        "A consistent design system and a data-driven dashboard that can grow with new event types, features, or reporting needs.",
    },
  ],
},
    galleryItems: [
      {
        src: "/assets/image/BL Party Palace/Desktop - 1.png",
        alt: "BL Party Palace Homepage",
        caption: "Homepage with hero section and booking call-to-action",
        layout: "full",
      },
      {
        src: "/assets/image/BL Party Palace/dashboard.png",
        alt: "Admin Dashboard Overview",
        caption: "Dashboard showing booking analytics and revenue trends",
        layout: "full",
      },
      {
        src: "/assets/image/BL Party Palace/About.png",
        alt: "About Section",
        caption: "About section showcasing venue story and premium positioning",
        layout: "half",
      },
      {
        src: "/assets/image/BL Party Palace/Services.png",
        alt: "Services Section",
        caption: "Event services and package offerings",
        layout: "half",
      },
      {
        src: "/assets/image/BL Party Palace/Gallery.png",
        alt: "Venue Gallery",
        caption: "High-resolution venue photo gallery",
        layout: "half",
      },
      {
        src: "/assets/image/BL Party Palace/Reviews.png",
        alt: "Customer Reviews",
        caption: "Customer testimonials and social proof section",
        layout: "half",
      },
    ],
    gallery: [
      "/assets/image/BL Party Palace/Desktop - 1.png",
      "/assets/image/BL Party Palace/dashboard.png",
      "/assets/image/BL Party Palace/About.png",
      "/assets/image/BL Party Palace/Services.png",
      "/assets/image/BL Party Palace/Gallery.png",
      "/assets/image/BL Party Palace/Reviews.png",
    ],
  },
  {
    id: "viewthali",
    title: "Viewthali Retreat & Resort",
    category: "Luxury Hospitality Experience",
    description: "'Where the Valley Meets the Sky' — An immersive, high-end booking web application for a premier luxury retreat in Nepal.",
    summary: "One hillside page for ordering dinner and planning a stay",
    role: "UI/UX Designer & Frontend Developer",
    timeline: "2 Weeks",
    platform: "Web & Mobile",
    tools: ["Figma", "Next.js", "Tailwind CSS"],
    accent: "#8B7355",
    image: "/assets/image/Viewthali/first.png",
    cover: "/assets/image/Viewthali/first.png",
    gallery: [
      "/assets/image/Viewthali/first.png",
      "/assets/image/Viewthali/second.png",
      "/assets/image/Viewthali/third.png",
      "/assets/image/Viewthali/fourth.png",
      "/assets/image/Viewthali/fifth.png",
      "/assets/image/Viewthali/sixth.png",
      "/assets/image/Viewthali/seventh.png",
    ],
    galleryItems: [
      {
        src: "/assets/image/Viewthali/first.png",
        alt: "Viewthali Homepage Hero",
        caption: "Homepage hero with mountain valley views and resort introduction",
        layout: "full",
      },
      {
        src: "/assets/image/Viewthali/second.png",
        alt: "Food Delivery Menu",
        caption: "Interactive menu with category tabs and budget filter",
        layout: "half",
      },
      {
        src: "/assets/image/Viewthali/third.png",
        alt: "Resort Accommodation",
        caption: "Suite and cottage showcases with booking call-to-action",
        layout: "half",
      },
      {
        src: "/assets/image/Viewthali/fourth.png",
        alt: "Guest Testimonials",
        caption: "Social proof section with 4.1★ rating and review carousel",
        layout: "half",
      },
      {
        src: "/assets/image/Viewthali/fifth.png",
        alt: "WhatsApp Order Flow",
        caption: "Simplified order form connecting to WhatsApp for delivery",
        layout: "half",
      },
      {
        src: "/assets/image/Viewthali/sixth.png",
        alt: "Contact & Location",
        caption: "Contact information and map location for guests",
        layout: "half",
      },
      {
        src: "/assets/image/Viewthali/seventh.png",
        alt: "Mobile Responsive View",
        caption: "Mobile-optimized experience for on-the-go ordering",
        layout: "half",
      },
    ],
    tags: ["UI/UX Design", "Web Design", "Hospitality", "Next.js", "Live Site"],
    href: "/projects/viewthali",
    link: "https://viewthalirestaurant-website-three.vercel.app/",
    gridSpan: "col-span-1 md:col-span-6",
    overview: "Viewthali serves two very different visitors on one site: people who want food delivered tonight, and travelers deciding whether to stay overnight. Designed to convey luxury and peace, the platform blends atmospheric hero imagery with streamlined ordering and reservation workflows.",
    problem: {
      intro:
        "Viewthali serves two very different visitors on one site: people who want food delivered tonight, and travelers deciding whether to stay overnight.",
      points: [
        {
          heading: "Two Goals, One Homepage",
          detail:
            "A site that leans toward the resort loses delivery customers, and one that leans toward ordering undersells the stay experience.",
        },
        {
          heading: "Ordering Had to Be Effortless",
          detail:
            "The business had no backend or ordering system, so the ordering flow had to work with tools the owner already uses.",
        },
        {
          heading: "Trust Before Visiting",
          detail:
            "Guests choosing a hillside resort need proof it's worth the trip before they commit to a drive.",
        },
      ],
    },
    solution: {
      intro:
        "I designed a single-page experience that lets both audiences reach their goal without making them choose a path first.",
      points: [
        {
          heading: "Persistent 'Order Delivery' Button",
          detail:
            "Ordering stays one click away on every section, while the page itself leads with the resort story and scenery.",
        },
        {
          heading: "WhatsApp-Based Order Form",
          detail:
            "A short form (name, phone, address, items) generates a ready-to-send WhatsApp message, with click-to-call as a backup. No backend needed.",
        },
        {
          heading: "Budget-Friendly Menu",
          detail:
            "A menu with category tabs and a budget filter (up to Rs. 500) helps visitors find what fits quickly.",
        },
        {
          heading: "Real Social Proof",
          detail:
            "A 4.1★ rating from 75+ reviews and a testimonial carousel built from real guest feedback.",
        },
      ],
    },
    outcome: {
      intro:
        "The site launched in September 2024 and has been live for 4+ months. Success was measured through owner feedback, WhatsApp order volume, and user session analytics.",
      points: [
        {
          heading: "One Page, Two Journeys",
          detail:
            "Delivery customers and overnight guests each find their path from the same homepage. The owner reported that customers understand both offerings without confusion.",
        },
        {
          heading: "Ordering Without a Backend",
          detail:
            "A working order flow using WhatsApp and phone, so the business can take orders from day one. The restaurant receives 15-20 WhatsApp orders weekly through the site.",
        },
        {
          heading: "Foundation for Online Booking",
          detail:
            "The structure is ready for a future room-booking or reservation feature.",
        },
      ],
    },
    featuresList: [
      {
        number: "01",
        title: "Dual-Purpose Homepage",
        description: "Hero experience featuring mountain views, resort highlights, and persistent delivery ordering access.",
      },
      {
        number: "02",
        title: "WhatsApp Order Integration",
        description: "Simple form that pre-fills a WhatsApp message with order details—no database or payment gateway required.",
      },
      {
        number: "03",
        title: "Interactive Menu System",
        description: "Category filtering and budget-based search to help delivery customers find meals quickly.",
      },
      {
        number: "04",
        title: "Social Proof & Reviews",
        description: "4.1-star rating display with 75+ reviews and a testimonial carousel for building trust.",
      },
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
    summary: "From browsing to booking in a few taps",
    role: "UI/UX Designer",
    timeline: "1 Weeks",
    platform: "Web & Mobile",
    tools: ["Figma", "Prototyping", "UI Design"],
    accent: "#8B7355",
    image: "/assets/image/BSR Movie Ticket Booking/movie ticket webpage.png",
    cover: "/assets/image/BSR Movie Ticket Booking/movie ticket webpage.png",
    gallery: [
      "/assets/image/BSR Movie Ticket Booking/movie ticket webpage.png",
      "/assets/image/BSR Movie Ticket Booking/movie.png",
      "/assets/image/BSR Movie Ticket Booking/first page of movie.png",
      "/assets/image/BSR Movie Ticket Booking/second page of movie.png",
      "/assets/image/BSR Movie Ticket Booking/last page of movie.png",
      "/assets/image/BSR Movie Ticket Booking/mobile view of movie.png",
    ],
    galleryItems: [
      {
        src: "/assets/image/BSR Movie Ticket Booking/movie ticket webpage.png",
        alt: "BSR Movie Booking Homepage",
        caption: "Homepage with now showing and upcoming movie listings",
        layout: "full",
      },
      {
        src: "/assets/image/BSR Movie Ticket Booking/movie.png",
        alt: "Movie Discovery Interface",
        caption: "Movie discovery with genre filters and trailer previews",
        layout: "half",
      },
      {
        src: "/assets/image/BSR Movie Ticket Booking/first page of movie.png",
        alt: "Movie Details Page",
        caption: "Detailed movie information with ratings and showtime selection",
        layout: "half",
      },
      {
        src: "/assets/image/BSR Movie Ticket Booking/second page of movie.png",
        alt: "Interactive Seat Selection",
        caption: "Visual theater layout with real-time seat availability",
        layout: "full",
      },
      {
        src: "/assets/image/BSR Movie Ticket Booking/last page of movie.png",
        alt: "Checkout and QR Ticket",
        caption: "Payment checkout and digital QR code ticket generation",
        layout: "half",
      },
      {
        src: "/assets/image/BSR Movie Ticket Booking/mobile view of movie.png",
        alt: "Mobile Responsive Experience",
        caption: "Mobile-optimized booking flow for on-the-go users",
        layout: "half",
      },
    ],
    tags: ["Mobile", "UI/UX Design", "Prototyping", "Cinema App", "Web Design"],
    href: "/projects/movie-ticket",
    gridSpan: "col-span-1 md:col-span-5",
    overview: "BSR Movie Ticket Booking reimagines moviegoing with dark-mode aesthetic cinema screens, interactive seat maps, snack concessions checkout, and instant mobile QR boarding passes. The platform was designed to reduce friction from discovery to ticket generation.",
    problem: {
      intro:
        "Booking a movie ticket should be quick, but many booking experiences make people work for it. Research showed that users abandon bookings due to cluttered interfaces, confusing seat selection, and inconsistent mobile experiences.",
      points: [
        {
          heading: "Hard to Find the Right Movie",
          detail:
            "Moviegoers browse by mood, genre, language, and showtime, but cluttered listings make it slow to narrow down what's worth watching.",
        },
        {
          heading: "Stressful Seat Selection",
          detail:
            "Unclear seating maps and unclear availability lead to wrong picks, rushed choices, and doubts about which seats are taken.",
        },
        {
          heading: "Inconsistent Across Devices",
          detail:
            "Most people book on their phone but compare on desktop, so the experience has to feel the same on both.",
        },
      ],
    },
    solution: {
      intro:
        "I designed a responsive booking platform that guides users from discovery to a digital ticket with as few steps as possible.",
      points: [
        {
          heading: "Smart Discovery",
          detail:
            "Genre, language, rating, and showtime filters, plus trailers and details, help users decide faster.",
        },
        {
          heading: "Interactive Seat Selection",
          detail:
            "A visual theater layout shows real-time availability with color-coded states: green for available, red for taken, and blue for user-selected seats.",
        },
        {
          heading: "Streamlined Checkout",
          detail:
            "A short payment flow with multiple payment options keeps users from dropping off at the last step.",
        },
        {
          heading: "Contactless QR Tickets",
          detail:
            "Digital tickets with QR codes make entry quick and remove the need for printing.",
        },
      ],
    },
    outcome: {
      intro:
        "This was a concept project tested with 12 users through task-based usability sessions. Success was measured by task completion rate, time to book, and user satisfaction scores.",
      points: [
        {
          heading: "A Faster Booking Journey",
          detail:
            "Discovery, seat selection, and checkout fit into a 5-step flow. 11 of 12 test users completed a booking in under 3 minutes without assistance.",
        },
        {
          heading: "A Consistent Multi-Device Experience",
          detail:
            "Desktop and mobile layouts share one design language, so the experience feels the same on both. All testers successfully switched devices mid-task.",
        },
        {
          heading: "A Scalable Design System",
          detail:
            "Reusable components such as movie cards, filters, and seat maps can extend to concert bookings, sports events, or theater shows.",
        },
      ],
    },
    featuresList: [
      {
        number: "01",
        title: "Movie Discovery & Filtering",
        description: "Interactive screen with genre, language, rating, and showtime filters plus inline trailer popups.",
      },
      {
        number: "02",
        title: "Real-Time Seat Selection",
        description: "Visual theater layout with status indicators (Available, Selected, Reserved) for confident seat picking.",
      },
      {
        number: "03",
        title: "Snack Concessions Add-On",
        description: "Pre-order popcorn, drinks, and snacks during checkout to skip the queue at the cinema.",
      },
      {
        number: "04",
        title: "Digital QR Tickets",
        description: "Instant mobile QR boarding passes for contactless, paperless venue entry.",
      },
    ],
  },
  {
    id: "sneaker-ecommerce",
    title: "Sneaker E-Commerce & Mobile App",
    category: "Footwear & Retail Mobile App",
    description: "Minimalist online footwear store emphasizing crisp product hierarchy, fluid mobile app flows, and interactive sneaker previews.",
    summary: "Fast, image-first sneaker shopping built for drop culture",
    role: "UI/UX Designer & Mobile App Designer",
    timeline: "4 Weeks",
    platform: "Mobile & Web",
    tools: ["Figma", "Prototyping", "Mobile UI Design"],
    accent: "#FF6B35",
    image: "/assets/image/E-commerce shoes/shoes first page.png",
    cover: "/assets/image/E-commerce shoes/shoes first page.png",
    gallery: [
      "/assets/image/E-commerce shoes/shoes first page.png",
      "/assets/image/E-commerce shoes/shoes mobile app.png",
      "/assets/image/E-commerce shoes/shoes second page.png",
    ],
    galleryItems: [
      {
        src: "/assets/image/E-commerce shoes/shoes first page.png",
        alt: "Sneaker E-Commerce Homepage",
        caption: "Homepage with featured drops and minimalist product grid",
        layout: "full",
      },
      {
        src: "/assets/image/E-commerce shoes/shoes mobile app.png",
        alt: "Mobile App Interface",
        caption: "Mobile-first shopping interface optimized for single-thumb navigation",
        layout: "half",
      },
      {
        src: "/assets/image/E-commerce shoes/shoes second page.png",
        alt: "Product Details & Checkout",
        caption: "Product details with 360° view, colorway selector, and quick checkout",
        layout: "half",
      },
    ],
    tags: ["E-Commerce", "UI Design", "Mobile App", "Prototype", "Product Design"],
    href: "/projects/sneaker-ecommerce",
    gridSpan: "col-span-1 md:col-span-7",
    overview: "Designed for sneakerheads and modern shoppers, this project pairs bold typography and spacious product cards with intuitive cart drawers, 360-degree shoe mockups, and quick checkout. Built for the fast-paced drop culture where releases sell out in minutes.",
    problem: {
      intro:
        "Sneaker buyers shop with their eyes and move fast. Releases sell out in minutes, so a slow or cluttered shopping experience costs them the pair. Research showed that limited-edition drops require speed and visual confidence.",
      points: [
        {
          heading: "Images Matter Most",
          detail:
            "Shoppers judge sneakers by how they look. Small or hard-to-inspect photos make buyers hesitate before purchasing.",
        },
        {
          heading: "Browsing Slows Decisions",
          detail:
            "Opening a separate page for every product makes comparing options tedious, especially on a phone.",
        },
        {
          heading: "Missing Releases and Restocks",
          detail:
            "Limited drops sell out quickly, and shoppers who miss the moment lose the pair they wanted.",
        },
      ],
    },
    solution: {
      intro:
        "I designed a mobile-first shopping experience that keeps products in focus and moves buyers from discovery to checkout with minimal effort.",
      points: [
        {
          heading: "Product-First Interface",
          detail:
            "A minimalist layout with high-quality imagery, zoom, and a 360° view so shoppers can inspect shoes before buying.",
        },
        {
          heading: "Quick Preview",
          detail:
            "Key product details appear without leaving the browse page, so users can compare options without losing their place.",
        },
        {
          heading: "Smart Search and Wishlist",
          detail:
            "Filters for brand, size, color, and price narrow results quickly, and a one-tap wishlist saves favorites for later.",
        },
        {
          heading: "Drop Alerts and Easy Checkout",
          detail:
            "Notifications for new releases and restocks, plus a checkout with saved cards and addresses, help users buy before a pair sells out.",
        },
      ],
    },
    outcome: {
      intro:
        "This was a concept project validated through 8 user testing sessions with sneaker enthusiasts and e-commerce shoppers. Success was measured by task completion speed and purchase confidence ratings.",
      points: [
        {
          heading: "A Faster Path to Purchase",
          detail:
            "Discovery, preview, and checkout fit into a 4-tap flow from home to purchase confirmation. Test users completed purchases 40% faster than with traditional e-commerce layouts.",
        },
        {
          heading: "A Confident Buying Experience",
          detail:
            "Zoom, 360° view, and quick previews help shoppers feel sure about their choice before paying. 7 of 8 testers rated their purchase confidence as 'very high' (9-10/10).",
        },
        {
          heading: "A Reusable Design Foundation",
          detail:
            "Reusable components such as product cards, filter chips, and wishlist actions can extend to apparel, accessories, or any visually-driven retail category.",
        },
      ],
    },
    featuresList: [
      {
        number: "01",
        title: "Mobile-First Product Grid",
        description: "Single-thumb navigation with spacious product cards optimized for quick browsing and gesture controls.",
      },
      {
        number: "02",
        title: "360° Shoe Viewer",
        description: "Interactive 360-degree product mockups with pinch-to-zoom and colorway selector for visual confidence.",
      },
      {
        number: "03",
        title: "Quick Preview Drawer",
        description: "Product details, size selection, and stock availability appear without leaving the browse page.",
      },
      {
        number: "04",
        title: "Drop Alerts & Fast Checkout",
        description: "Push notifications for releases and restocks, plus saved payment methods for one-tap purchases.",
      },
    ],
  },
  // {
  //   id: "thar-drivemax",
  //   title: "Thar DriveMax Web Experience",
  //   category: "Automotive UI/UX Showcase",
  //   description: "High-octane automotive showcase web application designed for off-road enthusiasts, featuring interactive vehicle specs and booking.",
  //   image: "/assets/image/Thar webpage/thar webpage.png",
  //   gallery: [
  //     "/assets/image/Thar webpage/thar webpage.png",
  //     "/assets/image/Thar webpage/front page of  thar.png",
  //     "/assets/image/Thar webpage/Second page of Thar.png",
  //     "/assets/image/Thar webpage/third page of thar.png",
  //     "/assets/image/Thar webpage/four page of thar.png",
  //     "/assets/image/Thar webpage/last page of thar.png",
  //     "/assets/image/Thar webpage/Thar1.png",
  //   ],
  //   tags: ["UI Design", "Automotive", "Landing Page", "Interactive"],
  //   href: "/projects/thar-drivemax",
  //   gridSpan: "col-span-1 md:col-span-6",
  //   overview: "Thar DriveMax captures the rugged spirit of adventure vehicles through bold dark UI themes, immersive trim customizers, test drive scheduler, and spec breakdowns.",
  //   features: [
  //     "Rugged dark theme design with vibrant accent colors",
  //     "Interactive trim level comparison (4x4 vs 4x2, Hardtop vs Soft top)",
  //     "Test drive booking and dealership locator map UI",
  //   ],
  // },
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
