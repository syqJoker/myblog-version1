var 
    WebpackDevServer  = require('webpack-dev-server'),
    webpack = require('webpack'),
    webpackConfig = require('./webpack.config')
	;
//webpackConfig.entry.app.unshift("webpack-dev-server/client?http://localhost:8090/", "webpack/hot/dev-server");
var server = new WebpackDevServer( webpack(webpackConfig),{
	hot:true,
	historyApiFallback: false,
	watchOptions: {
	    aggregateTimeout: 300,
	    poll: 1000
	}
	// contentBase:'http://localhost:8090'
});

server.listen(8090);