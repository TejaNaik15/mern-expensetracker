const mongoose = require("mongoose");

// Disable buffering completely
mongoose.set('bufferCommands', false);
mongoose.set('bufferMaxEntries', 0);

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;
  
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
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