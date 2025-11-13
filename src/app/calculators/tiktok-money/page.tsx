'use client';

import React, { useState } from 'react';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField } from '@/components/ui/InputField';
import { SelectField } from '@/components/ui/SelectField';
import { MethodologySection } from '@/components/calculator/MethodologySection';
import { FAQSection } from '@/components/calculator/FAQSection';
import { RelatedCalculators } from '@/components/calculator/RelatedCalculators';
import { calculateTotalMoney, validateMoneyCalculatorInput } from '@/lib/calculators/money';
import type { MoneyCalculatorInput, MoneyCalculatorResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';
import { NICHE_DISPLAY_NAMES } from '@/lib/constants/calculator-constants';

export default function TikTokMoneyCalculatorPage() {
  const [inputs, setInputs] = useState<MoneyCalculatorInput>({
    followers: 50000,
    monthlyViews: 500000,
    engagementRate: 5,
    niche: 'lifestyle',
    avgStreamViewers: 100,
    monthlyStreams: 8,
  });

  const [results, setResults] = useState<MoneyCalculatorResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const nicheOptions = Object.entries(NICHE_DISPLAY_NAMES).map(([value, label]) => ({ value, label }));

  const handleInputChange = (field: keyof MoneyCalculatorInput, value: any) => {
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
    const validation = validateMoneyCalculatorInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateTotalMoney(inputs);
      setResults(result);
      trackCalculation('tiktok-money', { ...inputs }, { total_min: result.total.min, total_max: result.total.max });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Calculators', href: '/calculators' }, { label: 'TikTok Money Calculator', href: '/calculators/tiktok-money' }]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white text-3xl mb-6">💵</div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Money Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Calculate your total earnings from all TikTok monetization streams: Creator Fund, brand deals, and LIVE gifts.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate Total Earnings</h2>

            <InputField id="followers" label="Follower Count" type="number" value={inputs.followers} onChange={(value) => handleInputChange('followers', value)} placeholder="e.g., 50000" error={errors.followers} min={1} required />

            <InputField id="monthlyViews" label="Monthly Video Views" type="number" value={inputs.monthlyViews} onChange={(value) => handleInputChange('monthlyViews', value)} placeholder="e.g., 500000" error={errors.monthlyViews} min={1} required />

            <InputField id="engagementRate" label="Engagement Rate (%)" type="number" value={inputs.engagementRate} onChange={(value) => handleInputChange('engagementRate', value)} placeholder="e.g., 5.0" error={errors.engagementRate} min={0} max={100} step={0.1} required />

            <SelectField id="niche" label="Content Niche" value={inputs.niche} onChange={(value) => handleInputChange('niche', value as any)} options={nicheOptions} error={errors.niche} required />

            <InputField id="avgStreamViewers" label="Avg LIVE Viewers (optional)" type="number" value={inputs.avgStreamViewers || 0} onChange={(value) => handleInputChange('avgStreamViewers', value)} placeholder="e.g., 100" helperText="Leave 0 if you don't stream" min={0} />

            <InputField id="monthlyStreams" label="Monthly Streams (optional)" type="number" value={inputs.monthlyStreams || 0} onChange={(value) => handleInputChange('monthlyStreams', value)} placeholder="e.g., 8" min={0} />

            <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">Calculate Total Earnings</Button>

            {results && (
              <div className="mt-6 space-y-4">
                <div className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl border-2 border-primary-200">
                  <p className="text-label-lg text-neutral-600 mb-2">Total Monthly Earnings</p>
                  <p className="text-display-md font-bold text-primary-600">${results.total.min.toLocaleString()}–${results.total.max.toLocaleString()}</p>
                  <p className="text-body-sm text-neutral-600 mt-2">Annual: ${results.additionalMetrics?.annualMin.toLocaleString()}–${results.additionalMetrics?.annualMax.toLocaleString()}</p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-heading-sm font-semibold text-neutral-900 mb-3">Income Breakdown</p>
                  {results.breakdown.map((item) => (
                    <div key={item.label} className="flex items-center justify-between py-2 border-b border-neutral-100 last:border-0">
                      <span className="text-body-md text-neutral-700">{item.label}</span>
                      <div className="text-right">
                        <p className="text-heading-sm font-semibold text-neutral-900">${item.value.toLocaleString()}</p>
                        <p className="text-label-sm text-neutral-500">{item.percentage}%</p>
                      </div>
                    </div>
                  ))}
                </div>

                {results.interpretation && (
                  <div className="p-4 bg-neutral-50 rounded-lg">
                    <p className="text-body-md text-neutral-700 leading-relaxed">{results.interpretation}</p>
                  </div>
                )}
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Monetization Streams</h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">💰 Creator Fund</h3>
                  <p>Passive income from video views. Typically $0.02-$0.04 per 1K views.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">🤝 Brand Deals</h3>
                  <p>Highest earning potential. Rates vary by follower count and engagement.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 mb-2">🎁 LIVE Gifts</h3>
                  <p>Real-time earnings from viewer gifts during live streams.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection calculatorName="tiktok-money" formula={`Total Earnings = Creator Fund + Brand Deals + LIVE Gifts

Creator Fund: (Monthly Views / 1000) × RPM
Brand Deals: Base Rate × Deals/Month
LIVE Gifts: Per-Stream × Streams/Month`} assumptions={[{ label: 'Brand Deals', value: '2 deals/month for 50K+ followers' }, { label: 'LIVE Streams', value: 'User-specified or 0' }]} dataSources={['Combined data from all calculator sources']} limitations="Actual earnings vary. This combines multiple income streams for total potential." lastUpdated="November 13, 2025" />

          <FAQSection pageName="TikTok Money Calculator" faqs={[{ question: 'How much can TikTok creators really earn?', answer: 'Earnings vary widely. Small creators (10-50K) earn $100-$1000/month. Mid-tier (50-500K) earn $1000-$10,000/month. Top creators (500K+) can earn $10,000-$100,000+/month.' }, { question: 'What is the most lucrative income stream?', answer: 'Brand deals typically generate the highest income, often 5-10× more than Creator Fund for the same audience size.' }]} />

          <RelatedCalculators currentCalculator="tiktok-money" calculators={[{ name: 'Creator Fund Calculator', slug: 'tiktok-creator-fund', description: 'Detailed Creator Fund breakdown', icon: '💰' }, { name: 'Brand Deal Calculator', slug: 'brand-deal-rate', description: 'Calculate brand deal rates', icon: '🤝' }, { name: 'LIVE Gifts Calculator', slug: 'live-gifts', description: 'LIVE streaming earnings', icon: '🎁' }]} />
        </div>
      </div>
    </div>
  );
}
