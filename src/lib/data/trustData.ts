import { DataSource } from '@/components/trust/DataTransparency';

// Common data sources used across the site
export const dataSources: Record<string, DataSource> = {
  'creator-survey-2024': {
    name: 'TikTok Creator Survey 2024',
    description: 'Comprehensive survey of active TikTok creators about their earnings, engagement rates, and monetization strategies.',
    sampleSize: '5,000+ creators',
    dateRange: 'January 2024 - October 2024',
    methodology: 'Online survey with verification of creator accounts and earnings screenshots',
  },
  'platform-analytics': {
    name: 'Platform Analytics Data',
    description: 'Aggregated analytics data from creator accounts across various follower tiers and niches.',
    sampleSize: '50,000+ accounts analyzed',
    dateRange: '2023 - 2024',
    methodology: 'API data collection and manual verification of public metrics',
  },
  'brand-deal-database': {
    name: 'Brand Deal Database',
    description: 'Database of reported brand deal rates and sponsorship agreements across different creator tiers.',
    sampleSize: '2,000+ reported deals',
    dateRange: '2022 - 2024',
    methodology: 'Self-reported data from creators with verification against industry benchmarks',
  },
  'industry-reports': {
    name: 'Industry Research Reports',
    description: 'Data aggregated from major social media marketing platforms and research organizations.',
    sampleSize: 'Multiple sources',
    dateRange: '2023 - 2024',
    methodology: 'Meta-analysis of published industry reports and whitepapers',
  },
  'tiktok-official-data': {
    name: 'TikTok Official Documentation',
    description: 'Official data and guidelines published by TikTok regarding creator monetization.',
    sampleSize: 'N/A - Official platform data',
    dateRange: 'Current',
    methodology: 'Direct from TikTok Creator Portal and official announcements',
  },
  'engagement-benchmarks': {
    name: 'Engagement Rate Benchmarks',
    description: 'Industry-standard engagement rate data across different follower ranges and content niches.',
    sampleSize: '100,000+ accounts',
    dateRange: '2023 - 2024',
    methodology: 'Automated analysis of public account metrics and engagement patterns',
  },
  'rpm-analysis': {
    name: 'RPM Rate Analysis',
    description: 'Analysis of Revenue Per Mille (RPM) rates reported by creators in the Creator Fund and other monetization programs.',
    sampleSize: '3,000+ creators',
    dateRange: 'Q1 2023 - Q3 2024',
    methodology: 'Verified earnings reports and payment screenshots from active creators',
  },
  'shop-commission-official': {
    name: 'TikTok Shop Commission Structure',
    description: 'Official commission rates and payment terms for TikTok Shop affiliates and sellers.',
    sampleSize: 'N/A - Official platform data',
    dateRange: 'Current',
    methodology: 'Direct from TikTok Shop Seller Center documentation',
  },
};

// Common data limitations
export const commonLimitations = {
  earnings: [
    'Earnings vary significantly based on content niche, audience demographics, and geographic location',
    'Platform policies and rates are subject to change without notice',
    'Individual results may differ from averages based on content quality and consistency',
    'Data represents reported figures and may not account for all revenue streams',
  ],
  engagement: [
    'Engagement rates fluctuate based on posting time, content type, and algorithm changes',
    'Historical data may not predict future performance',
    'Platform algorithm updates can significantly impact engagement metrics',
  ],
  brandDeals: [
    'Brand deal rates vary significantly based on negotiation skills and brand budgets',
    'Rates shown are averages and actual deals may be higher or lower',
    'Geographic location and creator niche significantly impact brand deal opportunities',
    'Additional factors like usage rights and exclusivity affect final rates',
  ],
  general: [
    'TikTok and creator economy data changes frequently',
    'Results are based on historical data and may not reflect current conditions',
    'Individual experiences may vary significantly from average data',
    'Platform terms and conditions are subject to change',
  ],
};

// Helper functions
export function getDataSource(sourceId: string): DataSource | undefined {
  return dataSources[sourceId];
}

export function getDataSources(sourceIds: string[]): DataSource[] {
  return sourceIds
    .map(id => dataSources[id])
    .filter((source): source is DataSource => source !== undefined);
}

export function getLimitations(limitationType: keyof typeof commonLimitations): string[] {
  return commonLimitations[limitationType];
}

// Pre-configured data transparency sets
export const transparencySets = {
  calculator: {
    sources: ['creator-survey-2024', 'platform-analytics', 'industry-reports'],
    limitations: commonLimitations.earnings,
    confidence: 'high' as const,
    updateFrequency: 'monthly',
  },
  brandDeal: {
    sources: ['brand-deal-database', 'industry-reports', 'creator-survey-2024'],
    limitations: commonLimitations.brandDeals,
    confidence: 'medium' as const,
    updateFrequency: 'quarterly',
  },
  engagement: {
    sources: ['engagement-benchmarks', 'platform-analytics'],
    limitations: commonLimitations.engagement,
    confidence: 'high' as const,
    updateFrequency: 'monthly',
  },
  official: {
    sources: ['tiktok-official-data'],
    limitations: commonLimitations.general,
    confidence: 'high' as const,
    updateFrequency: 'as-updated',
  },
};
