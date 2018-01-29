/// <binding AfterBuild='Run - Development' ProjectOpened='Watch - Development' />
"use strict";

const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: ["./scripts/app.js"],
    output: {
        path: path.resolve(__dirname, "wwwroot"),
        filename: "js/[name].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            }
        ]
    }
};