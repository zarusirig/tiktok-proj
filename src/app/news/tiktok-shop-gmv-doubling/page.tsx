import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Shop Projected to Double GMV by End of 2025 | TikTok News',
  description: 'Industry projections indicate TikTok Shop\'s global gross merchandise value could double by the end of 2025, outpacing competitors in social commerce.',
  keywords: ['tiktok shop gmv', 'social commerce growth', 'tiktok sales', 'e-commerce projections'],
};

export default function TikTokShopGMVDoublingPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Shop GMV Growth</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-600 via-emerald-500 to-teal-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-green-600">
              MARKET ANALYSIS
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Financial Growth
            </span>
            <span className="text-white/80 text-label-sm">Published: November 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop GMV Projected to Double by End of 2025
          </h1>
          <p className="text-heading-md text-white/90">
            Industry analysts forecast explosive growth outpacing traditional social commerce competitors
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-green-50 border-2 border-green-200">
          <h2 className="text-heading-lg font-semibold text-green-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-green-800">
            TikTok Shop's projected doubling of GMV represents unprecedented opportunity for creators. As transaction volume grows, so do commission pools, brand partnership budgets, and creator incentive programs. Getting established now positions you for maximum earnings as the platform scales.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            The Numbers Behind the Growth
          </h2>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg mb-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-label-sm text-neutral-600 mb-1">2024 GMV (Actual)</p>
                <p className="text-display-md font-bold text-green-600">$20B</p>
              </div>
              <div>
                <p className="text-label-sm text-neutral-600 mb-1">2025 Projected GMV</p>
                <p className="text-display-md font-bold text-emerald-600">$40B+</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white rounded-lg">
              <p className="text-heading-sm font-semibold text-neutral-900 mb-2">Growth Rate: +100%</p>
              <p className="text-body-sm text-neutral-700">This growth rate significantly outpaces Amazon's early years and positions TikTok Shop as the fastest-growing social commerce platform in history.</p>
            </div>
          </div>
          <p className="text-body-md text-neutral-700">
            According to industry analysts and leaked internal projections, TikTok Shop's global gross merchandise value (GMV) is on track to reach $40+ billion by December 2025, effectively doubling from the $20 billion recorded in 2024.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What's Driving This Explosive Growth?
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">🌍 Geographic Expansion</h3>
              <p className="text-body-sm text-blue-800">
                TikTok Shop launched in France, Germany, Italy, and other new markets in 2025, dramatically expanding the addressable customer base.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">📱 Improved User Experience</h3>
              <p className="text-body-sm text-purple-800">
                Streamlined checkout, better product discovery, and enhanced seller tools have reduced friction and increased conversion rates.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">💼 Brand Adoption</h3>
              <p className="text-body-sm text-green-800">
                Major retailers and consumer brands are now treating TikTok Shop as a primary sales channel, not just an experimental platform.
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">👥 Creator Ecosystem</h3>
              <p className="text-body-sm text-amber-800">
                More creators are earning significant income through TikTok Shop, creating a virtuous cycle of content creation and product promotion.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What Doubling GMV Means for Creators
          </h2>
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <h3 className="text-heading-sm font-semibold text-emerald-900 mb-2">💰 Higher Commission Pools</h3>
                <p className="text-body-md text-emerald-800">
                  More sales = more commission revenue. If you're earning $500/month now, doubling GMV could mean $1,000+/month with the same effort.
                </p>
              </div>
              <div>
                <h3 className="text-heading-sm font-semibold text-teal-900 mb-2">🎁 Increased Brand Budgets</h3>
                <p className="text-body-md text-teal-800">
                  As ROI proves out, brands are allocating larger budgets to TikTok Shop campaigns, meaning higher rates for sponsored content.
                </p>
              </div>
              <div>
                <h3 className="text-heading-sm font-semibold text-cyan-900 mb-2">🚀 Platform Investment</h3>
                <p className="text-body-md text-cyan-800">
                  TikTok is reinvesting revenue into creator incentives, better tools, and promotional programs to sustain growth momentum.
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-amber-50">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
            How to Position Yourself for This Growth
          </h2>
          <ol className="space-y-3 text-body-md text-amber-800">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <span><strong>Join the Affiliate Program Now</strong> - Early adopters often receive better commission rates and promotional support</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <span><strong>Create Shop-Focused Content</strong> - Develop expertise in product reviews, unboxings, and recommendations</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <span><strong>Build Your Niche</strong> - Become the go-to creator for a specific product category (beauty, tech, home goods, etc.)</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <span><strong>Leverage LIVE Shopping</strong> - Live streams convert at 10x higher rates than regular videos</span>
            </li>
          </ol>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your TikTok Shop Earnings
          </h2>
          <div className="grid gap-3">
            <Link
              href="/calculators/tiktok-shop-profit"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">TikTok Shop Profit Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/calculators/affiliate-commission"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Affiliate Commission Calculator</span>
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
                href="https://www.webpronews.com/tiktok-shops-explosive-ascent-reshaping-retail-in-2025/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                WebProNews: TikTok Shop's Explosive Growth →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
