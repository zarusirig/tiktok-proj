import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Algorithm Undergoes Eight Major Shifts in 2025 | TikTok News',
  description: 'Between January and June 2025, TikTok implemented eight significant algorithmic changes, including enhanced personalization analyzing watch patterns and off-platform behavior.',
  keywords: ['tiktok algorithm', 'algorithm update', 'fyp algorithm', 'content distribution', 'tiktok changes'],
};

export default function AlgorithmEightMajorShiftsPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Algorithm Changes</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-violet-600 via-purple-500 to-fuchsia-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-violet-600">
              ALGORITHM UPDATE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Platform Changes
            </span>
            <span className="text-white/80 text-label-sm">Published: June 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Algorithm Undergoes Eight Major Shifts in 2025
          </h1>
          <p className="text-heading-md text-white/90">
            Enhanced personalization, retention focus, and off-platform behavior tracking reshape content distribution
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-violet-50 border-2 border-violet-200">
          <h2 className="text-heading-lg font-semibold text-violet-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-violet-800">
            TikTok's algorithm has evolved significantly in the first half of 2025, with eight major changes affecting how content gets distributed. Understanding these shifts is crucial for maintaining and growing your reach. The focus has shifted heavily toward retention metrics, authentic engagement, and sophisticated personalization.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            The Eight Major Algorithm Changes
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                1. Enhanced Personalization Engine
              </h3>
              <p className="text-body-md text-blue-800 mb-2">
                The algorithm now analyzes deeper watch patterns, including rewatches, pause behaviors, and even when users slow down scrolling to look at content more carefully.
              </p>
              <p className="text-body-sm text-blue-700 italic">
                <strong>Creator Impact:</strong> Hook viewers in the first 3 seconds and maintain engagement throughout
              </p>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                2. Off-Platform Behavior Tracking
              </h3>
              <p className="text-body-md text-purple-800 mb-2">
                TikTok now considers user behavior on other platforms and websites to better predict content preferences.
              </p>
              <p className="text-body-sm text-purple-700 italic">
                <strong>Creator Impact:</strong> Content that aligns with broader internet trends performs better
              </p>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
                3. Completion Rate Prioritization
              </h3>
              <p className="text-body-md text-green-800 mb-2">
                Videos that users watch all the way through receive massive distribution boosts, even if shorter than trending content.
              </p>
              <p className="text-body-sm text-green-700 italic">
                <strong>Creator Impact:</strong> Shorter, tight-edited content often outperforms longer videos
              </p>
            </div>

            <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">
                4. Rewatch Weighting Increase
              </h3>
              <p className="text-body-md text-amber-800 mb-2">
                Content that users watch multiple times receives significantly more distribution than previous algorithms.
              </p>
              <p className="text-body-sm text-amber-700 italic">
                <strong>Creator Impact:</strong> Create content with replay value (satisfying, funny, or informative)
              </p>
            </div>

            <div className="bg-rose-50 p-5 rounded-lg border-l-4 border-rose-500">
              <h3 className="text-heading-sm font-semibold text-rose-900 mb-2">
                5. Engagement Recency Matters More
              </h3>
              <p className="text-body-md text-rose-800 mb-2">
                The algorithm now weighs recent engagement (last 7 days) much more heavily than historical performance.
              </p>
              <p className="text-body-sm text-rose-700 italic">
                <strong>Creator Impact:</strong> Consistent posting is more important than ever
              </p>
            </div>

            <div className="bg-cyan-50 p-5 rounded-lg border-l-4 border-cyan-500">
              <h3 className="text-heading-sm font-semibold text-cyan-900 mb-2">
                6. Niche Community Detection
              </h3>
              <p className="text-body-md text-cyan-800 mb-2">
                TikTok better identifies micro-communities and serves hyper-relevant content to niche audiences.
              </p>
              <p className="text-body-sm text-cyan-700 italic">
                <strong>Creator Impact:</strong> Specializing in a specific niche yields better results
              </p>
            </div>

            <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-500">
              <h3 className="text-heading-sm font-semibold text-indigo-900 mb-2">
                7. Authentic Engagement Emphasis
              </h3>
              <p className="text-body-md text-indigo-800 mb-2">
                The algorithm can now detect and devalue engagement manipulation, engagement pods, and artificial boosting.
              </p>
              <p className="text-body-sm text-indigo-700 italic">
                <strong>Creator Impact:</strong> Focus on genuine engagement; avoid engagement bait tactics
              </p>
            </div>

            <div className="bg-teal-50 p-5 rounded-lg border-l-4 border-teal-500">
              <h3 className="text-heading-sm font-semibold text-teal-900 mb-2">
                8. Content Freshness Window Extended
              </h3>
              <p className="text-body-md text-teal-800 mb-2">
                Videos can now go viral days or even weeks after posting if engagement momentum builds gradually.
              </p>
              <p className="text-body-sm text-teal-700 italic">
                <strong>Creator Impact:</strong> Don't delete "underperforming" videos too quickly
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How to Adapt Your Strategy
          </h2>
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div>
                <h3 className="text-heading-sm font-semibold text-violet-900 mb-2">✅ Do These Things</h3>
                <ul className="space-y-2 text-body-sm text-violet-800 list-disc list-inside ml-4">
                  <li>Hook viewers within the first 1-3 seconds</li>
                  <li>Create content that encourages rewatching</li>
                  <li>Post consistently (3-5x per week minimum)</li>
                  <li>Focus on completion rate over pure engagement</li>
                  <li>Specialize in a specific niche or topic area</li>
                  <li>Let videos have time to find their audience</li>
                </ul>
              </div>
              <div>
                <h3 className="text-heading-sm font-semibold text-rose-900 mb-2">❌ Avoid These Mistakes</h3>
                <ul className="space-y-2 text-body-sm text-rose-800 list-disc list-inside ml-4">
                  <li>Using engagement bait tactics ("comment X for Y")</li>
                  <li>Creating overly long videos without justification</li>
                  <li>Posting irregularly or taking long breaks</li>
                  <li>Trying to appeal to everyone instead of a specific audience</li>
                  <li>Deleting videos within 24-48 hours of posting</li>
                  <li>Participating in engagement pods or artificial boosting</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Optimize Your TikTok Strategy
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Understand your performance and adapt to algorithm changes:
          </p>
          <div className="grid gap-3">
            <Link
              href="/calculators/engagement-rate"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Engagement Rate Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/guides/tiktok-algorithm"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">TikTok Algorithm Guide</span>
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
                href="https://napolify.com/recent-tiktok-fyp-algorithm-changes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                Napolify: Recent TikTok FYP Algorithm Changes →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
