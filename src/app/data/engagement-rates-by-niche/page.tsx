import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Engagement Rates by Niche 2025',
  description: 'Benchmark engagement rates across different TikTok content niches',
};

export default function EngagementRatesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-lg font-bold mb-6">Engagement Rates by Niche</h1>
        <Card>
          <h2 className="text-heading-lg font-semibold mb-4">Average Rates</h2>
          <p>Nano (1K-10K): 5-8% | Micro (10K-50K): 3-6% | Mid (50K-500K): 2-5%</p>
        </Card>
      </div>
    </div>
  );
}
