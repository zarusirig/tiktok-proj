import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Unveils New Safety Features for Parents | TikTok News',
  description: 'In July 2025, TikTok announced new safety measures giving parents more control over teens\' accounts, including greater visibility into account activity and customizable settings.',
  keywords: ['tiktok safety', 'parental controls', 'teen safety', 'family pairing', 'child safety'],
};

export default function ParentSafetyFeaturesUpdatePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">Parent Safety Features</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-600 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-blue-600">
              SAFETY UPDATE
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Parental Controls
            </span>
            <span className="text-white/80 text-label-sm">Published: July 2025</span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Unveils New Safety Features for Parents
          </h1>
          <p className="text-heading-md text-white/90">
            Enhanced parental controls give families more visibility and customization options
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-blue-50 border-2 border-blue-200">
          <h2 className="text-heading-lg font-semibold text-blue-900 mb-3">
            Key Takeaway
          </h2>
          <p className="text-body-md text-blue-800">
            TikTok's July 2025 safety update introduces comprehensive parental controls that give families greater visibility into teen account activity and customizable safety settings. These features strengthen TikTok's Family Pairing system and address concerns about teen social media use.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            New Parental Control Features
          </h2>
          <div className="space-y-4">
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
                📊 Enhanced Activity Dashboard
              </h3>
              <p className="text-body-sm text-blue-800 mb-2">
                Parents can now view comprehensive activity reports including:
              </p>
              <ul className="space-y-1 text-body-sm text-blue-800 list-disc list-inside ml-4">
                <li>Daily screen time summaries</li>
                <li>Most-watched content categories</li>
                <li>Account interactions and follows</li>
                <li>Search history overview</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                🔒 Customizable Privacy Settings
              </h3>
              <p className="text-body-sm text-purple-800 mb-2">
                Granular controls for teen account privacy:
              </p>
              <ul className="space-y-1 text-body-sm text-purple-800 list-disc list-inside ml-4">
                <li>Who can comment on videos (Everyone, Friends, No One)</li>
                <li>Who can duet/stitch content</li>
                <li>Who can view liked videos</li>
                <li>Direct message permissions</li>
              </ul>
            </div>

            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
                ⏰ Advanced Screen Time Management
              </h3>
              <p className="text-body-sm text-green-800 mb-2">
                New time management tools include:
              </p>
              <ul className="space-y-1 text-body-sm text-green-800 list-disc list-inside ml-4">
                <li>Scheduled "quiet time" when app is restricted</li>
                <li>Daily time limit reminders</li>
                <li>Bedtime mode (restricts use during set hours)</li>
                <li>Break reminders every 30-60 minutes</li>
              </ul>
            </div>

            <div className="bg-amber-50 p-5 rounded-lg border-l-4 border-amber-500">
              <h3 className="text-heading-sm font-semibold text-amber-900 mb-2">
                🛡️ Content Filtering Options
              </h3>
              <p className="text-body-sm text-amber-800 mb-2">
                Parents can now filter content shown to teens:
              </p>
              <ul className="space-y-1 text-body-sm text-amber-800 list-disc list-inside ml-4">
                <li>Restricted Mode (filters mature content)</li>
                <li>Keyword filtering (block specific topics)</li>
                <li>Age-appropriate content preferences</li>
                <li>Reporting and blocking tools</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How to Set Up Family Pairing
          </h2>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-6 rounded-lg">
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">1</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Open TikTok Settings</p>
                  <p className="text-body-sm text-neutral-700">Both parent and teen open TikTok → Me → Menu (three lines) → Settings and Privacy</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">2</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Navigate to Family Pairing</p>
                  <p className="text-body-sm text-neutral-700">Tap "Family Pairing" under the Privacy section</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">3</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Link Accounts</p>
                  <p className="text-body-sm text-neutral-700">Parent selects "Parent," teen selects "Teen," then scan QR code to link accounts</p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-indigo-500 text-white rounded-full flex items-center justify-center font-semibold text-body-sm">4</span>
                <div>
                  <p className="text-body-md font-semibold text-neutral-900 mb-1">Customize Settings</p>
                  <p className="text-body-sm text-neutral-700">Parents can now adjust all safety and privacy settings for the linked teen account</p>
                </div>
              </li>
            </ol>
          </div>
        </Card>

        <Card className="bg-green-50">
          <h2 className="text-heading-lg font-semibold text-green-900 mb-4">
            Best Practices for Families
          </h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <p className="text-body-md text-green-900 font-semibold mb-1">Start with Conversation</p>
                <p className="text-body-sm text-green-800">Discuss online safety before implementing controls</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <p className="text-body-md text-green-900 font-semibold mb-1">Review Together Weekly</p>
                <p className="text-body-sm text-green-800">Check activity dashboard together and discuss any concerns</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <p className="text-body-md text-green-900 font-semibold mb-1">Balance Safety and Privacy</p>
                <p className="text-body-sm text-green-800">Respect teen autonomy while maintaining appropriate oversight</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl">✓</span>
              <div>
                <p className="text-body-md text-green-900 font-semibold mb-1">Adjust as Teens Mature</p>
                <p className="text-body-sm text-green-800">Gradually loosen restrictions as teens demonstrate responsible use</p>
              </div>
            </li>
          </ul>
        </Card>

        <Card className="bg-gray-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Official Sources
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://abcnews.go.com/GMA/Living/video/tiktok-unveils-new-safety-features-112643584"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                ABC News: TikTok Unveils New Safety Features →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
