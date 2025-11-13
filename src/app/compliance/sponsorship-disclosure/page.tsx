import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok Sponsorship Disclosure Guidelines: FTC Compliance (2025)',
  description: 'Complete FTC compliance guide for TikTok creators. How to properly disclose sponsored content, legal requirements, and avoid violations.',
  keywords: ['tiktok ftc compliance', 'sponsorship disclosure', 'how to disclose sponsored content', 'tiktok ad disclosure'],
};

export default function SponsorshipDisclosurePage() {
  const faqs = [
    {
      question: 'Do I need to disclose in every video if I\'m a long-term ambassador?',
      answer: 'Yes. Even if followers "know" you\'re an ambassador, each video must disclose the relationship. New viewers may not know.',
    },
    {
      question: 'Can I just say "gifted" instead of "ad"?',
      answer: 'Legally yes, but #ad is clearer and safer. "Gifted" can be ambiguous (gift from a friend vs brand).',
    },
    {
      question: 'What if I genuinely love the product—do I still disclose?',
      answer: 'Yes! Disclosure isn\'t about whether you like the product; it\'s about whether you received value (payment, free product) from the brand.',
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/guides">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">Sponsorship Disclosure</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Sponsorship Disclosure Guidelines
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete FTC compliance guide: How to properly disclose sponsored content
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>⚖️ Legal Requirements</span>
            <span>✅ FTC Compliant</span>
            <span>📅 Updated: November 2025</span>
          </div>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card className="bg-red-50 border-red-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why Disclosure Matters</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">⚖️ Legal Requirements (FTC)</h3>
              <p className="text-body-md text-neutral-700">
                The Federal Trade Commission requires clear disclosure of any "material connection" between creator and brand.
                If you received anything of value (money, free products, affiliate commissions), you must disclose it.
              </p>
              <p className="text-body-sm text-red-700 mt-2">
                <strong>Penalties:</strong> $10,000–$43,280 per violation
              </p>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-neutral-900 mb-2">🤝 Ethical Reasons</h3>
              <p className="text-body-md text-neutral-700">
                Beyond legal compliance: maintains audience trust, preserves your credibility, protects you legally, and sets industry standards.
              </p>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">The Triple Disclosure Method (Best Practice)</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            For maximum compliance and transparency, use all three disclosure methods:
          </p>
          <div className="space-y-4">
            {disclosureMethods.map((method, idx) => (
              <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {idx + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-neutral-900 mb-2">{method.title}</h3>
                    <p className="text-body-md text-neutral-700 mb-2">{method.description}</p>
                    <div className="p-3 bg-white rounded border border-green-300">
                      <p className="text-body-sm text-neutral-600"><strong>Example:</strong></p>
                      <p className="text-body-sm text-neutral-800">{method.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">What Content Requires Disclosure</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold text-green-800 mb-3">✅ Always Disclose</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                {requiresDisclosure.map((item, idx) => (
                  <li key={idx} className="p-2 bg-green-50 rounded">• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-800 mb-3">❌ No Disclosure Needed</h3>
              <ul className="space-y-2 text-body-sm text-neutral-700">
                {noDisclosureNeeded.map((item, idx) => (
                  <li key={idx} className="p-2 bg-neutral-50 rounded">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>

        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Common Disclosure Mistakes</h2>
          <div className="space-y-3">
            {commonMistakes.map((mistake, idx) => (
              <div key={idx} className="p-4 bg-red-50 rounded-lg border border-red-200">
                <h3 className="font-semibold text-neutral-900 mb-2">❌ {mistake.title}</h3>
                <p className="text-body-sm text-neutral-700 mb-2"><strong>Problem:</strong> {mistake.problem}</p>
                <p className="text-body-sm text-green-800"><strong>Fix:</strong> {mistake.fix}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">International Disclosure Requirements</h2>
          <div className="space-y-3">
            {internationalRules.map((rule, idx) => (
              <div key={idx} className="p-4 bg-white rounded-lg">
                <h3 className="font-semibold text-neutral-900 mb-2">{rule.country}</h3>
                <p className="text-body-sm text-neutral-700 mb-2"><strong>Standard:</strong> {rule.standard}</p>
                <p className="text-body-sm text-neutral-600"><strong>Acceptable:</strong> {rule.acceptable}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-yellow-50 border-yellow-200">
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Consequences of Not Disclosing</h2>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">FTC Enforcement</h3>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• Warning letter (first offense)</li>
                <li>• Fines: $43,280 per violation (maximum)</li>
                <li>• Required training on endorsement guidelines</li>
                <li>• Public record of violation</li>
              </ul>
            </div>
            <div className="p-4 bg-white rounded-lg">
              <h3 className="font-semibold text-red-700 mb-2">TikTok Enforcement</h3>
              <ul className="space-y-1 text-body-sm text-neutral-700">
                <li>• Content removal</li>
                <li>• Account suspension or ban</li>
                <li>• Loss of Creator Marketplace access</li>
              </ul>
            </div>
          </div>
        </Card>

        <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Frequently Asked Questions</h2>
        <FAQSection pageName="Sponsorship Disclosure" faqs={faqs} />

        <Card>
          <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">Related Resources</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/guides/how-to-get-brand-deals-on-tiktok" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-1">🤝 How to Get Brand Deals</h4>
              <p className="text-body-sm text-neutral-700">Complete guide to TikTok sponsorships</p>
            </Link>
            <Link href="/resources/brand-deal-contract" className="p-4 bg-neutral-50 rounded-lg hover:bg-neutral-100">
              <h4 className="font-semibold text-neutral-900 mb-1">📄 Brand Deal Contract Template</h4>
              <p className="text-body-sm text-neutral-700">Free customizable contract with disclosure clause</p>
            </Link>
          </div>
        </Card>
      </div>
    </div>
  );
}

const disclosureMethods = [
  {
    title: 'TikTok\'s "Branded Content" Toggle',
    description: 'Use TikTok\'s official branded content feature. Before posting, enable "Brand Content" toggle and add brand name.',
    example: 'Viewers see: "Paid partnership with [Brand]" label at top of video',
  },
  {
    title: '#ad or #sponsored in Caption',
    description: 'Include #ad or #sponsored at the BEGINNING of your caption (not buried at end).',
    example: '#ad Loving this new skincare routine from @BrandName! Here\'s why it works…',
  },
  {
    title: 'Verbal Disclosure in Video',
    description: 'Say out loud in the video that content is sponsored.',
    example: '"Thanks to [Brand] for sponsoring today\'s video!" or "This video is in partnership with [Brand]."',
  },
];

const requiresDisclosure = [
  'Paid sponsorships (brand pays you money)',
  'Free products/services worth over ~$50',
  'Affiliate links (you earn commission)',
  'Brand partnerships/ambassadorships',
  'Gifted products you choose to promote',
  'Employee promoting own brand',
];

const noDisclosureNeeded = [
  'Products you purchased yourself',
  'General education (no specific brand)',
  'Unsponsored comparisons',
  'Unsolicited gift under $50 (not promoted)',
];

const commonMistakes = [
  {
    title: 'Disclosure Buried in Caption',
    problem: 'Disclosure too far down; viewers may not see it without clicking "more"',
    fix: 'Put #ad at the very beginning of caption',
  },
  {
    title: 'Using Vague Terms',
    problem: '#partner or #collab could mean unpaid collaboration',
    fix: 'Use #ad or #sponsored explicitly',
  },
  {
    title: 'Not Disclosing Gifted Products',
    problem: 'Thinking free products don\'t require disclosure',
    fix: 'Disclose with #gifted or #ad (safer)',
  },
];

const internationalRules = [
  {
    country: 'United States (FTC)',
    standard: '"Clear and conspicuous" disclosure',
    acceptable: '#ad, #sponsored, "Paid partnership" label, Verbal disclosure',
  },
  {
    country: 'United Kingdom (ASA)',
    standard: '#Ad or "Ad" label required',
    acceptable: '#Ad (capital A), "Ad" written out, TikTok Branded Content toggle',
  },
  {
    country: 'European Union',
    standard: 'Varies by country, disclosure must be clear',
    acceptable: 'Local language (#Werbung in Germany), most use #ad',
  },
];
