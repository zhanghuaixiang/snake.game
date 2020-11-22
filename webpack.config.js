const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { Template } = require("webpack");

module.exports = {
    // 打包入口
    entry: "./src/main.ts",
    // 打包输出
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js"
    },
    // 自动编译热更新
    devServer: {
        contentBase: "/dist",
        // 自动在浏览器打开服务
        open: true
    },
    resolve: {
        extensions: [".ts", ".js", ".json"]
    },
    mode: "development",
    module: {
        rules:[{
            test: /\.ts$/,
            use: ["ts-loader"],
            // 排除node_modules中的ts文件
            exclude: /node_modules/
        }]
    },
    plugins: [
        // 自动生成》html文件
        new HtmlWebpackPlugin ({
            template: "./src/index.html"
        })
    ]
}