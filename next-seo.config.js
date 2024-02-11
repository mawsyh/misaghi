const canonicalUrl = 'https://misaghi.sth';
const metaImage = '';
const metaDescription = 'Creating stuff';

const defaultSEOConfig = {
  defaultTitle: 'Mohammad Misaghi personal website',
  description: metaDescription,
  canonical: canonicalUrl,
  openGraph: {
    canonical: canonicalUrl,
    title: 'Mohammad Misaghi personal website',
    description: metaDescription,
    type: 'website',
    images: [
      {
        url: metaImage,
        alt: 'misaghi.sth og-image',
        width: 800,
        height: 600,
      },
      {
        url: metaImage,
        alt: 'misaghi.sth og-image',
        width: 1200,
        height: 630,
      },
      {
        url: metaImage,
        alt: 'misaghi.sth og-image',
        width: 1600,
        height: 900,
      },
    ],
    site_name: 'misaghi.sth',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
};

export default defaultSEOConfig;
