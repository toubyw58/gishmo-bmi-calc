import { generateMetadata as generateBaseMetadata } from '../../lib/utils';
import HeroSection from '../../components/blocks/HeroSection';
import Section, { SectionHeader } from '../../components/ui/Section';
import { CtaSection } from '../../components/blocks/ContactSection';
import BmiCalculator from '../../components/blocks/BmiCalculator';

// Generate metadata for SEO
export const metadata = generateBaseMetadata({
  title: 'BMI Calculator | Gishmo',
  description: 'Calculate your Body Mass Index (BMI) with our easy-to-use calculator. Get instant results and understand what your BMI means for your health.',
  keywords: ['BMI calculator', 'body mass index', 'health calculator', 'weight calculator'],
  canonical: '/bmi-calculator',
});

export default function BmiCalculatorPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="BMI Calculator"
        subtitle="HEALTH METRICS MADE SIMPLE"
        description="Calculate your Body Mass Index (BMI) with our easy-to-use calculator. Get instant results and understand what your BMI means for your health."
        imageSrc="/images/Influencer_Workout_PostSubheadingPerson_doing_yoga_in_scenic_location_0001.jpg"
        imageAlt="Person calculating BMI"
        overlay={true}
      />
      
      {/* BMI Calculator Section */}
      <Section background="white">
        <SectionHeader
          title="Calculate Your BMI"
          subtitle="Enter your height and weight to calculate your Body Mass Index"
        />
        
        <BmiCalculator />
      </Section>
      
      {/* Information Section */}
      <Section background="gray">
        <SectionHeader
          title="Understanding BMI"
          subtitle="What your BMI result means and how to interpret it"
        />
        
        <div className="max-w-3xl mx-auto prose prose-lg">
          <p>
            Body Mass Index (BMI) is a simple calculation using a person's height and weight. The formula is BMI = kg/m² where kg is a person's weight in kilograms and m² is their height in meters squared.
          </p>
          
          <h3>BMI Categories:</h3>
          <ul>
            <li><strong>Underweight:</strong> BMI less than 18.5</li>
            <li><strong>Normal weight:</strong> BMI 18.5 to 24.9</li>
            <li><strong>Overweight:</strong> BMI 25 to 29.9</li>
            <li><strong>Obesity:</strong> BMI 30 or greater</li>
          </ul>
          
          <h3>Limitations of BMI</h3>
          <p>
            While BMI can be a useful tool for identifying potential weight issues, it has several limitations:
          </p>
          <ul>
            <li>It doesn't distinguish between muscle and fat</li>
            <li>It doesn't account for body composition</li>
            <li>It may not be accurate for athletes, elderly people, or pregnant women</li>
            <li>It doesn't consider where fat is stored in the body</li>
          </ul>
          
          <p>
            Always consult with healthcare professionals for a comprehensive health assessment.
          </p>
        </div>
      </Section>
      
      {/* CTA Section */}
      <CtaSection
        title="Take Control of Your Health Today"
        description="Understanding your BMI is just the first step toward a healthier lifestyle."
        buttonText="Learn More"
        buttonHref="/contact"
        background="primary-dark"
      />
    </>
  );
}
