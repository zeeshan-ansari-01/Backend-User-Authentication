require('dotenv').config();
const mongoose = require('mongoose');

async function connectDB(){
    try{
        await mongoose.connect(process.env.MONGO_URI)

        console.log("Database Connected Successfully");
    } catch(err){
        console.error("Database Connection Error:", err);
    }
}

module.exports = connectDB;