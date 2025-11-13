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
import { calculateCoins, validateCoinsInput } from '@/lib/calculators/coins';
import type { CoinsInput, CoinsResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function CoinsCalculatorPage() {
  const [inputs, setInputs] = useState<CoinsInput>({ coins: 1000 });
  const [results, setResults] = useState<CoinsResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (value: any) => {
    setInputs({ coins: value });
    if (errors.coins) setErrors({});
  };

  const handleCalculate = () => {
    const validation = validateCoinsInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateCoins(inputs);
      setResults(result);
      trackCalculation('coins', { coins: inputs.coins }, { usd_value: result.usdValue, diamonds: result.diamonds });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-warning-50 py-8">
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Calculators', href: '/calculators' }, { label: 'Coins Calculator', href: '/calculators/coins' }]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-warning-DEFAULT text-white text-3xl mb-6">🪙</div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Coins Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Convert TikTok coins to USD value and diamonds. Essential for understanding gift values.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Convert Coins</h2>

            <InputField id="coins" label="TikTok Coins" type="number" value={inputs.coins} onChange={handleInputChange} placeholder="e.g., 1000" helperText="Number of TikTok coins to convert" error={errors.coins} min={1} required />

            <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">Convert Coins</Button>

            {results && (
              <div className="mt-6 space-y-4">
                <ResultsDisplay results={results} type="single" format="currency" title="USD Value" />
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="text-label-md text-neutral-600 mb-1">Diamonds</p>
                  <p className="text-heading-lg font-semibold text-neutral-900">{results.diamonds.toLocaleString()}</p>
                </div>
              </div>
            )}
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <MethodologySection calculatorName="coins" formula={`USD Value = Coins × $0.0105
Diamonds = Coins × 0.5 (2 coins = 1 diamond)`} assumptions={[{ label: 'Coin Price', value: '$0.0105 per coin (standard TikTok pricing)' }, { label: 'Conversion Rate', value: '2 coins = 1 diamond for creators' }]} dataSources={['TikTok official pricing']} limitations="Prices may vary by region. Creator payout is 50% of coin value." lastUpdated="November 13, 2025" />

          <FAQSection pageName="Coins Calculator" faqs={[{ question: 'How much are TikTok coins worth?', answer: 'TikTok coins cost approximately $0.0105 each. 100 coins = $1.05, 1000 coins = $10.50.' }, { question: 'How many coins equal 1 diamond?', answer: '2 coins = 1 diamond. Diamonds are what creators receive and can convert to USD at $0.005 per diamond.' }]} />

          <RelatedCalculators currentCalculator="coins" calculators={[{ name: 'LIVE Gifts Calculator', slug: 'live-gifts', description: 'Calculate LIVE streaming earnings', icon: '🎁' }]} />
        </div>
      </div>
    </div>
  );
}
