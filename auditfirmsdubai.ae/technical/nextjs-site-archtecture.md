# Next.js 14+ Architecture for Dubai Audit Firm

## Project Setup

### Initialize Project
```bash
npx create-next-app@latest dubai-audit-firm --typescript --tailwind --app
cd dubai-audit-firm
npm install lucide-react framer-motion
npx shadcn-ui@latest init
```

### Project Structure
```
/dubai-audit-firm
├── /app
│   ├── /[locale]
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── /services
│   │   │   ├── page.tsx (services hub)
│   │   │   ├── /external-audit
│   │   │   │   └── page.tsx
│   │   │   ├── /internal-audit
│   │   │   │   └── page.tsx
│   │   │   └── /[service]
│   │   │       └── page.tsx
│   │   ├── /industries
│   │   │   ├── page.tsx
│   │   │   └── /[industry]
│   │   │       └── page.tsx
│   │   ├── /locations
│   │   │   ├── page.tsx
│   │   │   └── /[location]
│   │   │       └── page.tsx
│   │   ├── /resources
│   │   │   ├── page.tsx
│   │   │   ├── /guides
│   │   │   │   └── /[slug]
│   │   │   │       └── page.tsx
│   │   │   └── /tools
│   │   │       └── /[tool]
│   │   │           └── page.tsx
│   │   └── /about
│   │       └── page.tsx
│   ├── /api
│   │   ├── /contact
│   │   │   └── route.ts
│   │   ├── /newsletter
│   │   │   └── route.ts
│   │   └── /calculate
│   │       └── route.ts
│   └── robots.ts
│   └── sitemap.ts
├── /components
│   ├── /ui (shadcn components)
│   ├── /seo
│   │   ├── MetaTags.tsx
│   │   ├── SchemaMarkup.tsx
│   │   └── Breadcrumbs.tsx
│   ├── /layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── /services
│   │   ├── ServiceCard.tsx
│   │   ├── ServiceHero.tsx
│   │   └── ServiceCTA.tsx
│   └── /trust
│       ├── Testimonials.tsx
│       ├── Certifications.tsx
│       └── ClientLogos.tsx
├── /lib
│   ├── /utils
│   ├── /api
│   ├── /constants
│   └── /schemas
├── /content
│   ├── /services
│   ├── /guides
│   └── /industries
├── /public
│   ├── /images
│   └── /documents
└── /styles
    └── globals.css
```

## Core Components

### 1. Layout Component with SEO
```typescript
// app/[locale]/layout.tsx
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { OrganizationSchema } from '@/components/seo/SchemaMarkup'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://dubaieliteaudit.com'),
  title: {
    default: 'Elite Audit Dubai - Leading Audit Firm in UAE',
    template: '%s | Elite Audit Dubai'
  },
  description: 'Premier audit firm in Dubai offering external audit, internal audit, and advisory services. Ministry of Economy approved. IFRS experts.',
  keywords: ['audit firm dubai', 'audit services uae', 'external audit', 'internal audit'],
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    alternateLocale: 'ar_AE',
    siteName: 'Elite Audit Dubai',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Elite Audit Dubai'
    }]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@eliteauditdubai'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-verification-code',
  }
}

export default function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <html lang={params.locale} dir={params.locale === 'ar' ? 'rtl' : 'ltr'}>
      <head>
        <OrganizationSchema />
      </head>
      <body className={inter.className}>
        <Header locale={params.locale} />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer locale={params.locale} />
      </body>
    </html>
  )
}
```

### 2. Dynamic Service Page
```typescript
// app/[locale]/services/[service]/page.tsx
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ServiceSchema } from '@/components/seo/SchemaMarkup'
import ServiceHero from '@/components/services/ServiceHero'
import ServiceContent from '@/components/services/ServiceContent'
import ServiceCTA from '@/components/services/ServiceCTA'
import RelatedServices from '@/components/services/RelatedServices'
import FAQSection from '@/components/common/FAQSection'
import { getServiceData } from '@/lib/api/services'

export async function generateStaticParams() {
  return [
    { service: 'external-audit' },
    { service: 'internal-audit' },
    { service: 'forensic-audit' },
    { service: 'due-diligence' },
    { service: 'rera-audit' },
    { service: 'vat-audit' },
  ]
}

export async function generateMetadata({ 
  params 
}: { 
  params: { service: string, locale: string } 
}): Promise<Metadata> {
  const service = await getServiceData(params.service)
  
  if (!service) return {}
  
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    openGraph: {
      title: service.ogTitle,
      description: service.ogDescription,
      images: [service.ogImage],
    },
  }
}

export default async function ServicePage({ 
  params 
}: { 
  params: { service: string, locale: string } 
}) {
  const service = await getServiceData(params.service)
  
  if (!service) {
    notFound()
  }
  
  return (
    <>
      <ServiceSchema service={service} />
      <ServiceHero 
        title={service.title}
        subtitle={service.subtitle}
        image={service.heroImage}
      />
      <ServiceContent 
        content={service.content}
        features={service.features}
        process={service.process}
      />
      <FAQSection faqs={service.faqs} />
      <RelatedServices 
        services={service.related}
        currentService={params.service}
      />
      <ServiceCTA 
        service={params.service}
        locale={params.locale}
      />
    </>
  )
}
```

