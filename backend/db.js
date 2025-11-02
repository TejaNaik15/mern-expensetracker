const mongoose = require("mongoose");

// Completely disable buffering
mongoose.set('bufferCommands', false);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 0,
      maxPoolSize: 10,
      minPoolSize: 5,
    });
    
    // Wait for connection to be ready
    await new Promise((resolve) => {
      if (mongoose.connection.readyState === 1) {
        resolve();
      } else {
        mongoose.connection.once('connected', resolve);
      }
    });
    
    console.log(`✅ MongoDB Atlas Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Atlas connection failed: ${error.message}`);
    throw error;
  }
};

module.exports = connectDB;

module.exports = connectDB;