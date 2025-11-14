# Technical SEO Setup for Next.js

## Meta Tags Implementation

### 1. Install and Configure next-seo
```bash
npm install next-seo
```

### 2. Default SEO Configuration
```typescript
// next-seo.config.ts
import { DefaultSeoProps } from 'next-seo'

const config: DefaultSeoProps = {
  titleTemplate: '%s | Elite Audit Dubai',
  defaultTitle: 'Elite Audit Dubai - Leading Audit Firm in UAE',
  description: 'Premier audit firm in Dubai offering external audit, internal audit, and advisory services. Ministry of Economy approved.',
  canonical: 'https://dubaieliteaudit.com',
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    url: 'https://dubaieliteaudit.com',
    siteName: 'Elite Audit Dubai',
    images: [
      {
        url: 'https://dubaieliteaudit.com/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Elite Audit Dubai - Trusted Auditors',
      },
    ],
  },
  twitter: {
    handle: '@eliteauditdubai',
    site: '@eliteauditdubai',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1, maximum-scale=5',
    },
    {
      name: 'google-site-verification',
      content: 'your-verification-code',
    },
    {
      name: 'msvalidate.01',
      content: 'bing-verification-code',
    },
    {
      httpEquiv: 'x-ua-compatible',
      content: 'IE=edge',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
    {
      rel: 'manifest',
      href: '/manifest.json',
    },
  ],
}

export default config
```

### 3. Page-Specific Meta Tags
```typescript
// app/[locale]/services/external-audit/page.tsx
import { NextSeo } from 'next-seo'

export default function ExternalAuditPage() {
  return (
    <>
      <NextSeo
        title="External Audit Services Dubai | Statutory Audit UAE"
        description="Professional external audit services in Dubai. Ministry approved auditors for statutory compliance. IFRS experts. Get your audit report in 7 days."
        canonical="https://dubaieliteaudit.com/services/external-audit"
        openGraph={{
          title: 'External Audit Services in Dubai - Elite Audit',
          description: 'Leading external auditors in Dubai. Fast, reliable statutory audit services.',
          url: 'https://dubaieliteaudit.com/services/external-audit',
          images: [
            {
              url: 'https://dubaieliteaudit.com/images/external-audit-og.jpg',
              width: 1200,
              height: 630,
              alt: 'External Audit Services Dubai',
            },
          ],
        }}
      />
      {/* Page content */}
    </>
  )
}
```

## XML Sitemap Configuration

### 1. Dynamic Sitemap Generation
```typescript
// app/sitemap.xml/route.ts
import { getAllPages } from '@/lib/api'

function generateSiteMap(pages: any[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
            xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
            xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
            xmlns:xhtml="http://www.w3.org/1999/xhtml"
            xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${pages
        .map((page) => {
          return `
        <url>
          <loc>${`https://dubaieliteaudit.com${page.url}`}</loc>
          <lastmod>${new Date(page.updatedAt).toISOString()}</lastmod>
          <changefreq>${page.changeFreq}</changefreq>
          <priority>${page.priority}</priority>
          ${page.images?.map((image: string) => `
          <image:image>
            <image:loc>${image}</image:loc>
            <image:title>${page.title}</image:title>
            <image:caption>${page.description}</image:caption>
          </image:image>
          `).join('')}
          <xhtml:link rel="alternate" hreflang="en" href="${`https://dubaieliteaudit.com/en${page.url}`}"/>
          <xhtml:link rel="alternate" hreflang="ar" href="${`https://dubaieliteaudit.com/ar${page.url}`}"/>
        </url>
      `
        })
        .join('')}
    </urlset>
  `
}

export async function GET() {
  const pages = await getAllPages()
  const sitemap = generateSiteMap(pages)
  
  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
    },
  })
}
```

## Robots.txt Configuration
```typescript
// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/admin/',
          '/*.json$',
          '/*?*',
          '/search',
        ],
        crawlDelay: 1,
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
      },
    ],
    sitemap: 'https://dubaieliteaudit.com/sitemap.xml',
    host: 'https://dubaieliteaudit.com',
  }
}
```

## Canonical URL Strategy

### 1. Canonical Component
```typescript
// components/seo/CanonicalURL.tsx
import Head from 'next/head'
import { useRouter } from 'next/router'

interface CanonicalURLProps {
  path?: string
}

