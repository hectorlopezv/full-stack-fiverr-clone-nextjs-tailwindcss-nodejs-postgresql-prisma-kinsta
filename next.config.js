/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    swcPlugins: [{ module: require.resolve('next-superjson-plugin') }]
  },
  images: {
    domains: [
      'res.cloudinary.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com'
    ]
  }
};
module.exports = nextConfig;
