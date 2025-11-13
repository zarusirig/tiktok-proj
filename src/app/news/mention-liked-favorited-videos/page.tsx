import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Adds Mention Features for Liked and Favorited Videos | TikTok News',
  description: 'Users can now mention "Liked" and "Favorited" videos in their content, expanding cross-referencing capabilities on the platform.',
  keywords: ['tiktok mentions', 'liked videos', 'favorited videos', 'tiktok features', 'content referencing'],
};

export default function MentionLikedFavoritedVideosPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Mention Liked & Favorited Videos</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-teal-600">
              NEW FEATURE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Content Tools
            </span>
            <span className="text-white/80 text-label-sm">Published: November 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Adds Mention Features for Liked and Favorited Videos
          </h1>
          <p className="text-heading-md text-white/90">
            New cross-referencing capabilities make it easier to share and reference saved content
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-teal-50 border-2 border-teal-200">
          <h2 className="text-heading-lg font-semibold text-teal-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-teal-800">
            TikTok's new mention feature allows users to directly reference videos from their Liked and Favorited collections within their own content. This creates new opportunities for reaction videos, recommendations, compilations, and community building through content curation.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What's New?
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Previously, creators could stitch or duet with videos they encountered, but there was no easy way to reference specific videos they had saved. The new mention feature solves this by allowing users to tag videos from their Liked and Favorited collections directly.
          </p>
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 p-6 rounded-lg">
            <h3 className="text-heading-md font-semibold text-teal-900 mb-3">
              How It Works
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-2xl">1️⃣</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Create Your Video</p>
                  <p className="text-body-sm text-neutral-700">Start creating content as usual in the TikTok editor</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-2xl">2️⃣</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Add Video Mention</p>
                  <p className="text-body-sm text-neutral-700">Tap the mention button and select "Liked Videos" or "Favorited Videos"</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-2xl">3️⃣</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Choose Specific Video</p>
                  <p className="text-body-sm text-neutral-700">Browse your saved collection and select the video to mention</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-2xl">4️⃣</span>
                <div>
                  <p className="text-body-md text-neutral-900 font-semibold">Viewers Can Click Through</p>
                  <p className="text-body-sm text-neutral-700">The mention appears as a clickable link that takes viewers directly to the referenced video</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Creative Use Cases
          </h2>
          <div className="space-y-4">
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                📺 Video Recommendations & Reviews
              </h3>
              <p className="text-body-sm text-purple-800">
                Create "Top 10" or recommendation videos where viewers can instantly access each mentioned video. Perfect for "Best TikToks of the Week" compilations or niche content curation.
              </p>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                🎓 Tutorial References
              </h3>
              <p className="text-body-sm text-blue-800">
                Reference previous tutorials or related content you've saved. Example: "Building on the technique from [mentioned video], here's an advanced version..."
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
                💭 Reaction & Commentary Series
              </h3>
              <p className="text-body-sm text-green-800">
                Create reaction series where you discuss multiple videos you've saved, with viewers able to watch the originals directly from your mentions.
              </p>
            </div>
            <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">
                🏆 Creator Spotlights
              </h3>
              <p className="text-body-sm text-amber-800">
                Highlight favorite creators by mentioning their best work from your Liked collection, driving traffic to fellow creators you appreciate.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Benefits for Creators
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">Enhanced Storytelling</h3>
              <p className="text-body-sm text-blue-800">
                Build richer narratives by referencing specific videos as evidence or examples
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">Community Building</h3>
              <p className="text-body-sm text-green-800">
                Drive traffic to creators you admire, fostering collaboration and mutual support
              </p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">Curation Content Type</h3>
              <p className="text-body-sm text-purple-800">
                Develop a new content vertical based on curating and recommending videos
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">Easier Referencing</h3>
              <p className="text-body-sm text-amber-800">
                No more "I'll link in comments"—direct mentions provide instant access
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-blue-50">
          <h2 className="text-heading-lg font-semibold text-blue-900 mb-4">
            How to Use This Feature
          </h2>
          <ol className="space-y-3 text-body-md text-blue-800">
            <li className="flex gap-3">
              <span className="font-bold">1.</span>
              <span>Start creating a new video in the TikTok app</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">2.</span>
              <span>In the editing screen, look for the @ mention icon</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">3.</span>
              <span>Select either "Liked Videos" or "Favorited Videos" from the menu</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">4.</span>
              <span>Browse your collection and tap the video you want to mention</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">5.</span>
              <span>The mention will appear as a clickable link in your video</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold">6.</span>
              <span>Publish your video—mentions will be active immediately</span>
            </li>
          </ol>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Grow Your TikTok Presence
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Use new features to expand your reach and calculate your growth:
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
              href="/calculators/follower-growth"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Follower Growth Calculator</span>
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
                href="https://socialbee.com/blog/tiktok-updates/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                SocialBee: Latest TikTok Updates →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
