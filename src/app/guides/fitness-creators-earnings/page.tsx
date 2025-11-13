import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Fitness Creators Earnings on TikTok 2025',
  description: 'See how much fitness and workout creators earn on TikTok by follower tier',
};

export default function FitnessPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-lg font-bold mb-6">Fitness Creators Earnings</h1>
        <Card>
          <h2 className="text-heading-lg font-semibold mb-4">Earnings by Tier</h2>
          <p>10K-25K: $400-$1,500/mo | 50K-100K: $4,500-$12,000/mo</p>
        </Card>
      </div>
    </div>
  );
}
