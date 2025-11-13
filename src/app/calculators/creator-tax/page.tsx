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
  calculateCreatorTax,
  validateCreatorTaxInput,
} from '@/lib/calculators/creator-tax';
import type {
  CreatorTaxInput,
  CreatorTaxResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function CreatorTaxCalculatorPage() {
  const [inputs, setInputs] = useState<CreatorTaxInput>({
    annualIncome: 75000,
    state: 'medium',
    filingStatus: 'single',
    businessExpenses: 10000,
  });

  const [results, setResults] = useState<CreatorTaxResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof CreatorTaxInput,
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
    const validation = validateCreatorTaxInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateCreatorTax(inputs);
      setResults(result);

      trackCalculation(
        'creator-tax',
        { ...inputs },
        { totalTax: result.totalTax, effectiveTaxRate: result.effectiveTaxRate }
      );

      setIsCalculating(false);
    }, 500);
  };

  const stateOptions = [
    { value: 'no-state-tax', label: 'No State Tax (AK, FL, NV, SD, TN, TX, WA, WY)' },
    { value: 'low', label: 'Low State Tax (3%)' },
    { value: 'medium', label: 'Medium State Tax (5%)' },
    { value: 'high', label: 'High State Tax (8%)' },
    { value: 'very-high', label: 'Very High State Tax (10%+)' },
  ];

  const filingOptions = [
    { value: 'single', label: 'Single' },
    { value: 'married', label: 'Married Filing Jointly' },
    { value: 'head-of-household', label: 'Head of Household' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-secondary-50 py-8">
      <div className="container-custom">
        <Breadcrumb
          items={[
            { label: 'Calculators', href: '/calculators' },
            {
              label: 'Creator Tax Calculator',
              href: '/calculators/creator-tax',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🧾
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Creator Tax Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Estimate your tax obligations as a content creator. Plan for federal,
            state, and self-employment taxes.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Tax Obligations
            </h2>

            <InputField
              id="annualIncome"
              label="Annual Income ($)"
              type="number"
              value={inputs.annualIncome}
              onChange={(value) => handleInputChange('annualIncome', value)}
              placeholder="e.g., 75000"
              helperText="Total annual creator income"
              error={errors.annualIncome}
              min={0}
              required
            />

            <SelectField
              id="state"
              label="State Tax Level"
              value={inputs.state}
              onChange={(value) => handleInputChange('state', value)}
              options={stateOptions}
              helperText="Your state's income tax rate"
              error={errors.state}
              required
            />

            <SelectField
              id="filingStatus"
              label="Filing Status"
              value={inputs.filingStatus}
              onChange={(value) => handleInputChange('filingStatus', value)}
              options={filingOptions}
              helperText="Your tax filing status"
              error={errors.filingStatus}
              required
            />

            <InputField
              id="businessExpenses"
              label="Business Expenses ($)"
              type="number"
              value={inputs.businessExpenses}
              onChange={(value) => handleInputChange('businessExpenses', value)}
              placeholder="e.g., 10000"
              helperText="Deductible business expenses"
              error={errors.businessExpenses}
              min={0}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Tax
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="currency"
                  title="Total Tax Owed"
                  subtitle={`${results.effectiveTaxRate.toFixed(1)}% effective tax rate`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Tax Breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Federal Tax
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.federalTax.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        State Tax
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.stateTax.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Self-Employment Tax
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.selfEmploymentTax.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-body-sm text-neutral-600">
                        Net Income (After Tax)
                      </span>
                      <span className="text-body-sm font-semibold text-success-DEFAULT">
                        ${results.netIncome.toLocaleString()}
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
                Creator Tax Guide
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  As a self-employed creator, you're responsible for federal income
                  tax, state income tax, and self-employment tax (Social Security +
                  Medicare).
                </p>
                <p>
                  <strong>Key considerations:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>
                    Self-employment tax is 15.3% of net income (up to $160,200)
                  </li>
                  <li>
                    Deduct business expenses (equipment, software, home office)
                  </li>
                  <li>
                    Make quarterly estimated tax payments to avoid penalties
                  </li>
                  <li>
                    Set aside 25-35% of income for taxes
                  </li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Common Deductions
              </h2>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Equipment:</strong> Camera, mic, lighting, computer, phone
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Software:</strong> Editing tools, analytics, scheduling apps
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Services:</strong> Internet, phone, cloud storage, subscriptions
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Home Office:</strong> Portion of rent/mortgage if dedicated space
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Education:</strong> Courses, conferences, coaching
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="creator-tax"
            formula={`Net Income = Annual Income - Business Expenses
Federal Tax = Progressive tax brackets (10-37%)
State Tax = Net Income × State Rate (0-10%)
Self-Employment Tax = Net Income × 15.3%
Total Tax = Federal + State + SE Tax

Example:
Income: $75,000
Expenses: $10,000
Net: $65,000
Federal: ~$8,500 (13.1%)
State (5%): $3,250
SE Tax: $9,945
Total Tax: $21,695 (33.4% effective rate)`}
            assumptions={[
              {
                label: 'Tax Brackets',
                value:
                  'Based on 2024 federal tax brackets and standard deduction',
              },
              {
                label: 'State Tax',
                value: 'Simplified average rates - check your state for exact rates',
              },
              {
                label: 'Self-Employment',
                value: '15.3% on first $160,200 of net income',
              },
            ]}
            dataSources={[
              'IRS 2024 Tax Brackets',
              'Self-Employment Tax Guidelines',
              'State Income Tax Comparison 2024',
            ]}
            limitations="This is an estimate for planning purposes only. Consult a tax professional for accurate calculations. Does not include additional deductions (health insurance, retirement contributions) or credits."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Creator Tax Calculator"
            faqs={[
              {
                question: 'How much should I set aside for taxes?',
                answer:
                  'General rule: Set aside 25-35% of gross income. If you\'re in a high-tax state or making $100K+, aim for 35-40%. Better to over-save than face penalties. Open a separate savings account and transfer tax money immediately when paid.',
              },
              {
                question: 'What can I deduct as a content creator?',
                answer:
                  'Equipment (camera, mic, lighting), software (editing, analytics), internet/phone (business portion), home office (if dedicated space), props/costumes, travel for content, education (courses, coaching), professional services (accountant, lawyer), and more. Keep detailed records and receipts.',
              },
              {
                question: 'Do I need to pay quarterly taxes?',
                answer:
                  'Yes! If you expect to owe $1,000+ in taxes, you must make quarterly estimated payments (April 15, June 15, Sept 15, Jan 15). Failing to pay quarterly results in penalties. Use IRS Form 1040-ES. Many creators use tax software or accountants to calculate quarterly amounts.',
              },
              {
                question: 'Should I form an LLC or S-Corp?',
                answer:
                  'LLC: Simple, protects personal assets, pass-through taxation. S-Corp: Can save on self-employment taxes if making $60K+, but requires payroll and more paperwork. Consult a CPA - generally LLC for beginners, consider S-Corp when consistently making $75K+ annually.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="creator-tax"
            calculators={[
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description:
                  'Estimate total earnings to plan tax obligations',
                icon: '💵',
              },
              {
                name: 'Production Cost Calculator',
                slug: 'production-cost',
                description: 'Track deductible business expenses',
                icon: '🎥',
              },
              {
                name: 'Break Even Calculator',
                slug: 'break-even',
                description: 'Factor taxes into profitability analysis',
                icon: '⚖️',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
