import Link from 'next/link';
import { COMPANY_NAME } from '../lib/constants';

export const metadata = {
  title: 'Page Not Found | Gishmo',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-2xl">
        <h1 className="text-6xl font-bold text-primary-600 mb-4">404</h1>
        <h2 className="text-3xl font-semibold mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors"
          >
            Return to Home
          </Link>
          <p className="text-gray-500 mt-8">
            If you believe this is an error, please contact us at{' '}
            <a
              href="mailto:admin@gishmo.com"
              className="text-primary-600 hover:text-primary-700 transition-colors"
            >
              admin@gishmo.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
