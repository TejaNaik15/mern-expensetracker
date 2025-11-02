const mongoose = require("mongoose");

// Completely disable buffering
mongoose.set('bufferCommands', false);
mongoose.set('bufferMaxEntries', 0);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ MongoDB Atlas Connected: ${mongoose.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Atlas connection failed: ${error.message}`);
    throw error;
  }
};

module.exports = connectDB;