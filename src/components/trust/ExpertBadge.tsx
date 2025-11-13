import React from 'react';
import { Shield, CheckCircle, Award, TrendingUp } from 'lucide-react';

type BadgeType = 'expert-reviewed' | 'data-verified' | 'regularly-updated' | 'industry-standard';

interface ExpertBadgeProps {
  type: BadgeType;
  customText?: string;
  showIcon?: boolean;
  variant?: 'default' | 'compact';
}

const badgeConfig = {
  'expert-reviewed': {
    icon: Shield,
    text: 'Expert Reviewed',
    color: 'blue',
    bgClass: 'bg-blue-50 dark:bg-blue-900/20',
    borderClass: 'border-blue-200 dark:border-blue-800',
    textClass: 'text-blue-700 dark:text-blue-300',
    iconClass: 'text-blue-600 dark:text-blue-400',
  },
  'data-verified': {
    icon: CheckCircle,
    text: 'Data Verified',
    color: 'green',
    bgClass: 'bg-green-50 dark:bg-green-900/20',
    borderClass: 'border-green-200 dark:border-green-800',
    textClass: 'text-green-700 dark:text-green-300',
    iconClass: 'text-green-600 dark:text-green-400',
  },
  'regularly-updated': {
    icon: TrendingUp,
    text: 'Regularly Updated',
    color: 'purple',
    bgClass: 'bg-purple-50 dark:bg-purple-900/20',
    borderClass: 'border-purple-200 dark:border-purple-800',
    textClass: 'text-purple-700 dark:text-purple-300',
    iconClass: 'text-purple-600 dark:text-purple-400',
  },
  'industry-standard': {
    icon: Award,
    text: 'Industry Standard',
    color: 'yellow',
    bgClass: 'bg-yellow-50 dark:bg-yellow-900/20',
    borderClass: 'border-yellow-200 dark:border-yellow-800',
    textClass: 'text-yellow-700 dark:text-yellow-300',
    iconClass: 'text-yellow-600 dark:text-yellow-400',
  },
};

export default function ExpertBadge({
  type,
  customText,
  showIcon = true,
  variant = 'default'
}: ExpertBadgeProps) {
  const config = badgeConfig[type];
  const Icon = config.icon;
  const displayText = customText || config.text;

  if (variant === 'compact') {
    return (
      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${config.bgClass} ${config.borderClass} ${config.textClass}`}>
        {showIcon && <Icon className={`w-3.5 h-3.5 ${config.iconClass}`} />}
        {displayText}
      </span>
    );
  }

  return (
    <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium border shadow-sm ${config.bgClass} ${config.borderClass} ${config.textClass}`}>
      {showIcon && <Icon className={`w-5 h-5 ${config.iconClass}`} />}
      <span>{displayText}</span>
    </div>
  );
}
