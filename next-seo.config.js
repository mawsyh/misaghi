const canonicalUrl = 'https://misaqi.com';
const metaImage = '';
const metaDescription = 'Creating stuff';

const defaultSEOConfig = {
  defaultTitle: 'Ryan Misaqi personal website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Ryan Misaqi personal website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'misaqi.com og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'misaqi.com og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'misaqi.com og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'misaqi.com',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
