# TikTok Creator Calculator

Free, data-driven calculators for TikTok creators to estimate earnings, calculate engagement rates, determine brand deal rates, and optimize monetization strategies.

## 🚀 Features

- **8 Calculator Tools:**
  - TikTok Creator Fund Calculator
  - Engagement Rate Calculator
  - Brand Deal Rate Calculator
  - LIVE Gifts Calculator
  - Coins Calculator
  - RPM Calculator
  - Shop Commission Calculator
  - TikTok Money Calculator (Comprehensive)

- **Data-Driven:** Based on surveys of 500+ creators and 2024 industry reports
- **Transparent Methodology:** Every calculator shows its formula and data sources
- **Always Free:** No signup, no paywalls, no credit card required
- **Mobile-First:** Optimized for creators on mobile devices

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript 5+
- **Styling:** Tailwind CSS 3+
- **Hosting:** Firebase Hosting
- **Analytics:** Google Analytics 4
- **Deployment:** GitHub Actions

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 🔧 Environment Variables

Create a `.env.local` file:

```
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your-verification-code
```

## 📁 Project Structure

```
tiktok-proj/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── calculators/        # Calculator pages
│   │   ├── guides/             # Guide pages
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage
│   ├── components/             # React components
│   │   ├── calculator/         # Calculator-specific components
│   │   ├── layout/             # Layout components
│   │   └── ui/                 # UI primitives
│   ├── lib/                    # Business logic
│   │   ├── analytics/          # GA4 tracking
│   │   ├── calculators/        # Calculator formulas
│   │   ├── constants/          # Constants and configs
│   │   └── utils/              # Utilities
│   ├── types/                  # TypeScript types
│   └── styles/                 # Global styles
├── docs/                       # Documentation
├── public/                     # Static assets
└── package.json
```

## 🧮 Calculator Logic

All calculator logic is pure functions with validation:

```typescript
// Example: Creator Fund Calculator
import { calculateCreatorFund } from '@/lib/calculators/creator-fund';

const result = calculateCreatorFund({
  monthlyViews: 500000,
  engagementRate: 5,
  niche: 'lifestyle',
});

console.log(result);
// {
//   minMonthly: 75.00,
//   maxMonthly: 150.00,
//   avgRPM: 0.030,
//   ...
// }
```

## 📊 Data Sources

- TikTok Creator Portal (Official Documentation)
- Survey of 500+ creators (Q4 2024)
- Influencer Marketing Hub 2024 Reports
- CreatorIQ Rate Card Database
- Social Media Today Research

## 🎨 Design System

- **Colors:** Primary (Precision Blue), Secondary (Data Teal), Accent (TikTok Pink)
- **Typography:** Inter font family
- **Components:** Pre-built UI components with Tailwind
- **Responsive:** Mobile-first with desktop optimizations

## 🚢 Deployment

Automatic deployment to Firebase Hosting via GitHub Actions:

```bash
# Manual deployment
npm run build
firebase deploy
```

## 📝 Documentation

Complete documentation is available in the `/docs` directory:

- Product Vision & Roadmap
- Technical Architecture
- Calculator Specifications
- Content Guidelines
- Analytics Implementation
- SEO Strategy

## 🤝 Contributing

This is a production project. For feedback or bug reports, please contact us through the website.

## 📄 License

© 2025 TikTok Creator Calculator. All rights reserved.

Not affiliated with TikTok or ByteDance Ltd.

## 🔗 Links

- Website: https://tiktokcalculator.com
- Documentation: `/docs/README.md`

## 🙏 Acknowledgments

Built for the creator community. Data sourced from thousands of creators willing to share their experiences.
