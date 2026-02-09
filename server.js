const app=require('./src/app')
const connectDB=require('./src/DB/db');
const PORT=process.env.PORT||3000;

connectDB();

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})