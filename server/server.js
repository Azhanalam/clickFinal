var express = require('express');
var app = express();
var path = require('path');
var PORT = process.env.PORT || 8080;
console.log("dir ",'./../dist/PRIMARK');

app.use(express.static('./../dist/PRIMARK'));

app.get('*',(req,res)=>{
  res.sendFile(path.resolve('./../dist/PRIMARK/index.html'));
});

app.listen(PORT,()=> console.log("server is running on 8084"));
