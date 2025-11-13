import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

interface ReviewInfo {
  reviewer: string;
  reviewDate: string;
  status: 'verified' | 'pending' | 'needs-update';
  notes?: string;
}

interface ContentReviewBadgeProps {
  review: ReviewInfo;
  variant?: 'banner' | 'inline';
}

export default function ContentReviewBadge({ review, variant = 'inline' }: ContentReviewBadgeProps) {
  const statusConfig = {
    verified: {
      icon: CheckCircle,
      label: 'Expert Verified',
      color: 'green',
      bgClass: 'bg-green-50 dark:bg-green-900/20',
      borderClass: 'border-green-200 dark:border-green-800',
      textClass: 'text-green-700 dark:text-green-300',
      iconClass: 'text-green-600 dark:text-green-400',
    },
    pending: {
      icon: Clock,
      label: 'Review Pending',
      color: 'yellow',
      bgClass: 'bg-yellow-50 dark:bg-yellow-900/20',
      borderClass: 'border-yellow-200 dark:border-yellow-800',
      textClass: 'text-yellow-700 dark:text-yellow-300',
      iconClass: 'text-yellow-600 dark:text-yellow-400',
    },
    'needs-update': {
      icon: AlertCircle,
      label: 'Scheduled for Review',
      color: 'orange',
      bgClass: 'bg-orange-50 dark:bg-orange-900/20',
      borderClass: 'border-orange-200 dark:border-orange-800',
      textClass: 'text-orange-700 dark:text-orange-300',
      iconClass: 'text-orange-600 dark:text-orange-400',
    },
  };

  const config = statusConfig[review.status];
  const Icon = config.icon;

  if (variant === 'inline') {
    return (
      <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-sm font-medium border ${config.bgClass} ${config.borderClass} ${config.textClass}`}>
        <Icon className={`w-4 h-4 ${config.iconClass}`} />
        <span>{config.label}</span>
      </div>
    );
  }

  return (
    <div className={`rounded-lg p-4 border ${config.bgClass} ${config.borderClass}`}>
      <div className="flex items-start gap-3">
        <Icon className={`w-5 h-5 ${config.iconClass} flex-shrink-0 mt-0.5`} />
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2 mb-1">
            <h4 className={`font-semibold ${config.textClass}`}>
              {config.label}
            </h4>
            <span className={`text-xs ${config.textClass}`}>
              {new Date(review.reviewDate).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </span>
          </div>
          <p className={`text-sm ${config.textClass}`}>
            Reviewed by {review.reviewer}
          </p>
          {review.notes && (
            <p className={`text-sm ${config.textClass} mt-2 opacity-90`}>
              {review.notes}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
