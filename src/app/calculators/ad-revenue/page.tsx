'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculateAdRevenue,
  validateAdRevenueInput,
} from '@/lib/calculators/ad-revenue';
import type {
  AdRevenueInput,
  AdRevenueResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function AdRevenueCalculatorPage() {
  const [inputs, setInputs] = useState<AdRevenueInput>({
    monthlyViews: 1000000,
    cpm: 5,
    adFrequency: 1,
  });

  const [results, setResults] = useState<AdRevenueResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof AdRevenueInput,
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
    const validation = validateAdRevenueInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateAdRevenue(inputs);
      setResults(result);

      trackCalculation(
        'ad-revenue',
        { ...inputs },
        { monthlyRevenue: result.monthlyRevenue, annualRevenue: result.annualRevenue }
      );

      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Ad Revenue Calculator',
              href: '/calculators/ad-revenue',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            💰
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Ad Revenue Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Estimate potential ad revenue from TikTok monetization programs based on
            your views, CPM, and ad frequency.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Ad Revenue
            </h2>

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
              id="cpm"
              label="CPM (Cost per 1000 views)"
              type="number"
              value={inputs.cpm}
              onChange={(value) => handleInputChange('cpm', value)}
              placeholder="e.g., 5"
              helperText="Typical range: $2-10"
              error={errors.cpm}
              min={0}
              step={0.01}
              required
            />

            <InputField
              id="adFrequency"
              label="Ads per Video"
              type="number"
              value={inputs.adFrequency}
              onChange={(value) => handleInputChange('adFrequency', value)}
              placeholder="e.g., 1"
              helperText="Number of ad placements per video"
              error={errors.adFrequency}
              min={1}
              max={5}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Ad Revenue
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="currency"
                  title="Monthly Revenue"
                  subtitle={`$${results.annualRevenue.toLocaleString()} annual`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Revenue Breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Annual Revenue
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.annualRevenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Revenue per Video
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.revenuePerVideo.toFixed(2)}
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
                Ad Revenue Guide
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Ad revenue is earned through TikTok's monetization programs when
                  ads are shown on your content. CPM varies by niche, audience
                  demographics, and advertiser demand.
                </p>
                <p>
                  <strong>Key factors:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Higher-value niches (finance, tech) have better CPM rates</li>
                  <li>Longer videos allow for mid-roll ads (higher earnings)</li>
                  <li>US/UK audiences command higher CPMs than other regions</li>
                  <li>Ad revenue requires 10K+ followers to qualify</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                CPM by Niche
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Finance', range: '$8-12', color: 'bg-success-DEFAULT' },
                  { label: 'Tech', range: '$6-10', color: 'bg-success-DEFAULT' },
                  { label: 'Lifestyle', range: '$4-6', color: 'bg-secondary-500' },
                  { label: 'Entertainment', range: '$2-4', color: 'bg-warning-DEFAULT' },
                ].map((niche) => (
                  <div
                    key={niche.label}
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${niche.color}`} />
                      <span className="font-semibold text-neutral-900">{niche.label}</span>
                    </div>
                    <span className="font-semibold text-neutral-900">{niche.range}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="ad-revenue"
            formula={`Monthly Revenue = (Monthly Views / 1000) × CPM × Ad Frequency

Example:
Monthly Views: 1,000,000
CPM: $5
Ad Frequency: 1 ad per video
Monthly: (1,000,000 / 1000) × $5 × 1 = $5,000
Annual: $5,000 × 12 = $60,000`}
            assumptions={[
              { label: 'CPM Range', value: 'Typical TikTok CPM ranges from $2-10 depending on niche' },
              { label: 'Ad Frequency', value: 'Longer videos (1min+) can have 1-3 mid-roll ads' },
              { label: 'Eligibility', value: 'Requires 10K+ followers and Creator Fund/Pulse enrollment' },
            ]}
            dataSources={[
              'TikTok Creator Marketplace CPM Data 2024',
              'Ad Revenue Benchmark Study',
              'Creator Monetization Report',
            ]}
            limitations="Actual revenue varies by audience location, engagement, and advertiser demand. CPM fluctuates seasonally (higher in Q4)."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Ad Revenue Calculator"
            faqs={[
              {
                question: 'How much can I earn from TikTok ads?',
                answer: 'Earnings vary widely: 100K views/month at $5 CPM = $500/month. 1M views = $5,000/month. High-CPM niches (finance, tech) can earn 2-3x more. Most creators need 500K+ monthly views for significant ad income.',
              },
              {
                question: 'What is a good CPM rate on TikTok?',
                answer: '$5+ CPM is good for most niches. Finance/tech creators see $8-12. Entertainment averages $2-4. Your CPM depends on niche, audience demographics, and engagement quality.',
              },
              {
                question: 'How do I qualify for TikTok ad revenue?',
                answer: 'Requirements: 10K+ followers, 100K+ video views in last 30 days, 18+ years old, follow Community Guidelines. Apply through Creator Tools → Creator Fund or TikTok Pulse program.',
              },
              {
                question: 'Should I focus on ad revenue or brand deals?',
                answer: 'Brand deals typically pay 5-10x more than ad revenue for the same reach. Use ad revenue as passive income, but prioritize brand partnerships, affiliate marketing, and selling your own products/services.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="ad-revenue"
            calculators={[
              { name: 'Creator Fund Calculator', slug: 'tiktok-creator-fund', description: 'Estimate Creator Fund earnings', icon: '💵' },
              { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Total earnings from all streams', icon: '💰' },
              { name: 'RPM Calculator', slug: 'rpm', description: 'Calculate revenue per 1000 views', icon: '📈' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
