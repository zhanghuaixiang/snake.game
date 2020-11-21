const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");

module.exports = {
    entry: "./src/main.ts",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    mode: "development",
    module: {
        rules:[{
            test: /\.ts$/,
            use: ["ts-loader"],
            exclude: /node_modules/
        }]
    },
    plugins: [
        new HtmlWebpackPlugin ({
            template: "./src/index.html"
        })
    ]
}