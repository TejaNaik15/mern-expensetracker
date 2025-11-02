const mongoose = require("mongoose");

// Disable buffering globally
mongoose.set('bufferCommands', false);

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });
    
    // Disable buffering on the connection
    mongoose.connection.db.bufferMaxEntries = 0;
    
    console.log(`✅ MongoDB Atlas Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Atlas connection failed: ${error.message}`);
    throw error;
  }
};

module.exports = connectDB;