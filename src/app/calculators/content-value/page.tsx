'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { ResultsDisplay } from '@/components/calculator/ResultsDisplay';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import {
  calculateContentValue,
  validateContentValueInput,
} from '@/lib/calculators/content-value';
import type {
  ContentValueInput,
  ContentValueResult,
  ContentNiche,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function ContentValueCalculatorPage() {
  const [inputs, setInputs] = useState<ContentValueInput>({
    totalVideos: 100,
    avgViewsPerVideo: 50000,
    engagementRate: 5,
    niche: 'lifestyle',
  });

  const [results, setResults] = useState<ContentValueResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof ContentValueInput,
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
    const validation = validateContentValueInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateContentValue(inputs);
      setResults(result);

      trackCalculation(
        'content-value',
        { ...inputs },
        { estimatedValue: result.estimatedValue }
      );

      setIsCalculating(false);
    }, 500);
  };

  const nicheOptions = [
    { value: 'lifestyle', label: 'Lifestyle' },
    { value: 'beauty-fashion', label: 'Beauty & Fashion' },
    { value: 'fitness', label: 'Fitness' },
    { value: 'finance', label: 'Finance' },
    { value: 'gaming', label: 'Gaming' },
    { value: 'food', label: 'Food' },
    { value: 'comedy', label: 'Comedy' },
    { value: 'education', label: 'Education' },
    { value: 'entertainment', label: 'Entertainment' },
    { value: 'tech', label: 'Tech' },
    { value: 'other', label: 'Other' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Content Value Calculator',
              href: '/calculators/content-value',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            💎
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Content Value Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Estimate the total monetary value of your content portfolio. Useful
            for acquisitions, partnerships, or understanding your content worth.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Content Value
            </h2>

            <InputField
              id="totalVideos"
              label="Total Videos"
              type="number"
              value={inputs.totalVideos}
              onChange={(value) => handleInputChange('totalVideos', value)}
              placeholder="e.g., 100"
              helperText="Total number of videos on your account"
              error={errors.totalVideos}
              min={1}
              required
            />

            <InputField
              id="avgViewsPerVideo"
              label="Average Views per Video"
              type="number"
              value={inputs.avgViewsPerVideo}
              onChange={(value) => handleInputChange('avgViewsPerVideo', value)}
              placeholder="e.g., 50000"
              helperText="Average views across all videos"
              error={errors.avgViewsPerVideo}
              min={0}
              required
            />

            <InputField
              id="engagementRate"
              label="Engagement Rate (%)"
              type="number"
              value={inputs.engagementRate}
              onChange={(value) => handleInputChange('engagementRate', value)}
              placeholder="e.g., 5"
              helperText="Your average engagement rate"
              error={errors.engagementRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <SelectField
              id="niche"
              label="Content Niche"
              value={inputs.niche}
              onChange={(value) => handleInputChange('niche', value as ContentNiche)}
              options={nicheOptions}
              helperText="Your primary content category"
              error={errors.niche}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Content Value
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="currency"
                  title="Estimated Content Value"
                  subtitle={`$${results.valuePerVideo.toLocaleString()} per video average`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Value Breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Total Reach
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.totalReach.toLocaleString()} views
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Value per Video
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.valuePerVideo.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-body-sm text-neutral-600">
                        Total Portfolio Value
                      </span>
                      <span className="text-body-sm font-semibold text-success-DEFAULT">
                        ${results.estimatedValue.toLocaleString()}
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
                What is Content Value?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Content value estimates the monetary worth of your entire video
                  portfolio based on reach, engagement, and niche monetization
                  potential. It's calculated per video and aggregated.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Helps negotiate licensing deals or account acquisitions
                  </li>
                  <li>
                    Demonstrates ROI when pitching to investors
                  </li>
                  <li>
                    Higher-value niches (finance, tech) have better monetization
                  </li>
                  <li>
                    Tracks how your content library grows in value over time
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Content Value by Niche
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Finance', multiplier: '3.0x', color: 'bg-success-DEFAULT' },
                  { label: 'Tech', multiplier: '2.5x', color: 'bg-success-DEFAULT' },
                  { label: 'Beauty & Fashion', multiplier: '2.0x', color: 'bg-secondary-500' },
                  { label: 'Lifestyle', multiplier: '1.5x', color: 'bg-secondary-500' },
                  { label: 'Entertainment', multiplier: '1.0x', color: 'bg-warning-DEFAULT' },
                ].map((niche) => (
                  <div
                    key={niche.label}
                    className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${niche.color}`} />
                      <span className="font-semibold text-neutral-900">
                        {niche.label}
                      </span>
                    </div>
                    <span className="font-semibold text-neutral-900">
                      {niche.multiplier}
                    </span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="content-value"
            formula={`Base Value per Video = (Avg Views / 1000) × CPM × Engagement Multiplier
CPM = $2-$10 depending on niche
Engagement Multiplier = 1 + (Engagement Rate / 10)
Total Value = Base Value × Total Videos

Example:
100 videos, 50K avg views, 5% engagement, Lifestyle niche
Base: (50,000 / 1000) × $5 × 1.5 = $375 per video
Total: $375 × 100 = $37,500`}
            assumptions={[
              {
                label: 'CPM Rates',
                value:
                  'Based on industry-standard TikTok CPM rates by niche ($2-10)',
              },
              {
                label: 'Engagement Premium',
                value: 'Higher engagement adds 10-50% value premium',
              },
              {
                label: 'Content Longevity',
                value: 'Assumes evergreen content retains value; trending content depreciates faster',
              },
            ]}
            dataSources={[
              'TikTok Creator Marketplace CPM Data 2024',
              'Content Portfolio Valuation Study',
              'Influencer Account Acquisition Benchmarks',
            ]}
            limitations="Values are estimates for negotiation purposes. Actual value depends on audience demographics, content rights, and buyer needs. Trending content loses value faster than evergreen content."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Content Value Calculator"
            faqs={[
              {
                question: 'How is content value calculated?',
                answer:
                  'Content value is based on three factors: (1) Total reach (views), (2) Engagement quality, and (3) Niche monetization potential. High-value niches like finance and tech command 2-3x premiums due to better brand deal rates and audience purchasing power.',
              },
              {
                question: 'When would I use a content value calculation?',
                answer:
                  'Use cases: (1) Negotiating account acquisition or sale, (2) Licensing your content library to brands/agencies, (3) Pitching to investors or seeking loans, (4) Understanding asset value for tax/accounting, (5) Comparing ROI across different content strategies.',
              },
              {
                question: 'Does old content still have value?',
                answer:
                  'Yes, if it\'s evergreen. Educational, tutorial, and reference content retains value longer. Trending/meme content depreciates quickly. Videos still getting views (even years later) are highly valuable. Check your analytics for "catalog content" that continues performing.',
              },
              {
                question: 'How can I increase my content portfolio value?',
                answer:
                  'Strategies: (1) Pivot to higher-value niches (finance, tech, B2B), (2) Create evergreen content that compounds views, (3) Improve engagement rate (comments/shares worth more), (4) Build a larger content library, (5) Optimize for SEO/discoverability to extend content lifespan.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="content-value"
            calculators={[
              {
                name: 'Niche Profitability Calculator',
                slug: 'niche-profitability',
                description:
                  'Compare earning potential across niches',
                icon: '🎯',
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'Estimate total earnings across all streams',
                icon: '💵',
              },
              {
                name: 'Production Cost Calculator',
                slug: 'production-cost',
                description: 'Calculate content creation costs',
                icon: '🎥',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
