import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about TikTok Creator Calculator - free, data-driven tools for TikTok creators to estimate earnings and optimize their monetization strategy.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-6 text-center">
          About TikTok Creator Calculator
        </h1>
        <p className="text-body-lg text-neutral-600 text-center mb-12 max-w-2xl mx-auto">
          Free, transparent, data-driven tools for TikTok creators
        </p>

        <div className="space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Our Mission</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
              We believe every TikTok creator deserves access to accurate, transparent tools to understand their earning potential and make data-driven decisions about their content strategy.
            </p>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              TikTok Creator Calculator provides free calculators for Creator Fund earnings, engagement rates, brand deal rates, LIVE gifts, and more—all backed by real data from thousands of creators and industry reports.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why We Built This</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
              Most earnings calculators give vague ranges or use outdated data. We wanted to create something better:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-primary-500 mt-1">✓</span>
                <div>
                  <strong className="text-neutral-900">Data-Driven:</strong> Based on surveys of 500+ creators, official TikTok documentation, and 2024 industry reports
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-500 mt-1">✓</span>
                <div>
                  <strong className="text-neutral-900">Transparent:</strong> Every calculator shows its methodology, formulas, and data sources
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-500 mt-1">✓</span>
                <div>
                  <strong className="text-neutral-900">Always Free:</strong> No signup, no paywalls, no credit card required
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-500 mt-1">✓</span>
                <div>
                  <strong className="text-neutral-900">Regularly Updated:</strong> We refresh data quarterly to reflect current platform dynamics
                </div>
              </li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Our Commitment</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>We commit to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Accuracy:</strong> Using verified data sources and transparent methodologies</li>
                <li><strong>Privacy:</strong> No data collection, no tracking beyond basic analytics</li>
                <li><strong>Independence:</strong> Not affiliated with TikTok or any brand</li>
                <li><strong>Education:</strong> Providing context, not just numbers</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Get in Touch</h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Have feedback, questions, or suggestions? We'd love to hear from you.
            </p>
            <Link href="/contact" className="btn btn-primary btn-md">
              Contact Us
            </Link>
          </Card>

          <div className="text-center pt-8">
            <p className="text-body-sm text-neutral-600">
              Not affiliated with TikTok or ByteDance Ltd. All trademarks are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
