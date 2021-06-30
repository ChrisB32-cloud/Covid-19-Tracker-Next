const proxy = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        proxy("/countries", {
            target: "https://api.covid19api.com",
            secure: false,
            changeOrigin: true
        })
    );
    app.use(
        proxy("/total/country/united-states", {
            target: "https://api.covid19api.com",
            secure: false,
            changeOrigin: true
        })
    );
}