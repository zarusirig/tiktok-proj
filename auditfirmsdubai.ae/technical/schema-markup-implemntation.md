# Schema Markup Implementation Guide

## Organization Schema (Site-wide)
```typescript
// components/seo/schemas/OrganizationSchema.tsx
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "@id": "https://dubaieliteaudit.com/#organization",
    "name": "Elite Audit Dubai",
    "alternateName": "Elite Audit Partners UAE",
    "description": "Leading audit firm in Dubai providing external audit, internal audit, and advisory services to businesses across UAE",
    "url": "https://dubaieliteaudit.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://dubaieliteaudit.com/logo.png",
      "width": 600,
      "height": 200,
      "caption": "Elite Audit Dubai Logo"
    },
    "image": [
      "https://dubaieliteaudit.com/images/office-1.jpg",
      "https://dubaieliteaudit.com/images/office-2.jpg"
    ],
    "telephone": "+971-4-XXX-XXXX",
    "email": "info@dubaieliteaudit.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Business Bay, Bay Square Building 1",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.1850,
      "longitude": 55.2650
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "Dubai"
      },
      {
        "@type": "City",
        "name": "Abu Dhabi"
      },
      {
        "@type": "Country",
        "name": "United Arab Emirates"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Audit Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "External Audit",
            "description": "Statutory audit services for compliance"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Internal Audit",
            "description": "Risk assessment and internal control review"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.linkedin.com/company/elite-audit-dubai",
      "https://twitter.com/eliteauditdubai",
      "https://www.facebook.com/eliteauditdubai"
    ],
    "memberOf": [
      {
        "@type": "Organization",
        "name": "UAE Ministry of Economy",
        "url": "https://www.moec.gov.ae"
      }
    ],
    "review": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## Local Business Schema (Location Pages)
```typescript
// components/seo/schemas/LocalBusinessSchema.tsx
interface LocalBusinessProps {
  location: {
    name: string
    address: string
    city: string
    phone: string
    coordinates: {
      lat: number
      lng: number
    }
  }
}

export default function LocalBusinessSchema({ location }: LocalBusinessProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://dubaieliteaudit.com/locations/${location.name.toLowerCase()}`,
    "name": `Elite Audit Dubai - ${location.name}`,
    "image": "https://dubaieliteaudit.com/images/office.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": location.address,
      "addressLocality": location.city,
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": location.coordinates.lat,
      "longitude": location.coordinates.lng
    },
    "telephone": location.phone,
    "priceRange": "$$$$",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Sunday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "hasMap": `https://maps.google.com/?q=${location.coordinates.lat},${location.coordinates.lng}`,
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dubaieliteaudit.com/contact",
        "inLanguage": "en",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "Reservation",
        "name": "Book Consultation"
      }
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## Service Schema
```typescript
// components/seo/schemas/ServiceSchema.tsx
interface ServiceSchemaProps {
  service: {
    name: string
    description: string
    provider: string
    areaServed: string[]
    hasOfferCatalog: {
      name: string
      itemListElement: Array<{
        name: string
        description: string
      }>
    }
  }
}

export default function ServiceSchema({ service }: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service.name,
    "provider": {
      "@type": "AccountingService",
      "name": "Elite Audit Dubai"
    },
    "areaServed": service.areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": service.hasOfferCatalog.name,
      "itemListElement": service.hasOfferCatalog.itemListElement.map(item => ({
        "@type": "OfferCatalog",
        "name": item.name,
        "description": item.description
      }))
    },
    "description": service.description,
    "potentialAction": {
      "@type": "BuyAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dubaieliteaudit.com/contact?service=" + service.name
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "89"
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## FAQ Schema
```typescript
// components/seo/schemas/FAQSchema.tsx
interface FAQSchemaProps {
  faqs: Array<{
    question: string
    answer: string
  }>
}

