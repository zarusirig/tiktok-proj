import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok vs Instagram Creator Income: Which Pays More? (2025)',
  description: 'Complete comparison of creator earnings on TikTok vs Instagram. Monetization options, brand deal rates, and which platform is better for your niche.',
  keywords: ['tiktok vs instagram earnings', 'creator income comparison', 'which platform pays more', 'tiktok instagram money'],
};

export default function TikTokVsInstagramIncomePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/comparisons">Comparisons</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok vs Instagram Income</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-purple-600 to-pink-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok vs Instagram Creator Income
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete 2025 comparison: Which platform pays creators more?
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Quick Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold">Factor</th>
                  <th className="text-left py-3 px-4 font-semibold">TikTok</th>
                  <th className="text-left py-3 px-4 font-semibold">Instagram</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-medium">{row.factor}</td>
                    <td className="py-3 px-4">{row.tiktok}</td>
                    <td className="py-3 px-4">{row.instagram}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Earnings by Follower Tier</h2>
          {earningsComparison.map((tier, idx) => (
            <div key={idx} className="mb-6 p-4 bg-neutral-50 rounded-lg">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">{tier.range}</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-tiktok-pink/10 rounded-lg">
                  <p className="font-semibold text-tiktok-pink mb-2">TikTok</p>
                  <p className="text-2xl font-bold text-neutral-900 mb-2">{tier.tiktok.total}</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    {tier.tiktok.breakdown.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div className="p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                  <p className="font-semibold text-purple-600 mb-2">Instagram</p>
                  <p className="text-2xl font-bold text-neutral-900 mb-2">{tier.instagram.total}</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1">
                    {tier.instagram.breakdown.map((item, i) => (
                      <li key={i}>• {item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-3 text-body-sm text-neutral-600">
                <strong>Winner:</strong> {tier.winner}
              </p>
            </div>
          ))}
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Which Platform for Your Niche?</h2>
          <div className="space-y-3">
            {nicheRecommendations.map((niche, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{niche.name}</h3>
                <p className="text-body-sm text-neutral-700 mb-2">{niche.recommendation}</p>
                <p className="text-body-sm text-neutral-600"><strong>Best choice:</strong> {niche.winner}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-tiktok-pink/10 to-purple-100">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Multi-Platform Strategy (Best Approach)</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Most successful creators use BOTH platforms to maximize earnings:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white rounded-lg">
              <span className="text-2xl mb-2 block">1️⃣</span>
              <p className="font-semibold text-neutral-900 mb-1">Create on TikTok</p>
              <p className="text-body-sm text-neutral-700">Easier growth, faster results</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <span className="text-2xl mb-2 block">2️⃣</span>
              <p className="font-semibold text-neutral-900 mb-1">Repurpose to Instagram</p>
              <p className="text-body-sm text-neutral-700">Post as Reels, maximize reach</p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <span className="text-2xl mb-2 block">3️⃣</span>
              <p className="font-semibold text-neutral-900 mb-1">Monetize Both</p>
              <p className="text-body-sm text-neutral-700">40-60% more total income</p>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/calculators/creator-fund" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-1">📊 TikTok Earnings Calculator</h4>
              <p className="text-body-sm text-neutral-700">Project your TikTok income potential</p>
            </Link>
            <Link href="/guides/how-to-make-money-on-tiktok" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-1">💰 TikTok Monetization Guide</h4>
              <p className="text-body-sm text-neutral-700">All ways to earn on TikTok</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

const comparisonData = [
  { factor: 'Easier to go viral', tiktok: '✅ Yes (algorithm favors new creators)', instagram: '❌ No (follower count matters more)' },
  { factor: 'Better for small accounts', tiktok: '✅ Yes (can earn with 1K followers)', instagram: '❌ No (need 10K+ for most features)' },
  { factor: 'Creator Fund/Bonus earnings', tiktok: '$0.02-$0.04 per 1K views', instagram: 'Reels bonus pays 2-3× more (invite-only)' },
  { factor: 'Brand deal rates', tiktok: 'Slightly lower', instagram: '10-20% higher' },
  { factor: 'Growth speed', tiktok: '✅ Faster', instagram: '❌ Slower' },
];

const earningsComparison = [
  {
    range: '10K-50K Followers',
    tiktok: {
      total: '$500-$2,500/mo',
      breakdown: [
        'Creator Fund: $50-$300',
        'Brand deals: $200-$1,000',
        'LIVE gifts: $100-$500',
      ],
    },
    instagram: {
      total: '$700-$3,500/mo',
      breakdown: [
        'Reels bonus: $100-$500',
        'Brand deals: $300-$1,500',
        'Affiliate: $200-$800',
      ],
    },
    winner: 'Instagram (15-30% higher)',
  },
  {
    range: '100K+ Followers',
    tiktok: {
      total: '$15,000-$80,000/mo',
      breakdown: [
        'Creator Fund: $800-$3,000',
        'Brand deals: $3,000-$15,000/post',
        'Other: $2,000-$10,000',
      ],
    },
    instagram: {
      total: '$20,000-$100,000/mo',
      breakdown: [
        'Reels bonus: $2,000-$10,000',
        'Brand deals: $5,000-$20,000/post',
        'Affiliate: $3,000-$15,000',
      ],
    },
    winner: 'Instagram (25-30% higher)',
  },
];

const nicheRecommendations = [
  { name: 'Entertainment, Comedy', recommendation: 'TikTok\'s format is better for short, punchy comedy. Easier growth.', winner: 'TikTok' },
  { name: 'Fashion, Beauty', recommendation: 'Instagram\'s photo-first approach is better for aesthetic content, but TikTok grows faster.', winner: 'Both (use both platforms)' },
  { name: 'Fitness', recommendation: 'Both work well. TikTok for quick tips, Instagram for transformation photos.', winner: 'Both' },
  { name: 'Professional/Polished content', recommendation: 'Instagram\'s mature audience and aesthetic focus is better.', winner: 'Instagram' },
];
