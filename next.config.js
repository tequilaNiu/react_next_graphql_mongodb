/* eslint-disable */
const withLess = require('@zeit/next-less')

module.exports = {
  distDir: 'build',
  useFileSystemPublicRoutes: false,
  ...withLess({
    lessLoaderOptions: {
      javascriptEnabled: true,
    },
  })
}