var webpack = require("webpack");
var path = require("path");
// var version = require("./package.json").version;
// var banner = "";
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var StatsPlugin = require("stats-webpack-plugin");
var OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

var cssLoader = {
  loader: "css-loader",
  options: {
    minimize: true
  }
};
var sassLoader = {
  loader: "sass-loader",
  options: {
    minimize: true
  }
};

var loaders = [
	{
		test: /\.js?$/,
		exclude: /node_modules/,
		loader: "babel-loader"
	},
  {
    test: /\.css$/,
    loader: 'css-loader'
  },
  {
    test: /\.scss$/,
    loaders: ['css-loader', 'sass-loader']
  },
	{
		test: /\.vue?$/,
		loader: "vue-loader",
   /* options:{
		  loaders:{
        scss: 'css-loader!sass-loader'
      }
    }*/
    options:{
      loaders: {
        css: ExtractTextPlugin.extract({use:[cssLoader]}),
        postcss: ExtractTextPlugin.extract({use:[cssLoader]}),
        scss: ExtractTextPlugin.extract({use:[cssLoader,sassLoader]}),
      }
    }
	}
];

module.exports = [
	{
		entry: "./src/index.js",
		output: {
			path: path.resolve(__dirname, './dist'),
			filename: "vue-side-bar.js",
			library: "VueSideBar",
			libraryTarget: "umd"
		},

		plugins: [
			new webpack.DefinePlugin({
				"process.env" : {
					NODE_ENV : JSON.stringify("production")
				}
			}),
			new webpack.optimize.UglifyJsPlugin({
				compress: {
					warnings: false
				}
			}),
		/*	new webpack.BannerPlugin(banner, {
				raw: true
			}),*/
			new ExtractTextPlugin({filename:"vue-side-bar.min.css",  allChunks: true, fallback:"style-loader" }),
			new StatsPlugin( {filename:"./stats.json",
				chunkModules: true
				//exclude: [/node_modules[\\\/]react/]
			}),
		],

		module: {
			rules:loaders
		},

	}
];
