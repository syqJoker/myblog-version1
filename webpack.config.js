var path=require('path'),
    node_modules_dir=path.resolve(__dirname,'node_modules'),
    webpack = require('webpack'),
    commonsChunkPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
console.log('******************开发环境配置已启动**********************');
/*
module.exports={
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname,'app/main.js')
    ],
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    }
    ,
    module:{
        loaders:[
            {
                test:/\.jsx?$/,
                loader:'babel',
                exclude: /node_modules/,
                query:{
                    presets:['es2015','react']
                }
            }
        ]
    }
};*/

//不需要多次压缩的压缩包放在这个引用
var deps=[
    'react/dist/react.min.js',
    'react-dom/dist/react-dom.min.js'
];

//执行方法
var config = {
    entry:[
        'webpack-dev-server/client?http://localhost:8090',
        'webpack/hot/only-dev-server',
        path.resolve(__dirname,'app/main.js')
    ],
    output:{
        publicPath: "http://localhost:8090/",
        path:path.resolve(__dirname,'build'),
        filename:'bundle.js'
    },
    plugins:[
        commonsChunkPlugin,
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery",
            _:"lodash"

        }),
        new webpack.DefinePlugin({
            VERSION:"1.0",
            'process.env.NODE_ENV': '"development"'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module:{
        noParse:[],
        //不解析以上文件
        loaders:[
            {
                test:/\.jsx?$/,
                loader:'react-hot!babel-loader',
                exclude: /node_modules/,
                include:[path.resolve(__dirname,'app')]
                /*query:{
                    presets:['es2015','react']
                }*/
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            },
            {
                test: /\.(png|jpg)$/,
                loader: "url?limit=2500"//limit参数是告诉它图片不大于25kb自动在他从属的css文件中转成BASE64字符串
            },
            {
                test: /\.woff$/,
                loader: 'url?limit=100000'
            }
        ]
    },
    resolve:{
        alias:{}
        //
    },
    devtool: 'source-map'//提供代码映射的
};

deps.forEach(function (dep) {
    var depPath = path.resolve(node_modules_dir, dep);
    config.resolve.alias[dep.split(path.sep)[0]] = depPath;
    config.module.noParse.push(depPath);
});
module.exports = config;