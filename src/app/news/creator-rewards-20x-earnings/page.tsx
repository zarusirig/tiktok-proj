import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Creator Rewards Offers Up to 20x Higher Earnings Than Creator Fund | TikTok News',
  description: 'The new Creator Rewards Program provides revenue-per-mille rates ranging from $0.40 to $1.00 per 1,000 qualified views, up to 20 times higher than the previous Creator Fund.',
  keywords: ['creator rewards', 'tiktok earnings', 'creator fund comparison', 'monetization rates', 'rpm'],
};

export default function CreatorRewards20xEarningsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">20x Higher Earnings</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-orange-600">
              EARNINGS BOOST
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Creator Economy
            </span>
            <span className="text-white/80 text-label-sm">Published: 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            Creator Rewards Offers Up to 20x Higher Earnings
          </h1>
          <p className="text-heading-md text-white/90">
            New program delivers $0.40-$1.00 per 1K views vs. Creator Fund's $0.02-$0.04
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-yellow-50 border-2 border-yellow-200">
          <h2 className="text-heading-lg font-semibold text-yellow-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-yellow-800">
            Creator Rewards pays 10-20x more than the old Creator Fund. If you were earning $50/month from Creator Fund, you could potentially earn $500-$1,000/month with Creator Rewards—provided you meet the higher eligibility requirements and create 1+ minute content.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Earnings Comparison: Real Numbers
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="p-3 text-left text-heading-sm font-semibold">Views</th>
                  <th className="p-3 text-left text-heading-sm font-semibold text-rose-900">Creator Fund Earnings</th>
                  <th className="p-3 text-left text-heading-sm font-semibold text-green-900">Creator Rewards Earnings</th>
                  <th className="p-3 text-left text-heading-sm font-semibold text-emerald-900">Increase</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-3">100,000 views</td>
                  <td className="p-3 text-rose-800">$2 - $4</td>
                  <td className="p-3 text-green-800">$40 - $100</td>
                  <td className="p-3 text-emerald-800 font-semibold">20-25x</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">500,000 views</td>
                  <td className="p-3 text-rose-800">$10 - $20</td>
                  <td className="p-3 text-green-800">$200 - $500</td>
                  <td className="p-3 text-emerald-800 font-semibold">20-25x</td>
                </tr>
                <tr className="border-b">
                  <td className="p-3">1,000,000 views</td>
                  <td className="p-3 text-rose-800">$20 - $40</td>
                  <td className="p-3 text-green-800">$400 - $1,000</td>
                  <td className="p-3 text-emerald-800 font-semibold">20-25x</td>
                </tr>
                <tr>
                  <td className="p-3">10,000,000 views</td>
                  <td className="p-3 text-rose-800">$200 - $400</td>
                  <td className="p-3 text-green-800">$4,000 - $10,000</td>
                  <td className="p-3 text-emerald-800 font-semibold">20-25x</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What Determines Your RPM (Revenue Per Mille)?
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Creator Rewards pays between $0.40 and $1.00 per 1,000 qualified views. Where you fall in this range depends on:
          </p>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
              <span className="text-blue-600 text-2xl">📊</span>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Watch Time & Retention</p>
                <p className="text-body-sm text-neutral-700">Higher completion rates and average watch time = higher RPM</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
              <span className="text-purple-600 text-2xl">👥</span>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Audience Demographics</p>
                <p className="text-body-sm text-neutral-700">Content targeting higher-income demographics typically earns more</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
              <span className="text-green-600 text-2xl">💬</span>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Engagement Quality</p>
                <p className="text-body-sm text-neutral-700">Comments, shares, and saves signal high-value content</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
              <span className="text-amber-600 text-2xl">🎯</span>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">Content Category</p>
                <p className="text-body-sm text-neutral-700">Educational and finance content often earns higher RPM than entertainment</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your Potential Earnings
          </h2>
          <div className="grid gap-3">
            <Link
              href="/calculators/creator-rewards"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Creator Rewards Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
          </div>
        </Card>

        <Card className="bg-gray-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Official Sources
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://napolify.com/latest-tiktok-monetization-policy-changes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                Napolify: TikTok Monetization Updates →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
