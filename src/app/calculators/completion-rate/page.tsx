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
  calculateCompletionRate,
  validateCompletionRateInput,
} from '@/lib/calculators/completion-rate';
import type {
  CompletionRateInput,
  CompletionRateResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function CompletionRateCalculatorPage() {
  const [inputs, setInputs] = useState<CompletionRateInput>({
    videoDuration: 30,
    avgWatchTime: 25,
  });

  const [results, setResults] = useState<CompletionRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof CompletionRateInput,
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
    const validation = validateCompletionRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateCompletionRate(inputs);
      setResults(result);

      trackCalculation(
        'completion-rate',
        { ...inputs },
        { completionRate: result.completionRate, rating: result.rating }
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
              label: 'Completion Rate Calculator',
              href: '/calculators/completion-rate',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            ✅
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Completion Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate what percentage of viewers watch your video to the end.
            Completion rate is critical for algorithmic success.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Completion Rate
            </h2>

            <InputField
              id="videoDuration"
              label="Video Duration (seconds)"
              type="number"
              value={inputs.videoDuration}
              onChange={(value) => handleInputChange('videoDuration', value)}
              placeholder="e.g., 30"
              helperText="Total length of your video"
              error={errors.videoDuration}
              min={1}
              max={600}
              required
            />

            <InputField
              id="avgWatchTime"
              label="Average Watch Time (seconds)"
              type="number"
              value={inputs.avgWatchTime}
              onChange={(value) => handleInputChange('avgWatchTime', value)}
              placeholder="e.g., 25"
              helperText="Average time viewers watch"
              error={errors.avgWatchTime}
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
              Calculate Completion Rate
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Completion Rate"
                  subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    What This Means
                  </p>
                  <p className="text-body-sm text-neutral-700">
                    {results.completionRate >= 80
                      ? 'Excellent! Most viewers watch to the end - your content keeps attention.'
                      : results.completionRate >= 60
                      ? 'Good! Above-average completion. Consider front-loading your best content.'
                      : results.completionRate >= 40
                      ? 'Average completion. Work on pacing and eliminate dead spots.'
                      : 'Low completion rate. Viewers are dropping off early - reassess your hook and content structure.'}
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Completion Rate?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Completion rate is the percentage of viewers who watch your video
                  all the way to the end. It's one of the strongest signals to
                  TikTok's algorithm that your content is engaging.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    High completion rates trigger increased For You Page distribution
                  </li>
                  <li>
                    Videos over 90% completion often go viral
                  </li>
                  <li>
                    Shows your content delivers on its promise/hook
                  </li>
                  <li>
                    Shorter videos with high completion outperform longer videos
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Completion Rate Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '80%+',
                    color: 'bg-success-DEFAULT',
                    description: 'Viral-worthy content',
                  },
                  {
                    label: 'Good',
                    range: '60-80%',
                    color: 'bg-secondary-500',
                    description: 'Strong performance',
                  },
                  {
                    label: 'Average',
                    range: '40-60%',
                    color: 'bg-warning-DEFAULT',
                    description: 'Room to optimize',
                  },
                  {
                    label: 'Below Average',
                    range: '<40%',
                    color: 'bg-error-DEFAULT',
                    description: 'Hook or pacing issues',
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
            calculatorName="completion-rate"
            formula={`Completion Rate = (Average Watch Time / Video Duration) × 100

Example:
Video Duration: 30 seconds
Avg Watch Time: 25 seconds
Completion Rate: (25 / 30) × 100 = 83.3%

Note: Rates over 100% are possible when viewers rewatch`}
            assumptions={[
              {
                label: 'Algorithm Weight',
                value:
                  'Completion rate is weighted heavily by TikTok for content distribution',
              },
              {
                label: 'Viral Threshold',
                value: '80%+ completion significantly increases viral potential',
              },
              {
                label: 'Video Length Impact',
                value: 'Shorter videos naturally achieve higher completion rates',
              },
            ]}
            dataSources={[
              'TikTok Algorithm Research 2024',
              'Viral Content Analysis by Social Media Examiner',
              'Creator Success Metrics Study',
            ]}
            limitations="Completion rate should be evaluated relative to video length. A 50% completion on a 2-minute video may be better than 90% on a 10-second video."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Completion Rate Calculator"
            faqs={[
              {
                question: 'What is a good completion rate on TikTok?',
                answer:
                  'For videos under 30 seconds: aim for 70%+. For 30-60 seconds: 50%+ is good. For 60+ seconds: 40%+ is solid. Context matters - completion rate naturally decreases with video length. Focus on beating your own averages.',
              },
              {
                question: 'How do I increase my completion rate?',
                answer:
                  'Best practices: (1) Delete the first 2-3 seconds if nothing happens, (2) Put payoff/punchline at the very end, (3) Use text overlay to tease what\'s coming, (4) Cut out any "fluff" or slow moments, (5) Make videos shorter - 15-30s is ideal, (6) Add surprise elements throughout to maintain interest.',
              },
              {
                question: 'Where can I find completion rate in TikTok Analytics?',
                answer:
                  'TikTok doesn\'t explicitly show "completion rate" but you can calculate it: Go to Analytics → Content → Select video → Divide "Average watch time" by video duration. The retention graph also shows the exact percentage who watched to the end.',
              },
              {
                question: 'Does looping count toward completion rate?',
                answer:
                  'Yes! When viewers rewatch, it counts as additional watch time. Some viral videos have 100%+ completion rates due to rewatching. Creating loop-worthy content (satisfying endings that make you want to rewatch) is a powerful strategy.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="completion-rate"
            calculators={[
              {
                name: 'Watch Time Calculator',
                slug: 'watch-time',
                description:
                  'Calculate total watch hours and retention rate',
                icon: '⏱️',
              },
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description: 'High completion rate = viral potential',
                icon: '🚀',
              },
              {
                name: 'Video Performance Calculator',
                slug: 'video-performance',
                description: 'Comprehensive video performance analysis',
                icon: '🎬',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
