import { services } from '../../data/services';
import Card from '../ui/Card';
import Section, { SectionHeader } from '../ui/Section';

/**
 * Services grid component to display all services in a grid layout
 * @param {Object} props - Component props
 * @param {string} [props.title='Our Services'] - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {string} [props.background='white'] - Section background color
 * @param {boolean} [props.showAll=true] - Whether to show all services or just featured ones
 * @param {number} [props.limit] - Maximum number of services to display
 * @param {string} [props.className] - Additional CSS classes
 */
export default function ServicesGrid({
  title = 'Our Services',
  subtitle = 'Comprehensive social media content production services to elevate your brand',
  background = 'white',
  showAll = true,
  limit,
  className = '',
}) {
  // Filter services if needed
  const displayedServices = showAll
    ? services
    : services.filter(service => service.featured);
  
  // Limit the number of services if specified
  const limitedServices = limit
    ? displayedServices.slice(0, limit)
    : displayedServices;
  
  return (
    <Section background={background} className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {limitedServices.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            imageSrc={service.primaryImage}
            imageAlt={service.title}
            href={`/services/${service.id}`}
            shadow
            hover
          />
        ))}
      </div>
    </Section>
  );
}

/**
 * Service features component to display service features in a grid
 * @param {Object} props - Component props
 * @param {Object} props.service - Service object
 * @param {string} [props.background='white'] - Section background color
 * @param {string} [props.className] - Additional CSS classes
 */
export function ServiceFeatures({ service, background = 'white', className = '' }) {
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title="Key Benefits"
        subtitle="Here's how our service can help your business grow"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {service.benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="ml-3 text-lg font-medium">{benefit}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/**
 * Service process component to display service process steps
 * @param {Object} props - Component props
 * @param {Object} props.service - Service object
 * @param {string} [props.background='gray'] - Section background color
 * @param {string} [props.className] - Additional CSS classes
 */
export function ServiceProcess({ service, background = 'gray', className = '' }) {
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title="Our Process"
        subtitle="How we deliver exceptional results for your business"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {service.process.map((step, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
          >
            <div className="flex items-center mb-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                {index + 1}
              </div>
              <h3 className="ml-3 text-lg font-medium">{step}</h3>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
