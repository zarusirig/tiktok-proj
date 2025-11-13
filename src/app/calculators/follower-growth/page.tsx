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
  calculateFollowerGrowth,
  validateFollowerGrowthInput,
} from '@/lib/calculators/follower-growth';
import type {
  FollowerGrowthInput,
  FollowerGrowthResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function FollowerGrowthCalculatorPage() {
  const [inputs, setInputs] = useState<FollowerGrowthInput>({
    currentFollowers: 10000,
    dailyGrowthRate: 2.5,
    projectionDays: 30,
  });

  const [results, setResults] = useState<FollowerGrowthResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof FollowerGrowthInput,
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
    const validation = validateFollowerGrowthInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateFollowerGrowth(inputs);
      setResults(result);

      trackCalculation(
        'follower-growth',
        { ...inputs },
        { projectedFollowers: result.projectedFollowers, totalGrowth: result.totalGrowth }
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
              label: 'Follower Growth Calculator',
              href: '/calculators/follower-growth',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            📈
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Follower Growth Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Project your future follower count based on your current growth rate.
            Perfect for setting realistic goals and tracking progress.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Follower Growth
            </h2>

            <InputField
              id="currentFollowers"
              label="Current Followers"
              type="number"
              value={inputs.currentFollowers}
              onChange={(value) => handleInputChange('currentFollowers', value)}
              placeholder="e.g., 10000"
              helperText="Your current TikTok follower count"
              error={errors.currentFollowers}
              min={0}
              required
            />

            <InputField
              id="dailyGrowthRate"
              label="Daily Growth Rate (%)"
              type="number"
              value={inputs.dailyGrowthRate}
              onChange={(value) => handleInputChange('dailyGrowthRate', value)}
              placeholder="e.g., 2.5"
              helperText="Average daily follower growth percentage"
              error={errors.dailyGrowthRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <InputField
              id="projectionDays"
              label="Projection Period (Days)"
              type="number"
              value={inputs.projectionDays}
              onChange={(value) => handleInputChange('projectionDays', value)}
              placeholder="e.g., 30"
              helperText="How many days to project forward"
              error={errors.projectionDays}
              min={1}
              max={365}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Growth Projection
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="number"
                  title="Projected Followers"
                  subtitle={`+${results.totalGrowth.toLocaleString()} followers in ${inputs.projectionDays} days`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Growth Breakdown
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="text-center">
                      <p className="text-heading-sm font-semibold text-neutral-900">
                        {results.dailyAverage.toLocaleString()}
                      </p>
                      <p className="text-label-sm text-neutral-600">
                        Daily Average
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-heading-sm font-semibold text-neutral-900">
                        {results.growthPercentage.toFixed(1)}%
                      </p>
                      <p className="text-label-sm text-neutral-600">
                        Total Growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Follower Growth Rate?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Follower growth rate measures how quickly your audience is expanding.
                  It's calculated as a percentage of new followers gained relative to your
                  current follower count.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Helps you set realistic milestones and celebrate achievements
                  </li>
                  <li>
                    Indicates content quality and audience resonance
                  </li>
                  <li>
                    Sustainable growth (2-5% daily) is more valuable than viral spikes
                  </li>
                  <li>
                    Brands look for consistent growth patterns when selecting creators
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Growth Rate Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Viral Growth',
                    range: '10%+ daily',
                    color: 'bg-success-DEFAULT',
                    description: 'Exceptional, hard to sustain',
                  },
                  {
                    label: 'Strong Growth',
                    range: '5-10% daily',
                    color: 'bg-secondary-500',
                    description: 'Above average performance',
                  },
                  {
                    label: 'Steady Growth',
                    range: '2-5% daily',
                    color: 'bg-warning-DEFAULT',
                    description: 'Healthy, sustainable growth',
                  },
                  {
                    label: 'Slow Growth',
                    range: '<2% daily',
                    color: 'bg-error-DEFAULT',
                    description: 'Room for improvement',
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
            calculatorName="follower-growth"
            formula={`Projected Followers = Current × (1 + Growth Rate)^Days

Example:
Current Followers: 10,000
Daily Growth Rate: 2.5% (0.025)
Days: 30
Projected: 10,000 × (1.025)^30 = 21,027 followers
Total Growth: 11,027 new followers`}
            assumptions={[
              {
                label: 'Growth Model',
                value:
                  'Uses compound growth (realistic for TikTok where larger accounts attract more followers)',
              },
              {
                label: 'Growth Rate',
                value:
                  'Based on your recent performance - calculate by tracking followers over 7-14 days',
              },
              {
                label: 'Sustainability',
                value: 'High growth rates (10%+) are difficult to maintain long-term',
              },
            ]}
            dataSources={[
              'TikTok Creator Analytics Best Practices 2024',
              'Social Media Growth Study by Influencer Marketing Hub',
              'Creator Economy Benchmark Report 2024',
            ]}
            limitations="Projections assume consistent posting schedule and content quality. Actual growth may vary due to algorithm changes, viral content, or seasonal trends. Use recent data (7-14 days) for most accurate projections."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Follower Growth Calculator"
            faqs={[
              {
                question: 'What is a good follower growth rate on TikTok?',
                answer:
                  'A healthy daily growth rate is 2-5%, which translates to roughly 60-150% monthly growth. New accounts often see higher rates (10%+ daily) when they first gain traction, but this typically stabilizes. Focus on sustainable growth rather than chasing viral spikes.',
              },
              {
                question: 'How do I calculate my current growth rate?',
                answer:
                  'Track your followers over 7-14 days. Formula: Daily Growth Rate = [(End Followers - Start Followers) / Start Followers / Number of Days] × 100. For example: Started with 10,000, ended with 12,100 after 14 days = [(12,100 - 10,000) / 10,000 / 14] × 100 = 1.5% daily.',
              },
              {
                question: 'Why did my growth rate suddenly drop?',
                answer:
                  'Common reasons: (1) Algorithm shift reducing video reach, (2) Content quality inconsistency, (3) Posting frequency decreased, (4) Niche saturation or increased competition, (5) Seasonal trends (holidays, back-to-school, etc.). Analyze your recent content performance and adjust strategy.',
              },
              {
                question: 'How can I improve my follower growth rate?',
                answer:
                  'Tips: (1) Post consistently (1-3 times daily), (2) Use trending sounds early, (3) Hook viewers in first 3 seconds, (4) Engage with comments to boost algorithmic favor, (5) Collaborate with similar-sized creators, (6) Optimize posting times for your audience, (7) Create series or recurring content themes.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="follower-growth"
            calculators={[
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description:
                  'Ensure your engagement keeps pace with follower growth',
                icon: '📊',
              },
              {
                name: 'Brand Deal Rate Calculator',
                slug: 'brand-deal-rate',
                description:
                  'See how follower milestones affect your earning potential',
                icon: '🤝',
              },
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description: 'Assess which content can accelerate your growth',
                icon: '🚀',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
