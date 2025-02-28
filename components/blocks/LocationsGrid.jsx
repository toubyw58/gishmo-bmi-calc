import { locations } from '../../data/locations';
import { formatLocationName } from '../../lib/utils';
import Card from '../ui/Card';
import Section, { SectionHeader } from '../ui/Section';

/**
 * Locations grid component to display all locations in a grid layout
 * @param {Object} props - Component props
 * @param {string} [props.title='Our Locations'] - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {string} [props.background='white'] - Section background color
 * @param {boolean} [props.showAll=true] - Whether to show all locations or just featured ones
 * @param {number} [props.limit] - Maximum number of locations to display
 * @param {string} [props.className] - Additional CSS classes
 */
export default function LocationsGrid({
  title = 'Our Locations',
  subtitle = 'Serving businesses across Tennessee, Kentucky, and Alabama',
  background = 'white',
  showAll = true,
  limit,
  className = '',
}) {
  // Filter locations if needed
  const displayedLocations = showAll
    ? locations
    : locations.filter(location => location.featured);
  
  // Limit the number of locations if specified
  const limitedLocations = limit
    ? displayedLocations.slice(0, limit)
    : displayedLocations;
  
  return (
    <Section background={background} className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {limitedLocations.map((location) => (
          <Card
            key={location.id}
            title={formatLocationName(location)}
            description={location.description}
            imageSrc={location.image}
            imageAlt={formatLocationName(location)}
            href={`/locations/${location.id}`}
            shadow
            hover
          />
        ))}
      </div>
    </Section>
  );
}

/**
 * Location details component to display information about a specific location
 * @param {Object} props - Component props
 * @param {Object} props.location - Location object
 * @param {string} [props.background='white'] - Section background color
 * @param {string} [props.className] - Additional CSS classes
 */
export function LocationDetails({ location, background = 'white', className = '' }) {
  return (
    <Section background={background} className={className}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Location Information */}
        <div>
          <h2 className="text-3xl font-bold mb-6">About {formatLocationName(location)}</h2>
          <p className="text-lg text-gray-600 mb-8">{location.longDescription}</p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">Key Industries</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
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
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Business Statistics</h3>
              <p className="text-gray-600">{location.businessStats}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Social Media Usage</h3>
              <p className="text-gray-600">{location.socialMediaStats}</p>
            </div>
          </div>
        </div>
        
        {/* Location Image and Map */}
        <div className="space-y-8">
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              src={location.mapUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Map of ${formatLocationName(location)}`}
              className="absolute inset-0"
            ></iframe>
          </div>
          
          <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <img
              src={location.image}
              alt={formatLocationName(location)}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </Section>
  );
}

/**
 * Location services component to display services available in a specific location
 * @param {Object} props - Component props
 * @param {Object} props.location - Location object
 * @param {Array} props.services - Array of service objects
 * @param {string} [props.background='gray'] - Section background color
 * @param {string} [props.className] - Additional CSS classes
 */
export function LocationServices({ location, services, background = 'gray', className = '' }) {
  return (
    <Section background={background} className={className}>
      <SectionHeader
        title={`Our Services in ${formatLocationName(location)}`}
        subtitle={`Tailored social media content production for businesses in ${location.name}`}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            description={service.description}
            imageSrc={service.primaryImage}
            imageAlt={service.title}
            href={`/services/${service.id}/${location.id}`}
            shadow
            hover
          />
        ))}
      </div>
    </Section>
  );
}
