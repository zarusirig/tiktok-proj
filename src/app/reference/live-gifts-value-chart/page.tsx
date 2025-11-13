import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok LIVE Gifts Value Chart 2025: Complete Price & Earnings Guide',
  description: 'Complete chart of all TikTok LIVE gift values, coin costs, creator earnings (50% split), and diamonds to USD conversion rates.',
  keywords: ['tiktok live gifts value', 'gift prices', 'diamonds to usd', 'live gifts chart', 'creator earnings gifts'],
};

export default function LiveGiftsValueChartPage() {
  const gifts = [
    { name: 'Rose', coins: 1, usd: '$0.01', creatorEarns: '$0.005', popularity: 'Very Common' },
    { name: 'TikTok', coins: 1, usd: '$0.01', creatorEarns: '$0.005', popularity: 'Very Common' },
    { name: 'Heart Me', coins: 10, usd: '$0.13', creatorEarns: '$0.065', popularity: 'Common' },
    { name: 'Rainbow Puke', coins: 10, usd: '$0.13', creatorEarns: '$0.065', popularity: 'Common' },
    { name: 'Finger Heart', coins: 25, usd: '$0.32', creatorEarns: '$0.16', popularity: 'Common' },
    { name: 'Team Bracelet', coins: 69, usd: '$0.88', creatorEarns: '$0.44', popularity: 'Common' },
    { name: 'Hands Up', coins: 99, usd: '$1.27', creatorEarns: '$0.64', popularity: 'Common' },
    { name: 'GG', coins: 199, usd: '$2.55', creatorEarns: '$1.28', popularity: 'Medium' },
    { name: 'Paper Crane', coins: 99, usd: '$1.27', creatorEarns: '$0.64', popularity: 'Medium' },
    { name: 'Star', coins: 100, usd: '$1.28', creatorEarns: '$0.64', popularity: 'Common' },
    { name: 'Love Bang', coins: 300, usd: '$3.85', creatorEarns: '$1.93', popularity: 'Medium' },
    { name: 'Birthday Cake', coins: 500, usd: '$6.41', creatorEarns: '$3.21', popularity: 'Medium' },
    { name: 'Swan', coins: 699, usd: '$8.96', creatorEarns: '$4.48', popularity: 'Medium' },
    { name: 'Breakthrough Star', coins: 999, usd: '$12.81', creatorEarns: '$6.41', popularity: 'Rare' },
    { name: 'Planet', coins: 1000, usd: '$12.82', creatorEarns: '$6.41', popularity: 'Rare' },
    { name: 'Adam\'s Dream', coins: 1699, usd: '$21.78', creatorEarns: '$10.89', popularity: 'Rare' },
    { name: 'Big Love Energy', coins: 2000, usd: '$25.64', creatorEarns: '$12.82', popularity: 'Rare' },
    { name: 'Drama Queen', coins: 4188, usd: '$53.68', creatorEarns: '$26.84', popularity: 'Very Rare' },
    { name: 'Leon the Kitten', coins: 29999, usd: '$384.60', creatorEarns: '$192.30', popularity: 'Ultra Rare' },
    { name: 'Universe', coins: 34999, usd: '$448.71', creatorEarns: '$224.36', popularity: 'Ultra Rare' },
    { name: 'Lion', coins: 39999, usd: '$512.82', creatorEarns: '$256.41', popularity: 'Ultra Rare' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/reference">Reference</Link><span>/</span>
            <span className="text-neutral-900">LIVE Gifts Value Chart</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-6xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok LIVE Gifts Value Chart 2025</h1>
          <p className="text-heading-md text-white/90 mb-6">Complete reference for all gift values, prices, and creator earnings</p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Updated: November 2025</span>
            <span>💎 All Gift Values</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-6xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How TikTok LIVE Gifts Work</h2>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            <div className="p-5 bg-blue-50 rounded-lg text-center">
              <div className="text-4xl mb-2">🪙</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Viewers Buy Coins</h3>
              <p className="text-body-sm text-neutral-700">Purchase TikTok coins with real money (~$1.29 per 100 coins)</p>
            </div>
            <div className="p-5 bg-purple-50 rounded-lg text-center">
              <div className="text-4xl mb-2">🎁</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Send Gifts During LIVE</h3>
              <p className="text-body-sm text-neutral-700">Viewers use coins to send virtual gifts to creators</p>
            </div>
            <div className="p-5 bg-green-50 rounded-lg text-center">
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Creator Earns 50%</h3>
              <p className="text-body-sm text-neutral-700">Creators receive diamonds (50% of coin value) convertible to USD</p>
            </div>
          </div>
          <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-body-sm text-neutral-800">
              <strong>Important:</strong> TikTok takes 50% commission on all gifts. The values shown in "Creator Earns" column reflect the 50% split after TikTok's commission.
            </p>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Complete Gift Value Chart</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4 font-semibold">Gift Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Coin Cost</th>
                  <th className="text-left py-3 px-4 font-semibold">USD Value</th>
                  <th className="text-left py-3 px-4 font-semibold">Creator Earns</th>
                  <th className="text-left py-3 px-4 font-semibold">Rarity</th>
                </tr>
              </thead>
              <tbody>
                {gifts.map((gift, idx) => (
                  <tr key={idx} className="border-b border-neutral-100 hover:bg-neutral-50">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{gift.name}</td>
                    <td className="py-3 px-4 text-neutral-700">{gift.coins}</td>
                    <td className="py-3 px-4 text-neutral-700">{gift.usd}</td>
                    <td className="py-3 px-4 text-tiktok-pink font-bold">{gift.creatorEarns}</td>
                    <td className="py-3 px-4 text-neutral-600 text-xs">{gift.popularity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Conversion Rates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-neutral-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Coins to USD (Viewer Cost)</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• 100 coins = $1.29</li>
                <li>• 500 coins = $6.49</li>
                <li>• 1,000 coins = $12.99</li>
                <li>• 5,000 coins = $64.99</li>
                <li>• 10,000 coins = $129.99</li>
              </ul>
            </div>
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">Diamonds to USD (Creator Earnings)</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• 1 diamond = $0.005 USD</li>
                <li>• 100 diamonds = $0.50</li>
                <li>• 1,000 diamonds = $5.00</li>
                <li>• 10,000 diamonds = $50.00 (min withdrawal)</li>
                <li>• 100,000 diamonds = $500.00</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/calculators/live-gifts" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">LIVE Gifts Calculator</h4>
              <p className="text-body-sm text-neutral-700">Estimate your earnings</p>
            </Link>
            <Link href="/guides/tiktok-live-earnings-guide" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">LIVE Earnings Guide</h4>
              <p className="text-body-sm text-neutral-700">Maximize gift income</p>
            </Link>
            <Link href="/guides/how-to-get-1000-followers-live" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100 transition-colors">
              <h4 className="font-semibold text-neutral-900 mb-2">Qualify for LIVE</h4>
              <p className="text-body-sm text-neutral-700">Reach 1K followers</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