export default function CanonicalURL({ path }: CanonicalURLProps) {
  const router = useRouter()
  const domain = 'https://dubaieliteaudit.com'
  
  const canonicalPath = path || router.asPath.split('?')[0].split('#')[0]
  const canonicalURL = `${domain}${canonicalPath}`
  
  return (
    <Head>
      <link rel="canonical" href={canonicalURL} />
    </Head>
  )
}
```

### 2. Handling Duplicates
```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Remove trailing slashes
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1)
    return NextResponse.redirect(url, 301)
  }
  
  // Redirect www to non-www
  if (url.hostname.startsWith('www.')) {
    url.hostname = url.hostname.replace('www.', '')
    return NextResponse.redirect(url, 301)
  }
  
  // Force lowercase URLs
  if (url.pathname !== url.pathname.toLowerCase()) {
    url.pathname = url.pathname.toLowerCase()
    return NextResponse.redirect(url, 301)
  }
  
  return NextResponse.next()
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
}
```

## Redirect Management

### 1. 301 Redirects Configuration
```typescript
// redirects.config.ts
export const redirects = [
  {
    source: '/audit-services',
    destination: '/services',
    permanent: true,
  },
  {
    source: '/dubai-auditors',
    destination: '/locations/dubai',
    permanent: true,
  },
  {
    source: '/blog/:slug',
    destination: '/resources/guides/:slug',
    permanent: true,
  },
]

// next.config.js
module.exports = {
  async redirects() {
    return redirects
  },
}
```

### 2. 404 Error Handling
```typescript
// app/not-found.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900">404</h1>
        <h2 className="text-2xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          The page you're looking for doesn't exist.
        </p>
        <div className="mt-6 space-x-4">
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
          <Link href="/services">
            <Button variant="outline">View Services</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
```

## Hreflang Implementation
```typescript
// components/seo/HreflangTags.tsx
import Head from 'next/head'

interface HreflangTagsProps {
  path: string
}

export default function HreflangTags({ path }: HreflangTagsProps) {
  const baseUrl = 'https://dubaieliteaudit.com'
  
  return (
    <Head>
      <link
        rel="alternate"
        hrefLang="en"
        href={`${baseUrl}/en${path}`}
      />
      <link
        rel="alternate"
        hrefLang="ar"
        href={`${baseUrl}/ar${path}`}
      />
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}${path}`}
      />
    </Head>
  )
}
```

## Mobile Optimization

### 1. Viewport Configuration
```html
<!-- Already handled in next-seo config -->
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5">
```

### 2. Mobile-First Responsive Design
```typescript
// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
  },
}
```

## Crawlability Optimization

### 1. Internal Linking Component
```typescript
// components/common/InternalLink.tsx
import Link from 'next/link'

interface InternalLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  title?: string
}

export default function InternalLink({
  href,
  children,
  className = '',
  title
}: InternalLinkProps) {
  // Ensure internal links are crawlable
  const isInternal = href.startsWith('/') || href.includes('dubaieliteaudit.com')
  
  return (
    <Link
      href={href}
      className={className}
      title={title}
      {...(!isInternal && {
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      })}
    >
      {children}
    </Link>
  )
}
```

### 2. Pagination SEO
```typescript
// components/common/Pagination.tsx
import Link from 'next/link'

interface PaginationProps {
  currentPage: number
  totalPages: number
  baseUrl: string
}

export default function Pagination({
  currentPage,
  totalPages,
  baseUrl
}: PaginationProps) {
  return (
    <>
      {/* Add rel prev/next tags */}
      {currentPage > 1 && (
        <link
          rel="prev"
          href={`${baseUrl}?page=${currentPage - 1}`}
        />
      )}
      {currentPage < totalPages && (
        <link
          rel="next"
          href={`${baseUrl}?page=${currentPage + 1}`}
        />
      )}
      
      {/* Pagination UI */}
      <nav aria-label="Pagination">
        {/* Pagination component */}
      </nav>
    </>
  )
}
```

## Related Documents
- [SCHEMA_IMPLEMENTATION.md](./SCHEMA_IMPLEMENTATION.md)
- [PERFORMANCE_OPTIMIZATION.md](./PERFORMANCE_OPTIMIZATION.md)
- [NEXTJS_ARCHITECTURE.md](./NEXTJS_ARCHITECTURE.md)

## Update Log
- 2024-11-14: Initial technical SEO setup
- Version: 1.0.0