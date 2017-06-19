var express=require('express');
var path=require('path');
var app=express();
var port=process.env.PORT || 8088;
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.json({ type: 'application/*+json' }));

app.use('/public',express.static('public'));



// app.get('/',function(req,res){
// 	res.sendFile(path.join(__dirname, './views/love.html'));
// });
// app.use(function(req, res) {
// 	res.sendFile(path.join(__dirname, './views/404.html'));
// });

app.post('/',function(req,res){
  console.log(req.body)
  res.json({name:'post'});
})
app.get('/',function(req,res){
  console.log(req.body)
  res.json({name:'get'});
})

var server=app.listen(port,function(){
	console.log('server is listening on port:'+port);
});


