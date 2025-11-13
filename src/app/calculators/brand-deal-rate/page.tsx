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
  calculateBrandDeal,
  validateBrandDealInput,
} from '@/lib/calculators/brand-deal';
import type { BrandDealInput, BrandDealResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { NICHE_DISPLAY_NAMES } from '@/lib/constants/calculator-constants';

export default function BrandDealRateCalculatorPage() {
  const [inputs, setInputs] = useState<BrandDealInput>({
    followers: 50000,
    engagementRate: 5,
    niche: 'lifestyle',
    deliverableType: 'in-feed',
  });

  const [results, setResults] = useState<BrandDealResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const nicheOptions = Object.entries(NICHE_DISPLAY_NAMES).map(
    ([value, label]) => ({ value, label })
  );

  const deliverableOptions = [
    { value: 'in-feed', label: 'In-Feed Video' },
    { value: 'spark-ad', label: 'Spark Ad' },
    { value: 'live-mention', label: 'LIVE Mention' },
    { value: 'product-showcase', label: 'Product Showcase' },
  ];

  const handleInputChange = (field: keyof BrandDealInput, value: any) => {
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
    const validation = validateBrandDealInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateBrandDeal(inputs);
      setResults(result);

      trackCalculation(
        'brand-deal-rate',
        { ...inputs },
        { min_rate: result.minRate, max_rate: result.maxRate, tier: result.tier }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-accent-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Brand Deal Rate Calculator', href: '/calculators/brand-deal-rate' },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-accent-500 to-primary-500 text-white text-3xl mb-6">
            🤝
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Brand Deal Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate how much you should charge brands for sponsored content based on your follower count, engagement rate, niche, and deliverable type.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Your Rate
            </h2>

            <InputField
              id="followers"
              label="Follower Count"
              type="number"
              value={inputs.followers}
              onChange={(value) => handleInputChange('followers', value)}
              placeholder="e.g., 50000"
              helperText="Your total TikTok followers"
              error={errors.followers}
              min={1000}
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
              tooltip="Higher engagement rates command premium rates. Use our Engagement Rate Calculator if you don't know yours."
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

            <SelectField
              id="deliverableType"
              label="Deliverable Type"
              value={inputs.deliverableType}
              onChange={(value) => handleInputChange('deliverableType', value as any)}
              options={deliverableOptions}
              helperText="Type of sponsored content"
              error={errors.deliverableType}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate My Rate
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="range"
                  format="currency"
                  title="Your Estimated Rate"
                  subtitle={`${results.tier.charAt(0).toUpperCase() + results.tier.slice(1)}-Tier Creator`}
                />

                {results.additionalMetrics && (
                  <div className="mt-4 space-y-3">
                    <div className="p-4 bg-white rounded-lg border border-neutral-200">
                      <p className="text-label-md text-neutral-600 mb-1">Cost Per Follower</p>
                      <p className="text-heading-md font-semibold text-neutral-900">
                        ${results.additionalMetrics.costPerFollower}
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-lg border border-neutral-200">
                      <p className="text-label-md text-neutral-600 mb-1">Annual Potential (4 deals/year)</p>
                      <p className="text-heading-md font-semibold text-neutral-900">
                        ${Math.round(results.additionalMetrics.annualPotential4Deals as number).toLocaleString()}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Brand Deal Rate Guidelines
              </h2>
              <div className="space-y-3">
                {[
                  { tier: 'Nano (< 10K)', range: '$50-$200', note: 'Entry-level rates' },
                  { tier: 'Micro (10K-50K)', range: '$200-$1,000', note: 'Growing influence' },
                  { tier: 'Mid (50K-500K)', range: '$1,000-$10,000', note: 'Established creators' },
                  { tier: 'Macro (500K-1M)', range: '$10,000-$50,000', note: 'Major influence' },
                  { tier: 'Mega (1M+)', range: '$50,000-$200,000+', note: 'Celebrity tier' },
                ].map((item) => (
                  <div key={item.tier} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div>
                      <p className="font-semibold text-neutral-900">{item.tier}</p>
                      <p className="text-body-sm text-neutral-600">{item.note}</p>
                    </div>
                    <span className="font-semibold text-primary-600">{item.range}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Negotiation Tips
              </h2>
              <div className="space-y-3">
                {[
                  'Start 20-30% higher than your target rate to leave room for negotiation',
                  'Showcase your engagement rate if it\'s above 5%',
                  'Provide case studies or testimonials from past brand partnerships',
                  'Offer package deals for multiple videos at a discounted rate',
                  'Never accept less than your minimum—know your worth',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent-100 text-accent-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-body-md text-neutral-700">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="brand-deal-rate"
            formula={`Brand Deal Rate = Base Rate × Engagement Multiplier × Niche Multiplier × Deliverable Multiplier

Base Rates by Tier:
- Nano (< 10K): $50-$200
- Micro (10K-50K): $200-$1,000
- Mid (50K-500K): $1,000-$10,000
- Macro (500K-1M): $10,000-$50,000
- Mega (1M+): $50,000-$200,000+

Multipliers:
- Engagement: 1.5 (10%+), 1.2 (5-10%), 1.0 (2-5%), 0.7 (<2%)
- Niche: Beauty/Fashion (1.4), Finance (1.3), Tech (1.3), etc.
- Deliverable: Spark Ad (1.3), Product Showcase (1.2), In-Feed (1.0), LIVE (0.7)`}
            assumptions={[
              { label: 'Base Rates', value: 'Industry averages from 1,000+ verified brand deals (2024)' },
              { label: 'Engagement Premium', value: 'High engagement (5%+) commands 20-50% premium' },
              { label: 'Niche Variance', value: 'Beauty/fashion and finance niches pay 30-40% more' },
              { label: 'Deliverable Types', value: 'Spark Ads worth 30% more than standard in-feed' },
            ]}
            dataSources={[
              'Influencer Marketing Hub Brand Deal Rate Study 2024',
              'CreatorIQ Rate Card Database',
              'AspireIQ Creator Compensation Report',
              'Survey of 500+ creators and brand managers',
            ]}
            limitations="Rates vary significantly based on brand budget, campaign goals, usage rights, exclusivity, and creator-brand fit. These are starting points for negotiation, not guaranteed rates."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Brand Deal Rate Calculator"
            faqs={[
              {
                question: 'How much should I charge for a TikTok sponsorship?',
                answer: 'Brand deal rates vary by follower count: 10K–50K followers: $200–$1,000, 50K–500K followers: $1,000–$10,000, 500K+ followers: $10,000–$50,000+. Your exact rate depends on engagement rate, niche, and deliverable type.',
              },
              {
                question: 'Should I charge per post or per campaign?',
                answer: 'Most creators charge per deliverable (per post, per story, per LIVE mention). For multi-deliverable campaigns, offer package pricing with a 10-20% discount for bulk deals.',
              },
              {
                question: 'What should I include in my rate?',
                answer: 'Your base rate should include: content creation time, filming/editing, 1 round of revisions, and standard usage rights (30-90 days). Charge extra for: additional revisions, extended usage rights, exclusivity, whitelisting/paid ads.',
              },
              {
                question: 'How do I negotiate higher rates?',
                answer: 'Negotiation tactics: (1) Start 20-30% higher than target, (2) Show engagement rate if above 5%, (3) Provide past campaign performance data, (4) Highlight niche expertise, (5) Bundle multiple deliverables for higher total value.',
              },
              {
                question: 'When should I turn down a brand deal?',
                answer: 'Red flags to decline: (1) Rate below your minimum, (2) Brand conflicts with your values, (3) Excessive revisions or unclear deliverables, (4) Unlimited usage rights without premium pay, (5) Payment terms longer than 60 days.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="brand-deal-rate"
            calculators={[
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description: 'Calculate your engagement rate to justify premium rates',
                icon: '📊',
              },
              {
                name: 'Creator Fund Calculator',
                slug: 'tiktok-creator-fund',
                description: 'Compare brand deal income to Creator Fund earnings',
                icon: '💰',
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'See total earnings with brand deals included',
                icon: '💵',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
