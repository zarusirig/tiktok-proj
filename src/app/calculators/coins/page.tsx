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

        <div className="max-w-5xl mx-auto mt-12 space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Understanding TikTok's Virtual Currency System
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">🪙 Coins (Viewer Currency)</h3>
                <p>
                  Coins are purchased by viewers with real money and used to send gifts during LIVE streams. Viewers buy coin packages ranging from 100 to 10,000 coins.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">🎁 Gifts (Sent to Creators)</h3>
                <p>
                  Gifts are virtual items (roses, lions, galaxies) that viewers send using coins. Each gift has a specific coin cost. Popular gifts range from 5 coins (Rose) to 44,999 coins (Universe).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">💎 Diamonds (Creator Currency)</h3>
                <p>
                  When creators receive gifts, they're converted to diamonds. The conversion is 2 coins = 1 diamond (50% split). Creators cash out diamonds for real money: 1 diamond = $0.005 USD.
                </p>
              </div>
              <div className="p-4 bg-warning-50 border border-warning-200 rounded-lg">
                <p className="text-body-sm">
                  <strong>Important:</strong> TikTok takes a 50% cut. If a viewer sends a 1,000 coin gift ($10.50), the creator receives 500 diamonds ($2.50).
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Common Gift Values
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Here are the most popular TikTok gifts and their values:
            </p>
            <div className="space-y-2">
              {[
                { gift: 'Rose 🌹', coins: 1, diamonds: 0.5, usd: '$0.0025' },
                { gift: 'TikTok 🎵', coins: 5, diamonds: 2.5, usd: '$0.0125' },
                { gift: 'Finger Heart ❤️', coins: 5, diamonds: 2.5, usd: '$0.0125' },
                { gift: 'Ice Cream 🍦', coins: 30, diamonds: 15, usd: '$0.075' },
                { gift: 'Panda 🐼', coins: 100, diamonds: 50, usd: '$0.25' },
                { gift: 'Drama Queen 👑', coins: 500, diamonds: 250, usd: '$1.25' },
                { gift: 'Lion 🦁', coins: 400, diamonds: 200, usd: '$1.00' },
                { gift: 'Falcon 🦅', coins: 999, diamonds: 499.5, usd: '$2.50' },
                { gift: 'Planet 🌍', coins: 15000, diamonds: 7500, usd: '$37.50' },
                { gift: 'Universe 🌌', coins: 44999, diamonds: 22499.5, usd: '$112.50' },
              ].map((item) => (
                <div key={item.gift} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg text-body-sm">
                  <span className="font-semibold text-neutral-900">{item.gift}</span>
                  <div className="flex gap-4 text-neutral-700">
                    <span>{item.coins} coins</span>
                    <span>→ {item.diamonds} 💎</span>
                    <span className="font-semibold text-success-600">→ {item.usd}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Coin Package Pricing
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Viewers can purchase coins in various packages. Larger packages often have better value:
            </p>
            <div className="space-y-2">
              {[
                { coins: 100, price: '$1.29', perCoin: '$0.0129', note: 'Starter' },
                { coins: 500, price: '$6.49', perCoin: '$0.0130', note: '' },
                { coins: 1000, price: '$12.99', perCoin: '$0.0130', note: '' },
                { coins: 2000, price: '$25.99', perCoin: '$0.0130', note: '' },
                { coins: 5000, price: '$64.99', perCoin: '$0.0130', note: 'Popular' },
                { coins: 10000, price: '$129.99', perCoin: '$0.0130', note: 'Best Value' },
              ].map((pkg) => (
                <div key={pkg.coins} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg text-body-sm">
                  <div>
                    <span className="font-semibold text-neutral-900">{pkg.coins.toLocaleString()} Coins</span>
                    {pkg.note && <span className="ml-2 text-xs text-primary-600">• {pkg.note}</span>}
                  </div>
                  <div className="flex gap-4 text-neutral-700">
                    <span className="font-semibold">{pkg.price}</span>
                    <span className="text-neutral-500">({pkg.perCoin}/coin)</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 bg-info-50 border border-info-200 rounded-lg">
              <p className="text-body-sm text-neutral-700">
                <strong>Note:</strong> Prices shown are for US region. Actual prices may vary by country and platform (iOS vs Android).
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Creator Payout Information
            </h2>
            <div className="space-y-3 text-body-md text-neutral-700">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h4 className="font-semibold text-neutral-900 mb-2">Minimum Withdrawal</h4>
                <p>You need at least $50 in diamonds to cash out (10,000 diamonds).</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h4 className="font-semibold text-neutral-900 mb-2">Payment Timeline</h4>
                <p>Withdrawals are processed within 7-30 days via PayPal or direct deposit.</p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <h4 className="font-semibold text-neutral-900 mb-2">Conversion Rate</h4>
                <p>1 diamond = $0.005 USD. This rate is fixed and doesn't vary by region.</p>
              </div>
            </div>
          </Card>

          <MethodologySection
            calculatorName="coins"
            formula={`USD Value = Coins × $0.0105

Diamonds (Creator Receives) = Coins × 0.5

Creator Payout = Diamonds × $0.005

Example:
1,000 coins sent as gift
→ Viewer pays: $10.50
→ Creator receives: 500 diamonds
→ Creator cashes out: $2.50 (50% of original value)`}
            assumptions={[
              { label: 'Coin Price', value: '$0.0129 per coin (standard US pricing for most packages)' },
              { label: 'Conversion Rate', value: '2 coins = 1 diamond (50% split between TikTok and creator)' },
              { label: 'Diamond Value', value: '1 diamond = $0.005 USD (fixed rate)' },
              { label: 'Platform Fee', value: 'TikTok takes 50% of all gift values' }
            ]}
            dataSources={[
              'TikTok official pricing (US region)',
              'TikTok Creator Portal gift catalog',
              'TikTok LIVE Gifts & Diamonds documentation'
            ]}
            limitations="Coin prices vary by region (iOS/Android differences). Some promotional packages offer bonus coins. Actual conversion rates are fixed by TikTok."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Coins Calculator"
            faqs={[
              {
                question: 'How much are TikTok coins worth in real money?',
                answer: 'TikTok coins cost approximately $0.0129 each in the US. Standard packages: 100 coins = $1.29, 1,000 coins = $12.99, 10,000 coins = $129.99. Prices vary slightly by region and platform (iOS vs Android).'
              },
              {
                question: 'How many coins equal 1 diamond for creators?',
                answer: '2 coins = 1 diamond. When a viewer sends a gift worth 1,000 coins, the creator receives 500 diamonds. This represents TikTok\'s 50% platform fee. Diamonds convert to cash at $0.005 per diamond.'
              },
              {
                question: 'What\'s the most expensive gift on TikTok?',
                answer: 'The Universe gift costs 44,999 coins (approximately $580). When sent, the creator receives 22,499.5 diamonds worth $112.50. Other high-value gifts include Planet (15,000 coins), Whale (2,150 coins), and Falcon (999 coins).'
              },
              {
                question: 'How much money do creators actually make from gifts?',
                answer: 'Creators receive 50% of the coin value. If viewers send $100 worth of gifts (7,751 coins), the creator gets 3,875.5 diamonds = $19.38. The minimum cashout is $50 (10,000 diamonds), requiring $100 in total gifts received.'
              },
              {
                question: 'Can I buy coins for someone else?',
                answer: 'No, TikTok coins can only be purchased and used on your own account. You cannot transfer coins between accounts. However, you can send gifts to creators using your purchased coins during their LIVE streams.'
              },
              {
                question: 'Do coin prices differ on iOS vs Android?',
                answer: 'Yes, iOS prices are typically slightly higher due to Apple\'s 30% App Store fee. Many creators encourage viewers to use Android or web browsers for better coin value. The conversion rate to diamonds remains the same regardless of purchase platform.'
              }
            ]}
          />

          <RelatedCalculators
            currentCalculator="coins"
            calculators={[
              {
                name: 'LIVE Gifts Calculator',
                slug: 'live-gifts',
                description: 'Calculate total LIVE streaming earnings from gifts',
                icon: '🎁'
              },
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'Calculate total earnings including LIVE gifts',
                icon: '💵'
              },
              {
                name: 'Creator Fund Calculator',
                slug: 'tiktok-creator-fund',
                description: 'Compare gift earnings to Creator Fund income',
                icon: '💰'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
