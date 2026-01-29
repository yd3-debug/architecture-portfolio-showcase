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
  title = "YektaD — From Word-of-Mouth to Enterprise Clients in 90 Days",
  description = "We've helped 12+ service businesses land 6-figure enterprise contracts. Stop relying on referrals—get found by the clients who need you. Book a free strategy call.",
  canonicalPath = "",
  ogImage = "/og-image.jpg?v=3",
  ogImageSquare = "/og-image-square.jpg?v=3",
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

  // Generate breadcrumb schema
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

  // Generate article schema for blog posts
  const articleSchema = ogType === 'article' && articlePublishedTime ? {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": fullImageUrl,
    "datePublished": articlePublishedTime,
    "dateModified": articleModifiedTime || articlePublishedTime,
    "author": {
      "@type": "Organization",
      "name": articleAuthor || "YektaD"
    },
    "publisher": {
      "@type": "Organization",
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
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${title} - YektaD Business Visibility Consulting`} />
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
          <meta property="article:author" content={articleAuthor || "YektaD"} />
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
      <meta name="twitter:image:alt" content={`${title} - YektaD Business Visibility Consulting`} />
      
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
