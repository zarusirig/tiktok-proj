import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Shop Becomes Third-Fastest Growing Brand in the US | TikTok News',
  description: 'According to Morning Consult data, TikTok Shop secured third place among brands with the most significant year-over-year growth in consumer favorability.',
  keywords: ['tiktok shop', 'brand growth', 'social commerce', 'consumer favorability', 'market research'],
};

export default function TikTokShopThirdFastestGrowingPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Shop Growth</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-emerald-600 via-teal-500 to-cyan-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-yellow-400 text-yellow-900">
              MARKET REPORT
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              E-Commerce
            </span>
            <span className="text-white/80 text-label-sm">Published: November 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop Ranks as Third-Fastest Growing Brand in the US
          </h1>
          <p className="text-heading-md text-white/90">
            Morning Consult research reveals explosive growth in consumer favorability
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-emerald-50 border-2 border-emerald-200">
          <h2 className="text-heading-lg font-semibold text-emerald-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-emerald-800">
            TikTok Shop's rapid ascent to third place in brand growth rankings signals a seismic shift in social commerce. For creators, this means increased shopping behavior from audiences, higher conversion rates, and more opportunities for affiliate earnings and brand partnerships through the platform.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What the Research Shows
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            According to Morning Consult's latest brand tracking data, TikTok Shop secured the third position among brands with the most significant year-over-year growth in consumer favorability. This achievement is particularly remarkable given that TikTok Shop launched in the US market less than two years ago.
          </p>
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-lg">
            <h3 className="text-heading-md font-semibold text-emerald-900 mb-4">
              Growth Metrics
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-display-md font-bold text-emerald-600 mb-1">#3</div>
                <p className="text-label-sm text-neutral-700">Fastest Growing Brand</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-display-md font-bold text-teal-600 mb-1">↑ 145%</div>
                <p className="text-label-sm text-neutral-700">YoY Consumer Favorability</p>
              </div>
              <div className="bg-white p-4 rounded-lg text-center">
                <div className="text-display-md font-bold text-cyan-600 mb-1">$20B+</div>
                <p className="text-label-sm text-neutral-700">Projected 2025 GMV</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Why TikTok Shop Is Growing So Fast
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">🎯 Discovery-Driven Shopping</h3>
              <p className="text-body-sm text-blue-800">
                Unlike traditional e-commerce where users search for products they already want, TikTok Shop introduces users to products through entertaining content, creating demand rather than just fulfilling it.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">🤝 Authentic Creator Recommendations</h3>
              <p className="text-body-sm text-purple-800">
                Consumers trust product recommendations from creators they follow more than traditional advertising, leading to higher conversion rates and repeat purchases.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">⚡ Seamless In-App Experience</h3>
              <p className="text-body-sm text-green-800">
                Users can discover, research, and purchase products without leaving TikTok, reducing friction and abandoned carts compared to traditional social media shopping.
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">💰 Competitive Pricing</h3>
              <p className="text-body-sm text-amber-800">
                TikTok Shop offers aggressive pricing and frequent promotions, with many products priced lower than competitors like Amazon and Walmart.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What This Means for Creators
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
                💸 More Earning Opportunities
              </h3>
              <p className="text-body-md text-green-800">
                As TikTok Shop grows, so do commission rates and available products. More brands are joining the platform, creating more partnership opportunities for creators of all sizes.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                📈 Higher Conversion Rates
              </h3>
              <p className="text-body-md text-blue-800">
                Growing consumer trust in TikTok Shop means audiences are more willing to make purchases, translating to better ROI on your content and higher affiliate earnings.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                🚀 Platform Investment
              </h3>
              <p className="text-body-md text-purple-800">
                TikTok is investing heavily in Shop infrastructure, creator tools, and incentive programs. Early adopters are seeing the biggest rewards.
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Start Earning with TikTok Shop
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Calculate your potential earnings and learn how to get started:
          </p>
          <div className="grid gap-3">
            <Link
              href="/calculators/tiktok-shop-profit"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">TikTok Shop Profit Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/guides/tiktok-shop-affiliate"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">TikTok Shop Affiliate Guide</span>
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
                WebProNews: TikTok Shop's Explosive Ascent Reshaping Retail →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
