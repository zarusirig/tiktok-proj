import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'Fitness Creators TikTok Earnings Guide (2025)',
  description: 'Complete guide to fitness creator earnings on TikTok. See how much workout, gym, and health creators earn by follower tier with real 2025 data.',
  keywords: ['fitness creators tiktok earnings', 'workout creator income', 'gym influencer earnings', 'fitness niche monetization', 'tiktok fitness earnings'],
};

export default function FitnessCreatorsEarningsPage() {
  const faqs = [
    {
      question: 'Do I need to show my body to succeed in fitness?',
      answer: 'No. Many successful creators focus on technique demonstrations, animations, or voiceover-only content. What matters most is providing value through workout knowledge and motivation.',
    },
    {
      question: 'What commission rates do fitness affiliates earn?',
      answer: 'Supplements: 15–30%, Equipment: 10–20%, Apps: $5–$50 per conversion. Fitness brands pay premium rates because they know the audience converts well.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Fitness Creators Earnings</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-500 via-blue-500 to-purple-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            Fitness Creators TikTok Earnings Guide (2025)
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete guide to fitness creator earnings on TikTok with real 2025 data. See how much workout, gym, and health creators earn by follower tier.
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Updated: November 2025</span>
            <span>⏱️ 6 min read</span>
            <span>💪 Fitness Creator Guide</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Introduction */}
        <Card>
          <p className="text-body-lg text-neutral-700 mb-4">
            Fitness is a <strong>top-earning niche on TikTok</strong>, with creators monetizing through brand deals, affiliate programs, digital products, and coaching services.
            This guide provides realistic 2025 earnings data for fitness creators at every level.
          </p>
        </Card>

        {/* Earnings by Follower Tier */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Earnings by Follower Tier</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="border border-neutral-200 rounded-lg p-6 bg-gradient-to-br from-green-50 to-green-100">
              <h3 className="text-heading-md font-semibold text-green-900 mb-4">5K–10K Followers</h3>
              <div className="space-y-3">
                <div className="text-body-sm text-green-800">
                  <strong>Monthly earnings: $100–$500</strong>
                </div>
                <ul className="text-body-sm text-green-700 space-y-1">
                  <li>Brand deals: $100–$300/post (1–2/month)</li>
                  <li>Affiliate: $50–$150 (supplements, equipment)</li>
                  <li>Digital products: $50–$100 (workout guides)</li>
                </ul>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6 bg-gradient-to-br from-blue-50 to-blue-100">
              <h3 className="text-heading-md font-semibold text-blue-900 mb-4">10K–50K Followers</h3>
              <div className="space-y-3">
                <div className="text-body-sm text-blue-800">
                  <strong>Monthly earnings: $500–$3,000</strong>
                </div>
                <ul className="text-body-sm text-blue-700 space-y-1">
                  <li>Brand deals: $300–$1,500/post (2–3/month)</li>
                  <li>Affiliate: $200–$800</li>
                  <li>Coaching/Programs: $300–$1,000</li>
                </ul>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6 bg-gradient-to-br from-purple-50 to-purple-100">
              <h3 className="text-heading-md font-semibold text-purple-900 mb-4">50K–100K Followers</h3>
              <div className="space-y-3">
                <div className="text-body-sm text-purple-800">
                  <strong>Monthly earnings: $3,000–$15,000</strong>
                </div>
                <ul className="text-body-sm text-purple-700 space-y-1">
                  <li>Brand deals: $1,500–$5,000/post (3–4/month)</li>
                  <li>Affiliate: $800–$3,000</li>
                  <li>Digital products/Courses: $1,000–$5,000</li>
                </ul>
              </div>
            </div>

            <div className="border border-neutral-200 rounded-lg p-6 bg-gradient-to-br from-orange-50 to-orange-100">
              <h3 className="text-heading-md font-semibold text-orange-900 mb-4">100K+ Followers</h3>
              <div className="space-y-3">
                <div className="text-body-sm text-orange-800">
                  <strong>Monthly earnings: $15,000–$100,000+</strong>
                </div>
                <ul className="text-body-sm text-orange-700 space-y-1">
                  <li>Brand deals: $5,000–$30,000/post</li>
                  <li>Affiliate: $3,000–$20,000</li>
                  <li>Programs/Coaching: $5,000–$50,000</li>
                  <li>Sponsorships: $10,000–$50,000/month</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        {/* Top Earning Opportunities */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Top Earning Opportunities</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">🏆 Supplement Sponsorships</h3>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <p><strong>High-paying niche:</strong> Supplement brands pay premium rates</p>
                <ul className="space-y-1 ml-4">
                  <li>Rates: $1,000–$10,000 per sponsored post</li>
                  <li>Recurring partnerships common</li>
                  <li>Affiliate commissions: 15–30%</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">🏋️ Fitness Equipment Brands</h3>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <p>Resistance bands, dumbbells, workout gear</p>
                <ul className="space-y-1 ml-4">
                  <li>$500–$5,000 per post</li>
                  <li>Affiliate: 10–20% commission</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">📱 Fitness App Partnerships</h3>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <p>Apps pay for user acquisitions</p>
                <ul className="space-y-1 ml-4">
                  <li>$2,000–$20,000 for app promotion campaigns</li>
                  <li>Performance bonuses (per download)</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">📚 Workout Programs/Ebooks</h3>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <p><strong>Sell your own products:</strong></p>
                <ul className="space-y-1 ml-4">
                  <li>Workout PDFs: $10–$50 each</li>
                  <li>30-day challenges: $30–$100</li>
                  <li>Active creators with 20K followers: $500–$5,000/month</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
            <h4 className="text-heading-sm font-semibold text-green-900 mb-2">💪 Online Coaching</h4>
            <ul className="text-body-sm text-green-800 space-y-1">
              <li><strong>1-on-1 or group coaching:</strong> $100–$500/client/month</li>
              <li><strong>10 clients = $1,000–$5,000/month additional income</strong></li>
            </ul>
          </div>
        </Card>

        {/* Fitness Niche Advantages */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Fitness Niche Advantages</h2>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6">
            <h3 className="text-heading-md font-semibold text-green-900 mb-4">Why fitness earns well:</h3>
            <ul className="space-y-2 text-body-sm text-green-800">
              <li>✅ <strong>High purchase intent:</strong> Viewers want results and are willing to invest</li>
              <li>✅ <strong>Transformation content performs well:</strong> Before/after videos drive engagement</li>
              <li>✅ <strong>Strong affiliate markets:</strong> Supplements, equipment, apps all pay well</li>
              <li>✅ <strong>Recurring revenue:</strong> Coaching, memberships, program sales</li>
            </ul>
            <p className="text-green-900 font-medium mt-4">
              <strong>Engagement rates:</strong> Fitness averages 6–9% (above platform average of 4–6%)
            </p>
          </div>
        </Card>

        {/* Best Monetization Strategies */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Best Monetization Strategies</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="border border-neutral-200 rounded-lg p-4">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">🎯 Build Transformation Portfolio</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1">
                <li>Document your own journey</li>
                <li>Share client transformations (with permission)</li>
                <li>Proof = higher rates from brands</li>
              </ul>
            </div>

            <div className="border border-neutral-200 rounded-lg p-4">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">🔍 Niche Down</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1">
                <li>General fitness is saturated</li>
                <li>Specialize: "Home workouts for busy moms"</li>
                <li>Specialists earn 30–50% more</li>
              </ul>
            </div>

            <div className="border border-neutral-200 rounded-lg p-4">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">🎁 Create Lead Magnets</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1">
                <li>Free workout guide in exchange for email</li>
                <li>Sell premium programs to email list</li>
                <li>Additional $500–$5,000/month</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} pageName="Fitness Creators TikTok Earnings" />

        {/* Related Content */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Content</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/guides/beauty-creators-earnings" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Beauty Creators Earnings</h4>
              <p className="text-body-sm text-neutral-600">Makeup and skincare earnings</p>
            </Link>
            <Link href="/calculators/brand-deal-rate" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Brand Deal Calculator</h4>
              <p className="text-body-sm text-neutral-600">Calculate sponsorship rates</p>
            </Link>
            <Link href="/guides/how-to-get-brand-deals-complete" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">How to Get Brand Deals</h4>
              <p className="text-body-sm text-neutral-600">Find sponsorship opportunities</p>
            </Link>
            <Link href="/guides/how-to-increase-engagement" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Increase Engagement</h4>
              <p className="text-body-sm text-neutral-600">Boost your TikTok performance</p>
            </Link>
            <Link href="/guides/tiktok-creator-fund" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Creator Fund Guide</h4>
              <p className="text-body-sm text-neutral-600">TikTok's RPM program</p>
            </Link>
            <Link href="/comparisons/creator-fund-vs-brand-deals" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Creator Fund vs Brand Deals</h4>
              <p className="text-body-sm text-neutral-600">Which monetization method pays more?</p>
            </Link>
            <Link href="/comparisons/tiktok-vs-instagram" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">TikTok vs Instagram</h4>
              <p className="text-body-sm text-neutral-600">Platform comparison for creators</p>
            </Link>
            <Link href="/guides/how-to-go-viral" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">How to Go Viral</h4>
              <p className="text-body-sm text-neutral-600">Viral content strategies</p>
            </Link>
            <Link href="/guides/best-times-go-live" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-1">Best Times to Go Live</h4>
              <p className="text-body-sm text-neutral-600">Optimize your live streaming schedule</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
