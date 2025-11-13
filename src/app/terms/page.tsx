import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Terms of Service for TikTok Creator Calculator. Usage guidelines and disclaimers.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-md font-bold text-neutral-900 mb-4">Terms of Service</h1>
        <p className="text-body-md text-neutral-600 mb-8">Last Updated: November 13, 2025</p>

        <div className="space-y-6">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Acceptance of Terms</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              By accessing and using TikTok Creator Calculator, you agree to these Terms of Service. If you disagree with any part, please discontinue use.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Use of Service</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p><strong>Permitted Use:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Personal estimation of TikTok earnings</li>
                <li>Research and planning for content strategy</li>
                <li>Educational purposes</li>
                <li>Benchmarking and negotiation preparation</li>
              </ul>
              <p className="mt-4"><strong>Prohibited Use:</strong></p>
              <ul className="list-disc list-inside ml-4 space-y-1">
                <li>Commercial redistribution of calculator code or data</li>
                <li>Scraping or automated data extraction</li>
                <li>Misrepresentation of calculator outputs as guarantees</li>
                <li>Any illegal or fraudulent activity</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Disclaimers</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p><strong>Estimates Only:</strong> Our calculators provide estimates based on industry averages and reported creator earnings. Actual earnings may vary significantly.</p>
              <p><strong>No Guarantees:</strong> We do not guarantee any specific earnings. TikTok earnings depend on factors we cannot predict: algorithm changes, audience behavior, content quality, and more.</p>
              <p><strong>Not Financial Advice:</strong> Our tools are educational. We are not financial advisors. Consult a professional for financial planning.</p>
              <p><strong>No TikTok Affiliation:</strong> We are not affiliated with, endorsed by, or connected to TikTok, ByteDance Ltd, or any social media platform.</p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Data Accuracy</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              We strive for accuracy using verified data sources. However, TikTok's monetization programs change frequently. We update data quarterly but cannot guarantee real-time accuracy. Always verify with official TikTok sources.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Limitation of Liability</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              TO THE FULLEST EXTENT PERMITTED BY LAW, TIKTOK CREATOR CALCULATOR SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM USE OF OUR SERVICE, INCLUDING BUT NOT LIMITED TO LOST EARNINGS, BUSINESS DECISIONS BASED ON CALCULATOR OUTPUTS, OR TECHNICAL ERRORS.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Intellectual Property</h2>
            <p className="text-body-md text-neutral-700 mb-4">
              All content on this site (text, calculators, formulas, design) is owned by TikTok Creator Calculator and protected by copyright.
            </p>
            <p className="text-body-md text-neutral-700">
              <strong>You may:</strong> Use calculators for personal purposes, share links to our site<br />
              <strong>You may not:</strong> Copy calculator code, republish our content, or create derivative works without permission
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Changes to Service</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              We reserve the right to modify, suspend, or discontinue any part of the service at any time without notice. We may also update calculators, change methodologies, or adjust data sources to maintain accuracy.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">User Conduct</h2>
            <p className="text-body-md text-neutral-700 mb-4">You agree not to:</p>
            <ul className="list-disc list-inside space-y-2 text-body-md text-neutral-700 ml-4">
              <li>Attempt to hack, disrupt, or overload our servers</li>
              <li>Use bots or automated tools to access the service</li>
              <li>Misrepresent yourself or impersonate others</li>
              <li>Submit false or misleading information</li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Governing Law</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              These Terms are governed by the laws of the United States. Any disputes shall be resolved in accordance with applicable law.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Contact</h2>
            <p className="text-body-md text-neutral-700">
              Questions about these Terms? Contact us at: <strong>legal@tiktokcalculator.com</strong>
            </p>
          </Card>

          <div className="mt-8 p-6 bg-neutral-100 rounded-lg">
            <p className="text-body-sm text-neutral-600 italic">
              By using TikTok Creator Calculator, you acknowledge that you have read, understood, and agree to these Terms of Service and our Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
