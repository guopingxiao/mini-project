var webpack = require('webpack');

module.exports={
	entry:{
		main2: './src/js/main2',
		man:'./src/js/main',
	},

	output:{
		filename:'[name].js',
		path:'./build',
		publicPath: '../build/'
	},

	module:{
		loaders: [
			{
				test: /\.js$/,
				loader:'babel?presets=es2015'
			},
			{ test: /\.css$/, loaders: ['style', 'css']},
			{ test: /\.less/, loaders: ['style', 'css', 'less']},
			{
				test: /\.(eot|woff|svg|ttf|woff2|gif)(\?|$)/,
				loader: 'file-loader?name=[hash].[ext]'
			},
			{
			  	test: /\.(png|jpg)$/,
			  	loader: 'url?limit=12000&name=[hash].[ext]'
			 }

		]

	},

	plugins: [
			  new webpack.optimize.CommonsChunkPlugin('common.js') //将公用模块，打包进common.js
	  ],

	resolve:{
		  extensions: ['', '.js', '.jsx'] //后缀名自动补全
	  }
}
