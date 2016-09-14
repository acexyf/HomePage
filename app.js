var express=require('express');
var path=require('path');
var app=express();
var port=process.env.PORT || 8088;

app.use('/public',express.static('public'));

app.get('/',function(req,res){
	res.sendFile(path.join(__dirname, './views/love.html'));
});
app.use(function(req, res) {
	res.sendFile(path.join(__dirname, './views/404.html'));
});

var server=app.listen(port,function(){
	console.log('server is listening on port:'+port);
});


