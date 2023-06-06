module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:3004',
          changeOrigin: true,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  }