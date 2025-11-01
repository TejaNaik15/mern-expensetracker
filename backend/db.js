const mongoose = require("mongoose");

// Disable buffering
mongoose.set('bufferCommands', false);

const connectDB = async () => {
  // Try local MongoDB first
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 5000,
      connectTimeoutMS: 5000,
    });
    console.log(`MongoDB Connected (Local): ${conn.connection.host}`);
    return conn;
  } catch (localError) {
    console.log('Local MongoDB not available, trying Atlas...');
    
    // Fallback to Atlas if local fails
    try {
      const conn = await mongoose.connect(process.env.MONGO_URI_ATLAS, {
        serverSelectionTimeoutMS: 10000,
        socketTimeoutMS: 10000,
        connectTimeoutMS: 10000,
      });
      console.log(`MongoDB Connected (Atlas): ${conn.connection.host}`);
      return conn;
    } catch (atlasError) {
      console.error(`Failed to connect to both local and Atlas MongoDB`);
      console.error(`Local error: ${localError.message}`);
      console.error(`Atlas error: ${atlasError.message}`);
      throw new Error('No database connection available');
    }
  }
};

module.exports = connectDB;