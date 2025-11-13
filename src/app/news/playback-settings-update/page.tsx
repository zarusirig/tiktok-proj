import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Introduces New Playback Settings: Disable HDR & Object Tags | TikTok News',
  description: 'TikTok added new playback options including "Disable HDR videos" and "Display object tags," giving users more control over their viewing experience.',
  keywords: ['tiktok settings', 'hdr videos', 'object tags', 'playback settings', 'tiktok features'],
};

export default function PlaybackSettingsUpdatePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Playback Settings Update</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-indigo-600 via-blue-500 to-cyan-500 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-indigo-600">
              PLATFORM UPDATE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              User Experience
            </span>
            <span className="text-white/80 text-label-sm">Published: November 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Introduces New Playback Settings
          </h1>
          <p className="text-heading-md text-white/90">
            Disable HDR videos and display object tags for enhanced viewing control
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-indigo-50 border-2 border-indigo-200">
          <h2 className="text-heading-lg font-semibold text-indigo-900 mb-3">
            Key Takeaway
          </h2>
          <p className="text-body-md text-indigo-800">
            TikTok's new playback settings give users greater control over their viewing experience. The "Disable HDR videos" option helps users on older devices or those who prefer standard video quality, while "Display object tags" provides additional context about video content through AI-powered object recognition.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What's New in Playback Settings?
          </h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok has added two significant options to the Playback section of settings, addressing user feedback about video quality and content discovery.
          </p>

          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg">
              <h3 className="text-heading-md font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <span>📺</span> Disable HDR Videos
              </h3>
              <p className="text-body-md text-blue-800 mb-3">
                This setting allows users to turn off High Dynamic Range (HDR) video playback, which can be beneficial for several reasons:
              </p>
              <ul className="space-y-2 text-body-sm text-blue-800 list-disc list-inside ml-4">
                <li><strong>Device Compatibility:</strong> Older phones may struggle with HDR processing</li>
                <li><strong>Battery Conservation:</strong> HDR playback can drain battery faster</li>
                <li><strong>Consistent Viewing:</strong> Some users prefer standard dynamic range for consistent colors</li>
                <li><strong>Data Usage:</strong> HDR videos may use slightly more data</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-heading-md font-semibold text-purple-900 mb-3 flex items-center gap-2">
                <span>🏷️</span> Display Object Tags
              </h3>
              <p className="text-body-md text-purple-800 mb-3">
                When enabled, TikTok's AI will identify and display tags for objects, people, and elements within videos:
              </p>
              <ul className="space-y-2 text-body-sm text-purple-800 list-disc list-inside ml-4">
                <li><strong>Enhanced Discovery:</strong> Understand what's in a video at a glance</li>
                <li><strong>Shopping Integration:</strong> Identify products shown in videos</li>
                <li><strong>Accessibility:</strong> Provides additional context for all users</li>
                <li><strong>Content Filtering:</strong> Better control over content you see</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How These Settings Affect Creators
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                For HDR Content Creators
              </h3>
              <p className="text-body-md text-blue-800 mb-2">
                If you create content in HDR format, be aware that some viewers may disable HDR playback:
              </p>
              <ul className="space-y-1 text-body-sm text-blue-800 list-disc list-inside ml-4">
                <li>Ensure your content looks good in both HDR and SDR modes</li>
                <li>Don't rely solely on HDR effects for important visual information</li>
                <li>Test your videos with HDR disabled to see how they appear</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                Object Tags & Discovery
              </h3>
              <p className="text-body-md text-purple-800 mb-2">
                Object tags can help your content get discovered:
              </p>
              <ul className="space-y-1 text-body-sm text-purple-800 list-disc list-inside ml-4">
                <li>Products featured in videos become more discoverable</li>
                <li>Viewers using object tags can find your content through visual search</li>
                <li>TikTok Shop items may automatically link when tagged</li>
                <li>Tags provide additional metadata for the algorithm</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How to Access These Settings
          </h2>
          <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-6 rounded-lg">
            <ol className="space-y-4 text-body-md text-neutral-700">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">1</span>
                <div>
                  <p className="font-semibold text-neutral-900">Open TikTok Settings</p>
                  <p className="text-body-sm text-neutral-600">Tap your profile icon, then the menu button (three lines) in the top right</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">2</span>
                <div>
                  <p className="font-semibold text-neutral-900">Navigate to Settings and Privacy</p>
                  <p className="text-body-sm text-neutral-600">Select "Settings and privacy" from the menu</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">3</span>
                <div>
                  <p className="font-semibold text-neutral-900">Find Playback Settings</p>
                  <p className="text-body-sm text-neutral-600">Scroll to "Content & Activity" section and tap "Playback"</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">4</span>
                <div>
                  <p className="font-semibold text-neutral-900">Toggle Your Preferences</p>
                  <p className="text-body-sm text-neutral-600">Enable or disable "Disable HDR videos" and "Display object tags" as desired</p>
                </div>
              </li>
            </ol>
          </div>
        </Card>

        <Card className="bg-green-50">
          <h2 className="text-heading-lg font-semibold text-green-900 mb-4">
            Recommended Settings for Different Use Cases
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">💰 For Shoppers</h3>
              <p className="text-body-sm text-green-800">
                <strong>Enable object tags</strong> to easily identify products in videos and discover shopping opportunities
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">🔋 For Battery Life</h3>
              <p className="text-body-sm text-green-800">
                <strong>Disable HDR videos</strong> to reduce battery consumption during extended viewing sessions
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">📱 For Older Devices</h3>
              <p className="text-body-sm text-green-800">
                <strong>Disable HDR videos</strong> to improve performance and reduce processing load
              </p>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">🎨 For Creators</h3>
              <p className="text-body-sm text-green-800">
                <strong>Enable object tags</strong> to understand how TikTok's AI interprets your content
              </p>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Optimize Your TikTok Experience
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Learn more about maximizing your TikTok presence:
          </p>
          <div className="grid gap-3">
            <Link
              href="/guides/tiktok-algorithm"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Understanding TikTok Algorithm</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/calculators/engagement-rate"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Engagement Rate Calculator</span>
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
                SocialBee: TikTok Updates November 2025 →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
