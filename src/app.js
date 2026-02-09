const express=require('express');
const app=express();
app.use(express.json());

// Health check endpoint
app.get('/health',(req,res)=>{
    res.status(200).json({
        status: "✅ Server is running",
        timestamp: new Date().toISOString(),
        uptime: process.uptime()
    });
})

// API status endpoint
app.get('/api/status',(req,res)=>{
    res.status(200).json({
        message: "✅ User Management API is running",
        mongodbConnected: require('mongoose').connection.readyState === 1 ? "✅ Connected" : "❌ Disconnected",
        environment: process.env.NODE_ENV || "development",
        port: process.env.PORT || 3000
    });
})

app.get('./',(req,res)=>{
    res.send("user Management Api is running");
})


module.exports=app