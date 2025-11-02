const mongoose = require("mongoose");

mongoose.set('bufferCommands', false);
mongoose.set('bufferMaxEntries', 0);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Atlas connection failed: ${error.message}`);
    throw error;
  }
};

module.exports = connectDB;