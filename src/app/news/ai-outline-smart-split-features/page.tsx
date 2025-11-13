import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Launches AI Outline and Smart Split Features for Creators | TikTok News',
  description: 'In November 2025, TikTok introduced two AI-powered tools: AI Outline to jumpstart video creation and Smart Split for enhanced editing capabilities.',
  keywords: ['tiktok ai', 'ai outline', 'smart split', 'tiktok features', 'creator tools', 'tiktok news'],
};

export default function AIOutlineSmartSplitPage() {
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
            <span className="text-neutral-900">AI Outline & Smart Split</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-rose-500 py-12">
        <div className="container-custom max-w-4xl">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white text-purple-600">
              NEW FEATURES
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-label-sm font-semibold bg-white/20 text-white">
              AI Tools
            </span>
            <span className="text-white/80 text-label-sm">
              Published: November 2025
            </span>
          </div>
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Launches AI Outline and Smart Split Features for Creators
          </h1>
          <p className="text-heading-md text-white/90">
            Two new AI-powered tools designed to streamline video creation and enhance editing capabilities
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">
        {/* Key Takeaway Card */}
        <Card className="bg-purple-50 border-2 border-purple-200">
          <h2 className="text-heading-lg font-semibold text-purple-900 mb-3">
            Key Takeaway for Creators
          </h2>
          <p className="text-body-md text-purple-800 mb-3">
            TikTok's new AI Outline and Smart Split features represent a significant leap in creator tools, using artificial intelligence to help jumpstart content ideation and streamline the editing process. These tools can save creators hours of planning and editing time while maintaining creative control.
          </p>
          <p className="text-body-md text-purple-800">
            <strong>What this means:</strong> Creators can produce high-quality content more efficiently, potentially increasing posting frequency and content variety without sacrificing quality.
          </p>
        </Card>

        {/* AI Outline Feature Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            AI Outline: Your Creative Jumpstart Tool
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            AI Outline is TikTok's newest feature designed to help creators overcome the blank canvas problem. By analyzing trends, your previous content, and audience preferences, the tool generates structured video outlines to inspire and guide your content creation process.
          </p>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg mb-4">
            <h3 className="text-heading-md font-semibold text-purple-900 mb-3">
              How AI Outline Works
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">1</span>
                <div>
                  <p className="text-body-md text-purple-900 font-semibold">Input Your Topic or Idea</p>
                  <p className="text-body-sm text-purple-800">Enter a general topic, keyword, or content theme you want to explore</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">2</span>
                <div>
                  <p className="text-body-md text-purple-900 font-semibold">AI Analyzes Trends & Performance</p>
                  <p className="text-body-sm text-purple-800">The AI examines trending content, your past successes, and audience engagement patterns</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">3</span>
                <div>
                  <p className="text-body-md text-purple-900 font-semibold">Receive Structured Outline</p>
                  <p className="text-body-sm text-purple-800">Get a detailed outline with hooks, key points, pacing suggestions, and calls-to-action</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-8 h-8 bg-purple-500 text-white rounded-full flex items-center justify-center font-semibold">4</span>
                <div>
                  <p className="text-body-md text-purple-900 font-semibold">Customize & Create</p>
                  <p className="text-body-sm text-purple-800">Adjust the outline to match your style and use it as a roadmap for your video</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
            <h3 className="text-heading-sm font-semibold text-blue-900 mb-2">
              AI Outline Best Use Cases
            </h3>
            <ul className="space-y-2 text-body-md text-blue-800 list-disc list-inside">
              <li>Overcoming creator's block when you're not sure what to film</li>
              <li>Quickly generating content ideas for trending topics</li>
              <li>Planning series or multi-part content with consistent structure</li>
              <li>Exploring new content categories with proven frameworks</li>
              <li>Saving time on pre-production planning and scripting</li>
            </ul>
          </div>
        </Card>

        {/* Smart Split Feature Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Smart Split: AI-Enhanced Editing Power
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            Smart Split brings artificial intelligence to TikTok's editing suite, automatically identifying optimal cut points, scene transitions, and content segments within your raw footage. This feature dramatically reduces the time spent on manual editing while maintaining professional quality.
          </p>

          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg mb-4">
            <h3 className="text-heading-md font-semibold text-teal-900 mb-3">
              What Smart Split Can Do
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-heading-sm font-semibold text-teal-900 mb-2">🎬 Auto Scene Detection</h4>
                <p className="text-body-sm text-teal-800">
                  Identifies natural scene changes and suggests split points based on visual and audio cues
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-heading-sm font-semibold text-teal-900 mb-2">✂️ Smart Trimming</h4>
                <p className="text-body-sm text-teal-800">
                  Removes dead space, awkward pauses, and filler content while maintaining natural flow
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-heading-sm font-semibold text-teal-900 mb-2">🎵 Audio-Synced Cuts</h4>
                <p className="text-body-sm text-teal-800">
                  Aligns cuts with music beats and audio peaks for professional rhythm
                </p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="text-heading-sm font-semibold text-teal-900 mb-2">📝 Content Segmentation</h4>
                <p className="text-body-sm text-teal-800">
                  Breaks long footage into logical segments perfect for multi-part content or highlights
                </p>
              </div>
            </div>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4">
            <h3 className="text-heading-sm font-semibold text-green-900 mb-2">
              Smart Split Best Use Cases
            </h3>
            <ul className="space-y-2 text-body-md text-green-800 list-disc list-inside">
              <li>Editing long-form content into multiple TikToks</li>
              <li>Creating highlight reels from extended footage</li>
              <li>Producing content faster without compromising on quality</li>
              <li>Maintaining consistent pacing across your videos</li>
              <li>Reducing post-production time for high-volume creators</li>
            </ul>
          </div>
        </Card>

        {/* Impact on Creator Workflow Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            How These Features Transform Creator Workflows
          </h2>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                ⏱️ Time Savings
              </h3>
              <p className="text-body-md text-neutral-700">
                Creators report saving 30-50% of their content creation time by using AI Outline for planning and Smart Split for editing. This efficiency gain allows for higher posting frequency or more time for creative experimentation.
              </p>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                📊 Consistency & Quality
              </h3>
              <p className="text-body-md text-neutral-700">
                AI-powered tools help maintain consistent content structure and pacing across videos, which can improve overall channel performance and audience retention rates.
              </p>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg">
              <h3 className="text-heading-sm font-semibold text-neutral-900 mb-2">
                🎨 Creative Freedom
              </h3>
              <p className="text-body-md text-neutral-700">
                By automating tedious planning and editing tasks, creators can focus more energy on the creative aspects: performance, storytelling, and connecting with their audience.
              </p>
            </div>
          </div>
        </Card>

        {/* How to Access Section */}
        <Card className="bg-gradient-to-br from-amber-50 to-orange-50">
          <h2 className="text-heading-lg font-semibold text-amber-900 mb-4">
            How to Access These Features
          </h2>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">📱</span>
              <div>
                <p className="text-body-md text-amber-900 font-semibold mb-1">Update Your TikTok App</p>
                <p className="text-body-sm text-amber-800">Ensure you have the latest version of TikTok from your app store (November 2025 release or newer)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✏️</span>
              <div>
                <p className="text-body-md text-amber-900 font-semibold mb-1">AI Outline Access</p>
                <p className="text-body-sm text-amber-800">Open the TikTok creator studio, tap the "+" button, then look for "AI Outline" in the creation tools menu</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">✂️</span>
              <div>
                <p className="text-body-md text-amber-900 font-semibold mb-1">Smart Split Access</p>
                <p className="text-body-sm text-amber-800">In the video editor, select your clip and tap "Edit" → "Smart Split" to activate AI-powered editing suggestions</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-amber-600 text-xl">🌍</span>
              <div>
                <p className="text-body-md text-amber-900 font-semibold mb-1">Availability</p>
                <p className="text-body-sm text-amber-800">Both features are rolling out globally throughout November-December 2025. If you don't see them yet, check back in a few days.</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Tips for Using AI Tools Section */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Pro Tips for Maximizing AI Tools
          </h2>
          <div className="space-y-4">
            <div className="bg-purple-50 border-l-4 border-purple-500 p-4">
              <h3 className="text-heading-sm font-semibold text-purple-900 mb-2">
                💡 AI Outline Tips
              </h3>
              <ul className="space-y-1 text-body-sm text-purple-800 list-disc list-inside">
                <li>Start with specific topics rather than broad themes for better outlines</li>
                <li>Review multiple AI-generated outlines and combine the best elements</li>
                <li>Use the outline as inspiration, not a rigid script—add your personality</li>
                <li>Save successful outlines as templates for future content</li>
              </ul>
            </div>
            <div className="bg-teal-50 border-l-4 border-teal-500 p-4">
              <h3 className="text-heading-sm font-semibold text-teal-900 mb-2">
                🎬 Smart Split Tips
              </h3>
              <ul className="space-y-1 text-body-sm text-teal-800 list-disc list-inside">
                <li>Review all AI suggestions before applying—you maintain final creative control</li>
                <li>Use Smart Split for rough cuts, then fine-tune manually for perfection</li>
                <li>Combine with TikTok's other editing tools for maximum effect</li>
                <li>Experiment with different split settings to find your preferred style</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Related Tools Section */}
        <Card className="bg-gradient-to-br from-primary-50 to-secondary-50">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
            Create More, Earn More
          </h2>
          <p className="text-body-md text-neutral-700 mb-4">
            With AI tools helping you create content more efficiently, calculate your increased earning potential:
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
                href="https://socialbee.com/blog/tiktok-updates/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                SocialBee: Latest TikTok Updates and Features →
              </a>
            </li>
            <li>
              <a
                href="https://www.heyorca.com/blog/tiktok-social-news"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 hover:underline text-body-md"
              >
                HeyOrca: TikTok Social News and Creator Tools →
              </a>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  );
}
