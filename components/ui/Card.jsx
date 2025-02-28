import Link from 'next/link';
import Image from 'next/image';

/**
 * Card component for displaying content in a card format
 * @param {Object} props - Component props
 * @param {string} [props.title] - Card title
 * @param {string} [props.description] - Card description
 * @param {string} [props.imageSrc] - Image source URL
 * @param {string} [props.imageAlt] - Image alt text
 * @param {string} [props.href] - Link URL if the card is clickable
 * @param {React.ReactNode} [props.children] - Additional content to display in the card
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.shadow=true] - Whether to show shadow
 * @param {boolean} [props.hover=true] - Whether to show hover effects
 * @param {boolean} [props.border=false] - Whether to show border
 */
export default function Card({
  title,
  description,
  imageSrc,
  imageAlt = '',
  href,
  children,
  className = '',
  shadow = true,
  hover = true,
  border = false,
}) {
  // Base classes
  const baseClasses = 'bg-white rounded-lg overflow-hidden';
  
  // Optional classes
  const shadowClass = shadow ? 'shadow-md' : '';
  const hoverClass = hover && href ? 'transition-transform hover:scale-105' : '';
  const borderClass = border ? 'border border-gray-200' : '';
  
  // Combine all classes
  const cardClasses = `${baseClasses} ${shadowClass} ${hoverClass} ${borderClass} ${className}`;
  
  // Card content
  const cardContent = (
    <>
      {imageSrc && (
        <div className="relative h-48 w-full">
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-6">
        {title && <h3 className="text-xl font-semibold mb-2">{title}</h3>}
        {description && <p className="text-gray-600 mb-4">{description}</p>}
        {children}
      </div>
    </>
  );
  
  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} className={cardClasses}>
        {cardContent}
      </Link>
    );
  }
  
  // Otherwise render as div
  return <div className={cardClasses}>{cardContent}</div>;
}

/**
 * Feature card component for displaying features with icons
 * @param {Object} props - Component props
 * @param {string} props.title - Feature title
 * @param {string} props.description - Feature description
 * @param {React.ReactNode} props.icon - Feature icon
 * @param {string} [props.className] - Additional CSS classes
 */
export function FeatureCard({ title, description, icon, className = '' }) {
  return (
    <div className={`flex flex-col items-start p-6 bg-white rounded-lg border border-gray-200 ${className}`}>
      <div className="flex items-center justify-center w-12 h-12 rounded-md bg-primary-100 text-primary-600 mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

/**
 * Testimonial card component for displaying testimonials
 * @param {Object} props - Component props
 * @param {string} props.text - Testimonial text
 * @param {string} props.name - Person's name
 * @param {string} [props.company] - Person's company
 * @param {string} [props.imageSrc] - Person's image source URL
 * @param {string} [props.className] - Additional CSS classes
 */
export function TestimonialCard({ text, name, company, imageSrc, className = '' }) {
  return (
    <div className={`p-6 bg-white rounded-lg shadow-md ${className}`}>
      <div className="flex items-start mb-4">
        <svg className="w-8 h-8 text-primary-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
        <p className="text-gray-600 italic">{text}</p>
      </div>
      <div className="flex items-center">
        {imageSrc && (
          <div className="relative w-10 h-10 mr-3 rounded-full overflow-hidden">
            <Image
              src={imageSrc}
              alt={name}
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        )}
        <div>
          <p className="font-semibold">{name}</p>
          {company && <p className="text-sm text-gray-500">{company}</p>}
        </div>
      </div>
    </div>
  );
}
