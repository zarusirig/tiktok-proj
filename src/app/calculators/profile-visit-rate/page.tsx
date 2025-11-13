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
  calculateProfileVisitRate,
  validateProfileVisitRateInput,
} from '@/lib/calculators/profile-visit-rate';
import type {
  ProfileVisitRateInput,
  ProfileVisitRateResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function ProfileVisitRateCalculatorPage() {
  const [inputs, setInputs] = useState<ProfileVisitRateInput>({
    views: 100000,
    profileVisits: 5000,
    followers: 25000,
  });

  const [results, setResults] = useState<ProfileVisitRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof ProfileVisitRateInput,
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
    const validation = validateProfileVisitRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateProfileVisitRate(inputs);
      setResults(result);

      trackCalculation(
        'profile-visit-rate',
        { ...inputs },
        { visitRate: result.visitRate, conversionRate: result.conversionRate }
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
              label: 'Profile Visit Rate Calculator',
              href: '/calculators/profile-visit-rate',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            👤
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Profile Visit Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate how effectively your content drives profile visits and
            follower conversions. Essential for growth tracking.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Profile Visit Rate
            </h2>

            <InputField
              id="views"
              label="Total Views"
              type="number"
              value={inputs.views}
              onChange={(value) => handleInputChange('views', value)}
              placeholder="e.g., 100000"
              helperText="Total views on your content"
              error={errors.views}
              min={1}
              required
            />

            <InputField
              id="profileVisits"
              label="Profile Visits"
              type="number"
              value={inputs.profileVisits}
              onChange={(value) => handleInputChange('profileVisits', value)}
              placeholder="e.g., 5000"
              helperText="Number of profile visits"
              error={errors.profileVisits}
              min={0}
              required
            />

            <InputField
              id="followers"
              label="Current Followers"
              type="number"
              value={inputs.followers}
              onChange={(value) => handleInputChange('followers', value)}
              placeholder="e.g., 25000"
              helperText="Your total follower count"
              error={errors.followers}
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
              Calculate Visit Rate
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Profile Visit Rate"
                  subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Conversion Metrics
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Visit to Follow Rate
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.conversionRate.toFixed(2)}%
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
                What is Profile Visit Rate?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Profile visit rate measures what percentage of viewers are
                  intrigued enough to visit your profile. High rates indicate
                  content that makes people want to see more from you.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Profile visits are the first step to gaining followers</li>
                  <li>Shows your content creates curiosity about you</li>
                  <li>Higher visit rates = better follower growth potential</li>
                  <li>Indicates strong personal branding and positioning</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Visit Rate Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Excellent', range: '10%+', color: 'bg-success-DEFAULT' },
                  { label: 'Good', range: '5-10%', color: 'bg-secondary-500' },
                  { label: 'Average', range: '2-5%', color: 'bg-warning-DEFAULT' },
                  { label: 'Below Average', range: '<2%', color: 'bg-error-DEFAULT' },
                ].map((benchmark) => (
                  <div
                    key={benchmark.label}
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
                  >
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
            calculatorName="profile-visit-rate"
            formula={`Profile Visit Rate = (Profile Visits / Views) × 100
Conversion Rate = (Followers / Profile Visits) × 100

Example:
Views: 100,000
Profile Visits: 5,000
Visit Rate: (5,000 / 100,000) × 100 = 5%`}
            assumptions={[
              { label: 'Visit Tracking', value: 'Based on TikTok Analytics profile view data' },
              { label: 'Conversion', value: 'Typical profile-to-follow conversion is 20-40%' },
              { label: 'Growth Driver', value: '10%+ visit rate indicates strong growth potential' },
            ]}
            dataSources={[
              'TikTok Creator Analytics Best Practices',
              'Profile Growth Optimization Study',
              'Follower Acquisition Research 2024',
            ]}
            limitations="Visit rates vary by content type. How-to and educational content naturally drive more profile visits than entertainment content."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Profile Visit Rate Calculator"
            faqs={[
              {
                question: 'What is a good profile visit rate?',
                answer: 'Excellent: 10%+ (1 in 10 viewers visits), Good: 5-10%, Average: 2-5%, Below Average: <2%. Focus on improving both visit rate AND conversion to followers.',
              },
              {
                question: 'How can I increase profile visits?',
                answer: 'Add CTAs ("check my profile for more"), create series/multi-part content, showcase personality, use intriguing bio, tease other content, create pattern interrupts, end with cliffhangers.',
              },
              {
                question: 'Where can I see profile visits in TikTok?',
                answer: 'Go to Profile → 3 dots → Creator Tools → Analytics → Overview. "Profile views" shows total visits. Compare to video views to calculate your rate.',
              },
              {
                question: 'Why do people visit but not follow?',
                answer: 'Inconsistent content, unclear niche, poor bio, not enough quality videos, or content doesn\'t deliver on the promise. Optimize your profile and create at least 10-20 quality videos before pushing traffic.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="profile-visit-rate"
            calculators={[
              { name: 'Follower Growth Calculator', slug: 'follower-growth', description: 'Project follower growth rate', icon: '📈' },
              { name: 'Follower Conversion Calculator', slug: 'follower-conversion', description: 'Track conversion funnel metrics', icon: '🎯' },
              { name: 'Engagement Rate Calculator', slug: 'engagement-rate', description: 'Measure overall engagement', icon: '📊' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
