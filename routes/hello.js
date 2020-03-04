var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//MySQLの設定情報
var mysql_setting = {
    host     : 'localhost', 
    port     : 8000,
    user     : 'onokai',
    password : 'chacopipi0516',
    database : 'my-nodeapp-db'
};

//GETアクセスの処理
router.get('/',(req, res, next) => {
    
    //コネクションの用意
    var connection = mysql.createConnection(mysql_setting);

    //データベースに接続
    connection.connect();

    //データを取り出す
    connection.query('SELECT * from mydata', function(error, results, fields) {
        //データベースアクセス完了時の処理
        if (error == null) {
            var data = {title:'mysql', content:results};
            res.render('hello', data);
        }
    });

    //接続を解除
    connection.end();
});

module.exports = router;