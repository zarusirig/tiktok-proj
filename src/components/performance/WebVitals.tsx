'use client';

import { useEffect } from 'react';

export function WebVitals() {
  useEffect(() => {
    // Measure Core Web Vitals
    if (typeof window !== 'undefined' && 'web-vitals' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      });
    }

    // Measure custom metrics
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Log performance entries for monitoring
        if (entry.entryType === 'largest-contentful-paint') {
          console.log('LCP:', entry.startTime, 'ms');
        } else if (entry.entryType === 'first-input') {
          console.log('FID:', entry.processingStart - entry.startTime, 'ms');
        } else if (entry.entryType === 'layout-shift') {
          console.log('CLS contribution:', entry.value);
        }
      }
    });

    observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });

    return () => observer.disconnect();
  }, []);

  return null; // This component doesn't render anything
}
