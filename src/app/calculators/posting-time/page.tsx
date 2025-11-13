'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { SelectField } from '@/components/ui/SelectField';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculatePostingTime,
  validatePostingTimeInput,
} from '@/lib/calculators/posting-time';
import type {
  PostingTimeInput,
  PostingTimeResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function PostingTimeCalculatorPage() {
  const [inputs, setInputs] = useState<PostingTimeInput>({
    timezone: 'EST',
    audienceRegion: 'north-america',
    contentType: 'entertainment',
  });

  const [results, setResults] = useState<PostingTimeResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof PostingTimeInput,
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
    const validation = validatePostingTimeInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculatePostingTime(inputs);
      setResults(result);

      trackCalculation(
        'posting-time',
        { ...inputs },
        { optimalTimesCount: result.optimalTimes.length }
      );

      setIsCalculating(false);
    }, 500);
  };

  const timezoneOptions = [
    { value: 'EST', label: 'Eastern Time (EST)' },
    { value: 'CST', label: 'Central Time (CST)' },
    { value: 'MST', label: 'Mountain Time (MST)' },
    { value: 'PST', label: 'Pacific Time (PST)' },
  ];

  const regionOptions = [
    { value: 'north-america', label: 'North America' },
    { value: 'europe', label: 'Europe' },
    { value: 'asia', label: 'Asia' },
    { value: 'global', label: 'Global Audience' },
  ];

  const contentOptions = [
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'educational', label: 'Educational' },
    { value: 'promotional', label: 'Promotional' },
    { value: 'inspirational', label: 'Inspirational' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Posting Time Calculator',
              href: '/calculators/posting-time',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🕐
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Posting Time Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Find optimal posting times based on your audience region and content type.
            Maximize reach by posting when your audience is most active.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Find Your Best Posting Times
            </h2>

            <SelectField
              id="timezone"
              label="Your Timezone"
              value={inputs.timezone}
              onChange={(value) => handleInputChange('timezone', value)}
              options={timezoneOptions}
              helperText="Your local timezone"
              error={errors.timezone}
              required
            />

            <SelectField
              id="audienceRegion"
              label="Primary Audience Region"
              value={inputs.audienceRegion}
              onChange={(value) => handleInputChange('audienceRegion', value)}
              options={regionOptions}
              helperText="Where most of your audience is located"
              error={errors.audienceRegion}
              required
            />

            <SelectField
              id="contentType"
              label="Content Type"
              value={inputs.contentType}
              onChange={(value) => handleInputChange('contentType', value)}
              options={contentOptions}
              helperText="Primary type of content you create"
              error={errors.contentType}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Find Optimal Times
            </Button>

            {results && (
              <div className="mt-6">
                <div className="p-6 bg-gradient-to-br from-secondary-50 to-secondary-100 rounded-xl border border-secondary-200">
                  <h3 className="text-heading-md font-semibold text-neutral-900 mb-4">
                    Optimal Posting Times
                  </h3>
                  <div className="space-y-3">
                    {results.optimalTimes.slice(0, 4).map((time, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                        <div className="flex-1">
                          <p className="text-heading-sm font-semibold text-neutral-900">
                            {time.time}
                          </p>
                          <p className="text-body-sm text-neutral-600 mt-1">
                            {time.reason}
                          </p>
                        </div>
                        <div className="ml-4">
                          <div className="w-12 h-12 rounded-full bg-success-DEFAULT/20 flex items-center justify-center">
                            <span className="text-heading-sm font-bold text-success-DEFAULT">
                              {time.score}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {results.worstTimes && results.worstTimes.length > 0 && (
                  <div className="mt-4 p-4 bg-error-50 rounded-lg border border-error-200">
                    <p className="text-label-md font-semibold text-neutral-900 mb-2">
                      Times to Avoid
                    </p>
                    <ul className="space-y-1">
                      {results.worstTimes.map((time, index) => (
                        <li key={index} className="text-body-sm text-neutral-700">
                          <strong>{time.time}:</strong> {time.reason}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Posting Time Strategy
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Posting when your audience is most active increases initial engagement,
                  which signals to TikTok's algorithm to push your content further.
                </p>
                <p>
                  <strong>Key factors:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Peak hours vary by audience demographics and region</li>
                  <li>Entertainment content performs best in evenings</li>
                  <li>Educational content works well during lunch breaks</li>
                  <li>Test and analyze your own analytics for personalized insights</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                General Best Times
              </h2>
              <div className="space-y-3">
                {[
                  { time: '9:00 AM', desc: 'Morning commute & coffee break' },
                  { time: '12:00 PM', desc: 'Lunch break scrolling' },
                  { time: '5:00 PM', desc: 'Post-work wind down' },
                  { time: '9:00 PM', desc: 'Prime evening engagement' },
                ].map((slot) => (
                  <div key={slot.time} className="p-4 bg-neutral-50 rounded-lg">
                    <p className="font-semibold text-neutral-900">{slot.time}</p>
                    <p className="text-body-sm text-neutral-600">{slot.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="posting-time"
            formula={`Optimal times based on:
1. Audience Region Activity Patterns
2. Content Type Consumption Habits
3. Day of Week Variations
4. Platform-Wide Engagement Data

North America Peak Times:
- Morning: 9-11 AM (commute)
- Midday: 12-2 PM (lunch)
- Evening: 5-7 PM, 9-11 PM (leisure)

Algorithm boost occurs when:
- Initial engagement within 30 minutes is high
- More followers online = faster engagement = better reach`}
            assumptions={[
              { label: 'Time Zones', value: 'Recommendations adjusted for your timezone and audience location' },
              { label: 'Content Type', value: 'Entertainment peaks evenings, educational peaks lunch/morning' },
              { label: 'Consistency', value: 'Posting consistently at same times trains audience and algorithm' },
            ]}
            dataSources={[
              'TikTok Engagement Time Analysis 2024',
              'Social Media Usage Patterns Study',
              'Platform Activity Benchmark Report',
            ]}
            limitations="Optimal times vary by specific audience. Check your TikTok Analytics for personalized insights on when YOUR followers are most active."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Posting Time Calculator"
            faqs={[
              {
                question: 'What is the best time to post on TikTok?',
                answer: 'Generally: 9AM, 12PM, 5PM, and 9PM (EST) for North American audiences. However, YOUR best times depend on your specific audience. Check Analytics → Followers → Follower activity to see when YOUR followers are online. Test different times and track results.',
              },
              {
                question: 'Does posting time really matter?',
                answer: 'Yes! Posting when your audience is active leads to faster initial engagement, which signals to TikTok\'s algorithm to push your content to more people. Videos with strong performance in the first 30-60 minutes get significantly more reach. Timing can 2-3x your views.',
              },
              {
                question: 'Should I post at the same time every day?',
                answer: 'Yes, consistency helps: (1) Trains your audience to expect content, (2) Builds routine engagement patterns, (3) Simplifies analytics tracking. However, test 2-3 optimal times to find YOUR best slot. Post consistently at winning time(s).',
              },
              {
                question: 'How do I find MY best posting time?',
                answer: 'Method: (1) Check TikTok Analytics → Followers → Follower activity graph, (2) Test posting at different times over 2 weeks, (3) Track views/engagement in first hour, (4) Double down on times with highest initial engagement. Your audience\'s behavior matters more than general recommendations.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="posting-time"
            calculators={[
              { name: 'Video Performance Calculator', slug: 'video-performance', description: 'Analyze overall video performance', icon: '🎬' },
              { name: 'Content Calendar ROI Calculator', slug: 'content-calendar-roi', description: 'Measure planning ROI', icon: '📅' },
              { name: 'Engagement Rate Calculator', slug: 'engagement-rate', description: 'Track engagement metrics', icon: '📊' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
