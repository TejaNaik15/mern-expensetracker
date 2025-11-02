const express = require("express");
const usersController = require("../controllers/usersCtrl");

const userRouter = express.Router();

// Define the POST route for user registration
userRouter.post("/register", usersController.register);

// Define the POST route for user login
userRouter.post("/login", usersController.login);

module.exports = userRouter;