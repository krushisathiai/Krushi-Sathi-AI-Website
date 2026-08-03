import { Helmet } from 'react-helmet-async';

export default function SEO({ title, description, type = 'website', url, schema }) {
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
      <meta name="keywords" content="krushi, krushi sathi, krushi sathi ai, agriculture, agriculture app, farming, farming app, smart farming, kheti, sheti, kisan, farmer, crop disease detection, fertilizer calculator, kisan app, agri app india, krishi, shetkari, shetkari mitra, kisan suvidha, organic farming, agriculture technology, smart agriculture, Indian farming, best farming app, krishi gyan, fasal jankari, kisan yojana, agriculture news" />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={currentTitle} />
      <meta property="og:description" content={currentDesc} />
      <meta property="og:site_name" content="Krushi Sathi AI" />
      <meta property="og:image" content={`${siteUrl}/logo.png`} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={currentUrl} />
      <meta property="twitter:title" content={currentTitle} />
      <meta property="twitter:description" content={currentDesc} />
      <meta property="twitter:image" content={`${siteUrl}/logo.png`} />

      {/* Dynamic Schema Injection */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
