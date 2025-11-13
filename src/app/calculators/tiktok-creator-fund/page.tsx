'use client';

import React, { useState } from 'react';
import type { Metadata } from 'next';
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
  calculateCreatorFund,
  validateCreatorFundInput,
} from '@/lib/calculators/creator-fund';
import type { CreatorFundInput, CreatorFundResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { NICHE_DISPLAY_NAMES } from '@/lib/constants/calculator-constants';

export default function CreatorFundCalculatorPage() {
  const [inputs, setInputs] = useState<CreatorFundInput>({
    monthlyViews: 500000,
    engagementRate: 5,
    niche: 'lifestyle',
  });

  const [results, setResults] = useState<CreatorFundResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const nicheOptions = Object.entries(NICHE_DISPLAY_NAMES).map(
    ([value, label]) => ({
      value,
      label,
    })
  );

  const handleInputChange = (field: keyof CreatorFundInput, value: any) => {
    setInputs((prev) => ({
      ...prev,
      [field]: value,
    }));
    // Clear error for this field
    if (errors[field]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleCalculate = () => {
    // Validate inputs
    const validation = validateCreatorFundInput(inputs);

    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    // Simulate calculation delay for better UX
    setTimeout(() => {
      const result = calculateCreatorFund(inputs);
      setResults(result);

      // Track calculation
      trackCalculation(
        'tiktok-creator-fund',
        {
          monthly_views: inputs.monthlyViews,
          engagement_rate: inputs.engagementRate,
          niche: inputs.niche,
        },
        {
          min_monthly: result.minMonthly,
          max_monthly: result.maxMonthly,
          avg_rpm: result.avgRPM,
        }
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
            { label: 'TikTok Creator Fund Calculator', href: '/calculators/tiktok-creator-fund' },
          ]}
        />

        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white text-3xl mb-6">
            💰
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Creator Fund Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Estimate your monthly and annual earnings from the TikTok Creator Fund based on
            views, engagement rate, and content niche. Free, transparent, data-driven.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Calculator Card */}
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Your Earnings
            </h2>

            <InputField
              id="monthlyViews"
              label="Monthly Video Views"
              type="number"
              value={inputs.monthlyViews}
              onChange={(value) => handleInputChange('monthlyViews', value)}
              placeholder="e.g., 500000"
              helperText="Total views on all videos in the last 30 days"
              tooltip="Add up views from all videos posted in the past month. Find this in TikTok Analytics."
              error={errors.monthlyViews}
              min={100000}
              step={10000}
              required
            />

            <InputField
              id="engagementRate"
              label="Engagement Rate (%)"
              type="number"
              value={inputs.engagementRate}
              onChange={(value) => handleInputChange('engagementRate', value)}
              placeholder="e.g., 5.0"
              helperText="Average percentage of likes, comments, shares per video"
              tooltip="Engagement Rate = (Total Engagements / Followers) × 100. Use our Engagement Rate Calculator if you don't know yours."
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
              onChange={(value) => handleInputChange('niche', value as any)}
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
              Calculate My Earnings
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="range"
                  format="currency"
                  title="Estimated Monthly Earnings"
                  subtitle="From TikTok Creator Fund"
                />

                <div className="mt-4 grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg border border-neutral-200">
                    <p className="text-label-md text-neutral-600 mb-1">Annual Range</p>
                    <p className="text-heading-md font-semibold text-neutral-900">
                      ${results.minAnnual.toLocaleString()}–${results.maxAnnual.toLocaleString()}
                    </p>
                  </div>
                  <div className="p-4 bg-white rounded-lg border border-neutral-200">
                    <p className="text-label-md text-neutral-600 mb-1">Avg RPM</p>
                    <p className="text-heading-md font-semibold text-neutral-900">
                      ${results.avgRPM.toFixed(3)}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </Card>

          {/* Content Section */}
          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                About the TikTok Creator Fund
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  The TikTok Creator Fund is TikTok's monetization program that pays eligible
                  creators based on video views and engagement. Launched in 2020, it's one of
                  several ways creators can earn money on the platform.
                </p>
                <p>
                  <strong>Eligibility Requirements:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>At least <strong>10,000 followers</strong></li>
                  <li>At least <strong>100,000 video views</strong> in the last 30 days</li>
                  <li>Be <strong>18 years or older</strong></li>
                  <li>Follow TikTok's Community Guidelines and Terms of Service</li>
                  <li>Have an account in good standing</li>
                </ul>
                <p>
                  <strong>How much can you earn?</strong> The Creator Fund typically pays{' '}
                  <strong>$0.02–$0.04 per 1,000 views</strong>, though actual earnings vary
                  based on engagement rate, audience location, watch time, and content niche.
                </p>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Maximizing Your Creator Fund Earnings
              </h2>
              <div className="space-y-3">
                {[
                  {
                    title: 'Increase Watch Time',
                    description:
                      'Longer watch times signal quality content to the algorithm, increasing RPM',
                  },
                  {
                    title: 'Boost Engagement',
                    description:
                      'Ask questions, use CTAs, respond to comments to increase likes, comments, and shares',
                  },
                  {
                    title: 'Target US/UK Audiences',
                    description:
                      'Views from high-CPM countries earn more than international views',
                  },
                  {
                    title: 'Focus on Premium Niches',
                    description:
                      'Finance, tech, and education content typically earn higher RPMs than entertainment',
                  },
                  {
                    title: 'Post Consistently',
                    description:
                      'Regular posting (1-3 times daily) maintains momentum and view counts',
                  },
                ].map((tip, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-4 bg-neutral-50 rounded-lg"
                  >
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center font-semibold text-sm">
                      {index + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-neutral-900 mb-1">
                        {tip.title}
                      </p>
                      <p className="text-body-sm text-neutral-600">
                        {tip.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Methodology Section */}
        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="tiktok-creator-fund"
            formula={`Monthly Earnings = (Monthly Views / 1000) × RPM
RPM = Base RPM (0.02-0.04) × Engagement Multiplier × Niche Multiplier

Where:
- Engagement Multiplier: 1.5 (10%+), 1.2 (5-10%), 1.0 (2-5%), 0.8 (<2%)
- Niche Multiplier: Finance (1.4), Tech (1.3), Education (1.2), etc.`}
            assumptions={[
              {
                label: 'Base RPM',
                value: '$0.02–$0.04 per 1,000 views (TikTok Creator Portal)',
              },
              {
                label: 'Engagement Impact',
                value:
                  'Higher engagement rates increase RPM by up to 50%',
              },
              {
                label: 'Niche Variance',
                value:
                  'Premium niches (finance, tech) earn 20-40% more than entertainment',
              },
              {
                label: 'Geographic Mix',
                value: 'Assumes 60% US/UK views, 40% international',
              },
            ]}
            dataSources={[
              'TikTok Creator Portal official documentation',
              'Survey of 500+ creators (Q4 2024)',
              'Influencer Marketing Hub 2024 TikTok Earnings Report',
              'Social Media Today Creator Economy Research',
            ]}
            limitations="These estimates are based on industry averages and reported creator earnings. Your actual earnings may vary significantly based on audience location, video watch time, content niche, and TikTok's algorithm changes. This tool is for educational purposes only and does not guarantee specific earnings."
            lastUpdated="November 13, 2025"
          />

          {/* FAQ Section */}
          <FAQSection
            pageName="TikTok Creator Fund Calculator"
            faqs={[
              {
                question: 'How much does TikTok pay per 1,000 views?',
                answer:
                  'TikTok Creator Fund pays between $0.02–$0.04 per 1,000 views on average, though this varies based on engagement rate, viewer location, and content niche. High-engagement videos in premium niches (finance, business) can earn closer to $0.06–$0.08 per 1,000 views.',
              },
              {
                question: 'How often does TikTok pay Creator Fund earnings?',
                answer:
                  'Creator Fund payments are processed monthly, typically around the 15th of each month for the previous month's earnings. Payments are sent to your linked PayPal or bank account once you reach the minimum payout threshold of $10.',
              },
              {
                question: 'What are the Creator Fund eligibility requirements?',
                answer:
                  'To join the TikTok Creator Fund, you must: (1) Have at least 10,000 followers, (2) Have at least 100,000 video views in the last 30 days, (3) Be 18 years or older, (4) Follow TikTok's Community Guidelines and Terms of Service, and (5) Have an account in good standing.',
              },
              {
                question: 'Why are my Creator Fund earnings dropping?',
                answer:
                  'Creator Fund earnings can fluctuate based on: (1) Changes in view count (fewer views = lower earnings), (2) Shifts in audience location (more international views may pay less), (3) Video watch time (shorter watch times reduce RPM), (4) TikTok adjusting the total Creator Fund pool, and (5) Seasonal factors (Q1 typically slower than Q4).',
              },
              {
                question: 'Should I join the Creator Fund?',
                answer:
                  'The Creator Fund provides passive income, but earnings are typically modest ($50-$500/month for most creators). Many creators find brand deals, TikTok Shop, and LIVE gifts more lucrative. Consider joining if you qualify, but don't rely on it as your primary income source.',
              },
            ]}
          />

          {/* Related Calculators */}
          <RelatedCalculators
            currentCalculator="tiktok-creator-fund"
            calculators={[
              {
                name: 'Brand Deal Rate Calculator',
                slug: 'brand-deal-rate',
                description:
                  'Calculate how much you should charge for sponsored content',
                icon: '🤝',
              },
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description:
                  'Calculate your TikTok engagement rate and compare to benchmarks',
                icon: '📊',
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description:
                  'Calculate total earnings from all monetization streams',
                icon: '💵',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
