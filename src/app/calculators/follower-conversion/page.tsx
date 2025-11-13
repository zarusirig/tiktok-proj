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
  calculateFollowerConversion,
  validateFollowerConversionInput,
} from '@/lib/calculators/follower-conversion';
import type {
  FollowerConversionInput,
  FollowerConversionResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function FollowerConversionCalculatorPage() {
  const [inputs, setInputs] = useState<FollowerConversionInput>({
    followers: 50000,
    websiteClicks: 2500,
    purchases: 75,
    avgOrderValue: 50,
  });

  const [results, setResults] = useState<FollowerConversionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof FollowerConversionInput,
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
    const validation = validateFollowerConversionInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateFollowerConversion(inputs);
      setResults(result);

      trackCalculation(
        'follower-conversion',
        { ...inputs },
        { overallConversionRate: result.overallConversionRate, revenue: result.revenue }
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
              label: 'Follower Conversion Calculator',
              href: '/calculators/follower-conversion',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🎯
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Follower Conversion Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your e-commerce conversion funnel from followers to customers.
            Track revenue per follower and identify optimization opportunities.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Conversion Metrics
            </h2>

            <InputField
              id="followers"
              label="Total Followers"
              type="number"
              value={inputs.followers}
              onChange={(value) => handleInputChange('followers', value)}
              placeholder="e.g., 50000"
              helperText="Your TikTok follower count"
              error={errors.followers}
              min={1}
              required
            />

            <InputField
              id="websiteClicks"
              label="Website Clicks"
              type="number"
              value={inputs.websiteClicks}
              onChange={(value) => handleInputChange('websiteClicks', value)}
              placeholder="e.g., 2500"
              helperText="Clicks to your website/store"
              error={errors.websiteClicks}
              min={0}
              required
            />

            <InputField
              id="purchases"
              label="Total Purchases"
              type="number"
              value={inputs.purchases}
              onChange={(value) => handleInputChange('purchases', value)}
              placeholder="e.g., 75"
              helperText="Number of completed purchases"
              error={errors.purchases}
              min={0}
              required
            />

            <InputField
              id="avgOrderValue"
              label="Average Order Value ($)"
              type="number"
              value={inputs.avgOrderValue}
              onChange={(value) => handleInputChange('avgOrderValue', value)}
              placeholder="e.g., 50"
              helperText="Average purchase amount"
              error={errors.avgOrderValue}
              min={0}
              step={0.01}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Conversion
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Overall Conversion Rate"
                  subtitle={`$${results.revenuePerFollower.toFixed(2)} per follower`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Funnel Breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">Click-Through Rate</span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.clickThroughRate.toFixed(2)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">Conversion Rate</span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.conversionRate.toFixed(2)}%
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-body-sm text-neutral-600">Total Revenue</span>
                      <span className="text-body-sm font-semibold text-success-DEFAULT">
                        ${results.revenue.toLocaleString()}
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
                Conversion Funnel Guide
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  The conversion funnel tracks how followers become customers:
                  Followers → Clicks → Purchases
                </p>
                <p>
                  <strong>Key metrics:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>CTR:</strong> Percentage of followers who click your links</li>
                  <li><strong>Conversion:</strong> Percentage of clicks that become sales</li>
                  <li><strong>Overall:</strong> Percentage of followers who purchase</li>
                  <li><strong>Revenue/Follower:</strong> Average lifetime value per follower</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Conversion Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Excellent', range: '5%+', color: 'bg-success-DEFAULT' },
                  { label: 'Good', range: '2-5%', color: 'bg-secondary-500' },
                  { label: 'Average', range: '0.5-2%', color: 'bg-warning-DEFAULT' },
                  { label: 'Below Average', range: '<0.5%', color: 'bg-error-DEFAULT' },
                ].map((benchmark) => (
                  <div key={benchmark.label} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${benchmark.color}`} />
                      <span className="font-semibold text-neutral-900">{benchmark.label}</span>
                    </div>
                    <span className="font-semibold text-neutral-900">{benchmark.range}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="follower-conversion"
            formula={`CTR = (Website Clicks / Followers) × 100
Conversion Rate = (Purchases / Clicks) × 100
Overall Conversion = (Purchases / Followers) × 100
Revenue = Purchases × Avg Order Value
Revenue/Follower = Revenue / Followers

Example:
50K followers, 2.5K clicks, 75 purchases, $50 AOV
CTR: 5%, Conversion: 3%, Overall: 0.15%
Revenue: $3,750 ($0.075 per follower)`}
            assumptions={[
              { label: 'Tracking', value: 'Requires link tracking (TikTok bio link, link in bio tools, UTM params)' },
              { label: 'Good Conversion', value: '2%+ overall conversion indicates strong product-market fit' },
              { label: 'Revenue/Follower', value: '$0.10+ per follower is excellent for e-commerce' },
            ]}
            dataSources={[
              'E-commerce Conversion Benchmark Report 2024',
              'Social Commerce Funnel Analysis',
              'TikTok Shopping Performance Study',
            ]}
            limitations="Conversion rates vary by product price, niche, and audience quality. Track over time to identify trends and optimization opportunities."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Follower Conversion Calculator"
            faqs={[
              {
                question: 'What is a good conversion rate for TikTok?',
                answer: 'Overall conversion (follower to purchase): Excellent 5%+, Good 2-5%, Average 0.5-2%. However, CTR (5-10%) and site conversion (2-5%) matter more for optimization. Most issues are in CTR (weak CTA) or site conversion (poor product pages).',
              },
              {
                question: 'How do I improve my conversion rate?',
                answer: 'Improve CTR: Stronger CTAs, bio link optimization, content that drives action. Improve Conversion: Better product pages, social proof, limited-time offers, abandoned cart recovery, retargeting ads, lower friction checkout.',
              },
              {
                question: 'How do I track follower conversions?',
                answer: 'Use link tracking tools (Bitly, Linktree, Shopify), UTM parameters to track traffic source, TikTok Pixel for ad tracking, Google Analytics for behavior, and Shopify/WooCommerce for sales attribution.',
              },
              {
                question: 'What is good revenue per follower?',
                answer: '$0.10+ per follower is excellent for e-commerce. $0.05-0.10 is good. Under $0.05 needs improvement. Example: 10K followers at $0.10 = $1,000 revenue. This metric helps calculate follower ROI and growth targets.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="follower-conversion"
            calculators={[
              { name: 'Profile Visit Rate Calculator', slug: 'profile-visit-rate', description: 'Track profile visit conversion', icon: '👤' },
              { name: 'Break Even Calculator', slug: 'break-even', description: 'Calculate sales needed for profitability', icon: '⚖️' },
              { name: 'Follower Growth Calculator', slug: 'follower-growth', description: 'Project future follower count', icon: '📈' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
