import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Multi-Platform Creator Strategy 2025: TikTok, YouTube, Instagram Guide',
  description: 'Complete guide to multi-platform content strategy. How to repurpose content, maximize earnings across TikTok, YouTube, Instagram, and more.',
  keywords: ['multi-platform strategy', 'content repurposing', 'tiktok youtube instagram', 'creator monetization strategy'],
};

export default function MultiPlatformStrategyPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Multi-Platform Strategy</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Multi-Platform Creator Strategy 2025</h1>
          <p className="text-heading-md text-white/90 mb-6">Maximize your reach and earnings across all platforms</p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Multi-Platform?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-blue-50 rounded-lg">
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Diversify Income</h3>
              <p className="text-body-sm text-neutral-700">Don\'t rely on one platform\'s algorithm or monetization</p>
            </div>
            <div className="p-5 bg-purple-50 rounded-lg">
              <div className="text-4xl mb-2">📈</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Maximize Reach</h3>
              <p className="text-body-sm text-neutral-700">Each platform has unique audiences you can tap</p>
            </div>
            <div className="p-5 bg-green-50 rounded-lg">
              <div className="text-4xl mb-2">🛡️</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Risk Mitigation</h3>
              <p className="text-body-sm text-neutral-700">Platform changes won\'t destroy your business</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Platform Priorities by Goal</h2>
          <div className="space-y-4">
            {[
              { goal: 'Fastest Growth', stack: '1. TikTok, 2. Instagram Reels, 3. YouTube Shorts', reason: 'Short-form video platforms favor new creators' },
              { goal: 'Highest Ad Revenue', stack: '1. YouTube, 2. TikTok Creativity Program, 3. Instagram', reason: 'YouTube RPM is 25-100x higher than TikTok' },
              { goal: 'Best Brand Deals', stack: '1. TikTok, 2. Instagram, 3. YouTube', reason: 'TikTok has hottest creator economy for sponsorships' },
              { goal: 'Long-term Stability', stack: '1. YouTube, 2. Email List, 3. TikTok', reason: 'YouTube content has longest shelf life, email = owned audience' },
              { goal: 'Product Sales', stack: '1. TikTok Shop, 2. Instagram Shop, 3. YouTube links', reason: 'Native commerce integration drives highest conversion' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{item.goal}</h3>
                <p className="text-body-md text-tiktok-pink font-semibold mb-2">{item.stack}</p>
                <p className="text-body-sm text-neutral-700">{item.reason}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Content Repurposing Framework</h2>
          <div className="space-y-6">
            <div className="p-5 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Hub Content (YouTube)</h3>
              <p className="text-body-sm text-neutral-700 mb-3">Create 8-15 minute videos on YouTube as your "hub" content</p>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>✅ Comprehensive, SEO-optimized</li>
                <li>✅ Monetize with ads (highest RPM)</li>
                <li>✅ Evergreen traffic for years</li>
              </ul>
            </div>

            <div className="text-center text-2xl text-neutral-400">↓ Repurpose ↓</div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-purple-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">TikTok</h3>
                <p className="text-body-sm text-neutral-700">Extract 3-5 short clips (15-60s) highlighting key points</p>
              </div>
              <div className="p-4 bg-pink-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">Instagram Reels</h3>
                <p className="text-body-sm text-neutral-700">Same clips as TikTok with IG-optimized captions</p>
              </div>
              <div className="p-4 bg-red-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">YouTube Shorts</h3>
                <p className="text-body-sm text-neutral-700">Teasers driving to long-form video</p>
              </div>
            </div>

            <div className="p-4 bg-green-50 rounded-lg text-center">
              <p className="text-body-sm text-neutral-800">
                <strong>Result:</strong> 1 piece of content → 5-8 platform variations → Maximum reach & ROI
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
