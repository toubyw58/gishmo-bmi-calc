import HeroSection from '../../components/blocks/HeroSection';
import ServicesGrid from '../../components/blocks/ServicesGrid';
import FeaturesSection from '../../components/blocks/FeaturesSection';
import TestimonialsSection from '../../components/blocks/TestimonialsSection';
import { CtaSection } from '../../components/blocks/ContactSection';
import { generateMetadata as generateBaseMetadata } from '../../lib/utils';

export const metadata = generateBaseMetadata({
  title: "Our Services | Professional Social Media Content | Gishmo",
  description: "Explore our comprehensive social media content production services including Facebook, Instagram, Pinterest posts, SEO blogs, and topical authority plans.",
  keywords: "social media services, content production, Facebook posts, Instagram posts, Pinterest posts, SEO blog posts, topical authority plans",
  url: "/services",
  image: "/images/Social_Media_Charity_CampaignSubheadingHelping_hands_community_service_0001.jpg"
});

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Services"
        subtitle="CONTENT PRODUCTION"
        description="Comprehensive social media content production services to elevate your brand and engage your audience across multiple platforms."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        imageSrc="/images/Social_Media_Podcast_PromotionSubheadingMicrophone_moody_lighting_setup_0001.jpg"
        imageAlt="Social media content production services"
        overlay={true}
      />

      {/* Services Grid */}
      <ServicesGrid
        title="Explore Our Services"
        subtitle="Professional social media content production tailored to your business needs"
        background="white"
        showAll={true}
      />

      {/* Features Section */}
      <FeaturesSection
        title="The Gishmo Advantage"
        subtitle="What sets our content production services apart"
        background="gray"
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="Client Success Stories"
        subtitle="See how our services have helped businesses like yours"
        background="white"
        layout="grid"
      />

      {/* CTA Section */}
      <CtaSection
        title="Ready to Elevate Your Social Media Presence?"
        description="Contact us today to discuss how our services can help your business grow."
        buttonText="Contact Us"
        buttonHref="/contact"
        background="primary-dark"
      />
    </>
  );
}
