import type { Metadata} from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Shop Payment Schedule: When Do You Get Paid? (2025)',
  description: 'Complete TikTok Shop payout schedule, processing times, minimum thresholds, and payment methods.',
  keywords: ['tiktok shop payment', 'shop payout schedule', 'when paid tiktok shop', 'commission payout'],
};

export default function ShopPaymentSchedulePage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/reference">Reference</Link><span>/</span>
            <span className="text-neutral-900">Shop Payment Schedule</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-teal-500 via-cyan-500 to-blue-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok Shop Payment Schedule</h1>
          <p className="text-heading-md text-white/90">When and how you get paid</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Payment Details</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900">Payout Frequency</h3>
              <p className="text-body-md text-neutral-700">Every 14 days (bi-weekly)</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900">Minimum Threshold</h3>
              <p className="text-body-md text-neutral-700">$10 minimum balance required</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900">Processing Time</h3>
              <p className="text-body-md text-neutral-700">5-7 business days after payout initiated</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900">Payment Methods</h3>
              <p className="text-body-md text-neutral-700">Bank transfer, PayPal (varies by region)</p>
            </div>
          </div>
        </Card>

        <Card className="bg-teal-50">
          <p className="text-body-md text-neutral-700">
            <strong>Example:</strong> Sales made Jan 1-14 → Payout initiated Jan 15 → Money in account Jan 20-22
          </p>
        </Card>
      </div>
    </div>
  );
}

