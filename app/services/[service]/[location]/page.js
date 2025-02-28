import { notFound } from 'next/navigation';
import Image from 'next/image';
import HeroSection from '../../../../components/blocks/HeroSection';
import { ServiceFeatures, ServiceProcess } from '../../../../components/blocks/ServicesGrid';
import { ServiceFaq } from '../../../../components/blocks/FaqSection';
import { LocationDetails } from '../../../../components/blocks/LocationsGrid';
import TestimonialsSection from '../../../../components/blocks/TestimonialsSection';
import { CtaSection } from '../../../../components/blocks/ContactSection';
import Section, { SectionHeader } from '../../../../components/ui/Section';
import { services, getServiceById } from '../../../../data/services';
import { locations, getLocationById } from '../../../../data/locations';
import { generateServiceLocationMetadata } from '../../../../lib/seo';
import { generateMetadata as generateBaseMetadata, formatLocationName, generateServiceLocationCombinations } from '../../../../lib/utils';

// Generate metadata for the page
export function generateMetadata({ params }) {
  const service = getServiceById(params.service);
  const location = getLocationById(params.location);
  
  if (!service || !location) {
    return {
      title: 'Page Not Found',
    };
  }
  
  return generateBaseMetadata(generateServiceLocationMetadata(service, location));
}

// Generate static params for all service+location combinations
export function generateStaticParams() {
  return generateServiceLocationCombinations().map(({ serviceId, locationId }) => ({
    service: serviceId,
    location: locationId,
  }));
}

export default function ServiceLocationPage({ params }) {
  const service = getServiceById(params.service);
  const location = getLocationById(params.location);
  
  // If service or location not found, return 404
  if (!service || !location) {
    notFound();
  }
  
  const locationName = formatLocationName(location);
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={`${service.title} in ${locationName}`}
        subtitle="LOCAL SERVICE"
        description={`Professional ${service.title} services tailored specifically for businesses in ${locationName}.`}
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonHref="#details"
        imageSrc={service.primaryImage}
        imageAlt={`${service.title} in ${locationName}`}
        overlay={true}
      />
      
      {/* Service+Location Details */}
      <Section id="details" background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader
              title={`${service.title} for ${locationName} Businesses`}
              subtitle={`Tailored social media content for the ${locationName} market`}
              align="left"
            />
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Our {service.title} service is specifically tailored to meet the unique needs and opportunities of businesses in {locationName}. We combine our expertise in creating engaging {service.shortTitle} with deep local knowledge to help your business connect with the {location.name} community.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                {service.longDescription}
              </p>
              <p className="text-lg text-gray-700 mb-6">
                With our understanding of the {locationName} market and consumer preferences, we create content that resonates with your local audience and drives meaningful engagement for your business.
              </p>
            </div>
          </div>
          
          <div className="relative h-80 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={location.image}
              alt={locationName}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>
      
      {/* Local Market Insights */}
      <Section background="gray">
        <SectionHeader
          title={`${locationName} Market Insights`}
          subtitle={`Understanding the unique aspects of the ${location.name} market`}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Local Business Landscape</h3>
            <p className="text-gray-700 mb-6">{location.businessStats}</p>
            
            <h3 className="text-xl font-semibold mb-4">Social Media Usage</h3>
            <p className="text-gray-700 mb-6">{location.socialMediaStats}</p>
            
            <h3 className="text-xl font-semibold mb-4">Key Industries</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
              {location.keyIndustries.map((industry, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="h-5 w-5 text-primary-500 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {industry}
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={location.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${locationName}`}
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </Section>
      
      {/* Service Features */}
      <ServiceFeatures
        service={service}
        background="white"
      />
      
      {/* Local Approach */}
      <Section background="gray">
        <SectionHeader
          title={`Our Approach to ${service.title} in ${locationName}`}
          subtitle={`How we create effective ${service.shortTitle} for the ${location.name} market`}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Local Market Research</h3>
            <p className="text-gray-700">
              We conduct thorough research on the {locationName} market, including local trends, consumer preferences, and competitor analysis to inform our content strategy.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Local Audience Targeting</h3>
            <p className="text-gray-700">
              We identify and target specific audience segments within the {location.name} area to ensure your content reaches the most relevant potential customers.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Local Content Creation</h3>
            <p className="text-gray-700">
              We create content that incorporates local elements, references, and themes that resonate with the {locationName} community and establish your local presence.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Local Event Integration</h3>
            <p className="text-gray-700">
              We incorporate relevant local events, holidays, and happenings in {location.name} into your content calendar to increase relevance and timeliness.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Local SEO Optimization</h3>
            <p className="text-gray-700">
              We optimize your content with local keywords and tags to improve visibility in local searches and attract customers in the {locationName} area.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold mb-3">Performance Tracking</h3>
            <p className="text-gray-700">
              We continuously monitor the performance of your content in the {location.name} market and make data-driven adjustments to improve results over time.
            </p>
          </div>
        </div>
      </Section>
      
      {/* Service Examples */}
      <Section background="white">
        <SectionHeader
          title="Examples of Our Work"
          subtitle={`${service.title} we've created for businesses in ${locationName}`}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.secondaryImages.slice(0, 3).map((image, index) => (
            <div key={index} className="relative h-64 rounded-lg overflow-hidden shadow-md">
              <Image
                src={image}
                alt={`${service.title} example ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </Section>
      
      {/* Testimonials */}
      <TestimonialsSection
        title="What Local Clients Say"
        subtitle={`Hear from ${locationName} businesses that have used our ${service.title} service`}
        background="gray"
      />
      
      {/* FAQ Section */}
      <ServiceFaq
        service={service}
        background="white"
      />
      
      {/* CTA Section */}
      <CtaSection
        title={`Ready to Enhance Your ${service.shortTitle} in ${locationName}?`}
        description="Contact us today to discuss how our local service can help your business grow in the community."
        buttonText="Get Started"
        buttonHref="/contact"
        background="primary-dark"
      />
    </>
  );
}
