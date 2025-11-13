import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'How to Negotiate Brand Deal Rates on TikTok',
  description: 'Learn negotiation strategies to maximize your TikTok brand deal earnings',
};

export default function NegotiateBrandDealsPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-lg font-bold mb-6">Negotiate Brand Deals</h1>
        <Card>
          <h2 className="text-heading-lg font-semibold mb-4">Key Strategies</h2>
          <p>Start 20-30% higher | Never accept first offer | Bundle packages for better rates</p>
        </Card>
      </div>
    </div>
  );
}
