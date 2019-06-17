var mongoose = require('mongoose')
var Schema = mongoose.Schema
var userSchema = new  Schema({
    "userName":String,
    "userPassword":String,
})
module.exports = mongoose.model('user',userSchema)