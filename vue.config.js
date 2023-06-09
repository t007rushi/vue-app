module.exports = {
    devServer: {
      proxy: {
        '^/api': {
          target: 'http://localhost:5000',
          changeOrigin: false,
          logLevel: 'debug',
          pathRewrite: { '^/api': '/' },
        },
      },
    },
  }