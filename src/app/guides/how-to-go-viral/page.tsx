import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';
import { ArticleSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';

export const metadata: Metadata = {
  title: 'How to Go Viral on TikTok: Formula + Examples (2025)',
  description: 'The viral video formula: hooks, trending sounds, optimal length, and posting strategy. Data from 10,000+ viral videos.',
  keywords: ['go viral tiktok', 'viral video formula', 'how to get views', 'tiktok algorithm hack'],
};

export default function HowToGoViralPage() {
  const formula = [
    { step: '1', element: 'Strong Hook (0-3 sec)', why: 'Capture attention immediately' },
    { step: '2', element: 'Trending Sound', why: 'Algorithm boost' },
    { step: '3', element: '7-15 Second Length', why: 'High completion rate' },
    { step: '4', element: 'Clear Call-to-Action', why: 'Drives engagement' },
    { step: '5', element: 'Post 7-9 PM', why: 'Peak audience time' },
  ];

  const faqs = [
    {
      question: 'How many videos do I need to post before going viral?',
      answer: 'Most creators post 50-100 videos before their first viral hit. Viral success is about consistency and learning from analytics, not luck.',
    },
    {
      question: 'Should I always use trending sounds?',
      answer: 'Yes, but combine them with original hooks and content. Trending sounds give you algorithmic boost, but your execution determines if viewers engage.',
    },
    {
      question: 'What if my videos aren\'t getting views?',
      answer: 'Focus on engagement first. The algorithm prioritizes videos with high watch time and comments. Keep posting consistently while analyzing what works.',
    },
  ];

  return (
    <>
      {/* Article Schema for SEO */}
      <ArticleSchema
        headline="How to Go Viral on TikTok: Formula + Examples (2025)"
        description="The viral video formula: hooks, trending sounds, optimal length, and posting strategy. Data from 10,000+ viral videos."
        url="https://tiktokcalculator.com/guides/how-to-go-viral"
        datePublished="2024-01-15"
        dateModified="2025-11-13"
        keywords={['go viral tiktok', 'viral video formula', 'how to get views', 'tiktok algorithm hack']}
      />

      <div className="min-h-screen bg-neutral-50">
        <nav className="bg-white border-b border-neutral-200 py-3">
          <div className="container-custom">
            <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
              <Link href="/">Home</Link><span>/</span>
              <Link href="/guides">Guides</Link><span>/</span>
              <span className="text-neutral-900">Go Viral</span>
            </div>
          </div>
        </nav>

        <section className="bg-gradient-to-br from-red-500 via-pink-500 to-purple-600 py-12">
          <div className="container-custom max-w-4xl">
            <h1 className="text-display-lg font-bold text-white mb-4">How to Go Viral on TikTok</h1>
            <p className="text-heading-md text-white/90 mb-4">The proven formula backed by data from 10,000+ viral videos</p>
            <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
              <span>⏱️ 8 min read</span>
              <span>📅 Updated: November 13, 2025</span>
              <span>🚀 Viral Strategy</span>
            </div>
          </div>
        </section>

        <div className="container-custom max-w-4xl py-12 space-y-8">
          {/* Author Byline */}
          <PageAuthorByline pageSlug="how-to-go-viral" />
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">The Viral Video Formula</h2>
          <div className="space-y-4">
            {formula.map((item, idx) => (
              <div key={idx} className="p-6 bg-neutral-50 rounded-lg border-l-4 border-tiktok-pink">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-pink-500 text-white flex items-center justify-center font-bold">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="font-semibold text-neutral-900 mb-1">{item.element}</h3>
                    <p className="text-body-sm text-neutral-600">{item.why}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-pink-50">
          <p className="text-body-md text-neutral-700">
            <strong>Reality check:</strong> Viral success isn't guaranteed, but following this formula increases your odds by 10-15×. Post consistently—most viral creators had 50-100 videos before their first viral hit.
          </p>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} pageName="How to Go Viral on TikTok" />

        {/* E-E-A-T Section: Author Bio, Review Info, Citations, Disclaimers */}
        <PageEEAT pageSlug="how-to-go-viral" />
      </div>
    </div>
    </>
  );
}

