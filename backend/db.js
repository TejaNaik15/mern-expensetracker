const mongoose = require("mongoose");

// Disable buffering to prevent timeout issues
mongoose.set('bufferCommands', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
      family: 4
    });
    console.log(`MongoDB Atlas Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`MongoDB Atlas connection failed: ${error.message}`);
    throw error;
  }
};

module.exports = connectDB;