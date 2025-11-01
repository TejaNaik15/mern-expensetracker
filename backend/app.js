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
  // Try to connect to database first
  try {
    await connectDB();
    app.set('dbConnected', true);
  } catch (error) {
    console.log("Database connection failed:", error.message);
    console.log("Server will use mock database for development");
    app.set('dbConnected', false);
  }
  
  // Start server
  app.listen(PORT, () => {
    console.log("Server listening on port:", PORT);
    console.log("Visit http://localhost:8000/api/v1/test to verify server is running");
  });
};

server();
