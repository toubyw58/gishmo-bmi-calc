/**
 * Constants for the Gishmo website
 */

// Company information
export const COMPANY_NAME = "Gishmo";
export const COMPANY_TAGLINE = "100% Done-For-You Social Media Content Production";
export const COMPANY_DESCRIPTION = "Professional social media content production including images and text, completely done for you.";
export const COMPANY_FOUNDED = 2020;

// Contact information
export const CONTACT_INFO = {
  address: "6210 Nolensville Pike Unit 105",
  city: "Nashville",
  state: "TN",
  zip: "37211",
  phone: "1+ 615 479-5357",
  email: "admin@gishmo.com",
  hours: "Monday - Friday: 9:00 AM - 5:00 PM CST"
};

// Social media links
export const SOCIAL_LINKS = {
  facebook: "https://facebook.com/gishmo",
  instagram: "https://instagram.com/gishmo",
  twitter: "https://twitter.com/gishmo",
  linkedin: "https://linkedin.com/company/gishmo",
  pinterest: "https://pinterest.com/gishmo"
};

// Navigation links
export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Locations", path: "/locations" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" }
];

// Color scheme
export const COLORS = {
  primary: {
    50: "#eef2ff",
    100: "#e0e7ff",
    200: "#c7d2fe",
    300: "#a5b4fc",
    400: "#818cf8",
    500: "#6366f1", // Primary color
    600: "#4f46e5",
    700: "#4338ca",
    800: "#3730a3",
    900: "#312e81",
    950: "#1e1b4b"
  },
  secondary: {
    50: "#f0fdfa",
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6", // Secondary color
    600: "#0d9488",
    700: "#0f766e",
    800: "#115e59",
    900: "#134e4a",
    950: "#042f2e"
  },
  accent: {
    50: "#faf5ff",
    100: "#f3e8ff",
    200: "#e9d5ff",
    300: "#d8b4fe",
    400: "#c084fc",
    500: "#a855f7", // Accent color
    600: "#9333ea",
    700: "#7e22ce",
    800: "#6b21a8",
    900: "#581c87",
    950: "#3b0764"
  },
  gray: {
    50: "#f9fafb",
    100: "#f3f4f6",
    200: "#e5e7eb",
    300: "#d1d5db",
    400: "#9ca3af",
    500: "#6b7280",
    600: "#4b5563",
    700: "#374151",
    800: "#1f2937",
    900: "#111827",
    950: "#030712"
  }
};

// Font families
export const FONTS = {
  heading: "var(--font-geist-sans)",
  body: "var(--font-geist-sans)",
  mono: "var(--font-geist-mono)"
};

// Breakpoints
export const BREAKPOINTS = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px"
};

// Service features
export const SERVICE_FEATURES = [
  {
    title: "Professional Quality",
    description: "High-quality content created by experienced professionals",
    icon: "StarIcon"
  },
  {
    title: "Consistent Delivery",
    description: "Regular content delivery on a schedule that works for you",
    icon: "ClockIcon"
  },
  {
    title: "Platform Optimized",
    description: "Content specifically designed for each social media platform",
    icon: "DevicePhoneMobileIcon"
  },
  {
    title: "Brand Aligned",
    description: "Content that perfectly matches your brand voice and style",
    icon: "BuildingStorefrontIcon"
  },
  {
    title: "Data-Driven",
    description: "Content strategy informed by performance analytics",
    icon: "ChartBarIcon"
  },
  {
    title: "Fully Managed",
    description: "We handle everything from creation to publishing",
    icon: "CheckBadgeIcon"
  }
];

// Process steps
export const PROCESS_STEPS = [
  {
    title: "Discovery",
    description: "We learn about your brand, goals, and target audience",
    icon: "MagnifyingGlassIcon"
  },
  {
    title: "Strategy",
    description: "We develop a custom content strategy for your business",
    icon: "DocumentTextIcon"
  },
  {
    title: "Creation",
    description: "Our team creates high-quality content for your platforms",
    icon: "PencilIcon"
  },
  {
    title: "Review",
    description: "You review and approve all content before publication",
    icon: "EyeIcon"
  },
  {
    title: "Publication",
    description: "Content is published according to the optimal schedule",
    icon: "PaperAirplaneIcon"
  },
  {
    title: "Analysis",
    description: "We track performance and refine the strategy accordingly",
    icon: "ChartPieIcon"
  }
];

