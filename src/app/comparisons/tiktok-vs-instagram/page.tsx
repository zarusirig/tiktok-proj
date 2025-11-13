import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok vs Instagram Monetization 2025',
  description: 'Compare TikTok and Instagram creator earnings and monetization',
};

export default function TikTokVsInstagramPage() {
  return (
    <div className="min-h-screen bg-neutral-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-lg font-bold mb-6">TikTok vs Instagram</h1>
        <Card>
          <h2 className="text-heading-lg font-semibold mb-4">Platform Comparison</h2>
          <p>TikTok: Better for growth | Instagram: Better for brand deals</p>
        </Card>
      </div>
    </div>
  );
}