### 3. API Route for Lead Generation
```typescript
// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { sendEmail } from '@/lib/email'
import { saveLeadToCRM } from '@/lib/crm'

const ContactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  company: z.string().min(2),
  service: z.string(),
  message: z.string().optional(),
  source: z.string().optional(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = ContactSchema.parse(body)
    
    // Save to CRM
    await saveLeadToCRM({
      ...validatedData,
      source: validatedData.source || 'website',
      timestamp: new Date().toISOString(),
      ip: request.ip,
      userAgent: request.headers.get('user-agent'),
    })
    
    // Send notification email
    await sendEmail({
      to: process.env.LEAD_EMAIL!,
      subject: `New Lead: ${validatedData.service}`,
      template: 'new-lead',
      data: validatedData,
    })
    
    // Send thank you email to lead
    await sendEmail({
      to: validatedData.email,
      subject: 'Thank you for contacting Elite Audit Dubai',
      template: 'thank-you',
      data: { name: validatedData.name },
    })
    
    return NextResponse.json({ 
      success: true,
      message: 'Thank you! We will contact you within 24 hours.' 
    })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Invalid data', details: error.errors },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

### 4. Dynamic Sitemap Generation
```typescript
// app/sitemap.ts
import { MetadataRoute } from 'next'
import { getAllServices } from '@/lib/api/services'
import { getAllGuides } from '@/lib/api/guides'
import { getAllIndustries } from '@/lib/api/industries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dubaieliteaudit.com'
  
  // Static pages
  const staticPages = [
    '',
    '/about',
    '/services',
    '/industries',
    '/locations',
    '/resources',
    '/contact',
  ]
  
  const staticUrls = staticPages.map(page => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: page === '' ? 1 : 0.8,
  }))
  
  // Dynamic service pages
  const services = await getAllServices()
  const serviceUrls = services.map(service => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(service.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))
  
  // Dynamic guide pages
  const guides = await getAllGuides()
  const guideUrls = guides.map(guide => ({
    url: `${baseUrl}/resources/guides/${guide.slug}`,
    lastModified: new Date(guide.updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
  }))
  
  // Industry pages
  const industries = await getAllIndustries()
  const industryUrls = industries.map(industry => ({
    url: `${baseUrl}/industries/${industry.slug}`,
    lastModified: new Date(industry.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))
  
  return [
    ...staticUrls,
    ...serviceUrls,
    ...guideUrls,
    ...industryUrls,
  ]
}
```

### 5. ISR Configuration for Dynamic Content
```typescript
// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['dubaieliteaudit.com'],
    formats: ['image/avif', 'image/webp'],
  },
  i18n: {
    locales: ['en', 'ar'],
    defaultLocale: 'en',
  },
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|jpeg|png|gif|ico|webp|avif)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/:all*(css|js)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/audit-services',
        destination: '/services',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
```

## Performance Optimizations

### 1. Image Optimization
```typescript
// components/common/OptimizedImage.tsx
import Image from 'next/image'
import { useState } from 'react'

interface OptimizedImageProps {
  src: string
  alt: string
  width: number
  height: number
  priority?: boolean
  className?: string
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = ''
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
}
```

### 2. Lazy Loading Components
```typescript
// app/[locale]/page.tsx
import dynamic from 'next/dynamic'

const HeroSection = dynamic(() => import('@/components/home/HeroSection'))
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection'))
const TrustSection = dynamic(() => import('@/components/home/TrustSection'), {
  loading: () => <div className="h-96 animate-pulse bg-gray-100" />
})
const CTASection = dynamic(() => import('@/components/home/CTASection'))
```

## Deployment Configuration

### Vercel Deployment
```json
// vercel.json
{
  "functions": {
    "app/api/contact/route.ts": {
      "maxDuration": 10
    }
  },
  "rewrites": [
    {
      "source": "/sitemap.xml",
      "destination": "/sitemap"
    }
  ]
}
```

## Related Documents
- [TECHNICAL_SEO_SETUP.md](./TECHNICAL_SEO_SETUP.md)
- [SCHEMA_IMPLEMENTATION.md](./SCHEMA_IMPLEMENTATION.md)
- [PERFORMANCE_OPTIMIZATION.md](./PERFORMANCE_OPTIMIZATION.md)

## Update Log
- 2024-11-14: Initial architecture design
- Version: 1.0.0