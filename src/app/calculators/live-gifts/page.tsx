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
import { calculateLiveGifts, validateLiveGiftsInput } from '@/lib/calculators/live-gifts';
import type { LiveGiftsInput, LiveGiftsResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function LiveGiftsCalculatorPage() {
  const [inputs, setInputs] = useState<LiveGiftsInput>({
    avgViewers: 100,
    avgStreamDuration: 60,
    giftsPerViewer: 0.5,
  });

  const [results, setResults] = useState<LiveGiftsResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof LiveGiftsInput, value: any) => {
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
    const validation = validateLiveGiftsInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateLiveGifts(inputs);
      setResults(result);
      trackCalculation('live-gifts', { ...inputs }, { usd_earnings: result.usdEarnings, monthly_potential: result.monthlyPotential });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Calculators', href: '/calculators' }, { label: 'LIVE Gifts Calculator', href: '/calculators/live-gifts' }]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-secondary text-white text-3xl mb-6">🎁</div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok LIVE Gifts Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Estimate your earnings from TikTok LIVE streaming based on average viewers, stream duration, and gifting rate.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate LIVE Earnings</h2>

            <InputField id="avgViewers" label="Average Viewers" type="number" value={inputs.avgViewers} onChange={(value) => handleInputChange('avgViewers', value)} placeholder="e.g., 100" helperText="Typical concurrent viewers during your streams" error={errors.avgViewers} min={1} required />

            <InputField id="avgStreamDuration" label="Stream Duration (minutes)" type="number" value={inputs.avgStreamDuration} onChange={(value) => handleInputChange('avgStreamDuration', value)} placeholder="e.g., 60" helperText="How long you typically stream" error={errors.avgStreamDuration} min={1} max={480} required />

            <InputField id="giftsPerViewer" label="Gifts Per Viewer" type="number" value={inputs.giftsPerViewer} onChange={(value) => handleInputChange('giftsPerViewer', value)} placeholder="e.g., 0.5" helperText="Average gifts received per viewer" tooltip="Start with 0.3-0.5 for most creators. Highly engaging streams can reach 1.0+" error={errors.giftsPerViewer} min={0} step={0.1} required />

            <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">Calculate LIVE Earnings</Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay results={results} type="single" format="currency" title="Earnings Per Stream" subtitle={`${results.diamondsEarned.toLocaleString()} diamonds`} />
                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-1">Monthly Potential (8 streams)</p>
                  <p className="text-heading-lg font-semibold text-neutral-900">${results.monthlyPotential.toLocaleString()}</p>
                </div>
              </div>
            )}
          </Card>

          <div className="space-y-8">
            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">About TikTok LIVE Gifts</h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>TikTok LIVE allows viewers to send virtual gifts during live streams. Creators receive diamonds (converted from coins), which can be exchanged for real money.</p>
                <p><strong>How it works:</strong></p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Viewers purchase coins ($0.0105 per coin)</li>
                  <li>Viewers send gifts (valued in coins) during LIVE</li>
                  <li>Creators receive diamonds (2 coins = 1 diamond)</li>
                  <li>Diamonds convert to USD ($0.005 per diamond, 50% of coin value)</li>
                </ul>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection calculatorName="live-gifts" formula={`Per-Stream Earnings = (Avg Viewers × 2) × Gifts/Viewer × Avg Gift Value (50 coins) / 2 × $0.005

Monthly Potential = Per-Stream Earnings × 8 streams`} assumptions={[{ label: 'Viewer Turnover', value: '2x - assumes viewers join/leave during stream' }, { label: 'Avg Gift Value', value: '50 coins (ranges 5-5000)' }, { label: 'Diamond Conversion', value: '$0.005 per diamond (50% of coin value)' }]} dataSources={['TikTok Creator Portal', 'Creator surveys Q4 2024']} limitations="Actual earnings depend on audience generosity, stream engagement, and viewer purchasing power." lastUpdated="November 13, 2025" />

          <FAQSection pageName="LIVE Gifts Calculator" faqs={[{ question: 'How much can you earn from TikTok LIVE?', answer: 'Earnings vary widely. Small creators (50-100 viewers) earn $5-$20 per stream. Mid-tier (500-1000 viewers) earn $50-$200. Top streamers (5000+ viewers) can earn $500-$5000+ per stream.' }, { question: 'How do I withdraw LIVE earnings?', answer: 'Once you reach $50 in diamonds, you can withdraw to PayPal or bank account. Withdrawals process within 7-14 business days.' }]} />

          <RelatedCalculators currentCalculator="live-gifts" calculators={[{ name: 'Coins Calculator', slug: 'coins', description: 'Convert TikTok coins to USD', icon: '🪙' }, { name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Total earnings including LIVE', icon: '💵' }]} />
        </div>
      </div>
    </div>
  );
}