export default function FAQSchema({ faqs }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## Article Schema (Blog Posts)
```typescript
// components/seo/schemas/ArticleSchema.tsx
interface ArticleSchemaProps {
  article: {
    headline: string
    description: string
    image: string
    datePublished: string
    dateModified: string
    author: {
      name: string
      url: string
    }
    wordCount: number
    keywords: string[]
  }
}

export default function ArticleSchema({ article }: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.headline,
    "description": article.description,
    "image": article.image,
    "datePublished": article.datePublished,
    "dateModified": article.dateModified,
    "author": {
      "@type": "Person",
      "name": article.author.name,
      "url": article.author.url
    },
    "publisher": {
      "@type": "Organization",
      "name": "Elite Audit Dubai",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dubaieliteaudit.com/logo.png"
      }
    },
    "wordCount": article.wordCount,
    "keywords": article.keywords.join(", "),
    "articleSection": "Audit Guides",
    "inLanguage": "en-AE",
    "potentialAction": {
      "@type": "ReadAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://dubaieliteaudit.com/resources/guides/" + article.headline.toLowerCase().replace(/ /g, "-")
      }
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## Breadcrumb Schema
```typescript
// components/seo/schemas/BreadcrumbSchema.tsx
interface BreadcrumbSchemaProps {
  items: Array<{
    name: string
    url: string
  }>
}

export default function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `https://dubaieliteaudit.com${item.url}`
    }))
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## Professional Service Schema
```typescript
// components/seo/schemas/ProfessionalServiceSchema.tsx
export default function ProfessionalServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Elite Audit Dubai Professional Services",
    "description": "Professional audit and assurance services in Dubai",
    "url": "https://dubaieliteaudit.com",
    "serviceType": [
      "External Audit",
      "Internal Audit",
      "Due Diligence",
      "Forensic Audit",
      "Tax Advisory"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "United Arab Emirates"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Professional Audit Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Statutory Audit",
          "description": "Annual statutory audit as per UAE law"
        },
        {
          "@type": "OfferCatalog",
          "name": "IFRS Compliance",
          "description": "IFRS implementation and compliance audit"
        },
        {
          "@type": "OfferCatalog",
          "name": "Risk Assessment",
          "description": "Enterprise risk assessment services"
        }
      ]
    },
    "knowsAbout": [
      "IFRS",
      "UAE Commercial Law",
      "VAT",
      "Corporate Tax",
      "Internal Controls",
      "Risk Management"
    ],
    "award": [
      "Best Audit Firm Dubai 2024",
      "Excellence in Client Service Award"
    ]
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## Review Schema
```typescript
// components/seo/schemas/ReviewSchema.tsx
interface ReviewSchemaProps {
  review: {
    author: string
    datePublished: string
    reviewBody: string
    reviewRating: number
  }
}

export default function ReviewSchema({ review }: ReviewSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "itemReviewed": {
      "@type": "AccountingService",
      "name": "Elite Audit Dubai"
    },
    "author": {
      "@type": "Person",
      "name": review.author
    },
    "datePublished": review.datePublished,
    "reviewBody": review.reviewBody,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.reviewRating,
      "bestRating": 5,
      "worstRating": 1
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## Event Schema (Webinars/Seminars)
```typescript
// components/seo/schemas/EventSchema.tsx
interface EventSchemaProps {
  event: {
    name: string
    description: string
    startDate: string
    endDate: string
    location: string
    image: string
    performer: string
  }
}

export default function EventSchema({ event }: EventSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": event.name,
    "description": event.description,
    "startDate": event.startDate,
    "endDate": event.endDate,
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
    "location": {
      "@type": "VirtualLocation",
      "url": "https://dubaieliteaudit.com/webinar"
    },
    "image": event.image,
    "performer": {
      "@type": "Person",
      "name": event.performer
    },
    "organizer": {
      "@type": "Organization",
      "name": "Elite Audit Dubai",
      "url": "https://dubaieliteaudit.com"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://dubaieliteaudit.com/register",
      "price": "0",
      "priceCurrency": "AED",
      "availability": "https://schema.org/InStock"
    }
  }
  
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
```

## Implementation Checklist
```markdown
## Per Page Schema Requirements

### Homepage
- [ ] Organization Schema
- [ ] Professional Service Schema
- [ ] Website Schema
- [ ] SearchAction Schema

### Service Pages
- [ ] Service Schema
- [ ] FAQ Schema
- [ ] Breadcrumb Schema
- [ ] Review/Rating Schema

### Location Pages
- [ ] LocalBusiness Schema
- [ ] GeoCoordinates Schema
- [ ] OpeningHours Schema
- [ ] Breadcrumb Schema

### Blog/Guide Pages
- [ ] Article Schema
- [ ] Author Schema
- [ ] Breadcrumb Schema
- [ ] FAQ Schema (if applicable)

### Contact Page
- [ ] ContactPoint Schema
- [ ] Organization Schema
- [ ] Breadcrumb Schema
```

## Testing & Validation
```bash
# Google Rich Results Test
https://search.google.com/test/rich-results

# Schema.org Validator
https://validator.schema.org/

# Google Search Console
- Monitor for schema errors
- Check enhancement reports

# Structured Data Testing Tool
- Validate JSON-LD syntax
- Check for required properties
```

## Related Documents
- [TECHNICAL_SEO_SETUP.md](./TECHNICAL_SEO_SETUP.md)
- [NEXTJS_ARCHITECTURE.md](./NEXTJS_ARCHITECTURE.md)

## Update Log
- 2024-11-14: Complete schema implementation guide
- Version: 1.0.0