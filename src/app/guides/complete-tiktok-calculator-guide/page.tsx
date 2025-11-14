import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Complete Guide to TikTok Calculators 2025 | 34 Free Tools for Creators',
  description: 'Master TikTok success with our comprehensive guide to 34 calculators. From earnings and engagement to business ROI and content planning.',
};

export default function CompleteTikTokCalculatorGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-4xl font-bold text-neutral-900 mb-6">
          Complete Guide to TikTok Calculators 2025
        </h1>
        <p className="text-lg text-neutral-600 mb-8">
          This comprehensive guide is currently being updated. Please check back soon or explore our individual calculators below.
        </p>
        <Card>
          <h2 className="text-2xl font-semibold mb-4">Available Calculators</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/calculators/tiktok-creator-fund" className="p-4 hover:bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-medium text-neutral-900">Creator Fund Calculator</h3>
              <p className="text-sm text-neutral-600">Estimate earnings from views</p>
            </Link>
            <Link href="/calculators/brand-deal-rate" className="p-4 hover:bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-medium text-neutral-900">Brand Deal Rate Calculator</h3>
              <p className="text-sm text-neutral-600">Calculate sponsorship pricing</p>
            </Link>
            <Link href="/calculators/engagement-rate" className="p-4 hover:bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-medium text-neutral-900">Engagement Rate Calculator</h3>
              <p className="text-sm text-neutral-600">Measure audience engagement</p>
            </Link>
            <Link href="/calculators" className="p-4 hover:bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-medium text-neutral-900">View All Calculators</h3>
              <p className="text-sm text-neutral-600">Browse all 34 tools</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
