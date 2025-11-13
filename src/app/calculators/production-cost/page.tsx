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
  calculateProductionCost,
  validateProductionCostInput,
} from '@/lib/calculators/production-cost';
import type {
  ProductionCostInput,
  ProductionCostResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function ProductionCostCalculatorPage() {
  const [inputs, setInputs] = useState<ProductionCostInput>({
    equipmentCost: 2000,
    softwareCost: 50,
    timePerVideo: 120,
    hourlyRate: 50,
    videosPerMonth: 20,
  });

  const [results, setResults] = useState<ProductionCostResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof ProductionCostInput,
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
    const validation = validateProductionCostInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateProductionCost(inputs);
      setResults(result);

      trackCalculation(
        'production-cost',
        { ...inputs },
        { costPerVideo: result.costPerVideo, monthlyCost: result.monthlyCost }
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
              label: 'Production Cost Calculator',
              href: '/calculators/production-cost',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            🎥
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            TikTok Production Cost Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate your true cost per video including equipment, software, and
            time investment. Essential for pricing and profitability.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Production Costs
            </h2>

            <InputField
              id="equipmentCost"
              label="Equipment Cost ($)"
              type="number"
              value={inputs.equipmentCost}
              onChange={(value) => handleInputChange('equipmentCost', value)}
              placeholder="e.g., 2000"
              helperText="One-time equipment investment"
              error={errors.equipmentCost}
              min={0}
              required
            />

            <InputField
              id="softwareCost"
              label="Monthly Software Cost ($)"
              type="number"
              value={inputs.softwareCost}
              onChange={(value) => handleInputChange('softwareCost', value)}
              placeholder="e.g., 50"
              helperText="Subscriptions and software"
              error={errors.softwareCost}
              min={0}
              step={0.01}
              required
            />

            <InputField
              id="timePerVideo"
              label="Time per Video (minutes)"
              type="number"
              value={inputs.timePerVideo}
              onChange={(value) => handleInputChange('timePerVideo', value)}
              placeholder="e.g., 120"
              helperText="Total production time per video"
              error={errors.timePerVideo}
              min={1}
              required
            />

            <InputField
              id="hourlyRate"
              label="Your Hourly Rate ($)"
              type="number"
              value={inputs.hourlyRate}
              onChange={(value) => handleInputChange('hourlyRate', value)}
              placeholder="e.g., 50"
              helperText="Value of your time per hour"
              error={errors.hourlyRate}
              min={0}
              step={0.01}
              required
            />

            <InputField
              id="videosPerMonth"
              label="Videos per Month"
              type="number"
              value={inputs.videosPerMonth}
              onChange={(value) => handleInputChange('videosPerMonth', value)}
              placeholder="e.g., 20"
              helperText="Monthly video output"
              error={errors.videosPerMonth}
              min={1}
              required
            />

            <Button
              variant="primary"
              size="lg"
              onClick={handleCalculate}
              isLoading={isCalculating}
              className="w-full mt-6"
            >
              Calculate Costs
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="currency"
                  title="Cost per Video"
                  subtitle={`$${results.monthlyCost.toLocaleString()} monthly`}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    Cost Breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Annual Cost
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.annualCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">
                        Break-Even Views/Video
                      </span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        {results.breakEvenViews.toLocaleString()}
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
                Production Cost Guide
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Understanding your true production costs helps price services,
                  evaluate ROI, and track business expenses for tax deductions.
                </p>
                <p>
                  <strong>What to include:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Equipment (camera, mic, lighting) amortized over 2 years</li>
                  <li>Software subscriptions (editing, analytics, scheduling)</li>
                  <li>Your time (filming, editing, planning, posting)</li>
                  <li>Props, locations, and other per-video costs</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                Reducing Production Costs
              </h2>
              <div className="space-y-3 text-body-sm text-neutral-700">
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Efficiency:</strong> Batch filming multiple videos in one session
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Templates:</strong> Use editing templates to save time
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Free Tools:</strong> Use free software alternatives when starting
                </div>
                <div className="p-3 bg-neutral-50 rounded">
                  <strong>Outsource:</strong> Hire editors for $10-30/video if time-constrained
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="production-cost"
            formula={`Labor Cost/Video = (Time in Hours) × Hourly Rate
Equipment Cost/Video = Total Equipment / 24 months / Videos/Month
Software Cost/Video = Monthly Software / Videos/Month
Total Cost/Video = Labor + Equipment + Software

Example:
Equipment: $2,000 → $2,000/24/20 = $4.17/video
Software: $50/month → $50/20 = $2.50/video
Labor: 2 hours × $50 = $100/video
Total: $106.67 per video`}
            assumptions={[
              { label: 'Equipment Lifespan', value: 'Equipment costs amortized over 24 months (2 years)' },
              { label: 'Time Value', value: 'Your hourly rate should reflect opportunity cost' },
              { label: 'Break-Even', value: 'Calculated at $0.03 RPM (typical Creator Fund rate)' },
            ]}
            dataSources={[
              'Creator Business Expense Study',
              'Content Production Benchmark Report',
              'Freelance Rate Guidelines 2024',
            ]}
            limitations="Does not include indirect costs (internet, electricity, space rental). Adjust hourly rate based on your market and opportunity cost."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Production Cost Calculator"
            faqs={[
              {
                question: 'What should my hourly rate be?',
                answer: 'Base it on: (1) Your opportunity cost (what else you could earn), (2) Market rates for video editors ($25-100/hr), (3) Your experience level. Beginners: $20-40/hr, Experienced: $50-100/hr, Professionals: $100-200/hr.',
              },
              {
                question: 'How can I reduce production costs?',
                answer: 'Batch filming (shoot 5-10 videos in one session), use templates, improve efficiency with practice, outsource editing ($10-30/video), use phone instead of expensive camera, leverage free tools (CapCut, Canva free plan).',
              },
              {
                question: 'Are production costs tax deductible?',
                answer: 'Yes! As a content creator, equipment, software, props, home office, and internet are typically deductible business expenses. Keep receipts and consult a CPA for specific guidance. Deductions reduce your taxable income.',
              },
              {
                question: 'When should I upgrade equipment?',
                answer: 'Upgrade when: (1) Current equipment limits quality/creativity, (2) You can justify ROI (earning enough to cover costs in 3-6 months), (3) Tax deduction makes sense, (4) Clients/brands expect higher production value. Don\'t upgrade just to upgrade.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="production-cost"
            calculators={[
              { name: 'Break Even Calculator', slug: 'break-even', description: 'Calculate profitability including costs', icon: '⚖️' },
              { name: 'Creator Tax Calculator', slug: 'creator-tax', description: 'Estimate tax deductions from expenses', icon: '🧾' },
              { name: 'Content Value Calculator', slug: 'content-value', description: 'Compare costs vs content value', icon: '💎' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
