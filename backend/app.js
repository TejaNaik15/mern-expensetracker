<<<<<<< HEAD
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const userRouter = require("./routes/userRouter");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");

const app = express();

// Middlewares
app.use(express.json()); //Pass incoming data
app.use(cors());

// User routes
=======
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRouter = require("./routes/userRouter");
const errorHandler = require("./middlewares/errorHandlerMiddleware");
const categoryRouter = require("./routes/categoryRouter");
const transactionRouter = require("./routes/transactionRouter");
const app = express();

mongoose
  .connect("mongodb://localhost:27017/mern-expenses")
  .then(() => console.log("DB Connected"))
  .catch((e) => console.log(e));


const corsOptions = {
  origin: ["https://mern-expensetracker-frontend-51n5.onrender.com"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.json()); 

>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
app.use("/api/v1/users", userRouter);
app.use("/api/v1/categories", categoryRouter);
app.use("/api/v1/transactions", transactionRouter);

<<<<<<< HEAD
// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 8000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
  } catch (error) {
    console.error("Failed to connect to the database, server did not start.", error);
  }
};

startServer();

module.exports = app;
=======
app.use(errorHandler);


const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`Server is running on this port... ${PORT} `)
);
>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
