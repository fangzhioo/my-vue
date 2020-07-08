module.exports = {
    devServer: {
        proxy: {
            "/": {
                target: "http://localhost:7001/",
                // ws: true,
                changeOrigin: true
            }
        }
    }
};
