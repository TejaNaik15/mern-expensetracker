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
// Allow requests from the frontend URL provided via env (use '*' as fallback)
const FRONTEND_URL = process.env.FRONTEND_URL || '*';
app.use(cors({ origin: FRONTEND_URL }));

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

const server = async () => {
  try {
    // Connect to database BEFORE starting server
    await connectDB();
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`📡 API available at http://localhost:${PORT}/api/v1`);
    });
  } catch (error) {
    console.error("❌ Failed to start server:", error.message);
    process.exit(1);
  }
};

server();
