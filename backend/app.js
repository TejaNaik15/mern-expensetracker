const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
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

const server = async () => {
  // Start server first
  app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
  });
  
  // Try to connect to database
  try {
    await connectDB();
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed:", error.message);
    console.log("Server running without database connection");
  }
};

server();
