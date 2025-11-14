import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { FAQSection } from '@/components/calculator/FAQSection';

export const metadata: Metadata = {
  title: 'TikTok LIVE Earnings: What to Expect (Realistic Income Guide 2025)',
  description: 'Realistic earnings expectations for TikTok LIVE by follower tier. Learn how much you can earn from LIVE gifts, factors affecting income, and maximization strategies.',
  keywords: ['tiktok live earnings', 'tiktok gifts income', 'how much can you make tiktok live', 'tiktok live earnings expectations', 'tiktok live income by followers'],
};

export default function TikTokLiveEarningsExpectationsPage() {
  const faqs = [
    {
      question: 'How much does TikTok take from LIVE gifts?',
      answer: 'TikTok takes approximately 50% of gift value. If a viewer spends $10, you receive ~$5 worth of diamonds.',
    },
    {
      question: 'Can I earn from LIVE with 1,000 followers?',
      answer: 'Yes, but earnings will be modest ($2–$10 per stream initially). LIVE is worth it for building community and improving earnings as you grow.',
    },
    {
      question: 'Do I need to go LIVE every day to earn well?',
      answer: 'No. Consistency matters more than daily streaming. 3–5× per week on a schedule is optimal.',
    },
    {
      question: 'What if no one sends gifts during my LIVE?',
      answer: 'Normal at first. Focus on building engaged community. As viewers feel connected, gifts increase naturally. Don\'t pressure—value and entertainment drive gifts.',
    },
    {
      question: 'Can I ask viewers to send gifts?',
      answer: 'Light encouragement is okay ("Gifts help me keep creating!"). But begging or guilting viewers damages trust. Let gifts come organically.',
    },
    {
      question: 'When can I withdraw my earnings?',
      answer: 'Once you reach $50 (10,000 diamonds). Payment processed via PayPal/bank transfer in 7–10 days.',
    },
    {
      question: 'Do LIVE earnings count as income for taxes?',
      answer: 'Yes. LIVE gift earnings are taxable income. Track all earnings for tax filing (1099 in US).',
    },
  ];

  const earningsByTier = [
    {
      tier: '1,000–5,000 Followers',
      subtitle: 'New LIVE Streamers',
      avgViewers: '5–20 concurrent viewers',
      perSession: '$2–$10',
      monthly: '$25–$120',
      frequency: '3× LIVE/week',
      description: 'Small but engaged audience. Few high-value gifts (mostly Roses, Hearts, TikTok logos). Earnings feel slow at first—building LIVE habit more important than earnings at this stage.',
      example: 'Sarah (2,500 followers) goes LIVE 3× per week for 30 minutes, avg 12 viewers per stream, earns $4–$8 per LIVE = $50–$90/month',
    },
    {
      tier: '5,000–10,000 Followers',
      subtitle: 'Growing LIVE Presence',
      avgViewers: '15–40 concurrent viewers',
      perSession: '$8–$30',
      monthly: '$100–$350',
      frequency: '3× LIVE/week',
      description: 'More consistent viewers (regulars start attending). Occasional mid-tier gifts (Hand Heart, $10–$50 gifts). Viewer participation increases. First taste of meaningful LIVE income.',
      example: 'Jason (8,000 followers) goes LIVE 4× per week for 45 min, avg 25 viewers per stream, earns $15–$25 per LIVE = $240–$400/month',
    },
    {
      tier: '10,000–50,000 Followers',
      subtitle: 'Established LIVE Community',
      avgViewers: '30–100 concurrent viewers',
      perSession: '$25–$100',
      monthly: '$400–$1,600',
      frequency: '4× LIVE/week',
      description: 'Dedicated LIVE community (regulars you know by name). Mix of low, mid, and occasional high-tier gifts. Viewer battles/competitions drive gifts. LIVE can match or exceed Creator Fund earnings.',
      example: 'Maria (30,000 followers) goes LIVE 5× per week for 1 hour, avg 60 viewers per stream, earns $40–$80 per LIVE = $800–$1,600/month',
    },
    {
      tier: '50,000–100,000 Followers',
      subtitle: 'Strong LIVE Revenue',
      avgViewers: '80–200 concurrent viewers',
      perSession: '$75–$250',
      monthly: '$1,200–$4,000',
      frequency: '4–5× LIVE/week',
      description: 'LIVE becomes primary monetization (often exceeds brand deals per hour). Regular high-value gifts ($50–$200 gifts multiple times per stream). Superfans emerge. Can sustain as part-time/full-time income.',
      example: 'David (75,000 followers) goes LIVE 5× per week for 1.5 hours, avg 120 viewers per stream, earns $100–$200 per LIVE = $2,000–$4,000/month',
    },
    {
      tier: '100,000–500,000 Followers',
      subtitle: 'High LIVE Earnings',
      avgViewers: '150–500 concurrent viewers',
      perSession: '$150–$500',
      monthly: '$3,000–$10,000',
      frequency: '5× LIVE/week',
      description: 'LIVE is major income stream (potentially full-time income). Frequent high-value gifts (Lions, Falcons, Drama Queens). Multiple superfans compete to be top gifter.',
      example: 'Lisa (250,000 followers) goes LIVE 6× per week for 2 hours, avg 300 viewers per stream, earns $250–$400 per LIVE = $6,000–$10,000/month',
    },
    {
      tier: '500,000+ Followers',
      subtitle: 'Elite LIVE Earnings',
      avgViewers: '400–2,000+ concurrent viewers',
      perSession: '$400–$2,000+',
      monthly: '$8,000–$40,000+',
      frequency: '5–7× LIVE/week',
      description: 'LIVE is primary income (often exceeds all other streams combined). Regular Universe gifts (44,999 coins = $449 each). LIVE battles with other creators drive massive gifts. Potential for $1,000+ single LIVE sessions.',
      example: 'Top creator (1M+ followers) goes LIVE 5× per week for 2–3 hours, avg 800–1,500 viewers per stream, earns $600–$1,500 per LIVE = $12,000–$30,000/month',
    },
  ];

  const factors = [
    {
      title: 'Follower Count (Baseline)',
      description: 'More followers = More potential viewers = Higher earnings baseline. But engagement rate matters more than raw follower count. 10K highly engaged followers > 50K disengaged followers.',
    },
    {
      title: 'Viewer Engagement During LIVE',
      description: 'High-engagement streams earn 2–5× more. Signs: active comments, viewers staying for full stream, multiple viewers sending gifts, participation in activities (Q&A, challenges, polls).',
    },
    {
      title: 'LIVE Duration',
      description: 'Longer streams = more earning potential (up to a point). Optimal duration: 30–45 min for 1K–10K followers, 45–75 min for 10K–50K, 1–2 hours for 50K–100K, 1.5–3 hours for 100K+.',
    },
    {
      title: 'LIVE Frequency (Consistency)',
      description: 'Consistent schedule earns 30–50% more per stream. Viewers know when to tune in, algorithm promotes consistent streamers, builds habit and community. Optimal: 4–5× per week.',
    },
    {
      title: 'Content Type',
      description: 'High-earning: Q&A, tutorials, behind-the-scenes, challenges/games, LIVE battles. Lower-earning: silent streams, random/unfocused content, negative energy.',
    },
    {
      title: 'Time of Day',
      description: 'Peak times earn 20–40% more. Best times (US audience): Weeknights 7–10 PM EST, Weekends 12–3 PM and 7–10 PM EST. Avoid: Early morning (3–8 AM) and work hours (9 AM–5 PM weekdays).',
    },
    {
      title: 'Superfans (Gift Whales)',
      description: 'Reality: 80% of LIVE earnings often come from 5–10% of viewers (superfans). Cultivate by: acknowledging them by name, specific thanks, engaging with their comments, giving shoutouts (don\'t pressure gifts).',
    },
  ];

  const maximizationTips = [
    {
      title: 'Set Up Your LIVE Profile',
      tips: ['Enable all monetization features in Creator Tools', 'Set up payout method (PayPal recommended—faster)', 'Add "Going LIVE [day/time]" to bio'],
    },
    {
      title: 'Promote Your LIVE in Advance',
      tips: ['Post video 2–4 hours before LIVE: "Going LIVE at 7 PM!"', 'Pin announcement video to profile', 'Post Story/status: "LIVE in 30 minutes!"'],
    },
    {
      title: 'Start Strong (First 5 Minutes Critical)',
      tips: ['Have topic/plan (don\'t wing it)', 'Greet viewers by name as they join', 'State what the LIVE is about: "Today we\'re doing Q&A!"', 'High energy attracts more viewers'],
    },
    {
      title: 'Engage Constantly',
      tips: ['Ask questions every 2–3 minutes', 'Read comments out loud and respond', 'Run mini-challenges', 'Thank every gifter by name + gift name'],
    },
    {
      title: 'Create Gift Milestones',
      tips: ['"If we hit 10,000 diamonds, I\'ll do [something fun]"', '"Shoutout to top 3 gifters at end of stream"', 'Thank and celebrate milestones', 'DON\'T: Beg for gifts or focus only on money'],
    },
    {
      title: 'End with Call to Action',
      tips: ['"Thanks for joining! I\'ll be LIVE again [day] at [time]"', '"Follow if you enjoyed—helps me keep going LIVE!"', '"Top gifters: [names]—thank you!"'],
    },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Breadcrumb */}
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/guides" className="hover:text-neutral-900 transition-colors">Guides</Link>
            <span>/</span>
            <span className="text-neutral-900">TikTok LIVE Earnings Expectations</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-500 via-pink-500 to-red-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">
            TikTok LIVE Earnings: What to Expect
          </h1>
          <p className="text-heading-md text-white/90 mb-6">
            Realistic income guide by follower tier with earnings potential, factors, and maximization strategies
          </p>
          <div className="flex flex-wrap gap-4 text-body-sm text-white/80">
            <span>📅 Updated: November 2025</span>
            <span>⏱️ 12 min read</span>
            <span>💰 Earnings Guide</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container-custom max-w-4xl py-12 space-y-8">

        {/* Introduction */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Introduction</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            TikTok LIVE Gifts can be a lucrative monetization stream—but how much can you really earn? This guide provides realistic earnings expectations based on follower count, engagement level, and LIVE frequency.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="font-semibold text-neutral-900 mb-2">What you'll learn:</h3>
            <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
              <li>Realistic earnings by follower tier</li>
              <li>How TikTok LIVE gifts work (Coins → Diamonds → USD)</li>
              <li>Factors that increase/decrease earnings</li>
              <li>Earnings per LIVE session with examples</li>
              <li>Monthly income projections</li>
              <li>How to maximize LIVE earnings</li>
            </ul>
          </div>
        </Card>

        {/* How LIVE Gifts Work */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">How TikTok LIVE Gifts Work</h2>
          <div className="space-y-4">
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">1. Viewers Buy Coins</h3>
              <p className="text-body-sm text-neutral-700">Purchase with real money through TikTok app. Prices: 100 coins = $0.99, 500 coins = $4.99, etc. TikTok keeps ~30% (standard app store cut).</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">2. Viewers Send Gifts (Costing Coins)</h3>
              <p className="text-body-sm text-neutral-700">Gifts range from 5 coins (Rose) to 44,999 coins (Universe). Gifts appear as animations during your LIVE. More expensive gifts = more impressive animations.</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">3. Creators Receive Diamonds</h3>
              <p className="text-body-sm text-neutral-700 mb-2">Gifts convert to Diamonds (TikTok's creator currency). <strong>Conversion rate: 1 Diamond ≈ $0.005 USD</strong>. TikTok takes ~50% (viewer spends $1, creator receives $0.50 worth of diamonds).</p>
            </div>
            <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
              <h3 className="font-semibold text-neutral-900 mb-2">4. Creators Cash Out</h3>
              <p className="text-body-sm text-neutral-700">Minimum withdrawal: $50 (10,000 diamonds). Payment via PayPal or bank transfer. Processing time: 7–10 days.</p>
            </div>
          </div>
        </Card>

        {/* Earnings by Follower Tier */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Realistic Earnings by Follower Tier</h2>
          <div className="space-y-6">
            {earningsByTier.map((tier, idx) => (
              <div key={idx} className="p-6 bg-gradient-to-br from-neutral-50 to-white rounded-lg border border-neutral-200 shadow-sm">
                <div className="mb-4">
                  <h3 className="text-heading-md font-bold text-neutral-900">{tier.tier}</h3>
                  <p className="text-body-sm text-neutral-600">{tier.subtitle}</p>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="text-body-xs text-neutral-600 mb-1">Avg Viewers</p>
                    <p className="text-body-md font-semibold text-neutral-900">{tier.avgViewers}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="text-body-xs text-neutral-600 mb-1">Per Session</p>
                    <p className="text-body-md font-semibold text-green-600">{tier.perSession}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="text-body-xs text-neutral-600 mb-1">Monthly Earnings</p>
                    <p className="text-body-md font-semibold text-green-600">{tier.monthly}</p>
                  </div>
                  <div className="p-3 bg-white rounded-lg border border-neutral-200">
                    <p className="text-body-xs text-neutral-600 mb-1">Frequency</p>
                    <p className="text-body-md font-semibold text-neutral-900">{tier.frequency}</p>
                  </div>
                </div>
                <p className="text-body-sm text-neutral-700 mb-3">{tier.description}</p>
                <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-body-xs font-semibold text-blue-900 mb-1">Example:</p>
                  <p className="text-body-sm text-blue-800">{tier.example}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Factors That Affect Earnings */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Factors That Affect Earnings</h2>
          <div className="space-y-4">
            {factors.map((factor, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                <h3 className="font-semibold text-neutral-900 mb-2">{factor.title}</h3>
                <p className="text-body-sm text-neutral-700">{factor.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* TikTok LIVE Battles */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">TikTok LIVE Battles (Major Earnings Boost)</h2>
          <p className="text-body-md text-neutral-700 mb-4">
            <strong>What Are LIVE Battles?</strong> Two creators go LIVE simultaneously, viewers send gifts to "vote" for their favorite. Creator with most gifts (by value) wins.
          </p>
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
            <h3 className="font-semibold text-green-900 mb-2">Earnings Boost:</h3>
            <ul className="text-body-sm text-green-800 space-y-1 ml-4 list-disc">
              <li>Battles can earn 3–10× more than solo LIVE sessions</li>
              <li>Competitive nature drives viewers to send high-value gifts</li>
              <li>Both creators benefit (even "loser" earns more than solo stream)</li>
            </ul>
          </div>
          <div className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
            <p className="text-body-sm text-neutral-700"><strong>Example:</strong> Solo LIVE: $50 → LIVE Battle: $250–$500 (both creators combined)</p>
          </div>
          <div className="mt-4">
            <h3 className="font-semibold text-neutral-900 mb-2">How to do LIVE battles:</h3>
            <ol className="text-body-sm text-neutral-700 space-y-1 ml-4 list-decimal">
              <li>Need 1,000+ followers (LIVE access)</li>
              <li>Find creator at similar follower tier in your niche</li>
              <li>During LIVE, tap "Battle" button → Invite creator or accept invite</li>
              <li>5-minute battle begins; viewers send gifts to support their creator</li>
              <li>Both creators split earnings based on gifts received</li>
            </ol>
            <p className="text-body-sm text-neutral-700 mt-3"><strong>Pro tip:</strong> Schedule battles in advance, promote to both audiences → Higher turnout → Higher earnings.</p>
          </div>
        </Card>

        {/* How to Maximize LIVE Earnings */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">How to Maximize LIVE Earnings</h2>
          <div className="space-y-6">
            {maximizationTips.map((section, idx) => (
              <div key={idx}>
                <h3 className="font-semibold text-neutral-900 mb-3">{section.title}</h3>
                <ul className="space-y-2">
                  {section.tips.map((tip, tipIdx) => (
                    <li key={tipIdx} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✓</span>
                      <span className="text-body-sm text-neutral-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>

        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Next Steps */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Next Steps</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Before your next LIVE:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Calculate your current earnings potential with <Link href="/calculators/live-gifts" className="text-blue-600 hover:underline">TikTok LIVE Earnings Calculator</Link></li>
                <li>If under 1K followers, read <Link href="/guides/how-to-get-1000-followers-live" className="text-blue-600 hover:underline">How to Get 1,000 Followers for LIVE</Link></li>
                <li>Set consistent LIVE schedule (pick 3 days/times per week)</li>
                <li>Promote your next LIVE in advance</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 mb-2">Optimize your strategy:</h3>
              <ul className="text-body-sm text-neutral-700 space-y-1 ml-4 list-disc">
                <li>Use <Link href="/calculators/posting-time" className="text-blue-600 hover:underline">Best Time to Post Calculator</Link> to find optimal LIVE times</li>
                <li>Learn <Link href="/guides/how-to-increase-engagement" className="text-blue-600 hover:underline">How to Increase Engagement Rate</Link> (translates to LIVE success)</li>
                <li>Explore <Link href="/calculators/coins" className="text-blue-600 hover:underline">TikTok Coins Calculator</Link> to understand gift values</li>
              </ul>
            </div>
          </div>
        </Card>

        {/* Related Resources */}
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Related Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link href="/calculators/live-gifts" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">TikTok LIVE Earnings Calculator</h3>
              <p className="text-body-sm text-neutral-600">Calculate potential earnings</p>
            </Link>
            <Link href="/calculators/coins" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">TikTok Coins Calculator</h3>
              <p className="text-body-sm text-neutral-600">Convert coins to diamonds and USD</p>
            </Link>
            <Link href="/guides/how-to-get-1000-followers-live" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">How to Get 1,000 Followers for LIVE</h3>
              <p className="text-body-sm text-neutral-600">Reach LIVE eligibility threshold</p>
            </Link>
            <Link href="/guides/best-times-go-live" className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:border-neutral-300 transition-colors">
              <h3 className="font-semibold text-neutral-900 mb-1">Best Times to Go LIVE on TikTok</h3>
              <p className="text-body-sm text-neutral-600">Optimize your LIVE schedule</p>
            </Link>
          </div>
        </Card>

      </div>
    </div>
  );
}
