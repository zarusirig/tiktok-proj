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
import { calculateShopCommission, validateShopCommissionInput } from '@/lib/calculators/shop-commission';
import type { ShopCommissionInput, ShopCommissionResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function ShopCommissionCalculatorPage() {
  const [inputs, setInputs] = useState<ShopCommissionInput>({ productPrice: 50, commissionRate: 5, monthlySales: 20 });
  const [results, setResults] = useState<ShopCommissionResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof ShopCommissionInput, value: any) => {
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
    const validation = validateShopCommissionInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateShopCommission(inputs);
      setResults(result);
      trackCalculation('shop-commission', { ...inputs }, { monthly_commission: result.monthlyCommission, annual: result.annualProjection });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-info-light py-8">
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Calculators', href: '/calculators' }, { label: 'Shop Commission Calculator', href: '/calculators/shop-commission' }]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-info-DEFAULT text-white text-3xl mb-6">🛍️</div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok Shop Commission Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Calculate your earnings from TikTok Shop affiliate commissions.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate Commission Earnings</h2>

            <InputField id="productPrice" label="Product Price ($)" type="number" value={inputs.productPrice} onChange={(value) => handleInputChange('productPrice', value)} placeholder="e.g., 50" helperText="Average product price" error={errors.productPrice} min={0.01} step={0.01} required />

            <InputField id="commissionRate" label="Commission Rate (%)" type="number" value={inputs.commissionRate} onChange={(value) => handleInputChange('commissionRate', value)} placeholder="e.g., 5" helperText="Commission percentage (2-20%)" error={errors.commissionRate} min={2} max={20} step={0.5} required />

            <InputField id="monthlySales" label="Monthly Sales" type="number" value={inputs.monthlySales} onChange={(value) => handleInputChange('monthlySales', value)} placeholder="e.g., 20" helperText="Products sold per month" error={errors.monthlySales} min={1} required />

            <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">Calculate Commission</Button>

            {results && (
              <div className="mt-6 space-y-4">
                <ResultsDisplay results={results} type="single" format="currency" title="Monthly Commission" subtitle={`$${results.commissionPerSale.toFixed(2)} per sale`} />
                <div className="p-4 bg-neutral-50 rounded-lg">
                  <p className="text-label-md text-neutral-600 mb-1">Annual Projection</p>
                  <p className="text-heading-lg font-semibold text-neutral-900">${results.annualProjection.toLocaleString()}</p>
                </div>
              </div>
            )}
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <MethodologySection calculatorName="shop-commission" formula={`Commission Per Sale = Product Price × (Commission Rate / 100)
Monthly Commission = Commission Per Sale × Monthly Sales
Annual Projection = Monthly Commission × 12`} assumptions={[{ label: 'Commission Range', value: '2-20% (standard TikTok Shop rates)' }]} dataSources={['TikTok Shop Creator Portal']} limitations="Actual commission rates vary by product category and seller." lastUpdated="November 13, 2025" />

          <FAQSection pageName="Shop Commission Calculator" faqs={[{ question: 'How much commission does TikTok Shop pay?', answer: 'TikTok Shop commissions typically range from 2-20%, with most products at 5-10%.' }, { question: 'When do I get paid?', answer: 'Commissions are paid monthly after the return period (typically 7-14 days after delivery).' }]} />

          <RelatedCalculators currentCalculator="shop-commission" calculators={[{ name: 'TikTok Money Calculator', slug: 'tiktok-money', description: 'Total earnings including Shop', icon: '💵' }]} />
        </div>
      </div>
    </div>
  );
}
