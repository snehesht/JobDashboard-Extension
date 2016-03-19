var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
// require("./src/app.scss");

module.exports = {
    // context: path.join(__dirname,'/src/'),
    entry: './src/index.jsx',
    output: {
        path: './dist',
        filename: 'bundle.js'
    },
  	module: {
    	loaders: [
			{ test: /\.jsx$/, loader: 'babel-loader', query:{presets:['es2015','react']} },
			{ test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader","css-loader","sass-loader") }
    	]
  	},
  resolve: {
        extensions: ['', '.jsx', '.js'],
        modulesDirectories: ["src/components", "node_modules"]
    },
    plugins:[
      new ExtractTextPlugin("[name].css")
    ]
};