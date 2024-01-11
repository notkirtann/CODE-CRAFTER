const mongoose = require("mongoose");
const connectDB = async() =>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URL);
        console.log(
          `Connected To Mongodb Database` 
        );
      } catch (error) {
        console.log(`Error in Mongodb`);
      }
    };

module.exports = connectDB;
