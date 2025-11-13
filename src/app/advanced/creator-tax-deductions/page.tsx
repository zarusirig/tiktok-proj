import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Creator Tax Deductions Guide: What You Can Write Off (2025)',
  description: 'Complete tax deduction guide for TikTok creators. Equipment, software, home office, and business expense writeoffs.',
  keywords: ['creator tax deductions', 'influencer taxes', 'tiktok business expenses', 'content creator writeoffs'],
};

export default function CreatorTaxDeductionsPage() {
  const deductions = [
    { category: 'Equipment', examples: 'Camera, ring light, tripod, microphone, backdrop', savings: '$500-$3,000' },
    { category: 'Software', examples: 'CapCut Pro, Adobe Suite, editing apps', savings: '$200-$800/year' },
    { category: 'Home Office', examples: 'Portion of rent, utilities, internet', savings: '$1,000-$5,000/year' },
    { category: 'Props & Supplies', examples: 'Makeup, clothing for videos, backgrounds', savings: '$300-$2,000' },
    { category: 'Education', examples: 'Courses, coaching, conferences', savings: '$500-$3,000' },
    { category: 'Phone & Internet', examples: 'Business use percentage', savings: '$500-$1,500/year' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/advanced">Advanced</Link><span>/</span>
            <span className="text-neutral-900">Tax Deductions</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-green-600 via-teal-500 to-blue-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Creator Tax Deductions Guide</h1>
          <p className="text-heading-md text-white/90">What you can write off as a TikTok creator</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-yellow-50 border-yellow-200">
          <p className="text-body-md text-neutral-900">
            <strong>⚠️ Disclaimer:</strong> This is educational information only, not tax advice. Consult a CPA or tax professional for your specific situation.
          </p>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Common Deductible Expenses</h2>
          <div className="space-y-4">
            {deductions.map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-neutral-900">{item.category}</h3>
                  <span className="text-body-sm font-semibold text-green-600">{item.savings}</span>
                </div>
                <p className="text-body-sm text-neutral-700">{item.examples}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-green-50">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Potential Total Savings</h3>
          <p className="text-heading-lg font-bold text-green-600 mb-2">$3,000-$15,000/year</p>
          <p className="text-body-sm text-neutral-600">
            At 25% tax rate, these deductions could save you thousands in taxes annually
          </p>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Important Rules</h3>
          <ul className="space-y-2">
            <li className="text-body-md text-neutral-700">✓ Keep all receipts and documentation</li>
            <li className="text-body-md text-neutral-700">✓ Expenses must be "ordinary and necessary" for your business</li>
            <li className="text-body-md text-neutral-700">✓ You must show profit intent (not just a hobby)</li>
            <li className="text-body-md text-neutral-700">✓ Track business vs personal use percentages</li>
          </ul>
        </Card>
      </div>
    </div>
  );
}

