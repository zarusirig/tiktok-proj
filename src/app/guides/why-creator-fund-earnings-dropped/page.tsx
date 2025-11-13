import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/FAQSection';

export const metadata: Metadata = {
  title: 'Why Did My TikTok Creator Fund Earnings Drop? Complete Troubleshooting',
  description: '12 common reasons for Creator Fund earnings drops with diagnostic checklist and fixes. Troubleshoot low payments and recover your income.',
  keywords: ['creator fund earnings drop', 'why did earnings decrease', 'tiktok payment issues', 'creator fund troubleshooting'],
};

export default function WhyEarningsDroppedPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/guides">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Why Earnings Dropped</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-red-500 via-red-600 to-orange-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            Why Did My Creator Fund Earnings Drop?
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete troubleshooting guide with 12 common causes and solutions
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Updated: November 2025</span>
            <span>⏱️ 13 min read</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Understanding Creator Fund Payments</h2>
          <div className="p-4 bg-blue-50 rounded-lg mb-4">
            <p className="font-semibold text-neutral-900 mb-2">The RPM Formula</p>
            <code className="block p-3 bg-white rounded text-sm">
              Earnings = (Total Views ÷ 1,000) × RPM
            </code>
            <p className="text-body-sm text-neutral-700 mt-2">
              Your earnings depend on: (1) Total video views, and (2) RPM rate (value per 1,000 views)
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">12 Common Reasons for Earnings Drops</h2>
          <div className="space-y-4">
            {reasons.map((reason, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-2">{idx + 1}. {reason.title}</h3>
                <p className="text-body-sm text-neutral-700 mb-2"><strong>Symptom:</strong> {reason.symptom}</p>
                <p className="text-body-sm text-neutral-700 mb-2"><strong>Cause:</strong> {reason.cause}</p>
                <p className="text-body-sm text-green-800"><strong>Fix:</strong> {reason.fix}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-tiktok-pink/10">
          <div className="text-center">
            <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
              Calculate Your Actual RPM
            </h3>
            <Link href="/calculators/rpm" className="btn btn-primary">
              Use RPM Calculator →
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

const reasons = [
  {
    title: 'Decreased Video Views',
    symptom: 'Recent videos getting fewer views than before',
    cause: 'Algorithm changes, content quality drop, or audience fatigue',
    fix: 'Review top-performing content and replicate. Test different posting times. Refresh content strategy with new hooks and formats.',
  },
  {
    title: 'Lower Engagement Rate',
    symptom: 'Similar views but earnings down',
    cause: 'Engagement rate decreased (fewer likes, comments, shares)',
    fix: 'Add clear CTAs. Create stitch/duet-worthy content. Respond to comments within first hour. Use cliffhangers to increase watch time.',
  },
  {
    title: 'Audience Location Shift',
    symptom: 'Views steady, engagement similar, earnings dropped',
    cause: 'More views from lower-paying regions',
    fix: 'Post at times when target audience (US/UK) is active. Use language/references specific to higher-RPM markets.',
  },
  {
    title: 'Content Niche Changed',
    symptom: 'Earnings dropped after pivoting niche',
    cause: 'Different niches have different RPM rates. Finance/business pays more than entertainment/comedy.',
    fix: 'If pivot was intentional, accept the RPM difference. Focus on growing views to compensate. Consider hybrid approach.',
  },
  {
    title: 'Increased Reposted Content',
    symptom: 'More duets/stitches, earnings dropped despite views',
    cause: 'TikTok pays less for non-original content',
    fix: 'Aim for 70%+ original content. When using duets/stitches, add substantial commentary.',
  },
];
