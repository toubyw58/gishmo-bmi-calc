import Link from 'next/link';

/**
 * Button component that can be rendered as a button or a link
 * @param {Object} props - Component props
 * @param {string} [props.variant='primary'] - Button variant (primary, secondary, outline, text)
 * @param {string} [props.size='md'] - Button size (sm, md, lg)
 * @param {string} [props.href] - If provided, button will be rendered as a link
 * @param {boolean} [props.fullWidth=false] - Whether button should take full width
 * @param {React.ReactNode} props.children - Button content
 * @param {string} [props.className] - Additional CSS classes
 * @param {Object} props.rest - Additional props to pass to the button or link
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  fullWidth = false,
  children,
  className = '',
  ...rest
}) {
  // Base classes for all button variants
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Size-specific classes
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  // Variant-specific classes
  const variantClasses = {
    primary: 'text-white bg-primary-600 hover:bg-primary-700 focus:ring-primary-500 shadow-sm',
    secondary: 'text-white bg-secondary-600 hover:bg-secondary-700 focus:ring-secondary-500 shadow-sm',
    accent: 'text-white bg-accent-600 hover:bg-accent-700 focus:ring-accent-500 shadow-sm',
    outline: 'text-gray-700 bg-white border border-gray-300 hover:bg-gray-50 focus:ring-primary-500',
    text: 'text-primary-600 bg-transparent hover:bg-gray-50 focus:ring-primary-500'
  };
  
  // Width class
  const widthClass = fullWidth ? 'w-full' : '';
  
  // Combine all classes
  const buttonClasses = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${widthClass} ${className}`;
  
  // Render as link if href is provided
  if (href) {
    return (
      <Link href={href} className={buttonClasses} {...rest}>
        {children}
      </Link>
    );
  }
  
  // Otherwise render as button
  return (
    <button className={buttonClasses} {...rest}>
      {children}
    </button>
  );
}
