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
import type { EngagementRateInput, EngagementRateResult } from '@/types/calculator';
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

  const handleInputChange = (field: keyof EngagementRateInput, value: any) => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            { label: 'Engagement Rate Calculator', href: '/calculators/engagement-rate' },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white text-3xl mb-6">
            📊
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Engagement Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your TikTok engagement rate and see how you compare to industry benchmarks. High engagement rates (5%+) are crucial for brand deals and algorithmic success.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Your Engagement Rate
            </h2>

            <InputField
              id="followers"
              label="Total Followers"
              type="number"
              value={inputs.followers}
              onChange={(value) => handleInputChange('followers', value)}
              placeholder="e.g., 50000"
              helperText="Your total TikTok follower count"
              error={errors.followers}
              min={1}
              required
            />

            <InputField
              id="avgLikes"
              label="Average Likes Per Video"
              type="number"
              value={inputs.avgLikes}
              onChange={(value) => handleInputChange('avgLikes', value)}
              placeholder="e.g., 2500"
              helperText="Average likes on your recent videos"
              tooltip="Calculate from your last 10-20 videos for accuracy"
              error={errors.avgLikes}
              min={0}
              required
            />

            <InputField
              id="avgComments"
              label="Average Comments Per Video"
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
              label="Average Shares Per Video"
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
                  subtitle={`${results.rating.charAt(0).toUpperCase() + results.rating.slice(1).replace('-', ' ')} Performance`}
                />

                {results.interpretation && (
                  <div className="mt-4 p-4 bg-neutral-50 rounded-lg">
                    <p className="text-body-md text-neutral-700 leading-relaxed">
                      {results.interpretation}
                    </p>
                  </div>
                )}

                {results.additionalMetrics && (
                  <div className="mt-4">
                    <h3 className="text-heading-sm font-semibold text-neutral-900 mb-3">
                      Engagement Breakdown
                    </h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200">
                        <span className="text-body-md text-neutral-700">❤️ Likes</span>
                        <span className="font-semibold text-neutral-900">
                          {results.additionalMetrics.likesPercentage}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200">
                        <span className="text-body-md text-neutral-700">💬 Comments</span>
                        <span className="font-semibold text-neutral-900">
                          {results.additionalMetrics.commentsPercentage}%
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-neutral-200">
                        <span className="text-body-md text-neutral-700">🔄 Shares</span>
                        <span className="font-semibold text-neutral-900">
                          {results.additionalMetrics.sharesPercentage}%
                        </span>
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
                Engagement Rate Benchmarks
              </h2>
              <p className="text-body-md text-neutral-700 mb-4">
                Compare your engagement rate to TikTok industry standards:
              </p>
              <div className="space-y-3">
                {[
                  { range: '10%+', label: 'Excellent', desc: 'Top 10% of creators', color: 'bg-success-100 border-success-300 text-success-700' },
                  { range: '5-10%', label: 'Good', desc: 'Above average performance', color: 'bg-primary-100 border-primary-300 text-primary-700' },
                  { range: '2-5%', label: 'Average', desc: 'Typical for most creators', color: 'bg-neutral-100 border-neutral-300 text-neutral-700' },
                  { range: '<2%', label: 'Below Average', desc: 'Room for improvement', color: 'bg-warning-100 border-warning-300 text-warning-700' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`p-4 rounded-lg border-2 ${item.color}`}
                  >
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
                Why Engagement Rate Matters
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">🎯 Algorithm Performance</h3>
                  <p>
                    TikTok's algorithm prioritizes content with high engagement. Videos with more likes, comments, and shares get pushed to more users' For You pages.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">💰 Brand Deal Value</h3>
                  <p>
                    Brands look for creators with 5%+ engagement rates. High engagement means your audience actually cares about your content, leading to better campaign performance.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">📈 Growth Indicator</h3>
                  <p>
                    Engagement rate is more important than follower count. 10K engaged followers are worth more than 100K inactive ones.
                  </p>
                </div>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                How to Improve Engagement
              </h2>
              <div className="space-y-3">
                {[
                  'Ask questions in your captions to encourage comments',
                  'Respond to comments within the first hour to boost visibility',
                  'Use trending sounds and hashtags for discoverability',
                  'Create content that sparks emotions (humor, inspiration, surprise)',
                  'Add clear calls-to-action (CTA) in your videos',
                  'Post when your audience is most active (check analytics)',
                  'Create "duet-able" or "stitch-able" content',
                  'Use polls and interactive stickers to drive engagement',
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
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="engagement-rate"
            formula={`Engagement Rate = ((Likes + Comments + Shares) / Followers) × 100

Example:
Followers: 50,000
Avg Likes: 2,500
Avg Comments: 150
Avg Shares: 100
Total Engagements: 2,750
Engagement Rate: (2,750 / 50,000) × 100 = 5.5%`}
            assumptions={[
              { label: 'Calculation Method', value: 'Uses follower-based engagement rate (most common)' },
              { label: 'Benchmarks', value: 'Based on 2024 TikTok industry averages across all niches' },
              { label: 'Accuracy', value: 'Most accurate when using average from last 10-20 videos' },
            ]}
            dataSources={[
              'TikTok Creator Analytics Dashboard',
              'Influencer Marketing Hub Engagement Study 2024',
              'Hootsuite Social Media Benchmarks Report',
              'Analysis of 10,000+ TikTok creator accounts',
            ]}
            limitations="Engagement rates vary by follower size (smaller accounts typically have higher rates), content niche, and audience demographics. Use this as a directional guide."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Engagement Rate Calculator"
            faqs={[
              {
                question: 'What is a good engagement rate on TikTok?',
                answer: 'A good engagement rate on TikTok is 5-10%. Excellent is 10%+. Most creators fall in the 2-5% range. Smaller accounts (under 10K followers) typically have higher engagement rates (8-15%) than larger accounts.',
              },
              {
                question: 'How is TikTok engagement rate calculated?',
                answer: 'Engagement rate = (Total engagements ÷ Followers) × 100. Total engagements = Likes + Comments + Shares. For accuracy, calculate average engagements from your last 10-20 videos.',
              },
              {
                question: 'Why is my engagement rate low?',
                answer: 'Common causes: (1) Posting inconsistently, (2) Content doesn\'t resonate with your audience, (3) Not using trending sounds/hashtags, (4) Wrong posting times, (5) No clear call-to-action, (6) Fake or inactive followers. Focus on creating valuable content and engaging with your audience.',
              },
              {
                question: 'Should I use follower-based or view-based engagement rate?',
                answer: 'Follower-based (likes+comments+shares ÷ followers) is most common for TikTok and easier to compare. View-based (engagements ÷ views) shows how engaging individual videos are but varies more. Use follower-based for overall account health.',
              },
              {
                question: 'What engagement rate do brands look for?',
                answer: 'Brands typically want creators with 5%+ engagement rate. Premium brands may require 8%+. High engagement shows your audience is genuinely interested, which drives better campaign results than raw follower count.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="engagement-rate"
            calculators={[
              {
                name: 'Brand Deal Rate Calculator',
                slug: 'brand-deal-rate',
                description: 'Use your engagement rate to calculate brand deal pricing',
                icon: '🤝',
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'Estimate total earnings across all income streams',
                icon: '💵',
              },
              {
                name: 'Creator Fund Calculator',
                slug: 'tiktok-creator-fund',
                description: 'See how engagement affects Creator Fund earnings',
                icon: '💰',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