// FAQ items
export const GENERAL_FAQS = [
  {
    question: "What services does Gishmo offer?",
    answer: "Gishmo provides comprehensive social media content production services, including Facebook posts with images, Instagram posts with images, Pinterest posts with images, SEO blog posts, and topical authority plans. All our content is 100% done-for-you, meaning we handle everything from strategy to creation to optimization."
  },
  {
    question: "How does the process work?",
    answer: "Our process begins with a discovery phase where we learn about your brand, goals, and target audience. We then develop a custom content strategy, create high-quality content, and submit it for your review. Once approved, we can either deliver the content for you to publish or handle the publication process ourselves, depending on your preference."
  },
  {
    question: "Do you work with businesses in specific industries?",
    answer: "We work with businesses across various industries, including retail, professional services, healthcare, technology, food and beverage, real estate, and more. Our team adapts our approach to suit the specific needs and audience of each industry."
  },
  {
    question: "How much does your service cost?",
    answer: "Our pricing is customized based on your specific needs, including the platforms you want to target, the frequency of content, and the level of service required. We offer packages starting at $997/month, and we're happy to provide a personalized quote after learning more about your business."
  },
  {
    question: "Do you offer content for platforms other than those listed?",
    answer: "Yes! While our core services focus on Facebook, Instagram, Pinterest, and blog content, we can also create content for platforms like LinkedIn, Twitter, TikTok, and YouTube. Contact us to discuss your specific platform needs."
  },
  {
    question: "How long does it take to get started?",
    answer: "Once you've signed up, we typically begin the discovery process within 1-2 business days. The full onboarding process, including strategy development, usually takes 1-2 weeks before we begin regular content production."
  },
  {
    question: "Can I see examples of your work?",
    answer: "Absolutely! We're happy to share relevant examples from our portfolio during our initial consultation. Due to client confidentiality, some examples may be shared privately rather than on our public website."
  },
  {
    question: "Do you offer any guarantees?",
    answer: "We guarantee the quality and timeliness of our content delivery. While we can't guarantee specific results (as social media success depends on many factors), we're committed to creating content that aligns with industry best practices and is designed to help you achieve your goals."
  }
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    company: "Bloom Boutique",
    text: "Gishmo transformed our social media presence. Their Facebook posts have increased our engagement by 300% and directly led to more in-store traffic.",
    image: "/images/LinkedIn_Professional_HeadshotSubheadingBusiness_person_smiling_against_neutral_background_0001.jpg"
  },
  {
    name: "Michael Chen",
    company: "TechNow Solutions",
    text: "The Instagram content Gishmo creates for us perfectly captures our brand voice and aesthetic. We've seen a significant increase in followers and engagement since working with them.",
    image: "/images/Social_Media_Pet_FeatureSubheadingCat_looking_majestic_window_light_0001.jpg"
  },
  {
    name: "Jessica Williams",
    company: "Evergreen Home Decor",
    text: "Gishmo's Pinterest strategy has been a game-changer for our business. Their pins consistently drive traffic to our website and have increased our online sales by 45%.",
    image: "/images/Pinterest_Home_Decor_InspirationSubheadingCozy_living_room_natural_light_0001.jpg"
  },
  {
    name: "David Rodriguez",
    company: "Fitness Forward",
    text: "The SEO blog posts Gishmo creates have helped us rank for key terms in our industry. Their content is engaging, informative, and perfectly aligned with our brand voice.",
    image: "/images/Instagram_Fitness_TransformationSubheadingBefore_after_split_image_gym_0001.jpg"
  },
  {
    name: "Amanda Taylor",
    company: "Sunrise Cafe",
    text: "Gishmo's comprehensive approach to social media has transformed our online presence. Their content consistently resonates with our audience and has helped us build a loyal community.",
    image: "/images/Instagram_Story_Coffee_SharePerson_holding_phone_above_latte_art_0001.jpg"
  }
];

// Stats
export const STATS = [
  {
    value: "500+",
    label: "Clients Served",
    description: "Businesses across various industries"
  },
  {
    value: "15,000+",
    label: "Posts Created",
    description: "Across multiple social platforms"
  },
  {
    value: "300%",
    label: "Average Engagement Increase",
    description: "For clients after 3 months"
  },
  {
    value: "6",
    label: "Locations Served",
    description: "Across Tennessee, Kentucky, and Alabama"
  }
];
