import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Shop vs Amazon Associates: Affiliate Earnings Comparison 2025',
  description: 'Compare TikTok Shop vs Amazon Associates affiliate programs. Commission rates, requirements, earning potential, and which platform is better for creators.',
  keywords: ['tiktok shop vs amazon', 'affiliate comparison', 'commission rates', 'creator affiliate programs'],
};

export default function TikTokShopVsAmazonPage() {
  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/comparisons">Comparisons</Link><span>/</span>
            <span className="text-neutral-900">TikTok Shop vs Amazon</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop vs Amazon Associates: 2025 Comparison
          </h1>
          <p className="text-heading-md text-white/90 mb-6">Which affiliate program pays creators more?</p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Commission Rate Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">TikTok Shop</th>
                  <th className="text-left py-3 px-4">Amazon Associates</th>
                  <th className="text-left py-3 px-4">Winner</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { category: 'Beauty & Personal Care', tiktok: '8-20%', amazon: '1-4.5%', winner: 'TikTok' },
                  { category: 'Fashion & Accessories', tiktok: '10-15%', amazon: '1-4%', winner: 'TikTok' },
                  { category: 'Electronics', tiktok: '2-8%', amazon: '1-2.5%', winner: 'TikTok' },
                  { category: 'Home & Kitchen', tiktok: '5-12%', amazon: '1-4%', winner: 'TikTok' },
                  { category: 'Toys & Games', tiktok: '8-15%', amazon: '1-3%', winner: 'TikTok' },
                  { category: 'Books', tiktok: '4-10%', amazon: '3-4.5%', winner: 'Tie' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.category}</td>
                    <td className={`py-3 px-4 ${row.winner === 'TikTok' ? 'bg-tiktok-pink/10 font-semibold' : ''}`}>{row.tiktok}</td>
                    <td className={`py-3 px-4 ${row.winner === 'Amazon' ? 'bg-orange-50 font-semibold' : ''}`}>{row.amazon}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.winner}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 p-4 bg-tiktok-pink/10 border border-tiktok-pink rounded-lg">
            <p className="text-body-sm text-neutral-800">
              <strong>Overall Winner: TikTok Shop</strong> - TikTok Shop pays 2-5x higher commission rates than Amazon Associates across most categories.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Platform Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Factor</th>
                  <th className="text-left py-3 px-4">TikTok Shop</th>
                  <th className="text-left py-3 px-4">Amazon Associates</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { factor: 'Requirements', tiktok: '0-5K followers (varies by region)', amazon: 'None (anyone can join)' },
                  { factor: 'Product Selection', tiktok: 'Limited (growing catalog)', amazon: 'Massive (millions of products)' },
                  { factor: 'Cookie Duration', tiktok: '7-30 days', amazon: '24 hours' },
                  { factor: 'Minimum Payout', tiktok: '$50', amazon: '$10 (or Amazon gift card)' },
                  { factor: 'Integration', tiktok: 'Native in-app (seamless)', amazon: 'External link (friction)' },
                  { factor: 'Conversion Rate', tiktok: '5-15% (in-app checkout)', amazon: '1-3% (external site)' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{row.factor}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.tiktok}</td>
                    <td className="py-3 px-4 text-neutral-700">{row.amazon}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Best Strategy: Use Both</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-tiktok-pink/10 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Promote on TikTok Shop When:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>✅ Product available in TikTok Shop catalog</li>
                <li>✅ Creating native TikTok content (in-feed videos)</li>
                <li>✅ Want higher commission rates (2-5x more)</li>
                <li>✅ Audience is primarily on TikTok</li>
              </ul>
            </div>
            <div className="p-5 bg-orange-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Promote on Amazon When:</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>✅ Product not available on TikTok Shop</li>
                <li>✅ Multi-platform content (blog, YouTube, IG)</li>
                <li>✅ Audience prefers Amazon (trust, Prime shipping)</li>
                <li>✅ Need access to massive product catalog</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
