import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Retention Metrics Become Priority for TikTok Content Distribution | TikTok News',
  description: 'Completion rates, replays, and granular watch time at 3s, 15s, and 60s checkpoints now determine video distribution on TikTok.',
  keywords: ['tiktok retention', 'watch time', 'completion rate', 'algorithm metrics', 'content performance'],
};

export default function RetentionMetricsPriorityPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Retention Metrics Priority</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-orange-600 via-red-500 to-pink-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-orange-600">
              ALGORITHM CHANGE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Creator Strategy
            </span>
            <span className="text-white/80 text-label-sm">Published: 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            Retention Metrics Become Priority for Content Distribution
          </h1>
          <p className="text-heading-md text-white/90">
            Watch time checkpoints at 3s, 15s, and 60s now critical for FYP algorithm
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-orange-50 border-2 border-orange-200">
          <h2 className="text-heading-lg font-semibold text-orange-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-orange-800">
            TikTok's algorithm now prioritizes retention metrics above almost all other factors. Videos that keep viewers watching past critical checkpoints (3 seconds, 15 seconds, 60 seconds) receive exponentially more distribution. This shift means creating compelling hooks and maintaining engagement throughout is more important than ever.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            The New Retention Checkpoints
          </h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok's algorithm analyzes viewer retention at specific timestamps to determine video quality and distribution potential:
          </p>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-500">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-heading-md font-semibold text-red-900">3-Second Checkpoint</h3>
                <span className="px-3 py-1 bg-red-500 text-white rounded-full text-label-sm font-semibold">CRITICAL</span>
              </div>
              <p className="text-body-md text-red-800 mb-3">
                <strong>What It Measures:</strong> Did the viewer stop scrolling and actually watch your video?
              </p>
              <p className="text-body-sm text-red-700 mb-3">
                Videos that retain less than 50% of viewers past 3 seconds receive minimal distribution. Those retaining 70%+ get pushed to wider audiences.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-label-sm text-red-900 font-semibold mb-2">How to Optimize:</p>
                <ul className="space-y-1 text-body-sm text-red-800 list-disc list-inside">
                  <li>Start with movement, action, or surprising visuals</li>
                  <li>Use pattern interrupts in the first frame</li>
                  <li>Text hooks that create curiosity</li>
                  <li>Avoid slow intros or lengthy setups</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-amber-50 to-yellow-50 p-6 rounded-lg border-l-4 border-amber-500">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-heading-md font-semibold text-amber-900">15-Second Checkpoint</h3>
                <span className="px-3 py-1 bg-amber-500 text-white rounded-full text-label-sm font-semibold">HIGH PRIORITY</span>
              </div>
              <p className="text-body-md text-amber-800 mb-3">
                <strong>What It Measures:</strong> Is your content engaging enough to hold attention beyond the hook?
              </p>
              <p className="text-body-sm text-amber-700 mb-3">
                The 15-second mark is where most viewers decide whether to keep watching or scroll. Videos with 60%+ retention here go viral.
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-label-sm text-amber-900 font-semibold mb-2">How to Optimize:</p>
                <ul className="space-y-1 text-body-sm text-amber-800 list-disc list-inside">
                  <li>Deliver on your hook's promise quickly</li>
                  <li>Use mid-video pattern interrupts</li>
                  <li>Maintain pacing with quick cuts</li>
                  <li>Tease what's coming next</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-heading-md font-semibold text-green-900">60-Second Checkpoint</h3>
                <span className="px-3 py-1 bg-green-500 text-white rounded-full text-label-sm font-semibold">VIRAL SIGNAL</span>
              </div>
              <p className="text-body-md text-green-800 mb-3">
                <strong>What It Measures:</strong> Is this premium content worthy of massive distribution?
              </p>
              <p className="text-body-sm text-green-700 mb-3">
                Videos retaining 40%+ of viewers at 60 seconds receive exponential boosts and often go viral. This is the "viral threshold."
              </p>
              <div className="bg-white p-4 rounded-lg">
                <p className="text-label-sm text-green-900 font-semibold mb-2">How to Optimize:</p>
                <ul className="space-y-1 text-body-sm text-green-800 list-disc list-inside">
                  <li>Build to a satisfying payoff or reveal</li>
                  <li>Use storytelling arcs with tension</li>
                  <li>Create loops that encourage rewatching</li>
                  <li>End with value that justifies the watch time</li>
                </ul>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Completion Rate vs. Watch Time
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-3">📊 Completion Rate</h3>
              <p className="text-body-md text-blue-800 mb-2">
                Percentage of viewers who watch your entire video
              </p>
              <p className="text-body-sm text-blue-700">
                <strong>Best for:</strong> Shorter videos (under 15s). A 12-second video with 80% completion outperforms a 45-second video with 40% completion.
              </p>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-3">⏱️ Total Watch Time</h3>
              <p className="text-body-md text-purple-800 mb-2">
                Total seconds viewers spend watching
              </p>
              <p className="text-body-sm text-purple-700">
                <strong>Best for:</strong> Longer videos (30s+). A 60-second video watched for 35 seconds provides more signal than a 10-second video watched fully.
              </p>
            </div>
          </div>
          <div className="mt-4 bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-lg">
            <p className="text-body-md text-indigo-900 font-semibold mb-2">
              The Sweet Spot Strategy
            </p>
            <p className="text-body-sm text-indigo-800">
              Create videos between 15-30 seconds that maintain 60%+ retention throughout. This balances completion rate with meaningful watch time, satisfying both algorithmic preferences.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Practical Retention Optimization Tactics
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
              <span className="text-green-600 text-2xl">✓</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Pattern Interrupts Every 3-5 Seconds</p>
                <p className="text-body-sm text-neutral-700">Change camera angles, add text overlays, or introduce new elements regularly</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
              <span className="text-blue-600 text-2xl">✓</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Open Loops</p>
                <p className="text-body-sm text-neutral-700">"Wait for it..." or "The best part is at the end" keeps viewers watching</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-purple-50 p-4 rounded-lg">
              <span className="text-purple-600 text-2xl">✓</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Fast Pacing</p>
                <p className="text-body-sm text-neutral-700">Cut dead air, speed up slow sections, maintain energy throughout</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-amber-50 p-4 rounded-lg">
              <span className="text-amber-600 text-2xl">✓</span>
              <div>
                <p className="text-body-md text-neutral-900 font-semibold mb-1">Value-Packed Content</p>
                <p className="text-body-sm text-neutral-700">Every second should provide entertainment, education, or inspiration</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Analyze Your Retention Metrics
          </h2>
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
                Napolify: TikTok Algorithm Retention Focus →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
