/**
 * Section component for consistent section styling
 * @param {Object} props - Component props
 * @param {string} [props.id] - Section ID for anchor links
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.background='white'] - Background color (white, gray, primary, secondary, accent)
 * @param {boolean} [props.fullWidth=false] - Whether section content should take full width
 * @param {React.ReactNode} props.children - Section content
 */
export default function Section({
  id,
  className = '',
  background = 'white',
  fullWidth = false,
  children,
}) {
  // Background-specific classes
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    'gray-dark': 'bg-gray-900 text-white',
    primary: 'bg-primary-50',
    'primary-dark': 'bg-primary-900 text-white',
    secondary: 'bg-secondary-50',
    'secondary-dark': 'bg-secondary-900 text-white',
    accent: 'bg-accent-50',
    'accent-dark': 'bg-accent-900 text-white',
  };
  
  // Container class based on fullWidth prop
  const containerClass = fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';
  
  return (
    <section
      id={id}
      className={`py-12 md:py-16 lg:py-20 ${backgroundClasses[background]} ${className}`}
    >
      <div className={containerClass}>{children}</div>
    </section>
  );
}

/**
 * Section header component for consistent section headers
 * @param {Object} props - Component props
 * @param {string} props.title - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {string} [props.align='center'] - Text alignment (left, center, right)
 * @param {string} [props.className] - Additional CSS classes
 */
export function SectionHeader({
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  // Alignment classes
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };
  
  return (
    <div className={`mb-12 ${alignClasses[align]} ${className}`}>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
