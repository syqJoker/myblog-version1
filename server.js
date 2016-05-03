var express=require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser')
    ;

var app = express();
process.env.NODE_ENV = 'development';
//require('./app/dbinit');
// app.use(webpackDevMiddleware(webpack(webpackConfig.dev),{
// 	publicPath:'/'
// }));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.use(express.static('app'));
app.use(express.static('build'));


require('./server/router/router')(app);

app.use(function(req,res,next){
    res.status(404).send('sorry cant find that !');
    //sendFile('404.html');
});

app.use(
    function(err,req,res,next){
        console.error(err.stack);
        res.status(500).send('Somthing broke!');
        //sendFile('//500.html')
    }
);

app.listen(3000);
console.log('后台服务已启动');