const mongoose = require("mongoose");

// Only use VALID mongoose options
mongoose.set('bufferCommands', false);

// Override mongoose to prevent buffering timeout
const originalExec = mongoose.Query.prototype.exec;
mongoose.Query.prototype.exec = function() {
  // Force immediate execution - no buffering allowed
  if (mongoose.connection.readyState !== 1) {
    return Promise.reject(new Error('Database not connected - please try again'));
  }
  return originalExec.call(this);
};

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });
    
    // Wait for connection to be fully ready
    await new Promise((resolve, reject) => {
      if (mongoose.connection.readyState === 1) {
        resolve();
      } else {
        const timeout = setTimeout(() => {
          reject(new Error('Connection timeout'));
        }, 10000);
        
        mongoose.connection.once('connected', () => {
          clearTimeout(timeout);
          resolve();
        });
      }
    });
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB connection failed: ${error.message}`);
    throw error;
  }
};

module.exports = connectDB;