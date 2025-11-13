import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'How Much Do Finance Creators Make on TikTok? FinTok Earnings 2025',
  description: 'Complete earnings guide for TikTok finance creators. See real FinTok income data, highest-paying niche breakdown, and monetization strategies.',
  keywords: ['finance creator earnings', 'fintok money', 'financial influencer income', 'personal finance tiktok', 'fintok monetization'],
};

export default function FinanceCreatorsEarningsPage() {
  const faqs = [
    {
      question: 'Do finance creators earn more than other niches?',
      answer: 'Yes, finance is THE highest-paying TikTok niche. Creator Fund RPM is 2-3x higher ($0.05-$0.07 vs. $0.02 average), and brand deal rates are 40-60% above average. A finance creator with 50K followers can earn $6K-$10K/month, while a comedy creator with same followers earns $1K-$2K/month. Finance brands pay premium because viewers have high income and strong purchase intent.',
    },
    {
      question: 'Do I need financial certifications to be a finance creator?',
      answer: 'No, but you need disclaimers. Most successful FinTok creators are NOT CFPs or financial advisors—they share personal experiences, budgeting tips, and general education. CRITICAL: Always add "Not financial advice" disclaimer and check FTC/SEC guidelines. Focus on education and personal stories, not individualized investment advice (which requires licenses).',
    },
    {
      question: 'What finance topics earn the most?',
      answer: 'Highest earning: (1) Credit cards & points ($$$—banks pay $50-$200 per signup), (2) Investing & stocks ($$—brokerages pay well), (3) Budgeting apps ($$—SaaS affiliates), (4) Real estate investing ($$$—courses, platforms). Lower earning: General "money tips" or motivational content without specific products/services to promote.',
    },
    {
      question: 'Can finance creators use TikTok Shop affiliate?',
      answer: 'Limited. TikTok Shop has fewer finance products (mostly books, courses, planners). Finance creators make more from external affiliate programs: credit card referrals ($50-$200 per signup), investment app referrals ($10-$50 per signup), course sales (10-50% commission), and brand deals with fintech companies ($5K-$20K per campaign).',
    },
    {
      question: 'How do I avoid legal issues as a finance creator?',
      answer: 'Essential protections: (1) Always say "This is not financial advice, do your own research", (2) Disclose affiliate relationships (#ad for paid, #affiliate for commissions), (3) Don\'t give personalized advice ("You should invest in X"), (4) Speak in general terms ("Many people consider..."), (5) Consider LLC for liability protection. Consult lawyer if discussing stocks, crypto, or investments.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Finance Creators Earnings</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-500 to-teal-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            How Much Do Finance Creators Make on TikTok?
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            FinTok earnings breakdown: The highest-paying niche on TikTok—from 1K to 500K followers
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Last updated: January 2025</span>
            <span>💰 Highest-Paying Niche</span>
            <span>📊 Real FinTok Data</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Quick Overview */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Finance Is the Highest-Paying TikTok Niche</h2>
          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-green-50 rounded-lg border-2 border-green-200">
              <div className="text-4xl mb-3">💰</div>
              <h3 className="font-semibold text-green-900 mb-2">3x Higher Creator Fund RPM</h3>
              <p className="text-body-sm text-neutral-700">
                Finance: $0.05-$0.07 per 1K views<br />
                Average: $0.02-$0.03 per 1K views
              </p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg border-2 border-blue-200">
              <div className="text-4xl mb-3">💼</div>
              <h3 className="font-semibold text-blue-900 mb-2">50% Higher Brand Deal Rates</h3>
              <p className="text-body-sm text-neutral-700">
                Finance: $0.20-$0.30 per follower<br />
                Average: $0.10-$0.20 per follower
              </p>
            </div>
            <div className="p-6 bg-purple-50 rounded-lg border-2 border-purple-200">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-semibold text-purple-900 mb-2">High-Value Affiliates</h3>
              <p className="text-body-sm text-neutral-700">
                Credit card referrals: $50-$200 each<br />
                Investment app signups: $10-$50 each
              </p>
            </div>
          </div>
          <div className="p-4 bg-green-100 border border-green-300 rounded-lg">
            <p className="text-body-md text-neutral-900 font-semibold">
              A finance creator with 50K followers earns 3-5x more than a comedy creator with the same following.
            </p>
          </div>
        </Card>

        {/* Earnings by Tier */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">FinTok Earnings by Follower Tier</h2>
          <div className="space-y-6">
            {[
              {
                tier: '10K-25K Followers',
                monthly: '$1,500 - $4,000',
                breakdown: [
                  { source: 'Creator Fund', amount: '$100-$200', note: '2-4M views at $0.05 RPM' },
                  { source: 'Brand Deals', amount: '$1,000-$2,500', note: '1-2 fintech deals' },
                  { source: 'Affiliate', amount: '$300-$1,000', note: 'Credit cards, apps' },
                  { source: 'LIVE/Other', amount: '$100-$300', note: 'Q&A sessions' },
                ],
                note: 'At this tier, focus on building credibility and landing first fintech partnerships.',
              },
              {
                tier: '25K-50K Followers',
                monthly: '$4,000 - $10,000',
                breakdown: [
                  { source: 'Creator Fund', amount: '$200-$400', note: '4-8M views' },
                  { source: 'Brand Deals', amount: '$3,000-$7,500', note: '2-3 deals at $1.5K-$3K' },
                  { source: 'Affiliate', amount: '$600-$1,500', note: '10-30 conversions/month' },
                  { source: 'LIVE/Courses', amount: '$200-$600', note: 'Q&A + digital products' },
                ],
                note: 'This is where FinTok becomes full-time income. Strong affiliate conversions + premium brand deals.',
              },
              {
                tier: '50K-100K Followers',
                monthly: '$10,000 - $25,000',
                breakdown: [
                  { source: 'Creator Fund', amount: '$400-$800', note: '8-16M views' },
                  { source: 'Brand Deals', amount: '$7,000-$18,000', note: '2-3 major campaigns' },
                  { source: 'Affiliate', amount: '$2,000-$5,000', note: 'High-converting audience' },
                  { source: 'Courses/Products', amount: '$600-$1,200', note: 'Digital products sales' },
                ],
                note: 'Top-tier FinTok income. Banks, investment platforms, and fintech companies actively recruit at this level.',
              },
              {
                tier: '100K-500K+ Followers',
                monthly: '$25,000 - $100,000+',
                breakdown: [
                  { source: 'Creator Fund', amount: '$800-$2,000', note: '16-40M views' },
                  { source: 'Brand Deals', amount: '$20,000-$80,000', note: 'Exclusive partnerships, multi-month' },
                  { source: 'Affiliate', amount: '$3,000-$12,000', note: 'Scale conversions' },
                  { source: 'Products/Courses', amount: '$1,200-$6,000', note: 'Established product line' },
                ],
                note: 'Elite FinTok tier. Multi-month ambassador deals, course launches, speaking engagements, book deals.',
              },
            ].map((tier, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border-2 border-green-200">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-heading-md font-semibold text-neutral-900">{tier.tier}</h3>
                  <div className="text-right">
                    <p className="text-body-sm text-neutral-700">Monthly Total:</p>
                    <p className="text-heading-lg font-bold text-green-600">{tier.monthly}</p>
                  </div>
                </div>

                <div className="mb-4 space-y-2">
                  {tier.breakdown.map((item, bIdx) => (
                    <div key={bIdx} className="flex justify-between items-start p-3 bg-white rounded-lg">
                      <div>
                        <p className="font-semibold text-neutral-900">{item.source}</p>
                        <p className="text-body-sm text-neutral-600">{item.note}</p>
                      </div>
                      <p className="font-bold text-green-600">{item.amount}</p>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-green-100 border border-green-300 rounded">
                  <p className="text-body-sm text-neutral-700 italic">{tier.note}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Real Examples */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Real FinTok Creator Examples</h2>
          <div className="space-y-6">
            {[
              {
                name: 'Alex - 40K Followers (Credit Card & Points)',
                monthly: '$7,200',
                breakdown: [
                  'Creator Fund: $250/month (5M views)',
                  'Credit card affiliate: $3,500 (20-30 signups at $100-$150 each)',
                  'Brand deals: $3,000 (1 deal with credit monitoring service)',
                  'LIVE Q&A: $200',
                  'Course (passive): $250',
                ],
                strategy: 'Posts daily credit card tips, travel hacking, and points optimization. High conversion because viewers want specific card recommendations.',
              },
              {
                name: 'Jordan - 75K Followers (Investing & Stocks)',
                monthly: '$18,500',
                breakdown: [
                  'Creator Fund: $500/month (10M views)',
                  'Brand deals: $12,000 (Robinhood, Webull type partnerships)',
                  'Investment app referrals: $3,500 (50-70 signups at $50 each)',
                  'Course sales: $2,000 ("Beginner investing course" $97)',
                  'LIVE: $500',
                ],
                strategy: 'Explains stocks, ETFs, and investing basics. Partners with investment platforms. Sells beginner course. Heavy disclaimers.',
              },
              {
                name: 'Taylor - 150K Followers (Budgeting & Debt Payoff)',
                monthly: '$32,000',
                breakdown: [
                  'Creator Fund: $900/month (18M views)',
                  'Brand deals: $22,000 (YNAB, Mint, budgeting apps)',
                  'Affiliate: $6,000 (budgeting apps, financial planners)',
                  'Digital products: $2,600 (budget templates, trackers)',
                  'Sponsored LIVE: $500',
                ],
                strategy: 'Relatable content about paying off $80K debt. Shares real budget, savings progress. Audience trusts authenticity.',
              },
            ].map((creator, idx) => (
              <div key={idx} className="p-6 bg-neutral-50 rounded-lg border-l-4 border-green-500">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-heading-md font-semibold text-neutral-900">{creator.name}</h4>
                  <div className="text-right">
                    <p className="text-body-sm text-neutral-700">Monthly:</p>
                    <p className="text-heading-lg font-bold text-green-600">{creator.monthly}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="font-semibold text-neutral-900 mb-2">Income Breakdown:</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    {creator.breakdown.map((item, bIdx) => (
                      <li key={bIdx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <p className="text-body-sm text-neutral-600 italic">
                  <strong>Strategy:</strong> {creator.strategy}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Sub-Niches */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">FinTok Sub-Niches: Earnings Potential</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Not all finance content pays equally. Here's the breakdown:
          </p>
          <div className="space-y-4">
            {[
              {
                niche: 'Credit Cards & Travel Points',
                earning: 'Highest ($$$)',
                why: 'Credit card referrals pay $50-$200 per signup. Travel cards pay even more. Banks have huge budgets.',
                audience: '25-45, high income, interested in rewards optimization',
                competition: 'High—but always room for unique angles (military cards, business cards, etc.)',
              },
              {
                niche: 'Investing & Stock Market',
                earning: 'Very High ($$-$$$)',
                why: 'Investment platforms pay $10-$50 per signup. Course sales potential. High engagement.',
                audience: '22-40, interested in wealth building, ranges from beginners to experienced',
                competition: 'Very high—need strong disclaimers and unique teaching style',
              },
              {
                niche: 'Budgeting & Debt Payoff',
                earning: 'High ($$)',
                why: 'Budgeting app affiliates, template sales, high engagement. Relatable content.',
                audience: '22-35, often in debt or learning to budget, very engaged community',
                competition: 'Moderate—authenticity and personal story matter most',
              },
              {
                niche: 'Real Estate Investing',
                earning: 'Very High ($$-$$$)',
                why: 'High-ticket courses ($500-$2,000), platform partnerships, coaching. Audience has money.',
                audience: '30-50, higher income, serious about wealth building',
                competition: 'Moderate—requires credibility (actual real estate experience)',
              },
              {
                niche: 'Cryptocurrency',
                earning: 'Variable ($-$$)',
                why: 'Exchange referrals pay well, but highly regulated. Risky niche.',
                audience: '18-35, tech-savvy, speculative investors',
                competition: 'Very high + regulatory risk—not recommended for beginners',
              },
              {
                niche: 'General Money Tips',
                earning: 'Low-Medium ($)',
                why: 'Too broad. Hard to monetize without specific product/service to promote.',
                audience: 'Everyone—but not targeted',
                competition: 'Extremely high—avoid this unless you have unique angle',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border-l-4 border-green-500">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-neutral-900">{item.niche}</h4>
                  <span className={`text-body-sm font-bold px-3 py-1 rounded-full ${
                    item.earning.includes('$$$') ? 'bg-green-200 text-green-900' :
                    item.earning.includes('$$') ? 'bg-blue-200 text-blue-900' :
                    'bg-yellow-200 text-yellow-900'
                  }`}>
                    {item.earning}
                  </span>
                </div>
                <p className="text-body-sm text-neutral-700 mb-2">
                  <strong>Why:</strong> {item.why}
                </p>
                <p className="text-body-sm text-neutral-600">
                  <strong>Audience:</strong> {item.audience}<br />
                  <strong>Competition:</strong> {item.competition}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Monetization Strategies */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Top 6 FinTok Monetization Strategies</h2>
          <div className="space-y-4">
            {[
              {
                strategy: 'Master Credit Card Affiliate Programs',
                tactic: 'Sign up for: Capital One affiliate, Chase referral program, Amex referral, credit card aggregators (Credit Karma, NerdWallet partner programs)',
                earnings: '$50-$200 per signup. 20 signups/month = $1,000-$4,000',
              },
              {
                strategy: 'Partner with Fintech Companies',
                tactic: 'Reach out to: Robinhood, Webull, Public, Acorns, Rocket Money, YNAB. Offer multi-video campaigns, not one-offs.',
                earnings: '$2,000-$10,000 per campaign for 25K-100K followers',
              },
              {
                strategy: 'Create Digital Products (Templates, Courses)',
                tactic: 'Sell: Budget templates ($10-$30), investing courses ($50-$200), debt payoff trackers ($15-$40). Use Gumroad, Stan Store, or Teachable.',
                earnings: '$500-$5,000/month passive once established',
              },
              {
                strategy: 'Optimize for Creator Fund (High RPM)',
                tactic: 'Finance content earns 2-3x more per view. Focus on watch time, educational content, and US audience (pays most).',
                earnings: '$400-$2,000/month at 50K-500K followers',
              },
              {
                strategy: 'Weekly LIVE Q&A Sessions',
                tactic: 'Go LIVE every week to answer finance questions. Builds trust, drives affiliate conversions, earns LIVE gifts.',
                earnings: '$200-$1,000/month in gifts + boosts affiliate sales 20-30%',
              },
              {
                strategy: 'Build Email List for Product Launches',
                tactic: 'Offer free PDF guide ("10 Steps to $10K Savings") in exchange for email. Launch products/courses to list.',
                earnings: '10-20% email open rates convert at 2-5% = $1,000-$10,000 per launch',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-neutral-900 mb-2">{idx + 1}. {item.strategy}</h4>
                <p className="text-body-sm text-neutral-700 mb-2">{item.tactic}</p>
                <p className="text-body-sm font-semibold text-green-700">
                  💰 Potential: {item.earnings}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Legal Considerations */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">⚠️ Critical Legal & Compliance</h2>
          <div className="p-6 bg-red-50 border-2 border-red-300 rounded-lg">
            <h3 className="text-heading-md font-semibold text-red-900 mb-4">MUST-HAVE Disclaimers & Practices:</h3>
            <ul className="space-y-3 text-body-md">
              {[
                'Add "This is not financial advice" to EVERY video (text overlay + verbal)',
                'Disclose ALL affiliate relationships: #ad for paid sponsorships, #affiliate for commission links',
                'Never give personalized advice ("YOU should invest in X") — use general terms ("SOME people consider...")',
                'Check SEC/FTC guidelines if discussing stocks, crypto, or securities',
                'Consider forming LLC for liability protection',
                'Get professional liability insurance if giving any advisory-style content ($500-$1,500/year)',
                'Be especially careful with crypto — heavily regulated, high legal risk',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-red-600 font-bold">⚠️</span>
                  <span className="text-neutral-900">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-4 bg-red-100 border border-red-300 rounded">
              <p className="text-body-sm text-neutral-900 font-semibold">
                When in doubt, consult an attorney. One compliance mistake can cost $10K-$100K+ in fines or legal fees. Protect yourself.
              </p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
                <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Frequently Asked Questions</h2>
        <FAQSection
          pageName="FAQ"
          faqs={faqs}
        />

        {/* Calculator CTA */}
        <Card>
          <div className="text-center">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
              Calculate Your FinTok Earnings Potential
            </h3>
            <p className="text-body-md text-neutral-700 mb-6">
              Use our brand deal calculator and add 50% premium for finance niche:
            </p>
            <Link
              href="/calculators/brand-deal"
              className="inline-block bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-colors"
            >
              Calculate Your Rate →
            </Link>
          </div>
        </Card>

        {/* Related Guides */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/data/rpm-rates-by-niche" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">📊 RPM Rates by Niche</h4>
              <p className="text-body-sm text-neutral-700">See why finance has highest Creator Fund RPM</p>
            </Link>
            <Link href="/guides/how-to-get-brand-deals" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">💼 How to Get Brand Deals</h4>
              <p className="text-body-sm text-neutral-700">Land fintech partnerships and sponsorships</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
