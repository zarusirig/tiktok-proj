import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'How to Become TikTok Shop Affiliate: Complete Guide (2025)',
  description: 'Step-by-step guide to joining TikTok Shop affiliate program. Requirements, application process, and earning strategies.',
  keywords: ['tiktok shop affiliate', 'become shop seller', 'tiktok affiliate program', 'shop creator'],
};

export default function BecomeTikTokShopAffiliatePage() {
  const requirements = [
    '1,000+ followers',
    '18+ years old',
    'Business or Creator account',
    'TikTok Shop available in your country (US, UK, select markets)',
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Become Shop Affiliate</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">How to Become TikTok Shop Affiliate</h1>
          <p className="text-heading-md text-white/90">Join the affiliate program and earn commissions</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Requirements</h2>
          <ul className="space-y-2">
            {requirements.map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-green-600 mt-1">✓</span>
                <span className="text-body-md text-neutral-700">{req}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="bg-orange-50">
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-3">Typical Commission Rates</h3>
          <p className="text-body-md text-neutral-700 mb-2">
            <strong>5-20% per sale</strong> depending on product category
          </p>
          <p className="text-body-sm text-neutral-600">
            Beauty products typically offer 10-15%, while electronics range from 5-8%
          </p>
        </Card>

        <Card>
          <Link href="/calculators/shop-commission" className="text-primary-600 hover:text-primary-700 font-semibold">
            Calculate Your Shop Commissions →
          </Link>
        </Card>
      </div>
    </div>
  );
}

