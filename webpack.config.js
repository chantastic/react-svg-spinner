var path = require("path")

module.exports = [
	{
		entry: "./src/index.js",
		externals: {
			"react": {
					commonjs: "react",
					commonjs2: "react",
					amd: "react",
					root: "React"
			}
		},
		output: {
			filename: "index.js",
			path: path.resolve(__dirname, 'lib'),
			library: "ReactSVGSpinner",
			libraryTarget: "commonjs2"
		},
		module: {
			loaders: [
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					loader: "babel-loader"
				}
			]
		}
	}
]
