import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok LIVE Earnings: How Much Can You Really Make? (2025)',
  description: 'Complete earnings breakdown for TikTok LIVE creators. Realistic income by follower tier, gift values, and monetization strategies.',
  keywords: ['tiktok live earnings', 'live stream income', 'tiktok gifts money', 'how much do live streamers make'],
};

export default function TikTokLiveEarningsPage() {
  const earningsTiers = [
    { followers: '1K-5K', hourly: '$5-$20', monthly: '$200-$800', notes: 'Casual streaming, building audience' },
    { followers: '5K-10K', hourly: '$20-$50', monthly: '$800-$2,000', notes: 'Consistent viewers, growing gifts' },
    { followers: '10K-50K', hourly: '$50-$150', monthly: '$2,000-$6,000', notes: 'Dedicated fan base emerging' },
    { followers: '50K-100K', hourly: '$150-$400', monthly: '$6,000-$16,000', notes: 'Multiple gift battles, loyal supporters' },
    { followers: '100K+', hourly: '$400-$1,000+', monthly: '$16,000-$40,000+', notes: 'Top-tier streamers' },
  ];

  const faqs = [
    {
      question: 'How much do TikTok LIVE streamers really make?',
      answer: 'Earnings vary by follower count. Creators with 1K-5K followers earn $5-$20/hour. Mid-tier (10K-50K) average $50-$150/hour. Top streamers (100K+) can earn $400-$1,000+/hour.'
    },
    {
      question: 'How do gift payouts work?',
      answer: 'You earn 50% of gift values (TikTok keeps 50%). Gifts convert to Diamonds, then cash. Minimum withdrawal: $50. Payouts process in 1-2 weeks.'
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">LIVE Earnings</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok LIVE Earnings Guide</h1>
          <p className="text-heading-md text-white/90">Complete breakdown: What you can earn from streaming</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Earnings by Follower Tier</h2>
          <div className="space-y-4">
            {earningsTiers.map((tier, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-neutral-900">{tier.followers} followers</h3>
                  <p className="text-body-sm text-neutral-600">{tier.notes}</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-green-600">{tier.hourly}/hr</p>
                  <p className="text-body-sm text-neutral-600">{tier.monthly}/mo</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Frequently Asked Questions</h2>
        <FAQSection pageName="LIVE Earnings" faqs={faqs} />

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Calculate Your Earnings</h3>
          <Link href="/calculators/live-gifts" className="inline-block px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white font-semibold rounded-lg">
            LIVE Gifts Calculator →
          </Link>
        </Card>
      </div>
    </div>
  );
}

