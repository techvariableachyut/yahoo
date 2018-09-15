var express = require('express')
var app = new express()
var port = process.env.PORT || 80

app.get('/', function(req, res){
  res.send('done')
});

app.listen(port,function(){
  console.log(`app runing on port ${port}`);
});
