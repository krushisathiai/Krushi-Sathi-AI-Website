import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, type = 'website', url }) {
  const defaultTitle = "Krushi Sathi AI | India's #1 AI Farming Assistant";
  const defaultDesc = "Empower your farming with Krushi Sathi AI. Instantly detect crop diseases, calculate perfect fertilizer ratios, get expert advice, and receive live weather alerts.";
  const siteUrl = "https://krushisathiai.in";
  
  const currentTitle = title ? `${title} | Krushi Sathi AI` : defaultTitle;
  const currentDesc = description || defaultDesc;
  const currentUrl = url ? `${siteUrl}${url}` : siteUrl;

  return (
    <Helmet>
      <title>{currentTitle}</title>
      <meta name="title" content={currentTitle} />
      <meta name="description" content={currentDesc} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDesc} />
      
      {/* Twitter */}
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={currentTitle} />
      <meta property="twitter:description" content={currentDesc} />
    </Helmet>
  );
}
