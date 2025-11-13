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

      {/* Hero Section */}
      <section className="container-custom section-padding">
        <div className="max-w-5xl mx-auto text-center">
          {/* Trust Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary-50 text-primary-700 px-4 py-2 rounded-full text-label-md font-medium mb-6">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>Trusted by 50,000+ TikTok Creators</span>
          </div>

          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-6 text-balance">
            Free TikTok Calculators &{' '}
            <span className="text-transparent bg-clip-text gradient-accent">
              Earning Guides
            </span>
          </h1>
          <p className="text-body-lg md:text-heading-sm text-neutral-600 mb-8 max-w-3xl mx-auto">
            Make smarter decisions with data-driven tools. Calculate your potential earnings from
            Creator Fund, brand deals, LIVE gifts, and Shop commissions. All calculators show
            transparent methodology and real industry data.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/calculators/tiktok-creator-fund"
              className="btn btn-primary btn-lg shadow-lg hover:shadow-xl"
            >
              Calculate Your Earnings
            </Link>
            <Link
              href="/guides/how-to-make-money-on-tiktok"
              className="btn btn-outline btn-lg"
            >
              Learn How to Monetize
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12 text-body-sm text-neutral-500">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              <span>100% Free</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <span>No Sign-Up Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              <span>Real Data & Research</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              <span>Regularly Updated</span>
            </div>
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
      <section className="container-custom section-padding">
        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-neutral-200">
          <div className="text-center mb-12">
            <h2 className="text-display-sm font-bold text-neutral-900 mb-4">
              Why Creators Trust Our Tools
            </h2>
            <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
              Built by creators, for creators. Every tool is backed by real data and transparent methodology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature) => (
              <div key={feature.title} className="text-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary text-white flex items-center justify-center text-3xl mx-auto mb-4 shadow-lg">
                  {feature.icon}
                </div>
                <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-body-md text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Guides Section */}
      <section className="container-custom section-padding">
        <div className="text-center mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-4">
            Step-by-Step Monetization Guides
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Learn proven strategies to grow your TikTok income from experienced creators
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {popularGuides.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="card card-hover p-6 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-primary text-white flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {guide.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-body-sm text-neutral-600">
                    {guide.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/guides"
            className="btn btn-outline btn-lg"
          >
            View All Guides →
          </Link>
        </div>
      </section>

      {/* Data & Insights Section */}
      <section className="container-custom section-padding bg-gradient-to-br from-primary-50 to-white rounded-3xl">
        <div className="text-center mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-4">
            Industry Data & Benchmarks
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            See how you stack up against other creators with our comprehensive data analysis
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {dataInsights.map((insight) => (
            <Link
              key={insight.href}
              href={insight.href}
              className="card card-hover p-6 bg-white group"
            >
              <div className="text-3xl mb-4">{insight.icon}</div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                {insight.title}
              </h3>
              <p className="text-body-sm text-neutral-600 mb-4">
                {insight.description}
              </p>
              <span className="text-label-md text-primary-600 font-medium group-hover:underline">
                View Data →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Niche-Specific Guides */}
      <section className="container-custom section-padding">
        <div className="text-center mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-4">
            Earnings by Niche
          </h2>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Detailed earning guides tailored to your content niche
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {nicheGuides.map((niche) => (
            <Link
              key={niche.href}
              href={niche.href}
              className="card card-hover p-6 text-center group"
            >
              <div className="text-4xl mb-4">{niche.icon}</div>
              <h3 className="text-heading-md font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
                {niche.title}
              </h3>
              <p className="text-body-sm text-neutral-600">
                {niche.description}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container-custom section-padding">
        <div className="card p-8 md:p-12 text-center max-w-4xl mx-auto bg-gradient-primary text-white shadow-2xl">
          <h2 className="text-display-sm font-bold mb-4">
            Ready to Maximize Your TikTok Earnings?
          </h2>
          <p className="text-body-lg mb-8 opacity-90 max-w-2xl mx-auto">
            Join 50,000+ creators who use our free calculators and guides to make data-driven decisions
            about their TikTok monetization strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/calculators/tiktok-money"
              className="btn bg-white text-primary-600 hover:bg-neutral-100 btn-lg shadow-xl"
            >
              Calculate Total Earnings
            </Link>
            <Link
              href="/guides/how-to-make-first-1000-dollars"
              className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-primary-600"
            >
              Make Your First $1,000
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Preview Section */}
      <section className="container-custom section-padding">
        <div className="text-center mb-12">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-4">
            Common Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqPreview.map((item) => (
            <div key={item.question} className="card p-6">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                {item.question}
              </h3>
              <p className="text-body-md text-neutral-600">
                {item.answer}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/faq"
            className="btn btn-outline btn-lg"
          >
            View All FAQs →
          </Link>
        </div>
      </section>
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
      'Based on real creator data, industry reports, and official TikTok documentation. Every calculation is backed by transparent research.',
  },
  {
    title: 'Transparent Methodology',
    icon: '🔍',
    description:
      'Every calculator shows its methodology, formulas, and data sources. No black boxes—just honest math.',
  },
  {
    title: 'Always Free',
    icon: '💚',
    description:
      'No signup required, no paywalls, no credit card—just accurate calculations whenever you need them.',
  },
];

const popularGuides = [
  {
    title: 'Make Money on TikTok',
    href: '/guides/how-to-make-money-on-tiktok',
    description: 'Complete guide to all TikTok monetization methods',
    icon: '💰',
  },
  {
    title: 'Get Brand Deals',
    href: '/guides/how-to-get-brand-deals',
    description: 'How to land your first sponsored content opportunity',
    icon: '🤝',
  },
  {
    title: 'Negotiate Brand Deals',
    href: '/guides/how-to-negotiate-brand-deals',
    description: 'Get paid what you are worth with proven negotiation tactics',
    icon: '💼',
  },
  {
    title: 'Join Creator Fund',
    href: '/guides/how-to-join-creator-fund',
    description: 'Requirements and step-by-step application process',
    icon: '✅',
  },
  {
    title: 'Make First $1,000',
    href: '/guides/how-to-make-first-1000-dollars',
    description: 'Practical roadmap to your first $1,000 on TikTok',
    icon: '🎯',
  },
  {
    title: 'TikTok LIVE Earnings',
    href: '/guides/tiktok-live',
    description: 'Maximize your LIVE streaming revenue',
    icon: '🎁',
  },
];

const dataInsights = [
  {
    title: 'Brand Deal Rates',
    href: '/data/brand-deal-rates-by-followers',
    description: 'See what creators charge based on follower count',
    icon: '💵',
  },
  {
    title: 'RPM by Niche',
    href: '/data/rpm-rates-by-niche',
    description: 'Revenue per 1,000 views across different niches',
    icon: '📈',
  },
  {
    title: 'Engagement Benchmarks',
    href: '/data/engagement-rates-by-niche',
    description: 'Compare your engagement rate to industry averages',
    icon: '📊',
  },
];

const nicheGuides = [
  {
    title: 'Beauty Creators',
    href: '/guides/beauty-creators-earnings',
    description: 'Earning potential and strategies for beauty content',
    icon: '💄',
  },
  {
    title: 'Finance Creators',
    href: '/guides/finance-creators-earnings',
    description: 'Monetization guide for personal finance creators',
    icon: '💳',
  },
  {
    title: 'Fitness Creators',
    href: '/guides/fitness-creators-earnings',
    description: 'How fitness creators earn on TikTok',
    icon: '💪',
  },
];

const faqPreview = [
  {
    question: 'How accurate are your calculators?',
    answer: 'Our calculators use real creator data, industry research, and official TikTok documentation. While individual results vary, our estimates are based on the most current and comprehensive data available.',
  },
  {
    question: 'Do I need to create an account to use the calculators?',
    answer: 'No! All our tools are completely free and require no sign-up. We believe in making creator tools accessible to everyone.',
  },
  {
    question: 'How often is the data updated?',
    answer: 'We regularly update our calculators and data to reflect the latest TikTok platform changes, industry trends, and creator earnings reports. Check individual pages for last updated dates.',
  },
];
