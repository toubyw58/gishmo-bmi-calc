import { notFound } from 'next/navigation';
import HeroSection from '../../../components/blocks/HeroSection';
import { LocationDetails, LocationServices } from '../../../components/blocks/LocationsGrid';
import TestimonialsSection from '../../../components/blocks/TestimonialsSection';
import { CtaSection } from '../../../components/blocks/ContactSection';
import Section, { SectionHeader } from '../../../components/ui/Section';
import { services } from '../../../data/services';
import { locations, getLocationById } from '../../../data/locations';
import { generateLocationMetadata } from '../../../lib/seo';
import { generateMetadata as generateBaseMetadata, formatLocationName } from '../../../lib/utils';

// Generate metadata for the page
export function generateMetadata({ params }) {
  const location = getLocationById(params.location);
  
  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }
  
  return generateBaseMetadata(generateLocationMetadata(location));
}

// Generate static params for all locations
export function generateStaticParams() {
  return locations.map((location) => ({
    location: location.id,
  }));
}

export default function LocationPage({ params }) {
  const location = getLocationById(params.location);
  
  // If location not found, return 404
  if (!location) {
    notFound();
  }
  
  const locationName = formatLocationName(location);
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={`Social Media Services in ${locationName}`}
        subtitle="LOCAL EXPERTISE"
        description={`Professional social media content production services tailored specifically for businesses in ${locationName}.`}
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonHref="#services"
        imageSrc={location.image}
        imageAlt={`Social media services in ${locationName}`}
        overlay={true}
      />
      
      {/* Location Details */}
      <LocationDetails
        location={location}
        background="white"
      />
      
      {/* Local Services */}
      <Section id="services" background="gray">
        <SectionHeader
          title={`Our Services in ${locationName}`}
          subtitle={`Comprehensive social media content production for ${location.name} businesses`}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48 w-full">
                <img
                  src={service.primaryImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <a
                  href={`/services/${service.id}/${location.id}`}
                  className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Learn more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>
      
      {/* Local Approach */}
      <Section background="white">
        <SectionHeader
          title={`Our Approach in ${locationName}`}
          subtitle={`How we create effective social media content for the ${location.name} market`}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Local Market Understanding</h3>
            <p className="text-gray-700 mb-6">
              Our team has deep knowledge of the {locationName} market, including local trends, consumer preferences, and competitive landscape. This local expertise allows us to create content that resonates with your specific audience and helps your business stand out.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Tailored Content Strategy</h3>
            <p className="text-gray-700 mb-6">
              We develop a customized content strategy for each client based on their business goals, target audience, and the unique characteristics of the {location.name} market. Our approach ensures that your content is not only engaging but also strategically aligned with your business objectives.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Local Community Connection</h3>
            <p className="text-gray-700 mb-6">
              We help your business build meaningful connections with the {locationName} community through authentic, relevant content that reflects local values and interests. By incorporating local elements and addressing local concerns, we help you establish a strong presence in the community.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Industry-Specific Expertise</h3>
            <p className="text-gray-700 mb-6">
              We have experience working with businesses across various industries in {locationName}, including {location.keyIndustries.slice(0, 3).join(', ')}, and more. This industry knowledge allows us to create content that speaks directly to your target audience and addresses their specific needs and interests.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Continuous Optimization</h3>
            <p className="text-gray-700 mb-6">
              We continuously monitor the performance of your content and make data-driven adjustments to improve results over time. Our iterative approach ensures that your social media presence becomes increasingly effective at engaging your audience and driving business results.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Comprehensive Support</h3>
            <p className="text-gray-700 mb-6">
              Our team provides comprehensive support for your social media needs, from strategy development to content creation to performance analysis. We serve as an extension of your team, working closely with you to ensure that your social media presence aligns with your overall marketing goals and business objectives.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Local Success Stories */}
      <TestimonialsSection
        title={`${locationName} Success Stories`}
        subtitle={`Hear from businesses we've helped in ${location.name}`}
        background="gray"
      />
      
      {/* CTA Section */}
      <CtaSection
        title={`Ready to Grow Your Business in ${locationName}?`}
        description="Contact us today to discuss how our local expertise can help your business thrive in the community."
        buttonText="Get Started"
        buttonHref="/contact"
        background="primary-dark"
      />
    </>
  );
}
