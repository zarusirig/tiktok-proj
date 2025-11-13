import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Creator Guides',
  description: 'Comprehensive guides on TikTok monetization, Creator Fund, brand deals, LIVE streaming, and growing your audience.',
};

export default function GuidesPage() {
  const guides = [
    {
      title: 'How to Make Money on TikTok',
      slug: 'how-to-make-money-on-tiktok',
      description: 'Complete guide to TikTok monetization: Creator Fund, brand deals, LIVE gifts, Shop, and more. Learn all income streams.',
      readTime: '30 min',
      category: 'Monetization',
      featured: true,
      status: 'Coming Soon',
    },
    {
      title: 'TikTok Creator Fund Complete Guide',
      slug: 'tiktok-creator-fund',
      description: 'Everything about the Creator Fund: requirements, RPM rates, payment schedule, optimization tips, and realistic earnings.',
      readTime: '25 min',
      category: 'Creator Fund',
      featured: true,
      status: 'Coming Soon',
    },
    {
      title: 'TikTok Brand Deals Guide',
      slug: 'brand-deals',
      description: 'How to get brand deals, negotiate rates, create media kits, and maximize sponsorship income.',
      readTime: '28 min',
      category: 'Brand Deals',
      featured: true,
      status: 'Coming Soon',
    },
    {
      title: 'TikTok LIVE Monetization Guide',
      slug: 'tiktok-live',
      description: 'Master LIVE streaming: gift strategy, viewer engagement, subscription badges, and maximizing gifting.',
      readTime: '20 min',
      category: 'LIVE',
      featured: true,
      status: 'Coming Soon',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-12">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Creator Guides
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            In-depth guides on TikTok monetization, growth strategies, and creator success. Written by creators, for creators.
          </p>
        </div>

        {/* Featured Guides */}
        <div className="mb-16">
          <h2 className="text-display-sm font-bold text-neutral-900 mb-6">
            Essential Reading
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {guides
              .filter((guide) => guide.featured)
              .map((guide) => (
                <div
                  key={guide.slug}
                  className="card p-6 bg-gradient-to-br from-white to-secondary-50 border-2 border-secondary-200 relative"
                >
                  {guide.status && (
                    <div className="absolute top-4 right-4">
                      <span className="badge bg-warning-DEFAULT text-white">
                        {guide.status}
                      </span>
                    </div>
                  )}
                  <div className="mb-4">
                    <span className="badge badge-secondary">{guide.category}</span>
                    <span className="ml-2 text-label-sm text-neutral-500">
                      {guide.readTime} read
                    </span>
                  </div>
                  <h3 className="text-heading-lg font-semibold text-neutral-900 mb-3">
                    {guide.title}
                  </h3>
                  <p className="text-body-md text-neutral-600 mb-4">
                    {guide.description}
                  </p>
                  {guide.status ? (
                    <div className="text-body-sm text-neutral-500 italic">
                      This guide is currently being written. Check back soon!
                    </div>
                  ) : (
                    <Link
                      href={`/guides/${guide.slug}`}
                      className="btn btn-primary btn-md"
                    >
                      Read Guide →
                    </Link>
                  )}
                </div>
              ))}
          </div>
        </div>

        {/* Coming Soon Notice */}
        <div className="max-w-3xl mx-auto">
          <Card className="bg-neutral-100 text-center p-8">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              📚 More Guides Coming Soon
            </h2>
            <p className="text-body-md text-neutral-700 mb-6">
              We're actively writing comprehensive guides on:
            </p>
            <ul className="text-body-md text-neutral-700 space-y-2 mb-6">
              <li>• TikTok Growth Strategies</li>
              <li>• Content Strategy & Niche Selection</li>
              <li>• TikTok Shop for Creators</li>
              <li>• Algorithm Understanding</li>
              <li>• Analytics & Performance Tracking</li>
            </ul>
            <p className="text-body-sm text-neutral-600">
              In the meantime, explore our calculators to estimate your earning potential.
            </p>
            <Link href="/calculators" className="btn btn-primary btn-md mt-4">
              Explore Calculators
            </Link>
          </Card>
        </div>
      </div>
    </div>
  );
}
