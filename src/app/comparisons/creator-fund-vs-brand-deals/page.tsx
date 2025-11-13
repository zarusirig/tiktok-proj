import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Creator Fund vs Brand Deals: Which Pays More on TikTok?',
  description: 'Complete comparison of TikTok Creator Fund vs brand deal earnings. See which income stream pays more per view and how to maximize both.',
  keywords: ['creator fund vs brand deals', 'tiktok income streams', 'sponsorships vs creator fund', 'tiktok monetization comparison', 'which pays more'],
};

export default function CreatorFundVsBrandDealsPage() {
  const faqs = [
    {
      question: 'Which pays more: Creator Fund or brand deals?',
      answer: 'Brand deals pay 10-100x more per view. Creator Fund: $0.02-$0.04 per 1,000 views ($20-$40 per million). Brand deals: $0.10-$0.20 per follower, regardless of views. For example: 25K followers = $2,500-$5,000 per deal. You\'d need 62-125 MILLION Creator Fund views to equal one $2,500 brand deal.',
    },
    {
      question: 'Should I focus on Creator Fund or brand deals?',
      answer: 'Prioritize brand deals as primary income, use Creator Fund as passive supplement. At 25K followers, you might earn $50-$100/month from Creator Fund but $1,500-$3,000/month from 1-2 brand deals. Spend your effort pitching brands, not trying to optimize Creator Fund.',
    },
    {
      question: 'Can I do both Creator Fund AND brand deals?',
      answer: 'Yes, absolutely! They\'re not mutually exclusive. In fact, you should do both: (1) Join Creator Fund at 10K for passive income, (2) Start pitching brands at 5K for active income, (3) Add LIVE gifts and TikTok Shop for diversification. The most successful creators use all income streams simultaneously.',
    },
    {
      question: 'Do I need more followers for brand deals than Creator Fund?',
      answer: 'No, you can start brand deals earlier. Creator Fund requires 10K followers. Brand deals can start at 1K-5K followers for nano influencer rates ($50-$250 per deal). Some creators land their first brand deal at 3K followers if they have high engagement (5%+) and clear niche.',
    },
    {
      question: 'Will joining Creator Fund hurt my brand deal potential?',
      answer: 'No. Being in Creator Fund shows you\'re a serious creator and can actually help with brand negotiations (proof of reach and engagement). Many creators use their Creator Fund dashboard stats in media kits to show consistent views. Brands care about engagement and audience fit, not whether you\'re in the fund.',
    },
  ];

  const element = (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Comparisons</Link>
            <span>/</span>
            <span className="text-neutral-900">Creator Fund vs Brand Deals</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-500 to-purple-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            Creator Fund vs Brand Deals
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Which TikTok income stream actually pays more? Complete earnings comparison with real creator data
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Last updated: January 2025</span>
            <span>⚖️ Head-to-Head Comparison</span>
            <span>💰 Real Earnings Data</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-5xl py-12 space-y-8">
        {/* The Verdict */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">The Verdict: Which Pays More?</h2>
          <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg mb-6">
            <p className="text-heading-md font-bold text-neutral-900 mb-4">
              Brand Deals Pay 10-100x More Per View
            </p>
            <p className="text-body-md text-neutral-700">
              A single brand deal can equal 6-12 months of Creator Fund earnings. At 25K followers, you might earn $50-$100/month from Creator Fund but <strong>$2,500-$5,000 from one brand deal</strong>. That's 25-100x more for the same audience.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-green-50 border-2 border-green-200 rounded-lg">
              <h3 className="text-heading-md font-semibold text-green-900 mb-3">💵 Creator Fund</h3>
              <div className="space-y-2 text-body-md">
                <p><strong>Payment:</strong> Per 1,000 views</p>
                <p><strong>Rate:</strong> $0.02-$0.04 per 1K views</p>
                <p><strong>Best for:</strong> Passive income supplement</p>
                <p><strong>Effort:</strong> Low (automatic)</p>
                <p className="font-semibold text-green-700 pt-2">Use as: Secondary income (5-15%)</p>
              </div>
            </div>

            <div className="p-6 bg-purple-50 border-2 border-purple-200 rounded-lg">
              <h3 className="text-heading-md font-semibold text-purple-900 mb-3">💼 Brand Deals</h3>
              <div className="space-y-2 text-body-md">
                <p><strong>Payment:</strong> Per post/campaign</p>
                <p><strong>Rate:</strong> $0.10-$0.20 per follower</p>
                <p><strong>Best for:</strong> Primary income source</p>
                <p><strong>Effort:</strong> High (pitching, negotiating)</p>
                <p className="font-semibold text-purple-700 pt-2">Use as: Primary income (60-80%)</p>
              </div>
            </div>
          </div>
        </Card>

        {/* The Math */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">The Math: Real Earnings Comparison</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Let's compare earnings for the same creator at different follower tiers:
          </p>

          <div className="space-y-6">
            {/* 10K Followers */}
            <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
              <h4 className="text-heading-md font-semibold text-neutral-900 mb-4">10,000 Followers</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-green-700 mb-3">💵 Creator Fund Monthly:</p>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Views: 500K/month (typical)</li>
                    <li>• RPM: $0.03 average</li>
                    <li>• Calculation: 500K ÷ 1,000 × $0.03</li>
                    <li className="font-bold text-green-600 pt-2">= $15/month</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-purple-700 mb-3">💼 Brand Deals (1 per month):</p>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Followers: 10K</li>
                    <li>• Rate: $0.10/follower (conservative)</li>
                    <li>• Calculation: 10K × $0.10</li>
                    <li className="font-bold text-purple-600 pt-2">= $1,000/month</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 border border-purple-200 rounded">
                <p className="text-body-sm font-semibold text-neutral-900">
                  Brand Deals = <strong>67x more</strong> than Creator Fund at 10K followers
                </p>
              </div>
            </div>

            {/* 25K Followers */}
            <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
              <h4 className="text-heading-md font-semibold text-neutral-900 mb-4">25,000 Followers</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-green-700 mb-3">💵 Creator Fund Monthly:</p>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Views: 2M/month (typical)</li>
                    <li>• RPM: $0.03 average</li>
                    <li>• Calculation: 2M ÷ 1,000 × $0.03</li>
                    <li className="font-bold text-green-600 pt-2">= $60/month</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-purple-700 mb-3">💼 Brand Deals (1-2 per month):</p>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Deal 1: 25K × $0.15 = $3,750</li>
                    <li>• Deal 2: 25K × $0.10 = $2,500</li>
                    <li>• Total from 2 deals</li>
                    <li className="font-bold text-purple-600 pt-2">= $6,250/month</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 border border-purple-200 rounded">
                <p className="text-body-sm font-semibold text-neutral-900">
                  Brand Deals = <strong>104x more</strong> than Creator Fund at 25K followers
                </p>
              </div>
            </div>

            {/* 100K Followers */}
            <div className="p-6 bg-neutral-50 rounded-lg border border-neutral-200">
              <h4 className="text-heading-md font-semibold text-neutral-900 mb-4">100,000 Followers</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <p className="font-semibold text-green-700 mb-3">💵 Creator Fund Monthly:</p>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Views: 10M/month (typical)</li>
                    <li>• RPM: $0.04 (higher niche)</li>
                    <li>• Calculation: 10M ÷ 1,000 × $0.04</li>
                    <li className="font-bold text-green-600 pt-2">= $400/month</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-purple-700 mb-3">💼 Brand Deals (2-3 per month):</p>
                  <ul className="space-y-2 text-body-sm text-neutral-700">
                    <li>• Deal 1: 100K × $0.20 = $20,000</li>
                    <li>• Deal 2: 100K × $0.15 = $15,000</li>
                    <li>• Total from 2 major deals</li>
                    <li className="font-bold text-purple-600 pt-2">= $35,000/month</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4 p-3 bg-purple-100 border border-purple-200 rounded">
                <p className="text-body-sm font-semibold text-neutral-900">
                  Brand Deals = <strong>87x more</strong> than Creator Fund at 100K followers
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-md text-neutral-700">
              <strong>Key Insight:</strong> As you grow, brand deals continue to pay exponentially more. The gap doesn't shrink—it widens. Creator Fund caps out around $1K-$2K/month even at 500K+ followers, while brand deals can reach $50K-$100K/month.
            </p>
          </div>
        </Card>

        {/* Pros and Cons */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Pros & Cons: Which Is Right for You?</h2>

          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Creator Fund Pros */}
              <div>
                <h3 className="text-heading-md font-semibold text-green-700 mb-3">💵 Creator Fund Pros</h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Passive income:</strong> No work after joining—just create content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Predictable:</strong> Consistent (if low) earnings every month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>No pitching:</strong> Don't need to reach out to brands or negotiate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>No creative constraints:</strong> Post whatever you want, no brand guidelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Good supplement:</strong> Nice to have $50-$400/month extra income</span>
                  </li>
                </ul>
              </div>

              {/* Creator Fund Cons */}
              <div>
                <h3 className="text-heading-md font-semibold text-red-700 mb-3">💵 Creator Fund Cons</h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Very low pay:</strong> $20-$40 per MILLION views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Inconsistent:</strong> RPM fluctuates, earnings drop unexpectedly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>No control:</strong> Can't increase RPM, TikTok sets rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Caps out:</strong> Even with 1M followers, rarely exceeds $1K-$2K/month</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Platform dependency:</strong> TikTok can change rates or remove you anytime</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
              {/* Brand Deals Pros */}
              <div>
                <h3 className="text-heading-md font-semibold text-green-700 mb-3">💼 Brand Deals Pros</h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>High pay:</strong> $1,000-$50,000+ per deal depending on followers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Negotiable:</strong> You set rates and can increase over time</strong>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Scalable:</strong> More followers = exponentially higher rates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Relationship building:</strong> Long-term partnerships with repeat clients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">✓</span>
                    <span><strong>Portfolio building:</strong> Experience helps land bigger deals</span>
                  </li>
                </ul>
              </div>

              {/* Brand Deals Cons */}
              <div>
                <h3 className="text-heading-md font-semibold text-red-700 mb-3">💼 Brand Deals Cons</h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Active work:</strong> Must pitch brands, negotiate, manage contracts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Inconsistent:</strong> Some months you land 3 deals, other months zero</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Creative constraints:</strong> Brand guidelines, revision requests, approval processes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Risk of bad partnerships:</strong> Poor product fit can hurt your credibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✗</span>
                    <span><strong>Learning curve:</strong> Need media kit, negotiation skills, contract knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* When to Use Each */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">The Optimal Strategy: Use Both</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Don't choose one over the other—combine them for maximum income:
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-lg">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Phase 1: 0-10K Followers (Months 1-3)</h3>
              <ul className="space-y-2 text-body-md text-neutral-700">
                <li><strong>Focus:</strong> Build audience, create consistent content</li>
                <li><strong>Creator Fund:</strong> Not eligible yet (need 10K)</li>
                <li><strong>Brand Deals:</strong> Start pitching at 5K followers (nano rates: $250-$500)</li>
                <li><strong>Income Mix:</strong> 100% brand deals (1-2 small deals)</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Phase 2: 10K-50K Followers (Months 3-6)</h3>
              <ul className="space-y-2 text-body-md text-neutral-700">
                <li><strong>Focus:</strong> Scale content, increase deal flow</li>
                <li><strong>Creator Fund:</strong> Join immediately at 10K (passive $30-$150/month)</li>
                <li><strong>Brand Deals:</strong> Pitch aggressively (micro rates: $1,000-$2,500)</li>
                <li><strong>Income Mix:</strong> 80% brand deals, 10% Creator Fund, 10% LIVE</li>
              </ul>
            </div>

            <div className="p-6 bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-lg">
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Phase 3: 50K-500K Followers (Months 6+)</h3>
              <ul className="space-y-2 text-body-md text-neutral-700">
                <li><strong>Focus:</strong> Premium brand partnerships, diversify income</li>
                <li><strong>Creator Fund:</strong> Passive income ($200-$800/month), minimal effort</li>
                <li><strong>Brand Deals:</strong> Fewer but higher-paying deals ($5K-$25K each)</li>
                <li><strong>Income Mix:</strong> 70% brand deals, 5% Creator Fund, 15% LIVE, 10% Shop/Affiliate</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-tiktok-pink/10 border border-tiktok-pink/20 rounded-lg">
            <p className="text-body-md text-neutral-700">
              <strong>Bottom Line:</strong> Treat Creator Fund as your "base salary" (passive, consistent, low). Treat brand deals as your "commission" (active, variable, high). Combine them for stable + lucrative income.
            </p>
          </div>
        </Card>

        {/* Common Mistakes */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Common Mistakes Creators Make</h2>
          <div className="space-y-4">
            {[
              {
                mistake: 'Relying Only on Creator Fund',
                why: 'You\'ll cap out at $500-$2,000/month even with massive following',
                fix: 'Start pitching brands at 5K followers. Even one $1,000 deal per month doubles your Creator Fund income.',
              },
              {
                mistake: 'Ignoring Creator Fund Because "It Doesn\'t Pay Much"',
                why: 'You\'re leaving free money on the table. It takes 10 minutes to apply.',
                fix: 'Join at 10K, forget about it. It\'s passive income—$50-$400/month for zero extra work.',
              },
              {
                mistake: 'Accepting Every Brand Deal',
                why: 'Bad product fit erodes trust, makes future deals harder to land',
                fix: 'Only promote products you\'d genuinely use. Say no to 50-70% of offers. Quality > quantity.',
              },
              {
                mistake: 'Not Tracking Which Income Stream Works Best',
                why: 'You can\'t optimize what you don\'t measure',
                fix: 'Use a spreadsheet: Track Creator Fund monthly, brand deal dates/amounts, LIVE earnings. Identify patterns.',
              },
              {
                mistake: 'Undercharging for Brand Deals',
                why: 'Leaving thousands on the table. Many creators charge 50-70% less than they should.',
                fix: 'Use our Brand Deal Calculator to set rates. Start 20-30% higher than minimum—you can negotiate down.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <h4 className="font-semibold text-red-900 mb-1">❌ Mistake {idx + 1}: {item.mistake}</h4>
                <p className="text-body-sm text-neutral-700 mb-2">
                  <strong>Why it hurts:</strong> {item.why}
                </p>
                <p className="text-body-sm text-neutral-900">
                  <strong>Fix:</strong> {item.fix}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Calculators CTA */}
        <Card>
          <h2 className="text-heading-md font-semibold text-neutral-900 mb-4">Calculate Your Earnings from Both</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Use our free calculators to estimate income from Creator Fund and brand deals:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/calculators/creator-fund" className="p-6 bg-green-50 border border-green-200 rounded-lg hover:bg-green-100 transition-colors text-center">
              <div className="text-4xl mb-3">💵</div>
              <h4 className="font-semibold text-neutral-900 mb-2">Creator Fund Calculator</h4>
              <p className="text-body-sm text-neutral-700 mb-3">Estimate monthly earnings based on views and RPM</p>
              <span className="text-green-600 font-semibold">Calculate →</span>
            </Link>
            <Link href="/calculators/brand-deal" className="p-6 bg-purple-50 border border-purple-200 rounded-lg hover:bg-purple-100 transition-colors text-center">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="font-semibold text-neutral-900 mb-2">Brand Deal Rate Calculator</h4>
              <p className="text-body-sm text-neutral-700 mb-3">See what you should charge based on followers and niche</p>
              <span className="text-purple-600 font-semibold">Calculate →</span>
            </Link>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection
          title="Frequently Asked Questions"
          faqs={faqs}
        />

        {/* Related Guides */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/tiktok-creator-fund" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">💵 TikTok Creator Fund Complete Guide</h4>
              <p className="text-body-sm text-neutral-700">Everything about Creator Fund earnings and optimization</p>
            </Link>
            <Link href="/guides/brand-deals" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">💼 TikTok Brand Deals Complete Guide</h4>
              <p className="text-body-sm text-neutral-700">How to land deals, set rates, and negotiate contracts</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
  return element;
}
