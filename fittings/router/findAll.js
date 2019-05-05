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
});
//调用数据库连接
connection.connect();

router.post('/add',function (req, res) {
    let sql1 = `select model,price,src from goods where id='${req.body.id}'`;
    let sql2 = `select id from users where username='${req.body.user}'`;
    connection.query(`${sql1}; ${sql2}`,function (err, results) {
        if(err) throw err;
        //console.log(results);
        let name = results[0][0].model;
        let price = results[0][0].price;
        let img = results[0][0].src;
        let uid = results[1][0].id;
        let arr = [name, price, 1, img, uid]
        let sql = `insert into goodlist(id,name,price,num,img,uid) values (0,?,?,?,?,?)`;
        connection.query(sql, arr, function (err, result) {
            if(err) throw err;
            //console.log(result);

            res.send(result)
        })
        //res.send(results)
    })
})

//根据用户名查找用户购买的商品
router.post('/list', function (req, res){
    let sql=`select id from users where username='${req.body.user}'`;
    connection.query(sql,function(err,result){
        if(err){
        console.log('error');
        return;
        }
        console.log(result);
        let sql=`select * from goodlist where uid='${result[0].id}'`;
        connection.query(sql, function (err, result) {
            if(err) throw err;
            res.send(result);
        })
        //res.send(result);
    })
})

//根据商品的id删除对应的商品
router.post('/del',function(req,res){
    let sql="delete from goodlist where id=?";
    let goodId=req.body.id;
    let sqlParams=[goodId];
    connection.query(sql,sqlParams,function(error,result){
        if(error){
            console.log(error);
        }
        console.log("删除是否成功"+result);
        res.send({code:0});
    })
})
//创建连接
module.exports = router;




