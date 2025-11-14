import React, { useState, useEffect } from 'react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  contentRef?: React.RefObject<HTMLElement>;
  className?: string;
}

export function TableOfContents({ contentRef, className = '' }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    if (!contentRef?.current) return;

    const headings = contentRef.current.querySelectorAll('h2, h3, h4');
    const items: TOCItem[] = [];

    headings.forEach((heading) => {
      const id = heading.id || heading.textContent?.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '') || '';
      if (id && heading.textContent) {
        // Add id to heading if it doesn't have one
        if (!heading.id) {
          heading.id = id;
        }

        items.push({
          id,
          text: heading.textContent,
          level: parseInt(heading.tagName.charAt(1)),
        });
      }
    });

    setTocItems(items);

    // Set up intersection observer for active section highlighting
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    headings.forEach((heading) => {
      if (heading.id) {
        observer.observe(heading);
      }
    });

    return () => observer.disconnect();
  }, [contentRef]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 100; // Account for fixed header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <div className={`bg-neutral-50 border border-neutral-200 rounded-lg p-6 ${className}`}>
      <h3 className="text-heading-sm font-semibold text-neutral-900 mb-4">Table of Contents</h3>
      <nav>
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li
              key={item.id}
              className={`${item.level === 3 ? 'ml-4' : item.level === 4 ? 'ml-8' : ''}`}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-left hover:text-primary-600 transition-colors text-body-sm ${
                  activeId === item.id
                    ? 'text-primary-600 font-medium'
                    : 'text-neutral-700'
                }`}
              >
                {item.level === 3 && '• '}
                {item.level === 4 && '◦ '}
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
