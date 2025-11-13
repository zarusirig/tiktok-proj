import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Ban Enforcement Delayed Until December 16, 2025 | TikTok News',
  description: 'The White House has extended TikTok\'s enforcement delay for the fourth time, moving the deadline to December 16, 2025 as the administration pursues a qualified divestiture solution.',
  keywords: ['tiktok ban', 'tiktok delay', 'tiktok enforcement', 'tiktok news', 'divestiture'],
};

export default function TikTokBanDelayedPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span>/</span>
            <Link href="/news" className="hover:text-primary-600">News</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Ban Delayed</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-teal-500 to-cyan-500 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-red-500 text-white">
              BREAKING NEWS
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              Regulatory Update
            </span>
            <span className="text-white/80 text-label-sm">
              Published: September 24, 2025
            </span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Ban Enforcement Delayed Until December 16, 2025
          </h1>
          <p className="text-heading-md text-white/90">
            White House extends enforcement deadline for fourth time as administration pursues qualified divestiture solution
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Key Takeaway Card */}
        <Card className="bg-blue-50 border-2 border-blue-200">
          <h2 className="text-heading-lg font-semibold text-blue-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-blue-800 mb-3">
            TikTok creators can continue operating on the platform through at least December 16, 2025. This fourth extension provides additional time for ongoing negotiations between the U.S. government and ByteDance regarding a potential divestiture solution.
          </p>
          <p className="text-body-md text-blue-800">
            <strong>What this means:</strong> Creators should continue building their audiences and diversifying their content strategies, but also maintain presence on alternative platforms as a contingency plan.
          </p>
        </Card>

        {/* What Happened Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What Happened?
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            On September 24, 2025, the White House announced its fourth extension of the TikTok enforcement deadline, moving it from September 17, 2025 to December 16, 2025. The extension comes as the Trump administration continues to pursue what officials describe as a "qualified divestiture" solution.
          </p>
          <p className="text-body-md text-neutral-700 mb-4">
            The original nationwide ban technically went into effect on January 19, 2025, but enforcement has been repeatedly delayed through executive orders. Each extension has provided additional negotiating time while allowing TikTok to continue operating normally in the United States.
          </p>
          <div className="bg-neutral-100 border-l-4 border-blue-500 p-4 my-4">
            <p className="text-body-sm text-neutral-700 italic">
              "The administration remains committed to protecting national security while pursuing a solution that allows TikTok to continue serving American users and creators," according to the White House briefing room statement.
            </p>
          </div>
        </Card>

        {/* Timeline Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Timeline of Extensions
          </h2>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-label-sm font-semibold text-neutral-600">
                January 19, 2025
              </div>
              <div className="flex-1">
                <p className="text-body-md text-neutral-700">
                  Original ban takes effect (de jure nationwide ban)
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-label-sm font-semibold text-neutral-600">
                Extension 1
              </div>
              <div className="flex-1">
                <p className="text-body-md text-neutral-700">
                  First enforcement delay announced
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-label-sm font-semibold text-neutral-600">
                Extension 2 & 3
              </div>
              <div className="flex-1">
                <p className="text-body-md text-neutral-700">
                  Subsequent delays as negotiations continue
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-32 text-label-sm font-semibold text-neutral-600">
                September 24, 2025
              </div>
              <div className="flex-1">
                <p className="text-body-md text-neutral-700">
                  <strong>Fourth extension announced</strong> - deadline moved to December 16, 2025
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Impact Analysis Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How This Affects TikTok Creators
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                Short-Term Impact (Through December 2025)
              </h3>
              <ul className="space-y-2 text-body-md text-neutral-700 list-disc list-inside">
                <li>Creators can continue monetizing through all current channels</li>
                <li>Brand partnerships remain viable through year-end</li>
                <li>TikTok Shop operations continue normally</li>
                <li>Creator Fund and Creator Rewards Program payouts unaffected</li>
              </ul>
            </div>
            <div>
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                Long-Term Considerations
              </h3>
              <ul className="space-y-2 text-body-md text-neutral-700 list-disc list-inside">
                <li>Uncertainty remains beyond December 16, 2025</li>
                <li>Multiple extensions suggest ongoing negotiation complexity</li>
                <li>Creators should maintain multi-platform presence</li>
                <li>Alternative monetization strategies remain important</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* What Creators Should Do Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            What Should Creators Do?
          </h2>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4">
              <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
                ✓ Continue Creating
              </h3>
              <p className="text-body-md text-green-800">
                Maintain your regular posting schedule and continue building your TikTok presence. The extension provides at least three more months of certainty.
              </p>
            </div>
            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
              <h3 className="text-heading-sm font-semibold text-yellow-900 mb-2">
                ⚠ Diversify Your Platform Presence
              </h3>
              <p className="text-body-md text-yellow-800">
                Use this time to strengthen your presence on Instagram Reels, YouTube Shorts, and other platforms. Cross-post content and build audiences elsewhere.
              </p>
            </div>
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                📧 Build Your Own Audience
              </h3>
              <p className="text-body-md text-purple-800">
                Collect email addresses, grow your Discord server, or build a community you own. Don't rely solely on platform-controlled audiences.
              </p>
            </div>
          </div>
        </Card>

        {/* Related Tools Section */}
        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Calculate Your TikTok Earnings
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            While TikTok remains operational, continue optimizing your earnings strategy with our calculators:
          </p>
          <div className="grid gap-3">
            <Link
              href="/calculators/money-calculator"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">TikTok Money Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/calculators/creator-rewards"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Creator Rewards Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
            <Link
              href="/calculators/brand-deal-rate"
              className="flex items-center justify-between p-4 bg-white rounded-lg border-2 border-transparent hover:border-primary-500 transition-colors"
            >
              <span className="font-semibold text-neutral-900">Brand Deal Rate Calculator</span>
              <span className="text-primary-600">→</span>
            </Link>
          </div>
        </Card>

        {/* Official Sources Section */}
        <Card className="bg-gray-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Official Sources & Further Reading
          </h2>
          <ul className="space-y-3">
            <li>
              <a
                href="https://www.whitehouse.gov/briefing-room/presidential-actions/2025/09/24/saving-tiktok-while-protecting-national-security/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                White House Presidential Actions: Saving TikTok While Protecting National Security →
              </a>
            </li>
            <li>
              <a
                href="https://en.wikipedia.org/wiki/Restrictions_on_TikTok_in_the_United_States"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                Wikipedia: Restrictions on TikTok in the United States →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
