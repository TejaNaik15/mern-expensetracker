const express = require("express");
const cors = require("cors");
const { connectDB, isConnected } = require("./db");
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");

const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 8000;

// Middlewares
app.use(express.json());
app.use(cors());

// Test route
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "Server is running!" });
});

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/transactions", transactionRouter);

// Error handler middleware
app.use(errorHandler);

const server = () => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 API available at http://localhost:${PORT}/api/v1`);
    
    // Connect to database after server starts
    connectDB().catch(error => {
      console.log("❌ Database connection failed:", error.message);
    });
  });
};

server();
