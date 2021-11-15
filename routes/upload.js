var express = require('express');
var router = express.Router();
var qiniu = require("qiniu");



var accessKey = 'DPfKARFB9gnPl1acy8NzvhMSpOQL9kLSCCN0sTqN';  
var secretKey = 'K6fkYEpzhOqh5G6FVmrETyu0-3yO5PJha2lDzLvM';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
var options = {
  scope: "asiaimg"  //存储空间的名字，创建的存储空间的时候，自己取的名字
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken=putPolicy.uploadToken(mac);

router.post('/', function(req, res, next) {
    // res.send("hkjkl")
	res.send({
		putPolicy:putPolicy,
		uploadToken:uploadToken
	})
})
router.post("/k",function(req,res,next){
    // console.log(req.files)
    console.log(112)
    res.send("12")
})
module.exports = router