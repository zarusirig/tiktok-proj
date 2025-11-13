'use client';

import React from 'react';
import { getRegionOptions, getRegionalData, type Region } from '@/lib/constants/regional-multipliers';

export interface RegionSelectorProps {
  value: Region;
  onChange: (region: Region) => void;
  className?: string;
  showDescription?: boolean;
}

export function RegionSelector({
  value,
  onChange,
  className = '',
  showDescription = true,
}: RegionSelectorProps) {
  const options = getRegionOptions();
  const selectedRegion = getRegionalData(value);

  return (
    <div className={className}>
      <label htmlFor="region-selector" className="block text-label-md font-medium text-neutral-700 mb-2">
        Your Region / Audience Location
      </label>

      <select
        id="region-selector"
        value={value}
        onChange={(e) => onChange(e.target.value as Region)}
        className="w-full px-4 py-3 rounded-lg border-2 border-neutral-300 bg-white text-body-md text-neutral-900 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 transition-all outline-none cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {showDescription && (
        <div className="mt-3 p-3 bg-primary-50 border border-primary-200 rounded-lg">
          <p className="text-body-sm text-neutral-700">
            <strong className="text-primary-700">{selectedRegion.name}:</strong> {selectedRegion.description}
          </p>
          <p className="text-body-xs text-neutral-600 mt-2">
            {selectedRegion.notes}
          </p>
          {selectedRegion.topNiches.length > 0 && (
            <div className="mt-2">
              <p className="text-body-xs font-semibold text-neutral-700">
                Top niches: {selectedRegion.topNiches.join(', ')}
              </p>
            </div>
          )}
        </div>
      )}

      <p className="text-body-xs text-neutral-500 mt-2">
        💡 Earnings vary significantly by region due to different advertiser budgets and market conditions
      </p>
    </div>
  );
}

/**
 * Compact version for inline use
 */
export function RegionSelectorCompact({
  value,
  onChange,
  className = '',
}: {
  value: Region;
  onChange: (region: Region) => void;
  className?: string;
}) {
  const options = getRegionOptions();

  return (
    <div className={className}>
      <label htmlFor="region-selector-compact" className="block text-label-sm font-medium text-neutral-600 mb-1">
        Region
      </label>
      <select
        id="region-selector-compact"
        value={value}
        onChange={(e) => onChange(e.target.value as Region)}
        className="w-full px-3 py-2 rounded-md border border-neutral-300 bg-white text-body-sm text-neutral-900 focus:border-primary-500 focus:ring-1 focus:ring-primary-200 transition-all outline-none cursor-pointer"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
