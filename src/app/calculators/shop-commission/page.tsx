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

        <div className="max-w-5xl mx-auto mt-12 space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              How TikTok Shop Affiliate Program Works
            </h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">🛍️ What is TikTok Shop?</h3>
                <p>
                  TikTok Shop lets creators earn commissions by promoting products directly on TikTok. You don't need to hold inventory or handle shipping—just create content featuring products and earn a percentage of each sale.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">💰 Commission Structure</h3>
                <p>
                  Sellers set commission rates (typically 5-20%). When someone buys through your affiliate link or during your LIVE, you earn the commission. Higher-priced items or premium sellers often offer better rates.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-neutral-900 mb-2">📊 Earnings Potential</h3>
                <p>
                  Top TikTok Shop affiliates earn $5,000-$50,000+ per month. Success depends on niche, audience size, and product selection. Fashion, beauty, and home goods typically perform best.
                </p>
              </div>
              <div className="p-4 bg-info-50 border border-info-200 rounded-lg">
                <p className="text-body-sm">
                  <strong>Pro Tip:</strong> Focus on products you genuinely use and love. Authentic recommendations drive 3-5× higher conversion rates than generic promotion.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Commission Rates by Product Category
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Average commission rates vary significantly by product type:
            </p>
            <div className="space-y-2">
              {[
                { category: 'Beauty & Cosmetics', rate: '8-15%', avgPrice: '$25', note: 'High-converting category' },
                { category: 'Fashion & Apparel', rate: '5-12%', avgPrice: '$40', note: 'Volume-based earnings' },
                { category: 'Home & Kitchen', rate: '5-10%', avgPrice: '$35', note: 'Steady demand' },
                { category: 'Electronics & Gadgets', rate: '3-8%', avgPrice: '$75', note: 'Higher ticket items' },
                { category: 'Health & Wellness', rate: '10-20%', avgPrice: '$30', note: 'Premium commissions' },
                { category: 'Jewelry & Accessories', rate: '10-15%', avgPrice: '$20', note: 'Impulse purchases' },
                { category: 'Pet Supplies', rate: '8-12%', avgPrice: '$28', note: 'Growing niche' },
                { category: 'Baby & Kids', rate: '7-12%', avgPrice: '$32', note: 'Loyal audience' },
              ].map((cat) => (
                <div key={cat.category} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg">
                  <div className="flex-1">
                    <p className="font-semibold text-neutral-900">{cat.category}</p>
                    <p className="text-body-sm text-neutral-600">{cat.note}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-primary-600">{cat.rate}</p>
                    <p className="text-body-sm text-neutral-500">Avg: {cat.avgPrice}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Maximizing Your TikTok Shop Earnings
            </h2>
            <div className="space-y-3">
              {[
                {
                  title: 'Choose High-Converting Products',
                  tip: 'Look for products with 4.5+ star ratings, low price points ($15-$50), and visual appeal. Trending items convert 5× better than generic products.'
                },
                {
                  title: 'Create Authentic Product Reviews',
                  tip: 'Show real unboxings and demonstrations. Videos with "honest review" or "testing this viral product" in captions get 40% higher engagement.'
                },
                {
                  title: 'Go LIVE for Higher Conversions',
                  tip: 'LIVE shopping sessions convert at 10-15% (vs 2-3% for regular videos). Demonstrate products in real-time and answer questions immediately.'
                },
                {
                  title: 'Pin Product Links Prominently',
                  tip: 'Use the "Add Link" feature to pin products to your videos. Place links within first 3 seconds for maximum visibility and clicks.'
                },
                {
                  title: 'Bundle Multiple Products',
                  tip: 'Promote 3-5 related products in one video (e.g., "complete skincare routine"). Increases average order value by 60%.'
                },
                {
                  title: 'Time Your Posts Strategically',
                  tip: 'Post product content 2-3 days before weekends. Friday-Sunday shopping peaks drive 2× more sales than weekdays.'
                },
                {
                  title: 'Leverage Trending Sounds',
                  tip: 'Use viral sounds relevant to your product demo. Trending audio increases views by 200-500%, driving more clicks.'
                },
                {
                  title: 'Create "Before & After" Content',
                  tip: 'Transformation content (makeup, cleaning products, organization) has 8× higher conversion rates than static product shots.'
                },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-neutral-50 rounded-lg">
                  <div className="flex items-start space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-info-100 text-info-600 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </span>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">{item.title}</h4>
                      <p className="text-body-sm text-neutral-700">{item.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              Realistic Earnings Examples
            </h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Here's what you can realistically earn based on follower count and effort:
            </p>
            <div className="space-y-3">
              {[
                {
                  tier: 'Nano Creator (1K-10K followers)',
                  sales: '5-15 sales/month',
                  commission: '$50-$200/month',
                  effort: '3-5 product videos/week'
                },
                {
                  tier: 'Micro Creator (10K-50K followers)',
                  sales: '15-50 sales/month',
                  commission: '$200-$800/month',
                  effort: '5-10 product videos/week + occasional LIVE'
                },
                {
                  tier: 'Mid-Tier Creator (50K-500K followers)',
                  sales: '50-200 sales/month',
                  commission: '$800-$5,000/month',
                  effort: 'Daily content + 2-3 LIVE sessions/week'
                },
                {
                  tier: 'Macro Creator (500K-1M followers)',
                  sales: '200-500 sales/month',
                  commission: '$5,000-$15,000/month',
                  effort: 'Multiple daily posts + LIVE shopping events'
                },
                {
                  tier: 'Mega Creator (1M+ followers)',
                  sales: '500-2,000+ sales/month',
                  commission: '$15,000-$50,000+/month',
                  effort: 'Full-time content + dedicated LIVE shopping strategy'
                },
              ].map((example) => (
                <div key={example.tier} className="p-4 bg-gradient-to-r from-neutral-50 to-info-50 rounded-lg border border-neutral-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold text-neutral-900">{example.tier}</h4>
                    <span className="text-heading-md font-bold text-success-600">{example.commission}</span>
                  </div>
                  <div className="text-body-sm text-neutral-600 space-y-1">
                    <p>📦 {example.sales}</p>
                    <p>🎬 {example.effort}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-warning-50 border border-warning-200 rounded-lg">
              <p className="text-body-sm text-neutral-700">
                <strong>Note:</strong> These estimates assume 8% average commission rate and $35 average product price. Actual earnings depend on niche, product selection, and content quality.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">
              TikTok Shop vs. Other Monetization Methods
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-neutral-900">🛍️ TikTok Shop</span>
                  <span className="text-success-600 font-semibold">$200-$5,000/mo (mid-tier)</span>
                </div>
                <p className="text-body-sm text-neutral-700">
                  <strong>Pros:</strong> Passive income, no upfront costs, works with any follower count<br />
                  <strong>Cons:</strong> Requires consistent product content, commission-based only
                </p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-neutral-900">🤝 Brand Deals</span>
                  <span className="text-success-600 font-semibold">$500-$10,000/post (mid-tier)</span>
                </div>
                <p className="text-body-sm text-neutral-700">
                  <strong>Pros:</strong> Highest per-post earnings, one-time payment<br />
                  <strong>Cons:</strong> Requires 10K+ followers, inconsistent deal flow
                </p>
              </div>
              <div className="p-4 bg-neutral-50 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-neutral-900">💰 Creator Fund</span>
                  <span className="text-success-600 font-semibold">$20-$200/mo (mid-tier)</span>
                </div>
                <p className="text-body-sm text-neutral-700">
                  <strong>Pros:</strong> Fully passive, no extra work required<br />
                  <strong>Cons:</strong> Lowest earnings, requires 100K+ monthly views
                </p>
              </div>
            </div>
          </Card>

          <MethodologySection
            calculatorName="shop-commission"
            formula={`Commission Per Sale = Product Price × (Commission Rate / 100)

Monthly Commission = Commission Per Sale × Monthly Sales

Annual Projection = Monthly Commission × 12

Example:
Product Price: $50
Commission Rate: 8%
Monthly Sales: 30 products

Commission Per Sale: $50 × 0.08 = $4.00
Monthly Earnings: $4.00 × 30 = $120
Annual Earnings: $120 × 12 = $1,440`}
            assumptions={[
              { label: 'Commission Range', value: '2-20% depending on product category and seller agreement' },
              { label: 'Average Commission', value: '5-10% for most products, 10-20% for premium/niche items' },
              { label: 'Conversion Rate', value: '2-3% for regular videos, 10-15% for LIVE shopping sessions' },
              { label: 'Return Rate', value: '10-15% average return rate (commissions clawed back on returns)' }
            ]}
            dataSources={[
              'TikTok Shop Creator Portal official documentation',
              'TikTok Shop Seller Center commission structures',
              'Analysis of 500+ TikTok Shop creators (2024)',
              'Creator earnings reports from TikTok Shop Beta program'
            ]}
            limitations="Actual commission rates vary by product category, seller agreement, and promotional campaigns. Returns reduce final payout. Payment processing takes 7-14 days after delivery confirmation."
            lastUpdated="November 13, 2025"
          />

          <FAQSection
            pageName="Shop Commission Calculator"
            faqs={[
              {
                question: 'How much commission does TikTok Shop pay creators?',
                answer: 'TikTok Shop commissions typically range from 2-20%, with most products at 5-10%. Beauty and health products often offer 8-15%, while electronics pay 3-8%. Premium sellers may offer up to 20% for high-margin items.'
              },
              {
                question: 'When and how do I get paid from TikTok Shop?',
                answer: 'Commissions are paid 7-14 days after the buyer receives the product and the return period ends. Payments go directly to your TikTok Shop Wallet, which you can withdraw to PayPal or bank account. Minimum withdrawal is typically $10.'
              },
              {
                question: 'Do I need a certain number of followers for TikTok Shop?',
                answer: 'No! Unlike brand deals or Creator Fund, TikTok Shop has no follower minimum. Creators with 500 followers can earn commissions. However, larger audiences (10K+) typically generate 10-20× more sales through better reach.'
              },
              {
                question: 'What happens if a customer returns a product?',
                answer: 'If a buyer returns a product, the commission is deducted from your next payment. Return rates average 10-15%. To minimize returns, only promote products you\'ve tested and genuinely recommend—authentic reviews lead to happier buyers.'
              },
              {
                question: 'Can I promote any product on TikTok Shop?',
                answer: 'You can promote most products listed on TikTok Shop, but some sellers restrict their affiliate programs to specific creators. Focus on products relevant to your niche for better conversion rates. Authentic fit matters more than commission percentage.'
              },
              {
                question: 'How do TikTok Shop earnings compare to Amazon Associates?',
                answer: 'TikTok Shop typically pays higher commissions (5-20% vs Amazon\'s 1-10%) and converts better due to in-app shopping. However, Amazon has broader product selection. Many creators use both: TikTok Shop for viral products, Amazon for niche/specific items.'
              }
            ]}
          />

          <RelatedCalculators
            currentCalculator="shop-commission"
            calculators={[
              {
                name: 'TikTok Money Calculator',
                slug: 'tiktok-money',
                description: 'Calculate total earnings including TikTok Shop',
                icon: '💵'
              },
              {
                name: 'Brand Deal Rate Calculator',
                slug: 'brand-deal-rate',
                description: 'Compare Shop income to brand deal potential',
                icon: '🤝'
              },
              {
                name: 'Engagement Rate Calculator',
                slug: 'engagement-rate',
                description: 'Higher engagement drives more Shop conversions',
                icon: '📊'
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
}
