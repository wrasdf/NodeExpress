var express = require('express')
  , http = require('http')
  , path = require('path')
  , gzippo = require('gzippo');

var cacheTime = {
  oneYear : 31557600000,
  oneDay : 86400000,
  oneHour : 3600000
}

var app = express();

app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser("NodeExpress"));
  app.use(express.session({secret : "NodeExpress" , cookie: {maxAge: cacheTime.oneHour}}));
  app.use(app.router);
  app.use(require('less-middleware')({ src: __dirname + '/public' }));
  app.use(express.staticCache());
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions : true, showStack : true }));
  app.use(express.static(path.join(__dirname, 'public')));
  app.use(express.compress());
});

app.configure( 'production', function (){
  app.use(express.errorHandler());
  app.use(gzippo.staticGzip(path.join(__dirname, 'public')), {maxAge: cacheTime.oneDay});
  app.use(gzippo.compress());
});

require('./routes/routes.js')(app);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port %d in %s mode.", app.get("port"), app.settings.env);
});
