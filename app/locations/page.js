import HeroSection from '../../components/blocks/HeroSection';
import LocationsGrid from '../../components/blocks/LocationsGrid';
import { StatsSection } from '../../components/blocks/FeaturesSection';
import TestimonialsSection from '../../components/blocks/TestimonialsSection';
import { CtaSection } from '../../components/blocks/ContactSection';
import { generateMetadata as generateBaseMetadata } from '../../lib/utils';
import { STATS } from '../../lib/constants';

export const metadata = generateBaseMetadata({
  title: "Our Locations | Social Media Services | Gishmo",
  description: "Gishmo provides professional social media content production services across Tennessee, Kentucky, and Alabama. Find a location near you.",
  keywords: "social media services locations, Tennessee social media, Kentucky social media, Alabama social media, local social media services",
  url: "/locations",
  image: "/images/Social_Media_Travel_AdventureSubheadingPerson_on_mountain_edge_sunset_0001.jpg"
});

export default function LocationsPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Our Locations"
        subtitle="SERVING THE SOUTHEAST"
        description="Gishmo provides professional social media content production services across Tennessee, Kentucky, and Alabama. Find a location near you."
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        imageSrc="/images/Social_Media_Travel_AdventureSubheadingPerson_on_mountain_edge_sunset_0001.jpg"
        imageAlt="Gishmo locations across the Southeast"
        overlay={true}
      />

      {/* Locations Grid */}
      <LocationsGrid
        title="Find Us Near You"
        subtitle="We provide tailored social media content for businesses in these locations"
        background="white"
        showAll={true}
      />

      {/* Stats Section */}
      <StatsSection
        title="Our Regional Impact"
        subtitle="Making a difference for businesses across the Southeast"
        background="primary-dark"
        stats={[
          { value: '6', label: 'Locations', description: 'Across 3 states' },
          { value: '500+', label: 'Local Businesses', description: 'Served across all locations' },
          { value: '15,000+', label: 'Posts Created', description: 'For businesses in our service areas' },
          { value: '300%', label: 'Average Growth', description: 'In social media engagement' },
        ]}
      />

      {/* Testimonials Section */}
      <TestimonialsSection
        title="What Clients Say Across Our Locations"
        subtitle="Hear from businesses we've helped throughout the Southeast"
        background="white"
        layout="grid"
      />

      {/* CTA Section */}
      <CtaSection
        title="Ready to Work with Us in Your Area?"
        description="Contact us today to discuss how our local expertise can help your business grow."
        buttonText="Contact Us"
        buttonHref="/contact"
        background="primary-dark"
      />
    </>
  );
}
