import React from 'react';
import { AlertTriangle, Info, DollarSign, Scale } from 'lucide-react';

type DisclaimerType = 'general' | 'financial' | 'educational' | 'legal';

interface DisclaimerProps {
  type: DisclaimerType;
  customContent?: string;
  variant?: 'default' | 'compact';
}

const disclaimerConfig = {
  general: {
    icon: Info,
    title: 'Important Notice',
    content: 'This tool provides estimates based on available data and industry benchmarks. Actual results may vary based on numerous factors including content quality, audience engagement, niche, geographic location, and platform algorithm changes. Use these calculations as general guidance rather than guaranteed outcomes.',
    bgClass: 'bg-blue-50 dark:bg-blue-900/20',
    borderClass: 'border-blue-200 dark:border-blue-800',
    iconClass: 'text-blue-600 dark:text-blue-400',
    textClass: 'text-blue-900 dark:text-blue-100',
  },
  financial: {
    icon: DollarSign,
    title: 'Financial Disclaimer',
    content: 'The earnings estimates provided are for informational and educational purposes only and should not be considered financial advice. Actual earnings can vary significantly based on multiple factors. TikTok creator earnings are subject to platform policies, tax obligations, and market conditions. Consult with a qualified financial advisor for personalized advice regarding your specific situation.',
    bgClass: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderClass: 'border-yellow-200 dark:border-yellow-800',
    iconClass: 'text-yellow-600 dark:text-yellow-400',
    textClass: 'text-yellow-900 dark:text-yellow-100',
  },
  educational: {
    icon: Info,
    title: 'Educational Purpose',
    content: 'This content is provided for educational and informational purposes only. While we strive for accuracy, the creator economy and platform policies change frequently. Always verify current information directly from official TikTok sources and consult with professionals for decisions affecting your business or financial situation.',
    bgClass: 'bg-purple-50 dark:bg-purple-900/20',
    borderClass: 'border-purple-200 dark:border-purple-800',
    iconClass: 'text-purple-600 dark:text-purple-400',
    textClass: 'text-purple-900 dark:text-purple-100',
  },
  legal: {
    icon: Scale,
    title: 'Legal Disclaimer',
    content: 'This website and its tools are not affiliated with, endorsed by, or sponsored by TikTok or ByteDance. All trademarks, service marks, and company names are the property of their respective owners. The information provided does not constitute legal, financial, or professional advice. Users are responsible for compliance with all applicable laws, regulations, and platform terms of service.',
    bgClass: 'bg-gray-50 dark:bg-gray-800',
    borderClass: 'border-gray-200 dark:border-gray-700',
    iconClass: 'text-gray-600 dark:text-gray-400',
    textClass: 'text-gray-900 dark:text-gray-100',
  },
};

export default function Disclaimer({ type, customContent, variant = 'default' }: DisclaimerProps) {
  const config = disclaimerConfig[type];
  const Icon = config.icon;
  const content = customContent || config.content;

  if (variant === 'compact') {
    return (
      <div className={`${config.bgClass} ${config.borderClass} border rounded-lg p-3 text-sm`}>
        <div className="flex items-start gap-2">
          <Icon className={`w-4 h-4 ${config.iconClass} flex-shrink-0 mt-0.5`} />
          <p className={config.textClass}>{content}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`${config.bgClass} ${config.borderClass} border rounded-xl p-6 my-6`}>
      <div className="flex items-start gap-3">
        <div className={`flex-shrink-0 w-10 h-10 rounded-lg ${config.bgClass} flex items-center justify-center`}>
          <Icon className={`w-6 h-6 ${config.iconClass}`} />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className={`font-bold text-lg mb-2 ${config.textClass}`}>
            {config.title}
          </h3>
          <p className={`${config.textClass} leading-relaxed`}>
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}
