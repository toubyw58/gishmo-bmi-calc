import { notFound } from 'next/navigation';
import Image from 'next/image';
import HeroSection from '../../../components/blocks/HeroSection';
import { ServiceFeatures, ServiceProcess } from '../../../components/blocks/ServicesGrid';
import { ServiceFaq } from '../../../components/blocks/FaqSection';
import TestimonialsSection from '../../../components/blocks/TestimonialsSection';
import { CtaSection } from '../../../components/blocks/ContactSection';
import Section, { SectionHeader } from '../../../components/ui/Section';
import { services, getServiceById } from '../../../data/services';
import { generateServiceMetadata } from '../../../lib/seo';
import { generateMetadata as generateBaseMetadata } from '../../../lib/utils';

// Generate metadata for the page
export function generateMetadata({ params }) {
  const service = getServiceById(params.service);
  
  if (!service) {
    return {
      title: 'Service Not Found',
    };
  }
  
  return generateBaseMetadata(generateServiceMetadata(service));
}

// Generate static params for all services
export function generateStaticParams() {
  return services.map((service) => ({
    service: service.id,
  }));
}

export default function ServicePage({ params }) {
  const service = getServiceById(params.service);
  
  // If service not found, return 404
  if (!service) {
    notFound();
  }
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title={service.title}
        subtitle="PROFESSIONAL SERVICE"
        description={service.description}
        primaryButtonText="Get Started"
        primaryButtonHref="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonHref="#details"
        imageSrc={service.primaryImage}
        imageAlt={service.title}
        overlay={true}
      />
      
      {/* Service Details */}
      <Section id="details" background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader
              title="Service Overview"
              subtitle="Everything you need to know about our service"
              align="left"
            />
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">{service.longDescription}</p>
            </div>
          </div>
          
          <div className="relative h-80 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src={service.secondaryImages[0] || service.primaryImage}
              alt={service.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>
      
      {/* Service Features */}
      <ServiceFeatures
        service={service}
        background="gray"
      />
      
      {/* Service Process */}
      <ServiceProcess
        service={service}
        background="white"
      />
      
      {/* Service Examples */}
      <Section background="gray">
        <SectionHeader
          title="Examples of Our Work"
          subtitle="See the quality and creativity we bring to every project"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {service.secondaryImages.map((image, index) => (
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
        title="What Clients Say"
        subtitle={`Hear from businesses that have used our ${service.title} service`}
        background="white"
      />
      
      {/* FAQ Section */}
      <ServiceFaq
        service={service}
        background="gray"
      />
      
      {/* CTA Section */}
      <CtaSection
        title={`Ready to Enhance Your ${service.shortTitle}?`}
        description="Contact us today to discuss how our service can help your business grow."
        buttonText="Get Started"
        buttonHref="/contact"
        background="primary-dark"
      />
    </>
  );
}
