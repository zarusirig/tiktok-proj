import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Series Monetization Guide 2025: Paywalled Content Earnings',
  description: 'How to monetize with TikTok Series (paywalled content). Requirements, pricing strategies, earnings potential, and best practices for premium content.',
  keywords: ['tiktok series', 'paywalled content tiktok', 'tiktok premium content', 'series monetization'],
};

export default function TikTokSeriesMonetizationPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">TikTok Series Monetization</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok Series: Paywalled Content Guide</h1>
          <p className="text-heading-md text-white/90 mb-6">Monetize premium content with TikTok's Series feature</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What is TikTok Series?</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok Series allows creators to post collections of premium videos (up to 20 minutes each) behind a paywall. Viewers pay $0.99-$189.99 for access.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-blue-50 rounded-lg text-center">
              <div className="text-4xl mb-2">🎬</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Create Series</h3>
              <p className="text-body-sm text-neutral-700">Collections of 2-80 premium videos</p>
            </div>
            <div className="p-5 bg-purple-50 rounded-lg text-center">
              <div className="text-4xl mb-2">💲</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Set Price</h3>
              <p className="text-body-sm text-neutral-700">$0.99 to $189.99 per series</p>
            </div>
            <div className="p-5 bg-green-50 rounded-lg text-center">
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Earn Revenue</h3>
              <p className="text-body-sm text-neutral-700">Keep majority of sales (varies by region)</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Requirements & Availability</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Eligibility Criteria:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>✅ 18 years or older</li>
                <li>✅ 10,000+ followers (some regions require more)</li>
                <li>✅ Available in eligible countries (US, UK, select markets)</li>
                <li>✅ Account in good standing (no violations)</li>
                <li>✅ Completed identity verification</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-body-sm text-neutral-800">
                <strong>Note:</strong> TikTok Series is still rolling out globally. Availability and requirements vary by region. Check Creator Tools for current status.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Pricing Strategy</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Series Length</th>
                  <th className="text-left py-3 px-4">Recommended Price</th>
                  <th className="text-left py-3 px-4">Best For</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { length: '2-5 episodes (Starter)', price: '$0.99 - $4.99', bestFor: 'Testing concept, building trust' },
                  { length: '6-15 episodes (Standard)', price: '$9.99 - $29.99', bestFor: 'Comprehensive courses, tutorials' },
                  { length: '16-40 episodes (Premium)', price: '$39.99 - $99.99', bestFor: 'In-depth masterclasses, programs' },
                  { length: '40+ episodes (Ultimate)', price: '$99.99 - $189.99', bestFor: 'Complete transformation programs' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.length}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-semibold">{row.price}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.bestFor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Content Ideas for Series</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { category: 'Education', examples: ['Complete courses (photography, coding, language)', 'Step-by-step tutorials', 'Certification prep'] },
              { category: 'Fitness', examples: ['30-day workout programs', 'Meal planning series', 'Transformation challenges'] },
              { category: 'Business', examples: ['How to start [business type]', 'Marketing masterclass', 'Sales training'] },
              { category: 'Creative', examples: ['Art technique series', 'Music production lessons', 'Writing workshop'] },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{item.category}</h3>
                <ul className="space-y-1 text-body-sm text-neutral-700">
                  {item.examples.map((ex, exIdx) => (
                    <li key={exIdx}>• {ex}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/content-strategy-2025" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Content Strategy</h4>
              <p className="text-body-sm text-neutral-700">Plan your Series content</p>
            </Link>
            <Link href="/calculators/tiktok-money" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Earnings Calculator</h4>
              <p className="text-body-sm text-neutral-700">Estimate Series revenue</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
