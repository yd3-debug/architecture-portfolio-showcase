import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogImageSquare?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
}

const SEOHead = ({
  title = "YektaD — Business Architect & Strategic Partner",
  description = "We help established service businesses and consultancies get found by enterprise clients. From strategy to execution—websites, automation, and growth systems that work.",
  canonicalPath = "",
  ogImage = "/og-image.jpg",
  ogImageSquare = "/og-image-square.jpg",
  ogType = "website",
  noIndex = false,
}: SEOHeadProps) => {
  const baseUrl = "https://architecture-portfolio-showcase.lovable.app";
  const fullUrl = `${baseUrl}${canonicalPath}`;
  const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${baseUrl}${ogImage}`;
  const fullSquareImageUrl = ogImageSquare.startsWith('http') ? ogImageSquare : `${baseUrl}${ogImageSquare}`;

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
      <meta property="og:image" content={fullSquareImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="1200" />
      <meta property="og:site_name" content="YektaD" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={fullUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />
    </Helmet>
  );
};

export default SEOHead;
