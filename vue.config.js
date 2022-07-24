module.exports = {
    devServer: {
        open: true,
        host: 'localhost',
        port: 8080,
        https: false,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: process.env.VUE_APP_SERVICE_URL,
                ws: true,
                changOrigin: true,
            },
            [process.env.VUE_APP_BASE_SQL]: {
                target: process.env.VUE_APP_SERVICE_URL,
                ws: true,
                changOrigin: true,
            },
        },
    },
    css: {
        loaderOptions: {
            less: {
                lessOptions: {
                    javascriptEnabled: true
                }
            }
        }
    }
};
