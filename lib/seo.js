/**
 * SEO utilities for the Gishmo website
 */

import { formatLocationName } from "./utils";

/**
 * Generate metadata for the home page
 * @returns {Object} - Metadata object for Next.js
 */
export function generateHomeMetadata() {
  return {
    title: "Gishmo | Professional Social Media Content Production",
    description: "Gishmo provides 100% done-for-you social media content production including images and text for Facebook, Instagram, Pinterest, and more.",
    keywords: "social media content, content production, Facebook posts, Instagram posts, Pinterest posts, SEO blog posts, topical authority plans",
    url: "/",
    image: "/images/Social_Media_Charity_CampaignSubheadingHelping_hands_community_service_0001.jpg"
  };
}

/**
 * Generate metadata for a service page
 * @param {Object} service - The service object
 * @returns {Object} - Metadata object for Next.js
 */
export function generateServiceMetadata(service) {
  return {
    title: `${service.title} | Professional Social Media Content | Gishmo`,
    description: service.description,
    keywords: service.seoKeywords.join(", "),
    url: `/services/${service.id}`,
    image: service.primaryImage
  };
}

/**
 * Generate metadata for a location page
 * @param {Object} location - The location object
 * @returns {Object} - Metadata object for Next.js
 */
export function generateLocationMetadata(location) {
  const locationName = formatLocationName(location);
  
  return {
    title: `Social Media Content Services in ${locationName} | Gishmo`,
    description: `Professional social media content production services in ${locationName}. Gishmo creates high-quality Facebook, Instagram, Pinterest posts, SEO blogs, and more for businesses in ${location.name}.`,
    keywords: location.seoKeywords.join(", "),
    url: `/locations/${location.id}`,
    image: location.image
  };
}

/**
 * Generate metadata for a service+location page
 * @param {Object} service - The service object
 * @param {Object} location - The location object
 * @returns {Object} - Metadata object for Next.js
 */
export function generateServiceLocationMetadata(service, location) {
  const locationName = formatLocationName(location);
  
  return {
    title: `${service.title} in ${locationName} | Gishmo`,
    description: `Professional ${service.title} services in ${locationName}. Gishmo provides high-quality social media content production tailored to your business needs in ${location.name}.`,
    keywords: [
      `${service.title} ${location.name}`,
      `${service.title} ${location.fullName}`,
      `${service.shortTitle} ${location.name}`,
      `social media content ${location.name}`,
      `content creation ${location.name}`,
      ...service.seoKeywords,
      ...location.seoKeywords
    ].join(", "),
    url: `/services/${service.id}/${location.id}`,
    image: service.primaryImage
  };
}

/**
 * Generate metadata for the contact page
 * @returns {Object} - Metadata object for Next.js
 */
export function generateContactMetadata() {
  return {
    title: "Contact Gishmo | Social Media Content Production",
    description: "Get in touch with Gishmo for professional social media content production services. We create high-quality content for Facebook, Instagram, Pinterest, and more.",
    keywords: "contact Gishmo, social media services, content production, Nashville social media, social media agency contact",
    url: "/contact",
    image: "/images/LinkedIn_Company_Culture_PostSubheadingTeam_collaborating_modern_office_space_0001.jpg"
  };
}

/**
 * Generate metadata for the about page
 * @returns {Object} - Metadata object for Next.js
 */
export function generateAboutMetadata() {
  return {
    title: "About Gishmo | Social Media Content Production Experts",
    description: "Learn about Gishmo, the leading social media content production company. We create high-quality, engaging content for businesses across multiple platforms.",
    keywords: "about Gishmo, social media experts, content production company, social media agency, professional content creators",
    url: "/about",
    image: "/images/LinkedIn_Business_ConferenceSubheadingSpeaker_engaging_audience_stage_0001.jpg"
  };
}

/**
 * Generate structured data for the organization
 * @returns {Object} - JSON-LD structured data
 */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Gishmo",
    "url": "https://gishmo.com",
    "logo": "https://gishmo.com/logo.png",
    "description": "Professional social media content production services",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6210 Nolensville Pike Unit 105",
      "addressLocality": "Nashville",
      "addressRegion": "TN",
      "postalCode": "37211",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+16154795357",
      "contactType": "customer service",
      "email": "admin@gishmo.com"
    },
    "sameAs": [
      "https://www.facebook.com/gishmo",
      "https://www.instagram.com/gishmo",
      "https://www.linkedin.com/company/gishmo",
      "https://www.pinterest.com/gishmo"
    ]
  };
}

/**
 * Generate structured data for a local business
 * @param {Object} location - The location object
 * @returns {Object} - JSON-LD structured data
 */
export function generateLocalBusinessSchema(location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Gishmo ${location.name}`,
    "image": "https://gishmo.com/logo.png",
    "url": `https://gishmo.com/locations/${location.id}`,
    "telephone": "+16154795357",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.isHeadquarters ? "6210 Nolensville Pike Unit 105" : "",
      "addressLocality": location.name,
      "addressRegion": location.state,
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "36.0679",
      "longitude": "-86.7194"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "priceRange": "$$",
    "servesCuisine": "Social Media Content"
  };
}

/**
 * Generate structured data for a service
 * @param {Object} service - The service object
 * @returns {Object} - JSON-LD structured data
 */
export function generateServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "Gishmo",
      "url": "https://gishmo.com"
    },
    "serviceType": "Social Media Content Production",
    "areaServed": {
      "@type": "Country",
      "name": "United States"
    },
    "offers": {
      "@type": "Offer",
      "price": "Custom",
      "priceCurrency": "USD"
    }
  };
}
