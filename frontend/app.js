const express = require("express");
const userRouter = require("./routes/userRouter");

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// User routes
app.use("/api/v1/users", userRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;