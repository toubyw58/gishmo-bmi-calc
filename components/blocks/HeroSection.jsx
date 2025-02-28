import Image from 'next/image';
import Button from '../ui/Button';

/**
 * Hero section component for page headers
 * @param {Object} props - Component props
 * @param {string} props.title - Hero title
 * @param {string} [props.subtitle] - Hero subtitle
 * @param {string} [props.description] - Hero description
 * @param {string} [props.primaryButtonText] - Primary button text
 * @param {string} [props.primaryButtonHref] - Primary button link
 * @param {string} [props.secondaryButtonText] - Secondary button text
 * @param {string} [props.secondaryButtonHref] - Secondary button link
 * @param {string} [props.imageSrc] - Background image source
 * @param {string} [props.imageAlt] - Background image alt text
 * @param {string} [props.className] - Additional CSS classes
 * @param {boolean} [props.overlay=false] - Whether to show a dark overlay over the image
 * @param {boolean} [props.fullHeight=false] - Whether the hero should take full viewport height
 * @param {string} [props.align='center'] - Text alignment (left, center, right)
 */
export default function HeroSection({
  title,
  subtitle,
  description,
  primaryButtonText,
  primaryButtonHref,
  secondaryButtonText,
  secondaryButtonHref,
  imageSrc,
  imageAlt = '',
  className = '',
  overlay = false,
  fullHeight = false,
  align = 'center',
}) {
  // Height class
  const heightClass = fullHeight ? 'min-h-screen' : 'py-16 md:py-24 lg:py-32';
  
  // Alignment classes
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center',
    right: 'text-right items-end',
  };
  
  return (
    <section className={`relative ${heightClass} ${className}`}>
      {/* Background Image */}
      {imageSrc && (
        <>
          <div className="absolute inset-0 z-0">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
          
          {/* Optional Overlay */}
          {overlay && (
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
          )}
        </>
      )}
      
      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
        <div className={`max-w-3xl ${alignClasses[align]} mx-auto`}>
          {subtitle && (
            <p className="text-sm md:text-base uppercase tracking-wider font-semibold text-primary-600 mb-3">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            {title}
          </h1>
          
          {description && (
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
              {description}
            </p>
          )}
          
          {/* Buttons */}
          {(primaryButtonText || secondaryButtonText) && (
            <div className={`flex flex-wrap gap-4 ${align === 'center' ? 'justify-center' : ''}`}>
              {primaryButtonText && (
                <Button href={primaryButtonHref} variant="primary" size="lg">
                  {primaryButtonText}
                </Button>
              )}
              
              {secondaryButtonText && (
                <Button href={secondaryButtonHref} variant="outline" size="lg">
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
