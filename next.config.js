/** @type {import('next').NextConfig} */


const withOptimizedImages = require('next-optimized-images')

module.exports = withOptimizedImages({
  handleImages: ['jpeg', 'png', 'svg'],
})

module.exports = { assetPrefix: './' }; // enforces relative paths

module.exports = {
  reactStrictMode: true,
  images: {
    // loader: 'imgix',
    loader: 'cloudinary',
    path: '',
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
    
  },
 
  "rules": {
    "@next/next/no-img-elements": "off",
  }
}







// module.exports = {
//     trailingSlash: true
// };