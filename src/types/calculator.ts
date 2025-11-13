/**
 * Calculator Type Definitions
 * Defines all calculator types, inputs, outputs, and configuration
 */

// Calculator Type Enum
export type CalculatorType =
  | 'creator-fund'
  | 'engagement-rate'
  | 'brand-deal-rate'
  | 'live-gifts'
  | 'coins'
  | 'rpm'
  | 'shop-commission'
  | 'money';

// Content Niches
export type ContentNiche =
  | 'lifestyle'
  | 'beauty-fashion'
  | 'fitness'
  | 'finance'
  | 'gaming'
  | 'food'
  | 'comedy'
  | 'education'
  | 'entertainment'
  | 'tech'
  | 'other';

// Follower Tiers
export type FollowerTier =
  | 'nano'       // < 10K
  | 'micro'      // 10K-50K
  | 'mid'        // 50K-500K
  | 'macro'      // 500K-1M
  | 'mega';      // 1M+

// Input Field Types
export type InputFieldType = 'number' | 'select' | 'range' | 'text';

// Input Field Configuration
export interface InputFieldConfig {
  id: string;
  label: string;
  type: InputFieldType;
  placeholder?: string;
  helperText?: string;
  tooltip?: string;
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number | string;
  options?: { value: string; label: string }[];
  required?: boolean;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

// Result Display Configuration
export interface ResultConfig {
  type: 'range' | 'single' | 'multiple';
  format: 'currency' | 'percentage' | 'number';
  interpretation?: {
    excellent?: { threshold: number; message: string };
    good?: { threshold: number; message: string };
    average?: { threshold: number; message: string };
    belowAverage?: { message: string };
  };
}

// Calculator Result
export interface CalculatorResult {
  min?: number;
  max?: number;
  value?: number;
  interpretation?: string;
  tier?: FollowerTier;
  additionalMetrics?: Record<string, number | string>;
}

// Calculator Configuration
export interface CalculatorConfig {
  id: string;
  type: CalculatorType;
  name: string;
  slug: string;
  description: string;
  shortDescription: string;
  icon: string;
  category: 'earnings' | 'engagement' | 'conversion' | 'utility';
  inputs: InputFieldConfig[];
  results: ResultConfig;
  methodology: {
    title: string;
    formula: string;
    assumptions: { label: string; value: string }[];
    dataSources: string[];
    limitations: string;
    lastUpdated: string;
  };
  relatedCalculators: string[];
  faq: { question: string; answer: string }[];
  seo: {
    title: string;
    description: string;
    keywords: string[];
    ogImage?: string;
  };
}

// Creator Fund Input
export interface CreatorFundInput {
  monthlyViews: number;
  engagementRate: number;
  niche: ContentNiche;
}

// Creator Fund Result
export interface CreatorFundResult extends CalculatorResult {
  minMonthly: number;
  maxMonthly: number;
  minAnnual: number;
  maxAnnual: number;
  avgRPM: number;
}

// Engagement Rate Input
export interface EngagementRateInput {
  followers: number;
  avgLikes: number;
  avgComments: number;
  avgShares: number;
}

// Engagement Rate Result
export interface EngagementRateResult extends CalculatorResult {
  rate: number;
  rating: 'excellent' | 'good' | 'average' | 'below-average';
}

// Brand Deal Input
export interface BrandDealInput {
  followers: number;
  engagementRate: number;
  niche: ContentNiche;
  deliverableType: 'in-feed' | 'spark-ad' | 'live-mention' | 'product-showcase';
}

// Brand Deal Result
export interface BrandDealResult extends CalculatorResult {
  minRate: number;
  maxRate: number;
  tier: FollowerTier;
}

// LIVE Gifts Input
export interface LiveGiftsInput {
  avgViewers: number;
  avgStreamDuration: number;
  giftsPerViewer: number;
}

// LIVE Gifts Result
export interface LiveGiftsResult extends CalculatorResult {
  diamondsEarned: number;
  usdEarnings: number;
  monthlyPotential: number;
}

// Coins Input
export interface CoinsInput {
  coins: number;
}

// Coins Result
export interface CoinsResult extends CalculatorResult {
  usdValue: number;
  diamonds: number;
}

// RPM Input
export interface RPMInput {
  views: number;
  earnings: number;
}

// RPM Result
export interface RPMResult extends CalculatorResult {
  rpm: number;
  benchmark: 'above' | 'average' | 'below';
}

// Shop Commission Input
export interface ShopCommissionInput {
  productPrice: number;
  commissionRate: number;
  monthlySales: number;
}

// Shop Commission Result
export interface ShopCommissionResult extends CalculatorResult {
  commissionPerSale: number;
  monthlyCommission: number;
  annualProjection: number;
}

// Money Calculator Input (comprehensive)
export interface MoneyCalculatorInput {
  followers: number;
  monthlyViews: number;
  engagementRate: number;
  niche: ContentNiche;
  avgStreamViewers?: number;
  monthlyStreams?: number;
}

// Money Calculator Result (all streams combined)
export interface MoneyCalculatorResult extends CalculatorResult {
  creatorFund: { min: number; max: number };
  brandDeals: { min: number; max: number };
  liveGifts: { min: number; max: number };
  total: { min: number; max: number };
  breakdown: {
    label: string;
    value: number;
    percentage: number;
  }[];
}
