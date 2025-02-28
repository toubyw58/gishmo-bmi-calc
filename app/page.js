import HeroSection from '../components/blocks/HeroSection';
import ServicesGrid from '../components/blocks/ServicesGrid';
import LocationsGrid from '../components/blocks/LocationsGrid';
import TestimonialsSection from '../components/blocks/TestimonialsSection';
import FeaturesSection, { ProcessSteps, StatsSection } from '../components/blocks/FeaturesSection';
import FaqSection from '../components/blocks/FaqSection';
import { CtaSection } from '../components/blocks/ContactSection';
import { STATS } from '../lib/constants';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Professional Social Media Content Production"
        subtitle="100% DONE FOR YOU"
        description="Elevate your brand with high-quality, engaging social media content created by our team of experts. We handle everything from strategy to creation, so you can focus on growing your business."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonHref="/services"
        imageSrc="/images/Social_Media_Charity_CampaignSubheadingHelping_hands_community_service_0001.jpg"
        imageAlt="Social media content production"
        overlay={true}
        fullHeight={true}
      />

      {/* Features Section */}
      <FeaturesSection
        title="Why Choose Gishmo"
        subtitle="We deliver exceptional social media content that drives results"
        background="gray"
      />

      {/* Services Section */}
      <ServicesGrid
        title="Our Services"
        subtitle="Comprehensive social media content production services to elevate your brand"
      />

      {/* Process Steps */}
      <ProcessSteps
        title="Our Process"
        subtitle="How we create exceptional social media content for your business"
        background="primary"
      />

      {/* Stats Section */}
      <StatsSection
        stats={STATS}
        background="primary-dark"
      />

      {/* Locations Grid */}
      <LocationsGrid
        title="Serving Businesses Across"
        subtitle="We provide tailored social media content for businesses in these locations"
        background="gray"
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Hear from businesses that have transformed their social media presence with Gishmo"
      />

      {/* FAQ Section */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services"
        background="gray"
      />

      {/* CTA Section */}
      <CtaSection
        title="Ready to Transform Your Social Media?"
        description="Let our team of experts create high-quality content that engages your audience and drives results."
        buttonText="Get Started"
        buttonHref="/contact"
        background="primary-dark"
      />
    </>
  );
}
