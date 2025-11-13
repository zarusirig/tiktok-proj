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
  calculateSaveRate,
  validateSaveRateInput,
} from '@/lib/calculators/save-rate';
import type {
  SaveRateInput,
  SaveRateResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function SaveRateCalculatorPage() {
  const [inputs, setInputs] = useState<SaveRateInput>({
    views: 50000,
    saves: 1000,
  });

  const [results, setResults] = useState<SaveRateResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof SaveRateInput,
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
    const validation = validateSaveRateInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateSaveRate(inputs);
      setResults(result);

      trackCalculation(
        'save-rate',
        { ...inputs },
        { saveRate: result.saveRate, contentValueRating: result.contentValueRating }
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
              label: 'Save Rate Calculator',
              href: '/calculators/save-rate',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🔖
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Save Rate Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your save-to-view ratio to measure content value. High save
            rates indicate evergreen, reference-worthy content.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Save Rate
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
              id="saves"
              label="Total Saves"
              type="number"
              value={inputs.saves}
              onChange={(value) => handleInputChange('saves', value)}
              placeholder="e.g., 1000"
              helperText="Number of times video was saved"
              error={errors.saves}
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
              Calculate Save Rate
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="Save Rate"
                  subtitle={`${results.contentValueRating.replace('-', ' ').toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    What This Means
                  </p>
                  <p className="text-body-sm text-neutral-700">
                    {results.saveRate >= 5
                      ? 'Exceptional! Your content is highly valuable and worth revisiting.'
                      : results.saveRate >= 2
                      ? 'Strong save rate! Your content provides lasting value to viewers.'
                      : results.saveRate >= 0.5
                      ? 'Average save rate. Create more reference-worthy or tutorial content.'
                      : 'Low save rate. Focus on educational, inspirational, or practical content.'}
                  </p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Save Rate?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Save rate measures what percentage of viewers save your content for
                  later viewing. High save rates indicate valuable, evergreen content
                  that viewers want to reference again.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Saves signal high content value to TikTok's algorithm
                  </li>
                  <li>
                    Educational and tutorial content naturally gets more saves
                  </li>
                  <li>
                    High save rates improve long-term content discoverability
                  </li>
                  <li>
                    Saves indicate content worth revisiting, not just scrolling past
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Save Rate Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Excellent',
                    range: '5%+',
                    color: 'bg-success-DEFAULT',
                    description: 'Highly valuable content',
                  },
                  {
                    label: 'Good',
                    range: '2-5%',
                    color: 'bg-secondary-500',
                    description: 'Reference-worthy',
                  },
                  {
                    label: 'Average',
                    range: '0.5-2%',
                    color: 'bg-warning-DEFAULT',
                    description: 'Typical save rate',
                  },
                  {
                    label: 'Below Average',
                    range: '<0.5%',
                    color: 'bg-error-DEFAULT',
                    description: 'Needs more value',
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
            calculatorName="save-rate"
            formula={`Save Rate = (Saves / Views) × 100

Example:
Views: 50,000
Saves: 1,000
Save Rate: (1,000 / 50,000) × 100 = 2%

This 2% save rate indicates good content value`}
            assumptions={[
              {
                label: 'Content Type',
                value:
                  'Educational, tutorial, and recipe content typically have higher save rates',
              },
              {
                label: 'Long-term Value',
                value: 'Saves boost content in search and recommendations over time',
              },
              {
                label: 'Evergreen Content',
                value: 'Content with high saves continues performing months/years later',
              },
            ]}
            dataSources={[
              'TikTok Algorithm Insights 2024',
              'Content Value Metrics Study',
              'User Engagement Behavior Research',
            ]}
            limitations="Save rate varies significantly by content type. Entertainment content naturally gets fewer saves than educational content. Compare against similar content in your niche."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Save Rate Calculator"
            faqs={[
              {
                question: 'What is a good save rate on TikTok?',
                answer:
                  'Excellent: 5%+ (exceptional value), Good: 2-5% (save-worthy), Average: 0.5-2% (typical), Below Average: <0.5%. Educational creators should aim for 3-5%, while entertainment creators might see 0.5-2%. Focus on your niche\'s benchmarks.',
              },
              {
                question: 'Why do saves matter for the algorithm?',
                answer:
                  'Saves signal that your content has lasting value beyond immediate entertainment. TikTok interprets this as high-quality content worth recommending to more users. Saved videos often get resurged in the FYP weeks or months later, creating long-tail traffic.',
              },
              {
                question: 'How can I increase my save rate?',
                answer:
                  'Create save-worthy content: (1) Tutorials and how-tos, (2) Recipes and cooking guides, (3) Educational content worth revisiting, (4) Life hacks and tips, (5) Workout routines, (6) Book/product recommendations, (7) Travel itineraries, (8) Add text "Save this for later!" as a CTA.',
              },
              {
                question: 'Where can I see save counts in TikTok Analytics?',
                answer:
                  'Go to Creator Tools → Analytics → Content tab → Select a video → Scroll to engagement metrics. "Favorites" is TikTok\'s term for saves. High favorites often correlate with better long-term performance as TikTok reshows saved content.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="save-rate"
            calculators={[
              {
                name: 'Share Ratio Calculator',
                slug: 'share-ratio',
                description:
                  'Measure viral potential through shares',
                icon: '↗️',
              },
              {
                name: 'Viral Potential Calculator',
                slug: 'viral-potential',
                description: 'Comprehensive viral score including saves',
                icon: '🚀',
              },
              {
                name: 'Content Value Calculator',
                slug: 'content-value',
                description: 'Estimate content portfolio value',
                icon: '💎',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
