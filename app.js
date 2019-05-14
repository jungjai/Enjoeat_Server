var express = require('express')
var bodyParser = require('body-parser')
//var router = require('./router/index')

var app = express()
app.listen(3000, function(){
  console.log("start! Enjoeat server on 3000")
})
app.use(express.static('public'));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true})) //ps모듈 사용
//app.use(router)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
