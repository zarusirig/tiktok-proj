import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'All TikTok Calculators - 28 Free Tools for Creators',
  description: 'Complete suite of 28 free TikTok calculators: earnings, growth, engagement, ROI, taxes, and more. Data-driven tools to optimize your creator business.',
};

export default function CalculatorsPage() {
  const calculators = [
    // Original 8 Calculators
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
    // Growth & Analytics (5 new)
    {
      name: 'Follower Growth Calculator',
      slug: 'follower-growth',
      description: 'Project your future follower count based on current growth rate and trends.',
      icon: '📈',
      category: 'Growth',
      popular: true,
    },
    {
      name: 'Video Performance Predictor',
      slug: 'video-performance',
      description: 'Predict video performance and get a comprehensive performance score based on key metrics.',
      icon: '🎯',
      category: 'Analytics',
    },
    {
      name: 'Watch Time Calculator',
      slug: 'watch-time',
      description: 'Calculate average watch time, retention rate, and total watch hours for your content.',
      icon: '⏱️',
      category: 'Analytics',
    },
    {
      name: 'Completion Rate Calculator',
      slug: 'completion-rate',
      description: 'Measure what percentage of your videos viewers watch to completion.',
      icon: '✅',
      category: 'Analytics',
    },
    {
      name: 'Viral Potential Calculator',
      slug: 'viral-potential',
      description: 'Score your content\'s viral potential based on engagement, shares, saves, and completion rate.',
      icon: '🚀',
      category: 'Analytics',
      popular: true,
    },
    // Monetization & ROI (5 new)
    {
      name: 'Sponsorship ROI Calculator',
      slug: 'sponsorship-roi',
      description: 'Calculate the return on investment for brand sponsorship deals and partnerships.',
      icon: '💼',
      category: 'ROI',
    },
    {
      name: 'Content Value Calculator',
      slug: 'content-value',
      description: 'Estimate the total monetary value of your content library for licensing and deals.',
      icon: '💎',
      category: 'Earnings',
    },
    {
      name: 'Break-Even Calculator',
      slug: 'break-even',
      description: 'Calculate how many sales you need to break even on paid promotions and ad spend.',
      icon: '⚖️',
      category: 'Business',
    },
    {
      name: 'Creator Tax Calculator',
      slug: 'creator-tax',
      description: 'Estimate your tax obligations including federal, state, and self-employment taxes.',
      icon: '🧾',
      category: 'Business',
      popular: true,
    },
    {
      name: 'Multi-Platform Earnings',
      slug: 'multi-platform-earnings',
      description: 'Compare earning potential across TikTok, YouTube, and Instagram to optimize your strategy.',
      icon: '📱',
      category: 'Earnings',
    },
    // Engagement Metrics (5 new)
    {
      name: 'Share-to-View Ratio',
      slug: 'share-ratio',
      description: 'Measure your content\'s viral potential through share rate analysis.',
      icon: '🔄',
      category: 'Engagement',
    },
    {
      name: 'Save Rate Calculator',
      slug: 'save-rate',
      description: 'Calculate your save rate to understand content value and algorithm favorability.',
      icon: '💾',
      category: 'Engagement',
    },
    {
      name: 'Profile Visit Rate',
      slug: 'profile-visit-rate',
      description: 'Track how effectively your content drives profile visits and new followers.',
      icon: '👤',
      category: 'Engagement',
    },
    {
      name: 'Hashtag Performance',
      slug: 'hashtag-performance',
      description: 'Analyze hashtag effectiveness by comparing performance with and without specific tags.',
      icon: '#️⃣',
      category: 'Analytics',
    },
    {
      name: 'Best Posting Time',
      slug: 'posting-time',
      description: 'Find your optimal posting times based on audience region and content type.',
      icon: '🕐',
      category: 'Analytics',
    },
    // Business Planning (5 new)
    {
      name: 'Production Cost Calculator',
      slug: 'production-cost',
      description: 'Calculate your true cost per video including equipment, time, and overhead.',
      icon: '🎬',
      category: 'Business',
    },
    {
      name: 'Niche Profitability',
      slug: 'niche-profitability',
      description: 'Compare earning potential across different content niches to optimize your strategy.',
      icon: '🎭',
      category: 'Business',
    },
    {
      name: 'Content Calendar ROI',
      slug: 'content-calendar-roi',
      description: 'Calculate the return on investment for strategic content planning.',
      icon: '📅',
      category: 'ROI',
    },
    {
      name: 'Follower Conversion',
      slug: 'follower-conversion',
      description: 'Track e-commerce conversion rates from followers to customers.',
      icon: '🛒',
      category: 'Business',
    },
    {
      name: 'Ad Revenue Calculator',
      slug: 'ad-revenue',
      description: 'Estimate potential ad revenue from TikTok\'s monetization programs.',
      icon: '💸',
      category: 'Earnings',
    },
  ];

  const categories = ['All', 'Earnings', 'Analytics', 'Growth', 'Engagement', 'Business', 'ROI', 'LIVE', 'Shop', 'Conversion'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Creator Calculators
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Complete suite of 28 free, data-driven calculators for TikTok creators. Estimate earnings, track growth, analyze engagement, calculate ROI, and optimize your creator business.
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
