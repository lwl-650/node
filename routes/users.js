var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.get("/get",(req, res, next)=>{
  res.send({name:"sz",
 age:18})
})
router.get("/go",(req, res, next)=>{
  res.render("a")
})
module.exports = router;
