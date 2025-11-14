import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Creator Fund Replaced with Creator Rewards Program | TikTok News',
  description: 'TikTok officially discontinued the Creator Fund and launched the Creator Rewards Program with dramatically increased requirements: 10,000 followers and 100,000 monthly views.',
  keywords: ['creator rewards', 'creator fund', 'tiktok monetization', 'creator economy', 'earnings program'],
};

export default function CreatorRewardsProgramLaunchPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Creator Rewards Launch</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-green-600">
              MAJOR CHANGE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Monetization
            </span>
            <span className="text-white/80 text-label-sm">Published: 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            Creator Fund Replaced with Creator Rewards Program
          </h1>
          <p className="text-heading-md text-white/90">
            New program offers up to 20x higher earnings but requires 10K followers and 100K monthly views
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-green-50 border-2 border-green-200">
          <h2 className="text-heading-lg font-semibold text-green-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-green-800">
            TikTok has officially sunset the Creator Fund and launched the Creator Rewards Program with dramatically higher payouts but significantly increased eligibility requirements. While earnings potential is 10-20x higher, the barrier to entry has raised substantially, focusing rewards on established creators producing longer-form content.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Creator Fund vs. Creator Rewards: Side-by-Side Comparison
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-neutral-100">
                  <th className="p-3 text-left text-heading-sm font-semibold text-neutral-900">Criteria</th>
                  <th className="p-3 text-left text-heading-sm font-semibold text-rose-900">Creator Fund (OLD)</th>
                  <th className="p-3 text-left text-heading-sm font-semibold text-green-900">Creator Rewards (NEW)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-semibold text-neutral-900">Follower Requirement</td>
                  <td className="p-3 text-rose-800">1,000 followers</td>
                  <td className="p-3 text-green-800">10,000 followers</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-semibold text-neutral-900">View Requirement</td>
                  <td className="p-3 text-rose-800">10,000 views (30 days)</td>
                  <td className="p-3 text-green-800">100,000 views (30 days)</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-semibold text-neutral-900">Video Length</td>
                  <td className="p-3 text-rose-800">Any length</td>
                  <td className="p-3 text-green-800">1 minute+ only</td>
                </tr>
                <tr className="border-b border-neutral-200">
                  <td className="p-3 font-semibold text-neutral-900">Earnings Per 1K Views</td>
                  <td className="p-3 text-rose-800">$0.02 - $0.04</td>
                  <td className="p-3 text-green-800">$0.40 - $1.00</td>
                </tr>
                <tr>
                  <td className="p-3 font-semibold text-neutral-900">Status</td>
                  <td className="p-3 text-rose-800">❌ Discontinued</td>
                  <td className="p-3 text-green-800">✅ Active</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            New Eligibility Requirements
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                📊 10,000 Followers
              </h3>
              <p className="text-body-sm text-blue-800">
                You must have at least 10,000 followers on your TikTok account. This is a 10x increase from the Creator Fund's 1,000 follower requirement.
              </p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                👁️ 100,000 Monthly Views
              </h3>
              <p className="text-body-sm text-purple-800">
                Your qualified videos (1 minute+) must generate at least 100,000 views in the last 30 days. This resets monthly and only counts eligible content.
              </p>
            </div>
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
                ⏱️ Videos Must Be 1 Minute or Longer
              </h3>
              <p className="text-body-sm text-green-800">
                Only videos longer than 60 seconds qualify for Creator Rewards earnings. Short-form content (under 1 minute) does not generate revenue through this program.
              </p>
            </div>
            <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">
                🌍 Regional Availability
              </h3>
              <p className="text-body-sm text-amber-800">
                Must be 18+ and located in an eligible country (US, UK, Germany, France, and select other regions).
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Why TikTok Made This Change
          </h2>
          <div className="bg-slate-50 p-6 rounded-lg">
            <p className="text-body-md text-neutral-700 mb-4">
              TikTok's shift from Creator Fund to Creator Rewards reflects the platform's strategic pivot toward longer-form content and higher-quality creators. The company aims to:
            </p>
            <ul className="space-y-2 text-body-sm text-neutral-700 list-disc list-inside ml-4">
              <li>Compete with YouTube for mid-form content (1-10 minutes)</li>
              <li>Increase average watch time and platform engagement</li>
              <li>Focus monetization on established creators rather than micro-creators</li>
              <li>Improve earnings for serious, professional content creators</li>
              <li>Reduce fraudulent accounts exploiting low Creator Fund thresholds</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-amber-50">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
            What Happens to Creator Fund Members?
          </h2>
          <div className="space-y-3">
            <p className="text-body-md text-amber-800">
              Creators currently enrolled in the Creator Fund received notifications about the transition:
            </p>
            <div className="bg-white p-4 rounded-lg">
              <ul className="space-y-2 text-body-sm text-amber-800 list-disc list-inside">
                <li><strong>Automatic Opt-Out:</strong> The Creator Fund was automatically discontinued</li>
                <li><strong>Opt-In Required:</strong> You must manually apply for Creator Rewards if eligible</li>
                <li><strong>Pending Payments:</strong> All Creator Fund earnings were paid out before shutdown</li>
                <li><strong>Grace Period:</strong> Small creators given time to grow to new thresholds</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How to Qualify for Creator Rewards
          </h2>
          <ol className="space-y-4">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">1</span>
              <div>
                <p className="text-body-md font-semibold text-neutral-900 mb-1">Grow to 10,000 Followers</p>
                <p className="text-body-sm text-neutral-700">Focus on consistent, niche content. Use trending sounds, collaborate, and engage with your community</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">2</span>
              <div>
                <p className="text-body-md font-semibold text-neutral-900 mb-1">Create 1+ Minute Videos</p>
                <p className="text-body-sm text-neutral-700">Shift your strategy to produce engaging content over 60 seconds. Focus on retention and storytelling</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">3</span>
              <div>
                <p className="text-body-md font-semibold text-neutral-900 mb-1">Hit 100K Monthly Views</p>
                <p className="text-body-sm text-neutral-700">Post consistently (3-5x/week) and optimize for the algorithm changes favoring retention</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center font-semibold">4</span>
              <div>
                <p className="text-body-md font-semibold text-neutral-900 mb-1">Apply Through Creator Portal</p>
                <p className="text-body-sm text-neutral-700">Once eligible, apply via Settings → Creator Tools → Creator Rewards Program</p>
              </div>
            </li>
          </ol>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your Creator Rewards Potential
          </h2>
          <div className="grid gap-3">
            <Link
              href="/calculators/tiktok-creator-fund"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Creator Rewards Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/calculators/tiktok-money"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">TikTok Money Calculator</span>
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
                href="/guides/tiktok-monetization-requirements"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                TikTok Monetization Requirements Guide →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
