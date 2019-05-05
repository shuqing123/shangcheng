const express = require('express');
const app = express();

app.use(function (req,res,next) {
    res.header('Access-Control-Allow-Origin','*');
    next();
})

//获取post参数
app.use(express.urlencoded({extended:false}));
//静态资源目录
app.use(express.static(__dirname+'/public'));



app.use('/', require('./router/index'));
app.use('/', require('./router/findAll'));
app.use('/', require('./router/home'));



app.listen(3000)













