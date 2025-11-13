import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok RPM Rates by Niche: 2025 Benchmark Data',
  description: 'Complete RPM (Revenue Per Mille) rates for TikTok Creator Fund across 20+ niches. See which content types earn the most per 1,000 views.',
  keywords: ['tiktok rpm rates', 'creator fund rpm by niche', 'tiktok earnings per view', 'rpm benchmark', 'tiktok niche earnings'],
};

export default function RPMRatesByNichePage() {
  const rpmData = [
    {
      category: 'High-RPM Niches',
      description: 'Attract high-value advertisers',
      color: 'from-green-600 to-emerald-500',
      niches: [
        { name: 'Finance & Investing', rpm: '$0.05 - $0.07', reason: 'Financial services, credit cards, investment platforms pay premium rates' },
        { name: 'Business & Entrepreneurship', rpm: '$0.04 - $0.06', reason: 'SaaS, courses, business tools target high-income audiences' },
        { name: 'Technology & SaaS', rpm: '$0.04 - $0.055', reason: 'Tech companies, software, gadgets have large ad budgets' },
        { name: 'Real Estate', rpm: '$0.045 - $0.06', reason: 'Mortgage lenders, real estate platforms pay for qualified leads' },
        { name: 'Personal Finance & Credit', rpm: '$0.04 - $0.055', reason: 'Banks, credit monitoring, budgeting apps compete for customers' },
      ],
    },
    {
      category: 'Medium-High RPM Niches',
      description: 'Moderate advertiser demand',
      color: 'from-blue-500 to-cyan-500',
      niches: [
        { name: 'Education & Career Advice', rpm: '$0.03 - $0.05', reason: 'Online courses, career platforms, universities' },
        { name: 'Health & Wellness', rpm: '$0.03 - $0.045', reason: 'Supplements, fitness apps, wellness brands' },
        { name: 'Beauty & Skincare', rpm: '$0.025 - $0.04', reason: 'Beauty brands pay well but niche is saturated' },
        { name: 'Home Improvement & DIY', rpm: '$0.025 - $0.04', reason: 'Home goods, tools, improvement services' },
        { name: 'Parenting & Family', rpm: '$0.02 - $0.038', reason: 'Baby products, family services, parenting apps' },
      ],
    },
    {
      category: 'Medium RPM Niches',
      description: 'Average advertiser interest',
      color: 'from-yellow-500 to-orange-500',
      niches: [
        { name: 'Fitness & Gym', rpm: '$0.02 - $0.035', reason: 'Gyms, supplements, activewear brands' },
        { name: 'Food & Cooking', rpm: '$0.018 - $0.03', reason: 'Kitchen gadgets, meal kits, grocery delivery' },
        { name: 'Fashion & Style', rpm: '$0.018 - $0.032', reason: 'Clothing brands, accessories, fashion retail' },
        { name: 'Travel', rpm: '$0.02 - $0.03', reason: 'Hotels, airlines, travel booking platforms' },
        { name: 'Gaming (Educational/Reviews)', rpm: '$0.018 - $0.028', reason: 'Gaming peripherals, platforms, accessories' },
      ],
    },
    {
      category: 'Low-Medium RPM Niches',
      description: 'Lower advertiser spend',
      color: 'from-orange-500 to-red-500',
      niches: [
        { name: 'Lifestyle & Vlogging', rpm: '$0.015 - $0.025', reason: 'General consumer products, broad audience' },
        { name: 'Art & Design', rpm: '$0.015 - $0.025', reason: 'Art supplies, design tools, limited budget' },
        { name: 'Music & Audio', rpm: '$0.012 - $0.022', reason: 'Music platforms, instruments, streaming services' },
        { name: 'Pets & Animals', rpm: '$0.012 - $0.02', reason: 'Pet products, veterinary services' },
        { name: 'Comedy & Skits', rpm: '$0.01 - $0.02', reason: 'Broad entertainment, low advertiser value' },
      ],
    },
    {
      category: 'Low RPM Niches',
      description: 'Minimal advertiser interest',
      color: 'from-red-600 to-pink-600',
      niches: [
        { name: 'Entertainment & Memes', rpm: '$0.008 - $0.015', reason: 'General entertainment, no specific buyer intent' },
        { name: 'Dance & Challenges', rpm: '$0.008 - $0.014', reason: 'Viral content, young audience, low purchase intent' },
        { name: 'Pranks & Reactions', rpm: '$0.007 - $0.012', reason: 'Pure entertainment, difficult to monetize' },
        { name: 'ASMR & Satisfying Videos', rpm: '$0.006 - $0.01', reason: 'Limited advertiser fit, niche audience' },
      ],
    },
  ];

  const faqs = [
    {
      question: 'What is RPM and how is it calculated?',
      answer: 'RPM (Revenue Per Mille) is the amount you earn per 1,000 views from the TikTok Creator Fund. Formula: (Total Earnings ÷ Total Views) × 1,000. For example, if you earned $50 from 2 million views: ($50 ÷ 2,000,000) × 1,000 = $0.025 RPM.',
    },
    {
      question: 'Why do finance videos earn more than comedy videos?',
      answer: 'Advertisers pay based on audience value. Finance content attracts high-income viewers interested in credit cards, investments, and banking—services with high customer lifetime value ($500-$5,000 per customer). Comedy attracts broader audiences with lower purchase intent, so advertisers pay less.',
    },
    {
      question: 'Can I change niches to get higher RPM?',
      answer: 'Yes, but consider trade-offs. Switching from comedy ($0.01 RPM) to finance ($0.05 RPM) could 5x your earnings, BUT only if you can create quality content in that niche and maintain views. A viral comedy video (1M views × $0.01 = $10) beats a low-performing finance video (100K views × $0.05 = $5).',
    },
    {
      question: 'Does my RPM stay the same every month?',
      answer: 'No. RPM fluctuates based on: (1) Advertiser demand (Q4/holidays pay more), (2) Viewer location (US/UK views pay 3-5x more than some countries), (3) Watch time/engagement (higher completion = higher RPM), and (4) Content type mix. Track monthly averages, not daily rates.',
    },
    {
      question: 'How do I find my actual RPM?',
      answer: 'Go to Creator Fund dashboard → View detailed earnings. Calculate: (This Month\'s Earnings ÷ This Month\'s Views) × 1,000. For example: $24 earned ÷ 800,000 views × 1,000 = $0.03 RPM. Compare to your niche\'s benchmark above to see if you\'re above or below average.',
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
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Data</Link>
            <span>/</span>
            <span className="text-neutral-900">RPM Rates by Niche</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-blue-500 to-purple-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok RPM Rates by Niche
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            2025 benchmark data: See which content niches earn the most (and least) per 1,000 views
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Last updated: January 2025</span>
            <span>📊 20+ Niches Analyzed</span>
            <span>💰 Real Creator Data</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-5xl py-12 space-y-8">
        {/* Overview */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Understanding RPM: Why It Matters</h2>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">What is RPM?</h3>
              <p className="text-body-sm text-neutral-700 mb-3">
                RPM (Revenue Per Mille) = earnings per 1,000 views. It's the key metric for Creator Fund income.
              </p>
              <div className="p-3 bg-white rounded border border-blue-200">
                <p className="text-body-sm font-mono text-neutral-900 text-center">
                  RPM = (Earnings ÷ Views) × 1,000
                </p>
              </div>
            </div>
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Why It Varies by Niche</h3>
              <p className="text-body-sm text-neutral-700">
                Advertisers pay more for audiences with <strong>high purchase intent</strong> and <strong>high income</strong>. Finance viewers are worth 5-7x more to advertisers than entertainment viewers.
              </p>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-semibold text-yellow-900 mb-2">⚠️ Important Context</h3>
            <p className="text-body-sm text-neutral-700">
              These are <strong>average RPM ranges</strong> from real creator reports (Jan 2025). Your actual RPM may vary based on: viewer location (US views pay more), watch time, engagement rate, and seasonal advertiser demand. Use these as benchmarks, not guarantees.
            </p>
          </div>
        </Card>

        {/* RPM Data by Category */}
        {rpmData.map((category, catIdx) => (
          <Card key={catIdx}>
            <div className={`inline-block bg-gradient-to-r ${category.color} text-white px-4 py-2 rounded-full text-body-sm font-semibold mb-2`}>
              {category.category}
            </div>
            <p className="text-body-md text-neutral-700 mb-6">{category.description}</p>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-neutral-50 border-b-2 border-neutral-200">
                    <th className="text-left p-4 font-semibold text-neutral-900">Niche</th>
                    <th className="text-left p-4 font-semibold text-neutral-900">RPM Range</th>
                    <th className="text-left p-4 font-semibold text-neutral-900">Why This Rate?</th>
                  </tr>
                </thead>
                <tbody>
                  {category.niches.map((niche, nicheIdx) => (
                    <tr key={nicheIdx} className="border-b border-neutral-200 hover:bg-neutral-50 transition-colors">
                      <td className="p-4">
                        <span className="font-semibold text-neutral-900">{niche.name}</span>
                      </td>
                      <td className="p-4">
                        <span className="font-mono text-lg font-bold text-green-600">{niche.rpm}</span>
                      </td>
                      <td className="p-4 text-body-sm text-neutral-700">{niche.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        ))}

        {/* Real Examples */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Real-World Examples: How RPM Affects Earnings</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Same views, different niches = drastically different earnings:
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-2">🏆 Finance Creator</h4>
              <div className="space-y-1 text-body-sm text-neutral-700 mb-3">
                <p>• 5 million views/month</p>
                <p>• $0.05 RPM (high)</p>
              </div>
              <div className="p-3 bg-white rounded border border-green-300">
                <p className="text-body-sm text-neutral-700">Earnings:</p>
                <p className="text-heading-md font-bold text-green-600">$250/month</p>
                <p className="text-body-xs text-neutral-600 mt-1">5,000K views × $0.05</p>
              </div>
            </div>

            <div className="p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">💄 Beauty Creator</h4>
              <div className="space-y-1 text-body-sm text-neutral-700 mb-3">
                <p>• 5 million views/month</p>
                <p>• $0.03 RPM (medium)</p>
              </div>
              <div className="p-3 bg-white rounded border border-blue-300">
                <p className="text-body-sm text-neutral-700">Earnings:</p>
                <p className="text-heading-md font-bold text-blue-600">$150/month</p>
                <p className="text-body-xs text-neutral-600 mt-1">5,000K views × $0.03</p>
              </div>
            </div>

            <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-2">😂 Comedy Creator</h4>
              <div className="space-y-1 text-body-sm text-neutral-700 mb-3">
                <p>• 5 million views/month</p>
                <p>• $0.012 RPM (low)</p>
              </div>
              <div className="p-3 bg-white rounded border border-red-300">
                <p className="text-body-sm text-neutral-700">Earnings:</p>
                <p className="text-heading-md font-bold text-red-600">$60/month</p>
                <p className="text-body-xs text-neutral-600 mt-1">5,000K views × $0.012</p>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-tiktok-pink/10 border border-tiktok-pink/20 rounded-lg">
            <p className="text-body-sm text-neutral-700">
              <strong>Key Insight:</strong> The finance creator earns <strong>4.2x more</strong> than the comedy creator with the exact same views. This is why niche selection matters for Creator Fund income.
            </p>
          </div>
        </Card>

        {/* How to Optimize */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Maximize Your RPM</h2>
          <div className="space-y-4">
            {[
              {
                strategy: 'Add Educational Angles to Your Niche',
                description: 'If you\'re in a low-RPM niche, add educational content. "Comedy + personal finance" earns more than "pure comedy."',
                example: 'A comedy creator who adds "5 money mistakes Gen Z makes (funny edition)" gets higher RPM than pure skits.',
              },
              {
                strategy: 'Target US/UK/Canadian Audiences',
                description: 'Views from high-GDP countries earn 3-5x more. Optimize posting times and content for Western audiences.',
                example: 'Post at 6-9 PM EST (not 3 AM EST when only Asia is awake).',
              },
              {
                strategy: 'Improve Watch Time & Completion Rate',
                description: 'Videos with 70%+ completion rates earn higher RPM. TikTok rewards engagement.',
                example: 'Shorten videos (under 20 seconds), use strong hooks, add pattern interrupts every 5-7 seconds.',
              },
              {
                strategy: 'Create Longer-Form Content (When Appropriate)',
                description: 'For educational niches, 60-90 second videos with high watch time can boost RPM (more ad opportunities).',
                example: 'Finance explainer videos (60s) often outperform quick tips (15s) in RPM, if completion stays above 60%.',
              },
              {
                strategy: 'Focus on Seasonal High-RPM Periods',
                description: 'Q4 (Oct-Dec) has 20-40% higher RPM due to holiday advertising budgets. Create more content during this window.',
                example: 'A creator earning $0.03 RPM in July might see $0.04-$0.045 RPM in November-December.',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border-l-4 border-tiktok-pink">
                <h4 className="font-semibold text-neutral-900 mb-1">{idx + 1}. {item.strategy}</h4>
                <p className="text-body-sm text-neutral-700 mb-2">{item.description}</p>
                <p className="text-body-sm text-neutral-600 italic">
                  <strong>Example:</strong> {item.example}
                </p>
              </div>
            ))}
          </div>
        </Card>

        {/* Should You Switch Niches? */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Should You Switch to a Higher-RPM Niche?</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            The math isn't always simple. Consider these factors:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h4 className="font-semibold text-green-900 mb-3">✅ Good Reasons to Switch:</h4>
              <ul className="list-disc list-inside space-y-2 text-body-sm text-neutral-700">
                <li>You're genuinely interested in the higher-RPM niche (authenticity matters)</li>
                <li>You have expertise or can learn quickly (bad content = no views)</li>
                <li>Your current niche has very low RPM ($0.008-$0.015) and you're struggling</li>
                <li>You're willing to rebuild audience (some followers won't follow niche shift)</li>
                <li>You're early in your TikTok journey (under 10K followers = easier pivot)</li>
              </ul>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="font-semibold text-red-900 mb-3">❌ Bad Reasons to Switch:</h4>
              <ul className="list-disc list-inside space-y-2 text-body-sm text-neutral-700">
                <li>Chasing money without interest (you'll burn out, content will be boring)</li>
                <li>You have established audience (50K+) in current niche</li>
                <li>Your low-RPM niche gets massive views (1M views × $0.01 = $10 beats 100K views × $0.05 = $5)</li>
                <li>You don't understand the high-RPM niche (finance requires credibility)</li>
                <li>You're impatient (niche switches take 3-6 months to see results)</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">💡 Hybrid Strategy (Best of Both)</h4>
            <p className="text-body-sm text-neutral-700">
              Instead of switching completely, <strong>blend niches</strong>. Keep your existing content (maintains views) but add 30-40% high-RPM content. Examples:
            </p>
            <ul className="list-disc list-inside space-y-1 text-body-sm text-neutral-700 mt-2 ml-4">
              <li><strong>Comedy + Finance:</strong> "Funny money tips" or "Roasting bad financial advice"</li>
              <li><strong>Fashion + Business:</strong> "How fashion influencers really make money"</li>
              <li><strong>Gaming + Tech:</strong> "Best gaming laptops" or "PC building guides"</li>
            </ul>
          </div>
        </Card>

        {/* Calculator CTA */}
        <Card>
          <div className="text-center">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
              Calculate Your Potential Earnings
            </h3>
            <p className="text-body-md text-neutral-700 mb-6">
              Use our Creator Fund calculator to see how your RPM and views translate to monthly income.
            </p>
            <Link
              href="/calculators/creator-fund"
              className="inline-block bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-blue-700 transition-colors"
            >
              Try Creator Fund Calculator →
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
              <h4 className="font-semibold text-neutral-900 mb-1">📊 TikTok Creator Fund Complete Guide</h4>
              <p className="text-body-sm text-neutral-700">Everything about how the fund works and payment structure</p>
            </Link>
            <Link href="/guides/how-to-increase-creator-fund-earnings" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">📈 How to Increase Creator Fund Earnings</h4>
              <p className="text-body-sm text-neutral-700">12 proven strategies to boost your RPM and total earnings</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
