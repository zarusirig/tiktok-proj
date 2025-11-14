import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok LIVE Shopping Guide: How to Sell Products During Livestreams 2025',
  description: 'Complete guide to TikTok LIVE Shopping. How to set up, showcase products, convert viewers to buyers, and maximize sales during live streams.',
  keywords: ['tiktok live shopping', 'live commerce', 'tiktok shop live', 'livestream selling', 'tiktok live sales'],
};

export default function TikTokLiveShoppingPage() {
  const faqs = [
    { question: 'What is TikTok LIVE Shopping?', answer: 'TikTok LIVE Shopping combines live streaming with e-commerce. Creators showcase products during LIVE sessions, and viewers can purchase instantly without leaving the stream. It\'s like QVC for Gen Z.' },
    { question: 'How much can creators earn from LIVE Shopping?', answer: 'Earnings vary widely: Beginners: $50-$500 per LIVE. Established creators: $1,000-$10,000+ per session. Top sellers: $50,000-$500,000+ per LIVE. Depends on audience size, product selection, conversion rate, and average order value.' },
    { question: 'Do I need my own products to do LIVE Shopping?', answer: 'No! You can sell as a TikTok Shop affiliate, earning commissions (8-20%) on other brands\' products. Or, sell your own products for higher margins. Most creators start with affiliate products.' },
    { question: 'What are the requirements for LIVE Shopping?', answer: 'Must meet TikTok Shop requirements (varies by region: 0-5K followers), complete TikTok Shop setup, have products approved in your showcase, and meet minimum age (18+).' },
    { question: 'How is LIVE Shopping different from regular TikTok Shop?', answer: 'Regular Shop: Products linked in regular videos, passive selling. LIVE Shopping: Real-time demonstration, answer questions live, create urgency with limited-time offers, higher conversion rates (3-10x higher than static posts).' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">TikTok LIVE Shopping</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok LIVE Shopping Guide 2025</h1>
          <p className="text-heading-md text-white/90 mb-6">
            How to sell products during live streams and maximize your earnings
          </p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What is LIVE Shopping?</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            LIVE Shopping combines the engagement of live streaming with instant purchasing. It's the fastest-growing e-commerce format, with billions in sales in 2024.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-blue-50 rounded-lg text-center">
              <div className="text-4xl mb-2">📱</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Go LIVE</h3>
              <p className="text-body-sm text-neutral-700">Stream to your audience showcasing products</p>
            </div>
            <div className="p-5 bg-purple-50 rounded-lg text-center">
              <div className="text-4xl mb-2">🛍️</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Showcase Products</h3>
              <p className="text-body-sm text-neutral-700">Pin products to LIVE for instant purchase</p>
            </div>
            <div className="p-5 bg-green-50 rounded-lg text-center">
              <div className="text-4xl mb-2">💰</div>
              <h3 className="font-semibold text-neutral-900 mb-2">Earn Commissions</h3>
              <p className="text-body-sm text-neutral-700">Get paid when viewers buy during your LIVE</p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Set Up LIVE Shopping</h2>
          <div className="space-y-4">
            {[
              { step: 1, title: 'Join TikTok Shop', content: 'Apply at TikTok Shop Seller Center or join as affiliate through Creator Marketplace. Meet requirements: 18+, 0-5K followers (varies by region).' },
              { step: 2, title: 'Build Product Showcase', content: 'Add products to your showcase: your own products or affiliate products from TikTok Shop catalog. Curate 10-50 products for your LIVE sessions.' },
              { step: 3, title: 'Plan Your LIVE', content: 'Choose 5-10 products to feature. Create talking points for each. Set special LIVE-only discounts. Schedule your LIVE and promote it in advance.' },
              { step: 4, title: 'Set Up Studio', content: 'Good lighting (ring light recommended). Clear background. Product display area. Stable phone mount or tripod. Test audio quality.' },
              { step: 5, title: 'Go LIVE with Products', content: 'Start LIVE stream. Tap shopping bag icon. Select products to feature. Pin products during demonstration. Respond to questions in real-time.' },
              { step: 6, title: 'Drive Sales', content: 'Demonstrate products. Create urgency with limited-time offers. Answer viewer questions. Announce when stock is low. Show social proof (reviews, testimonials).' },
            ].map((item) => (
              <div key={item.step} className="flex gap-4 p-4 bg-neutral-50 rounded-lg">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tiktok-pink text-white flex items-center justify-center font-bold">{item.step}</div>
                <div className="flex-1 pt-1">
                  <h3 className="font-semibold text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-body-sm text-neutral-700">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">LIVE Shopping Best Practices</h2>
          <div className="space-y-4">
            {[
              { title: 'Create Urgency', tips: ['Limited-time discounts (20% off during LIVE only)', 'Flash sales every 15 minutes', 'Limited stock announcements', 'Countdown timers for deals'] },
              { title: 'Demonstrate Products', tips: ['Show products in use (unboxing, try-on, demo)', 'Highlight key features and benefits', 'Compare to competitors', 'Show before/after results'] },
              { title: 'Engage Viewers', tips: ['Greet viewers by name', 'Answer questions immediately', 'Run giveaways for engagement', 'Thank purchasers publicly'] },
              { title: 'Optimize for Sales', tips: ['Pin bestsellers prominently', 'Bundle products for higher AOV', 'Offer LIVE-exclusive bundles', 'Use "Add to Cart" prompts frequently'] },
            ].map((section, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-3">{section.title}</h3>
                <ul className="space-y-1.5 text-body-sm text-neutral-700">
                  {section.tips.map((tip, tipIdx) => (
                    <li key={tipIdx}>• {tip}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        <FAQSection pageName="TikTok LIVE Shopping" faqs={faqs} />

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-become-shop-affiliate" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Become Shop Affiliate</h4>
              <p className="text-body-sm text-neutral-700">Start selling without inventory</p>
            </Link>
            <Link href="/reference/shop-commission-rates" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-2">Commission Rates</h4>
              <p className="text-body-sm text-neutral-700">Earnings by product category</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}
