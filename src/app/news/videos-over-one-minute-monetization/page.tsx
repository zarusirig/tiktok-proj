import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Only Videos Longer Than One Minute Eligible for TikTok Monetization | TikTok News',
  description: 'The Creator Rewards Program exclusively focuses on videos longer than one minute, pushing creators toward longer-form content.',
  keywords: ['tiktok monetization', 'video length', 'one minute videos', 'creator rewards eligibility', 'long form content'],
};

export default function VideosOverOneMinuteMonetizationPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">1+ Minute Monetization</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-indigo-600 via-purple-500 to-pink-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-indigo-600">
              POLICY CHANGE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Content Strategy
            </span>
            <span className="text-white/80 text-label-sm">Published: 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            Only Videos Over 1 Minute Now Eligible for Monetization
          </h1>
          <p className="text-heading-md text-white/90">
            Creator Rewards Program exclusively rewards longer-form content
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-indigo-50 border-2 border-indigo-200">
          <h2 className="text-heading-lg font-semibold text-indigo-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-indigo-800">
            TikTok has fundamentally shifted its monetization strategy by only paying for videos longer than 60 seconds. Short-form content under 1 minute no longer generates Creator Rewards earnings. This pushes creators to adapt their content strategy toward mid-form videos (1-10 minutes), competing directly with YouTube.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            The 60-Second Threshold
          </h2>
          <div className="bg-gradient-to-r from-red-50 to-rose-50 p-6 rounded-lg mb-4 border-l-4 border-red-500">
            <h3 className="text-heading-md font-semibold text-red-900 mb-3">
              ❌ What DOESN'T Qualify
            </h3>
            <ul className="space-y-2 text-body-sm text-red-800 list-disc list-inside ml-4">
              <li>Videos 59 seconds or shorter</li>
              <li>15-second trending sounds/dances</li>
              <li>Quick reaction videos</li>
              <li>Short comedy skits under 1 minute</li>
              <li>Traditional "TikTok-style" short clips</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-6 rounded-lg border-l-4 border-green-500">
            <h3 className="text-heading-md font-semibold text-green-900 mb-3">
              ✅ What DOES Qualify
            </h3>
            <ul className="space-y-2 text-body-sm text-green-800 list-disc list-inside ml-4">
              <li>Videos exactly 1:00 or longer (60+ seconds)</li>
              <li>Tutorials and how-to guides (typically 1-5 minutes)</li>
              <li>Storytelling and narrative content</li>
              <li>Educational explainers</li>
              <li>Extended product reviews and unboxings</li>
              <li>Multi-part series episodes</li>
            </ul>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Why TikTok Made This Change
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">🎯 Compete with YouTube</h3>
              <p className="text-body-sm text-blue-800">
                TikTok wants to capture the lucrative mid-form content market dominated by YouTube. By incentivizing 1-10 minute videos, TikTok aims to keep users on the platform longer.
              </p>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">⏱️ Increase Watch Time</h3>
              <p className="text-body-sm text-purple-800">
                Longer videos = more ad inventory and higher user engagement metrics. This makes TikTok more valuable to advertisers.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">📊 Reward Quality Over Quantity</h3>
              <p className="text-body-sm text-green-800">
                The old system incentivized posting volume. The new system rewards creators who can hold attention for extended periods.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How to Adapt Your Content Strategy
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-5 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">
                Strategy 1: Extend Existing Content
              </h3>
              <p className="text-body-md text-amber-800 mb-2">
                Take your most popular short-form concepts and expand them:
              </p>
              <ul className="space-y-1 text-body-sm text-amber-800 list-disc list-inside ml-4">
                <li>Turn a 30-second recipe into a 2-minute detailed tutorial</li>
                <li>Expand quick tips into step-by-step guides</li>
                <li>Add behind-the-scenes, process, or explanation segments</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                Strategy 2: Storytelling & Narrative
              </h3>
              <p className="text-body-md text-blue-800 mb-2">
                Use longer formats for story-based content:
              </p>
              <ul className="space-y-1 text-body-sm text-blue-800 list-disc list-inside ml-4">
                <li>Day-in-the-life vlogs with narrative arcs</li>
                <li>Before-and-after transformation stories</li>
                <li>Challenge or experiment documentation</li>
              </ul>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                Strategy 3: Educational Deep Dives
              </h3>
              <p className="text-body-md text-purple-800 mb-2">
                Provide value through comprehensive education:
              </p>
              <ul className="space-y-1 text-body-sm text-purple-800 list-disc list-inside ml-4">
                <li>Industry insights and analysis</li>
                <li>Detailed product comparisons</li>
                <li>Skill-building tutorials with multiple steps</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="bg-amber-50">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
            Balancing Short-Form and Long-Form Content
          </h2>
          <p className="text-body-md text-amber-800 mb-4">
            You don't have to abandon short-form content entirely:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Short-Form (Under 1 min)</h3>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Purpose:</strong> Viral reach, discovery, follower growth</p>
              <p className="text-body-sm text-neutral-700"><strong>Monetization:</strong> Indirect (drive followers to longer content)</p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">Long-Form (1+ min)</h3>
              <p className="text-body-sm text-neutral-700 mb-2"><strong>Purpose:</strong> Direct monetization, deeper engagement</p>
              <p className="text-body-sm text-neutral-700"><strong>Monetization:</strong> Creator Rewards earnings</p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your Earnings with Longer Videos
          </h2>
          <div className="grid gap-3">
            <Link
              href="/calculators/creator-rewards"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Creator Rewards Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/guides/how-to-make-money-on-tiktok"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Complete Monetization Guide</span>
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
                href="https://napolify.com/latest-tiktok-monetization-policy-changes/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                Napolify: TikTok Monetization Requirements →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
