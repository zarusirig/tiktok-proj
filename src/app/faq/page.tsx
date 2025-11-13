import type { Metadata } from 'next';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions',
  description: 'Common questions about TikTok Creator Calculator, our methodology, and how to use our tools.',
};

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-body-lg text-neutral-600 text-center mb-12">
          Everything you need to know about TikTok Creator Calculator
        </p>

        <div className="space-y-12">
          <div>
            <h2 className="text-display-sm font-bold text-neutral-900 mb-6">About Our Calculators</h2>
            <FAQSection
              pageName="FAQ"
              faqs={[
                {
                  question: 'Are these calculators really free?',
                  answer: 'Yes! All our calculators are 100% free with no hidden costs, no signup required, and no paywalls. We believe every creator deserves access to accurate earnings estimates.',
                },
                {
                  question: 'How accurate are your calculators?',
                  answer: 'Our calculators use data from 500+ creator surveys, official TikTok documentation, and 2024 industry reports. While we strive for accuracy, actual earnings can vary based on factors like audience location, watch time, and algorithm changes. We provide ranges rather than exact numbers to reflect this variance.',
                },
                {
                  question: 'How often do you update your data?',
                  answer: 'We refresh our data quarterly (every 3 months) to reflect current platform dynamics. Major updates to TikTok's monetization programs trigger immediate data reviews. You can see the "Last Updated" date at the bottom of each calculator's methodology section.',
                },
                {
                  question: 'Can I trust your numbers for negotiations?',
                  answer: 'Our calculators provide industry-standard benchmarks backed by verified data. Many creators use our Brand Deal Rate Calculator as a starting point for negotiations. However, always research your specific niche and adjust based on your unique value proposition.',
                },
              ]}
            />
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Data & Methodology</h2>
            <FAQSection
              pageName="FAQ"
              faqs={[
                {
                  question: 'Where does your data come from?',
                  answer: 'Our data sources include: (1) Surveys of 500+ TikTok creators (Q4 2024), (2) TikTok Creator Portal official documentation, (3) Influencer Marketing Hub reports, (4) CreatorIQ and AspireIQ databases, (5) Social Media Today research. Full sources are listed in each calculator's methodology section.',
                },
                {
                  question: 'Why do you show ranges instead of exact numbers?',
                  answer: 'TikTok earnings vary significantly based on factors we can't fully predict: audience location (US viewers pay more), watch time, content niche, and algorithm changes. Ranges give you a realistic expectation rather than false precision.',
                },
                {
                  question: 'How do engagement rates affect earnings?',
                  answer: 'Higher engagement rates (likes, comments, shares) signal quality content to both the algorithm and brands. For Creator Fund, high engagement can increase RPM by 20-50%. For brand deals, 5%+ engagement commands 20-50% premium rates.',
                },
              ]}
            />
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Privacy & Data Usage</h2>
            <FAQSection
              pageName="FAQ"
              faqs={[
                {
                  question: 'Do you collect my data?',
                  answer: 'We use Google Analytics to track basic usage statistics (page views, calculator usage) to improve our tools. We do NOT collect, store, or share the numbers you enter into calculators. All calculations happen in your browser.',
                },
                {
                  question: 'Do I need to create an account?',
                  answer: 'No! All calculators work without signup or login. We believe in frictionless access to creator tools.',
                },
                {
                  question: 'Are you affiliated with TikTok?',
                  answer: 'No. We are an independent platform providing educational tools. We are not affiliated with TikTok, ByteDance Ltd, or any social media company.',
                },
              ]}
            />
          </div>

          <div>
            <h2 className="text-display-sm font-bold text-neutral-900 mb-6">Using the Calculators</h2>
            <FAQSection
              pageName="FAQ"
              faqs={[
                {
                  question: 'Which calculator should I use first?',
                  answer: 'Start with the Engagement Rate Calculator to understand your audience interaction. Then use the Creator Fund Calculator if you qualify (10K+ followers, 100K+ monthly views). Finally, check the Brand Deal Rate Calculator to see what you should charge sponsors.',
                },
                {
                  question: 'What if I don't know my engagement rate?',
                  answer: 'Use our Engagement Rate Calculator! Enter your follower count and average likes/comments/shares from your recent videos. You can find these stats in TikTok Analytics or by manually checking your last 10-20 videos.',
                },
                {
                  question: 'Can I use these calculators for other platforms?',
                  answer: 'Our calculators are specifically calibrated for TikTok based on TikTok-specific data. Earnings structures differ significantly across platforms (YouTube, Instagram, etc.). We may add platform-specific calculators in the future.',
                },
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
