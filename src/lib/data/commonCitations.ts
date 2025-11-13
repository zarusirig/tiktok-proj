import { Citation } from '@/components/trust/Citations';

// Common citations used across multiple pages
export const commonCitations: Record<string, Citation> = {
  'influencer-marketing-hub-2024': {
    id: 1,
    source: 'Influencer Marketing Hub',
    title: 'TikTok Money Calculator & Influencer Earnings 2024',
    url: 'https://influencermarketinghub.com/tiktok-money-calculator/',
    type: 'industry',
  },
  'tiktok-creator-fund-official': {
    id: 2,
    source: 'TikTok Official',
    title: 'TikTok Creator Fund - Official Guidelines',
    url: 'https://www.tiktok.com/creators/creator-portal/en-us/getting-paid-to-create/creator-fund/',
    type: 'platform',
  },
  'social-media-today-earnings': {
    id: 3,
    source: 'Social Media Today',
    title: 'How Much Do TikTok Creators Really Earn?',
    url: 'https://www.socialmediatoday.com/',
    type: 'industry',
  },
  'hootsuite-tiktok-statistics': {
    id: 4,
    source: 'Hootsuite',
    title: 'TikTok Statistics 2024: User Stats, Revenue Data & Growth',
    url: 'https://blog.hootsuite.com/tiktok-stats/',
    type: 'research',
  },
  'sprout-social-engagement': {
    id: 5,
    source: 'Sprout Social',
    title: 'Social Media Engagement Benchmarks by Industry',
    url: 'https://sproutsocial.com/insights/social-media-statistics/',
    type: 'research',
  },
  'creator-economy-report-2024': {
    id: 6,
    source: 'SignalFire',
    title: 'The Creator Economy Report 2024',
    url: 'https://signalfire.com/blog/creator-economy/',
    type: 'research',
  },
  'tiktok-shop-commission': {
    id: 7,
    source: 'TikTok Official',
    title: 'TikTok Shop Seller Commission Structure',
    url: 'https://seller.tiktok.com/',
    type: 'platform',
  },
  'business-insider-creator-earnings': {
    id: 8,
    source: 'Business Insider',
    title: 'How Much Money TikTok Creators Make',
    url: 'https://www.businessinsider.com/tiktok-creators-how-much-money-they-make',
    type: 'news',
  },
  'later-engagement-rates': {
    id: 9,
    source: 'Later',
    title: 'Instagram Engagement Rate Benchmark Report 2024',
    url: 'https://later.com/blog/instagram-engagement-rate/',
    type: 'research',
  },
  'tiktok-creator-marketplace': {
    id: 10,
    source: 'TikTok Official',
    title: 'TikTok Creator Marketplace - Brand Partnership Guidelines',
    url: 'https://creatormarketplace.tiktok.com/',
    type: 'platform',
  },
};

// Helper function to get citation by ID with updated access date
export function getCitation(citationId: string, accessDate?: string): Citation | null {
  const citation = commonCitations[citationId];
  if (!citation) return null;

  return {
    ...citation,
    accessDate: accessDate || new Date().toISOString(),
  };
}

// Get multiple citations at once
export function getCitations(citationIds: string[]): Citation[] {
  return citationIds
    .map((id, index) => {
      const citation = commonCitations[id];
      if (!citation) return null;
      return {
        ...citation,
        id: index + 1, // Re-number sequentially
        accessDate: new Date().toISOString(),
      };
    })
    .filter((c): c is Citation => c !== null);
}

// Pre-defined citation sets for different page types
export const citationSets = {
  calculators: [
    'influencer-marketing-hub-2024',
    'tiktok-creator-fund-official',
    'social-media-today-earnings',
  ],
  brandDeals: [
    'influencer-marketing-hub-2024',
    'tiktok-creator-marketplace',
    'business-insider-creator-earnings',
  ],
  engagement: [
    'sprout-social-engagement',
    'later-engagement-rates',
    'hootsuite-tiktok-statistics',
  ],
  creatorFund: [
    'tiktok-creator-fund-official',
    'social-media-today-earnings',
    'business-insider-creator-earnings',
  ],
  shop: [
    'tiktok-shop-commission',
    'tiktok-creator-fund-official',
  ],
  industry: [
    'creator-economy-report-2024',
    'hootsuite-tiktok-statistics',
    'influencer-marketing-hub-2024',
  ],
};
