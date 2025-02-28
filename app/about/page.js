import Image from 'next/image';
import HeroSection from '../../components/blocks/HeroSection';
import { StatsSection } from '../../components/blocks/FeaturesSection';
import TestimonialsSection from '../../components/blocks/TestimonialsSection';
import { CtaSection } from '../../components/blocks/ContactSection';
import Section, { SectionHeader } from '../../components/ui/Section';
import { generateAboutMetadata } from '../../lib/seo';
import { generateMetadata as generateBaseMetadata } from '../../lib/utils';
import { COMPANY_FOUNDED } from '../../lib/constants';

export const metadata = generateBaseMetadata(generateAboutMetadata());

export default function AboutPage() {
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - COMPANY_FOUNDED;
  
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="About Gishmo"
        subtitle="OUR STORY"
        description="We're a team of social media experts dedicated to helping businesses grow through high-quality, engaging content."
        imageSrc="/images/LinkedIn_Business_ConferenceSubheadingSpeaker_engaging_audience_stage_0001.jpg"
        imageAlt="Gishmo team"
        overlay={true}
      />
      
      {/* Our Story */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <SectionHeader
              title="Our Story"
              subtitle={`${yearsInBusiness} years of social media excellence`}
              align="left"
            />
            <div className="prose max-w-none">
              <p className="text-lg text-gray-700 mb-6">
                Founded in {COMPANY_FOUNDED}, Gishmo began with a simple mission: to help businesses harness the power of social media without the stress and time commitment of creating content themselves.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our founder recognized that while social media was becoming increasingly essential for business growth, many business owners lacked the time, resources, or expertise to maintain an effective social media presence. This gap in the market inspired the creation of Gishmo's 100% done-for-you social media content production service.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Starting with just a handful of clients in Nashville, we've since expanded to serve businesses across Tennessee, Kentucky, and Alabama. Our growth has been driven by our commitment to quality, our deep understanding of social media platforms, and our ability to create content that truly resonates with local audiences.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Today, Gishmo is proud to be a trusted partner for hundreds of businesses across the Southeast, helping them build their brands, engage their audiences, and achieve their business goals through strategic social media content.
              </p>
            </div>
          </div>
          
          <div className="relative h-80 lg:h-full rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/LinkedIn_Company_Culture_PostSubheadingTeam_collaborating_modern_office_space_0001.jpg"
              alt="Gishmo team collaborating"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </Section>
      
      {/* Our Mission & Values */}
      <Section background="gray">
        <SectionHeader
          title="Our Mission & Values"
          subtitle="What drives us every day"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">Our Mission</h3>
            <p className="text-lg text-gray-700 mb-6">
              To empower businesses with exceptional social media content that drives engagement, builds brand loyalty, and delivers measurable results, allowing our clients to focus on what they do best—running their businesses.
            </p>
          </div>
          
          {/* Values */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-primary-600 mb-4">Our Values</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary-500 mr-2 mt-1"
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
                <div>
                  <h4 className="text-lg font-semibold">Excellence</h4>
                  <p className="text-gray-700">We are committed to delivering the highest quality content that exceeds our clients' expectations.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary-500 mr-2 mt-1"
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
                <div>
                  <h4 className="text-lg font-semibold">Authenticity</h4>
                  <p className="text-gray-700">We create content that authentically represents our clients' brands and resonates with their audience.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary-500 mr-2 mt-1"
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
                <div>
                  <h4 className="text-lg font-semibold">Innovation</h4>
                  <p className="text-gray-700">We stay at the forefront of social media trends and technologies to deliver cutting-edge content.</p>
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-primary-500 mr-2 mt-1"
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
                <div>
                  <h4 className="text-lg font-semibold">Partnership</h4>
                  <p className="text-gray-700">We view ourselves as an extension of our clients' teams, working collaboratively to achieve their goals.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Section>
      
      {/* Our Team */}
      <Section background="white">
        <SectionHeader
          title="Our Team"
          subtitle="Meet the experts behind Gishmo"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/images/LinkedIn_Professional_HeadshotSubheadingBusiness_person_smiling_against_neutral_background_0001.jpg"
                alt="Sarah Johnson - CEO & Founder"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Sarah Johnson</h3>
              <p className="text-primary-600 mb-4">CEO & Founder</p>
              <p className="text-gray-600">
                With over 15 years of experience in digital marketing, Sarah founded Gishmo with a vision to make professional social media content accessible to businesses of all sizes.
              </p>
            </div>
          </div>
          
          {/* Team Member 2 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/images/Instagram_Tech_ReviewSubheadingLatest_gadgets_minimal_background_0001.jpg"
                alt="Michael Chen - Creative Director"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Michael Chen</h3>
              <p className="text-primary-600 mb-4">Creative Director</p>
              <p className="text-gray-600">
                Michael leads our creative team, bringing 10+ years of experience in visual design and content creation for major brands across multiple industries.
              </p>
            </div>
          </div>
          
          {/* Team Member 3 */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-64 w-full">
              <Image
                src="/images/Instagram_Beauty_TutorialSubheadingCloseup_applying_makeup_pastel_background_0001.jpg"
                alt="Jessica Williams - Content Strategy Lead"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-1">Jessica Williams</h3>
              <p className="text-primary-600 mb-4">Content Strategy Lead</p>
              <p className="text-gray-600">
                Jessica specializes in developing data-driven content strategies that align with business goals and drive measurable results for our clients.
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Stats Section */}
      <StatsSection
        title="Our Impact"
        subtitle="The difference we've made for businesses"
        background="primary-dark"
      />
      
      {/* Testimonials */}
      <TestimonialsSection
        title="What Our Clients Say"
        subtitle="Hear from the businesses we've helped grow"
        background="white"
      />
      
      {/* CTA Section */}
      <CtaSection
        title="Ready to Work with Our Team?"
        description="Contact us today to discuss how we can help your business grow through professional social media content."
        buttonText="Get Started"
        buttonHref="/contact"
        background="primary-dark"
      />
    </>
  );
}
