

// next.config.js
const path = require("path");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  //swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    additionalData:  `@use "base" as *;`,
  },
  images: {
    domains: [
      'lh3.googleusercontent.com', // Google
      'avatars.githubusercontent.com', // GitHub
      'platform-lookaside.fbsbx.com', // Facebook
      'pbs.twimg.com', // Twitter
    ],
  },
};

module.exports = nextConfig;

