import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Shop Introduces Product Subscriptions Feature | TikTok News',
  description: 'TikTok introduced Product Subscriptions for TikTok Shop users, enabling recurring revenue models for sellers and convenience for buyers.',
  keywords: ['tiktok shop subscriptions', 'recurring revenue', 'subscription model', 'tiktok shop features'],
};

export default function ProductSubscriptionsFeaturePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Product Subscriptions</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-purple-600 via-indigo-500 to-blue-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-purple-600">
              NEW FEATURE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              TikTok Shop
            </span>
            <span className="text-white/80 text-label-sm">Published: November 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop Introduces Product Subscriptions Feature
          </h1>
          <p className="text-heading-md text-white/90">
            New recurring revenue model enables subscription-based purchasing for consumable products
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-purple-50 border-2 border-purple-200">
          <h2 className="text-heading-lg font-semibold text-purple-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-purple-800">
            Product Subscriptions unlock recurring commission revenue for creators. Instead of one-time commissions, you can now earn ongoing income as customers auto-reorder products monthly. This dramatically increases lifetime value per referral and creates more predictable income streams.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What Are Product Subscriptions?
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            TikTok Shop's new Product Subscriptions feature allows customers to set up automatic recurring orders for consumable products like skincare, supplements, snacks, and other items that require regular replenishment. Sellers can offer subscription discounts, and customers enjoy the convenience of never running out of their favorite products.
          </p>
          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg">
            <h3 className="text-heading-md font-semibold text-purple-900 mb-4">
              How It Works
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">1</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Customer Discovers Product</p>
                  <p className="text-body-sm text-neutral-700">Through creator content, they find a product they love</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">2</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Choose Subscription Option</p>
                  <p className="text-body-sm text-neutral-700">Select delivery frequency (weekly, bi-weekly, monthly)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">3</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Automatic Reorders</p>
                  <p className="text-body-sm text-neutral-700">Product ships automatically on chosen schedule</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">4</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Creator Earns Recurring Commission</p>
                  <p className="text-body-sm text-neutral-700">You earn commission on every subscription renewal</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Best Product Categories for Subscriptions
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-pink-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-pink-900 mb-2">💄 Beauty & Skincare</h3>
              <p className="text-body-sm text-pink-800">
                Serums, moisturizers, cleansers, masks - products used daily or weekly
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">🏋️ Health & Wellness</h3>
              <p className="text-body-sm text-green-800">
                Vitamins, supplements, protein powder, fitness accessories
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">🍵 Food & Beverages</h3>
              <p className="text-body-sm text-amber-800">
                Coffee, tea, snacks, meal kits, specialty ingredients
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">🏠 Household Items</h3>
              <p className="text-body-sm text-blue-800">
                Cleaning supplies, paper products, pet food, laundry detergent
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Why Subscriptions Are a Game-Changer for Creators
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
                💰 Recurring Revenue
              </h3>
              <p className="text-body-md text-green-800 mb-2">
                Instead of earning once, you earn commission every time the subscription renews. A single recommendation can generate income for months or years.
              </p>
              <p className="text-body-sm text-green-700 italic">
                Example: $5 commission × 12 months = $60 lifetime value per customer
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                📊 Predictable Income
              </h3>
              <p className="text-body-md text-blue-800">
                Build a base of recurring commission income that provides financial stability and reduces income volatility.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                🎯 Higher Customer Lifetime Value
              </h3>
              <p className="text-body-md text-purple-800">
                Subscription customers are worth 5-10x more than one-time buyers, meaning each piece of content has more earning potential.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How to Promote Subscription Products
          </h2>
          <div className="space-y-3 bg-slate-50 p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">✓</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Emphasize Convenience</p>
                <p className="text-body-sm text-neutral-700">"Never run out again" and "set it and forget it" messaging resonates with busy audiences</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">✓</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Highlight Subscription Savings</p>
                <p className="text-body-sm text-neutral-700">Many products offer 10-20% discounts for subscription orders</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">✓</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Create "Restock Day" Content</p>
                <p className="text-body-sm text-neutral-700">Show your own subscription deliveries arriving to build authenticity</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-purple-600 text-xl">✓</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Bundle Recommendations</p>
                <p className="text-body-sm text-neutral-700">"My monthly skincare subscription routine" packages multiple products</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-amber-50">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
            Getting Started with Subscription Promotions
          </h2>
          <ol className="space-y-2 text-body-md text-amber-800">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <span>Browse TikTok Shop for products offering subscription options</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <span>Join affiliate programs for subscription-eligible products</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <span>Create content highlighting subscription benefits and convenience</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <span>Track your recurring commission revenue in TikTok Shop Creator Center</span>
            </li>
          </ol>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your Subscription Revenue Potential
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
                href="https://socialbee.com/blog/tiktok-updates/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                SocialBee: TikTok Shop Updates →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
