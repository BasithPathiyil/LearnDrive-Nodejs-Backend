const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/LearnDrive',{
    useNewUrlParser:true
})
const User = mongoose.model('User',{
    email:String,
    username:String,
    password:String
})

module.exports={
    User
}