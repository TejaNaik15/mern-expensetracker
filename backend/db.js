const mongoose = require("mongoose");

// Disable buffering only with valid option
mongoose.set('bufferCommands', false);

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Atlas connection failed: ${error.message}`);
    isConnected = false;
    throw error;
  }
};

module.exports = { connectDB, isConnected: () => isConnected };

module.exports = connectDB;