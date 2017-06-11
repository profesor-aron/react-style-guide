const path = require('path')

const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env) {

	const NODE_ENV = JSON.stringify(env)

	return {
		context: path.resolve(__dirname, './src'),
		entry: './app/index',
		output: {
		  filename: 'App.nocache.js',
		  path: path.resolve(__dirname, './dist/js'),
	    publicPath: 'js'
		},
	  plugins: [
	    new webpack.DefinePlugin({
	      'process.env': {
	        'NODE_ENV': NODE_ENV
	      }
	    }),
	    new CleanWebpackPlugin(['dist']),
	    new HtmlWebpackPlugin({
	      filename: '../index.html',
	      template: './app/index.html'
	    })
	  ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: [
              'es2015',
              'react'
            ]
          }
        },
        {
          test: /\.jsx?$/,
          enforce: "pre",
          exclude: /node_modules/,
          loader: 'eslint-loader',
          options: {
            emitError: true,
            emitWarning: true,
            failOnError: true,
          }
        },
        {
          test: /\.css$/,
          loader: "style-loader!css-loader"
        },
        {
          test: /\.scss$/,
          loaders: ["style", "css", "sass"]
        },
        {
          test: /\.(png|woff|woff2|eot|ttf|svg|jpe?g|gif)$/,
          loader: 'url-loader?limit=100000&name=[name].[ext]'
        }
      ]
    }
	}

}
