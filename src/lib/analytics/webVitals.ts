/**
 * Web Vitals Tracking
 * Tracks Core Web Vitals and sends to GA4
 */

import { getCLS, getFID, getFCP, getLCP, getTTFB, type Metric } from 'web-vitals';

/**
 * Send metric to GA4
 */
function sendToGA4(metric: Metric): void {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', metric.name, {
      value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
      event_category: 'Web Vitals',
      event_label: metric.id,
      non_interaction: true,
    });
  }
}

/**
 * Report all Web Vitals
 */
export function reportWebVitals(): void {
  getCLS(sendToGA4);
  getFID(sendToGA4);
  getFCP(sendToGA4);
  getLCP(sendToGA4);
  getTTFB(sendToGA4);
}
