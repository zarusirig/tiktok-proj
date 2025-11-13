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
  calculateHashtagPerformance,
  validateHashtagPerformanceInput,
} from '@/lib/calculators/hashtag-performance';
import type {
  HashtagPerformanceInput,
  HashtagPerformanceResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function HashtagPerformanceCalculatorPage() {
  const [inputs, setInputs] = useState<HashtagPerformanceInput>({
    baselineViews: 50000,
    hashtagViews: 75000,
    hashtagEngagement: 4500,
    baselineEngagement: 2500,
  });

  const [results, setResults] = useState<HashtagPerformanceResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof HashtagPerformanceInput,
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
    const validation = validateHashtagPerformanceInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateHashtagPerformance(inputs);
      setResults(result);

      trackCalculation(
        'hashtag-performance',
        { ...inputs },
        { effectivenessScore: result.effectivenessScore, rating: result.rating }
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
              label: 'Hashtag Performance Calculator',
              href: '/calculators/hashtag-performance',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            #️⃣
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Hashtag Performance Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Analyze hashtag effectiveness by comparing performance with and without
            specific hashtags. Optimize your hashtag strategy.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Hashtag Impact
            </h2>

            <InputField
              id="baselineViews"
              label="Baseline Views"
              type="number"
              value={inputs.baselineViews}
              onChange={(value) => handleInputChange('baselineViews', value)}
              placeholder="e.g., 50000"
              helperText="Average views without the hashtag"
              error={errors.baselineViews}
              min={1}
              required
            />

            <InputField
              id="hashtagViews"
              label="Hashtag Views"
              type="number"
              value={inputs.hashtagViews}
              onChange={(value) => handleInputChange('hashtagViews', value)}
              placeholder="e.g., 75000"
              helperText="Views when using the hashtag"
              error={errors.hashtagViews}
              min={0}
              required
            />

            <InputField
              id="baselineEngagement"
              label="Baseline Engagement"
              type="number"
              value={inputs.baselineEngagement}
              onChange={(value) => handleInputChange('baselineEngagement', value)}
              placeholder="e.g., 2500"
              helperText="Engagement without the hashtag"
              error={errors.baselineEngagement}
              min={0}
              required
            />

            <InputField
              id="hashtagEngagement"
              label="Hashtag Engagement"
              type="number"
              value={inputs.hashtagEngagement}
              onChange={(value) => handleInputChange('hashtagEngagement', value)}
              placeholder="e.g., 4500"
              helperText="Engagement with the hashtag"
              error={errors.hashtagEngagement}
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
              Analyze Hashtag
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="number"
                  title="Effectiveness Score"
                  subtitle={`${results.rating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Performance Lift
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">View Lift</span>
                      <span className={`text-body-sm font-semibold ${results.viewLift >= 0 ? 'text-success-DEFAULT' : 'text-error-DEFAULT'}`}>
                        {results.viewLift >= 0 ? '+' : ''}{results.viewLift.toFixed(1)}%
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">Engagement Lift</span>
                      <span className={`text-body-sm font-semibold ${results.engagementLift >= 0 ? 'text-success-DEFAULT' : 'text-error-DEFAULT'}`}>
                        {results.engagementLift >= 0 ? '+' : ''}{results.engagementLift.toFixed(1)}%
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
                Hashtag Strategy Guide
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Effective hashtags expand your reach beyond your followers by placing
                  your content in discovery feeds and search results.
                </p>
                <p>
                  <strong>Hashtag types:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Trending:</strong> High traffic but very competitive</li>
                  <li><strong>Niche:</strong> Lower traffic but targeted audience</li>
                  <li><strong>Branded:</strong> Build community around your brand</li>
                  <li><strong>Location:</strong> Target local audiences</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Effectiveness Ratings
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Highly Effective', range: '70-100', color: 'bg-success-DEFAULT' },
                  { label: 'Effective', range: '50-69', color: 'bg-secondary-500' },
                  { label: 'Neutral', range: '30-49', color: 'bg-warning-DEFAULT' },
                  { label: 'Ineffective', range: '0-29', color: 'bg-error-DEFAULT' },
                ].map((benchmark) => (
                  <div key={benchmark.label} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
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
            calculatorName="hashtag-performance"
            formula={`View Lift = [(Hashtag Views - Baseline Views) / Baseline Views] × 100
Engagement Lift = [(Hashtag Engagement - Baseline) / Baseline] × 100
Effectiveness Score = (View Score + Engagement Score) / 2

Example:
Baseline: 50K views, 2.5K engagement
Hashtag: 75K views, 4.5K engagement
View Lift: +50%, Engagement Lift: +80%
Effectiveness Score: 75/100 (Highly Effective)`}
            assumptions={[
              { label: 'Comparison Method', value: 'Compare similar content with/without hashtags for accuracy' },
              { label: 'Sample Size', value: 'Test across 5-10 videos for reliable results' },
              { label: 'Timing', value: 'Account for posting time and day of week variations' },
            ]}
            dataSources={[
              'TikTok Hashtag Analytics Study 2024',
              'Social Media Discovery Algorithm Research',
              'Hashtag Performance Benchmark Report',
            ]}
            limitations="Results vary by hashtag popularity, niche, and competition. Test multiple hashtags to find your optimal mix."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Hashtag Performance Calculator"
            faqs={[
              {
                question: 'How many hashtags should I use on TikTok?',
                answer: '3-5 hashtags is optimal. Mix: 1-2 trending/popular (broad reach), 1-2 niche-specific (targeted audience), 1 branded (community building). Avoid: irrelevant hashtags, banned hashtags, or hashtag stuffing (diminishes effectiveness).',
              },
              {
                question: 'Should I use trending hashtags?',
                answer: 'Yes, but strategically. Trending hashtags increase reach but also competition. Best practice: Use 1 trending + 2-3 niche hashtags. Only use trending tags relevant to your content - TikTok penalizes irrelevant hashtag usage.',
              },
              {
                question: 'How do I find effective hashtags?',
                answer: 'Methods: (1) Analyze competitors\' top videos, (2) Check TikTok\'s Discover page, (3) Search your niche and see autocomplete suggestions, (4) Use TikTok Creative Center for trending hashtags, (5) Test and measure (use this calculator!).',
              },
              {
                question: 'Do hashtags still work on TikTok in 2025?',
                answer: 'Yes! While TikTok\'s algorithm has evolved, hashtags remain important for: (1) Search discovery, (2) Niche community targeting, (3) Trend participation. However, content quality matters more - great content with bad hashtags outperforms bad content with perfect hashtags.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="hashtag-performance"
            calculators={[
              { name: 'Video Performance Calculator', slug: 'video-performance', description: 'Comprehensive video analysis', icon: '🎬' },
              { name: 'Viral Potential Calculator', slug: 'viral-potential', description: 'Predict viral success', icon: '🚀' },
              { name: 'Engagement Rate Calculator', slug: 'engagement-rate', description: 'Measure overall engagement', icon: '📊' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
