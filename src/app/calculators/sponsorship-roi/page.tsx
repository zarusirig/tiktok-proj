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
  calculateSponsorshipROI,
  validateSponsorshipROIInput,
} from '@/lib/calculators/sponsorship-roi';
import type {
  SponsorshipROIInput,
  SponsorshipROIResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function SponsorshipROICalculatorPage() {
  const [inputs, setInputs] = useState<SponsorshipROIInput>({
    sponsorshipFee: 5000,
    productionCost: 500,
    expectedReach: 100000,
    conversionRate: 2,
    avgOrderValue: 50,
  });

  const [results, setResults] = useState<SponsorshipROIResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof SponsorshipROIInput,
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
    const validation = validateSponsorshipROIInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateSponsorshipROI(inputs);
      setResults(result);

      trackCalculation(
        'sponsorship-roi',
        { ...inputs },
        { roi: result.roi, roiPercentage: result.roiPercentage }
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
              label: 'Sponsorship ROI Calculator',
              href: '/calculators/sponsorship-roi',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            💼
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Sponsorship ROI Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate the return on investment for sponsorship deals. Evaluate
            profitability before accepting brand partnerships.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Sponsorship ROI
            </h2>

            <InputField
              id="sponsorshipFee"
              label="Sponsorship Fee ($)"
              type="number"
              value={inputs.sponsorshipFee}
              onChange={(value) => handleInputChange('sponsorshipFee', value)}
              placeholder="e.g., 5000"
              helperText="Payment you'll receive from the brand"
              error={errors.sponsorshipFee}
              min={0}
              required
            />

            <InputField
              id="productionCost"
              label="Production Cost ($)"
              type="number"
              value={inputs.productionCost}
              onChange={(value) => handleInputChange('productionCost', value)}
              placeholder="e.g., 500"
              helperText="Cost to create the sponsored content"
              error={errors.productionCost}
              min={0}
              required
            />

            <InputField
              id="expectedReach"
              label="Expected Reach (Views)"
              type="number"
              value={inputs.expectedReach}
              onChange={(value) => handleInputChange('expectedReach', value)}
              placeholder="e.g., 100000"
              helperText="Expected views on sponsored content"
              error={errors.expectedReach}
              min={1}
              required
            />

            <InputField
              id="conversionRate"
              label="Conversion Rate (%)"
              type="number"
              value={inputs.conversionRate}
              onChange={(value) => handleInputChange('conversionRate', value)}
              placeholder="e.g., 2"
              helperText="Expected percentage who will purchase"
              error={errors.conversionRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <InputField
              id="avgOrderValue"
              label="Average Order Value ($)"
              type="number"
              value={inputs.avgOrderValue}
              onChange={(value) => handleInputChange('avgOrderValue', value)}
              placeholder="e.g., 50"
              helperText="Average purchase amount per customer"
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
              Calculate ROI
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="ROI Percentage"
                  subtitle={results.roiPercentage >= 0 ? 'PROFITABLE' : 'NOT PROFITABLE'}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Financial Breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Total Revenue
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.totalRevenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Total Cost
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.totalCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-body-sm text-neutral-600">
                        Net Profit
                      </span>
                      <span className={`text-body-sm font-semibold ${results.roi >= 0 ? 'text-success-DEFAULT' : 'text-error-DEFAULT'}`}>
                        ${results.roi.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Break-Even Units
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.breakEvenUnits.toLocaleString()}
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
                What is Sponsorship ROI?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Sponsorship ROI measures the profitability of brand deals by
                  comparing total revenue generated against costs (sponsorship fee
                  + production costs).
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Helps you evaluate which brand deals are actually profitable
                  </li>
                  <li>
                    Allows data-driven negotiation with brands
                  </li>
                  <li>
                    100%+ ROI means you're doubling your investment
                  </li>
                  <li>
                    Negative ROI indicates you should pass or renegotiate
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                ROI Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '200%+',
                    color: 'bg-success-DEFAULT',
                    description: 'Triple your investment',
                  },
                  {
                    label: 'Good',
                    range: '100-200%',
                    color: 'bg-secondary-500',
                    description: 'Double your money',
                  },
                  {
                    label: 'Acceptable',
                    range: '25-100%',
                    color: 'bg-warning-DEFAULT',
                    description: 'Positive but modest',
                  },
                  {
                    label: 'Not Worth It',
                    range: '<25%',
                    color: 'bg-error-DEFAULT',
                    description: 'Pass or renegotiate',
                  },
                ].map((benchmark) => (
                  <div
                    key={benchmark.label}
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-3 h-3 rounded-full ${benchmark.color}`}
                      />
                      <div>
                        <p className="font-semibold text-neutral-900">
                          {benchmark.label}
                        </p>
                        <p className="text-body-sm text-neutral-600">
                          {benchmark.description}
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold text-neutral-900">
                      {benchmark.range}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="sponsorship-roi"
            formula={`ROI% = [(Revenue - Cost) / Cost] × 100

Revenue = Expected Reach × Conversion Rate × Avg Order Value
Cost = Sponsorship Fee + Production Cost

Example:
Sponsorship Fee: $5,000
Production Cost: $500
Total Cost: $5,500
Expected Reach: 100,000 views
Conversion: 2% = 2,000 customers
Avg Order: $50
Revenue: 2,000 × $50 = $100,000
ROI: [($100,000 - $5,500) / $5,500] × 100 = 1,718%`}
            assumptions={[
              {
                label: 'Conversion Tracking',
                value:
                  'Assumes accurate tracking of conversions via affiliate links or promo codes',
              },
              {
                label: 'Reach Estimates',
                value: 'Based on your average video views or brand guarantees',
              },
              {
                label: 'Order Value',
                value: 'Use brand\'s average transaction data when available',
              },
            ]}
            dataSources={[
              'Influencer Marketing ROI Study 2024',
              'Brand Partnership Performance Benchmarks',
              'Creator Economy Financial Analysis',
            ]}
            limitations="ROI calculations don't account for long-term brand value, audience growth, or future opportunities. Consider intangible benefits when evaluating partnerships."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Sponsorship ROI Calculator"
            faqs={[
              {
                question: 'What is a good ROI for a sponsorship deal?',
                answer:
                  'Excellent: 200%+ (tripling your investment), Good: 100-200% (doubling), Acceptable: 25-100% (profitable but modest). However, first-time brand partnerships may have lower ROI but open doors for future deals. Consider both financial and strategic value.',
              },
              {
                question: 'How do I estimate conversion rate for a sponsorship?',
                answer:
                  'Check past sponsored content performance, use industry benchmarks (typical TikTok conversion is 1-3%), or ask the brand for their historical data. Start conservative - use 1% for new partnerships, 2-3% if you have strong audience trust and the product fits your niche.',
              },
              {
                question: 'Should I accept sponsorships with negative ROI?',
                answer:
                  'Generally no, unless: (1) The brand is highly prestigious and opens future doors, (2) It\'s your first brand deal and you need portfolio building, (3) The brand offers non-monetary benefits (products, exposure, long-term partnership). Never consistently accept losing deals.',
              },
              {
                question: 'How can I negotiate better sponsorship terms?',
                answer:
                  'Leverage: (1) Show your engagement rate and past conversion data, (2) Offer package deals (multiple videos for better rates), (3) Request higher fees or lower deliverables if ROI is marginal, (4) Ask for performance bonuses tied to conversions, (5) Negotiate usage rights - limit how brands can repurpose your content.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="sponsorship-roi"
            calculators={[
              {
                name: 'Brand Deal Rate Calculator',
                slug: 'brand-deal-rate',
                description:
                  'Calculate fair sponsorship rates for your account',
                icon: '🤝',
              },
              {
                name: 'Break Even Calculator',
                slug: 'break-even',
                description: 'Determine sales needed to break even',
                icon: '⚖️',
              },
              {
                name: 'Content Value Calculator',
                slug: 'content-value',
                description: 'Assess overall content portfolio value',
                icon: '💎',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
