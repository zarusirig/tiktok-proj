import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';

export const metadata: Metadata = {
  title: 'TikTok Creator Fund: Complete Guide (Rates, Requirements, Payment) 2025',
  description: 'Everything about the TikTok Creator Fund: RPM rates, eligibility requirements, payment schedule, how much you can earn, and strategies to maximize earnings.',
  keywords: ['tiktok creator fund', 'creator fund rates', 'tiktok rpm', 'creator fund requirements', 'tiktok earnings'],
};

export default function CreatorFundGuidePage() {
  return (
    <>
      {/* Article Schema for SEO */}
      <ArticleSchema
        headline="TikTok Creator Fund: Complete Guide (2025)"
        description="Everything you need to know about the TikTok Creator Fund: RPM rates, eligibility requirements, payment schedule, realistic earnings, and optimization strategies."
        url="https://tiktokcalculator.com/guides/tiktok-creator-fund"
        datePublished="2024-01-15"
        dateModified="2025-11-13"
        keywords={['tiktok creator fund', 'creator fund rates', 'tiktok rpm', 'creator fund requirements', 'tiktok earnings']}
      />

      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="container-custom max-w-4xl">
          <nav className="flex items-center space-x-2 text-body-sm mb-6">
            <Link href="/" className="text-neutral-600 hover:text-primary-600">Home</Link>
            <span className="text-neutral-400">→</span>
            <Link href="/guides" className="text-neutral-600 hover:text-primary-600">Guides</Link>
            <span className="text-neutral-400">→</span>
            <span className="text-neutral-900 font-medium">TikTok Creator Fund Guide</span>
          </nav>

          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Creator Fund: Complete Guide (2025)
          </h1>
          <p className="text-body-lg text-neutral-600 mb-4">
            Everything you need to know about the TikTok Creator Fund: RPM rates, eligibility requirements, payment schedule, realistic earnings, and optimization strategies.
          </p>
          <div className="flex items-center space-x-4 text-body-sm text-neutral-600 mb-8">
            <span>📝 25 min read</span>
            <span>•</span>
            <span>Last updated: November 13, 2025</span>
          </div>

          {/* Author Byline */}
          <PageAuthorByline pageSlug="tiktok-creator-fund-guide" />

        {/* Quick Summary Card */}
        <Card className="mb-12 bg-primary-50 border border-primary-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Creator Fund at a Glance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Requirements</h3>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• 10,000+ followers</li>
                <li>• 100,000+ views (30 days)</li>
                <li>• 18+ years old</li>
                <li>• Account in good standing</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Payment Details</h3>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• $0.02-$0.04 per 1K views</li>
                <li>• Monthly payments</li>
                <li>• $10 minimum payout</li>
                <li>• PayPal or bank transfer</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* What Is Creator Fund */}
        <section id="what-is" className="mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">What Is the TikTok Creator Fund?</h2>

          <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
            The TikTok Creator Fund is a monetization program that pays eligible creators based on their video performance. Launched in July 2020 with an initial $200 million commitment (expanding to $1 billion over 3 years), it's designed to reward creators for producing engaging content.
          </p>

          <Card className="mb-6">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">How It Works</h3>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
              Unlike YouTube AdSense (which shares ad revenue), the Creator Fund operates on a <strong>fixed pool model</strong>. TikTok allocates a set amount of money each day, which is divided among all participating creators based on their performance.
            </p>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="text-body-sm text-neutral-800 mb-2"><strong>Key factors affecting your earnings:</strong></p>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• Video views</li>
                <li>• Video authenticity (original content)</li>
                <li>• Audience location (US/UK views pay more)</li>
                <li>• Engagement rate (likes, comments, shares)</li>
                <li>• Watch time (completion rate)</li>
              </ul>
            </div>
          </Card>

          <Card>
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Revenue Per Mille (RPM) Explained</h3>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
              RPM = Revenue Per Mille (per 1,000 views). This is how Creator Fund earnings are measured.
            </p>
            <div className="p-4 bg-info-light rounded-lg mb-4">
              <p className="text-body-md text-neutral-800">
                <strong>Formula:</strong> RPM = (Total Earnings / Total Views) × 1,000
              </p>
              <p className="text-body-sm text-neutral-700 mt-2">
                <strong>Example:</strong> If you earned $30 from 1 million views, your RPM is $0.03
              </p>
            </div>
            <p className="text-body-sm text-neutral-700">
              Average Creator Fund RPM: <strong>$0.02-$0.04</strong>. High-performing creators with premium niches (finance, business) can achieve $0.05-$0.06, while entertainment content often sees $0.01-$0.02.
            </p>
          </Card>
        </section>

        {/* Eligibility Requirements */}
        <section id="requirements" className="mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Eligibility Requirements</h2>

          <div className="space-y-6">
            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-xl">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">10,000+ Followers</h3>
                  <p className="text-body-md text-neutral-700 mb-3">
                    Your account must have at least 10,000 authentic followers. Purchased or bot followers don't count and may disqualify you.
                  </p>
                  <div className="p-3 bg-warning-light rounded-lg">
                    <p className="text-body-sm text-neutral-800">
                      <strong>Tip:</strong> Focus on organic growth through consistent posting (1-3× daily) and engaging with your community.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-xl">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">100,000+ Video Views (30 Days)</h3>
                  <p className="text-body-md text-neutral-700 mb-3">
                    You need at least 100,000 cumulative video views in the last 30 days. This is across all your videos, not per video.
                  </p>
                  <div className="p-3 bg-success-light rounded-lg">
                    <p className="text-body-sm text-neutral-800">
                      <strong>How to check:</strong> Go to Creator Tools → Analytics → Overview. Look at "Video Views" for last 28 days.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-xl">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">18+ Years Old</h3>
                  <p className="text-body-md text-neutral-700">
                    You must be at least 18 years old. TikTok verifies this during the application process.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-bold text-xl">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2">Account in Good Standing</h3>
                  <p className="text-body-md text-neutral-700 mb-3">
                    No community guideline violations, copyright strikes, or spam behavior. Your account should follow TikTok's Terms of Service.
                  </p>
                  <div className="p-3 bg-error-light rounded-lg">
                    <p className="text-body-sm text-neutral-800">
                      <strong>Disqualifiers:</strong> Multiple guideline violations, copyrighted music in every video, or engagement pods/bots.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* How Much You Can Earn */}
        <section id="earnings" className="mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">How Much You Can Earn</h2>

          <Card className="mb-6">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Earnings by Monthly Views</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-body-sm">
                <thead>
                  <tr className="border-b border-neutral-200">
                    <th className="text-left py-3 px-4">Monthly Views</th>
                    <th className="text-left py-3 px-4">Monthly Earnings (Low)</th>
                    <th className="text-left py-3 px-4">Monthly Earnings (High)</th>
                    <th className="text-left py-3 px-4">Annual Potential</th>
                  </tr>
                </thead>
                <tbody className="text-neutral-700">
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">100,000</td>
                    <td className="py-3 px-4">$2</td>
                    <td className="py-3 px-4">$4</td>
                    <td className="py-3 px-4">$24-$48</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">500,000</td>
                    <td className="py-3 px-4">$10</td>
                    <td className="py-3 px-4">$20</td>
                    <td className="py-3 px-4">$120-$240</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">1,000,000</td>
                    <td className="py-3 px-4">$20</td>
                    <td className="py-3 px-4">$40</td>
                    <td className="py-3 px-4">$240-$480</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">5,000,000</td>
                    <td className="py-3 px-4">$100</td>
                    <td className="py-3 px-4">$200</td>
                    <td className="py-3 px-4">$1,200-$2,400</td>
                  </tr>
                  <tr className="border-b border-neutral-100">
                    <td className="py-3 px-4">10,000,000</td>
                    <td className="py-3 px-4">$200</td>
                    <td className="py-3 px-4">$400</td>
                    <td className="py-3 px-4">$2,400-$4,800</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">50,000,000</td>
                    <td className="py-3 px-4">$1,000</td>
                    <td className="py-3 px-4">$2,000</td>
                    <td className="py-3 px-4">$12,000-$24,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          <Card className="mb-6">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">RPM by Content Niche</h3>
            <p className="text-body-md text-neutral-700 mb-4">
              Different content niches have different RPM rates due to advertiser demand and audience value:
            </p>
            <div className="space-y-2">
              {nicheRPM.map((niche) => (
                <div key={niche.name} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{niche.icon}</span>
                    <span className="font-medium text-neutral-900">{niche.name}</span>
                  </div>
                  <span className="text-neutral-700 font-semibold">${niche.rpm}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="p-6 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-body-md text-neutral-800 mb-4">
              <strong>Calculate your potential Creator Fund earnings now:</strong>
            </p>
            <Link href="/calculators/tiktok-creator-fund" className="btn btn-primary btn-md">
              Use Creator Fund Calculator →
            </Link>
          </div>
        </section>

        {/* Continue with more sections... */}

        {/* FAQ */}
        <FAQSection
          pageName="TikTok Creator Fund Guide"
          faqs={[
            {
              question: 'How much does TikTok Creator Fund pay per 1,000 views?',
              answer: 'TikTok Creator Fund pays between $0.02-$0.04 per 1,000 views on average, with most creators earning around $0.03 per 1,000 views. Premium niches like finance can earn $0.05-$0.06, while entertainment may earn $0.01-$0.02.',
            },
            {
              question: 'Why are my Creator Fund earnings so low?',
              answer: 'Low earnings are typically due to: (1) International audience (non-US/UK viewers pay less), (2) Low watch time/completion rate, (3) Decline in views, (4) More creators joining the fund (diluting the pool), or (5) Entertainment niche content (lower CPM).',
            },
            {
              question: 'How often does TikTok Creator Fund pay?',
              answer: 'Creator Fund payments are processed monthly, typically around the 15th of each month for the previous month\'s earnings. You need a minimum of $10 to withdraw. Payments are sent to your linked PayPal or bank account within 7-14 business days.',
            },
            {
              question: 'Can you make a living from TikTok Creator Fund?',
              answer: 'Realistically, no. Even with 10M monthly views, you\'d only earn $200-$400/month from Creator Fund. Most successful creators treat it as supplementary income and focus on brand deals (which pay 10-20× more) as their primary revenue stream.',
            },
            {
              question: 'Is TikTok Creator Fund worth it?',
              answer: 'Yes, if you qualify—it\'s passive income for views you\'re already getting. However, don\'t expect significant earnings. Focus your energy on growing to 50K+ followers for meaningful brand deal opportunities, which generate much higher income.',
            },
          ]}
        />

        {/* E-E-A-T Section */}
        <div className="mt-12">
          <PageEEAT pageSlug="tiktok-creator-fund-guide" variant="full" />
        </div>
      </div>
    </div>
    </>
  );
}

const nicheRPM = [
  { name: 'Finance & Business', rpm: '0.04-0.06', icon: '💰' },
  { name: 'Technology', rpm: '0.04-0.05', icon: '💻' },
  { name: 'Education', rpm: '0.03-0.05', icon: '📚' },
  { name: 'Beauty & Fashion', rpm: '0.03-0.04', icon: '💄' },
  { name: 'Fitness & Health', rpm: '0.03-0.04', icon: '💪' },
  { name: 'Food & Cooking', rpm: '0.02-0.03', icon: '🍳' },
  { name: 'Lifestyle', rpm: '0.02-0.03', icon: '✨' },
  { name: 'Comedy', rpm: '0.01-0.02', icon: '😂' },
  { name: 'Entertainment', rpm: '0.01-0.02', icon: '🎬' },
  { name: 'Gaming', rpm: '0.01-0.02', icon: '🎮' },
];
