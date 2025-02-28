import ContactSection from '../../components/blocks/ContactSection';
import HeroSection from '../../components/blocks/HeroSection';
import { generateContactMetadata } from '../../lib/seo';
import { generateMetadata as generateBaseMetadata } from '../../lib/utils';

export const metadata = generateBaseMetadata(generateContactMetadata());

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <HeroSection
        title="Contact Us"
        subtitle="GET IN TOUCH"
        description="Have questions about our services? Ready to elevate your social media presence? Our team is here to help you achieve your goals."
        imageSrc="/images/LinkedIn_Company_Culture_PostSubheadingTeam_collaborating_modern_office_space_0001.jpg"
        imageAlt="Gishmo team collaborating"
        overlay={true}
      />

      {/* Contact Section */}
      <ContactSection
        title="Get in Touch"
        subtitle="We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible."
        background="white"
        showMap={true}
      />
    </>
  );
}
