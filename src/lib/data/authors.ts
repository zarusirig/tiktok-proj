import { Author } from '@/components/trust/AuthorBio';

export const authors: Record<string, Author> = {
  'sarah-chen': {
    name: 'Sarah Chen',
    role: 'Creator Economy Analyst',
    expertise: [
      'Social Media Monetization',
      'Platform Analytics',
      'Creator Economics',
      'Data Analysis',
    ],
    bio: 'Sarah has analyzed creator earnings data across multiple platforms for over 6 years. She specializes in TikTok monetization strategies and has helped thousands of creators understand their earning potential through data-driven insights.',
    credentials: [
      'Former Social Media Strategist at major digital agency',
      '6+ years analyzing creator economy trends',
      'Published researcher in digital media economics',
      'Consulted with 500+ content creators on monetization',
    ],
    yearsOfExperience: 6,
  },
  'marcus-rodriguez': {
    name: 'Marcus Rodriguez',
    role: 'Digital Marketing Expert',
    expertise: [
      'Brand Partnerships',
      'Influencer Marketing',
      'ROI Analysis',
      'Campaign Strategy',
    ],
    bio: 'Marcus brings over 8 years of experience in influencer marketing and brand partnerships. He has negotiated deals worth over $10M for creators and understands the intricacies of brand-creator relationships on TikTok.',
    credentials: [
      'Former Director of Influencer Marketing at Fortune 500 company',
      'Negotiated 1000+ brand deals',
      '8+ years in digital marketing',
      'Certified Digital Marketing Professional',
    ],
    yearsOfExperience: 8,
  },
  'jessica-liu': {
    name: 'Dr. Jessica Liu',
    role: 'Social Media Research Specialist',
    expertise: [
      'Algorithm Analysis',
      'Engagement Metrics',
      'Platform Research',
      'Audience Behavior',
    ],
    bio: 'Dr. Liu holds a PhD in Digital Communication and has extensively researched social media algorithms and user engagement patterns. Her work focuses on helping creators understand and optimize for platform algorithms.',
    credentials: [
      'PhD in Digital Communication',
      '10+ published research papers on social media',
      '5+ years studying TikTok algorithm',
      'Regular speaker at digital marketing conferences',
    ],
    yearsOfExperience: 7,
  },
  'alex-thompson': {
    name: 'Alex Thompson',
    role: 'TikTok Growth Strategist',
    expertise: [
      'Content Strategy',
      'Viral Content',
      'Audience Growth',
      'TikTok Trends',
    ],
    bio: 'Alex is a successful TikTok creator (2M+ followers) turned strategist who now helps other creators grow their accounts. With insider knowledge of what works on TikTok, Alex provides practical, tested strategies.',
    credentials: [
      'Built personal TikTok account to 2M+ followers',
      'Helped 200+ creators reach 100K+ followers',
      '4+ years as full-time TikTok creator',
      'Certified Social Media Marketing Professional',
    ],
    yearsOfExperience: 4,
  },
  'team': {
    name: 'TikTok Calculator Team',
    role: 'Research & Analysis Team',
    expertise: [
      'Data Analysis',
      'Creator Economics',
      'Platform Research',
      'Industry Insights',
    ],
    bio: 'Our team of analysts, researchers, and former creators work together to provide the most accurate and up-to-date information about TikTok monetization. We continuously monitor platform changes and creator earnings data.',
    credentials: [
      'Combined 25+ years experience in creator economy',
      'Analyzed data from 100K+ creator accounts',
      'Regular platform updates monitoring',
      'Direct partnerships with creator communities',
    ],
    yearsOfExperience: 5,
  },
};

// Helper function to get author by ID
export function getAuthor(authorId: string): Author | null {
  return authors[authorId] || null;
}

// Get default author for calculator pages
export function getCalculatorAuthor(): Author {
  return authors['sarah-chen'];
}

// Get default author for guide pages
export function getGuideAuthor(): Author {
  return authors['marcus-rodriguez'];
}

// Get default author for news pages
export function getNewsAuthor(): Author {
  return authors['jessica-liu'];
}

// Get default author for data/research pages
export function getDataAuthor(): Author {
  return authors['jessica-liu'];
}

// Get team author for general content
export function getTeamAuthor(): Author {
  return authors['team'];
}
