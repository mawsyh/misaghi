const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'misaqi.com',
      'dev-to-uploads.s3.amazonaws.com',
      'res.cloudinary.com',
      'lh3.googleusercontent.com',
      'blog-api.misaqi.com',
    ],
  },
};

module.exports = nextConfig;
