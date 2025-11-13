import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Shop Commission Rates by Category 2025: Complete Reference',
  description: 'Complete breakdown of TikTok Shop affiliate commission rates by product category. Find the most profitable categories and optimize your earnings.',
  keywords: ['tiktok shop commission rates', 'affiliate commission', 'shop rates by category', 'tiktok shop earnings'],
};

export default function ShopCommissionRatesPage() {
  const categories = [
    { category: 'Beauty & Personal Care', commission: '8% - 20%', avg: '12%', notes: 'Highest rates for premium skincare and makeup' },
    { category: 'Fashion & Accessories', commission: '10% - 15%', avg: '12%', notes: 'Jewelry and designer items pay more' },
    { category: 'Health & Wellness', commission: '10% - 18%', avg: '14%', notes: 'Supplements and fitness gear' },
    { category: 'Home & Kitchen', commission: '5% - 12%', avg: '8%', notes: 'Higher for small appliances' },
    { category: 'Toys & Games', commission: '8% - 15%', avg: '10%', notes: 'Educational toys pay more' },
    { category: 'Sports & Outdoors', commission: '6% - 12%', avg: '9%', notes: 'Activewear has better rates' },
    { category: 'Electronics & Gadgets', commission: '2% - 8%', avg: '5%', notes: 'Low margin category' },
    { category: 'Pet Supplies', commission: '8% - 15%', avg: '11%', notes: 'Premium pet products pay well' },
    { category: 'Baby & Kids', commission: '8% - 14%', avg: '10%', notes: 'Safety products higher commission' },
    { category: 'Books & Media', commission: '4% - 10%', avg: '6%', notes: 'Educational content better' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/reference">Reference</Link><span>/</span>
            <span className="text-neutral-900">Shop Commission Rates</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Shop Commission Rates 2025
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete breakdown of affiliate commission rates by product category
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Commission Rates by Category</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Category</th>
                  <th className="text-left py-3 px-4">Commission Range</th>
                  <th className="text-left py-3 px-4">Average</th>
                  <th className="text-left py-3 px-4">Notes</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{cat.category}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-semibold">{cat.commission}</td>
                    <td className="py-3 px-4 text-neutral-900">{cat.avg}</td>
                    <td className="py-3 px-4 text-neutral-700 text-xs">{cat.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Earnings Calculator Example</h2>
          <div className="space-y-4">
            {[
              { sales: '$1,000', commission: '10%', earnings: '$100' },
              { sales: '$5,000', commission: '12%', earnings: '$600' },
              { sales: '$10,000', commission: '15%', earnings: '$1,500' },
            ].map((ex, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg flex justify-between items-center">
                <div><span className="font-semibold text-neutral-900">{ex.sales}</span> in sales</div>
                <div className="text-neutral-600">@{ex.commission}</div>
                <div className="text-tiktok-pink font-bold text-heading-sm">{ex.earnings}</div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link href="/calculators/shop-commission" className="inline-block px-6 py-3 bg-tiktok-pink text-white font-semibold rounded-lg hover:bg-tiktok-pink/90">
              Calculate Your Earnings →
            </Link>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-become-shop-affiliate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Become Shop Affiliate</h4>
              <p className="text-body-sm text-neutral-700">Join TikTok Shop program</p>
            </Link>
            <Link href="/guides/best-shop-niches" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Best Shop Niches</h4>
              <p className="text-body-sm text-neutral-700">Most profitable categories</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
