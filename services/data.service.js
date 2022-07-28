const jwt=require('jsonwebtoken')
const db = require('./db')
const db1 = require('./db1')
const driverRegister=(name,age,gender,vehicles,location,mobilenumber,emailid)=>{
    return db1.Products.findOne({mobilenumber}).then(products=>{
        if(products){
            return {
                statusCode : 401,
                message : "UnSuccesfully registered",
                status : false
            }
        }else{
            const newProducts = new db1.Products({
                name,
                age,
                gender,
                vehicles,
                location,
                mobilenumber,
                emailid
            })
            newProducts.save()
            return {
                statusCode : 200,
                message : "Succesfully registered",
                status : true
            }
        }
    })
    

    
}
const register=(email,username,password)=>{
    return db.User.findOne({email}).then(user=>{
        if(user){
            return {
                status:false,
                message:"Email already registered",
                statusCode:401
            }
        }else{
            const User = new db.User({
                email,
                username,
                password
            })
            User.save()
            return {
                status:true,
                message:"Succesfuly registered",
                statusCode:200
            }
        }
    })
}
const login=(email,password)=>{
    return db.User.findOne({email,password}).then(user=>{
        if(user){
            currUser=user.username
            token=jwt.sign({
                currUser
            },'secretkey')
            return {
                status : true,
                statusCode : 200,
                message : "Login Succesful",
                token
            }
        }else{
            return {
                status : false,
                statusCode:401,
                message:"Invalid email id or password"
            }
        }
    })
}
module.exports={
    driverRegister,
    register,
    login
}