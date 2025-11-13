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
import { calculateRPM, validateRPMInput } from '@/lib/calculators/rpm';
import type { RPMInput, RPMResult } from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function RPMCalculatorPage() {
  const [inputs, setInputs] = useState<RPMInput>({ views: 100000, earnings: 3.00 });
  const [results, setResults] = useState<RPMResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (field: keyof RPMInput, value: any) => {
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
    const validation = validateRPMInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setTimeout(() => {
      const result = calculateRPM(inputs);
      setResults(result);
      trackCalculation('rpm', { ...inputs }, { rpm: result.rpm, benchmark: result.benchmark });
      setIsCalculating(false);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-success-light py-8">
      <div className="container-custom">
        <Breadcrumb items={[{ label: 'Calculators', href: '/calculators' }, { label: 'RPM Calculator', href: '/calculators/rpm' }]} />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-success-DEFAULT text-white text-3xl mb-6">📈</div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">TikTok RPM Calculator</h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">Calculate your revenue per 1,000 views (RPM) to understand your earning efficiency.</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Calculate Your RPM</h2>

            <InputField id="views" label="Total Views" type="number" value={inputs.views} onChange={(value) => handleInputChange('views', value)} placeholder="e.g., 100000" helperText="Total video views for the period" error={errors.views} min={1000} required />

            <InputField id="earnings" label="Total Earnings ($)" type="number" value={inputs.earnings} onChange={(value) => handleInputChange('earnings', value)} placeholder="e.g., 3.00" helperText="Total earnings from those views" error={errors.earnings} min={0} step={0.01} required />

            <Button variant="primary" size="lg" onClick={handleCalculate} isLoading={isCalculating} className="w-full mt-6">Calculate RPM</Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay results={results} type="single" format="currency" title="Your RPM" subtitle={`${results.benchmark.toUpperCase()} benchmark`} />
                {results.additionalMetrics && (
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <p className="text-label-md text-neutral-600 mb-1">Earnings/View</p>
                      <p className="text-heading-md font-semibold text-neutral-900">${results.additionalMetrics.earningsPerView}</p>
                    </div>
                    <div className="p-4 bg-neutral-50 rounded-lg">
                      <p className="text-label-md text-neutral-600 mb-1">Views for $100</p>
                      <p className="text-heading-md font-semibold text-neutral-900">{(results.additionalMetrics.viewsNeededFor100 as number).toLocaleString()}</p>
                    </div>
                  </div>
                )}
              </div>
            )}
          </Card>
        </div>

        <div className="max-w-5xl mx-auto mt-12">
          <MethodologySection calculatorName="rpm" formula={`RPM = (Total Earnings / Total Views) × 1000

Example:
Views: 100,000
Earnings: $3.00
RPM: ($3.00 / 100,000) × 1000 = $0.030`} assumptions={[{ label: 'Benchmarks', value: 'Excellent: $0.04+, Good: $0.03-0.04, Average: $0.02-0.03, Below: <$0.02' }]} dataSources={['Creator Fund data', 'Industry averages 2024']} limitations="RPM varies by niche, audience location, and engagement." lastUpdated="November 13, 2025" />

          <FAQSection pageName="RPM Calculator" faqs={[{ question: 'What is RPM?', answer: 'RPM (Revenue Per Mille) is earnings per 1,000 views. It measures earning efficiency.' }, { question: 'What is a good RPM on TikTok?', answer: 'Good RPM is $0.03-$0.04. Excellent is $0.04+. Average is $0.02-$0.03.' }]} />

          <RelatedCalculators currentCalculator="rpm" calculators={[{ name: 'Creator Fund Calculator', slug: 'tiktok-creator-fund', description: 'Estimate Creator Fund earnings', icon: '💰' }]} />
        </div>
      </div>
    </div>
  );
}
