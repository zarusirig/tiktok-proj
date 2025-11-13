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
  calculateWatchTime,
  validateWatchTimeInput,
} from '@/lib/calculators/watch-time';
import type {
  WatchTimeInput,
  WatchTimeResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function WatchTimeCalculatorPage() {
  const [inputs, setInputs] = useState<WatchTimeInput>({
    videoDuration: 30,
    avgWatchTime: 22,
    views: 50000,
  });

  const [results, setResults] = useState<WatchTimeResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof WatchTimeInput,
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
    const validation = validateWatchTimeInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateWatchTime(inputs);
      setResults(result);

      trackCalculation(
        'watch-time',
        { ...inputs },
        { retentionRate: result.retentionRate, rating: result.rating }
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
              label: 'Watch Time Calculator',
              href: '/calculators/watch-time',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            ⏱️
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Watch Time Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your video retention rate and total watch hours. Watch time
            is the most important metric for TikTok's algorithm.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Watch Time
            </h2>

            <InputField
              id="videoDuration"
              label="Video Duration (seconds)"
              type="number"
              value={inputs.videoDuration}
              onChange={(value) => handleInputChange('videoDuration', value)}
              placeholder="e.g., 30"
              helperText="Length of your video in seconds"
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
              placeholder="e.g., 22"
              helperText="Average time viewers watch your video"
              error={errors.avgWatchTime}
              min={0}
              required
            />

            <InputField
              id="views"
              label="Total Views"
              type="number"
              value={inputs.views}
              onChange={(value) => handleInputChange('views', value)}
              placeholder="e.g., 50000"
              helperText="Total views for this video"
              error={errors.views}
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
              Calculate Watch Time
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Retention Rate"
                  subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Watch Time Metrics
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Total Watch Hours
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.totalWatchHours.toLocaleString()} hrs
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Avg Watch Time
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {inputs.avgWatchTime}s / {inputs.videoDuration}s
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
                What is Watch Time?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Watch time (or retention rate) measures what percentage of your
                  video viewers actually watch. It's calculated by dividing average
                  watch time by total video duration.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    TikTok's algorithm prioritizes videos with high watch time
                  </li>
                  <li>
                    70%+ retention significantly boosts your For You Page chances
                  </li>
                  <li>
                    Low watch time signals boring content, reducing future reach
                  </li>
                  <li>
                    Watch time matters more than likes or comments for algorithm
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Watch Time Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '70%+',
                    color: 'bg-success-DEFAULT',
                    description: 'Algorithm loves this',
                  },
                  {
                    label: 'Good',
                    range: '50-70%',
                    color: 'bg-secondary-500',
                    description: 'Above average',
                  },
                  {
                    label: 'Average',
                    range: '30-50%',
                    color: 'bg-warning-DEFAULT',
                    description: 'Room for improvement',
                  },
                  {
                    label: 'Below Average',
                    range: '<30%',
                    color: 'bg-error-DEFAULT',
                    description: 'Hurting your reach',
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
            calculatorName="watch-time"
            formula={`Retention Rate = (Average Watch Time / Video Duration) × 100
Total Watch Hours = (Views × Avg Watch Time) / 3600

Example:
Video Duration: 30 seconds
Avg Watch Time: 22 seconds
Views: 50,000
Retention: (22 / 30) × 100 = 73.3%
Watch Hours: (50,000 × 22) / 3600 = 305.6 hours`}
            assumptions={[
              {
                label: 'Algorithm Priority',
                value:
                  'TikTok prioritizes watch time over all other metrics for content distribution',
              },
              {
                label: 'Viral Threshold',
                value: '70%+ retention dramatically increases For You Page placement',
              },
              {
                label: 'Video Length',
                value: 'Shorter videos (15-30s) typically have higher retention rates',
              },
            ]}
            dataSources={[
              'TikTok Creator Fund Algorithm Analysis 2024',
              'Social Media Today Retention Rate Study',
              'Viral Content Engagement Research by Buffer',
            ]}
            limitations="Retention rates vary by content type and niche. Educational content may have lower retention but higher value. Focus on improving your personal baseline rather than comparing to others."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Watch Time Calculator"
            faqs={[
              {
                question: 'What is a good watch time percentage on TikTok?',
                answer:
                  'Excellent: 70%+ (viral potential), Good: 50-70% (strong performance), Average: 30-50% (typical), Below Average: <30% (needs improvement). However, context matters - 60% retention on a 3-minute video is more impressive than 80% on a 10-second video.',
              },
              {
                question: 'How can I improve my watch time?',
                answer:
                  'Tips: (1) Hook viewers in first 1-3 seconds, (2) Keep videos concise - cut ruthlessly, (3) Use pattern interrupts (text, transitions) every 3-5 seconds, (4) Build curiosity loops that resolve at the end, (5) Test shorter video lengths, (6) Delete boring intros.',
              },
              {
                question: 'Where can I see my watch time in TikTok analytics?',
                answer:
                  'Go to Profile → Creator Tools → Analytics → Content tab. Select a video and scroll to "Average watch time" - this shows both seconds watched and percentage. TikTok also shows a retention graph indicating where viewers drop off.',
              },
              {
                question: 'Does rewatching increase watch time?',
                answer:
                  'Yes! When viewers rewatch (loop) your video, it counts toward total watch time and can push retention over 100%. Creating "rewatch-worthy" content (satisfying loops, jokes with layered meaning, hidden details) is a proven growth strategy.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="watch-time"
            calculators={[
              {
                name: 'Completion Rate Calculator',
                slug: 'completion-rate',
                description:
                  'See what percentage of viewers watch to the end',
                icon: '✅',
              },
              {
                name: 'Video Performance Calculator',
                slug: 'video-performance',
                description: 'Get a comprehensive video performance score',
                icon: '🎬',
              },
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description: 'Predict viral success based on retention',
                icon: '🚀',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
