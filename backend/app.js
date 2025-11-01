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

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/transactions", transactionRouter);

// Error handler middleware
app.use(errorHandler);

const server = () => {
  connectDB();
  app.listen(PORT, () => {
    console.log("listening to port:", PORT);
  });
};

server();
