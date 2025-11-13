import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'TikTok Creator Calculator - Free Earnings & Analytics Tools',
  description:
    'Comprehensive suite of free TikTok calculators for creators. Estimate Creator Fund earnings, engagement rates, brand deal rates, LIVE gifts, and more. Data-driven tools with transparent methodology.',
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50">
      {/* Header */}
      <header className="container-custom py-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-xl">
              TC
            </div>
            <span className="text-heading-md font-bold text-neutral-900">
              TikTok Creator Calculator
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/calculators" className="text-body-md text-neutral-700 hover:text-primary-500 transition-colors">
              Calculators
            </Link>
            <Link href="/guides" className="text-body-md text-neutral-700 hover:text-primary-500 transition-colors">
              Guides
            </Link>
            <Link href="/about" className="text-body-md text-neutral-700 hover:text-primary-500 transition-colors">
              About
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container-custom section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-6 text-balance">
            Free TikTok Calculators for{' '}
            <span className="text-transparent bg-clip-text gradient-accent">
              Creators
            </span>
          </h1>
          <p className="text-body-lg md:text-heading-sm text-neutral-600 mb-10 max-w-3xl mx-auto">
            Estimate your Creator Fund earnings, engagement rates, brand deal rates, and more.
            Data-driven tools with transparent methodology—trusted by 10,000+ creators.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculators/tiktok-creator-fund"
              className="btn btn-primary btn-lg shadow-lg hover:shadow-xl"
            >
              Calculate Your Earnings
            </Link>
            <Link
              href="/calculators"
              className="btn btn-outline btn-lg"
            >
              View All Calculators
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Calculators */}
      <section className="container-custom section-padding">
        <div className="text-center mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-4">
            Popular Calculators
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Get instant estimates with our most-used creator tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {featuredCalculators.map((calc) => (
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
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {calc.name}
                  </h3>
                  <p className="text-body-sm text-neutral-600">
                    {calc.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container-custom section-padding bg-white/50 rounded-2xl">
        <div className="text-center mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-4">
            Why Use Our Calculators?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature) => (
            <div key={feature.title} className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-primary text-white flex items-center justify-center text-3xl mx-auto mb-4">
                {feature.icon}
              </div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-body-md text-neutral-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom section-padding">
        <div className="card p-8 md:p-12 text-center max-w-3xl mx-auto bg-gradient-primary text-white">
          <h2 className="text-display-sm font-bold mb-4">
            Ready to Calculate Your Earnings?
          </h2>
          <p className="text-body-lg mb-8 opacity-90">
            Join thousands of creators who use our calculators to make data-driven decisions
            about their TikTok monetization strategy.
          </p>
          <Link
            href="/calculators/tiktok-money"
            className="btn bg-white text-primary-600 hover:bg-neutral-100 btn-lg shadow-xl"
          >
            Calculate Total Earnings
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="container-custom py-12 border-t border-neutral-200 mt-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-4">
              Calculators
            </h4>
            <ul className="space-y-2">
              <li><Link href="/calculators/tiktok-creator-fund" className="text-body-sm text-neutral-600 hover:text-primary-500">Creator Fund</Link></li>
              <li><Link href="/calculators/engagement-rate" className="text-body-sm text-neutral-600 hover:text-primary-500">Engagement Rate</Link></li>
              <li><Link href="/calculators/brand-deal-rate" className="text-body-sm text-neutral-600 hover:text-primary-500">Brand Deal Rate</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-4">
              Guides
            </h4>
            <ul className="space-y-2">
              <li><Link href="/guides/how-to-make-money-on-tiktok" className="text-body-sm text-neutral-600 hover:text-primary-500">Make Money on TikTok</Link></li>
              <li><Link href="/guides/tiktok-creator-fund" className="text-body-sm text-neutral-600 hover:text-primary-500">Creator Fund Guide</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-4">
              Company
            </h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-body-sm text-neutral-600 hover:text-primary-500">About</Link></li>
              <li><Link href="/contact" className="text-body-sm text-neutral-600 hover:text-primary-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-heading-sm font-semibold text-neutral-900 mb-4">
              Legal
            </h4>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-body-sm text-neutral-600 hover:text-primary-500">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-body-sm text-neutral-600 hover:text-primary-500">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-neutral-200 text-center text-body-sm text-neutral-600">
          <p>&copy; {new Date().getFullYear()} TikTok Creator Calculator. All rights reserved.</p>
          <p className="mt-2 text-label-sm">
            Not affiliated with TikTok or ByteDance Ltd. All trademarks are property of their respective owners.
          </p>
        </div>
      </footer>
    </div>
  );
}

const featuredCalculators = [
  {
    name: 'Creator Fund Calculator',
    slug: 'tiktok-creator-fund',
    description: 'Estimate your monthly earnings from the TikTok Creator Fund',
    icon: '💰',
  },
  {
    name: 'Engagement Rate Calculator',
    slug: 'engagement-rate',
    description: 'Calculate your TikTok engagement rate and compare to benchmarks',
    icon: '📊',
  },
  {
    name: 'Brand Deal Rate Calculator',
    slug: 'brand-deal-rate',
    description: 'Find out how much you should charge for sponsored content',
    icon: '🤝',
  },
  {
    name: 'LIVE Gifts Calculator',
    slug: 'live-gifts',
    description: 'Estimate earnings from TikTok LIVE streaming',
    icon: '🎁',
  },
  {
    name: 'TikTok Money Calculator',
    slug: 'tiktok-money',
    description: 'Calculate total earnings from all monetization streams',
    icon: '💵',
  },
  {
    name: 'RPM Calculator',
    slug: 'rpm',
    description: 'Calculate your revenue per 1,000 views (RPM)',
    icon: '📈',
  },
];

const features = [
  {
    title: 'Data-Driven',
    icon: '📊',
    description:
      'Based on real creator data, industry reports, and official TikTok documentation',
  },
  {
    title: 'Transparent',
    icon: '🔍',
    description:
      'Every calculator shows its methodology, formulas, and data sources',
  },
  {
    title: 'Always Free',
    icon: '💚',
    description:
      'No signup required, no paywalls, no credit card—just accurate calculations',
  },
];
