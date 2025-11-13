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
  calculateViralPotential,
  validateViralPotentialInput,
} from '@/lib/calculators/viral-potential';
import type {
  ViralPotentialInput,
  ViralPotentialResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function ViralPotentialCalculatorPage() {
  const [inputs, setInputs] = useState<ViralPotentialInput>({
    followers: 50000,
    engagementRate: 6,
    shareRate: 3,
    saveRate: 2.5,
    completionRate: 70,
  });

  const [results, setResults] = useState<ViralPotentialResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof ViralPotentialInput,
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
    const validation = validateViralPotentialInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateViralPotential(inputs);
      setResults(result);

      trackCalculation(
        'viral-potential',
        { ...inputs },
        { viralScore: result.viralScore, viralChance: result.viralChance }
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
              label: 'Viral Potential Calculator',
              href: '/calculators/viral-potential',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🚀
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Viral Potential Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Predict your content's viral likelihood based on key engagement signals.
            Get a comprehensive viral score and actionable insights.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Viral Potential
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
              min={0}
              required
            />

            <InputField
              id="engagementRate"
              label="Engagement Rate (%)"
              type="number"
              value={inputs.engagementRate}
              onChange={(value) => handleInputChange('engagementRate', value)}
              placeholder="e.g., 6"
              helperText="Your average engagement rate"
              error={errors.engagementRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <InputField
              id="shareRate"
              label="Share Rate (%)"
              type="number"
              value={inputs.shareRate}
              onChange={(value) => handleInputChange('shareRate', value)}
              placeholder="e.g., 3"
              helperText="Shares divided by views"
              error={errors.shareRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <InputField
              id="saveRate"
              label="Save Rate (%)"
              type="number"
              value={inputs.saveRate}
              onChange={(value) => handleInputChange('saveRate', value)}
              placeholder="e.g., 2.5"
              helperText="Saves divided by views"
              error={errors.saveRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <InputField
              id="completionRate"
              label="Completion Rate (%)"
              type="number"
              value={inputs.completionRate}
              onChange={(value) => handleInputChange('completionRate', value)}
              placeholder="e.g., 70"
              helperText="Percentage who watch to the end"
              error={errors.completionRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Viral Potential
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="number"
                  title="Viral Score"
                  subtitle={`${results.viralChance.replace('-', ' ').toUpperCase()} POTENTIAL`}
                />

                {results.factors && (
                  <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                    <p className="text-label-md text-neutral-600 mb-3">
                      Factor Breakdown
                    </p>
                    <div className="space-y-2">
                      {results.factors.map((factor) => (
                        <div key={factor.label} className="flex justify-between items-center">
                          <span className="text-body-sm text-neutral-600">
                            {factor.label}
                          </span>
                          <div className="flex items-center gap-2">
                            <div className="w-24 bg-neutral-100 rounded-full h-2">
                              <div
                                className="bg-secondary-500 h-2 rounded-full"
                                style={{ width: `${factor.score}%` }}
                              />
                            </div>
                            <span className="text-body-sm font-semibold text-neutral-900 w-10 text-right">
                              {factor.score}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                What is Viral Potential?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Viral potential predicts how likely your content is to achieve
                  viral reach on TikTok's For You Page. It analyzes four key signals
                  that the algorithm prioritizes.
                </p>
                <p>
                  <strong>Key factors:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    <strong>Share Rate (30% weight):</strong> Most important - shares
                    signal valuable content
                  </li>
                  <li>
                    <strong>Engagement Rate (25%):</strong> Overall interaction level
                  </li>
                  <li>
                    <strong>Completion Rate (25%):</strong> Viewers watching to the end
                  </li>
                  <li>
                    <strong>Save Rate (20%):</strong> Content valuable enough to save
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Viral Potential Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  {
                    label: 'Very High',
                    range: '80-100',
                    color: 'bg-success-DEFAULT',
                    description: 'Viral breakthrough likely',
                  },
                  {
                    label: 'High',
                    range: '60-79',
                    color: 'bg-secondary-500',
                    description: 'Strong viral potential',
                  },
                  {
                    label: 'Medium',
                    range: '40-59',
                    color: 'bg-warning-DEFAULT',
                    description: 'Occasional viral hits',
                  },
                  {
                    label: 'Low',
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
            calculatorName="viral-potential"
            formula={`Viral Score = (Engagement × 0.25) + (Share × 0.30) + (Save × 0.20) + (Completion × 0.25)

Each metric normalized to 0-100 scale:
- Engagement: Max at 15%
- Share Rate: Max at 5%
- Save Rate: Max at 5%
- Completion: Max at 80%

Example: 6% engagement, 3% shares, 2.5% saves, 70% completion
Score: (40 × 0.25) + (60 × 0.30) + (50 × 0.20) + (88 × 0.25) = 62/100`}
            assumptions={[
              {
                label: 'Algorithm Signals',
                value:
                  'Based on confirmed TikTok algorithm priorities: shares > completion > engagement > saves',
              },
              {
                label: 'Viral Threshold',
                value: '80+ score indicates very high probability of For You Page dominance',
              },
              {
                label: 'Compound Effect',
                value: 'High scores in multiple categories increase viral odds exponentially',
              },
            ]}
            dataSources={[
              'TikTok Algorithm Leak Analysis 2024',
              'Viral Content Study by Later',
              'Creator Success Patterns Research',
            ]}
            limitations="Viral success also depends on timing, trends, and luck. This calculator predicts potential based on content quality signals, not guarantees. Use it to optimize weak areas."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Viral Potential Calculator"
            faqs={[
              {
                question: 'What viral score do I need to go viral?',
                answer:
                  'A score of 80+ indicates very high viral potential, but even 60+ can result in viral videos with the right timing and trends. Focus less on the number and more on which specific factors are dragging down your score - those are your optimization opportunities.',
              },
              {
                question: 'Why is share rate weighted so heavily?',
                answer:
                  'TikTok\'s algorithm treats shares as the strongest signal of valuable content. When users share, they\'re essentially endorsing your content to their personal network, which carries more weight than passive engagement like likes. 3%+ share rate significantly boosts viral potential.',
              },
              {
                question: 'How can I improve my viral score?',
                answer:
                  'Focus on your lowest-scoring factor: (1) Low shares? Create educational, relatable, or controversial content people want to share. (2) Low completion? Cut video length and improve hooks. (3) Low saves? Create tutorials, recipes, or reference content. (4) Low engagement? Use CTAs and ask questions.',
              },
              {
                question: 'Does follower count affect viral potential?',
                answer:
                  'Directly, no - TikTok\'s algorithm gives everyone a chance at virality regardless of follower count. However, larger accounts have more initial engagement which can snowball. Focus on the quality metrics (shares, completion, saves) rather than follower count.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="viral-potential"
            calculators={[
              {
                name: 'Share Ratio Calculator',
                slug: 'share-ratio',
                description:
                  'Analyze your share rate in detail',
                icon: '↗️',
              },
              {
                name: 'Completion Rate Calculator',
                slug: 'completion-rate',
                description: 'Optimize your completion rate',
                icon: '✅',
              },
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description: 'Track overall engagement performance',
                icon: '📊',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
