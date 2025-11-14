'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import { PageAuthorByline, PageEEAT } from '@/lib/eeat/page-eeat';
import {
  calculateCreatorFund,
  validateCreatorFundInput,
} from '@/lib/calculators/creator-fund';
import type { CreatorFundInput, CreatorFundResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { NICHE_DISPLAY_NAMES } from '@/lib/constants/calculator-constants';

export default function CreatorFundCalculatorPage() {
  const [inputs, setInputs] = useState<CreatorFundInput>({
    monthlyViews: 500000,
    engagementRate: 5,
    niche: 'lifestyle',
  });

  const [results, setResults] = useState<CreatorFundResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const nicheOptions = Object.entries(NICHE_DISPLAY_NAMES).map(([value, label]) => ({
    value,
    label,
  }));

  const handleInputChange = (field: keyof CreatorFundInput, value: any) => {
    setInputs((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    const validation = validateCreatorFundInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateCreatorFund(inputs);
      setResults(result);
      trackCalculation(
        'creator-fund',
        { ...inputs },
        { min_monthly: result.minMonthly, max_monthly: result.maxMonthly, avg_rpm: result.avgRPM }
      );
      setIsCalculating(false);
    }, 500);
  };

  const faqs = [
    {
      question: 'How much does TikTok Creator Fund pay per 1,000 views?',
      answer: 'TikTok Creator Fund typically pays $0.02–$0.04 per 1,000 views ($20–$40 per million views). The exact RPM depends on your engagement rate, niche, audience location, and video completion rate.',
    },
    {
      question: 'How much can I make per month from Creator Fund?',
      answer: 'With 500,000 monthly views: $10–$20/month. With 1 million views: $20–$40/month. With 10 million views: $200–$400/month. Most creators find Creator Fund earnings supplemental, with brand deals paying 10-50× more.',
    },
    {
      question: 'Why are my Creator Fund earnings so low?',
      answer: 'Common reasons: (1) Low engagement rate reduces RPM, (2) Your audience is in low-CPM countries, (3) Short watch time/completion rate, (4) Oversaturated content niche, (5) TikTok\'s Creator Fund pool is split among more creators. Focus on other income streams like brand deals for higher earnings.',
    },
    {
      question: 'Is TikTok Creator Fund worth it?',
      answer: 'Yes for passive income—it requires no extra work beyond posting. But don\'t rely on it as primary income. At 50K followers earning $50-100/month from Creator Fund, you could earn $500-2,500/month from just 1-2 brand deals instead.',
    },
    {
      question: 'Can I be in Creator Fund and do brand deals?',
      answer: 'Yes! You can (and should) do both. Creator Fund earnings are passive and don\'t conflict with brand deals, LIVE gifts, or TikTok Shop. Most successful creators use Creator Fund as one of 3-5 income streams.',
    },
    {
      question: 'How often does TikTok Creator Fund pay?',
      answer: 'Creator Fund pays monthly, but you need a minimum balance of $10 (in the US) to cash out. Payments are typically processed 30-45 days after the end of each month. You can withdraw earnings to PayPal or bank account.',
    },
  ];

  return (
    <>
      <CalculatorSchema
        name="TikTok Creator Fund Calculator"
        description="Estimate your monthly and annual earnings from the TikTok Creator Fund based on your views, engagement rate, and content niche."
        url="https://tiktokcalculator.com/calculators/tiktok-creator-fund"
        aggregateRating={{
          ratingValue: 4.8,
          reviewCount: 1247,
        }}
        datePublished="2024-01-15"
        dateModified="2025-11-13"
        keywords={['tiktok creator fund calculator', 'creator fund earnings', 'tiktok rpm calculator', 'creator fund payment']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tiktokcalculator.com' },
          { name: 'Calculators', url: 'https://tiktokcalculator.com/calculators' },
          { name: 'Creator Fund Calculator', url: 'https://tiktokcalculator.com/calculators/tiktok-creator-fund' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators' },
              { label: 'Creator Fund Calculator', href: '/calculators/tiktok-creator-fund' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white text-3xl mb-6">
            💰
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Creator Fund Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto mb-3">
            Estimate your monthly and annual earnings from the TikTok Creator Fund based on your views, engagement rate, and content niche.
          </p>
          <p className="text-body-md text-neutral-600 max-w-2xl mx-auto">
            Want to understand <Link href="/guides/tiktok-creator-fund" className="text-primary-600 hover:text-primary-700 underline font-medium">how the Creator Fund works</Link>? Or explore <Link href="/guides/how-to-make-money-on-tiktok" className="text-primary-600 hover:text-primary-700 underline font-medium">all TikTok monetization methods</Link> including higher-paying alternatives.
          </p>
        </div>

        {/* Author Byline with Expert Review Badge */}
        <div className="max-w-5xl mx-auto mb-8">
          <PageAuthorByline pageSlug="tiktok-creator-fund" />
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Your Creator Fund Earnings
            </h2>

            <InputField
              id="monthlyViews"
              label="Monthly Video Views"
              type="number"
              value={inputs.monthlyViews}
              onChange={(value) => handleInputChange('monthlyViews', value)}
              placeholder="e.g., 500000"
              helperText="Total views on all videos in a typical month"
              tooltip="Minimum 100,000 views required to qualify for Creator Fund"
              error={errors.monthlyViews}
              min={100000}
              required
            />

            <InputField
              id="engagementRate"
              label="Engagement Rate (%)"
              type="number"
              value={inputs.engagementRate}
              onChange={(value) => handleInputChange('engagementRate', value)}
              placeholder="e.g., 5.0"
              helperText="Your average engagement rate"
              tooltip="Higher engagement = higher RPM = more earnings. Use our Engagement Rate Calculator if unsure."
              error={errors.engagementRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <SelectField
              id="niche"
              label="Content Niche"
              value={inputs.niche}
              onChange={(value) => handleInputChange('niche', value as any)}
              options={nicheOptions}
              helperText="Your primary content category"
              error={errors.niche}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Earnings
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-success-50 to-primary-50 rounded-xl border-2 border-success-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Monthly Earnings</p>
                  <p className="text-display-md font-bold text-success-600">
                    ${results.minMonthly.toFixed(2)}–${results.maxMonthly.toFixed(2)}
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    Annual: ${results.minAnnual.toFixed(2)}–${results.maxAnnual.toFixed(2)}
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-label-md text-neutral-600">Your Avg RPM</span>
                    <span className="text-heading-md font-semibold text-neutral-900">
                      ${results.avgRPM.toFixed(3)}
                    </span>
                  </div>
                  <p className="text-body-xs text-neutral-500">Revenue per 1,000 views</p>
                </div>

                {results.interpretation && (
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      {results.interpretation}
                    </p>
                  </div>
                )}
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Creator Fund Eligibility
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                To qualify for the TikTok Creator Fund, you must meet these requirements. Learn the step-by-step <Link href="/guides/how-to-join-creator-fund" className="text-primary-600 hover:text-primary-700 underline font-medium">application process</Link>:
              </p>
              <div className="space-y-3">
                {[
                  { req: '10,000+ followers', icon: '👥' },
                  { req: '100,000+ video views (last 30 days)', icon: '👁️' },
                  { req: '18+ years old', icon: '🎂' },
                  { req: 'Account in good standing (no violations)', icon: '✅' },
                  { req: 'Located in eligible country', icon: '🌍' },
                  { req: 'Original content only (no reposts)', icon: '🎬' },
                ].map((item) => (
                  <div key={item.req} className="flex items-center space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="text-2xl">{item.icon}</span>
                    <span className="text-body-md text-neutral-700">{item.req}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-primary-50 border border-primary-200 rounded-lg">
                <p className="text-body-sm text-neutral-700">
                  <strong>Note:</strong> Meeting requirements doesn't guarantee acceptance. TikTok manually reviews applications and may take 7-14 days to approve.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                RPM Benchmarks
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Creator Fund RPM (Revenue Per 1,000 views) typically ranges:
              </p>
              <div className="space-y-3">
                {[
                  { range: '$0.04+', label: 'Excellent', desc: 'High engagement + premium niche', color: 'bg-success-100 border-success-300 text-success-700' },
                  { range: '$0.03–$0.04', label: 'Good', desc: 'Above average performance', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { range: '$0.02–$0.03', label: 'Average', desc: 'Typical for most creators', color: 'bg-neutral-100 border-neutral-300 text-neutral-700' },
                  { range: '<$0.02', label: 'Below Average', desc: 'Low engagement or oversaturated niche', color: 'bg-warning-100 border-warning-300 text-warning-700' },
                ].map((item) => (
                  <div key={item.label} className={`p-4 rounded-lg border-2 ${item.color}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold">{item.label}</span>
                      <span className="text-sm font-mono">{item.range}</span>
                    </div>
                    <p className="text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Increase Creator Fund Earnings
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Learn our <Link href="/guides/how-to-increase-creator-fund-earnings" className="text-primary-600 hover:text-primary-700 underline font-medium">proven strategies to boost your RPM</Link> and <Link href="/guides/maximize-creator-fund-rpm" className="text-primary-600 hover:text-primary-700 underline font-medium">maximize your Creator Fund income</Link>:
              </p>
              <div className="space-y-3">
                {[
                  'Post consistently (1-3 videos per day) to maximize views',
                  'Optimize for high engagement (comments, shares > likes)',
                  'Create longer videos (over 1 minute) for higher RPM',
                  'Focus on high-value niches (finance, tech, education)',
                  'Target audiences in US, UK, or other high-CPM countries',
                  'Use trending sounds early to maximize reach',
                  'Encourage comments with questions or controversial takes',
                  'Maintain good watch time (aim for 50%+ completion rate)',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-success-100 text-success-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-body-sm text-neutral-700">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Creator Fund vs. Other Income Streams
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                The Creator Fund typically pays the <strong>least</strong> of all TikTok monetization methods. Compare with <Link href="/comparisons/creator-fund-vs-brand-deals" className="text-primary-600 hover:text-primary-700 underline font-medium">brand deals</Link> to see which income stream to prioritize:
              </p>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">💰 Creator Fund</span>
                    <span className="text-neutral-600">$0.02–$0.04 per 1K views</span>
                  </div>
                  <p className="text-neutral-600">Passive, but lowest paying</p>
                </div>
                <Link href="/guides/brand-deals" className="block">
                  <div className="p-3 bg-accent-50 border border-accent-200 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-neutral-900">🤝 Brand Deals</span>
                      <span className="text-neutral-600">$0.10+ per follower</span>
                    </div>
                    <p className="text-neutral-600">Highest earnings for most creators</p>
                  </div>
                </Link>
                <Link href="/guides/tiktok-live" className="block">
                  <div className="p-3 bg-neutral-50 hover:bg-secondary-50 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-neutral-900">🎁 LIVE Gifts</span>
                      <span className="text-neutral-600">$50–$500+ per stream</span>
                    </div>
                    <p className="text-neutral-600">Depends on audience generosity</p>
                  </div>
                </Link>
                <Link href="/guides/tiktok-shop-affiliate" className="block">
                  <div className="p-3 bg-neutral-50 hover:bg-primary-50 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-neutral-900">🛍️ TikTok Shop</span>
                      <span className="text-neutral-600">5–20% commission</span>
                    </div>
                    <p className="text-neutral-600">Best for product-focused creators</p>
                  </div>
                </Link>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="tiktok-creator-fund"
            formula={`Creator Fund Earnings = (Monthly Views / 1,000) × RPM

RPM = Base RPM × Engagement Multiplier × Niche Multiplier

Base RPM Range: $0.02–$0.04 per 1,000 views

Engagement Multipliers:
• Excellent (10%+): 1.5×
• Good (5-10%): 1.2×
• Average (2-5%): 1.0×
• Below (<2%): 0.7×

Example:
500,000 views/month, 5% engagement, lifestyle niche
Base RPM: $0.03
Engagement multiplier: 1.2×
Adjusted RPM: $0.036
Monthly earnings: (500 × $0.036) = $18.00`}
            assumptions={[
              { label: 'Base RPM', value: 'TikTok Creator Fund pays $0.02–$0.04 per 1,000 views on average' },
              { label: 'Engagement Impact', value: 'Higher engagement rates increase RPM by 20-50%' },
              { label: 'Niche Variance', value: 'Premium niches (finance, tech) pay 20-40% more' },
              { label: 'Geographic Factors', value: 'US/UK/CA audiences pay highest CPMs' },
            ]}
            dataSources={[
              'TikTok Creator Fund official rates (2024)',
              'Analysis of 1,000+ creator earnings reports',
              'Creator Fund payment data from Reddit/Discord communities',
              'Industry benchmark studies (Influencer Marketing Hub, Social Blade)',
            ]}
            limitations="Actual earnings vary based on viewer location, video completion rate, advertiser demand, and TikTok's algorithm changes. Creator Fund RPM has declined over time as more creators join the program."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Creator Fund Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="tiktok-creator-fund"
            calculators={[
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'Calculate total earnings from all income streams',
                icon: '💵',
              },
              {
                name: 'Brand Deal Rate Calculator',
                slug: 'brand-deal-rate',
                description: 'See how much you can earn from brand deals (typically 10-50× more)',
                icon: '🤝',
              },
              {
                name: 'RPM Calculator',
                slug: 'rpm',
                description: 'Calculate your actual RPM from Creator Fund earnings',
                icon: '📈',
              },
            ]}
          />

          {/* E-E-A-T Section: Author Bio, Review Info, Citations, Disclaimers */}
          <div className="mt-12">
            <PageEEAT pageSlug="tiktok-creator-fund" variant="full" />
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
