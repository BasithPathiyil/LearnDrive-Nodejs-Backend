
const db1=require('./db1')
const login=()=>{
    return db1.Products.find()
}
const details=(id)=>{
    
    return db1.Products.findById(id)
}
module.exports={
    login,
    details
}