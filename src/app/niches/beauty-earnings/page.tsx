import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Beauty Creators TikTok Earnings Guide: Realistic Income Data (2025)',
  description: 'Complete earnings guide for beauty creators on TikTok. Income by follower tier, brand deal rates, affiliate commissions, and monetization strategies.',
  keywords: ['beauty creator earnings', 'tiktok beauty income', 'beauty influencer rates', 'makeup creator money'],
};

export default function BeautyEarningsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/guides">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Beauty Creator Earnings</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-pink-500 via-purple-500 to-pink-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            💄 Beauty Creators TikTok Earnings Guide
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Realistic income data, brand deal rates, and monetization strategies for beauty creators in 2025
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-pink-50 border-pink-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Beauty Performs Well on TikTok</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { icon: '🛍️', title: 'High Purchase Intent', desc: 'Viewers actively seeking product recommendations' },
              { icon: '🤝', title: 'Strong Brand Demand', desc: 'Beauty industry spends $10B+ on influencer marketing' },
              { icon: '📈', title: 'High Conversion', desc: '10-20% commission rates on affiliate products' },
              { icon: '💬', title: 'Engaged Audiences', desc: 'High save rates, comments asking about products' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg">
                <span className="text-3xl mb-2 block">{item.icon}</span>
                <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                <p className="text-body-sm text-neutral-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Earnings by Follower Tier</h2>
          <div className="space-y-6">
            {earningsTiers.map((tier, idx) => (
              <div key={idx} className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-heading-md font-semibold text-neutral-900">{tier.range}</h3>
                  <span className="text-2xl font-bold text-tiktok-pink">{tier.monthly}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 text-body-sm">
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">Income Breakdown:</p>
                    <ul className="space-y-1 text-neutral-700">
                      {tier.breakdown.map((item, i) => (
                        <li key={i}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-neutral-900 mb-2">Typical Sponsors:</p>
                    <p className="text-neutral-700">{tier.sponsors}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Top Earning Opportunities</h2>
          <div className="space-y-4">
            {opportunities.map((opp, idx) => (
              <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
                <h3 className="font-semibold text-neutral-900 mb-2">{opp.title}</h3>
                <p className="text-body-md text-neutral-700 mb-2">{opp.description}</p>
                <p className="text-body-sm text-green-800"><strong>Earning Potential:</strong> {opp.potential}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-tiktok-pink/10 to-tiktok-blue/10">
          <div className="text-center">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
              Calculate Your Beauty Creator Earnings
            </h3>
            <p className="text-body-md text-neutral-700 mb-6">
              Use our specialized calculator to estimate your income potential as a beauty creator
            </p>
            <Link href="/calculators/creator-fund" className="btn btn-primary">
              Calculate Earnings →
            </Link>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-get-brand-deals" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-1">🤝 How to Get Brand Deals</h4>
              <p className="text-body-sm text-neutral-700">Strategies to land beauty brand partnerships</p>
            </Link>
            <Link href="/guides/how-to-become-tiktok-shop-affiliate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-1">🛍️ TikTok Shop Affiliate</h4>
              <p className="text-body-sm text-neutral-700">Earn commissions promoting beauty products</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

const earningsTiers = [
  {
    range: '5K–10K Followers',
    monthly: '$50–$300',
    breakdown: [
      'Creator Fund: $20–$50',
      'Brand deals: $50–$200/post',
      'TikTok Shop: $20–$100',
      'LIVE gifts: $10–$50',
    ],
    sponsors: 'Emerging beauty brands, indie cosmetics',
  },
  {
    range: '10K–50K Followers',
    monthly: '$300–$2,000',
    breakdown: [
      'Creator Fund: $50–$200',
      'Brand deals: $200–$1,000/post',
      'TikTok Shop: $100–$500',
      'LIVE gifts: $50–$300',
    ],
    sponsors: 'Mid-tier beauty brands, drugstore brands',
  },
  {
    range: '50K–100K Followers',
    monthly: '$2,000–$10,000',
    breakdown: [
      'Creator Fund: $200–$500',
      'Brand deals: $1,000–$3,000/post',
      'TikTok Shop: $500–$2,000',
      'LIVE gifts: $300–$1,500',
    ],
    sponsors: 'Major drugstore brands, Sephora, Ulta',
  },
];

const opportunities = [
  {
    title: 'PR Packages + Sponsored Reviews',
    description: 'Brands send free products and pay for dedicated review videos',
    potential: '$500–$5,000 per review',
  },
  {
    title: 'TikTok Shop Affiliate',
    description: 'Link skincare/makeup products, earn 10-20% commission per sale',
    potential: '$1,000–$10,000/month for successful affiliates',
  },
  {
    title: 'Brand Ambassadorships',
    description: '6-12 month contracts with monthly retainer',
    potential: '$2,000–$20,000/month',
  },
];
