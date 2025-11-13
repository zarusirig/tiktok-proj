import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok LIVE vs YouTube LIVE Earnings: 2025 Comparison Guide',
  description: 'Compare TikTok LIVE gifts vs YouTube Super Chat earnings, requirements, payment structures, and which platform pays live streamers more.',
  keywords: ['tiktok live vs youtube', 'live streaming earnings', 'super chat vs gifts', 'live monetization comparison'],
};

export default function TikTokLiveVsYouTubeLivePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/comparisons">Comparisons</Link><span>/</span>
            <span className="text-neutral-900">TikTok LIVE vs YouTube LIVE</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok LIVE vs YouTube LIVE: Earnings Comparison
          </h1>
          <p className="text-heading-md text-white/90 mb-6">Which platform pays live streamers more in 2025?</p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Feature</th>
                  <th className="text-left py-3 px-4">TikTok LIVE</th>
                  <th className="text-left py-3 px-4">YouTube LIVE</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Requirements', tiktok: '1,000 followers', youtube: '1,000 subscribers (same)' },
                  { feature: 'Creator Revenue Share', tiktok: '50% of gift value', youtube: '70% of Super Chat' },
                  { feature: 'Minimum Payout', tiktok: '$50', youtube: '$100' },
                  { feature: 'Avg Earnings/Hour', tiktok: '$5-$50 (highly variable)', youtube: '$10-$100 (more stable)' },
                  { feature: 'Audience Generosity', tiktok: 'High (younger, gift culture)', youtube: 'Moderate (older, tip culture)' },
                  { feature: 'Discovery', tiktok: 'LIVE tab, FYP integration', youtube: 'Subscription feed, limited discovery' },
                  { feature: 'Stream Length', tiktok: 'Unlimited', youtube: 'Unlimited (12hr+ possible)' },
                  { feature: 'Platform Fee', tiktok: '50% (expensive)', youtube: '30% (better for creators)' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.feature}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.tiktok}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.youtube}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Revenue Share Comparison</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-tiktok-pink/10 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">TikTok LIVE Gifts</h3>
              <p className="text-body-md text-neutral-700 mb-4">Creator Share: <span className="font-bold text-tiktok-pink">50%</span></p>
              <p className="text-body-sm text-neutral-700 mb-2">Example: $100 in gifts received</p>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• TikTok takes: $50 (50%)</li>
                <li>• Creator earns: $50</li>
              </ul>
            </div>
            <div className="p-6 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">YouTube Super Chat</h3>
              <p className="text-body-md text-neutral-700 mb-4">Creator Share: <span className="font-bold text-red-600">70%</span></p>
              <p className="text-body-sm text-neutral-700 mb-2">Example: $100 in Super Chats</p>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• YouTube takes: $30 (30%)</li>
                <li>• Creator earns: $70</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-body-sm text-neutral-800">
              <strong>Winner: YouTube</strong> - Creators keep 70% vs TikTok's 50%. YouTube's revenue share is 40% better for creators.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Best Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Choose TikTok LIVE if:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>✅ You have young (13-24) engaged audience</li>
                <li>✅ You want quick growth (LIVE tab discovery)</li>
                <li>✅ Short-form content is your strength</li>
                <li>✅ You need faster path to monetization (1K easier than YouTube)</li>
                <li>✅ You can stream frequently (daily LIVE builds community)</li>
              </ul>
            </div>
            <div className="p-5 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Choose YouTube LIVE if:</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>✅ You have established YouTube channel</li>
                <li>✅ Your audience is older (25-45+)</li>
                <li>✅ Long-form content (1hr+ streams)</li>
                <li>✅ You want better revenue share (70% vs 50%)</li>
                <li>✅ Building sustainable long-term income</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
