let mysql=require('mysql');
let express=require('express');
const router = express.Router();

//创建数据库连接
let connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'123',
    database:'parts',
    multipleStatements: true
})

router.get('/new', function (req, res) {
    let sql = 'select * from goods where home="new"';
    connection.query(sql, function (err, data) {
        if(err) throw err;
        console.log(data);
        res.send(data)
    })
})

router.get('/hot', function (req, res) {
    let sql = 'select * from goods where home="hot"';
    connection.query(sql, function (err, data) {
        if(err) throw err;
        console.log(data);
        res.send(data)
    })
})

module.exports = router













