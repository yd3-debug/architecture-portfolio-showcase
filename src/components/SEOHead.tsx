import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogImageSquare?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  breadcrumbs?: BreadcrumbItem[];
  articlePublishedTime?: string;
  articleModifiedTime?: string;
  articleAuthor?: string;
}

const SEOHead = ({
  title = "YektaD — Enterprise Client Acquisition for Service Businesses | Yekta Dastranj",
  description = "Yekta Dastranj helps 12+ service businesses land 6-figure enterprise contracts within 90 days. Expert business architecture, web design & growth strategy. Book a free strategy call.",
  canonicalPath = "",
  ogImage = "/og-image.jpg?v=4",
  ogImageSquare = "/og-image-square.jpg?v=4",
  ogType = "website",
  noIndex = false,
  breadcrumbs,
  articlePublishedTime,
  articleModifiedTime,
  articleAuthor,
}: SEOHeadProps) => {
  const baseUrl = "https://yektad.com";
  const fullUrl = `${baseUrl}${canonicalPath}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  const fullSquareImageUrl = ogImageSquare.startsWith('http') ? ogImageSquare : `${baseUrl}${ogImageSquare}`;

  // Person schema — E-E-A-T authorship signal
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${baseUrl}/#yekta`,
    "name": "Yekta Dastranj",
    "jobTitle": "Founder & Business Visibility Strategist",
    "description": "Yekta Dastranj has 10+ years of experience helping established service businesses land enterprise contracts. He personally leads every YektaD engagement.",
    "url": baseUrl,
    "email": "contact@yektad.com",
    "worksFor": { "@id": `${baseUrl}/#organization` },
    "knowsAbout": [
      "Enterprise Client Acquisition",
      "B2B Marketing Strategy",
      "Business Architecture",
      "Market Positioning",
      "Web Design for Service Businesses",
      "Growth Strategy"
    ],
    "sameAs": [
      "https://linkedin.com/in/yektadastranj",
      "https://twitter.com/yektad"
    ]
  };

  // Breadcrumb schema
  const breadcrumbSchema = breadcrumbs && breadcrumbs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": `${baseUrl}${item.path}`
    }))
  } : null;

  // Article schema for blog posts
  const articleSchema = ogType === 'article' && articlePublishedTime ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImageUrl,
    "datePublished": articlePublishedTime,
    "dateModified": articleModifiedTime || articlePublishedTime,
    "author": {
      "@type": "Person",
      "@id": `${baseUrl}/#yekta`,
      "name": articleAuthor || "Yekta Dastranj"
    },
    "publisher": {
      "@type": "Organization",
      "@id": `${baseUrl}/#organization`,
      "name": "YektaD",
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/YD_LOGO.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": fullUrl
    }
  } : null;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />
      <meta name="author" content="Yekta Dastranj — YektaD" />
      <meta name="last-modified" content="2026-04-13" />

      {/* Robots */}
      {noIndex
        ? <meta name="robots" content="noindex, nofollow" />
        : <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      }

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} — YektaD by Yekta Dastranj`} />
      <meta property="og:image" content={fullSquareImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:site_name" content="YektaD" />
      <meta property="og:locale" content="en_US" />

      {/* Article-specific OG tags */}
      {ogType === 'article' && articlePublishedTime && (
        <>
          <meta property="article:published_time" content={articlePublishedTime} />
          {articleModifiedTime && <meta property="article:modified_time" content={articleModifiedTime} />}
          <meta property="article:author" content={articleAuthor || "Yekta Dastranj"} />
        </>
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@YektaD" />
      <meta name="twitter:creator" content="@YektaD" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
      <meta name="twitter:image:alt" content={`${title} — YektaD by Yekta Dastranj`} />

      {/* Person Schema — E-E-A-T */}
      <script type="application/ld+json">
        {JSON.stringify(personSchema)}
      </script>

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}

      {/* Article Schema */}
      {articleSchema && (
        <script type="application/ld+json">
          {JSON.stringify(articleSchema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;
