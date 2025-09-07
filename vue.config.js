module.exports = {
    devServer: {
        open: true,
        host: "localhost",
        port: 80,
        https: false,
        proxy: {
            [process.env.VUE_APP_BASE_API]: {
                target: `http://192.168.31.93:8083`,
                // target: `http://127.0.0.1:8083`,
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    ["^" + process.env.VUE_APP_BASE_API]: ""
                }
            },
            [process.env.VUE_APP_BASE_SQL]: {
                target: `http://192.168.31.93:8084`,
                // target: `http://127.0.0.1:8084`,
                ws: true,
                changOrigin: true,
                pathRewrite: {
                    ["^" + process.env.VUE_APP_BASE_SQL]: ""
                }
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
