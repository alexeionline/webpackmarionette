var webpack = require('webpack');

module.exports = {
	context: __dirname + "/src",
    entry: "./index",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },

    watch: true,

    module: {
        loaders: [
            {test: /\.jsx?$/, exclude: /(node_modules|bower_components)/, loader: 'babel?presets[]=es2015' },
            {test: /\.twig$/, loader: "twig" },
        ]
    },

    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ],

    devtool: 'source-map',

    node: {
		fs: "empty"
	}
}


