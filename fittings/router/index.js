const express = require('express');
const router = express.Router();
const crypto = require('crypto');
const mysql = require('mysql');
let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'parts',
    multipleStatements: true
});



router.post('/reg', function (req, res) {
    let user = req.body.user;
    let pass = req.body.pass;
    //console.log(connection);
    let sql = `select username from users where username='${user}'`
    connection.query(sql,function (err,data) {
        if (err) throw err;
        console.log(data);
        if(!data.length){
            const c = crypto.createHash('sha256'); // 1. 指定用什么方式加密
            const password = c.update(pass).digest('hex'); // 2. 加密*/
            let sql = `insert into users (id,username,password) values (0,'${user}','${password}')`;
            connection.query(sql, function (err,data) {
                if (err) throw err;
                console.log(data);
                res.send({msg:'注册成功'});
            })
        }else{
            res.send({msg:'用户名已经存在'});
        }
    })
});


router.post('/login', function (req, res) {
    let user = req.body.user;
    let pass = req.body.pass;
    //console.log(connection);
    const c = crypto.createHash('sha256'); // 1. 指定用什么方式加密
    const password = c.update(pass).digest('hex'); // 2. 加密*/
    let sql = `select username,password from users where username='${user}'`
    connection.query(sql,function (err,data) {
        if (err) throw err;
        console.log(data);
        if(data.length){
            if(data[0].password === password){
                return res.send({
                    msg:'登录成功',
                    login: true,
                    user: user
                });
            }
            return res.send({msg:'密码错误'})
        }
        return res.send({msg:'用户名不存在'})
    })

});

router.get('/logout', function (req, res) {
    res.send({
        login: false,
        user: ""
    })
})

router.post('/gain', function (req, res) {
    console.log(req.body);
    let sql = `select * from ${req.body.surface}`
    connection.query(sql, function (err, data) {
        if(err) throw err;
        res.send(data)
    })
})

router.get('/all', function (req, res) {
    let sql = `select * from goods`
    connection.query(sql, function (err, data) {
        if(err) throw err;
        res.send(data)
    })
})

router.post('/details', function (req, res) {
    console.log(req.body.id);
    let sql = `select * from goods where id='${req.body.id}'`
    connection.query(sql, function (err, data) {
        if(err) throw err;
        res.send(data)
    })
})

module.exports = router;









