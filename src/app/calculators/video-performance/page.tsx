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
  calculateVideoPerformance,
  validateVideoPerformanceInput,
} from '@/lib/calculators/video-performance';
import type {
  VideoPerformanceInput,
  VideoPerformanceResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function VideoPerformanceCalculatorPage() {
  const [inputs, setInputs] = useState<VideoPerformanceInput>({
    avgViews: 50000,
    avgLikes: 2500,
    avgComments: 150,
    avgShares: 100,
    followers: 30000,
  });

  const [results, setResults] = useState<VideoPerformanceResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof VideoPerformanceInput,
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
    const validation = validateVideoPerformanceInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateVideoPerformance(inputs);
      setResults(result);

      trackCalculation(
        'video-performance',
        { ...inputs },
        { performanceScore: result.performanceScore, rating: result.rating }
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
              label: 'Video Performance Calculator',
              href: '/calculators/video-performance',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🎬
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Video Performance Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Analyze your video performance with a comprehensive score based on
            views, engagement, and reach. Identify top-performing content.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Video Performance
            </h2>

            <InputField
              id="avgViews"
              label="Average Views"
              type="number"
              value={inputs.avgViews}
              onChange={(value) => handleInputChange('avgViews', value)}
              placeholder="e.g., 50000"
              helperText="Average views per video"
              error={errors.avgViews}
              min={0}
              required
            />

            <InputField
              id="avgLikes"
              label="Average Likes"
              type="number"
              value={inputs.avgLikes}
              onChange={(value) => handleInputChange('avgLikes', value)}
              placeholder="e.g., 2500"
              helperText="Average likes per video"
              error={errors.avgLikes}
              min={0}
              required
            />

            <InputField
              id="avgComments"
              label="Average Comments"
              type="number"
              value={inputs.avgComments}
              onChange={(value) => handleInputChange('avgComments', value)}
              placeholder="e.g., 150"
              helperText="Average comments per video"
              error={errors.avgComments}
              min={0}
              required
            />

            <InputField
              id="avgShares"
              label="Average Shares"
              type="number"
              value={inputs.avgShares}
              onChange={(value) => handleInputChange('avgShares', value)}
              placeholder="e.g., 100"
              helperText="Average shares per video"
              error={errors.avgShares}
              min={0}
              required
            />

            <InputField
              id="followers"
              label="Follower Count"
              type="number"
              value={inputs.followers}
              onChange={(value) => handleInputChange('followers', value)}
              placeholder="e.g., 30000"
              helperText="Your total TikTok followers"
              error={errors.followers}
              min={1}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Performance Score
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="number"
                  title="Performance Score"
                  subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Performance Metrics
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        View-to-Follower Ratio
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.viewToFollowerRatio.toFixed(2)}x
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Like Rate
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {((inputs.avgLikes / inputs.avgViews) * 100).toFixed(2)}%
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
                What is Video Performance Score?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Video performance score is a composite metric that evaluates how
                  well your content performs across multiple dimensions: reach (views),
                  engagement (likes, comments, shares), and audience resonance.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Identifies which content types resonate best with your audience
                  </li>
                  <li>
                    Helps optimize future content strategy based on data
                  </li>
                  <li>
                    Views exceeding 2x your follower count indicate viral potential
                  </li>
                  <li>
                    Brands evaluate performance scores when selecting creators
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Performance Score Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '80-100',
                    color: 'bg-success-DEFAULT',
                    description: 'Top-tier content',
                  },
                  {
                    label: 'Good',
                    range: '60-79',
                    color: 'bg-secondary-500',
                    description: 'Above average',
                  },
                  {
                    label: 'Average',
                    range: '40-59',
                    color: 'bg-warning-DEFAULT',
                    description: 'Room for improvement',
                  },
                  {
                    label: 'Below Average',
                    range: '<40',
                    color: 'bg-error-DEFAULT',
                    description: 'Needs optimization',
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
            calculatorName="video-performance"
            formula={`Performance Score Components:
- Engagement Rate: (Likes + Comments + Shares) / Views × 100
- Reach Factor: Views / Followers
- Interaction Quality: (Comments + Shares) / Total Engagements
- Final Score: Weighted average of all components (0-100)`}
            assumptions={[
              {
                label: 'Calculation Method',
                value:
                  'Combines multiple metrics with algorithmic weights based on TikTok best practices',
              },
              {
                label: 'Viral Threshold',
                value: 'Views 2x+ your follower count indicates strong algorithmic push',
              },
              {
                label: 'Quality Signals',
                value: 'Comments and shares weighted higher than likes (indicate deeper engagement)',
              },
            ]}
            dataSources={[
              'TikTok Creator Analytics Best Practices 2024',
              'Social Media Engagement Benchmarks Report',
              'Viral Content Analysis Study by Influencer Marketing Hub',
            ]}
            limitations="Performance varies by niche, content type, and posting time. Scores are relative to your follower count - smaller accounts may score higher on reach metrics."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Video Performance Calculator"
            faqs={[
              {
                question: 'What is a good video performance score?',
                answer:
                  'A score of 60+ is considered good, 80+ is excellent. However, context matters - a consistent score of 50-60 is better than occasional viral hits (90+) with mostly low scores. Focus on improving your average performance over time.',
              },
              {
                question: 'Why do some videos perform much better than others?',
                answer:
                  'Common factors: (1) Hook quality (first 3 seconds), (2) Trending audio usage, (3) Optimal posting time, (4) Topic relevance to current trends, (5) Video length (often shorter = higher completion rate), (6) Thumbnail/text overlay effectiveness. Analyze your top videos to identify patterns.',
              },
              {
                question: 'How can I improve my video performance score?',
                answer:
                  'Tips: (1) Study analytics for your top 10% of videos - replicate what works, (2) Optimize for watch time/completion rate, (3) Use CTAs to encourage comments/shares, (4) Test different content formats, (5) Post consistently to train the algorithm, (6) Engage with comments in first hour after posting.',
              },
              {
                question: 'Should I delete low-performing videos?',
                answer:
                  'Generally no - TikTok doesn\'t penalize low performers. However, if a video misrepresents your current content direction or brand, deletion is okay. Focus energy on creating better content rather than cleaning up old posts.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="video-performance"
            calculators={[
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description:
                  'Measure audience engagement across all videos',
                icon: '📊',
              },
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description: 'Predict which videos might go viral',
                icon: '🚀',
              },
              {
                name: 'Completion Rate Calculator',
                slug: 'completion-rate',
                description: 'Analyze how well videos retain viewers',
                icon: '⏱️',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
