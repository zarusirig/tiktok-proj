import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Shop Affiliate Program Guide 2025',
  description: 'Complete guide to earning with TikTok Shop affiliate commissions',
};

export default function TikTokShopAffiliatePage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-lg font-bold mb-6">TikTok Shop Affiliate</h1>
        <Card>
          <h2 className="text-heading-lg font-semibold mb-4">Earnings Potential</h2>
          <p>5-20% commission on sales | Beauty/fashion convert best | Average $200-$2K/month</p>
        </Card>
      </div>
    </div>
  );
}
