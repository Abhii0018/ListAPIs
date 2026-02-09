const express=require('express');
const dotenv=require('dotenv');
const app=express();
app.use(express.json());
dotenv.config();

app.get('./',(req,res)=>{
    res.send("user Management Api is running");
})


module.exports=app