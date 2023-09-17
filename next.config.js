/** @type {import('next').NextConfig} */
const nextConfig = {}

const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './src/theme.config.jsx',
    flexsearch: {
      codeblocks: false,
    },
    defaultShowCopyCode: true,
  })
   
  module.exports = withNextra(nextConfig)
   
  // If you have other Next.js configurations, you can pass them as the parameter:
  // module.exports = withNextra({ /* other next.js config */ })