const express = require('express')
const app = express()
const cors = require('cors')
const jwt = require('jsonwebtoken')

const { status } = require('express/lib/response')
const dataService = require('./services/data.service')
const dataService1=require('./services/data.services1')

app.use(express.json())
app.use(cors({
    origin: "http://localhost:4200"
}))
const jwtMiddlWare=(req,res,next)=>{
    try {
        token = req.body.token
        const data = jwt.verify(token,'secretkey')
        next()
    }
    catch {
        res.status(401).json({
            status : false,
            message:"please logn"
        })
    }
}


app.post('/register',(req,res)=>{
    dataService.register(req.body.email,req.body.username,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
        console.log(result)
    })
})
app.post('/registerdriver',jwtMiddlWare,(req,res)=>{
    dataService.driverRegister(req.body.name,req.body.age,req.body.gender,req.body.vehicles,req.body.location,req.body.mobilenumber,req.body.emailid).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.get('/dashboard',(req,res)=>{
    dataService1.login().then(result=>{
        res.status(200).json(result)
    })
})
app.post('/login',(req,res)=>{
    dataService.login(req.body.email,req.body.password).then(result=>{
        res.status(result.statusCode).json(result)
    })
})
app.post('/detail',(req,res)=>{

     dataService1.details(req.body.driverId).then(result=>{
        res.status(200).json(result)
    })
})




app.listen(3000,()=>{
    console.log("Server started")
})