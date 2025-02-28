import { SERVICE_FEATURES, PROCESS_STEPS } from '../../lib/constants';
import { FeatureCard } from '../ui/Card';
import Section, { SectionHeader } from '../ui/Section';

/**
 * Features section component to display features in a grid layout
 * @param {Object} props - Component props
 * @param {string} [props.title='Why Choose Gishmo'] - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {string} [props.background='white'] - Section background color
 * @param {Array} [props.features] - Array of feature objects (defaults to constants)
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.layout='grid'] - Layout type (grid or list)
 */
export default function FeaturesSection({
  title = 'Why Choose Gishmo',
  subtitle = 'We deliver exceptional social media content that drives results',
  background = 'white',
  features = SERVICE_FEATURES,
  className = '',
  layout = 'grid',
}) {
  return (
    <Section background={background} className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      
      {layout === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={
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
              }
            />
          ))}
        </div>
      ) : (
        // List Layout
        <div className="space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-white rounded-lg shadow-sm"
            >
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
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
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}

/**
 * Process steps component to display a process flow
 * @param {Object} props - Component props
 * @param {string} [props.title='Our Process'] - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {string} [props.background='gray'] - Section background color
 * @param {Array} [props.steps] - Array of step objects (defaults to constants)
 * @param {string} [props.className] - Additional CSS classes
 */
export function ProcessSteps({
  title = 'Our Process',
  subtitle = 'How we create exceptional social media content for your business',
  background = 'gray',
  steps = PROCESS_STEPS,
  className = '',
}) {
  return (
    <Section background={background} className={className}>
      <SectionHeader title={title} subtitle={subtitle} />
      
      <div className="relative">
        {/* Process Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-600 flex items-center justify-center text-white font-bold">
                  {index + 1}
                </div>
                <h3 className="ml-3 text-lg font-medium">{step.title}</h3>
              </div>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        
        {/* Connecting Line (visible on desktop only) */}
        <div className="hidden lg:block absolute top-1/3 left-0 w-full h-0.5 bg-primary-200 -z-10"></div>
      </div>
    </Section>
  );
}

/**
 * Stats section component to display statistics
 * @param {Object} props - Component props
 * @param {string} [props.title='Our Impact'] - Section title
 * @param {string} [props.subtitle] - Section subtitle
 * @param {string} [props.background='primary-dark'] - Section background color
 * @param {Array} [props.stats] - Array of stat objects
 * @param {string} [props.className] - Additional CSS classes
 */
export function StatsSection({
  title,
  subtitle,
  background = 'primary-dark',
  stats = [
    { value: '500+', label: 'Clients Served' },
    { value: '15,000+', label: 'Posts Created' },
    { value: '300%', label: 'Average Engagement Increase' },
    { value: '6', label: 'Locations Served' },
  ],
  className = '',
}) {
  return (
    <Section background={background} className={className}>
      {(title || subtitle) && (
        <SectionHeader title={title} subtitle={subtitle} />
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <p className="text-4xl md:text-5xl font-bold text-white mb-2">
              {stat.value}
            </p>
            <p className="text-lg text-white opacity-80">{stat.label}</p>
            {stat.description && (
              <p className="text-sm text-white opacity-60 mt-1">{stat.description}</p>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
