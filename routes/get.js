var express = require('express');
var request=require('request');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    // res.send("jjjjj")
    request("http://apis.juhe.cn/lottery/query?key=b919609752eac679e509cd49f10cfed0&lottery_id=ssq",function(err, response, body) {
        if(!err){
            const weather = JSON.parse(body); // 内部是个数组，可能有重名（拼音）的，
            res.send({
                status:0,
                data:weather,
                message:'获取成功'
              })
        }else {
            res.send({
                status:-1,
                message:'获取失败'
              })
        }

    })

});
router.get('/xiao', function(req, res, next) {

    let key="0e3a5ee84c254bf9f099d393c5fd2867"
    let page=req.query.page
    let pagesize=20
    var tmp 
  tmp = 1418745237;

    request(
    `http://v.juhe.cn/joke/content/list.php?key=${key}&page=${page}&pagesize=${pagesize}&sort=asc&time=${tmp}`,function(err, response, body) {
        if(!err){
            const weather = JSON.parse(body); // 内部是个数组，可能有重名（拼音）的，
            res.send({
                status:0,
                data:weather,
                message:'获取成功'
              })
        }else {
            res.send({
                status:-1,
                message:'获取失败'
              })
        }

    })

});


module.exports = router;