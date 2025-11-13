import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'All TikTok Calculators',
  description: 'Free TikTok calculators for creators: Creator Fund, engagement rate, brand deal rates, LIVE gifts, coins, RPM, Shop commissions, and total earnings.',
};

export default function CalculatorsPage() {
  const calculators = [
    {
      name: 'Creator Fund Calculator',
      slug: 'tiktok-creator-fund',
      description: 'Estimate monthly and annual earnings from the TikTok Creator Fund based on views, engagement, and niche.',
      icon: '💰',
      category: 'Earnings',
      popular: true,
    },
    {
      name: 'Engagement Rate Calculator',
      slug: 'engagement-rate',
      description: 'Calculate your TikTok engagement rate and compare to industry benchmarks.',
      icon: '📊',
      category: 'Analytics',
      popular: true,
    },
    {
      name: 'Brand Deal Rate Calculator',
      slug: 'brand-deal-rate',
      description: 'Calculate how much you should charge brands for sponsored content based on followers and engagement.',
      icon: '🤝',
      category: 'Earnings',
      popular: true,
    },
    {
      name: 'TikTok Money Calculator',
      slug: 'tiktok-money',
      description: 'Calculate total earnings from all monetization streams: Creator Fund, brand deals, and LIVE gifts.',
      icon: '💵',
      category: 'Earnings',
      popular: true,
    },
    {
      name: 'LIVE Gifts Calculator',
      slug: 'live-gifts',
      description: 'Estimate earnings from TikTok LIVE streaming based on viewers, duration, and gifting rate.',
      icon: '🎁',
      category: 'LIVE',
    },
    {
      name: 'Coins Calculator',
      slug: 'coins',
      description: 'Convert TikTok coins to USD value and diamonds.',
      icon: '🪙',
      category: 'Conversion',
    },
    {
      name: 'RPM Calculator',
      slug: 'rpm',
      description: 'Calculate your revenue per 1,000 views (RPM) to understand earning efficiency.',
      icon: '📈',
      category: 'Analytics',
    },
    {
      name: 'Shop Commission Calculator',
      slug: 'shop-commission',
      description: 'Calculate earnings from TikTok Shop affiliate commissions.',
      icon: '🛍️',
      category: 'Shop',
    },
  ];

  const categories = ['All', 'Earnings', 'Analytics', 'LIVE', 'Shop', 'Conversion'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Creator Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Free, data-driven calculators for TikTok creators. Estimate earnings, calculate engagement rates, determine brand deal prices, and more.
          </p>
        </div>

        {/* Popular Calculators */}
        <div className="mb-16">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6 text-center">
            Most Popular
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {calculators
              .filter((calc) => calc.popular)
              .map((calc) => (
                <Link
                  key={calc.slug}
                  href={`/calculators/${calc.slug}`}
                  className="card card-hover p-6 group bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-primary text-white flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                      {calc.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-heading-md font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {calc.name}
                      </h3>
                      <p className="text-body-sm text-neutral-600">
                        {calc.description}
                      </p>
                      <span className="inline-block mt-3 badge badge-primary">
                        {calc.category}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>

        {/* All Calculators */}
        <div>
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6 text-center">
            All Calculators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {calculators.map((calc) => (
              <Link
                key={calc.slug}
                href={`/calculators/${calc.slug}`}
                className="card card-hover p-6 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary-100 text-primary-600 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                    {calc.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {calc.name}
                    </h3>
                    <p className="text-body-sm text-neutral-600 line-clamp-2">
                      {calc.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 max-w-3xl mx-auto">
          <Card className="bg-gradient-primary text-white text-center p-8">
            <h2 className="text-display-sm font-bold mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-body-lg mb-6 opacity-90">
              Not sure which calculator to use? Start with the Engagement Rate Calculator, then explore earnings estimates.
            </p>
            <Link
              href="/guides/how-to-make-money-on-tiktok"
              className="btn bg-white text-primary-600 hover:bg-neutral-100 btn-lg"
            >
              Read Our Complete Guide
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
