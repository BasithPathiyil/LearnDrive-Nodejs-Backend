const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/LearnDrive',{
    useNewUrlParser:true
})

const Products = mongoose.model('Products',{
    name:String,
    age:String,
    gender:String,
    vehicles:String,
    location:String,
    mobilenumber:String,
    emailid:String
})
module.exports={
    Products
}