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
  calculateContentCalendarROI,
  validateContentCalendarROIInput,
} from '@/lib/calculators/content-calendar-roi';
import type {
  ContentCalendarROIInput,
  ContentCalendarROIResult,
} from '@/types/calculator';
import { trackCalculation } from '@/lib/analytics/ga4';

export default function ContentCalendarROICalculatorPage() {
  const [inputs, setInputs] = useState<ContentCalendarROIInput>({
    hoursSpentPlanning: 4,
    hourlyRate: 50,
    videosPlanned: 20,
    avgPerformanceIncrease: 25,
    avgRevenuePerVideo: 100,
  });

  const [results, setResults] = useState<ContentCalendarROIResult | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isCalculating, setIsCalculating] = useState(false);

  const handleInputChange = (
    field: keyof ContentCalendarROIInput,
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
    const validation = validateContentCalendarROIInput(inputs);
    if (!validation.valid) {
      setErrors(validation.errors);
      return;
    }

    setIsCalculating(true);
    setErrors({});

    setTimeout(() => {
      const result = calculateContentCalendarROI(inputs);
      setResults(result);

      trackCalculation(
        'content-calendar-roi',
        { ...inputs },
        { roi: result.roi, roiPercentage: result.roiPercentage }
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
              label: 'Content Calendar ROI Calculator',
              href: '/calculators/content-calendar-roi',
            },
          ]}
        />

        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-secondary-500 to-secondary-600 text-white text-3xl mb-6">
            📅
          </div>
          <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-4">
            Content Calendar ROI Calculator
          </h1>
          <p className="text-body-lg text-neutral-600 max-w-2xl mx-auto">
            Calculate the return on investment for strategic content planning.
            Measure if your planning time translates to better performance.
          </p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="lg:sticky lg:top-24 h-fit">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">
              Calculate Planning ROI
            </h2>

            <InputField
              id="hoursSpentPlanning"
              label="Planning Time (hours)"
              type="number"
              value={inputs.hoursSpentPlanning}
              onChange={(value) => handleInputChange('hoursSpentPlanning', value)}
              placeholder="e.g., 4"
              helperText="Hours spent planning content"
              error={errors.hoursSpentPlanning}
              min={0}
              step={0.5}
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
              id="videosPlanned"
              label="Videos Planned"
              type="number"
              value={inputs.videosPlanned}
              onChange={(value) => handleInputChange('videosPlanned', value)}
              placeholder="e.g., 20"
              helperText="Number of videos in your calendar"
              error={errors.videosPlanned}
              min={1}
              required
            />

            <InputField
              id="avgPerformanceIncrease"
              label="Performance Increase (%)"
              type="number"
              value={inputs.avgPerformanceIncrease}
              onChange={(value) => handleInputChange('avgPerformanceIncrease', value)}
              placeholder="e.g., 25"
              helperText="Expected improvement from planning"
              error={errors.avgPerformanceIncrease}
              min={0}
              max={1000}
              step={1}
              required
            />

            <InputField
              id="avgRevenuePerVideo"
              label="Revenue per Video ($)"
              type="number"
              value={inputs.avgRevenuePerVideo}
              onChange={(value) => handleInputChange('avgRevenuePerVideo', value)}
              placeholder="e.g., 100"
              helperText="Average earnings per video"
              error={errors.avgRevenuePerVideo}
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
              Calculate ROI
            </Button>

            {results && (
              <div className="mt-6">
                <ResultsDisplay
                  results={results}
                  type="single"
                  format="percentage"
                  title="ROI Percentage"
                  subtitle={results.roiPercentage >= 0 ? 'POSITIVE ROI' : 'NEGATIVE ROI'}
                />

                <div className="mt-4 p-4 bg-white rounded-lg border border-neutral-200">
                  <p className="text-label-md text-neutral-600 mb-3">
                    ROI Breakdown
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">Planning Cost</span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.planningCost.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-body-sm text-neutral-600">Additional Revenue</span>
                      <span className="text-body-sm font-semibold text-neutral-900">
                        ${results.additionalRevenue.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between border-t pt-2">
                      <span className="text-body-sm text-neutral-600">Net Profit</span>
                      <span className={`text-body-sm font-semibold ${results.roi >= 0 ? 'text-success-DEFAULT' : 'text-error-DEFAULT'}`}>
                        ${results.roi.toLocaleString()}
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
                Content Planning Benefits
              </h2>
              <div className="space-y-4 text-body-md text-neutral-700">
                <p>
                  Strategic content planning improves performance through better topic
                  selection, timing optimization, and consistent posting.
                </p>
                <p>
                  <strong>Planning advantages:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Research trending topics and optimize timing</li>
                  <li>Batch filming saves time and maintains consistency</li>
                  <li>Strategic mix of content types increases reach</li>
                  <li>Reduces stress and prevents creative burnout</li>
                </ul>
              </div>
            </Card>

            <Card>
              <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
                ROI Benchmarks
              </h2>
              <div className="space-y-3">
                {[
                  { label: 'Excellent', range: '200%+', color: 'bg-success-DEFAULT' },
                  { label: 'Good', range: '100-200%', color: 'bg-secondary-500' },
                  { label: 'Acceptable', range: '25-100%', color: 'bg-warning-DEFAULT' },
                  { label: 'Poor', range: '<25%', color: 'bg-error-DEFAULT' },
                ].map((benchmark) => (
                  <div key={benchmark.label} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${benchmark.color}`} />
                      <span className="font-semibold text-neutral-900">{benchmark.label}</span>
                    </div>
                    <span className="font-semibold text-neutral-900">{benchmark.range}</span>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>

        <div className="max-w-5xl mx-auto">
          <MethodologySection
            calculatorName="content-calendar-roi"
            formula={`Planning Cost = Hours × Hourly Rate
Base Revenue = Videos × Avg Revenue/Video
Improved Revenue = Base × (1 + Performance Increase%)
Additional Revenue = Improved - Base
ROI = [(Additional Revenue - Cost) / Cost] × 100

Example:
4 hours × $50 = $200 cost
20 videos × $100 = $2,000 base
25% increase = $2,500 improved
$500 additional revenue
ROI: [($500 - $200) / $200] × 100 = 150%`}
            assumptions={[
              { label: 'Performance Lift', value: 'Conservative estimate: 15-30% improvement from strategic planning' },
              { label: 'Time Investment', value: 'Typical planning: 2-4 hours per month for 15-30 videos' },
              { label: 'Benefits', value: 'Includes better topics, timing, consistency, and batch efficiency' },
            ]}
            dataSources={[
              'Content Planning Effectiveness Study 2024',
              'Creator Productivity Benchmark Report',
              'Strategic Content ROI Analysis',
            ]}
            limitations="ROI depends on execution quality. Planning without action has no return. Track actual performance improvements to validate assumptions."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Content Calendar ROI Calculator"
            faqs={[
              {
                question: 'Is content planning worth the time?',
                answer: 'Yes, if done efficiently. 2-4 hours monthly planning (15-30 videos) typically yields 20-30% performance improvement through better topics, timing, and consistency. This translates to 150-300% ROI for most creators. However, avoid over-planning - diminishing returns after 4 hours.',
              },
              {
                question: 'What should I include in content planning?',
                answer: 'Essential elements: (1) Topic research and trend analysis, (2) Posting schedule with optimal times, (3) Content format variety, (4) Hook and CTA planning, (5) Hashtag strategy, (6) Batch filming schedule. Use tools like Notion, Trello, or dedicated content planners.',
              },
              {
                question: 'How far ahead should I plan content?',
                answer: 'Sweet spot: 2-4 weeks ahead. This allows: (1) Batch filming efficiency, (2) Flexibility for trending topics, (3) Reduced daily stress, (4) Strategic content mix. Don\'t plan 3+ months ahead - trends change too quickly. Balance structure with agility.',
              },
              {
                question: 'What if my planning doesn\'t improve performance?',
                answer: 'Common issues: (1) Planning without execution (consistency matters), (2) Ignoring analytics (plan based on data, not assumptions), (3) Over-planning same content types (need variety), (4) Not adjusting based on results. Solution: Plan → Execute → Measure → Adjust. Use analytics to validate your planning effectiveness.',
              },
            ]}
          />

          <RelatedCalculators
            currentCalculator="content-calendar-roi"
            calculators={[
              { name: 'Production Cost Calculator', slug: 'production-cost', description: 'Calculate content creation costs', icon: '🎥' },
              { name: 'Posting Time Calculator', slug: 'posting-time', description: 'Optimize posting schedule', icon: '🕐' },
              { name: 'Video Performance Calculator', slug: 'video-performance', description: 'Track content performance', icon: '🎬' },
            ]}
          />
        </div>
      </div>
    </div>
  );
}
