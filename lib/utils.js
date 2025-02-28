/**
 * Utility functions for the Gishmo website
 */

import { services } from "../data/services";
import { locations } from "../data/locations";

/**
 * Generate all possible service+location combinations
 * @returns {Array} Array of objects with serviceId and locationId
 */
export function generateServiceLocationCombinations() {
  const combinations = [];
  
  services.forEach(service => {
    locations.forEach(location => {
      combinations.push({
        serviceId: service.id,
        locationId: location.id
      });
    });
  });
  
  return combinations;
}

/**
 * Generate a slug from a string
 * @param {string} text - The text to convert to a slug
 * @returns {string} - The slugified text
 */
export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '');
}

/**
 * Format a location name with state
 * @param {Object} location - The location object
 * @returns {string} - Formatted location name (e.g., "Nashville, TN")
 */
export function formatLocationName(location) {
  return `${location.name}, ${location.state}`;
}

/**
 * Generate meta tags for SEO
 * @param {Object} options - Options for generating meta tags
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.keywords - Comma-separated keywords
 * @param {string} options.url - Canonical URL
 * @param {string} options.image - Open Graph image URL
 * @returns {Object} - Metadata object for Next.js
 */
export function generateMetadata({ title, description, keywords, url, image }) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://gishmo.com";
  const fullUrl = url ? `${baseUrl}${url}` : baseUrl;
  const imageUrl = image ? `${baseUrl}${image}` : `${baseUrl}/images/Social_Media_Charity_CampaignSubheadingHelping_hands_community_service_0001.jpg`;
  
  return {
    title,
    description,
    keywords: keywords || "social media content, content creation, social media marketing",
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Gishmo",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

/**
 * Generate a title for a service+location page
 * @param {Object} service - The service object
 * @param {Object} location - The location object
 * @returns {string} - Formatted title
 */
export function generateServiceLocationTitle(service, location) {
  return `${service.title} in ${formatLocationName(location)} | Gishmo`;
}

/**
 * Generate a description for a service+location page
 * @param {Object} service - The service object
 * @param {Object} location - The location object
 * @returns {string} - Formatted description
 */
export function generateServiceLocationDescription(service, location) {
  return `Professional ${service.title} services in ${formatLocationName(location)}. Gishmo provides high-quality social media content production tailored to your business needs in ${location.name}.`;
}

/**
 * Generate keywords for a service+location page
 * @param {Object} service - The service object
 * @param {Object} location - The location object
 * @returns {string} - Comma-separated keywords
 */
export function generateServiceLocationKeywords(service, location) {
  const serviceKeywords = service.seoKeywords || [];
  const locationKeywords = location.seoKeywords || [];
  
  // Generate combined keywords
  const combinedKeywords = [
    `${service.title} ${location.name}`,
    `${service.title} ${location.fullName}`,
    `${service.shortTitle} ${location.name}`,
    `social media content ${location.name}`,
    `content creation ${location.name}`,
    ...serviceKeywords,
    ...locationKeywords
  ];
  
  return combinedKeywords.join(", ");
}

/**
 * Format a date in a human-readable format
 * @param {Date} date - The date to format
 * @returns {string} - Formatted date
 */
export function formatDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

/**
 * Generate a random testimonial
 * @returns {Object} - A testimonial object
 */
export function generateTestimonial() {
  const testimonials = [
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
  
  return testimonials[Math.floor(Math.random() * testimonials.length)];
}
