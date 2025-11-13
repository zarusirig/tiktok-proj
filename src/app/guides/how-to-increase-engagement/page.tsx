import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'How to Increase TikTok Engagement: 12 Proven Strategies (2025)',
  description: 'Boost likes, comments, shares, and saves on TikTok. Data-backed strategies to increase engagement rate and algorithmic performance.',
  keywords: ['increase tiktok engagement', 'boost engagement rate', 'get more likes', 'tiktok algorithm'],
};

export default function IncreaseEngagementPage() {
  const strategies = [
    { title: 'Ask Questions in Captions', effect: 'Comments +40%' },
    { title: 'Use Trending Sounds', effect: 'Views +30%' },
    { title: 'Post at Peak Times', effect: 'Engagement +25%' },
    { title: 'Create "Save-Worthy" Content', effect: 'Saves +50%' },
    { title: 'Respond to All Comments', effect: 'Loyalty +35%' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Increase Engagement</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">How to Increase TikTok Engagement</h1>
          <p className="text-heading-md text-white/90">12 proven strategies to boost likes, comments, and shares</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Top 5 Strategies</h2>
          <div className="space-y-4">
            {strategies.map((strategy, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg flex items-center justify-between">
                <span className="font-semibold text-neutral-900">{strategy.title}</span>
                <span className="text-body-sm font-semibold text-green-600">{strategy.effect}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-purple-50">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Check Your Current Rate</h3>
          <Link href="/calculators/engagement-rate" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg">
            Calculate Engagement Rate →
          </Link>
        </Card>
      </div>
    </div>
  );
}

