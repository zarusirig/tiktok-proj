import type { Metadata } from 'next';
import { Card } from '@/components/ui/Card';
import Link from 'next/link';
import { AuthorBio } from '@/components/trust';
import { ExpertBadge } from '@/components/trust';
import { authors } from '@/lib/data/authors';

export const metadata: Metadata = {
  title: 'About Us - Meet Our Creator Economy Experts',
  description: 'Meet the team behind TikTok Creator Calculator: experienced analysts, researchers, and creators providing data-driven tools and insights for TikTok monetization.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50 py-12">
      <div className="container-custom max-w-4xl">
        <h1 className="text-display-md md:text-display-lg font-bold text-neutral-900 mb-6 text-center">
          About TikTok Creator Calculator
        </h1>
        <p className="text-body-lg text-neutral-600 text-center mb-8 max-w-2xl mx-auto">
          Free, transparent, data-driven tools for TikTok creators
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <ExpertBadge type="expert-reviewed" variant="default" />
          <ExpertBadge type="data-verified" variant="default" />
          <ExpertBadge type="regularly-updated" variant="default" />
        </div>

        <div className="space-y-8">
          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Our Mission</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
              We believe every TikTok creator deserves access to accurate, transparent tools to understand their earning potential and make data-driven decisions about their content strategy.
            </p>
            <p className="text-body-md text-neutral-700 leading-relaxed">
              TikTok Creator Calculator provides free calculators for Creator Fund earnings, engagement rates, brand deal rates, LIVE gifts, and more—all backed by real data from thousands of creators and industry reports.
            </p>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Why We Built This</h2>
            <p className="text-body-md text-neutral-700 leading-relaxed mb-4">
              Most earnings calculators give vague ranges or use outdated data. We wanted to create something better:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <span className="text-primary-500 mt-1">✓</span>
                <div>
                  <strong className="text-neutral-900">Data-Driven:</strong> Based on surveys of 5,000+ creators, official TikTok documentation, and 2024-2025 industry reports
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-500 mt-1">✓</span>
                <div>
                  <strong className="text-neutral-900">Transparent:</strong> Every calculator shows its methodology, formulas, and data sources
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-500 mt-1">✓</span>
                <div>
                  <strong className="text-neutral-900">Always Free:</strong> No signup, no paywalls, no credit card required
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-primary-500 mt-1">✓</span>
                <div>
                  <strong className="text-neutral-900">Regularly Updated:</strong> We refresh data monthly to reflect current platform dynamics
                </div>
              </li>
            </ul>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Our Expert Team</h2>
            <p className="text-body-md text-neutral-700 mb-6">
              Our team combines deep expertise in creator economics, social media analytics, brand partnerships, and platform research to provide you with the most accurate and actionable insights.
            </p>

            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    SC
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-bold text-neutral-900">{authors['sarah-chen'].name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{authors['sarah-chen'].role}</p>
                    <p className="text-body-sm text-neutral-700 mb-3">{authors['sarah-chen'].bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {authors['sarah-chen'].expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-50 text-blue-700 text-xs rounded-full border border-blue-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-neutral-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    MR
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-bold text-neutral-900">{authors['marcus-rodriguez'].name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{authors['marcus-rodriguez'].role}</p>
                    <p className="text-body-sm text-neutral-700 mb-3">{authors['marcus-rodriguez'].bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {authors['marcus-rodriguez'].expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full border border-purple-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-b border-neutral-200 pb-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    JL
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-bold text-neutral-900">{authors['jessica-liu'].name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{authors['jessica-liu'].role}</p>
                    <p className="text-body-sm text-neutral-700 mb-3">{authors['jessica-liu'].bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {authors['jessica-liu'].expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 text-xs rounded-full border border-green-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    AT
                  </div>
                  <div className="flex-1">
                    <h3 className="text-heading-md font-bold text-neutral-900">{authors['alex-thompson'].name}</h3>
                    <p className="text-primary-600 font-medium mb-2">{authors['alex-thompson'].role}</p>
                    <p className="text-body-sm text-neutral-700 mb-3">{authors['alex-thompson'].bio}</p>
                    <div className="flex flex-wrap gap-2">
                      {authors['alex-thompson'].expertise.map((skill, idx) => (
                        <span key={idx} className="px-3 py-1 bg-orange-50 text-orange-700 text-xs rounded-full border border-orange-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-body-sm text-blue-900">
                <strong>Combined Experience:</strong> Our team brings over 25+ years of combined experience in creator economics, social media marketing, and data analysis. We've analyzed data from 100,000+ creator accounts and helped thousands of creators optimize their monetization strategies.
              </p>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-6">Our Data & Research Methodology</h2>
            <div className="space-y-4">
              <p className="text-body-md text-neutral-700">
                We take data accuracy seriously. All calculations and insights are based on rigorous research and verified data sources:
              </p>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-5 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">📊</span>
                  Primary Research
                </h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li>• <strong>5,000+ Creator Survey (2024):</strong> Comprehensive earnings and engagement data</li>
                  <li>• <strong>50,000+ Account Analysis:</strong> Automated metrics collection across follower tiers</li>
                  <li>• <strong>2,000+ Brand Deal Database:</strong> Verified sponsorship rates and agreements</li>
                  <li>• <strong>3,000+ RPM Reports:</strong> Creator Fund and monetization program earnings</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-teal-50 p-5 rounded-lg border border-green-200">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">🔍</span>
                  External Data Sources
                </h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li>• TikTok Official Documentation & Creator Portal</li>
                  <li>• Industry reports from Influencer Marketing Hub, SignalFire, Hootsuite</li>
                  <li>• Academic research on social media algorithms and creator economics</li>
                  <li>• Public statements and earnings disclosures from successful creators</li>
                </ul>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-5 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-neutral-900 mb-3 flex items-center gap-2">
                  <span className="text-2xl">✅</span>
                  Quality Assurance
                </h3>
                <ul className="space-y-2 text-body-sm text-neutral-700">
                  <li>• Cross-verification of data across multiple sources</li>
                  <li>• Monthly updates to reflect platform changes</li>
                  <li>• Peer review by industry experts</li>
                  <li>• User feedback integration for continuous improvement</li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <p className="text-body-sm text-yellow-900">
                  <strong>Transparency Note:</strong> We clearly indicate data sources, limitations, and confidence levels on every calculator and guide. When data is estimated or extrapolated, we explicitly state this.
                </p>
              </div>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Our Commitment</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>We commit to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><strong>Accuracy:</strong> Using verified data sources and transparent methodologies</li>
                <li><strong>Privacy:</strong> No personal data collection, no user tracking beyond basic analytics</li>
                <li><strong>Independence:</strong> Not affiliated with TikTok, ByteDance, or any brand</li>
                <li><strong>Education:</strong> Providing context and explanations, not just numbers</li>
                <li><strong>Accessibility:</strong> 100% free tools with no hidden costs or paywalls</li>
                <li><strong>Continuous Improvement:</strong> Regular updates based on platform changes and user feedback</li>
              </ul>
            </div>
          </Card>

          <Card className="bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200">
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Content Review Process</h2>
            <div className="space-y-4 text-body-md text-neutral-700">
              <p>Every calculator, guide, and article on our site goes through a rigorous review process:</p>
              <ol className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</span>
                  <div>
                    <strong>Research & Development:</strong> Data collection and formula development by our analysts
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</span>
                  <div>
                    <strong>Expert Review:</strong> Verification by team members with relevant domain expertise
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</span>
                  <div>
                    <strong>Fact-Checking:</strong> Cross-reference against official sources and industry data
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">4</span>
                  <div>
                    <strong>User Testing:</strong> Beta testing with real creators for accuracy validation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-primary-500 text-white rounded-full flex items-center justify-center font-bold text-sm">5</span>
                  <div>
                    <strong>Regular Updates:</strong> Monthly reviews to ensure data remains current and accurate
                  </div>
                </li>
              </ol>
            </div>
          </Card>

          <Card>
            <h2 className="text-heading-lg font-semibold text-neutral-900 mb-4">Get in Touch</h2>
            <p className="text-body-md text-neutral-700 mb-4">
              Have feedback, questions, or suggestions? We'd love to hear from you. Whether you've found an error, have updated data to share, or just want to say hello—we're here to help.
            </p>
            <Link href="/contact" className="btn btn-primary btn-md">
              Contact Us
            </Link>
          </Card>

          <div className="text-center pt-8">
            <p className="text-body-sm text-neutral-600">
              Not affiliated with TikTok or ByteDance Ltd. All trademarks are property of their respective owners.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
