const mongoose=require('mongoose')

const connectDB=async ()=>{
    try{
        const mongoURI = process.env.MONGO_URI;
        console.log("DEBUG: MONGO_URI value:", mongoURI ? "Set (length: " + mongoURI.length + ")" : "NOT SET");
        if(!mongoURI || mongoURI.trim() === ''){
            throw new Error('MONGO_URI is not defined or empty in environment variables');
        }
        await mongoose.connect(mongoURI);
        console.log("✅MongoDb connected");
    }catch(err){
        console.log("❌ MongoDB connection error:",err.message);
        process.exit(1);
    }
}

module.exports=connectDB;