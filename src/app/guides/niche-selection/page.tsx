import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'TikTok Niche Selection Guide 2025: Find Your Profitable Content Category',
  description: 'Complete guide to choosing the right TikTok niche. Profitability analysis, competition assessment, and how to find your perfect content category.',
  keywords: ['tiktok niche selection', 'content niche', 'profitable niches', 'niche strategy tiktok'],
};

export default function NicheSelectionPage() {
  const topNiches = [
    { name: 'Personal Finance', monetization: 'Very High', competition: 'Medium', audience: 'Highly valuable (adults 25-45)', barrier: 'Requires expertise' },
    { name: 'Beauty & Skincare', monetization: 'High', competition: 'Very High', audience: 'Engaged, purchasing power', barrier: 'Saturated market' },
    { name: 'Fitness & Health', monetization: 'High', competition: 'High', audience: 'Loyal, recurring customers', barrier: 'Transformation results needed' },
    { name: 'Tech Reviews', monetization: 'High', competition: 'Medium', audience: 'High-income demographics', barrier: 'Product investment' },
    { name: 'Productivity & Career', monetization: 'High', competition: 'Medium', audience: 'Professional demographics', barrier: 'Credibility building' },
    { name: 'Cooking & Recipes', monetization: 'Medium', competition: 'High', audience: 'Broad appeal', barrier: 'Need filming setup' },
    { name: 'Pet Content', monetization: 'Medium', competition: 'Medium', audience: 'Passionate, engaged', barrier: 'Requires pet(s)' },
    { name: 'Home Organization', monetization: 'Medium', competition: 'Medium', audience: 'Homeowners, practical', barrier: 'Visual before/after' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Niche Selection</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-tiktok-pink via-tiktok-red to-tiktok-blue py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">TikTok Niche Selection Guide 2025</h1>
          <p className="text-heading-md text-white/90 mb-6">Find your profitable content category and build authority</p>
        </div>
      </section>

      <div className="container-custom max-w-5xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">The Niche Selection Framework</h2>
          <div className="space-y-4">
            {[
              { step: 1, question: 'What are you knowledgeable about?', action: 'List 5-10 topics you know more than the average person. Include hobbies, profession, life experiences.', why: 'You need expertise to create valuable content consistently' },
              { step: 2, question: 'What do people ask you about?', action: 'Identify topics friends/family regularly ask your advice on. These are your natural authority areas.', why: 'If people already see you as an expert, content will be authentic' },
              { step: 3, question: 'What can you talk about for hours?', action: 'Find topics you\'re genuinely passionate about. Consistency requires passion.', why: 'You\'ll create 100s of videos - pick something you won\'t burn out on' },
              { step: 4, question: 'Is there monetization potential?', action: 'Research: Are brands in this space? Are there products to affiliate? Can you sell your own products?', why: 'Followers don\'t pay bills - monetization does' },
              { step: 5, question: 'Can you stand out?', action: 'Study top 20 creators in niche. Find gaps, unique angles, underserved audiences.', why: 'Being 10th best finance creator is better than 1,000th beauty creator' },
            ].map((item) => (
              <div key={item.step} className="p-5 bg-neutral-50 rounded-lg">
                <div className="flex gap-4 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-tiktok-pink text-white flex items-center justify-center font-bold">{item.step}</div>
                  <h3 className="font-semibold text-neutral-900 pt-2">{item.question}</h3>
                </div>
                <p className="text-body-sm text-neutral-700 mb-2"><strong>Action:</strong> {item.action}</p>
                <p className="text-body-xs text-neutral-600 italic">{item.why}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Top TikTok Niches Analysis</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-body-sm">
              <thead>
                <tr className="border-b-2 border-neutral-300">
                  <th className="text-left py-3 px-4">Niche</th>
                  <th className="text-left py-3 px-4">Monetization</th>
                  <th className="text-left py-3 px-4">Competition</th>
                  <th className="text-left py-3 px-4">Audience Quality</th>
                  <th className="text-left py-3 px-4">Entry Barrier</th>
                </tr>
              </thead>
              <tbody>
                {topNiches.map((niche, idx) => (
                  <tr key={idx} className="border-b border-neutral-100">
                    <td className="py-3 px-4 font-semibold text-neutral-900">{niche.name}</td>
                    <td className="py-3 px-4 text-green-700 font-semibold">{niche.monetization}</td>
                    <td className="py-3 px-4 text-neutral-700">{niche.competition}</td>
                    <td className="py-3 px-4 text-neutral-700 text-xs">{niche.audience}</td>
                    <td className="py-3 px-4 text-neutral-600 text-xs">{niche.barrier}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Niche vs Broad Content</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-green-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">✅ Benefits of Niche Content</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                <li>• Easier to establish authority</li>
                <li>• Higher-value brand deals (targeted audience)</li>
                <li>• Better engagement rates</li>
                <li>• Clearer content strategy</li>
                <li>• Easier to monetize (specific products/services)</li>
                <li>• Less competition than "general lifestyle"</li>
              </ul>
            </div>
            <div className="p-5 bg-red-50 rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-3">❌ Challenges of Niche Content</h3>
              <ul className="space-y-2 text-neutral-700">
                <li>• Smaller potential audience</li>
                <li>• Can feel limiting creatively</li>
                <li>• May pigeonhole you long-term</li>
                <li>• Requires genuine expertise</li>
                <li>• Harder to pivot if you change interests</li>
              </ul>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-body-sm text-neutral-800">
              <strong>Best Approach:</strong> Start niche to build authority and monetize, then gradually expand to related topics as you grow. "Finance creator" → "Finance + entrepreneurship" → "Wealth building lifestyle"
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
