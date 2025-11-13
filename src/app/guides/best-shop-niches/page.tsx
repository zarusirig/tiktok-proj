import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Best TikTok Shop Niches for Creators: Most Profitable Categories 2025',
  description: 'Discover the most profitable TikTok Shop niches for affiliates and sellers. Commission rates, competition analysis, and best products to promote.',
  keywords: ['best tiktok shop niches', 'profitable shop categories', 'tiktok affiliate niches', 'shop product selection'],
};

export default function BestShopNichesPage() {
  const niches = [
    { niche: 'Beauty & Skincare', commission: '8-20%', competition: 'High', profit: 'High', why: 'High commissions, consumable products (repeat purchases), visual results drive conversions' },
    { niche: 'Fashion & Jewelry', commission: '10-15%', competition: 'Very High', profit: 'Medium', why: 'Strong fit for TikTok audience, trend-driven, high engagement but saturated' },
    { niche: 'Health & Wellness', commission: '10-18%', competition: 'Medium', profit: 'High', why: 'Growing category, supplements and fitness gear, loyal customers' },
    { niche: 'Home Organization', commission: '5-12%', competition: 'Medium', profit: 'Medium', why: 'Practical products, satisfying before/after content, broad appeal' },
    { niche: 'Pet Products', commission: '8-15%', competition: 'Low', profit: 'High', why: 'Passionate audience, repeat purchases, less competition than beauty' },
    { niche: 'Tech Accessories', commission: '2-8%', competition: 'High', profit: 'Low', why: 'Low commissions but high volume potential, gadget lovers engaged' },
    { niche: 'Kitchen Gadgets', commission: '5-12%', competition: 'Medium', profit: 'Medium', why: 'Viral potential, demonstration-friendly, practical use cases' },
    { niche: 'Baby & Parenting', commission: '8-14%', competition: 'Low', profit: 'High', why: 'High-value customers, recurring needs, less saturated' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Best Shop Niches</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Best TikTok Shop Niches 2025</h1>
          <p className="text-heading-md text-white/90 mb-6">Most profitable categories for creators and affiliates</p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Top TikTok Shop Niches</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Niche</th>
                  <th className="text-left py-3 px-4">Commission</th>
                  <th className="text-left py-3 px-4">Competition</th>
                  <th className="text-left py-3 px-4">Profit Potential</th>
                  <th className="text-left py-3 px-4">Why It Works</th>
                </tr>
              </thead>
              <tbody>
                {niches.map((item, idx) => (
                  <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{item.niche}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-semibold">{item.commission}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.competition === 'Low' ? 'bg-green-100 text-green-700' :
                        item.competition === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        item.competition === 'High' ? 'bg-orange-100 text-orange-700' :
                        'bg-red-100 text-red-700'
                      }`}>{item.competition}</span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        item.profit === 'High' ? 'bg-green-100 text-green-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>{item.profit}</span>
                    </td>
                    <td className="py-3 px-4 text-neutral-700 text-xs">{item.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Niche Selection Criteria</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">✅ Choose Niches With:</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• 10%+ commission rates</li>
                <li>• Repeat purchase potential</li>
                <li>• Visual demonstration value</li>
                <li>• Passionate, engaged audience</li>
                <li>• Room to stand out (not oversaturated)</li>
                <li>• Products you genuinely like/use</li>
              </ul>
            </div>
            <div className="p-5 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">❌ Avoid Niches With:</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Very low commissions (under 5%)</li>
                <li>• Extreme saturation (too many creators)</li>
                <li>• One-time purchase items only</li>
                <li>• No visual appeal (hard to demo)</li>
                <li>• Products you don\'t believe in</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/reference/shop-commission-rates" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Commission Rates</h4>
              <p className="text-body-sm text-neutral-700">All category rates</p>
            </Link>
            <Link href="/guides/how-to-become-shop-affiliate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Become Affiliate</h4>
              <p className="text-body-sm text-neutral-700">Join TikTok Shop</p>
            </Link>
            <Link href="/guides/tiktok-live-shopping" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">LIVE Shopping</h4>
              <p className="text-body-sm text-neutral-700">Sell during streams</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
