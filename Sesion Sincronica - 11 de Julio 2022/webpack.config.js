const path = require("path");

const html_webpack_plugin = require("html-webpack-plugin")

module.exports = {
    mode: "none",
    entry: {
        app: ["@babel/polyfill", "./src/app/index.js"]
    },
    output: {
        path: path.resolve( __dirname, "build" ),
        filename: "js/app.bundle.js"
    },
    devServer: {
        port: 5500
    },
    plugins: [
        new html_webpack_plugin({
            template: "./src/index.html"
        })
    ]
}