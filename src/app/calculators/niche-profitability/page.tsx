'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculateNicheProfitability,
  validateNicheProfitabilityInput,
} from '@/lib/calculators/niche-profitability';
import type {
  NicheProfitabilityInput,
  NicheProfitabilityResult,
  ContentNiche,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function NicheProfitabilityCalculatorPage() {
  const [inputs, setInputs] = useState<NicheProfitabilityInput>({
    niche: 'lifestyle',
    followers: 50000,
    monthlyViews: 1000000,
    engagementRate: 5,
  });

  const [results, setResults] = useState<NicheProfitabilityResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof NicheProfitabilityInput,
    value: any
  ) => {
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
    const validation = validateNicheProfitabilityInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateNicheProfitability(inputs);
      setResults(result);

      trackCalculation(
        'niche-profitability',
        { ...inputs },
        { estimatedMonthlyEarnings: result.estimatedMonthlyEarnings.min }
      );

      setIsCalculating(false);
    }, 500);
  };

  const nicheOptions = [
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'beauty-fashion', label: 'Beauty & Fashion' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'finance', label: 'Finance' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'food', label: 'Food' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'education', label: 'Education' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'tech', label: 'Tech' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Niche Profitability Calculator',
              href: '/calculators/niche-profitability',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🎯
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Niche Profitability Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Compare earning potential across different content niches. Choose the
            most profitable niche for your skills and audience.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Niche Profitability
            </h2>

            <SelectField
              id="niche"
              label="Content Niche"
              value={inputs.niche}
              onChange={(value) => handleInputChange('niche', value as ContentNiche)}
              options={nicheOptions}
              helperText="Your primary content category"
              error={errors.niche}
              required
            />

            <InputField
              id="followers"
              label="Follower Count"
              type="number"
              value={inputs.followers}
              onChange={(value) => handleInputChange('followers', value)}
              placeholder="e.g., 50000"
              helperText="Your TikTok followers"
              error={errors.followers}
              min={0}
              required
            />

            <InputField
              id="monthlyViews"
              label="Monthly Views"
              type="number"
              value={inputs.monthlyViews}
              onChange={(value) => handleInputChange('monthlyViews', value)}
              placeholder="e.g., 1000000"
              helperText="Total monthly video views"
              error={errors.monthlyViews}
              min={0}
              required
            />

            <InputField
              id="engagementRate"
              label="Engagement Rate (%)"
              type="number"
              value={inputs.engagementRate}
              onChange={(value) => handleInputChange('engagementRate', value)}
              placeholder="e.g., 5"
              helperText="Your average engagement rate"
              error={errors.engagementRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Profitability
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={{ value: results.estimatedMonthlyEarnings.min, min: results.estimatedMonthlyEarnings.min, max: results.estimatedMonthlyEarnings.max }}
                  type="range"
                  format="currency"
                  title="Monthly Earnings Estimate"
                  subtitle={`Niche multiplier: ${results.nicheMultiplier}x`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Niche Analysis
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">Niche Ranking</span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        #{results.nichRanking} of 11
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">Recommendation</span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.nicheMultiplier >= 2 ? 'Excellent' : results.nicheMultiplier >= 1.5 ? 'Good' : 'Average'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Niche Profitability Guide
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Different niches have vastly different monetization potential due to
                  CPM rates, brand deal demand, and audience purchasing power.
                </p>
                <p>
                  <strong>Top earning niches:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Finance:</strong> 3x multiplier - highest CPM and brand deals</li>
                  <li><strong>Tech:</strong> 2.5x - high-value audience and advertisers</li>
                  <li><strong>Beauty/Fashion:</strong> 2x - strong brand partnerships</li>
                  <li><strong>Entertainment/Comedy:</strong> 1x - lowest monetization</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Niche Rankings
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Finance', rank: '#1', color: 'bg-success-DEFAULT' },
                  { label: 'Tech', rank: '#2', color: 'bg-success-DEFAULT' },
                  { label: 'Beauty', rank: '#3', color: 'bg-secondary-500' },
                  { label: 'Lifestyle', rank: '#7', color: 'bg-warning-DEFAULT' },
                  { label: 'Comedy', rank: '#10', color: 'bg-error-DEFAULT' },
                ].map((niche) => (
                  <div key={niche.label} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${niche.color}`} />
                      <span className="font-semibold text-neutral-900">{niche.label}</span>
                    </div>
                    <span className="font-semibold text-neutral-900">{niche.rank}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="niche-profitability"
            formula={`Base Earnings = (Monthly Views / 1000) × Avg RPM
Niche Adjusted = Base × Niche Multiplier × Engagement Multiplier

Niche Multipliers:
- Finance: 3.0x
- Tech: 2.5x
- Beauty/Fashion: 2.0x
- Lifestyle: 1.5x
- Entertainment: 1.0x

Example:
1M views, Lifestyle niche (1.5x), 5% engagement (1.2x)
Base: (1,000,000 / 1000) × $0.03 = $30
Adjusted: $30 × 1.5 × 1.2 = $54/month`}
            assumptions={[
              { label: 'Multipliers', value: 'Based on average CPM and brand deal rates by niche' },
              { label: 'Brand Deals', value: 'High-value niches command 2-5x higher rates' },
              { label: 'Audience Value', value: 'Finance/tech audiences have higher purchasing power' },
            ]}
            dataSources={[
              'Niche Monetization Study 2024',
              'Brand Deal Rate Benchmarks by Category',
              'Creator Economy Profitability Analysis',
            ]}
            limitations="Earnings vary by execution quality, personal brand, and audience demographics. A great creator in a low-value niche can outperform average creators in high-value niches."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Niche Profitability Calculator"
            faqs={[
              {
                question: 'What is the most profitable TikTok niche?',
                answer: 'Finance (#1) earns 3x more than average due to high CPM ($8-12 vs $2-4) and premium brand deals. Tech (#2) and Beauty/Fashion (#3) also command premium rates. However, choose based on your expertise and passion - authenticity matters more than niche.',
              },
              {
                question: 'Can I make money in a low-value niche?',
                answer: 'Absolutely! Entertainment/comedy creators can still earn well through: (1) High volume (millions of views), (2) Diversification (merch, live gifts, Patreon), (3) Personal brand (speaking, courses), (4) Cross-platform (YouTube pays better). Focus on building audience first.',
              },
              {
                question: 'Should I switch niches for better earnings?',
                answer: 'Only if: (1) You have genuine interest/expertise in new niche, (2) Your audience would follow, (3) You\'re willing to rebuild authority. Pivoting without authenticity fails. Better strategy: add sub-niche elements (e.g., comedy → finance comedy) to increase value.',
              },
              {
                question: 'How do I increase profitability in my current niche?',
                answer: 'Strategies: (1) Target high-value audience segments, (2) Create more premium/valuable content, (3) Build email list for direct monetization, (4) Offer services/products aligned with niche, (5) Partner with premium brands, (6) Cross-sell to higher-paying platforms (YouTube, courses).',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="niche-profitability"
            calculators={[
              { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Calculate total earnings potential', icon: '💵' },
              { name: 'Content Value Calculator', slug: 'content-value', description: 'Estimate content portfolio worth', icon: '💎' },
              { name: 'Brand Deal Rate Calculator', slug: 'brand-deal-rate', description: 'Calculate fair brand deal rates', icon: '🤝' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
