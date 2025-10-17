const express = require("express");
const usersController = require("../controllers/usersCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const userRouter = express.Router();
<<<<<<< HEAD
//!Register
userRouter.post("/register", usersController.register);
//! Login
userRouter.post("/login", usersController.login);
//!Profile
userRouter.get(
  "/profile",
  isAuthenticated,
  usersController.profile
);
//!change password
userRouter.put(
  "/change-password",
  isAuthenticated,
  usersController.changeUserPassword
);
//!update profile
userRouter.put(
  "/update-profile",
=======

userRouter.post("/api/v1/users/register", usersController.register);

userRouter.post("/api/v1/users/login", usersController.login);

userRouter.get(
  "/api/v1/users/profile",
  isAuthenticated,
  usersController.profile
);

userRouter.put(
  "/api/v1/users/change-password",
  isAuthenticated,
  usersController.changeUserPassword
);

userRouter.put(
  "/api/v1/users/update-profile",
>>>>>>> 1bad5074060df87a1b408861c32e16e0a51579b0
  isAuthenticated,
  usersController.updateUserProfile
);

module.exports = userRouter;