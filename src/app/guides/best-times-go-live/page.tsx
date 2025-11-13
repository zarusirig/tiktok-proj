import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'Best Times to Go LIVE on TikTok: Data-Backed Schedule (2025)',
  description: 'Optimal TikTok LIVE streaming times by timezone, niche, and audience. Maximize viewership with data-backed scheduling.',
  keywords: ['best time tiktok live', 'when to go live', 'tiktok streaming schedule', 'peak live hours'],
};

export default function BestTimesGoLivePage() {
  const timeSlots = [
    { time: '6-9 AM EST', viewers: 'Medium', notes: 'Morning commute, coffee scroll' },
    { time: '12-2 PM EST', viewers: 'High', notes: 'Lunch break peak' },
    { time: '7-11 PM EST', viewers: 'Highest', notes: 'Prime time evening' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <nav className="bg-white border-b border-neutral-200 py-3">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-body-sm text-neutral-600">
            <Link href="/">Home</Link><span>/</span>
            <Link href="/guides">Guides</Link><span>/</span>
            <span className="text-neutral-900">Best Times to Go LIVE</span>
          </div>
        </div>
      </nav>

      <section className="bg-gradient-to-br from-orange-500 via-red-500 to-pink-500 py-12">
        <div className="container-custom max-w-4xl">
          <h1 className="text-display-lg font-bold text-white mb-4">Best Times to Go LIVE on TikTok</h1>
          <p className="text-heading-md text-white/90">Maximize viewership with optimal streaming schedule</p>
        </div>
      </section>

      <div className="container-custom max-w-4xl py-12 space-y-8">
        <Card>
          <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Peak Streaming Times</h2>
          <div className="space-y-4">
            {timeSlots.map((slot, idx) => (
              <div key={idx} className="p-4 bg-neutral-50 rounded-lg">
                <h3 className="font-semibold text-neutral-900">{slot.time}</h3>
                <p className="text-body-sm text-neutral-700"><strong>Viewership:</strong> {slot.viewers}</p>
                <p className="text-body-sm text-neutral-600">{slot.notes}</p>
              </div>
            ))}
          </div>
        </Card>

        <Card className="bg-blue-50">
          <p className="text-body-md text-neutral-700 mb-4">
            <strong>Golden Rule:</strong> 7-11 PM EST is consistently the best time across all niches. Test different times and track your analytics to find your audience's sweet spot.
          </p>
          <Link href="/guides/tiktok-live-earnings-guide" className="text-primary-600 hover:text-primary-700 font-semibold">
            Learn More About LIVE Earnings →
          </Link>
        </Card>
      </div>
    </div>
  );
}

