var express = require('express'),
				message = require('./models/message');
//var path = require('path');
var app = express();

//设置handlebars视图引擎
var handlebars = require('express3-handlebars')
			.create({defaultLayout:'main'});
	app.engine('handlebars', handlebars.engine);
	app.set('view engine', 'handlebars');
	//app.set('views', path.join(__dirname, 'views/layouts'));

app.set('port',process.env.PORT||3000);

/*app.use(function(req,res,next){
		res.locals.showTests=app.get('env')!=='production'&&req.query.test==='1';
		next();
});*/

app.use(express.static(__dirname + '/public'));

app.use(require('body-parser')());

app.get('/',message.messageJSON);

app.post('/models/message',message.Add);//增加留言


app.get('/about',function(req,res){
	res.render('about',{
		pageTestScript: '/qa/tests-about.js'
	});
});
//404 catch-all 处理器（中间件）
app.use(function(req,res,next){
	
	res.status(404);
	res.render('404');
});

//500错误处理器（中间件）
app.use(function(err,req,res,next){
	console.error(err);
	
	res.status(500);
	res.render('500');
});

app.listen(app.get('port'),function(){
	console.log('Express started on http://localhost:'+app.get('port')+';press Ctrl-c to terminate.');
});


