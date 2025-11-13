import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with TikTok Creator Calculator. We welcome feedback, questions, and suggestions.',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-12">
      <div className="container-custom max-w-3xl">
        <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-6 text-center">
          Contact Us
        </h1>
        <p className="text-body-lg text-neutral-600 text-center mb-12">
          We'd love to hear from you
        </p>

        <div className="space-y-6">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Get in Touch</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>
                Have feedback, found a bug, or have suggestions for new features? We're here to help.
              </p>

              <div className="space-y-4 mt-6">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">💬 General Inquiries</h3>
                  <p className="text-body-sm text-neutral-600">
                    For general questions about our calculators or methodology
                  </p>
                  <p className="text-body-md text-primary-600 font-medium mt-2">
                    contact@tiktokcalculator.com
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">🐛 Bug Reports</h3>
                  <p className="text-body-sm text-neutral-600">
                    Found something not working correctly?
                  </p>
                  <p className="text-body-md text-primary-600 font-medium mt-2">
                    bugs@tiktokcalculator.com
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">💡 Feature Requests</h3>
                  <p className="text-body-sm text-neutral-600">
                    Have an idea for a new calculator or feature?
                  </p>
                  <p className="text-body-md text-primary-600 font-medium mt-2">
                    features@tiktokcalculator.com
                  </p>
                </div>

                <div className="p-4 bg-neutral-50 rounded-lg">
                  <h3 className="font-semibold text-neutral-900 mb-2">📊 Data Questions</h3>
                  <p className="text-body-sm text-neutral-600">
                    Questions about our data sources or methodology?
                  </p>
                  <p className="text-body-md text-primary-600 font-medium mt-2">
                    data@tiktokcalculator.com
                  </p>
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Response Time</h2>
            <p className="text-body-md text-neutral-700">
              We typically respond within 24-48 hours during business days. For urgent issues, please mark your subject line with [URGENT].
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Before You Contact Us</h2>
            <p className="text-body-md text-neutral-700 mb-4">
              You might find answers faster in our FAQ:
            </p>
            <ul className="space-y-2 text-body-md text-neutral-700">
              <li className="flex items-center space-x-2">
                <span className="text-primary-500">•</span>
                <span>Calculator-specific FAQs are at the bottom of each calculator page</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary-500">•</span>
                <span>Each calculator has a "How We Calculate This" methodology section</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-primary-500">•</span>
                <span>Check our comprehensive guides for in-depth explanations</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
