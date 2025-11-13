import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Creator Fund vs YouTube Partner Program: 2025 Comparison',
  description: 'Complete comparison of TikTok Creator Fund vs YouTube monetization. RPM rates, requirements, earnings potential, and which platform pays more.',
  keywords: ['tiktok vs youtube earnings', 'creator fund vs youtube', 'tiktok rpm vs youtube', 'platform comparison'],
};

export default function CreatorFundVsYouTubePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/comparisons">Comparisons</Link><span>/</span>
            <span className="text-neutral-900">Creator Fund vs YouTube</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Creator Fund vs YouTube: 2025 Comparison
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Which platform pays creators more for video content?
          </p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Head-to-Head Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Factor</th>
                  <th className="text-left py-3 px-4">TikTok Creator Fund</th>
                  <th className="text-left py-3 px-4">YouTube Partner Program</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'RPM (per 1K views)', tiktok: '$0.02 - $0.04', youtube: '$1.00 - $5.00', winner: 'youtube' },
                  { factor: 'Requirements', tiktok: '10K followers, 100K views/month', youtube: '1K subs, 4K watch hours/year', winner: 'tiktok' },
                  { factor: 'Time to Qualify', tiktok: '6-12 months', youtube: '12-24 months', winner: 'tiktok' },
                  { factor: 'Content Length', tiktok: '15s-10min (short preferred)', youtube: '8min+ (longer = more ads)', winner: 'tie' },
                  { factor: 'Payout Threshold', tiktok: '$50', youtube: '$100', winner: 'tiktok' },
                  { factor: 'Payment Speed', tiktok: 'On-demand (3-14 days)', youtube: 'Monthly (21st-26th)', winner: 'tiktok' },
                  { factor: 'Geographic Availability', tiktok: '6 countries', youtube: '100+ countries', winner: 'youtube' },
                  { factor: 'Viral Potential', tiktok: 'Very High (algorithm favors new)', youtube: 'Moderate (favors established)', winner: 'tiktok' },
                  { factor: 'Long-term Earnings', tiktok: 'Front-loaded (first week)', youtube: 'Evergreen (years of earnings)', winner: 'youtube' },
                  { factor: 'Total Earning Potential', tiktok: 'Low without brand deals', youtube: 'High from ads alone', winner: 'youtube' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.factor}</td>
                    <td className={`py-3 px-4 ${row.winner === 'tiktok' ? 'bg-tiktok-pink/10 font-semibold' : ''}`}>{row.tiktok}</td>
                    <td className={`py-3 px-4 ${row.winner === 'youtube' ? 'bg-red-50 font-semibold' : ''}`}>{row.youtube}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Earnings Comparison: 1 Million Views</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-tiktok-pink/10 rounded-lg border-2 border-tiktok-pink">
              <h3 className="font-semibold text-neutral-900 mb-3">TikTok Creator Fund</h3>
              <p className="text-display-md font-bold text-tiktok-pink mb-2">$20 - $40</p>
              <p className="text-body-sm text-neutral-700">Based on $0.02-$0.04 RPM average</p>
            </div>
            <div className="p-6 bg-red-50 rounded-lg border-2 border-red-500">
              <h3 className="font-semibold text-neutral-900 mb-3">YouTube Partner Program</h3>
              <p className="text-display-md font-bold text-red-600 mb-2">$1,000 - $5,000</p>
              <p className="text-body-sm text-neutral-700">Based on $1-$5 RPM average (varies by niche)</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-sm text-neutral-800">
              <strong>Conclusion:</strong> YouTube pays 25-125x more than TikTok Creator Fund for the same number of views. However, TikTok is easier to go viral on, so total earnings can vary.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Best Strategy: Multi-Platform</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Smart creators use both platforms strategically:
          </p>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">✅ Use TikTok For:</h3>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• Building audience quickly (viral potential)</li>
                <li>• Landing brand deals (better rates than Creator Fund)</li>
                <li>• Testing content ideas (fast feedback)</li>
                <li>• Driving traffic to YouTube/other platforms</li>
              </ul>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">✅ Use YouTube For:</h3>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• Meaningful ad revenue (25x higher RPM)</li>
                <li>• Long-term evergreen earnings</li>
                <li>• Building email list / owned audience</li>
                <li>• Premium brand partnerships</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Comparisons</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/comparisons/tiktok-vs-instagram-income" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">TikTok vs Instagram</h4>
              <p className="text-body-sm text-neutral-700">Creator income comparison</p>
            </Link>
            <Link href="/guides/multi-platform-strategy" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Multi-Platform Strategy</h4>
              <p className="text-body-sm text-neutral-700">Maximize total earnings</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
