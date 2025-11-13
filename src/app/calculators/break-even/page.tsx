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
  calculateBreakEven,
  validateBreakEvenInput,
} from '@/lib/calculators/break-even';
import type {
  BreakEvenInput,
  BreakEvenResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function BreakEvenCalculatorPage() {
  const [inputs, setInputs] = useState<BreakEvenInput>({
    adSpend: 1000,
    costPerClick: 0.50,
    conversionRate: 2,
    productPrice: 50,
    productCost: 20,
  });

  const [results, setResults] = useState<BreakEvenResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof BreakEvenInput,
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
    const validation = validateBreakEvenInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateBreakEven(inputs);
      setResults(result);

      trackCalculation(
        'break-even',
        { ...inputs },
        { breakEvenUnits: result.breakEvenUnits }
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
              label: 'Break Even Calculator',
              href: '/calculators/break-even',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            ⚖️
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Break Even Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate how many sales you need to break even on your ad spend or
            product launch. Essential for campaign planning.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Break Even Point
            </h2>

            <InputField
              id="adSpend"
              label="Ad Spend ($)"
              type="number"
              value={inputs.adSpend}
              onChange={(value) => handleInputChange('adSpend', value)}
              placeholder="e.g., 1000"
              helperText="Total advertising budget"
              error={errors.adSpend}
              min={0}
              step={0.01}
              required
            />

            <InputField
              id="costPerClick"
              label="Cost per Click ($)"
              type="number"
              value={inputs.costPerClick}
              onChange={(value) => handleInputChange('costPerClick', value)}
              placeholder="e.g., 0.50"
              helperText="Average CPC for your ads"
              error={errors.costPerClick}
              min={0}
              step={0.01}
              required
            />

            <InputField
              id="conversionRate"
              label="Conversion Rate (%)"
              type="number"
              value={inputs.conversionRate}
              onChange={(value) => handleInputChange('conversionRate', value)}
              placeholder="e.g., 2"
              helperText="Percentage of clicks that convert"
              error={errors.conversionRate}
              min={0}
              max={100}
              step={0.1}
              required
            />

            <InputField
              id="productPrice"
              label="Product Price ($)"
              type="number"
              value={inputs.productPrice}
              onChange={(value) => handleInputChange('productPrice', value)}
              placeholder="e.g., 50"
              helperText="Selling price per unit"
              error={errors.productPrice}
              min={0}
              step={0.01}
              required
            />

            <InputField
              id="productCost"
              label="Product Cost ($)"
              type="number"
              value={inputs.productCost}
              onChange={(value) => handleInputChange('productCost', value)}
              placeholder="e.g., 20"
              helperText="Cost to produce/acquire per unit"
              error={errors.productCost}
              min={0}
              step={0.01}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Break Even
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="number"
                  title="Break Even Units"
                  subtitle={`${results.breakEvenUnits} sales to break even`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Break Even Analysis
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Required Clicks
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.requiredClicks.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Required Conversions
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.requiredConversions.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-body-sm text-neutral-600">
                        Break Even Revenue
                      </span>
                      <span className="text-body-sm font-semibold text-success-DEFAULT">
                        ${results.breakEvenRevenue.toLocaleString()}
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
                What is Break Even Point?
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Break even point is the number of sales needed to cover all costs
                  (ad spend + product costs). Below this point you lose money; above
                  it you profit.
                </p>
                <p>
                  <strong>Why it matters:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Helps set realistic sales goals for campaigns
                  </li>
                  <li>
                    Identifies unprofitable campaigns before launching
                  </li>
                  <li>
                    Guides budget allocation decisions
                  </li>
                  <li>
                    Essential for product launch planning
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Break Even Tips
              </h2>
              <div className="space-y-3 text-body-md text-neutral-700">
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">
                    Lower Your Break Even
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-body-sm">
                    <li>Improve conversion rate (better landing pages)</li>
                    <li>Reduce CPC (better ad targeting)</li>
                    <li>Increase product margin (higher price or lower costs)</li>
                  </ul>
                </div>
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="font-semibold text-neutral-900 mb-2">
                    Risk Management
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-body-sm">
                    <li>Start with 20-30% of planned budget to test</li>
                    <li>Only scale after proving you can exceed break even</li>
                    <li>Build in 20% cushion for unexpected costs</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="break-even"
            formula={`Profit per Unit = Product Price - Product Cost
Break Even Units = Ad Spend / Profit per Unit
Required Clicks = Ad Spend / Cost per Click
Required Conversions = Required Clicks × Conversion Rate

Example:
Ad Spend: $1,000
CPC: $0.50 → 2,000 clicks needed
Conversion: 2% → 40 conversions needed
Product: $50 price - $20 cost = $30 profit/unit
Break Even: $1,000 / $30 = 34 units`}
            assumptions={[
              {
                label: 'Fixed Costs',
                value:
                  'Assumes product cost and CPC remain constant at scale',
              },
              {
                label: 'Conversion Rate',
                value: 'Based on landing page performance and offer quality',
              },
              {
                label: 'Additional Costs',
                value: 'Does not include shipping, returns, or platform fees',
              },
            ]}
            dataSources={[
              'E-commerce Break Even Analysis Best Practices',
              'TikTok Ads Performance Benchmarks 2024',
              'Direct Response Marketing ROI Study',
            ]}
            limitations="Real-world performance varies. Factor in returns, chargebacks, shipping costs, and platform fees. Always test with small budget before scaling to full ad spend."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Break Even Calculator"
            faqs={[
              {
                question: 'What is a realistic break even point?',
                answer:
                  'For most TikTok campaigns, break even requires 20-100 units depending on margins. High-ticket items ($100+) need fewer sales but harder to convert. Low-ticket items ($20-50) need more volume but convert easier. Aim to break even within first 48 hours of campaign launch.',
              },
              {
                question: 'What if I can\'t reach break even?',
                answer:
                  'Options: (1) Improve conversion rate - test better landing pages, offers, or CTAs, (2) Lower CPC - refine targeting, improve ad creative, (3) Increase margins - raise price or lower costs, (4) Accept initial losses for customer lifetime value (if you have repeat purchases), (5) Don\'t launch - save your money.',
              },
              {
                question: 'How do I calculate break even for TikTok Shop?',
                answer:
                  'TikTok Shop charges 2-8% commission plus payment processing (~3%). Add these to your product cost. For example: $50 product with $20 cost + $4 TikTok fee + $1.50 processing = $25.50 total cost. Your real margin is $24.50, not $30. Recalculate break even with true costs.',
              },
              {
                question: 'Should I scale before reaching break even?',
                answer:
                  'Generally no. Only scale after consistently hitting break even. Exception: If you have strong customer lifetime value (repeat purchases, subscriptions) and can afford short-term losses. Calculate customer LTV and ensure it exceeds acquisition cost by 3x minimum.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="break-even"
            calculators={[
              {
                name: 'Sponsorship ROI Calculator',
                slug: 'sponsorship-roi',
                description:
                  'Calculate ROI for brand partnerships',
                icon: '💼',
              },
              {
                name: 'Production Cost Calculator',
                slug: 'production-cost',
                description: 'Factor in content creation costs',
                icon: '🎥',
              },
              {
                name: 'Ad Revenue Calculator',
                slug: 'ad-revenue',
                description: 'Estimate ad revenue potential',
                icon: '💰',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
