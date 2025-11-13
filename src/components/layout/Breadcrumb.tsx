'use client';

import React from 'react';
import Link from 'next/link';
import { trackNavigation } from '@/lib/analytics/ga4';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  const handleClick = (label: string, href: string) => {
    trackNavigation('breadcrumb', label, href);
  };

  return (
    <nav className="flex items-center space-x-2 text-body-sm mb-6" aria-label="Breadcrumb">
      <Link
        href="/"
        className="text-neutral-600 hover:text-primary-600 transition-colors"
        onClick={() => handleClick('Home', '/')}
      >
        Home
      </Link>

      {items.map((item, index) => (
        <React.Fragment key={item.href}>
          <svg
            className="w-4 h-4 text-neutral-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>

          {index === items.length - 1 ? (
            <span className="text-neutral-900 font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-neutral-600 hover:text-primary-600 transition-colors"
              onClick={() => handleClick(item.label, item.href)}
            >
              {item.label}
            </Link>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}
