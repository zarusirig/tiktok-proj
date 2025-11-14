import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok Creator Fund Eligible Countries (2025): Complete List',
  description: 'Complete list of TikTok Creator Fund eligible countries with requirements, payment methods, and alternatives for ineligible regions.',
  keywords: ['tiktok creator fund eligible countries', 'creator fund countries', 'creator fund availability', 'is creator fund in my country', 'tiktok monetization by country'],
};

export default function CreatorFundEligibleCountriesPage() {
  const faqs = [
    {
      question: 'Can I use VPN to access Creator Fund from ineligible country?',
      answer: 'No. TikTok detects actual location through multiple methods. VPN use violates Terms of Service and results in account suspension. Don\'t risk your account.',
    },
    {
      question: 'If I move to an eligible country, can I join Creator Fund?',
      answer: 'Yes, if you: (1) Legally reside in eligible country, (2) Have local payment method (bank account or PayPal), (3) Provide valid tax documentation, (4) Meet all other requirements (10K followers, 100K views).',
    },
    {
      question: 'Can I apply if I have dual citizenship?',
      answer: 'Yes. Apply using citizenship of eligible country. Provide appropriate tax documentation and payment method from that country.',
    },
    {
      question: 'Does TikTok announce new country eligibility in advance?',
      answer: 'Usually no. Most expansions are announced 1–2 weeks before launch, or simultaneously with launch.',
    },
    {
      question: 'How can I stay updated on new country eligibility?',
      answer: 'Follow TikTok Newsroom, join TikTok creator communities (Reddit, Facebook groups), enable notifications in TikTok Creator Portal, and check this page regularly (we update within 24 hours of TikTok announcements).',
    },
  ];

  const eligibleCountries = [
    {
      country: 'United States',
      flag: '🇺🇸',
      region: 'North America',
      launchDate: 'July 2020',
      minAge: '18+',
      minFollowers: '10,000',
      minViews: '100,000 (30 days)',
      paymentMethods: 'PayPal, Bank Transfer (ACH)',
      minPayout: '$10',
      taxRequirements: 'W-9 form, SSN or EIN required',
      avgRPM: '$0.02–$0.04',
    },
    {
      country: 'Canada',
      flag: '🇨🇦',
      region: 'North America',
      launchDate: 'May 2024',
      minAge: '18+',
      minFollowers: '10,000',
      minViews: '100,000 (30 days)',
      paymentMethods: 'PayPal, Bank Transfer',
      minPayout: 'CAD $15',
      taxRequirements: 'SIN required',
      avgRPM: '$0.018–$0.035 (CAD)',
    },
    {
      country: 'United Kingdom',
      flag: '🇬🇧',
      region: 'Europe',
      launchDate: 'September 2020',
      minAge: '18+',
      minFollowers: '10,000',
      minViews: '100,000 (30 days)',
      paymentMethods: 'PayPal, Bank Transfer (BACS)',
      minPayout: '£10',
      taxRequirements: 'National Insurance Number',
      avgRPM: '$0.02–$0.04',
    },
    {
      country: 'Germany',
      flag: '🇩🇪',
      region: 'Europe',
      launchDate: 'September 2020',
      minAge: '18+',
      minFollowers: '10,000',
      minViews: '100,000 (30 days)',
      paymentMethods: 'PayPal, Bank Transfer (SEPA)',
      minPayout: '€10',
      taxRequirements: 'Tax ID required',
      avgRPM: '$0.018–$0.035',
    },
    {
      country: 'France',
      flag: '🇫🇷',
      region: 'Europe',
      launchDate: 'September 2020',
      minAge: '18+',
      minFollowers: '10,000',
      minViews: '100,000 (30 days)',
      paymentMethods: 'PayPal, Bank Transfer (SEPA)',
      minPayout: '€10',
      taxRequirements: 'Tax ID required',
      avgRPM: '$0.018–$0.035',
    },
    {
      country: 'Italy',
      flag: '🇮🇹',
      region: 'Europe',
      launchDate: 'September 2020',
      minAge: '18+',
      minFollowers: '10,000',
      minViews: '100,000 (30 days)',
      paymentMethods: 'PayPal, Bank Transfer (SEPA)',
      minPayout: '€10',
      taxRequirements: 'Tax ID required (Codice Fiscale)',
      avgRPM: '$0.015–$0.03',
    },
    {
      country: 'Spain',
      flag: '🇪🇸',
      region: 'Europe',
      launchDate: 'September 2020',
      minAge: '18+',
      minFollowers: '10,000',
      minViews: '100,000 (30 days)',
      paymentMethods: 'PayPal, Bank Transfer (SEPA)',
      minPayout: '€10',
      taxRequirements: 'Tax ID required (NIF/NIE)',
      avgRPM: '$0.015–$0.03',
    },
    {
      country: 'Australia',
      flag: '🇦🇺',
      region: 'Asia-Pacific',
      launchDate: 'Coming Q1 2026 (confirmed)',
      minAge: '18+ (expected)',
      minFollowers: '10,000 (expected)',
      minViews: '100,000 (expected)',
      paymentMethods: 'PayPal, Bank Transfer (expected)',
      minPayout: 'AUD $15 (expected)',
      taxRequirements: 'TFN required (expected)',
      avgRPM: '$0.02–$0.038 (AUD) (expected)',
    },
  ];

  const ineligibleCountries = [
    {
      country: 'India',
      flag: '🇮🇳',
      status: 'Not available',
      reason: 'TikTok is banned in India (since June 2020)',
      alternative: 'Instagram Reels monetization available',
      rumoredLaunch: 'N/A',
    },
    {
      country: 'Philippines',
      flag: '🇵🇭',
      status: 'Not available (as of November 2025)',
      reason: 'Region not yet included in expansion',
      alternative: 'Focus on brand deals, LIVE gifts, TikTok Shop (when available)',
      rumoredLaunch: 'Possibly Q3-Q4 2026',
    },
    {
      country: 'Mexico',
      flag: '🇲🇽',
      status: 'Not available (as of November 2025)',
      reason: 'Region not yet included in expansion',
      alternative: 'Brand deals, LIVE gifts, TikTok Shop',
      rumoredLaunch: 'Possibly H2 2026',
    },
    {
      country: 'Brazil',
      flag: '🇧🇷',
      status: 'Not available',
      reason: 'Region not yet included in expansion',
      alternative: 'Focus on brand deals and LIVE gifts',
      rumoredLaunch: 'Possibly 2027',
    },
    {
      country: 'Indonesia',
      flag: '🇮🇩',
      status: 'Not available',
      reason: 'Region not yet included in expansion',
      alternative: 'TikTok Shop Affiliate (available), brand deals',
      rumoredLaunch: 'Unknown',
    },
    {
      country: 'Singapore',
      flag: '🇸🇬',
      status: 'Not available',
      reason: 'Region not yet included in expansion',
      alternative: 'Brand deals (high rates due to affluent market)',
      rumoredLaunch: 'Possibly Q2-Q3 2026',
    },
  ];

  const alternatives = [
    {
      title: 'Brand Deals and Sponsorships',
      availability: 'Global (any country)',
      earningPotential: '10–50× higher than Creator Fund per video',
      howToStart: [
        'Build engaged audience (even 5K followers can get deals)',
        'Create professional media kit',
        'Use TikTok Brand Deal Rate Calculator to price yourself',
        'Reach out to brands directly or join influencer platforms',
      ],
    },
    {
      title: 'TikTok LIVE Gifts',
      availability: 'Most countries (18+, 1,000 followers)',
      earningPotential: 'Varies widely (some creators earn $100–$1,000+ per LIVE)',
      howToStart: [
        'Reach 1,000 followers',
        'Go LIVE regularly (3–5× per week)',
        'Build community and encourage gifts',
        'Use TikTok LIVE Earnings Calculator',
      ],
    },
    {
      title: 'TikTok Shop and Affiliate',
      availability: 'US, UK, select Asian countries (expanding)',
      earningPotential: 'Commission-based (5–20% per sale)',
      howToStart: [
        'Check if TikTok Shop is available in your region',
        'Join as affiliate or seller',
        'Promote products in videos and LIVE streams',
        'Use TikTok Shop Commission Calculator',
      ],
    },
    {
      title: 'Drive Traffic to Other Platforms',
      availability: 'Global',
      earningPotential: 'Unlimited (YouTube AdSense, Patreon, courses, etc.)',
      howToStart: [
        'Use TikTok to grow, monetize elsewhere',
        'Link Instagram, YouTube, Patreon in bio',
        'Create valuable content that drives conversions',
        'Build email list for future monetization',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/reference" className="hover:text-neutral-900 transition-colors">Reference</Link>
            <span>/</span>
            <span className="text-neutral-900">Creator Fund Eligible Countries</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok Creator Fund Eligible Countries (2025)
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Complete list with requirements, payment methods, and expansion timeline
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Updated: November 2025</span>
            <span>🌍 8 Countries Eligible</span>
            <span>📋 Reference Guide</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">

        {/* Introduction */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Introduction</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            The TikTok Creator Fund is available in select countries worldwide, with TikTok gradually expanding access to new regions. If you're wondering whether the Creator Fund is available in your country, this comprehensive reference guide provides the complete list of eligible countries, expansion timeline, and alternative monetization options for ineligible regions.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-neutral-900 mb-2">What you'll learn:</h3>
            <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
              <li>Complete list of Creator Fund eligible countries</li>
              <li>Requirements by region</li>
              <li>Payment methods available per country</li>
              <li>Upcoming expansions (rumored and confirmed)</li>
              <li>What to do if your country isn't eligible yet</li>
            </ul>
          </div>
        </Card>

        {/* Currently Eligible Countries */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Currently Eligible Countries (2025)</h2>
          <div className="space-y-6">
            {eligibleCountries.map((country, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-neutral-50 to-white rounded-lg border border-neutral-200 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{country.flag}</span>
                  <div>
                    <h3 className="text-heading-md font-bold text-neutral-900">{country.country}</h3>
                    <p className="text-body-sm text-neutral-600">{country.region} • Launched {country.launchDate}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="text-body-xs text-neutral-600 mb-1">Minimum Age</p>
                    <p className="text-body-sm font-semibold text-neutral-900">{country.minAge}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="text-body-xs text-neutral-600 mb-1">Minimum Followers</p>
                    <p className="text-body-sm font-semibold text-neutral-900">{country.minFollowers}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="text-body-xs text-neutral-600 mb-1">Minimum Views</p>
                    <p className="text-body-sm font-semibold text-neutral-900">{country.minViews}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="text-body-xs text-neutral-600 mb-1">Average RPM</p>
                    <p className="text-body-sm font-semibold text-green-600">{country.avgRPM}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="text-body-sm text-neutral-700"><strong>Payment Methods:</strong> {country.paymentMethods}</p>
                  <p className="text-body-sm text-neutral-700"><strong>Minimum Payout:</strong> {country.minPayout}</p>
                  <p className="text-body-sm text-neutral-700"><strong>Tax Requirements:</strong> {country.taxRequirements}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Countries NOT Currently Eligible */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Countries NOT Currently Eligible</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            High-demand countries with large creator communities that are not yet eligible:
          </p>
          <div className="space-y-4">
            {ineligibleCountries.map((country, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{country.flag}</span>
                  <div>
                    <h3 className="font-semibold text-neutral-900">{country.country}</h3>
                    <p className="text-body-sm text-red-600">{country.status}</p>
                  </div>
                </div>
                <div className="space-y-2 text-body-sm text-neutral-700">
                  <p><strong>Reason:</strong> {country.reason}</p>
                  <p><strong>Alternative:</strong> {country.alternative}</p>
                  <p><strong>Rumored Launch:</strong> {country.rumoredLaunch}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* How to Check Eligibility */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How to Check if Your Country is Eligible</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Method 1: Check TikTok Creator Tools</h3>
              <ol className="text-body-sm text-neutral-700 space-y-1 ml-4 list-decimal">
                <li>Open TikTok app</li>
                <li>Go to Profile → Menu (three lines) → Creator Tools</li>
                <li>Look for "TikTok Creator Fund" option</li>
                <li>If visible → Your country is eligible</li>
                <li>If not visible → Not yet available in your region</li>
              </ol>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Method 2: TikTok Creator Portal</h3>
              <ol className="text-body-sm text-neutral-700 space-y-1 ml-4 list-decimal">
                <li>Visit TikTok Creator Portal</li>
                <li>Select your country from dropdown</li>
                <li>Check if "Creator Fund" appears in monetization options</li>
              </ol>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">Method 3: Official TikTok Resources</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Check TikTok Newsroom for announcements</li>
                <li>Visit TikTok For Business regional pages</li>
                <li>Contact TikTok Creator Support (if you have 10K+ followers)</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Alternative Monetization Strategies */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">What to Do If Your Country Isn't Eligible</h2>
          <p className="text-body-md text-neutral-700 mb-6">
            Alternative monetization strategies that work globally:
          </p>
          <div className="space-y-6">
            {alternatives.map((alt, idx) => (
              <div key={idx} className="p-5 bg-gradient-to-br from-blue-50 to-white rounded-lg border border-blue-200">
                <h3 className="text-heading-md font-bold text-neutral-900 mb-3">{alt.title}</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="text-body-xs text-neutral-600 mb-1">Availability</p>
                    <p className="text-body-sm font-semibold text-neutral-900">{alt.availability}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="text-body-xs text-neutral-600 mb-1">Earning Potential</p>
                    <p className="text-body-sm font-semibold text-green-600">{alt.earningPotential}</p>
                  </div>
                </div>
                <div>
                  <p className="text-body-sm font-semibold text-neutral-900 mb-2">How to start:</p>
                  <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                    {alt.howToStart.map((step, stepIdx) => (
                      <li key={stepIdx}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Expansion Timeline */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Expansion Timeline and Predictions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
              <h3 className="font-semibold text-green-900 mb-2">Confirmed Expansions</h3>
              <p className="text-body-sm text-green-800"><strong>Q1 2026:</strong> 🇦🇺 Australia (beta already underway)</p>
            </div>
            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <h3 className="font-semibold text-blue-900 mb-2">Highly Likely (Based on TikTok Statements)</h3>
              <div className="text-body-sm text-blue-800 space-y-1">
                <p><strong>H1 2026:</strong> 🇲🇽 Mexico, 🇸🇬 Singapore, 🇵🇱 Poland, 🇸🇪 Sweden, 🇳🇴 Norway</p>
                <p><strong>H2 2026:</strong> 🇵🇭 Philippines, 🇦🇪 UAE, 🇸🇦 Saudi Arabia, 🇳🇱 Netherlands, 🇧🇪 Belgium</p>
                <p><strong>2027+:</strong> 🇧🇷 Brazil, 🇦🇷 Argentina, 🇨🇱 Chile, 🇿🇦 South Africa, 🇹🇭 Thailand</p>
              </div>
            </div>
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <h3 className="font-semibold text-red-900 mb-2">Unlikely in Near Future</h3>
              <p className="text-body-sm text-red-800">India (TikTok banned), China (different TikTok version - Douyin), Russia (geopolitical restrictions)</p>
            </div>
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} pageName="Creator Fund Eligible Countries" />

        {/* Next Steps */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Next Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">If your country IS eligible:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Learn <Link href="/guides/how-to-join-creator-fund-complete" className="text-blue-600 hover:underline">How to Join TikTok Creator Fund</Link> (step-by-step guide)</li>
                <li>Calculate potential earnings with <Link href="/calculators/tiktok-creator-fund" className="text-blue-600 hover:underline">Creator Fund Calculator</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">If your country is NOT eligible yet:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Focus on <Link href="/guides/how-to-get-brand-deals" className="text-blue-600 hover:underline">Brand Deals</Link> (available globally, pays better)</li>
                <li>Explore <Link href="/guides/tiktok-live-earnings-expectations" className="text-blue-600 hover:underline">TikTok LIVE Gifts</Link> monetization</li>
                <li>Prepare for Creator Fund by meeting requirements before launch</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Related Resources */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/calculators/tiktok-creator-fund" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">TikTok Creator Fund Calculator</h3>
              <p className="text-body-sm text-neutral-600">Estimate your potential earnings</p>
            </Link>
            <Link href="/guides/how-to-join-creator-fund-complete" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">How to Join Creator Fund</h3>
              <p className="text-body-sm text-neutral-600">Complete application guide</p>
            </Link>
            <Link href="/guides/how-to-get-brand-deals" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">How to Get Brand Deals</h3>
              <p className="text-body-sm text-neutral-600">Alternative monetization strategy</p>
            </Link>
            <Link href="/guides/tiktok-live-earnings-expectations" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">TikTok LIVE Earnings Guide</h3>
              <p className="text-body-sm text-neutral-600">Another monetization option</p>
            </Link>
          </div>
        </Card>

      </div>
    </div>
  );
}
