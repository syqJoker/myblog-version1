var path=require('path');
var webpack = require('webpack');
var node_modules_dir=path.resolve(__dirname,'node_modules');
console.log('******************线上配置已启动**********************');
var config = {
    entry:{
        app:path.resolve(__dirname,'app/main.js'),
        mobile:path.resolve(__dirname,'app/mobile.js'),
        vendors:['react']
    },
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].[hash].js'
    },
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:'babel',
                exclude: [node_modules_dir],
                query:{
                    presets:['es2015','react']
                }
            },
            {
                test:/\.css$/,
                exclude: [node_modules_dir],
                loader:"style-loader!css-loader"
            },
            {
                test: /\.(png|jpg)$/,
                exclude: [node_modules_dir],
                loader: "url?limit=2500"//limit参数是告诉它图片不大于25kb自动在他从属的css文件中转成BASE64字符串
            },
            {
                test: /\.woff$/,
                exclude: [node_modules_dir],
                loader: 'url?limit=100000'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
    ]

    //devtool: 'source-map'//提供代码映射的
};

module.exports = config;