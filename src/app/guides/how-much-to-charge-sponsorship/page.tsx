import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'How Much to Charge for TikTok Sponsorships: 2025 Pricing Guide',
  description: 'Complete guide to pricing TikTok sponsorships. Rate calculation formulas, industry benchmarks by follower count, negotiation strategies, and what to include in packages.',
  keywords: ['tiktok sponsorship rates', 'how much to charge', 'influencer pricing', 'brand deal rates', 'tiktok sponsored posts'],
};

export default function HowMuchToChargeSponsorshipPage() {
  const faqs = [
    {
      question: 'What is the standard formula for TikTok sponsorship pricing?',
      answer: 'Basic formula: (Followers / 1,000) × $10-$20 = base rate. Adjust up for high engagement (5%+), valuable niche (finance, tech), or proven conversion rates. Adjust down for low engagement or general entertainment niches.',
    },
    {
      question: 'Should I charge per post or per campaign?',
      answer: 'Both! Offer per-post pricing for one-offs ($X per video) and campaign packages (3-post bundle with 10% discount). Campaigns provide stability and are easier for brands to budget. Include deliverables: in-feed posts, stories, LIVE mentions, usage rights.',
    },
    {
      question: 'How do I justify my rates to brands?',
      answer: 'Provide your media kit: follower demographics, engagement rate data, previous campaign results (traffic, sales), audience testimonials. Calculate CPM (cost per 1,000 views) - if your average video gets 50K views and you charge $1,000, that is $20 CPM (competitive with ads).',
    },
    {
      question: 'Should I charge extra for Spark Ads authorization?',
      answer: 'Yes! Spark Ads rights should cost 1.5-2x your base rate because brands get extended value (can run as paid ads for weeks). Example: Base post rate $1,000 + Spark Ads rights $1,500 = $2,500 total.',
    },
    {
      question: 'When should I raise my rates?',
      answer: 'Raise rates when: (1) Followers grow 50%+, (2) Engagement rate increases significantly, (3) You have waitlist of brands, (4) Every 6-12 months to match market rates, (5) You deliver proven ROI for previous clients.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/guides">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">How Much to Charge</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            How Much to Charge for TikTok Sponsorships
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete pricing guide with formulas, benchmarks, and negotiation strategies
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Updated: November 2025</span>
            <span>💰 Pricing Guide</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Pricing Formula</h2>
          <div className="p-6 bg-gradient-to-br from-tiktok-pink/10 to-purple-50 rounded-lg mb-6">
            <p className="text-heading-md font-mono font-bold text-center text-tiktok-pink mb-4">
              Base Rate = (Followers ÷ 1,000) × $10-$20
            </p>
            <p className="text-body-sm text-neutral-700 text-center">
              Then multiply by engagement multiplier, niche factor, and deliverables
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="font-semibold text-neutral-900 mb-2">Example: 50K followers</p>
              <p className="text-body-sm text-neutral-700">50 × $15 = $750 base rate per post</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="font-semibold text-neutral-900 mb-2">Example: 200K followers</p>
              <p className="text-body-sm text-neutral-700">200 × $15 = $3,000 base rate per post</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <p className="font-semibold text-neutral-900 mb-2">Example: 1M followers</p>
              <p className="text-body-sm text-neutral-700">1,000 × $15 = $15,000 base rate per post</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Industry Benchmark Rates by Follower Count</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold">Tier</th>
                  <th className="text-left py-3 px-4 font-semibold">Followers</th>
                  <th className="text-left py-3 px-4 font-semibold">Per Post</th>
                  <th className="text-left py-3 px-4 font-semibold">3-Post Package</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { tier: 'Nano', followers: '1K - 10K', perPost: '$50 - $250', package: '$100 - $500' },
                  { tier: 'Micro', followers: '10K - 50K', perPost: '$250 - $1,000', package: '$500 - $2,500' },
                  { tier: 'Mid-Tier', followers: '50K - 100K', perPost: '$1,000 - $2,500', package: '$2,500 - $6,000' },
                  { tier: 'Macro', followers: '100K - 500K', perPost: '$2,500 - $10,000', package: '$6,000 - $25,000' },
                  { tier: 'Mega', followers: '500K - 1M', perPost: '$10,000 - $25,000', package: '$25,000 - $60,000' },
                  { tier: 'Celebrity', followers: '1M+', perPost: '$25,000 - $100,000+', package: '$60,000 - $250,000+' },
                ].map((item, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{item.tier}</td>
                    <td className="py-3 px-4 text-neutral-700">{item.followers}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-semibold">{item.perPost}</td>
                    <td className="py-3 px-4 text-neutral-700">{item.package}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Rate Adjustment Factors</h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Charge MORE for:</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-body-sm text-neutral-700">
                <li>✅ Engagement rate 5%+ (add 20-50%)</li>
                <li>✅ High-value niche: finance, tech, B2B (add 30-100%)</li>
                <li>✅ Exclusivity clause (add 50-100%)</li>
                <li>✅ Spark Ads usage rights (add 50-100%)</li>
                <li>✅ Multi-platform bundle (TikTok + IG + YouTube)</li>
                <li>✅ Rush delivery (add 25-50%)</li>
                <li>✅ Proven conversion rates/ROI</li>
                <li>✅ Premium audience demographics (high income, decision-makers)</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Charge LESS for:</h3>
              <ul className="grid md:grid-cols-2 gap-2 text-body-sm text-neutral-700">
                <li>❌ Low engagement (subtract 20-40%)</li>
                <li>❌ General entertainment niche</li>
                <li>❌ First-time client (offer discount for portfolio building)</li>
                <li>❌ Long-term partnership (volume discount)</li>
                <li>❌ Products you genuinely love (authentic endorsement)</li>
                <li>❌ Nonprofit/charitable causes</li>
              </ul>
            </div>
          </div>
        </Card>

        <FAQSection pageName="Sponsorship Pricing" faqs={faqs} />

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Tools</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/calculators/brand-deal-rate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Brand Deal Rate Calculator</h4>
              <p className="text-body-sm text-neutral-700">Calculate your exact rate</p>
            </Link>
            <Link href="/guides/how-to-get-brand-deals-complete" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">How to Get Brand Deals</h4>
              <p className="text-body-sm text-neutral-700">Land your first partnerships</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
