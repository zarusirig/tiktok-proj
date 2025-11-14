import React from 'react';

interface TrustBadge {
  icon: string;
  text: string;
  color: string;
}

interface TrustBadgesProps {
  badges?: TrustBadge[];
  className?: string;
}

const DEFAULT_BADGES: TrustBadge[] = [
  {
    icon: '📊',
    text: 'Data-Driven Research',
    color: 'text-blue-600',
  },
  {
    icon: '👥',
    text: '50,000+ Creators Studied',
    color: 'text-green-600',
  },
  {
    icon: '✅',
    text: 'Expert Reviewed',
    color: 'text-purple-600',
  },
  {
    icon: '🔒',
    text: 'Transparent Methodology',
    color: 'text-orange-600',
  },
];

export function TrustBadges({ badges = DEFAULT_BADGES, className = '' }: TrustBadgesProps) {
  return (
    <div className={`flex flex-wrap justify-center gap-4 py-6 ${className}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 bg-white border border-neutral-200 rounded-lg px-4 py-2 shadow-sm"
        >
          <span className="text-lg">{badge.icon}</span>
          <span className={`text-sm font-medium ${badge.color}`}>
            {badge.text}
          </span>
        </div>
      ))}
    </div>
  );
}

// Compact version for inline use
export function TrustBadgesCompact({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center space-x-6 text-sm text-neutral-600 ${className}`}>
      <div className="flex items-center space-x-1">
        <span>📊</span>
        <span>Data-Driven</span>
      </div>
      <div className="flex items-center space-x-1">
        <span>✅</span>
        <span>Expert Reviewed</span>
      </div>
      <div className="flex items-center space-x-1">
        <span>🔒</span>
        <span>Transparent</span>
      </div>
    </div>
  );
}
