import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Brand Deal Contract Template for TikTok Creators (2025)',
  description: 'Free brand partnership contract template. Essential clauses, payment terms, usage rights, and legal protection for creators.',
  keywords: ['brand deal contract', 'influencer agreement template', 'sponsorship contract', 'creator legal'],
};

export default function BrandDealContractPage() {
  const essentialClauses = [
    { clause: 'Deliverables', description: 'Specific content requirements (number of videos, length, format)' },
    { clause: 'Payment Terms', description: '50% upfront, 50% on completion. Total amount and due dates.' },
    { clause: 'Usage Rights', description: 'How long brand can use your content (6-12 months recommended)' },
    { clause: 'Exclusivity', description: 'Can\'t work with competitors for X months (charge 20-40% premium)' },
    { clause: 'Revision Limits', description: 'Maximum 2-3 revision rounds' },
    { clause: 'Kill Fee', description: 'Payment if brand cancels (usually 50% of total)' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/resources">Resources</Link><span>/</span>
            <span className="text-neutral-900">Brand Deal Contract</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-red-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Brand Deal Contract Template</h1>
          <p className="text-heading-md text-white/90">Essential clauses for creator protection</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-red-50 border-red-200">
          <p className="text-body-md text-neutral-900 mb-2">
            <strong>⚠️ Legal Disclaimer:</strong> This is educational information only, not legal advice. Consult a lawyer for your specific situation.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Essential Contract Clauses</h2>
          <div className="space-y-4">
            {essentialClauses.map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{item.clause}</h3>
                <p className="text-body-sm text-neutral-700">{item.description}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-purple-50">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Red Flags</h3>
          <ul className="space-y-2">
            <li className="text-body-md text-red-700">❌ No written contract</li>
            <li className="text-body-md text-red-700">❌ Payment only after "performance metrics met"</li>
            <li className="text-body-md text-red-700">❌ Lifetime usage rights without extra pay</li>
            <li className="text-body-md text-red-700">❌ Unlimited revisions</li>
          </ul>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <Link href="/guides/how-to-get-brand-deals-complete" className="text-primary-600 hover:text-primary-700 font-semibold">
            How to Get Brand Deals Guide →
          </Link>
        </Card>
      </div>
    </div>
  );
}

