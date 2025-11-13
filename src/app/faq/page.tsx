import React from 'react';
import type { Metadata } from 'next';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about TikTok Creator Calculator, our methodology, and how to use our tools.',
};

export default function FAQPage() {
  const element = (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-body-lg text-neutral-600 text-center mb-12">
          Everything you need to know about TikTok Creator Calculator
        </p>
        <div className="space-y-12">
          <FAQSection
            pageName="General FAQ"
            faqs={[
              {
                question: 'What is TikTok Creator Calculator?',
                answer: 'TikTok Creator Calculator is a free tool that helps TikTok creators estimate earnings from various monetization streams including Creator Fund, brand deals, LIVE gifts, and TikTok Shop. Our calculators use real industry data and transparent methodologies to provide accurate earnings estimates.',
              },
              {
                question: 'Are these calculators accurate?',
                answer: 'Our calculators provide estimates based on industry averages and reported creator earnings. Actual earnings may vary based on your audience demographics, content niche, engagement patterns, and other factors. We regularly update our data sources to ensure accuracy.',
              },
              {
                question: 'Do I need to pay to use the calculators?',
                answer: 'No! All our calculators are 100% free to use. No signup, no credit card, no hidden fees. We believe in providing transparent, accessible tools for all creators.',
              },
              {
                question: 'How do you calculate earnings estimates?',
                answer: 'Each calculator page includes a detailed Methodology section explaining our formulas, data sources, and assumptions. We use industry reports, creator surveys, and official TikTok documentation to build our models. Check the methodology section on any calculator for specifics.',
              },
              {
                question: 'Can I trust your data sources?',
                answer: 'Yes. We cite all data sources on each calculator page, including Influencer Marketing Hub, HypeAuditor, Social Media Today, and official TikTok Creator Portal documentation. All sources are publicly verifiable and regularly updated.',
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
  return element;
}
