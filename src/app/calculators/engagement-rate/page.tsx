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
  calculateEngagementRate,
  validateEngagementRateInput,
} from '@/lib/calculators/engagement-rate';
import type {
  EngagementRateInput,
  EngagementRateResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function EngagementRateCalculatorPage() {
  const [inputs, setInputs] = useState<EngagementRateInput>({
    followers: 50000,
    avgLikes: 2500,
    avgComments: 150,
    avgShares: 100,
  });

  const [results, setResults] = useState<EngagementRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof EngagementRateInput,
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
    const validation = validateEngagementRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateEngagementRate(inputs);
      setResults(result);

      trackCalculation(
        'engagement-rate',
        { ...inputs },
        { rate: result.rate, rating: result.rating }
      );

      setIsCalculating(false);
    }, 500);
  };

  const element = (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Engagement Rate Calculator',
              href: '/calculators/engagement-rate',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            📊
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Engagement Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your TikTok engagement rate and see how you compare to
            industry benchmarks. Essential for brand partnerships and growth
            tracking.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Your Engagement Rate
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
              min={1}
              required
            />

            <InputField
              id="avgLikes"
              label="Average Likes per Video"
              type="number"
              value={inputs.avgLikes}
              onChange={(value) => handleInputChange('avgLikes', value)}
              placeholder="e.g., 2500"
              helperText="Average likes on your recent videos"
              error={errors.avgLikes}
              min={0}
              required
            />

            <InputField
              id="avgComments"
              label="Average Comments per Video"
              type="number"
              value={inputs.avgComments}
              onChange={(value) => handleInputChange('avgComments', value)}
              placeholder="e.g., 150"
              helperText="Average comments on your recent videos"
              error={errors.avgComments}
              min={0}
              required
            />

            <InputField
              id="avgShares"
              label="Average Shares per Video"
              type="number"
              value={inputs.avgShares}
              onChange={(value) => handleInputChange('avgShares', value)}
              placeholder="e.g., 100"
              helperText="Average shares on your recent videos"
              error={errors.avgShares}
              min={0}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Engagement Rate
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Your Engagement Rate"
                  subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
                />

                {results.additionalMetrics && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                    <p className="text-label-md text-neutral-600 mb-3">
                      Engagement Breakdown
                    </p>
                    <div className="grid grid-cols-3 gap-3">
                      <div className="text-center">
                        <p className="text-heading-sm font-semibold text-neutral-900">
                          {results.additionalMetrics.likesPercentage}%
                        </p>
                        <p className="text-label-sm text-neutral-600">
                          Likes
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-heading-sm font-semibold text-neutral-900">
                          {results.additionalMetrics.commentsPercentage}%
                        </p>
                        <p className="text-label-sm text-neutral-600">
                          Comments
                        </p>
                      </div>
                      <div className="text-center">
                        <p className="text-heading-sm font-semibold text-neutral-900">
                          {results.additionalMetrics.sharesPercentage}%
                        </p>
                        <p className="text-label-sm text-neutral-600">
                          Shares
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Engagement Rate?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Engagement rate measures how actively your audience interacts
                  with your content. It's calculated by dividing total
                  engagements (likes + comments + shares) by follower count.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Brands prioritize engagement over follower count when
                    selecting creators
                  </li>
                  <li>
                    Higher engagement = better algorithmic performance = more
                    views
                  </li>
                  <li>
                    5%+ engagement qualifies you for premium brand rates
                  </li>
                  <li>
                    Shows genuine audience connection vs. fake/inactive
                    followers
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Engagement Rate Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '10%+',
                    color: 'bg-success-DEFAULT',
                    description: 'Top 10% of creators',
                  },
                  {
                    label: 'Good',
                    range: '5-10%',
                    color: 'bg-secondary-500',
                    description: 'Above average',
                  },
                  {
                    label: 'Average',
                    range: '2-5%',
                    color: 'bg-warning-DEFAULT',
                    description: 'Typical for most creators',
                  },
                  {
                    label: 'Below Average',
                    range: '<2%',
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
            calculatorName="engagement-rate"
            formula={`Engagement Rate = [(Likes + Comments + Shares) / Followers] × 100

Example:
Followers: 50,000
Avg Likes: 2,500
Avg Comments: 150
Avg Shares: 100
Total Engagements: 2,750
Engagement Rate: (2,750 / 50,000) × 100 = 5.5%`}
            assumptions={[
              {
                label: 'Calculation Method',
                value:
                  'Uses average engagement across recent videos (not just one video)',
              },
              {
                label: 'Benchmarks',
                value:
                  'Based on 2024 industry studies across 10,000+ TikTok accounts',
              },
              {
                label: 'Excellent Threshold',
                value: '10%+ engagement (top tier)',
              },
            ]}
            dataSources={[
              'Influencer Marketing Hub 2024 Engagement Study',
              'Social Media Today Creator Benchmarks',
              'HypeAuditor TikTok Analytics Report 2024',
            ]}
            limitations="Engagement rates vary by niche, follower count, and content type. Smaller accounts typically have higher engagement rates than larger accounts due to closer audience relationships."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Engagement Rate Calculator"
            faqs={[
              {
                question: 'What is a good engagement rate on TikTok?',
                answer:
                  'A "good" TikTok engagement rate is generally: Excellent: 10%+ (top tier), Good: 5–10% (above average), Average: 2–5% (typical), Below Average: <2% (needs improvement). TikTok engagement rates are typically higher than Instagram due to the algorithm's reach.',
              },
              {
                question: 'How do I calculate engagement rate?',
                answer:
                  'Engagement Rate = [(Likes + Comments + Shares) / Followers] × 100. For example, if you have 10,000 followers and your videos average 500 likes, 50 comments, and 50 shares (600 total engagements), your engagement rate is 6%.',
              },
              {
                question: 'Why is my engagement rate dropping?',
                answer:
                  'Common reasons: (1) Follower growth outpacing engagement growth, (2) Algorithm changes affecting reach, (3) Content not resonating with audience, (4) Posting at suboptimal times, (5) Inactive or fake followers.',
              },
              {
                question: 'How can I improve my engagement rate?',
                answer:
                  'Tips: (1) Ask questions in captions to encourage comments, (2) Use trending sounds and hashtags, (3) Respond to comments to boost interaction, (4) Create shareable content (tutorials, relatable humor), (5) Post consistently at peak times for your audience.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="engagement-rate"
            calculators={[
              {
                name: 'Brand Deal Rate Calculator',
                slug: 'brand-deal-rate',
                description:
                  'Use your engagement rate to calculate brand deal rates',
                icon: '🤝',
              },
              {
                name: 'Creator Fund Calculator',
                slug: 'tiktok-creator-fund',
                description:
                  'See how engagement affects Creator Fund earnings',
                icon: '💰',
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'Calculate total earnings from all streams',
                icon: '💵',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
  return element;
}
