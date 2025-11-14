import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok Monetization Requirements: Complete 2025 Eligibility Guide',
  description: 'Complete guide to TikTok monetization requirements for Creator Fund, LIVE Gifts, TikTok Shop, and brand deals. Eligibility criteria, timelines, and how to qualify.',
  keywords: ['tiktok monetization requirements', 'tiktok eligibility', 'creator fund requirements', 'tiktok live requirements', 'tiktok shop eligibility'],
};

export default function TikTokMonetizationRequirementsPage() {
  const faqs = [
    {
      question: 'Can I monetize TikTok with less than 10,000 followers?',
      answer: 'Yes! While Creator Fund requires 10K followers, you can earn through LIVE Gifts (1K followers), TikTok Shop affiliate (0 followers in most regions), and brand deals at any follower count if you have engagement.',
    },
    {
      question: 'How long does it take to meet monetization requirements?',
      answer: 'Timeline varies by effort and content quality. Average creators reach 1K followers (LIVE eligible) in 2-4 months, and 10K followers (Creator Fund eligible) in 6-12 months with consistent posting.',
    },
    {
      question: 'Do I need to be 18 for all monetization features?',
      answer: 'Yes. All TikTok monetization features require you to be 18 years or older. This includes Creator Fund, LIVE Gifts, TikTok Shop, and Creator Marketplace.',
    },
    {
      question: 'Can I be denied monetization even if I meet requirements?',
      answer: 'Yes. TikTok reviews content quality, community guideline violations, and account authenticity. Meeting minimum requirements doesn\'t guarantee approval.',
    },
    {
      question: 'What countries are eligible for TikTok monetization?',
      answer: 'Eligibility varies by feature. Creator Fund: US, UK, Germany, France, Italy, Spain. LIVE Gifts: 40+ countries. TikTok Shop: US, UK, Southeast Asia. Check current eligibility in your TikTok Creator Tools.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Monetization Requirements</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Monetization Requirements: Complete 2025 Guide
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Everything you need to know about eligibility requirements for every TikTok monetization feature
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Updated: November 2025</span>
            <span>⏱️ 12 min read</span>
            <span>✅ All Features Covered</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">

        {/* Overview */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Monetization Overview</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok offers multiple ways to earn money, each with different eligibility requirements. Here's a comprehensive breakdown of all monetization features and what you need to qualify.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="font-semibold text-neutral-900 mb-3">📊 Quick Requirements Comparison</h3>
            <div className="grid gap-3 text-body-sm">
              <div className="flex justify-between">
                <span className="text-neutral-700">TikTok Shop (Easiest):</span>
                <span className="font-semibold text-neutral-900">0+ followers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-700">LIVE Gifts:</span>
                <span className="font-semibold text-neutral-900">1,000+ followers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-700">Creator Fund:</span>
                <span className="font-semibold text-neutral-900">10,000+ followers</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-700">Brand Deals:</span>
                <span className="font-semibold text-neutral-900">Varies (500-5,000+)</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Creator Fund Requirements */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Creator Fund Requirements</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            The Creator Fund pays creators based on video views and engagement. It's TikTok's primary passive monetization program.
          </p>
          <div className="space-y-4">
            {[
              { icon: '👤', title: 'Age', requirement: '18 years or older', notes: 'Verified through account birthdate' },
              { icon: '👥', title: 'Followers', requirement: '10,000+ followers', notes: 'Must be authentic, non-purchased followers' },
              { icon: '👁️', title: 'Video Views', requirement: '100,000 views in last 30 days', notes: 'Must be from original content, rolling window' },
              { icon: '📍', title: 'Location', requirement: 'Eligible country', notes: 'US, UK, Germany, France, Italy, Spain' },
              { icon: '✅', title: 'Content Compliance', requirement: 'Follow Community Guidelines', notes: 'No violations in past 90 days, original content only' },
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-neutral-50 rounded-lg">
                <span className="text-3xl">{item.icon}</span>
                <div className="flex-1">
                  <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-body-md text-neutral-900 mb-1">{item.requirement}</p>
                  <p className="text-body-sm text-neutral-600">{item.notes}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-tiktok-pink/10 border border-tiktok-pink/30 rounded-lg">
            <p className="text-body-sm text-neutral-800">
              💡 <strong>Pro Tip:</strong> Use our{' '}
              <Link href="/calculators/tiktok-creator-fund" className="text-tiktok-pink font-semibold hover:underline">
                Creator Fund Calculator
              </Link>{' '}
              to estimate your potential earnings.
            </p>
          </div>
        </Card>

        {/* LIVE Gifts Requirements */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok LIVE Gifts Requirements</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Go LIVE and receive virtual gifts from viewers that convert to real money. Lower barrier to entry than Creator Fund.
          </p>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">✅ Basic Requirements</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• 18 years or older</li>
                <li>• 1,000+ followers</li>
                <li>• Available in your region</li>
                <li>• Account in good standing</li>
              </ul>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">💰 Earnings Details</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• Creators receive 50% of gift value</li>
                <li>• Minimum $50 withdrawal</li>
                <li>• Pay out to PayPal or bank</li>
                <li>• 7-14 day processing time</li>
              </ul>
            </div>
          </div>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-body-sm text-neutral-800">
              <strong>Timeline to Qualify:</strong> Most creators reach 1,000 followers in 2-4 months with consistent posting (3-5 videos per week).
            </p>
          </div>
          <div className="mt-6">
            <Link href="/calculators/live-gifts" className="inline-block px-6 py-3 bg-tiktok-pink text-white font-semibold rounded-lg hover:bg-tiktok-pink/90 transition-colors">
              Calculate LIVE Earnings →
            </Link>
          </div>
        </Card>

        {/* TikTok Shop Requirements */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Shop Affiliate Requirements</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Promote products and earn commissions. Lowest barrier to entry for monetization.
          </p>
          <div className="space-y-4 mb-6">
            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
              <h3 className="font-semibold text-neutral-900 mb-3">US Region Requirements:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>✅ 18 years or older</li>
                <li>✅ 5,000+ followers</li>
                <li>✅ US-based account</li>
                <li>✅ Completed identity verification</li>
              </ul>
            </div>
            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
              <h3 className="font-semibold text-neutral-900 mb-3">UK & Southeast Asia Requirements:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>✅ 18 years or older</li>
                <li>✅ Often NO minimum follower count</li>
                <li>✅ Account in eligible region</li>
                <li>✅ Business or creator account</li>
              </ul>
            </div>
          </div>
          <div className="bg-neutral-100 rounded-lg p-4">
            <h3 className="font-semibold text-neutral-900 mb-3">📊 Commission Rates by Category:</h3>
            <div className="space-y-2 text-body-sm">
              <div className="flex justify-between">
                <span className="text-neutral-700">Beauty & Personal Care:</span>
                <span className="font-semibold text-neutral-900">8-20%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-700">Fashion & Accessories:</span>
                <span className="font-semibold text-neutral-900">10-15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-700">Home & Kitchen:</span>
                <span className="font-semibold text-neutral-900">5-12%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-700">Electronics:</span>
                <span className="font-semibold text-neutral-900">2-8%</span>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/guides/how-to-become-shop-affiliate" className="text-tiktok-pink font-semibold hover:underline">
              Learn How to Become TikTok Shop Affiliate →
            </Link>
          </div>
        </Card>

        {/* Brand Deals Requirements */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Brand Deals & Sponsorships</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Work directly with brands for sponsored content. Requirements vary significantly by brand and niche.
          </p>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-3">Minimum Requirements for Entry-Level Deals:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">Nano-Influencers (500-5K)</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• 500-5,000 followers</li>
                    <li>• 5%+ engagement rate</li>
                    <li>• Niche-specific audience</li>
                    <li>• $50-$200 per post</li>
                  </ul>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">Micro-Influencers (5K-50K)</p>
                  <ul className="space-y-1 text-body-sm text-neutral-700">
                    <li>• 5,000-50,000 followers</li>
                    <li>• 3%+ engagement rate</li>
                    <li>• Consistent content quality</li>
                    <li>• $200-$1,500 per post</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-neutral-900 mb-3">TikTok Creator Marketplace Requirements:</h3>
              <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
                <p className="text-body-md text-neutral-700 mb-3">
                  TikTok's official platform connecting creators with brands:
                </p>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li>✅ 18 years or older</li>
                  <li>✅ 100,000+ followers (recently lowered from 10K in some regions)</li>
                  <li>✅ 100,000+ likes in last 28 days</li>
                  <li>✅ Account in good standing</li>
                  <li>✅ Available in eligible country</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            <Link href="/calculators/brand-deal-rate" className="px-6 py-3 bg-neutral-900 text-white font-semibold rounded-lg hover:bg-neutral-800 transition-colors text-center">
              Calculate Your Brand Deal Rate
            </Link>
            <Link href="/guides/how-to-get-brand-deals-complete" className="px-6 py-3 border-2 border-neutral-900 text-neutral-900 font-semibold rounded-lg hover:bg-neutral-50 transition-colors text-center">
              How to Get Brand Deals
            </Link>
          </div>
        </Card>

        {/* Timeline to Monetization */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Timeline: Zero to Monetization</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Realistic timeline for reaching different monetization milestones with consistent effort:
          </p>
          <div className="space-y-4">
            {[
              { milestone: '0 Followers → TikTok Shop', time: 'Day 1', effort: 'Available immediately in most regions (UK, SEA) or at 5K followers (US)' },
              { milestone: '0 → 500 Followers (Nano Brand Deals)', time: '1-2 Months', effort: '3-5 posts per week, niche content, engagement with community' },
              { milestone: '0 → 1,000 Followers (LIVE Gifts)', time: '2-4 Months', effort: '5-7 posts per week, trend participation, consistent posting schedule' },
              { milestone: '0 → 10,000 Followers (Creator Fund)', time: '6-12 Months', effort: 'Daily posting, viral content strategy, strong engagement' },
              { milestone: '0 → 100,000 Followers (Creator Marketplace)', time: '12-24 Months', effort: 'Professional content, clear niche authority, community building' },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-tiktok-pink to-tiktok-blue text-white flex items-center justify-center font-bold text-body-sm text-center leading-tight p-2">
                  {item.time}
                </div>
                <div className="flex-1 pt-2">
                  <h3 className="font-semibold text-neutral-900 mb-1">{item.milestone}</h3>
                  <p className="text-body-sm text-neutral-700">{item.effort}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-sm text-neutral-800">
              ⚠️ <strong>Reality Check:</strong> These are average timelines. Results vary based on niche, content quality, posting consistency, and luck with viral videos. Some creators reach monetization faster, many take longer.
            </p>
          </div>
        </Card>

        {/* FAQ */}
        <FAQSection pageName="TikTok Monetization Requirements" faqs={faqs} />

        {/* Related Guides */}
        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-join-creator-fund-complete" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">How to Join Creator Fund</h4>
              <p className="text-body-sm text-neutral-700">Step-by-step application guide</p>
            </Link>
            <Link href="/guides/how-to-get-1000-followers-live" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">How to Get 1,000 Followers</h4>
              <p className="text-body-sm text-neutral-700">Qualify for LIVE Gifts faster</p>
            </Link>
            <Link href="/guides/how-to-become-shop-affiliate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Become TikTok Shop Affiliate</h4>
              <p className="text-body-sm text-neutral-700">Start earning with 0 followers</p>
            </Link>
            <Link href="/guides/how-to-get-brand-deals-complete" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Get Your First Brand Deal</h4>
              <p className="text-body-sm text-neutral-700">Land sponsorships at any size</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
