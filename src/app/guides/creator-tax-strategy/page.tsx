import type { Metadata} from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Creator Tax Strategy 2025: Deductions, Write-Offs, and Tax Planning',
  description: 'Complete tax guide for TikTok creators. Deductible expenses, quarterly estimated taxes, business structures, and how to minimize your tax bill legally.',
  keywords: ['creator tax guide', 'tiktok taxes', 'influencer tax deductions', 'self employment tax', 'creator tax strategy'],
};

export default function CreatorTaxStrategyPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Creator Tax Strategy</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok Creator Tax Strategy 2025</h1>
          <p className="text-heading-md text-white/90 mb-6">Deductions, write-offs, and legal tax minimization for content creators</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Understanding Creator Income Taxes</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            TikTok creator income is <strong>self-employment income</strong>, not W-2 wages. This means:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">You Pay More Tax:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• Self-employment tax: 15.3% (Social Security + Medicare)</li>
                <li>• Income tax: 10-37% (based on income bracket)</li>
                <li>• Total: 25-52% effective tax rate</li>
                <li>• Quarterly estimated tax payments required</li>
              </ul>
            </div>
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">But You Get Deductions:</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Business expenses reduce taxable income</li>
                <li>• Home office deduction</li>
                <li>• Equipment depreciation</li>
                <li>• QBI deduction (20% of profit)</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Top Creator Tax Deductions</h2>
          <div className="space-y-3">
            {[
              { category: 'Equipment & Gear', deductions: ['Phone, camera, microphone, lighting', 'Computer, laptop, tablet', 'Ring lights, tripods, stabilizers', 'Editing software subscriptions'], percentage: '100%' },
              { category: 'Home Office', deductions: ['Dedicated workspace (by square footage)', 'Internet and utilities (business %)', 'Rent/mortgage (home office %)'], percentage: '100% of business use' },
              { category: 'Content Production', deductions: ['Props and backgrounds', 'Wardrobe for videos', 'Makeup and styling', 'Travel for content creation'], percentage: '100%' },
              { category: 'Professional Services', deductions: ['Accountant/bookkeeper fees', 'Business coach or courses', 'Legal fees (contracts, LLC setup)', 'Social media management tools'], percentage: '100%' },
              { category: 'Marketing & Growth', deductions: ['Paid ads (TikTok, Instagram, etc.)', 'Email marketing tools', 'Website hosting and domain', 'Analytics and research tools'], percentage: '100%' },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-neutral-900">{item.category}</h3>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">{item.percentage} Deductible</span>
                </div>
                <ul className="grid md:grid-cols-2 gap-x-4 gap-y-1 text-body-sm text-neutral-700">
                  {item.deductions.map((ded, dedIdx) => (
                    <li key={dedIdx}>• {ded}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Quarterly Estimated Tax Guide</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            If you expect to owe $1,000+ in taxes, you must make quarterly payments:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Quarter</th>
                  <th className="text-left py-3 px-4">Income Period</th>
                  <th className="text-left py-3 px-4">Payment Due Date</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { q: 'Q1 2025', period: 'Jan 1 - Mar 31', due: 'April 15, 2025' },
                  { q: 'Q2 2025', period: 'Apr 1 - May 31', due: 'June 15, 2025' },
                  { q: 'Q3 2025', period: 'Jun 1 - Aug 31', due: 'September 15, 2025' },
                  { q: 'Q4 2025', period: 'Sep 1 - Dec 31', due: 'January 15, 2026' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.q}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.period}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-semibold">{row.due}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-sm text-neutral-800">
              <strong>How Much to Pay:</strong> Set aside 25-30% of creator income for taxes. Pay quarterly based on earnings that quarter. Use IRS Form 1040-ES to calculate.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Business Structure Options</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Structure</th>
                  <th className="text-left py-3 px-4">Best For</th>
                  <th className="text-left py-3 px-4">Tax Benefits</th>
                  <th className="text-left py-3 px-4">Downsides</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { structure: 'Sole Proprietor', bestFor: 'Just starting, under $50K/year', benefits: 'Simple, no setup costs', downsides: 'No liability protection' },
                  { structure: 'LLC', bestFor: 'Earning $50K+, want protection', benefits: 'Liability protection, credibility', downsides: 'State fees, more paperwork' },
                  { structure: 'S-Corp', bestFor: 'Earning $100K+, ready for complexity', benefits: 'Save on self-employment tax', downsides: 'Requires payroll, accountant' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.structure}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.bestFor}</td>
                    <td className="py-3 px-4 text-green-700">{row.benefits}</td>
                    <td className="py-3 px-4 text-red-700">{row.downsides}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Tax Mistakes to Avoid</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">❌ Don\'t:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• Ignore quarterly estimated payments</li>
                <li>• Mix personal and business expenses</li>
                <li>• Skip tracking receipts and invoices</li>
                <li>• Deduct 100% personal items (car, phone)</li>
                <li>• Wait until April to think about taxes</li>
              </ul>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">✅ Do:</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Open separate business bank account</li>
                <li>• Track ALL expenses (apps: QuickBooks, Wave)</li>
                <li>• Save receipts digitally</li>
                <li>• Work with creator-focused accountant</li>
                <li>• Review taxes quarterly, not yearly</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
