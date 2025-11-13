import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Content Strategy 2025: Complete Creator Playbook',
  description: 'Proven TikTok content strategy for 2025. Posting frequency, content pillars, viral hooks, engagement tactics, and growth frameworks.',
  keywords: ['tiktok content strategy', 'content planning', 'viral content strategy', 'tiktok growth strategy 2025'],
};

export default function ContentStrategy2025Page() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Content Strategy 2025</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok Content Strategy 2025</h1>
          <p className="text-heading-md text-white/90 mb-6">The complete playbook for TikTok growth and monetization</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">The 3-Pillar Content Framework</h2>
          <div className="space-y-4">
            {[
              { pillar: 'Educational (60%)', purpose: 'Build Authority', examples: ['How-to tutorials', 'Tips and tricks', 'Industry insights', 'Problem-solving'], outcome: 'Establishes you as expert, drives followers' },
              { pillar: 'Entertaining (30%)', purpose: 'Drive Engagement', examples: ['Trends and challenges', 'Behind-the-scenes', 'Day in the life', 'Relatable humor'], outcome: 'Boosts engagement rate, algorithm favor' },
              { pillar: 'Promotional (10%)', purpose: 'Monetize', examples: ['Product reviews', 'Brand partnerships', 'Affiliate links', 'Your products/services'], outcome: 'Direct revenue generation' },
            ].map((item, idx) => (
              <div key={idx} className="p-5 bg-neutral-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-semibold text-neutral-900">{item.pillar}</h3>
                  <span className="text-sm text-neutral-600 italic">{item.purpose}</span>
                </div>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div>
                    <p className="text-body-sm font-semibold text-neutral-700 mb-2">Examples:</p>
                    <ul className="space-y-1 text-body-sm text-neutral-700">
                      {item.examples.map((ex, idx) => (
                        <li key={idx}>• {ex}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <p className="text-body-sm font-semibold text-neutral-700 mb-2">Outcome:</p>
                    <p className="text-body-sm text-neutral-700">{item.outcome}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Posting Frequency Guide</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Growth Stage</th>
                  <th className="text-left py-3 px-4">Posting Frequency</th>
                  <th className="text-left py-3 px-4">Strategy</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { stage: '0-1K followers', frequency: '2-3x daily', strategy: 'Test content types, find what resonates, prioritize quantity' },
                  { stage: '1K-10K followers', frequency: '1-2x daily', strategy: 'Double down on what works, maintain consistency' },
                  { stage: '10K-100K followers', frequency: '1x daily', strategy: 'Quality over quantity, strong hooks, engagement focus' },
                  { stage: '100K+ followers', frequency: '5-7x weekly', strategy: 'Strategic posting, leverage analytics, brand partnerships' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.stage}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-semibold">{row.frequency}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.strategy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Viral Hook Formulas</h2>
          <div className="space-y-3">
            {[
              { formula: 'Pattern Interrupt', example: '"Stop scrolling if you want to..."', why: 'Breaks autopilot scrolling behavior' },
              { formula: 'Bold Promise', example: '"This changed my life in 30 days"', why: 'Creates curiosity about transformation' },
              { formula: 'Controversy/Hot Take', example: '"Unpopular opinion: Most [X] advice is wrong"', why: 'Drives comments and engagement' },
              { formula: 'Problem Agitation', example: '"Are you making this $10K mistake?"', why: 'Identifies pain point, promises solution' },
              { formula: 'Secret Reveal', example: '"The thing nobody tells you about..."', why: 'Insider knowledge appeal' },
              { formula: 'Number/List', example: '"3 things I wish I knew before..."', why: 'Clear value promise, easy to digest' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <span className="text-2xl font-bold text-tiktok-pink">{idx + 1}</span>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.formula}</h3>
                    <p className="text-body-sm text-neutral-700 italic mb-1">Example: "{item.example}"</p>
                    <p className="text-body-xs text-neutral-600">Why it works: {item.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Guides</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/tiktok-algorithm-explained" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Algorithm Guide</h4>
              <p className="text-body-sm text-neutral-700">How FYP works</p>
            </Link>
            <Link href="/guides/how-to-go-viral" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Go Viral</h4>
              <p className="text-body-sm text-neutral-700">Proven viral tactics</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
