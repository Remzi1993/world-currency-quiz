// vue.config.js
module.exports = {
    css: {
        extract: false,
    },

    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    },

    pluginOptions: {
      prerenderSpa: {
        registry: undefined,
        renderRoutes: [
          '/',
          '/quiz'
        ],
        useRenderEvent: true,
        headless: true,
        onlyProduction: true
      }
    }
}
