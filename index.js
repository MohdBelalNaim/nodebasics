const express = require('express')
const app = express()


app.use(express.json())

app.post("/login",(req,res)=>{
    //sending json data
    const {one,two,three} = req.body

    if(!email || !password){
        res.json({error:"All fields are required"})
    }
    else{
        res.json({success:"Data recieved"})
    }
})

app.post("/",(req,res)=>{
    res.json({message:"This is a json data"})
})


app.listen(5000, ()=>{console.log("App is running on port 5000")})