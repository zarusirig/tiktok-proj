import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok Shop Payment Schedule: When You Get Paid (2025)',
  description: 'Complete guide to TikTok Shop payment schedule, processing times, minimum thresholds, payment methods, and troubleshooting delayed payments.',
  keywords: ['tiktok shop payment schedule', 'when does tiktok shop pay', 'tiktok affiliate payment timeline', 'tiktok shop payout date', 'tiktok shop payment processing'],
};

export default function TikTokShopPaymentSchedulePage() {
  const faqs = [
    {
      question: 'When do I get my first payment?',
      answer: 'After your first full month of earning commissions. If you start mid-month, earnings count for that month and are paid the following month. Example: Start affiliate January 15 → January 15–31 earnings paid mid-February.',
    },
    {
      question: 'Can I change my payment method?',
      answer: 'Yes, anytime. Changes take effect for next payment cycle. If you change mid-cycle, that month\'s payment goes to previous method.',
    },
    {
      question: 'What if I don\'t receive payment on time?',
      answer: 'Wait 5 business days past expected date. Then: (1) Check dashboard for payment status, (2) Verify payment method is correct, (3) Check PayPal/bank for incoming payment, (4) Contact TikTok Support if still missing.',
    },
    {
      question: 'Do I get paid for clicks or only sales?',
      answer: 'Only sales. You earn commission when a customer purchases a product through your affiliate link. Clicks alone don\'t generate income.',
    },
    {
      question: 'Can I request early payment or withdraw before end of month?',
      answer: 'No. TikTok Shop operates on fixed monthly schedule. Early withdrawal not available.',
    },
    {
      question: 'Are there any payment limits (maximum)?',
      answer: 'No maximum. If you earn $10,000 in a month, you\'ll receive $10,000 (minus any returns/refunds).',
    },
    {
      question: 'What happens if my account is suspended?',
      answer: 'Pending payments are typically held until issue is resolved. If account is permanently banned, payments may be forfeited (check TikTok Shop terms).',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/reference" className="hover:text-neutral-900 transition-colors">Reference</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok Shop Payment Schedule</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-500 via-teal-500 to-blue-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop Payment Schedule
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete guide to payment timing, processing, thresholds, and troubleshooting
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Updated: November 2025</span>
            <span>⏱️ 8 min read</span>
            <span>💰 Payment Reference</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">

        {/* Quick Answer */}
        <Card>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <h3 className="font-semibold text-green-900 mb-2">Quick Answer</h3>
            <p className="text-body-md text-green-800">
              TikTok Shop affiliate commissions are paid monthly, typically mid-month for the previous month's sales, with a 7–10 day processing time.
            </p>
          </div>
        </Card>

        {/* Monthly Payment Cycle */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok Shop Affiliate Payment Schedule</h2>
          <h3 className="font-semibold text-neutral-900 mb-3">Monthly Payment Cycle</h3>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h4 className="font-semibold text-neutral-900 mb-2">How it works:</h4>
              <ol className="text-body-sm text-neutral-700 space-y-2 ml-4 list-decimal">
                <li><strong>Sales period:</strong> Full calendar month (e.g., January 1–31)</li>
                <li><strong>Processing period:</strong> First 10–15 days of following month</li>
                <li><strong>Payment date:</strong> Mid-month (typically 10th–20th)</li>
                <li><strong>Deposit received:</strong> 1–10 days after payment date (depending on method)</li>
              </ol>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Example timeline:</h4>
              <ul className="text-body-sm text-blue-800 space-y-1 ml-4 list-disc">
                <li><strong>January 1–31:</strong> You earn $250 in commissions</li>
                <li><strong>February 1–10:</strong> TikTok calculates and processes payments</li>
                <li><strong>February 15:</strong> Payment initiated to your account</li>
                <li><strong>February 16–20:</strong> Funds appear in PayPal/bank (PayPal faster)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Minimum Payout Threshold */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Minimum Payout Threshold</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-900 mb-2">United States</h3>
              <p className="text-heading-lg font-bold text-green-600">$10</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-900 mb-2">United Kingdom</h3>
              <p className="text-heading-lg font-bold text-green-600">£10</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 text-center">
              <h3 className="font-semibold text-neutral-900 mb-2">Southeast Asia</h3>
              <p className="text-heading-lg font-bold text-green-600">$5–$10</p>
            </div>
          </div>
          <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-sm text-yellow-800">
              <strong>Note:</strong> If you earn less than the minimum in a month, balance rolls over to next month. Example: Month 1: Earn $8 → No payout (below $10). Month 2: Earn $15 → Total $23 → Payout $23.
            </p>
          </div>
        </Card>

        {/* Payment Methods */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Payment Methods and Processing Times</h2>
          <div className="space-y-4">
            <div className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">PayPal (Recommended)</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-xs text-neutral-600 mb-1">Processing Time</p>
                  <p className="text-body-sm font-semibold text-neutral-900">1–3 business days</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-xs text-neutral-600 mb-1">Fees</p>
                  <p className="text-body-sm font-semibold text-neutral-900">None from TikTok</p>
                </div>
              </div>
              <div className="space-y-2 text-body-sm text-neutral-700">
                <p><strong>Pros:</strong> Fastest method, easy to set up, widely available</p>
                <p><strong>Setup:</strong> Affiliate Dashboard → Payment Settings → Select PayPal → Enter PayPal email → Verify</p>
                <p className="text-red-600"><strong>Important:</strong> PayPal email must match your TikTok account legal name.</p>
              </div>
            </div>

            <div className="p-5 bg-gradient-to-br from-green-50 to-white rounded-lg border border-green-200">
              <h3 className="text-heading-md font-bold text-neutral-900 mb-3">Bank Transfer (ACH)</h3>
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-xs text-neutral-600 mb-1">Processing Time</p>
                  <p className="text-body-sm font-semibold text-neutral-900">5–7 business days</p>
                </div>
                <div className="p-3 bg-white rounded-lg border border-neutral-200">
                  <p className="text-body-xs text-neutral-600 mb-1">Fees</p>
                  <p className="text-body-sm font-semibold text-neutral-900">None from TikTok</p>
                </div>
              </div>
              <div className="space-y-2 text-body-sm text-neutral-700">
                <p><strong>Pros:</strong> Direct to bank account, no intermediary fees</p>
                <p><strong>Cons:</strong> Slower than PayPal, more setup steps</p>
                <p><strong>Setup:</strong> Affiliate Dashboard → Payment Settings → Select Bank Transfer → Enter bank details → Verify (test deposit takes 3–5 days)</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Detailed Payment Timeline */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Detailed Payment Timeline</h2>
          <div className="space-y-3">
            <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-blue-500">
              <h3 className="font-semibold text-neutral-900 mb-1">January (Sales Month)</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Jan 1–31: Sales occur, commissions accumulate</li>
                <li>Real-time tracking in Affiliate Dashboard (estimated earnings)</li>
              </ul>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-yellow-500">
              <h3 className="font-semibold text-neutral-900 mb-1">February (Processing Month)</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Feb 1–10: TikTok calculates final commissions (deducts returns/refunds, applies adjustments)</li>
                <li>Feb 15: Payment initiated (status changes to "Paid", you receive email confirmation)</li>
                <li>Feb 16–18 (PayPal): Funds arrive</li>
                <li>Feb 20–25 (Bank): Funds arrive</li>
              </ul>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border-l-4 border-green-500">
              <h3 className="font-semibold text-neutral-900 mb-1">March</h3>
              <p className="text-body-sm text-neutral-700">Process repeats for February's earnings</p>
            </div>
          </div>
        </Card>

        {/* What Affects Payment Amount */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What Affects Your Payment Amount</h2>
          <div className="space-y-3">
            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Deductions from Gross Commissions</h3>
              <ul className="text-body-sm text-red-800 space-y-1 ml-4 list-disc">
                <li><strong>Returns and Refunds:</strong> If customer returns product, commission is deducted</li>
                <li><strong>Cancelled Orders:</strong> Orders cancelled before shipment = no commission earned</li>
                <li><strong>Payment Processing Fees:</strong> TikTok covers fees (PayPal/bank may charge separate withdrawal fees)</li>
              </ul>
            </div>
            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <h3 className="font-semibold text-yellow-900 mb-2">Taxes</h3>
              <p className="text-body-sm text-yellow-800">
                Payments are pre-tax (you're responsible for reporting income). US creators: Receive 1099 form if earnings exceed $600/year.
              </p>
            </div>
          </div>
        </Card>

        {/* Common Payment Delays */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Common Payment Delays and Solutions</h2>
          <div className="space-y-4">
            {[
              {
                delay: 'Payment Method Not Verified',
                symptom: 'Payment status shows "Action Required"',
                cause: 'PayPal email or bank account not verified',
                solution: 'Check email for verification request from TikTok → Click verification link → Follow steps → Payment will process in next cycle if missed',
              },
              {
                delay: 'Payment Below Minimum Threshold',
                symptom: 'No payment received, but you had earnings',
                cause: 'Earnings below $10 (US) minimum',
                solution: 'Balance shows as "Pending" and rolls over to next month. Once combined total exceeds $10, payment will process.',
              },
              {
                delay: 'Bank/PayPal Account Issues',
                symptom: 'Payment shows "Failed" in dashboard',
                cause: 'PayPal email incorrect/account closed, bank account number incorrect, or account name doesn\'t match TikTok legal name',
                solution: 'Verify payment method details → Update if needed → Contact TikTok Support to reissue payment',
              },
              {
                delay: 'Large Volume of Returns',
                symptom: 'Payment significantly lower than expected',
                cause: 'High return rate on products you promoted',
                solution: 'Check "Returns" section in dashboard → Consider promoting higher-quality products with lower return rates',
              },
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-2">Delay {idx + 1}: {item.delay}</h3>
                <div className="space-y-1 text-body-sm text-neutral-700">
                  <p><strong>Symptom:</strong> {item.symptom}</p>
                  <p><strong>Cause:</strong> {item.cause}</p>
                  <p><strong>Solution:</strong> {item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* How to Track Payments */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Track Your Payments</h2>
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h3 className="font-semibold text-blue-900 mb-3">In TikTok Affiliate Dashboard</h3>
            <p className="text-body-sm text-blue-800 mb-3"><strong>Navigate to:</strong> Affiliate Dashboard → Earnings → Payment History</p>
            <div className="space-y-2 text-body-sm text-blue-800">
              <p><strong>You'll see:</strong></p>
              <ul className="ml-4 list-disc space-y-1">
                <li><strong>Pending earnings:</strong> Current month's accumulated commissions (not yet paid)</li>
                <li><strong>Processing:</strong> Last month's earnings being calculated</li>
                <li><strong>Paid:</strong> Previous payments with dates and amounts</li>
                <li><strong>Failed:</strong> Any failed payments (with reason)</li>
              </ul>
              <p className="mt-3"><strong>CSV export:</strong> Download payment history for accounting/tax purposes</p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Next Steps */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Next Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Track your earnings:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Log in to TikTok Affiliate Dashboard</li>
                <li>Check "Pending Earnings" (current month)</li>
                <li>Check "Payment History" (past payments)</li>
                <li>Set calendar reminder: Check dashboard on 15th of each month for payment</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Optimize payments:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Use <Link href="/calculators/shop-commission" className="text-blue-600 hover:underline">TikTok Shop Commission Calculator</Link> to project monthly earnings</li>
                <li>Learn <Link href="/guides/how-to-become-shop-affiliate" className="text-blue-600 hover:underline">How to Become TikTok Shop Affiliate</Link> if not yet enrolled</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Prepare for taxes:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Download payment history CSV monthly</li>
                <li>Track all TikTok-related expenses (deductible)</li>
                <li>Consult tax professional if earning $5,000+ annually</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Related Resources */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/calculators/shop-commission" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">TikTok Shop Commission Calculator</h3>
              <p className="text-body-sm text-neutral-600">Project your earnings</p>
            </Link>
            <Link href="/guides/how-to-become-shop-affiliate" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">How to Become TikTok Shop Affiliate</h3>
              <p className="text-body-sm text-neutral-600">Get started with TikTok Shop</p>
            </Link>
            <Link href="/advanced/creator-tax-deductions-guide" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">Creator Tax Deductions Guide</h3>
              <p className="text-body-sm text-neutral-600">Maximize your tax savings</p>
            </Link>
            <Link href="/calculators/affiliate-commission" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">TikTok Affiliate Earnings Calculator</h3>
              <p className="text-body-sm text-neutral-600">Calculate potential income</p>
            </Link>
          </div>
        </Card>

      </div>
    </div>
  );
}
