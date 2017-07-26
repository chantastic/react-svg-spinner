var path = require("path")

var options = {
	entry: "./src/index.js",
	externals: {
		"react": {
				commonjs: "react",
				commonjs2: "react",
				amd: "react",
				root: "React"
		},
		"prop-types": {
				commonjs: "prop-types",
				commonjs2: "prop-types",
				amd: "prop-types",
				root: "PropTypes"
		}
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	library: {
		name: "ReactSVGSpinner"
	}
}

module.exports = [
	{
		entry: options.entry,
		externals: options.externals,
		output: {
			filename: "index.js",
			path: path.resolve(__dirname, 'lib'),
			library: options.library.name,
			libraryTarget: "commonjs2"
		},
		module: options.module
	},
	{
		entry: options.entry,
		externals: options.externals,
		output: {
			filename: "react-svg-spinner.js",
			path: path.resolve(__dirname, 'dist'),
			library: options.library.name,
			libraryTarget: "umd"
		},
		module: options.module
	}
]
