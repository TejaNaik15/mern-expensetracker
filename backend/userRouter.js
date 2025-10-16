const express = require("express");
const { register, login } = require("../controllers/userController");

const userRouter = express.Router();

// Define the POST route for user registration
userRouter.post("/register", register);

// Define the POST route for user login
userRouter.post("/login", login);

module.exports = userRouter;