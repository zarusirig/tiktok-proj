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
  calculateShareRatio,
  validateShareRatioInput,
} from '@/lib/calculators/share-ratio';
import type {
  ShareRatioInput,
  ShareRatioResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function ShareRatioCalculatorPage() {
  const [inputs, setInputs] = useState<ShareRatioInput>({
    views: 50000,
    shares: 1500,
  });

  const [results, setResults] = useState<ShareRatioResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof ShareRatioInput,
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
    const validation = validateShareRatioInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateShareRatio(inputs);
      setResults(result);

      trackCalculation(
        'share-ratio',
        { ...inputs },
        { shareRatio: result.shareRatio, viralityRating: result.viralityRating }
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
              label: 'Share Ratio Calculator',
              href: '/calculators/share-ratio',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            ↗️
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Share Ratio Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your share-to-view ratio to measure viral potential. Shares
            are the strongest signal to TikTok's algorithm.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Share Ratio
            </h2>

            <InputField
              id="views"
              label="Total Views"
              type="number"
              value={inputs.views}
              onChange={(value) => handleInputChange('views', value)}
              placeholder="e.g., 50000"
              helperText="Total views on your video"
              error={errors.views}
              min={1}
              required
            />

            <InputField
              id="shares"
              label="Total Shares"
              type="number"
              value={inputs.shares}
              onChange={(value) => handleInputChange('shares', value)}
              placeholder="e.g., 1500"
              helperText="Number of times video was shared"
              error={errors.shares}
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
              Calculate Share Ratio
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Share Ratio"
                  subtitle={`${results.viralityRating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    What This Means
                  </p>
                  <p className="text-body-sm text-neutral-700">
                    {results.shareRatio >= 5
                      ? 'Exceptional! Your content is highly shareable and has viral potential.'
                      : results.shareRatio >= 2
                      ? 'Strong performance! Above-average share rate indicates engaging content.'
                      : results.shareRatio >= 0.5
                      ? 'Average share rate. Focus on creating more shareable moments.'
                      : 'Low share rate. Create content that viewers feel compelled to share with friends.'}
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Share Ratio?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Share ratio measures what percentage of viewers share your content.
                  It's calculated by dividing shares by views and is the single most
                  important metric for viral content.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    TikTok's algorithm weighs shares more heavily than likes or comments
                  </li>
                  <li>
                    5%+ share ratio dramatically increases For You Page distribution
                  </li>
                  <li>
                    Shares indicate genuine value - people stake their reputation
                  </li>
                  <li>
                    High share rates trigger exponential reach growth
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Share Ratio Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '5%+',
                    color: 'bg-success-DEFAULT',
                    description: 'Viral-worthy content',
                  },
                  {
                    label: 'Good',
                    range: '2-5%',
                    color: 'bg-secondary-500',
                    description: 'Above average shareability',
                  },
                  {
                    label: 'Average',
                    range: '0.5-2%',
                    color: 'bg-warning-DEFAULT',
                    description: 'Typical share rate',
                  },
                  {
                    label: 'Below Average',
                    range: '<0.5%',
                    color: 'bg-error-DEFAULT',
                    description: 'Needs improvement',
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
            calculatorName="share-ratio"
            formula={`Share Ratio = (Shares / Views) × 100

Example:
Views: 50,000
Shares: 1,500
Share Ratio: (1,500 / 50,000) × 100 = 3%

This 3% share ratio indicates good viral potential`}
            assumptions={[
              {
                label: 'Algorithm Weight',
                value:
                  'Shares are weighted 2-3x more than likes in TikTok\'s algorithm',
              },
              {
                label: 'Viral Threshold',
                value: '5%+ share ratio significantly increases viral probability',
              },
              {
                label: 'Content Type',
                value: 'Educational and emotional content typically have higher share rates',
              },
            ]}
            dataSources={[
              'TikTok Algorithm Analysis 2024',
              'Viral Content Patterns Study',
              'Social Sharing Behavior Research',
            ]}
            limitations="Share ratio varies by content type and niche. Tutorial content naturally gets more shares than entertainment. Compare against your own baseline, not others."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Share Ratio Calculator"
            faqs={[
              {
                question: 'What is a good share ratio on TikTok?',
                answer:
                  'Excellent: 5%+ (1 in 20 viewers shares), Good: 2-5% (strong shareability), Average: 0.5-2% (typical), Below Average: <0.5% (needs work). Even 2-3% is impressive - it means highly engaged viewers who find value worth sharing.',
              },
              {
                question: 'Why are shares more important than likes?',
                answer:
                  'Shares require more effort and social risk - you\'re recommending content to your friends. TikTok treats this as a stronger signal of quality. Plus shares expose your content to entirely new networks, creating exponential reach potential that likes/comments can\'t match.',
              },
              {
                question: 'How can I increase my share ratio?',
                answer:
                  'Create share-worthy content: (1) Surprising facts/statistics ("Wait, WHAT?"), (2) Relatable humor friends will tag each other in, (3) Useful tutorials worth saving/sharing, (4) Controversial takes (tastefully), (5) Emotional stories, (6) Life hacks or tips, (7) Content that makes people look good for sharing it.',
              },
              {
                question: 'Where can I see my share count in TikTok Analytics?',
                answer:
                  'Go to Creator Tools → Analytics → Content tab → Select a video → Scroll to "Shares" under engagement metrics. TikTok also shows share trends over time. Focus on analyzing your highest-performing videos to identify share-worthy patterns.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="share-ratio"
            calculators={[
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description:
                  'Comprehensive viral potential score including shares',
                icon: '🚀',
              },
              {
                name: 'Save Rate Calculator',
                slug: 'save-rate',
                description: 'Measure content value through saves',
                icon: '🔖',
              },
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description: 'Overall engagement including shares',
                icon: '📊',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
