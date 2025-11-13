import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Shop Expands to France, Germany, and Italy | TikTok News',
  description: 'In March 2025, TikTok Shop launched in France, Germany, and Italy, significantly expanding its European presence.',
  keywords: ['tiktok shop europe', 'tiktok shop expansion', 'european e-commerce', 'tiktok international'],
};

export default function TikTokShopEuropeExpansionPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Shop Europe Expansion</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-700 via-indigo-600 to-purple-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-blue-600">
              GLOBAL EXPANSION
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              TikTok Shop
            </span>
            <span className="text-white/80 text-label-sm">Published: March 27, 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop Expands to France, Germany, and Italy
          </h1>
          <p className="text-heading-md text-white/90">
            Major European expansion despite regulatory uncertainty in the United States
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-blue-50 border-2 border-blue-200">
          <h2 className="text-heading-lg font-semibold text-blue-900 mb-3">
            Key Takeaway
          </h2>
          <p className="text-body-md text-blue-800">
            TikTok Shop's launch in three major European markets signals the platform's commitment to global social commerce leadership. European creators now have access to the same monetization opportunities that have proven successful in the US and UK markets.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Three New Markets Launch Simultaneously
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            On March 27, 2025, TikTok Shop officially launched in France, Germany, and Italy, marking the platform's most significant European expansion to date. This strategic move comes despite ongoing regulatory challenges in the United States, demonstrating TikTok's confidence in its social commerce model.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">🇫🇷</div>
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">France</h3>
              <p className="text-body-sm text-blue-800">68 million population<br/>45M TikTok users</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">🇩🇪</div>
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">Germany</h3>
              <p className="text-body-sm text-purple-800">84 million population<br/>20M TikTok users</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-6 rounded-lg text-center">
              <div className="text-4xl mb-2">🇮🇹</div>
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">Italy</h3>
              <p className="text-body-sm text-green-800">59 million population<br/>18M TikTok users</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What's Included in the European Launch
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
              <span className="text-blue-600 text-2xl">🛍️</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Full E-Commerce Integration</p>
                <p className="text-body-sm text-neutral-700">In-app shopping with local currency support (EUR)</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
              <span className="text-purple-600 text-2xl">👥</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Creator Affiliate Program</p>
                <p className="text-body-sm text-neutral-700">Commission-based earnings for product promotion</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
              <span className="text-green-600 text-2xl">📦</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Local Logistics</p>
                <p className="text-body-sm text-neutral-700">Partnerships with European fulfillment centers</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
              <span className="text-amber-600 text-2xl">🔴</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">LIVE Shopping</p>
                <p className="text-body-sm text-neutral-700">Interactive livestream shopping events</p>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Strategic Implications
          </h2>
          <div className="bg-slate-50 p-6 rounded-lg">
            <p className="text-body-md text-neutral-700 mb-4">
              The European expansion is particularly notable given the timing—coming amid US regulatory uncertainty, TikTok is diversifying its global commerce footprint. The move positions TikTok Shop to compete directly with established e-commerce platforms like Amazon and European players like Zalando and Otto.
            </p>
            <ul className="space-y-2 text-body-sm text-neutral-700 list-disc list-inside ml-4">
              <li>Combined market of 211 million people across three countries</li>
              <li>83 million active TikTok users gaining shopping access</li>
              <li>Projected €5+ billion in GMV from European markets by end of 2025</li>
              <li>Thousands of creator monetization opportunities opening up</li>
            </ul>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            US Creators: Learn from TikTok Shop Success
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Calculate your TikTok Shop potential:
          </p>
          <div className="grid gap-3">
            <Link
              href="/calculators/tiktok-shop-profit"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">TikTok Shop Profit Calculator</span>
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
                href="https://www.reuters.com/technology/tiktok-shop-steps-up-europe-expansion-with-us-future-unclear-2025-03-27/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                Reuters: TikTok Shop Steps Up Europe Expansion →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
