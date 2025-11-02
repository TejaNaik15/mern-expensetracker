const mongoose = require("mongoose");

// NUCLEAR OPTION: Disable ALL buffering
mongoose.set('bufferCommands', false);
mongoose.set('bufferMaxEntries', 0);

// Override mongoose query to prevent buffering
const originalExec = mongoose.Query.prototype.exec;
mongoose.Query.prototype.exec = function() {
  if (mongoose.connection.readyState !== 1) {
    throw new Error('Database not connected');
  }
  return originalExec.call(this);
};

const connectDB = async () => {
  try {
    // Force immediate connection
    const conn = await mongoose.connect(process.env.MONGO_URI);
    
    // Ensure connection is ready
    if (mongoose.connection.readyState !== 1) {
      throw new Error('Connection not ready');
    }
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    throw error;
  }
};

module.exports = connectDB;