'use client';

import React from 'react';
import Link from 'next/link';
import { trackNavigation } from '@/lib/analytics/ga4';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (label: string, href: string) => {
    trackNavigation('footer', label, href);
  };

  const footerSections = [
    {
      title: 'Calculators',
      links: [
        { href: '/calculators/tiktok-creator-fund', label: 'Creator Fund' },
        { href: '/calculators/engagement-rate', label: 'Engagement Rate' },
        { href: '/calculators/brand-deal-rate', label: 'Brand Deal Rate' },
        { href: '/calculators/live-gifts', label: 'LIVE Gifts' },
        { href: '/calculators/tiktok-money', label: 'Money Calculator' },
      ],
    },
    {
      title: 'Guides',
      links: [
        { href: '/guides/how-to-make-money-on-tiktok', label: 'Make Money on TikTok' },
        { href: '/guides/tiktok-creator-fund', label: 'Creator Fund Guide' },
        { href: '/guides/brand-deals', label: 'Brand Deals Guide' },
        { href: '/guides/tiktok-live', label: 'LIVE Monetization' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/faq', label: 'FAQ' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { href: '/privacy', label: 'Privacy Policy' },
        { href: '/terms', label: 'Terms of Service' },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-900 text-white mt-20">
      <div className="container-custom py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="text-heading-sm font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-body-sm text-neutral-400 hover:text-white transition-colors"
                      onClick={() => handleLinkClick(link.label, link.href)}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold">
                TC
              </div>
              <span className="text-body-md font-semibold">
                TikTok Calculator
              </span>
            </div>

            <p className="text-body-sm text-neutral-400 text-center md:text-left">
              &copy; {currentYear} TikTok Creator Calculator. All rights reserved.
            </p>
          </div>

          <p className="mt-4 text-label-sm text-neutral-500 text-center md:text-left">
            Not affiliated with TikTok or ByteDance Ltd. All trademarks are
            property of their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
}
