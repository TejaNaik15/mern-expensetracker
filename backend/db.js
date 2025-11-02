const mongoose = require("mongoose");

// ABSOLUTE FINAL SOLUTION - Disable ALL buffering mechanisms
mongoose.set('bufferCommands', false);

// Global connection state
let isDBConnected = false;

const connectDB = async () => {
  if (isDBConnected) return;
  
  try {
    // Simple, direct connection
    await mongoose.connect(process.env.MONGO_URI);
    
    // Mark as connected only when truly ready
    isDBConnected = mongoose.connection.readyState === 1;
    
    if (!isDBConnected) {
      throw new Error('Connection not established');
    }
    
    console.log(`✅ MongoDB Connected: ${mongoose.connection.host}`);
  } catch (error) {
    isDBConnected = false;
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    throw error;
  }
};

// Export both connection function and status checker
module.exports = { connectDB, isConnected: () => isDBConnected };