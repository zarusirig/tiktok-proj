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
  calculateMultiPlatformEarnings,
  validateMultiPlatformEarningsInput,
} from '@/lib/calculators/multi-platform-earnings';
import type {
  MultiPlatformEarningsInput,
  MultiPlatformEarningsResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function MultiPlatformEarningsCalculatorPage() {
  const [inputs, setInputs] = useState<MultiPlatformEarningsInput>({
    tiktokFollowers: 100000,
    youtubeSubscribers: 50000,
    instagramFollowers: 75000,
    monthlyViews: {
      tiktok: 2000000,
      youtube: 500000,
      instagram: 1000000,
    },
  });

  const [results, setResults] = useState<MultiPlatformEarningsResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof MultiPlatformEarningsInput,
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

  const handleViewChange = (platform: 'tiktok' | 'youtube' | 'instagram', value: string | number) => {
    setInputs((prev) => ({
      ...prev,
      monthlyViews: {
        ...prev.monthlyViews,
        [platform]: typeof value === 'string' ? parseFloat(value) || 0 : value,
      },
    }));
  };

  const handleCalculate = () => {
    const validation = validateMultiPlatformEarningsInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateMultiPlatformEarnings(inputs);
      setResults(result);

      trackCalculation(
        'multi-platform-earnings',
        { ...inputs },
        { totalMin: result.totalEarnings.min, totalMax: result.totalEarnings.max }
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
              label: 'Multi-Platform Earnings Calculator',
              href: '/calculators/multi-platform-earnings',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            📱
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Multi-Platform Earnings Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Compare earning potential across TikTok, YouTube, and Instagram.
            Identify which platform to prioritize for maximum revenue.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Enter Platform Stats
            </h2>

            <div className="space-y-4 mb-6">
              <h3 className="text-heading-sm font-semibold text-neutral-900">Followers</h3>
              <InputField
                id="tiktokFollowers"
                label="TikTok Followers"
                type="number"
                value={inputs.tiktokFollowers}
                onChange={(value) => handleInputChange('tiktokFollowers', value)}
                placeholder="e.g., 100000"
                error={errors.tiktokFollowers}
                min={0}
                required
              />
              <InputField
                id="youtubeSubscribers"
                label="YouTube Subscribers"
                type="number"
                value={inputs.youtubeSubscribers}
                onChange={(value) => handleInputChange('youtubeSubscribers', value)}
                placeholder="e.g., 50000"
                error={errors.youtubeSubscribers}
                min={0}
                required
              />
              <InputField
                id="instagramFollowers"
                label="Instagram Followers"
                type="number"
                value={inputs.instagramFollowers}
                onChange={(value) => handleInputChange('instagramFollowers', value)}
                placeholder="e.g., 75000"
                error={errors.instagramFollowers}
                min={0}
                required
              />
            </div>

            <div className="space-y-4">
              <h3 className="text-heading-sm font-semibold text-neutral-900">Monthly Views</h3>
              <InputField
                id="tiktokViews"
                label="TikTok Monthly Views"
                type="number"
                value={inputs.monthlyViews.tiktok}
                onChange={(value) => handleViewChange('tiktok', value)}
                placeholder="e.g., 2000000"
                min={0}
                required
              />
              <InputField
                id="youtubeViews"
                label="YouTube Monthly Views"
                type="number"
                value={inputs.monthlyViews.youtube}
                onChange={(value) => handleViewChange('youtube', value)}
                placeholder="e.g., 500000"
                min={0}
                required
              />
              <InputField
                id="instagramViews"
                label="Instagram Monthly Views"
                type="number"
                value={inputs.monthlyViews.instagram}
                onChange={(value) => handleViewChange('instagram', value)}
                placeholder="e.g., 1000000"
                min={0}
                required
              />
            </div>

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Earnings
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={{ value: results.totalEarnings.min, min: results.totalEarnings.min, max: results.totalEarnings.max }}
                  type="range"
                  format="currency"
                  title="Total Monthly Earnings"
                  subtitle={`Best platform: ${results.bestPlatform.toUpperCase()}`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Platform Breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">TikTok</span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.tiktokEarnings.min.toLocaleString()} - ${results.tiktokEarnings.max.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">YouTube</span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.youtubeEarnings.min.toLocaleString()} - ${results.youtubeEarnings.max.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">Instagram</span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.instagramEarnings.min.toLocaleString()} - ${results.instagramEarnings.max.toLocaleString()}
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
                Platform Comparison
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>Each platform has different monetization potential and RPM rates:</p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">YouTube:</span>
                    <span>$1.50-8/1K views - Best ad revenue, requires 1K subs + 4K watch hours</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Instagram:</span>
                    <span>$0.50-3/1K views - Reels bonus + strong brand deal rates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">TikTok:</span>
                    <span>$0.02-0.04/1K views - Lowest ad revenue but fastest growth</span>
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Growth Strategy
              </h2>
              <div className="space-y-3 text-body-sm">
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Start:</strong> TikTok for rapid audience growth
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Scale:</strong> Repurpose TikToks to Instagram Reels
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Monetize:</strong> Drive traffic to YouTube for higher RPM
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Diversify:</strong> Brand deals across all platforms
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="multi-platform-earnings"
            formula={`Platform RPM Rates:
- YouTube: $1.50-8/1K views
- Instagram: $0.50-3/1K views
- TikTok: $0.02-0.04/1K views

Monthly Earnings = (Views / 1000) × RPM

Example:
YouTube: 500K views × $4 RPM = $2,000
Instagram: 1M views × $1.50 RPM = $1,500
TikTok: 2M views × $0.03 RPM = $60
Total: $3,560/month`}
            assumptions={[
              { label: 'RPM Variance', value: 'Actual RPM depends on niche, audience location, and engagement' },
              { label: 'Brand Deals', value: 'Does not include brand deal earnings (typically 5-10x ad revenue)' },
              { label: 'YouTube Advantage', value: 'YouTube has highest RPM but requires longer content' },
            ]}
            dataSources={[
              'Multi-Platform Creator Revenue Report 2024',
              'Social Media Monetization Benchmark Study',
              'Platform RPM Comparison Analysis',
            ]}
            limitations="Estimates are for ad revenue only. Brand deals, affiliate marketing, and product sales can significantly increase earnings across all platforms."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Multi-Platform Earnings Calculator"
            faqs={[
              {
                question: 'Which platform pays the most?',
                answer: 'YouTube pays highest per view ($1.50-8/1K) but requires 1K subs + 4K watch hours. Instagram Reels pay $0.50-3/1K. TikTok pays least ($0.02-0.04/1K) but has fastest growth. Strategy: grow on TikTok, repurpose to Instagram, monetize on YouTube.',
              },
              {
                question: 'Should I focus on one platform or all three?',
                answer: 'Start with TikTok (easiest growth), then expand. Repurpose content to Instagram Reels (same vertical format). Once you have an audience, create longer YouTube content for higher monetization. Multi-platform diversifies risk and maximizes reach.',
              },
              {
                question: 'How do I repurpose content across platforms?',
                answer: 'TikTok → Instagram Reels: Direct repost (same format). TikTok → YouTube Shorts: Direct upload. TikTok → YouTube Long-form: Combine multiple TikToks into compilation or expand into 8-15 min video. Use native uploading (don\'t include watermarks).',
              },
              {
                question: 'Why is TikTok RPM so low?',
                answer: 'TikTok Creator Fund pays $0.02-0.04/1K views, much lower than YouTube. However, TikTok has easiest organic reach. Smart creators use TikTok for audience building, then monetize through: brand deals (10x more than fund), affiliate links, own products, or driving traffic to higher-paying platforms.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="multi-platform-earnings"
            calculators={[
              { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Deep dive on TikTok earnings', icon: '💵' },
              { name: 'Ad Revenue Calculator', slug: 'ad-revenue', description: 'Calculate ad revenue potential', icon: '💰' },
              { name: 'Content Value Calculator', slug: 'content-value', description: 'Assess content portfolio value', icon: '💎' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
