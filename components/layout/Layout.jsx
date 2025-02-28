import Header from './Header';
import Footer from './Footer';
import Script from 'next/script';
import { generateOrganizationSchema } from '../../lib/seo';

export default function Layout({ children }) {
  const organizationSchema = generateOrganizationSchema();
  
  return (
    <>
      {/* JSON-LD Structured Data */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
