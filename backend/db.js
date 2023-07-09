const mongoose = require("mongoose")
const url = "mongodb://127.0.0.1:27017";

const connectToMongo = async()=>{
    await mongoose.connect(url)
    console.log("Connected to database successfully")
   
}

module.exports = connectToMongo