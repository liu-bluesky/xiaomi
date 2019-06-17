var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var User = require('../models/users')
/* GET users listing. */
mongoose.connect('mongodb://127.0.0.1:27017/demo')
mongoose.connection.on('connected',function () {
    console.log('链接数据库成功');
})
mongoose.connection.on('error',function () {
    console.log('fail');
})
mongoose.connection.on('disconnected',function () {
    console.log('fail');
})
router.post('/', function(req, res, next) {
    var param = {
        userName:req.body.userName,
        userPwd:req.body.userPwd
    }
    console.log(param);
    User.findOne(param,function (err,doc) {
        if (err) {
            res.json({
                status:1,
                msg:err.message,
            });
        }else {
            console.log(doc);
            if (doc==null){
              res.json({
                  status:0,
                  msg:'',
                  result:{
                      list:false
                  }
              })
          } else {
              res.json({
                  status:0,
                  msg:'',
                  result:{
                      list:doc.userName
                  }
              })
          }
        }
    })

});

module.exports = router;
