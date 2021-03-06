/* eslint-disable */
const withLess = require('@zeit/next-less')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
// import withLess from '@zeit/next-less'
// import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
const { ANALYZE } = process.env

module.exports = withLess({
  // 直接导出静态文件
  exportPathMap: (defaultPathMap) => ({
    '/': { page: '/' },
    '/p/:id': { page: '/post' },
  }),
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
  distDir: 'build',
  // generateEtags: false,
  useFileSystemPublicRoutes: false,
  webpack: (config, { isServer }) => {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: isServer ? 8888 : 8889,
        openAnalyzer: true
      }))
    }
    return config;
  }
})