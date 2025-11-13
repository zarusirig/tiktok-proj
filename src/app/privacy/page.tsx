import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy Policy for TikTok Creator Calculator. Learn how we handle data and protect your privacy.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-md font-bold text-neutral-900 mb-4">Privacy Policy</h1>
        <p className="text-body-md text-neutral-600 mb-8">Last Updated: November 13, 2025</p>

        <div className="space-y-6">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Our Commitment</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              TikTok Creator Calculator is committed to protecting your privacy. We believe in transparency and minimal data collection. This policy explains what data we collect, how we use it, and your rights.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Data We Collect</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Calculator Inputs (Not Stored)</h3>
                <p>When you use our calculators, you enter data like follower counts, engagement rates, etc. <strong>We do NOT collect, store, or transmit these inputs.</strong> All calculations happen in your browser.</p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">Analytics Data (Anonymous)</h3>
                <p>We use Google Analytics 4 to collect anonymous usage statistics:</p>
                <ul className="list-disc list-inside mt-2 ml-4 space-y-1">
                  <li>Pages visited</li>
                  <li>Calculator usage (which calculators are used, but not the values entered)</li>
                  <li>Browser type and device information</li>
                  <li>Approximate location (city level, for regional content optimization)</li>
                </ul>
                <p className="mt-2">This data is anonymized and aggregated. We cannot identify individual users.</p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How We Use Data</h2>
            <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
              <li>Improve calculator accuracy and user experience</li>
              <li>Understand which tools are most valuable to creators</li>
              <li>Fix technical issues and bugs</li>
              <li>Generate aggregated statistics (e.g., "10,000 calculations performed this month")</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Data We DON'T Collect</h2>
            <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
              <li>Personal information (name, email, phone)</li>
              <li>Calculator input values (follower counts, earnings, etc.)</li>
              <li>TikTok account information</li>
              <li>Financial information</li>
              <li>Precise location data</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Cookies</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              We use cookies for Google Analytics. These cookies help us understand how visitors use our site. You can disable cookies in your browser settings without affecting calculator functionality.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Third-Party Services</h2>
            <p className="text-body-md text-neutral-700 mb-4">We use the following third-party services:</p>
            <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
              <li><strong>Google Analytics:</strong> Website analytics (subject to Google's privacy policy)</li>
              <li><strong>Firebase Hosting:</strong> Website hosting (no additional data collection)</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Your Rights</h2>
            <p className="text-body-md text-neutral-700 mb-4">Since we don't collect personal data, there's nothing to access, delete, or export. If you have concerns:</p>
            <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
              <li>Disable cookies in your browser</li>
              <li>Use browser privacy mode</li>
              <li>Contact us at privacy@tiktokcalculator.com</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Children's Privacy</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              Our service is not directed at children under 13. We do not knowingly collect data from children. TikTok's Creator Fund requires users to be 18+, which is our primary audience.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Changes to This Policy</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              We may update this policy occasionally. Changes will be posted on this page with an updated "Last Updated" date. Continued use of the site constitutes acceptance of changes.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Contact Us</h2>
            <p className="text-body-md text-neutral-700">
              Questions about privacy? Contact us at: <strong>privacy@tiktokcalculator.com</strong>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
