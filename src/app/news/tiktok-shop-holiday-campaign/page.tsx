import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Shop Kicks Off Biggest Holiday Season Ever | TikTok News',
  description: 'TikTok Shop announces its largest holiday shopping campaign in November 2025, combining creator storytelling with in-app purchasing.',
  keywords: ['tiktok shop', 'holiday shopping', 'social commerce', 'tiktok sales', 'creator economy'],
};

export default function TikTokShopHolidayCampaignPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Shop Holiday Campaign</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-red-600 via-rose-500 to-pink-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-red-600">
              MAJOR ANNOUNCEMENT
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              TikTok Shop
            </span>
            <span className="text-white/80 text-label-sm">Published: November 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop Kicks Off Biggest Holiday Season Ever
          </h1>
          <p className="text-heading-md text-white/90">
            Platform launches largest holiday shopping campaign, combining creator storytelling with seamless in-app purchasing
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-red-50 border-2 border-red-200">
          <h2 className="text-heading-lg font-semibold text-red-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-red-800">
            TikTok Shop's biggest-ever holiday campaign represents a massive opportunity for creators to earn through product reviews, unboxing videos, and affiliate commissions. With enhanced discovery features and promotional support, this holiday season could be the most lucrative yet for TikTok Shop affiliates and sellers.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What's Launching for the Holidays?
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            In November 2025, TikTok Shop announced an unprecedented holiday shopping campaign that leverages the platform's unique blend of entertainment and commerce. The initiative includes special creator incentives, enhanced shopping features, and dedicated promotional support.
          </p>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg">
            <h3 className="text-heading-md font-semibold text-red-900 mb-4">
              Holiday Campaign Highlights
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-2xl">🎁</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Special Creator Incentives</p>
                  <p className="text-body-sm text-neutral-700">Bonus commission rates and performance rewards for top-selling creators</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-2xl">🛍️</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Exclusive Holiday Deals</p>
                  <p className="text-body-sm text-neutral-700">Flash sales, limited-time offers, and creator-curated gift guides</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-2xl">📱</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Enhanced Shopping Features</p>
                  <p className="text-body-sm text-neutral-700">Improved product discovery, gift recommendations, and one-click checkout</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-red-600 text-2xl">🎬</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Shoppable LIVE Events</p>
                  <p className="text-body-sm text-neutral-700">Interactive live shopping streams with exclusive product launches</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How Creators Can Maximize Holiday Earnings
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
                🎥 Create Gift Guide Content
              </h3>
              <p className="text-body-sm text-green-800">
                Produce "Top 10 Gifts for [Audience]" videos featuring TikTok Shop products. Tag products directly for seamless purchasing.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                📦 Unboxing & Reviews
              </h3>
              <p className="text-body-sm text-blue-800">
                Partner with brands for sponsored unboxing videos. Authentic reviews perform exceptionally well during holiday shopping season.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                🔴 Host LIVE Shopping Events
              </h3>
              <p className="text-body-sm text-purple-800">
                Go LIVE with product demonstrations, Q&As, and exclusive discount codes. LIVE shoppers convert at 10x higher rates.
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">
                💸 Leverage Affiliate Links
              </h3>
              <p className="text-body-sm text-amber-800">
                Join TikTok Shop's affiliate program to earn commissions on every sale. Holiday season offers bonus commission rates.
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-amber-50">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
            Key Holiday Shopping Dates
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center bg-white p-3 rounded">
              <span className="font-semibold text-neutral-900">Black Friday</span>
              <span className="text-amber-600 font-semibold">November 29, 2025</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded">
              <span className="font-semibold text-neutral-900">Cyber Monday</span>
              <span className="text-amber-600 font-semibold">December 2, 2025</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded">
              <span className="font-semibold text-neutral-900">Last Day for Standard Shipping</span>
              <span className="text-amber-600 font-semibold">December 18, 2025</span>
            </div>
            <div className="flex justify-between items-center bg-white p-3 rounded">
              <span className="font-semibold text-neutral-900">Christmas</span>
              <span className="text-amber-600 font-semibold">December 25, 2025</span>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your TikTok Shop Earnings
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Estimate your potential holiday season earnings:
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
                href="https://newsroom.tiktok.com/en-us/tiktok-shop-kicks-off-our-biggest-holiday-season-ever"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                TikTok Newsroom: TikTok Shop Holiday Season Announcement →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
