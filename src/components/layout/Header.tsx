'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { trackNavigation } from '@/lib/analytics/ga4';
import { cn } from '@/lib/utils/cn';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  const navLinks = [
    {
      label: 'Calculators',
      href: '/calculators',
      dropdown: [
        { href: '/calculators/tiktok-creator-fund', label: 'Creator Fund Calculator' },
        { href: '/calculators/engagement-rate', label: 'Engagement Rate Calculator' },
        { href: '/calculators/brand-deal-rate', label: 'Brand Deal Calculator' },
        { href: '/calculators/live-gifts', label: 'LIVE Gifts Calculator' },
        { href: '/calculators/tiktok-money', label: 'Money Calculator' },
        { href: '/calculators/rpm', label: 'RPM Calculator' },
        { href: '/calculators/shop-commission', label: 'Shop Commission Calculator' },
        { href: '/calculators', label: 'View All →', featured: true },
      ],
    },
    {
      label: 'Guides',
      href: '/guides',
      dropdown: [
        { href: '/guides/how-to-make-money-on-tiktok', label: 'Make Money on TikTok' },
        { href: '/guides/tiktok-creator-fund', label: 'Creator Fund Guide' },
        { href: '/guides/brand-deals', label: 'Brand Deals Guide' },
        { href: '/guides/tiktok-live', label: 'LIVE Monetization' },
        { href: '/guides/tiktok-shop-affiliate', label: 'Shop Affiliate Program' },
        { href: '/guides/how-to-get-brand-deals', label: 'How to Get Brand Deals' },
        { href: '/guides', label: 'View All →', featured: true },
      ],
    },
    {
      label: 'Data & Insights',
      href: '/data',
      dropdown: [
        { href: '/data/brand-deal-rates-by-followers', label: 'Brand Deal Rates' },
        { href: '/data/rpm-rates-by-niche', label: 'RPM Rates by Niche' },
        { href: '/data/engagement-rates-by-niche', label: 'Engagement Benchmarks' },
        { href: '/comparisons/tiktok-vs-youtube-earnings', label: 'TikTok vs YouTube' },
        { href: '/comparisons/tiktok-vs-instagram', label: 'TikTok vs Instagram' },
      ],
    },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  const handleLinkClick = (label: string, href: string) => {
    trackNavigation('header', label, href);
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 shadow-sm">
      <div className="container-custom py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center space-x-2 group"
            onClick={() => handleLinkClick('Home', '/')}
          >
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white font-bold text-xl group-hover:scale-105 transition-transform">
              TC
            </div>
            <span className="text-heading-md font-bold text-neutral-900 group-hover:text-primary-600 transition-colors hidden sm:block">
              TikTok Calculator
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <div
                key={link.href}
                className="relative"
                onMouseEnter={() => link.dropdown && setOpenDropdown(link.label)}
                onMouseLeave={() => link.dropdown && setOpenDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <button
                      className={cn(
                        'text-body-md font-medium transition-colors px-3 py-2 rounded-lg flex items-center space-x-1',
                        pathname?.startsWith(link.href)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-50'
                      )}
                    >
                      <span>{link.label}</span>
                      <svg
                        className={cn(
                          'w-4 h-4 transition-transform',
                          openDropdown === link.label && 'rotate-180'
                        )}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === link.label && (
                      <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-neutral-200 rounded-lg shadow-lg py-2 animate-slide-down">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                              'block px-4 py-2 text-body-sm transition-colors',
                              item.featured
                                ? 'text-primary-600 font-semibold hover:bg-primary-50'
                                : 'text-neutral-700 hover:bg-neutral-50'
                            )}
                            onClick={() => handleLinkClick(item.label, item.href)}
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className={cn(
                      'text-body-md font-medium transition-colors px-3 py-2 rounded-lg block',
                      pathname?.startsWith(link.href)
                        ? 'text-primary-600 bg-primary-50'
                        : 'text-neutral-700 hover:text-primary-500 hover:bg-neutral-50'
                    )}
                    onClick={() => handleLinkClick(link.label, link.href)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link
              href="/calculators/tiktok-creator-fund"
              className="btn btn-primary btn-sm ml-2"
              onClick={() => handleLinkClick('Calculate CTA', '/calculators/tiktok-creator-fund')}
            >
              Calculate Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-700 hover:bg-neutral-100 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-neutral-200 animate-slide-down">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <div key={link.href}>
                  {link.dropdown ? (
                    <>
                      <button
                        onClick={() =>
                          setOpenDropdown(
                            openDropdown === link.label ? null : link.label
                          )
                        }
                        className={cn(
                          'w-full text-left text-body-lg font-medium px-4 py-2 rounded-lg transition-colors flex items-center justify-between',
                          pathname?.startsWith(link.href)
                            ? 'text-primary-600 bg-primary-50'
                            : 'text-neutral-700 hover:bg-neutral-100'
                        )}
                      >
                        <span>{link.label}</span>
                        <svg
                          className={cn(
                            'w-5 h-5 transition-transform',
                            openDropdown === link.label && 'rotate-180'
                          )}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </button>
                      {openDropdown === link.label && (
                        <div className="ml-4 mt-2 space-y-1">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.href}
                              href={item.href}
                              className={cn(
                                'block px-4 py-2 text-body-md rounded-lg transition-colors',
                                item.featured
                                  ? 'text-primary-600 font-semibold hover:bg-primary-50'
                                  : 'text-neutral-600 hover:bg-neutral-100'
                              )}
                              onClick={() => handleLinkClick(item.label, item.href)}
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        'block text-body-lg font-medium px-4 py-2 rounded-lg transition-colors',
                        pathname?.startsWith(link.href)
                          ? 'text-primary-600 bg-primary-50'
                          : 'text-neutral-700 hover:bg-neutral-100'
                      )}
                      onClick={() => handleLinkClick(link.label, link.href)}
                    >
                      {link.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-4 px-4">
                <Link
                  href="/calculators/tiktok-creator-fund"
                  className="btn btn-primary w-full"
                  onClick={() => handleLinkClick('Calculate CTA Mobile', '/calculators/tiktok-creator-fund')}
                >
                  Calculate Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
