const path = require("path");

// const nodeExternals = require("webpack-node-externals");
const html_webpack_plugin = require("html-webpack-plugin");
const mini_css_extract_plugin = require("mini-css-extract-plugin");

module.exports = {
    mode: "none",
    // target: "node",
    // externals: [nodeExternals()],
    entry: {
        index: ["@babel/polyfill", "./src/app/index.js"],
        home: ["@babel/polyfill", "./src/app/scripts/home.js"]
    },
    output: {
        path: path.resolve( __dirname, "build" ),
        filename: "js/[name].js"
    },
    devServer: {
        port: 5500
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [ mini_css_extract_plugin.loader, "css-loader" ]
            },
            {
                test: /\.js$/i,
                loader: "babel-loader",
                exclude: "/node_modules/"
            }
        ]
    },
    plugins: [
        new html_webpack_plugin({
            template: "./src/index.html",
            chunks: [ "index" ],
            minify: {
                removeComments: true,
                useShortDoctype: true
            }
        }),
        new html_webpack_plugin({
            template: "./src/pages/home.html",
            filename: "pages/home.html",
            chunks: [ "home" ],
            minify: {
                removeComments: true,
                useShortDoctype: true
            }
        }),
        new mini_css_extract_plugin({
            filename: "css/index.css"
        })
    ]
}