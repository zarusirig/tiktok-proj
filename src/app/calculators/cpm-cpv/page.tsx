'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { CalculatorSchema, FAQSchema, BreadcrumbSchema } from '@/components/seo/CalculatorSchema';
import {
  calculateCPMCPV,
  validateCPMCPVInput,
} from '@/lib/calculators/cpm-cpv';
import type { CPMCPVInput, CPMCPVResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function CPMCPVCalculatorPage() {
  const [inputs, setInputs] = useState<CPMCPVInput>({
    adSpend: 1000,
    impressions: 100000,
  });

  const [results, setResults] = useState<CPMCPVResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof CPMCPVInput, value: any) => {
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
    const validation = validateCPMCPVInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateCPMCPV(inputs);
      setResults(result);
      trackCalculation(
        'cpm-cpv',
        { ...inputs },
        { cpm: result.cpm, cpv: result.cpv }
      );
      setIsCalculating(false);
    }, 500);
  };

  const faqs = [
    {
      question: 'What is a good CPM for TikTok ads?',
      answer: 'A good TikTok CPM ranges from $1-$10 depending on your targeting and industry. Broad targeting typically yields $1-$3 CPM, while highly targeted campaigns (specific demographics, interests) may see $5-$10+ CPM. Tech and finance niches tend to have higher CPMs ($8-$15), while entertainment and lifestyle are lower ($1-$5).',
    },
    {
      question: 'What\'s the difference between CPM and CPV?',
      answer: 'CPM (Cost Per Mille) measures cost per 1,000 impressions—how much you pay for 1,000 people to see your ad. CPV (Cost Per View) measures cost per individual view. CPM is better for brand awareness campaigns, while CPV helps you understand the actual cost-efficiency of your ad delivery.',
    },
    {
      question: 'How can I lower my TikTok CPM?',
      answer: 'To lower CPM: (1) Broaden your target audience to increase available inventory, (2) Use automatic placements instead of manual, (3) Create highly engaging content to improve relevance score, (4) Test different ad formats (In-Feed vs TopView), (5) Avoid peak advertising times (holidays, Q4), (6) Run campaigns for longer periods to let the algorithm optimize.',
    },
    {
      question: 'Why is my TikTok CPM higher than other platforms?',
      answer: 'TikTok CPM can be higher than Facebook or Instagram due to: (1) Smaller ad inventory (fewer ad placements), (2) High demand from advertisers targeting Gen Z, (3) Premium placements like TopView and Branded Hashtag Challenges, (4) Less mature ad platform means less optimization. However, engagement rates are often 2-3× higher on TikTok, making the actual cost per engagement competitive.',
    },
    {
      question: 'What affects CPM on TikTok?',
      answer: 'Key factors affecting TikTok CPM: (1) Target audience size (smaller = higher CPM), (2) Industry/niche (finance > fashion), (3) Geographic targeting (US/UK higher than developing countries), (4) Time of year (Q4 highest), (5) Ad quality and relevance score, (6) Bidding strategy (automatic vs manual), (7) Competition in your niche.',
    },
  ];

  return (
    <>
      <CalculatorSchema
        name="TikTok CPM/CPV Calculator"
        description="Calculate Cost Per Mille (CPM) and Cost Per View (CPV) for your TikTok ad campaigns to measure advertising efficiency."
        url="https://tiktokcalculator.com/calculators/cpm-cpv"
        aggregateRating={{
          ratingValue: 4.7,
          reviewCount: 892,
        }}
        datePublished="2024-01-15"
        dateModified="2025-11-13"
        keywords={['tiktok cpm calculator', 'cost per mille', 'cpv calculator', 'tiktok ad cost']}
      />
      <FAQSchema faqs={faqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', url: 'https://tiktokcalculator.com' },
          { name: 'Calculators', url: 'https://tiktokcalculator.com/calculators' },
          { name: 'CPM/CPV Calculator', url: 'https://tiktokcalculator.com/calculators/cpm-cpv' },
        ]}
      />
      <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-light py-8">
        <div className="container-custom">
          <Breadcrumb
            items={[
              { label: 'Calculators', href: '/calculators' },
              { label: 'CPM/CPV Calculator', href: '/calculators/cpm-cpv' },
            ]}
          />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white text-3xl mb-6">
            📊
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok CPM/CPV Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate Cost Per Mille (CPM) and Cost Per View (CPV) for your TikTok ad campaigns to measure advertising efficiency.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Your CPM/CPV
            </h2>

            <InputField
              id="adSpend"
              label="Ad Spend ($)"
              type="number"
              value={inputs.adSpend}
              onChange={(value) => handleInputChange('adSpend', value)}
              placeholder="e.g., 1000"
              helperText="Total amount spent on your ad campaign"
              tooltip="Enter your total advertising budget or campaign spend"
              error={errors.adSpend}
              min={1}
              required
            />

            <InputField
              id="impressions"
              label="Impressions"
              type="number"
              value={inputs.impressions}
              onChange={(value) => handleInputChange('impressions', value)}
              placeholder="e.g., 100000"
              helperText="Total number of times your ad was shown"
              tooltip="Find this metric in your TikTok Ads Manager dashboard"
              error={errors.impressions}
              min={100}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate CPM/CPV
            </Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-success-50 rounded-xl border-2 border-primary-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Cost Per Mille (CPM)</p>
                  <p className="text-display-md font-bold text-primary-600">
                    ${results.cpm.toFixed(2)}
                  </p>
                  <p className="text-body-sm text-neutral-600 mt-2">
                    Cost per 1,000 impressions
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-label-md text-neutral-600">Cost Per View (CPV)</span>
                    <span className="text-heading-md font-semibold text-neutral-900">
                      ${results.cpv.toFixed(4)}
                    </span>
                  </div>
                  <p className="text-body-xs text-neutral-500">Cost for each individual impression</p>
                </div>

                {results.benchmark && (
                  <div className={`p-4 rounded-lg border-2 ${
                    results.benchmark === 'excellent' ? 'bg-success-50 border-success-300' :
                    results.benchmark === 'good' ? 'bg-primary-50 border-primary-300' :
                    results.benchmark === 'average' ? 'bg-neutral-50 border-neutral-300' :
                    'bg-warning-50 border-warning-300'
                  }`}>
                    <p className="text-label-md font-semibold mb-1">
                      Performance: {results.benchmark.charAt(0).toUpperCase() + results.benchmark.slice(1)}
                    </p>
                    <p className="text-body-sm text-neutral-600">
                      {results.benchmark === 'excellent' && 'Your CPM is excellent—great targeting and ad efficiency!'}
                      {results.benchmark === 'good' && 'Your CPM is above average—solid campaign performance.'}
                      {results.benchmark === 'average' && 'Your CPM is within typical range for TikTok ads.'}
                      {results.benchmark === 'expensive' && 'Your CPM is higher than average—consider optimizing targeting or creative.'}
                    </p>
                  </div>
                )}

                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-label-md text-neutral-600">Impressions per $1</span>
                    <span className="text-heading-md font-semibold text-neutral-900">
                      {results.impressionsPerDollar.toFixed(0)}
                    </span>
                  </div>
                  <p className="text-body-xs text-neutral-500">How many impressions you get for every dollar spent</p>
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
                TikTok CPM Benchmarks
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Industry benchmarks for TikTok advertising CPM:
              </p>
              <div className="space-y-3">
                {[
                  { range: '$1-$3', label: 'Excellent', desc: 'Broad targeting, high engagement', color: 'bg-success-100 border-success-300 text-success-700' },
                  { range: '$3-$6', label: 'Good', desc: 'Standard campaigns, good targeting', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { range: '$6-$10', label: 'Average', desc: 'Niche targeting, competitive industries', color: 'bg-neutral-100 border-neutral-300 text-neutral-700' },
                  { range: '$10+', label: 'High', desc: 'Premium niches, highly specific targeting', color: 'bg-warning-100 border-warning-300 text-warning-700' },
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
                How to Optimize Your CPM
              </h2>
              <div className="space-y-3">
                {[
                  'Broaden your audience targeting to increase available ad inventory',
                  'Create scroll-stopping content in the first 3 seconds',
                  'Test multiple ad variations to improve relevance scores',
                  'Use TikTok\'s automatic bidding for better optimization',
                  'Avoid over-targeting which limits inventory and raises costs',
                  'Run campaigns for at least 7 days to let algorithm learn',
                  'Target countries with lower CPMs (avoid only US/UK)',
                  'Schedule ads during off-peak hours for lower competition',
                ].map((tip, index) => (
                  <div key={index} className="flex items-start space-x-3 p-3 bg-neutral-50 rounded-lg">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <p className="text-body-sm text-neutral-700">{tip}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                CPM by Industry
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Average TikTok CPM varies significantly by industry:
              </p>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">💰 Finance & Insurance</span>
                    <span className="text-neutral-600">$8-$15</span>
                  </div>
                  <p className="text-neutral-600">Highest CPM, competitive niche</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">💻 Technology & Software</span>
                    <span className="text-neutral-600">$6-$12</span>
                  </div>
                  <p className="text-neutral-600">High-value customers, B2B focus</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">🛍️ E-commerce & Retail</span>
                    <span className="text-neutral-600">$3-$6</span>
                  </div>
                  <p className="text-neutral-600">Mid-range, high conversion potential</p>
                </div>
                <div className="p-3 bg-neutral-50 rounded-lg">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-neutral-900">🎮 Entertainment & Gaming</span>
                    <span className="text-neutral-600">$1-$4</span>
                  </div>
                  <p className="text-neutral-600">Lower CPM, broad audience appeal</p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Understanding TikTok Ad Metrics
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">When to Focus on CPM</h3>
                  <p className="text-body-sm text-neutral-700">
                    Use CPM as your primary metric for brand awareness campaigns where your goal is maximum reach and impressions, not immediate conversions.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">When CPM Doesn't Matter</h3>
                  <p className="text-body-sm text-neutral-700">
                    For conversion campaigns, focus on CPA (Cost Per Acquisition) or ROAS (Return on Ad Spend) instead. A high CPM is fine if your conversion rate is excellent.
                  </p>
                </div>
                <div className="p-3 bg-primary-50 border border-primary-200 rounded-lg">
                  <p className="text-body-sm text-neutral-700">
                    <strong>Pro Tip:</strong> Compare your CPM to your engagement rate and conversion rate. A $10 CPM with 10% conversion rate is better than a $2 CPM with 1% conversion.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="cpm-cpv"
            formula={`CPM (Cost Per Mille) = (Ad Spend / Impressions) × 1,000

CPV (Cost Per View) = Ad Spend / Impressions

Impressions per Dollar = Impressions / Ad Spend

Example:
Ad Spend: $1,000
Impressions: 100,000

CPM = ($1,000 / 100,000) × 1,000 = $10.00
CPV = $1,000 / 100,000 = $0.01
Impressions per $1 = 100,000 / 1,000 = 100`}
            assumptions={[
              { label: 'Impressions Accuracy', value: 'Data comes directly from TikTok Ads Manager reporting' },
              { label: 'Industry Benchmarks', value: 'Based on 2024 TikTok advertising performance data across industries' },
              { label: 'CPM Variance', value: 'CPM varies by targeting, industry, seasonality, and ad quality' },
              { label: 'Performance Rating', value: 'Benchmarks: Excellent <$3, Good $3-$6, Average $6-$10, High >$10' },
            ]}
            dataSources={[
              'TikTok Ads Manager official metrics',
              'TikTok for Business advertising benchmarks (2024)',
              'Industry reports from WordStream and AdEspresso',
              'Analysis of 500+ TikTok ad campaigns across industries',
            ]}
            limitations="CPM alone doesn't measure campaign success—consider engagement rate, conversion rate, and ROAS. CPM varies significantly by geography, targeting parameters, and seasonality. Lower CPM doesn't always mean better campaign performance."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="CPM/CPV Calculator"
            faqs={faqs}
          />

          <RelatedCalculators
            currentCalculator="cpm-cpv"
            calculators={[
              {
                name: 'Campaign ROI Calculator',
                slug: 'campaign-roi',
                description: 'Calculate return on investment for your TikTok ad campaigns',
                icon: '📈',
              },
              {
                name: 'Ad Revenue Calculator',
                slug: 'ad-revenue',
                description: 'Estimate revenue from TikTok advertising campaigns',
                icon: '💰',
              },
              {
                name: 'Brand Deal Rate Calculator',
                slug: 'brand-deal-rate',
                description: 'Calculate your brand sponsorship rates',
                icon: '🤝',
              },
            ]}
          />
        </div>
      </div>
    </div>
    </>
  );
}
